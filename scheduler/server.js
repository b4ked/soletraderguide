'use strict'
require('dotenv').config()

const express = require('express')
const fs = require('fs')
const path = require('path')
const crypto = require('crypto')

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3001
const API_KEY = process.env.VPS_API_KEY
const DATA_FILE = path.join(__dirname, 'schedules.json')

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

// ─── Routes ─────────────────────────────────────────────────────────────────

// Health check (no auth required)
app.get('/health', (_req, res) => {
  const all = loadSchedules()
  res.json({
    ok: true,
    total: all.length,
    pending: all.filter((s) => s.status === 'pending').length,
    published: all.filter((s) => s.status === 'published').length,
  })
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
