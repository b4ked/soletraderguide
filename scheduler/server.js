'use strict'
require('dotenv').config()

const express = require('express')
const fs = require('fs')
const path = require('path')
const crypto = require('crypto')
const { execSync, spawn } = require('child_process')

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3001
const API_KEY = process.env.VPS_API_KEY
const DATA_FILE = path.join(__dirname, 'schedules.json')
const STATUS_FILE = path.join(__dirname, 'status.json')
const LOG_FILE = '/var/log/stg-publish.log'
const SCRIPT_PATH = path.join(__dirname, 'check-and-publish.sh')
const DEFAULT_CRON_EXPRESSION = '*/15 * * * *'
const CRON_MARKER = 'dna-managed-scheduler'
const PAUSED_PREFIX = `# PAUSED ${CRON_MARKER} `

// ─── Auth middleware ────────────────────────────────────────────────────────

function requireAuth(req, res, next) {
  const auth = req.headers['authorization']
  if (!API_KEY) {
    return res.status(500).json({ error: 'VPS_API_KEY not set' })
  }
  if (auth !== `Bearer ${API_KEY}`) {
    return res.status(401).json({ error: 'Unauthorised' })
  }
  next()
}

// ─── Persistence ────────────────────────────────────────────────────────────

function loadSchedules() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'))
    }
  } catch {
    // return empty on corrupt file
  }
  return []
}

function persistSchedules(schedules) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(schedules, null, 2), 'utf8')
}

function loadStatus() {
  try {
    if (fs.existsSync(STATUS_FILE)) {
      return JSON.parse(fs.readFileSync(STATUS_FILE, 'utf8'))
    }
  } catch {}
  return { lastCheck: null, lastResult: null, checksTotal: 0, lastPublished: null, lastDraftPublished: null }
}

function persistStatus(status) {
  fs.writeFileSync(STATUS_FILE, JSON.stringify(status, null, 2), 'utf8')
}

function readCrontabLines() {
  try {
    const output = execSync('crontab -l', {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    })
    return output.split('\n')
  } catch (error) {
    const stderr = String(error.stderr || '')
    if (error.status === 1 && /no crontab/i.test(stderr)) {
      return []
    }
    throw error
  }
}

function parseIntervalMinutes(expression) {
  if (expression === '* * * * *') return 1
  if (expression === '0 * * * *') return 60

  const minuteMatch = expression.match(/^\*\/(\d+)\s+\*\s+\*\s+\*\s+\*$/)
  if (minuteMatch) return parseInt(minuteMatch[1], 10)

  const hourMatch = expression.match(/^0\s+\*\/(\d+)\s+\*\s+\*\s+\*$/)
  if (hourMatch) return parseInt(hourMatch[1], 10) * 60

  const dailyMatch = expression.match(/^0\s+0\s+\*\/(\d+)\s+\*\s+\*$/)
  if (dailyMatch) return parseInt(dailyMatch[1], 10) * 1440

  return null
}

function formatCronLabel(expression) {
  const intervalMinutes = parseIntervalMinutes(expression)
  if (intervalMinutes) {
    if (intervalMinutes === 1) return 'Every minute'
    if (intervalMinutes < 60) return `Every ${intervalMinutes} minutes`
    if (intervalMinutes % 1440 === 0) {
      const days = intervalMinutes / 1440
      return days === 1 ? 'Every day' : `Every ${days} days`
    }
    if (intervalMinutes % 60 === 0) {
      const hours = intervalMinutes / 60
      return hours === 1 ? 'Every hour' : `Every ${hours} hours`
    }
    return `Every ${intervalMinutes} minutes`
  }
  return expression
}

function expressionForIntervalMinutes(minutes) {
  if (!Number.isInteger(minutes) || minutes < 1 || minutes > 720) {
    throw new Error('minutes must be an integer between 1 and 720')
  }

  if (minutes === 1) return '* * * * *'
  if (minutes < 60) return `*/${minutes} * * * *`
  if (minutes === 60) return '0 * * * *'
  if (minutes % 60 === 0) {
    const hours = minutes / 60
    if (hours <= 23) {
      return `0 */${hours} * * *`
    }
  }

  throw new Error('intervals above 59 minutes must be whole hours')
}

function parseManagedCronLine(line) {
  const trimmed = line.trim()
  if (!trimmed) return null

  const isPaused = trimmed.startsWith(PAUSED_PREFIX) || (trimmed.startsWith('#') && trimmed.includes(SCRIPT_PATH))
  const rawLine = trimmed.startsWith(PAUSED_PREFIX)
    ? trimmed.slice(PAUSED_PREFIX.length)
    : trimmed.startsWith('#')
    ? trimmed.replace(/^#\s*/, '')
    : trimmed.replace(new RegExp(`\\s+#\\s*${CRON_MARKER}$`), '')

  const parts = rawLine.trim().split(/\s+/)
  if (parts.length < 6) return null

  const expression = parts.slice(0, 5).join(' ')
  return {
    configured: true,
    running: !isPaused,
    expression,
    intervalMinutes: parseIntervalMinutes(expression),
    label: formatCronLabel(expression),
    command: parts.slice(5).join(' '),
  }
}

function getCronState() {
  const lines = readCrontabLines()
  const matchingLine = lines.find((line) =>
    line.includes(SCRIPT_PATH) || line.includes(CRON_MARKER)
  )

  if (!matchingLine) {
    return {
      configured: false,
      running: false,
      expression: DEFAULT_CRON_EXPRESSION,
      intervalMinutes: parseIntervalMinutes(DEFAULT_CRON_EXPRESSION),
      label: formatCronLabel(DEFAULT_CRON_EXPRESSION),
      command: `${SCRIPT_PATH} >> ${LOG_FILE} 2>&1`,
    }
  }

  return parseManagedCronLine(matchingLine)
}

function persistCronState({ expression, running }) {
  const lines = readCrontabLines().filter(
    (line) => !line.includes(SCRIPT_PATH) && !line.includes(CRON_MARKER)
  )
  const command = `${SCRIPT_PATH} >> ${LOG_FILE} 2>&1`
  const nextLine = running
    ? `${expression} ${command} # ${CRON_MARKER}`
    : `${PAUSED_PREFIX}${expression} ${command}`

  execSync('crontab -', {
    input: [...lines.filter(Boolean), nextLine, ''].join('\n'),
    encoding: 'utf8',
    stdio: ['pipe', 'pipe', 'pipe'],
  })

  return getCronState()
}

function triggerManualCronRun() {
  const child = spawn(SCRIPT_PATH, [], {
    detached: true,
    stdio: 'ignore',
  })
  child.unref()

  return {
    ok: true,
    pid: child.pid,
    startedAt: new Date().toISOString(),
  }
}

// ─── Routes ─────────────────────────────────────────────────────────────────

// Health check (no auth required)
app.get('/health', (_req, res) => {
  const all = loadSchedules()
  const status = loadStatus()
  res.json({
    ok: true,
    total: all.length,
    pending: all.filter((s) => s.status === 'pending').length,
    published: all.filter((s) => s.status === 'published').length,
    lastCheck: status.lastCheck,
  })
})

// GET /api/status — cron health, schedule counts, uptime
app.get('/api/status', requireAuth, (_req, res) => {
  const status = loadStatus()
  const schedules = loadSchedules()
  res.json({
    ...status,
    pending: schedules.filter((s) => s.status === 'pending').length,
    published: schedules.filter((s) => s.status === 'published').length,
    total: schedules.length,
    uptimeSeconds: Math.floor(process.uptime()),
    serverTime: new Date().toISOString(),
    cron: getCronState(),
  })
})

// POST /api/status/ping — called by cron at start and end of each run
app.post('/api/status/ping', requireAuth, (req, res) => {
  const { result, dueFound, draftPublished } = req.body
  const current = loadStatus()
  const updated = {
    lastCheck: new Date().toISOString(),
    lastResult: result || 'ok',
    dueFound: dueFound ?? current.dueFound ?? 0,
    checksTotal: (current.checksTotal || 0) + 1,
    lastPublished: draftPublished ? new Date().toISOString() : current.lastPublished,
    lastDraftPublished: draftPublished || current.lastDraftPublished,
  }
  persistStatus(updated)
  res.json(updated)
})

// GET /api/logs — last N lines of the cron publish log
app.get('/api/logs', requireAuth, (req, res) => {
  const lines = Math.min(parseInt(req.query.lines) || 100, 500)
  try {
    if (!fs.existsSync(LOG_FILE)) {
      return res.json({ lines: [], path: LOG_FILE, exists: false })
    }
    const content = fs.readFileSync(LOG_FILE, 'utf8')
    const allLines = content.split('\n').filter((l) => l.trim())
    res.json({
      lines: allLines.slice(-lines),
      total: allLines.length,
      path: LOG_FILE,
      exists: true,
    })
  } catch (err) {
    res.status(500).json({ error: 'Could not read log file', detail: err.message })
  }
})

// GET /api/cron — current cron state for the managed publish job
app.get('/api/cron', requireAuth, (_req, res) => {
  try {
    res.json(getCronState())
  } catch (err) {
    res.status(500).json({ error: 'Could not read cron state', detail: err.message })
  }
})

// POST /api/cron/pause — pause scheduled cron checks without deleting the entry
app.post('/api/cron/pause', requireAuth, (_req, res) => {
  try {
    const current = getCronState()
    res.json(persistCronState({ expression: current.expression, running: false }))
  } catch (err) {
    res.status(500).json({ error: 'Could not pause cron', detail: err.message })
  }
})

// POST /api/cron/resume — resume scheduled cron checks
app.post('/api/cron/resume', requireAuth, (_req, res) => {
  try {
    const current = getCronState()
    res.json(persistCronState({ expression: current.expression, running: true }))
  } catch (err) {
    res.status(500).json({ error: 'Could not resume cron', detail: err.message })
  }
})

// POST /api/cron/interval — update how often cron checks run, preserving paused/running state
app.post('/api/cron/interval', requireAuth, (req, res) => {
  const minutes = Number(req.body.minutes)

  try {
    const current = getCronState()
    const expression = expressionForIntervalMinutes(minutes)
    res.json(persistCronState({ expression, running: current.running }))
  } catch (err) {
    res.status(500).json({ error: 'Could not update cron interval', detail: err.message })
  }
})

// POST /api/cron/trigger — run the publish script immediately without changing cron state
app.post('/api/cron/trigger', requireAuth, (_req, res) => {
  try {
    res.json(triggerManualCronRun())
  } catch (err) {
    res.status(500).json({ error: 'Could not trigger cron run', detail: err.message })
  }
})

// GET /api/schedules — list all schedules
app.get('/api/schedules', requireAuth, (_req, res) => {
  res.json({ schedules: loadSchedules() })
})

// GET /api/schedules/due — pending schedules where scheduledAt <= now
app.get('/api/schedules/due', requireAuth, (_req, res) => {
  const now = new Date()
  const due = loadSchedules().filter(
    (s) => s.status === 'pending' && new Date(s.scheduledAt) <= now
  )
  res.json(due)
})

// POST /api/schedules — create a new schedule
app.post('/api/schedules', requireAuth, (req, res) => {
  const { draftFile, draftTitle, scheduledAt, notes, priority } = req.body

  if (!draftFile || !scheduledAt) {
    return res.status(400).json({ error: 'draftFile and scheduledAt are required' })
  }

  const schedules = loadSchedules()

  // Prevent duplicate schedules for the same draft file
  const existing = schedules.find((s) => s.draftFile === draftFile && s.status === 'pending')
  if (existing) {
    return res.status(409).json({ error: 'A pending schedule already exists for this draft', existing })
  }

  const schedule = {
    id: crypto.randomUUID(),
    draftFile,
    draftTitle: draftTitle || draftFile,
    scheduledAt,
    status: 'pending',
    priority: priority || 'medium',
    notes: notes || '',
    createdAt: new Date().toISOString(),
    publishedAt: null,
  }

  schedules.push(schedule)
  persistSchedules(schedules)
  res.status(201).json(schedule)
})

// PATCH /api/schedules/:id — update schedule date/notes/priority
app.patch('/api/schedules/:id', requireAuth, (req, res) => {
  const { id } = req.params
  const schedules = loadSchedules()
  const idx = schedules.findIndex((s) => s.id === id)

  if (idx === -1) return res.status(404).json({ error: 'Schedule not found' })

  const { scheduledAt, notes, priority } = req.body
  if (scheduledAt) schedules[idx].scheduledAt = scheduledAt
  if (notes !== undefined) schedules[idx].notes = notes
  if (priority) schedules[idx].priority = priority

  persistSchedules(schedules)
  res.json(schedules[idx])
})

// POST /api/schedules/shift — move all pending schedules forwards/backwards by whole days
app.post('/api/schedules/shift', requireAuth, (req, res) => {
  const days = Number(req.body.days)
  if (!Number.isInteger(days) || days === 0) {
    return res.status(400).json({ error: 'days must be a non-zero integer' })
  }

  const schedules = loadSchedules()
  let updatedCount = 0

  const shifted = schedules.map((schedule) => {
    if (schedule.status !== 'pending') {
      return schedule
    }

    const nextDate = new Date(schedule.scheduledAt)
    nextDate.setUTCDate(nextDate.getUTCDate() + days)
    updatedCount += 1

    return {
      ...schedule,
      scheduledAt: nextDate.toISOString(),
    }
  })

  persistSchedules(shifted)
  res.json({ ok: true, days, updatedCount, schedules: shifted })
})

// DELETE /api/schedules/:id — remove a schedule
app.delete('/api/schedules/:id', requireAuth, (req, res) => {
  const { id } = req.params
  const schedules = loadSchedules()
  const filtered = schedules.filter((s) => s.id !== id)

  if (filtered.length === schedules.length) {
    return res.status(404).json({ error: 'Schedule not found' })
  }

  persistSchedules(filtered)
  res.json({ ok: true })
})

// POST /api/schedules/:id/complete — mark as published (called by cron after pipeline success)
app.post('/api/schedules/:id/complete', requireAuth, (req, res) => {
  const { id } = req.params
  const schedules = loadSchedules()
  const idx = schedules.findIndex((s) => s.id === id)

  if (idx === -1) return res.status(404).json({ error: 'Schedule not found' })

  schedules[idx].status = 'published'
  schedules[idx].publishedAt = new Date().toISOString()

  persistSchedules(schedules)
  res.json(schedules[idx])
})

// ─── Start ───────────────────────────────────────────────────────────────────

app.listen(PORT, '127.0.0.1', () => {
  console.log(`[stg-scheduler] API running on port ${PORT}`)
  console.log(`[stg-scheduler] Data file: ${DATA_FILE}`)
})
