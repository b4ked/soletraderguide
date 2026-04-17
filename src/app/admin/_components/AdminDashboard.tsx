'use client'

import { useState, useEffect, useCallback } from 'react'
import type { DraftMeta } from '@/app/api/admin/drafts/route'
import type { PublishedMeta } from '@/app/api/admin/published/route'
import { siteConfig } from '@/data/site-config'

// Per-site admin links — configured via NEXT_PUBLIC_ env vars in Vercel
const VERCEL_PROJECT_URL = process.env.NEXT_PUBLIC_VERCEL_PROJECT_URL ?? ''
const GITHUB_REPO_URL = process.env.NEXT_PUBLIC_GITHUB_REPO_URL ?? ''

type Tab = 'overview' | 'drafts' | 'published' | 'analytics' | 'vps' | 'links'

interface Schedule {
  [slug: string]: {
    id?: string
    targetDate: string
    notes: string
    priority: 'high' | 'medium' | 'low'
    status?: 'pending' | 'published'
  }
}

interface DeploymentMeta {
  uid: string
  url: string
  state: string
  createdAt: number
  meta?: { githubCommitMessage?: string; githubCommitRef?: string }
}

interface AnalyticsData {
  error?: string
  details?: string
  message?: string
  deployments?: DeploymentMeta[]
}

interface VpsSchedule {
  id: string
  draftFile: string
  draftTitle: string
  scheduledAt: string
  status: 'pending' | 'published'
  priority: 'high' | 'medium' | 'low'
  notes: string
  createdAt: string
  publishedAt: string | null
}

interface VpsStatus {
  lastCheck: string | null
  lastResult: string | null
  checksTotal: number
  dueFound: number
  lastPublished: string | null
  lastDraftPublished: string | null
  pending: number
  published: number
  total: number
  uptimeSeconds: number
  serverTime: string
}

interface VpsData {
  error?: string
  status?: VpsStatus
  schedules?: VpsSchedule[]
}

function daysSince(dateStr: string): number {
  if (!dateStr) return 0
  const date = new Date(dateStr)
  return Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60 * 24))
}

function formatDate(dateStr: string): string {
  if (!dateStr) return '—'
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

function formatDateTime(isoStr: string): string {
  if (!isoStr) return '—'
  return (
    new Date(isoStr).toLocaleString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'UTC',
    }) + ' UTC'
  )
}

function timeAgo(isoStr: string): string {
  if (!isoStr) return 'never'
  const diff = Date.now() - new Date(isoStr).getTime()
  const mins = Math.floor(diff / 60000)
  if (mins < 1) return 'just now'
  if (mins < 60) return `${mins}m ago`
  const hours = Math.floor(mins / 60)
  if (hours < 24) return `${hours}h ago`
  return `${Math.floor(hours / 24)}d ago`
}

function uptimeStr(seconds: number): string {
  if (seconds < 60) return `${seconds}s`
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m`
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ${Math.floor((seconds % 3600) / 60)}m`
  return `${Math.floor(seconds / 86400)}d ${Math.floor((seconds % 86400) / 3600)}h`
}

function CategoryBadge({ category }: { category: string }) {
  const colours: Record<string, string> = {
    'mtd-news': 'bg-blue-100 text-blue-700',
    'software-guides': 'bg-purple-100 text-purple-700',
    'tax-tips': 'bg-amber-100 text-amber-700',
    'mtd-guides': 'bg-green-100 text-green-700',
  }
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${colours[category] ?? 'bg-gray-100 text-gray-600'}`}
    >
      {category || 'uncategorised'}
    </span>
  )
}

function PriorityBadge({ priority }: { priority: string }) {
  const colours: Record<string, string> = {
    high: 'bg-red-100 text-red-700',
    medium: 'bg-amber-100 text-amber-700',
    low: 'bg-gray-100 text-gray-600',
  }
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${colours[priority] ?? 'bg-gray-100 text-gray-600'}`}
    >
      {priority}
    </span>
  )
}

// ─── Schedule Modal ────────────────────────────────────────────────────────────

function ScheduleModal({
  draft,
  existing,
  onSave,
  onClose,
}: {
  draft: DraftMeta
  existing?: Schedule[string]
  onSave: (slug: string, data: Schedule[string]) => void
  onClose: () => void
}) {
  const initDateTime = existing?.targetDate
    ? existing.targetDate.includes('T')
      ? existing.targetDate
      : existing.targetDate + 'T09:00'
    : ''
  const [targetDate, setTargetDate] = useState(initDateTime)
  const [notes, setNotes] = useState(existing?.notes ?? '')
  const [priority, setPriority] = useState<'high' | 'medium' | 'low'>(
    existing?.priority ?? 'medium'
  )

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-base font-semibold text-gray-900">
              Schedule Draft
            </h3>
            <p className="mt-0.5 text-sm text-gray-500 line-clamp-1">
              {draft.title}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 ml-4"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Publish date &amp; time <span className="text-gray-400 font-normal">(UTC)</span>
            </label>
            <input
              type="datetime-local"
              value={targetDate}
              onChange={(e) => setTargetDate(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm focus:border-[#0d6e6e] focus:outline-none focus:ring-2 focus:ring-[#0d6e6e]/20"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Priority
            </label>
            <select
              value={priority}
              onChange={(e) =>
                setPriority(e.target.value as 'high' | 'medium' | 'low')
              }
              className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm focus:border-[#0d6e6e] focus:outline-none focus:ring-2 focus:ring-[#0d6e6e]/20"
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Notes
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm focus:border-[#0d6e6e] focus:outline-none focus:ring-2 focus:ring-[#0d6e6e]/20 resize-none"
              placeholder="Optional notes…"
            />
          </div>

          <div className="bg-blue-50 rounded-lg p-3 text-xs text-blue-700">
            <strong>Note:</strong> Schedule is saved to the VPS and checked every 15 minutes. When due, Claude Code will automatically run the full Write-Up → SEO → QA → publish pipeline. Enter time in UTC.
          </div>
        </div>

        <div className="mt-6 flex gap-3 justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onSave(draft.slug, { targetDate, notes, priority })
              onClose()
            }}
            disabled={!targetDate}
            className="rounded-lg bg-[#0d6e6e] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0a5a5a] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Save schedule
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Main Dashboard ────────────────────────────────────────────────────────────

export default function AdminDashboard() {
  const [tab, setTab] = useState<Tab>('overview')
  const [drafts, setDrafts] = useState<DraftMeta[]>([])
  const [published, setPublished] = useState<PublishedMeta[]>([])
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null)
  const [analyticsLoading, setAnalyticsLoading] = useState(false)
  const [vpsData, setVpsData] = useState<VpsData | null>(null)
  const [vpsLoading, setVpsLoading] = useState(false)
  const [vpsLogs, setVpsLogs] = useState<string[]>([])
  const [vpsLogsLoading, setVpsLogsLoading] = useState(false)
  const [schedule, setSchedule] = useState<Schedule>({})
  const [schedulingDraft, setSchedulingDraft] = useState<DraftMeta | null>(null)
  const [draftSearch, setDraftSearch] = useState('')
  const [loading, setLoading] = useState(true)

  function draftScheduleKey(draft: DraftMeta): string {
    return draft.scheduleKey ?? draft.filename.replace(/\.(mdx?)$/, '')
  }

  // Load schedules from VPS API on mount
  useEffect(() => {
    async function loadSchedules() {
      try {
        const res = await fetch('/api/admin/schedules')
        if (!res.ok) return
        const data = await res.json()
        const map: Schedule = {}
        for (const s of data.schedules ?? []) {
          const scheduleKey = (s.draftFile as string).replace(/\.(mdx?)$/, '')
          map[scheduleKey] = {
            id: s.id,
            targetDate: (s.scheduledAt as string).split('T')[0],
            notes: s.notes ?? '',
            priority: s.priority ?? 'medium',
            status: s.status,
          }
        }
        setSchedule(map)
      } catch {
        // VPS not configured — schedules unavailable
      }
    }
    loadSchedules()
  }, [])

  // Fetch drafts + published on mount
  useEffect(() => {
    async function loadData() {
      setLoading(true)
      try {
        const [draftsRes, publishedRes] = await Promise.all([
          fetch('/api/admin/drafts'),
          fetch('/api/admin/published'),
        ])
        const draftsData = await draftsRes.json()
        const publishedData = await publishedRes.json()
        setDrafts(draftsData.drafts ?? [])
        setPublished(publishedData.posts ?? [])
      } catch (e) {
        console.error('Failed to load data:', e)
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])

  // Fetch analytics when analytics tab is opened
  const loadAnalytics = useCallback(async () => {
    if (analytics || analyticsLoading) return
    setAnalyticsLoading(true)
    try {
      const res = await fetch('/api/admin/analytics?days=30')
      const data = await res.json()
      setAnalytics(data)
    } catch {
      setAnalytics({ error: 'Failed to fetch analytics' })
    } finally {
      setAnalyticsLoading(false)
    }
  }, [analytics, analyticsLoading])

  useEffect(() => {
    if (tab === 'analytics') loadAnalytics()
  }, [tab, loadAnalytics])

  const loadVpsData = useCallback(async () => {
    if (vpsData || vpsLoading) return
    setVpsLoading(true)
    try {
      const res = await fetch('/api/admin/vps')
      const data = await res.json()
      setVpsData(data)
    } catch {
      setVpsData({ error: 'Could not reach VPS' })
    } finally {
      setVpsLoading(false)
    }
  }, [vpsData, vpsLoading])

  const loadVpsLogs = useCallback(async () => {
    if (vpsLogs.length || vpsLogsLoading) return
    setVpsLogsLoading(true)
    try {
      const res = await fetch('/api/admin/vps/logs?lines=100')
      const data = await res.json()
      setVpsLogs(data.lines ?? [])
    } catch {
      setVpsLogs(['Could not fetch logs.'])
    } finally {
      setVpsLogsLoading(false)
    }
  }, [vpsLogs.length, vpsLogsLoading])

  useEffect(() => {
    if (tab === 'vps') {
      loadVpsData()
      loadVpsLogs()
    }
  }, [tab, loadVpsData, loadVpsLogs])

  async function saveSchedule(scheduleKey: string, data: Schedule[string]) {
    const draft = drafts.find((d) => draftScheduleKey(d) === scheduleKey)
    if (!draft) return
    if (!data.targetDate) return
    const existing = schedule[scheduleKey]
    // datetime-local gives "YYYY-MM-DDTHH:mm" — append seconds+Z to treat as UTC
    const scheduledAt = data.targetDate.includes('T')
      ? data.targetDate + ':00.000Z'
      : data.targetDate + 'T09:00:00.000Z'

    try {
      if (existing?.id) {
        const res = await fetch(`/api/admin/schedules/${existing.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ scheduledAt, notes: data.notes, priority: data.priority }),
        })
        if (!res.ok) return
        setSchedule((prev) => ({
          ...prev,
          [scheduleKey]: { ...prev[scheduleKey], ...data },
        }))
      } else {
        const res = await fetch('/api/admin/schedules', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            draftFile: draft.filename,
            draftTitle: draft.title,
            scheduledAt,
            notes: data.notes,
            priority: data.priority,
          }),
        })
        if (!res.ok) {
          if (res.status === 409) {
            alert('A pending schedule already exists for this draft. Remove the existing schedule first or edit it.')
          }
          return
        }
        const created = await res.json()
        setSchedule((prev) => ({
          ...prev,
          [scheduleKey]: { ...data, id: created.id, status: 'pending' },
        }))
        // Refresh VPS data so the VPS tab shows the new schedule
        setVpsData(null)
      }
    } catch {
      // API not available
    }
  }

  async function clearSchedule(scheduleKey: string) {
    const existing = schedule[scheduleKey]
    if (existing?.id) {
      try {
        await fetch(`/api/admin/schedules/${existing.id}`, { method: 'DELETE' })
      } catch {
        // API not available
      }
    }
    setSchedule((prev) => {
      const updated = { ...prev }
      delete updated[scheduleKey]
      return updated
    })
  }

  const staleDrafts = drafts.filter((d) => daysSince(d.lastModified) > 30)
  const stalePublished = published.filter((p) => daysSince(p.updatedAt) > 60)
  const scheduledDrafts = drafts.filter((d) => {
    const sched = schedule[draftScheduleKey(d)]
    return sched?.targetDate && sched.status !== 'published'
  })
  const lastPublished = published[0]

  const filteredDrafts = drafts.filter(
    (d) =>
      !draftSearch ||
      d.title.toLowerCase().includes(draftSearch.toLowerCase()) ||
      d.filename.toLowerCase().includes(draftSearch.toLowerCase()) ||
      d.focusKeyword.toLowerCase().includes(draftSearch.toLowerCase())
  )

  const tabs: { id: Tab; label: string; count?: number }[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'drafts', label: 'Drafts', count: drafts.length },
    { id: 'published', label: 'Published', count: published.length },
    { id: 'analytics', label: 'Analytics' },
    { id: 'vps', label: 'VPS' },
    { id: 'links', label: 'Quick Links' },
  ]

  return (
    <>
      {/* Stats bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Published', value: published.length, colour: 'text-green-600' },
          { label: 'Drafts', value: drafts.length, colour: 'text-blue-600' },
          {
            label: 'Scheduled',
            value: scheduledDrafts.length,
            colour: 'text-purple-600',
          },
          {
            label: 'Last published',
            value: lastPublished
              ? formatDate(lastPublished.publishedAt)
              : '—',
            colour: 'text-gray-900',
          },
        ].map((s) => (
          <div
            key={s.label}
            className="bg-white rounded-xl border border-gray-200 px-5 py-4"
          >
            <p className="text-xs font-medium text-gray-500">{s.label}</p>
            <p className={`mt-1 text-2xl font-bold ${s.colour}`}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <div className="flex border-b border-gray-200 overflow-x-auto">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex-none px-5 py-3.5 text-sm font-medium whitespace-nowrap transition-colors border-b-2 -mb-px ${
                tab === t.id
                  ? 'border-[#0d6e6e] text-[#0d6e6e]'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {t.label}
              {t.count !== undefined && (
                <span
                  className={`ml-2 rounded-full px-2 py-0.5 text-xs ${
                    tab === t.id
                      ? 'bg-[#e6f3f3] text-[#0d6e6e]'
                      : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  {t.count}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="p-6">
          {loading && tab !== 'analytics' && tab !== 'links' && tab !== 'vps' ? (
            <div className="py-12 text-center text-sm text-gray-400">
              Loading…
            </div>
          ) : (
            <>
              {/* ─── OVERVIEW ─── */}
              {tab === 'overview' && (
                <div className="space-y-6">
                  {/* Health warnings */}
                  {(staleDrafts.length > 0 || stalePublished.length > 0) && (
                    <div className="space-y-2">
                      <h2 className="text-sm font-semibold text-gray-700">
                        Content Health
                      </h2>
                      {staleDrafts.length > 0 && (
                        <div className="flex items-center gap-2.5 rounded-lg bg-amber-50 border border-amber-200 px-4 py-3 text-sm text-amber-800">
                          <span>⚠</span>
                          <span>
                            <strong>{staleDrafts.length} draft
                            {staleDrafts.length !== 1 ? 's' : ''}</strong> not
                            modified in over 30 days
                          </span>
                        </div>
                      )}
                      {stalePublished.length > 0 && (
                        <div className="flex items-center gap-2.5 rounded-lg bg-blue-50 border border-blue-200 px-4 py-3 text-sm text-blue-800">
                          <span>ℹ</span>
                          <span>
                            <strong>{stalePublished.length} published post
                            {stalePublished.length !== 1 ? 's' : ''}</strong>{' '}
                            not updated in over 60 days
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Scheduled drafts */}
                  {scheduledDrafts.length > 0 && (
                    <div>
                      <h2 className="text-sm font-semibold text-gray-700 mb-3">
                        Scheduled ({scheduledDrafts.length})
                      </h2>
                      <div className="rounded-xl border border-gray-200 overflow-hidden">
                        <table className="w-full text-sm">
                          <thead className="bg-gray-50 text-xs font-medium text-gray-500">
                            <tr>
                              <th className="px-4 py-3 text-left">Title</th>
                              <th className="px-4 py-3 text-left">Category</th>
                              <th className="px-4 py-3 text-left">Target date</th>
                              <th className="px-4 py-3 text-left">Priority</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                            {scheduledDrafts
                              .sort((a, b) => {
                                const da = schedule[draftScheduleKey(a)]?.targetDate ?? ''
                                const db = schedule[draftScheduleKey(b)]?.targetDate ?? ''
                                return da.localeCompare(db)
                              })
                              .map((d) => (
                                <tr
                                  key={d.scheduleKey}
                                  className="hover:bg-gray-50 transition-colors"
                                >
                                  <td className="px-4 py-3 font-medium text-gray-900">
                                    {d.title}
                                  </td>
                                  <td className="px-4 py-3">
                                    <CategoryBadge category={d.category} />
                                  </td>
                                  <td className="px-4 py-3 text-gray-600">
                                    {formatDate(
                                      schedule[draftScheduleKey(d)]?.targetDate ?? ''
                                    )}
                                  </td>
                                  <td className="px-4 py-3">
                                    <PriorityBadge
                                      priority={
                                        schedule[draftScheduleKey(d)]?.priority ?? 'medium'
                                      }
                                    />
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Recent drafts */}
                  <div>
                    <h2 className="text-sm font-semibold text-gray-700 mb-3">
                      All Drafts ({drafts.length})
                    </h2>
                    <div className="rounded-xl border border-gray-200 overflow-hidden">
                      <table className="w-full text-sm">
                        <thead className="bg-gray-50 text-xs font-medium text-gray-500">
                          <tr>
                            <th className="px-4 py-3 text-left">File</th>
                            <th className="px-4 py-3 text-left">Title</th>
                            <th className="px-4 py-3 text-left">Words</th>
                            <th className="px-4 py-3 text-left">Scheduled</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {drafts.slice(0, 8).map((d) => (
                            <tr
                              key={d.scheduleKey}
                              className="hover:bg-gray-50 transition-colors"
                            >
                              <td className="px-4 py-3 text-xs text-gray-500 font-mono max-w-[180px] truncate">
                                {d.filename}
                              </td>
                              <td className="px-4 py-3 font-medium text-gray-900 max-w-xs truncate">
                                {d.title}
                              </td>
                              <td className="px-4 py-3 text-gray-500">
                                {d.wordCount.toLocaleString()}
                              </td>
                              <td className="px-4 py-3 text-xs text-gray-500">
                                {schedule[draftScheduleKey(d)]?.targetDate
                                  ? formatDate(schedule[draftScheduleKey(d)]!.targetDate)
                                  : '—'}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* ─── DRAFTS ─── */}
              {tab === 'drafts' && (
                <div>
                  <div className="mb-4">
                    <input
                      type="search"
                      placeholder="Search drafts by title, filename, or keyword…"
                      value={draftSearch}
                      onChange={(e) => setDraftSearch(e.target.value)}
                      className="w-full sm:max-w-sm rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm focus:border-[#0d6e6e] focus:outline-none focus:ring-2 focus:ring-[#0d6e6e]/20"
                    />
                  </div>

                  <div className="rounded-xl border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm min-w-[700px]">
                        <thead className="bg-gray-50 text-xs font-medium text-gray-500">
                          <tr>
                            <th className="px-4 py-3 text-left">File</th>
                            <th className="px-4 py-3 text-left">Title</th>
                            <th className="px-4 py-3 text-left">Words</th>
                            <th className="px-4 py-3 text-left">Scheduled</th>
                            <th className="px-4 py-3 text-left">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {filteredDrafts.length === 0 ? (
                            <tr>
                              <td
                                colSpan={5}
                                className="px-4 py-8 text-center text-gray-400"
                              >
                                No drafts found
                              </td>
                            </tr>
                          ) : (
                            filteredDrafts.map((d) => {
                              const sched = schedule[draftScheduleKey(d)]
                              return (
                                <tr
                                  key={d.scheduleKey}
                                  className="hover:bg-gray-50 transition-colors"
                                >
                                  <td className="px-4 py-3 text-xs text-gray-500 font-mono max-w-[180px] truncate">
                                    {d.filename}
                                  </td>
                                  <td className="px-4 py-3">
                                    <div className="font-medium text-gray-900 max-w-xs truncate">
                                      {d.title}
                                    </div>
                                    {d.focusKeyword && (
                                      <div className="text-xs text-gray-400 mt-0.5 truncate max-w-xs">
                                        {d.focusKeyword}
                                      </div>
                                    )}
                                  </td>
                                  <td className="px-4 py-3 text-gray-600">
                                    {d.wordCount.toLocaleString()}
                                  </td>
                                  <td className="px-4 py-3">
                                    {sched?.targetDate ? (
                                      <div className="text-xs space-y-1">
                                        <div className="text-gray-700 font-medium">
                                          {formatDate(sched.targetDate)}
                                        </div>
                                        <div className="flex items-center gap-1 flex-wrap">
                                          <PriorityBadge priority={sched.priority} />
                                          {sched.status === 'published' ? (
                                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-700">
                                              Published
                                            </span>
                                          ) : sched.targetDate < new Date().toISOString().split('T')[0] ? (
                                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-700">
                                              Due
                                            </span>
                                          ) : (
                                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-700">
                                              Scheduled
                                            </span>
                                          )}
                                        </div>
                                      </div>
                                    ) : (
                                      <span className="text-gray-400 text-xs">
                                        Not scheduled
                                      </span>
                                    )}
                                  </td>
                                  <td className="px-4 py-3">
                                    <div className="flex items-center gap-2">
                                      <button
                                        onClick={() => setSchedulingDraft(d)}
                                        className="text-xs text-[#0d6e6e] hover:text-[#0a5a5a] font-medium"
                                      >
                                        {sched ? 'Edit' : 'Schedule'}
                                      </button>
                                      {sched && (
                                        <button
                                          onClick={() => clearSchedule(draftScheduleKey(d))}
                                          className="text-xs text-gray-400 hover:text-red-500"
                                        >
                                          Clear
                                        </button>
                                      )}
                                    </div>
                                  </td>
                                </tr>
                              )
                            })
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {filteredDrafts.length > 0 && (
                    <p className="mt-2 text-xs text-gray-400">
                      {filteredDrafts.length} of {drafts.length} drafts shown
                    </p>
                  )}
                </div>
              )}

              {/* ─── PUBLISHED ─── */}
              {tab === 'published' && (
                <div>
                  <div className="rounded-xl border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm min-w-[700px]">
                        <thead className="bg-gray-50 text-xs font-medium text-gray-500">
                          <tr>
                            <th className="px-4 py-3 text-left">Title</th>
                            <th className="px-4 py-3 text-left">Category</th>
                            <th className="px-4 py-3 text-left">Published</th>
                            <th className="px-4 py-3 text-left">Updated</th>
                            <th className="px-4 py-3 text-left">Words</th>
                            <th className="px-4 py-3 text-left">Affiliate</th>
                            <th className="px-4 py-3 text-left">Link</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {published.length === 0 ? (
                            <tr>
                              <td
                                colSpan={7}
                                className="px-4 py-8 text-center text-gray-400"
                              >
                                No published posts
                              </td>
                            </tr>
                          ) : (
                            published.map((p) => {
                              const isStale = daysSince(p.updatedAt) > 60
                              return (
                                <tr
                                  key={p.slug}
                                  className={`hover:bg-gray-50 transition-colors ${isStale ? 'bg-blue-50/30' : ''}`}
                                >
                                  <td className="px-4 py-3">
                                    <div className="font-medium text-gray-900 max-w-xs">
                                      {isStale && (
                                        <span className="mr-1.5 text-blue-400 text-xs">
                                          ℹ
                                        </span>
                                      )}
                                      {p.title}
                                    </div>
                                  </td>
                                  <td className="px-4 py-3">
                                    <CategoryBadge category={p.category} />
                                  </td>
                                  <td className="px-4 py-3 text-xs text-gray-500">
                                    {formatDate(p.publishedAt)}
                                  </td>
                                  <td className="px-4 py-3 text-xs text-gray-500">
                                    {formatDate(p.updatedAt)}
                                  </td>
                                  <td className="px-4 py-3 text-gray-600">
                                    {p.wordCount.toLocaleString()}
                                  </td>
                                  <td className="px-4 py-3">
                                    {p.affiliateDisclosure ? (
                                      <span className="text-xs text-purple-600 bg-purple-50 px-2 py-0.5 rounded font-medium">
                                        Yes
                                      </span>
                                    ) : (
                                      <span className="text-xs text-gray-400">
                                        —
                                      </span>
                                    )}
                                  </td>
                                  <td className="px-4 py-3">
                                    <a
                                      href={p.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-xs text-[#0d6e6e] hover:text-[#0a5a5a] font-medium"
                                    >
                                      View ↗
                                    </a>
                                  </td>
                                </tr>
                              )
                            })
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* ─── ANALYTICS ─── */}
              {tab === 'analytics' && (
                <div className="space-y-6">
                  {/* Notice: no public API */}
                  <div className="rounded-xl bg-blue-50 border border-blue-200 p-5">
                    <h3 className="text-sm font-semibold text-blue-900 mb-1">
                      Vercel Analytics has no public REST API
                    </h3>
                    <p className="text-sm text-blue-700">
                      Vercel does not expose Web Analytics data (page views, visitors,
                      top pages) via a documented REST API — it is dashboard-only.
                      Use the link below to view analytics directly in Vercel.
                    </p>
                  </div>

                  {/* Primary CTA */}
                  <a
                    href={VERCEL_PROJECT_URL ? `${VERCEL_PROJECT_URL}/analytics` : 'https://vercel.com'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl bg-black text-white px-6 py-4 text-sm font-medium hover:bg-gray-800 transition-colors w-fit"
                  >
                    <svg className="w-4 h-4 flex-none" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 22.525H0l12-21.05 12 21.05z" />
                    </svg>
                    Open Vercel Analytics dashboard ↗
                  </a>

                  {/* Recent deployments — uses the real Vercel REST API */}
                  <div>
                    <h2 className="text-sm font-semibold text-gray-700 mb-3">
                      Recent Deployments
                    </h2>
                    {analyticsLoading ? (
                      <p className="text-sm text-gray-400">Loading…</p>
                    ) : analytics?.error ? (
                      <div className="rounded-xl bg-amber-50 border border-amber-200 p-4 text-sm text-amber-700">
                        {analytics.error}
                        {analytics.details && (
                          <pre className="mt-2 text-xs bg-amber-100 rounded p-2 overflow-x-auto whitespace-pre-wrap">
                            {analytics.details}
                          </pre>
                        )}
                      </div>
                    ) : (
                      <div className="rounded-xl border border-gray-200 overflow-hidden">
                        <table className="w-full text-sm">
                          <thead className="bg-gray-50 text-xs font-medium text-gray-500">
                            <tr>
                              <th className="px-4 py-3 text-left">Status</th>
                              <th className="px-4 py-3 text-left">Commit message</th>
                              <th className="px-4 py-3 text-left">Branch</th>
                              <th className="px-4 py-3 text-left">Date</th>
                              <th className="px-4 py-3 text-left">URL</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                            {(analytics?.deployments ?? []).length === 0 ? (
                              <tr>
                                <td colSpan={5} className="px-4 py-8 text-center text-gray-400 text-xs">
                                  No deployments found — add VERCEL_TOKEN to env vars to enable this.
                                </td>
                              </tr>
                            ) : (
                              (analytics?.deployments ?? []).map((d) => (
                                <tr key={d.uid} className="hover:bg-gray-50 transition-colors">
                                  <td className="px-4 py-3">
                                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                                      d.state === 'READY'
                                        ? 'bg-green-100 text-green-700'
                                        : d.state === 'ERROR' || d.state === 'CANCELED'
                                        ? 'bg-red-100 text-red-700'
                                        : 'bg-gray-100 text-gray-600'
                                    }`}>
                                      {d.state}
                                    </span>
                                  </td>
                                  <td className="px-4 py-3 text-gray-700 max-w-xs truncate">
                                    {d.meta?.githubCommitMessage ?? '—'}
                                  </td>
                                  <td className="px-4 py-3 text-gray-500 text-xs">
                                    {d.meta?.githubCommitRef ?? '—'}
                                  </td>
                                  <td className="px-4 py-3 text-gray-500 text-xs">
                                    {new Date(d.createdAt).toLocaleDateString('en-GB', {
                                      day: 'numeric', month: 'short', year: 'numeric',
                                    })}
                                  </td>
                                  <td className="px-4 py-3">
                                    <a
                                      href={`https://${d.url}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-xs text-[#0d6e6e] hover:text-[#0a5a5a] font-medium"
                                    >
                                      View ↗
                                    </a>
                                  </td>
                                </tr>
                              ))
                            )}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>

                  {/* Future: Plausible */}
                  <div className="rounded-xl bg-gray-50 border border-gray-200 p-5">
                    <h3 className="text-sm font-semibold text-gray-700 mb-1">
                      Future: Plausible Analytics
                    </h3>
                    <p className="text-sm text-gray-500">
                      The CLAUDE.md Phase 2 plan recommends migrating to{' '}
                      <strong>Plausible Analytics</strong> (privacy-friendly, UK GDPR
                      compliant, full REST API). Once connected, this tab will show live
                      page views, top pages, referrers, and devices directly here.
                    </p>
                  </div>
                </div>
              )}

              {/* ─── VPS ─── */}
              {tab === 'vps' && (
                <div className="space-y-6">
                  {vpsLoading ? (
                    <div className="py-12 text-center text-sm text-gray-400">Loading VPS data…</div>
                  ) : vpsData?.error ? (
                    <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-700">
                      {vpsData.error}
                    </div>
                  ) : (
                    <>
                      {/* Status cards */}
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h2 className="text-sm font-semibold text-gray-700">Scheduler Status</h2>
                          <button
                            onClick={() => { setVpsData(null); setVpsLogs([]) }}
                            className="text-xs text-[#0d6e6e] hover:text-[#0a5a5a] font-medium"
                          >
                            Refresh
                          </button>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {[
                            {
                              label: 'Last cron check',
                              value: vpsData?.status?.lastCheck ? timeAgo(vpsData.status.lastCheck) : 'never',
                              sub: vpsData?.status?.lastCheck ? formatDateTime(vpsData.status.lastCheck) : undefined,
                              colour: 'text-gray-900',
                            },
                            {
                              label: 'Last result',
                              value: vpsData?.status?.lastResult ?? '—',
                              colour:
                                vpsData?.status?.lastResult === 'published'
                                  ? 'text-green-600'
                                  : vpsData?.status?.lastResult === 'error'
                                  ? 'text-red-600'
                                  : 'text-gray-900',
                            },
                            {
                              label: 'Total checks',
                              value: vpsData?.status?.checksTotal?.toLocaleString() ?? '—',
                              colour: 'text-blue-600',
                            },
                            {
                              label: 'Server uptime',
                              value: vpsData?.status?.uptimeSeconds != null
                                ? uptimeStr(vpsData.status.uptimeSeconds)
                                : '—',
                              colour: 'text-gray-900',
                            },
                            {
                              label: 'Pending schedules',
                              value: vpsData?.status?.pending ?? '—',
                              colour: 'text-purple-600',
                            },
                            {
                              label: 'Published via VPS',
                              value: vpsData?.status?.published ?? '—',
                              colour: 'text-green-600',
                            },
                            {
                              label: 'Last published',
                              value: vpsData?.status?.lastPublished ? timeAgo(vpsData.status.lastPublished) : 'never',
                              sub: vpsData?.status?.lastDraftPublished ?? undefined,
                              colour: 'text-gray-900',
                            },
                            {
                              label: 'Server time',
                              value: vpsData?.status?.serverTime
                                ? new Date(vpsData.status.serverTime).toLocaleTimeString('en-GB', { timeZone: 'UTC', hour: '2-digit', minute: '2-digit' }) + ' UTC'
                                : '—',
                              colour: 'text-gray-900',
                            },
                          ].map((s) => (
                            <div key={s.label} className="bg-gray-50 rounded-xl border border-gray-200 px-4 py-3">
                              <p className="text-xs font-medium text-gray-500">{s.label}</p>
                              <p className={`mt-1 text-lg font-bold ${s.colour}`}>{s.value}</p>
                              {s.sub && <p className="text-xs text-gray-400 truncate mt-0.5">{s.sub}</p>}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* All schedules */}
                      <div>
                        <h2 className="text-sm font-semibold text-gray-700 mb-3">All Schedules</h2>
                        <div className="rounded-xl border border-gray-200 overflow-hidden">
                          <div className="overflow-x-auto">
                            <table className="w-full text-sm min-w-[600px]">
                              <thead className="bg-gray-50 text-xs font-medium text-gray-500">
                                <tr>
                                  <th className="px-4 py-3 text-left">Draft</th>
                                  <th className="px-4 py-3 text-left">Scheduled for</th>
                                  <th className="px-4 py-3 text-left">Status</th>
                                  <th className="px-4 py-3 text-left">Priority</th>
                                  <th className="px-4 py-3 text-left">Published at</th>
                                  <th className="px-4 py-3 text-left">Created</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-100">
                                {(vpsData?.schedules ?? []).length === 0 ? (
                                  <tr>
                                    <td colSpan={6} className="px-4 py-8 text-center text-gray-400">
                                      No schedules found
                                    </td>
                                  </tr>
                                ) : (
                                  [...(vpsData?.schedules ?? [])]
                                    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                                    .map((s) => (
                                      <tr key={s.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-4 py-3">
                                          <p className="font-medium text-gray-900 max-w-xs truncate">{s.draftTitle}</p>
                                          <p className="text-xs text-gray-400 font-mono">{s.draftFile}</p>
                                        </td>
                                        <td className="px-4 py-3 text-xs text-gray-600 whitespace-nowrap">
                                          {formatDateTime(s.scheduledAt)}
                                        </td>
                                        <td className="px-4 py-3">
                                          <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                                            s.status === 'published'
                                              ? 'bg-green-100 text-green-700'
                                              : new Date(s.scheduledAt) < new Date()
                                              ? 'bg-amber-100 text-amber-700'
                                              : 'bg-blue-100 text-blue-700'
                                          }`}>
                                            {s.status === 'published' ? 'Published' : new Date(s.scheduledAt) < new Date() ? 'Due' : 'Pending'}
                                          </span>
                                        </td>
                                        <td className="px-4 py-3">
                                          <PriorityBadge priority={s.priority} />
                                        </td>
                                        <td className="px-4 py-3 text-xs text-gray-500 whitespace-nowrap">
                                          {s.publishedAt ? formatDateTime(s.publishedAt) : '—'}
                                        </td>
                                        <td className="px-4 py-3 text-xs text-gray-500 whitespace-nowrap">
                                          {formatDateTime(s.createdAt)}
                                        </td>
                                      </tr>
                                    ))
                                )}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Cron log */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h2 className="text-sm font-semibold text-gray-700">
                        Cron Log <span className="font-normal text-gray-400">(last 100 lines)</span>
                      </h2>
                      <button
                        onClick={() => setVpsLogs([])}
                        className="text-xs text-[#0d6e6e] hover:text-[#0a5a5a] font-medium"
                      >
                        Refresh
                      </button>
                    </div>
                    {vpsLogsLoading ? (
                      <div className="text-sm text-gray-400">Loading logs…</div>
                    ) : vpsLogs.length === 0 ? (
                      <p className="text-sm text-gray-500">No log entries found.</p>
                    ) : (
                      <div className="bg-gray-950 rounded-xl overflow-hidden">
                        <div className="overflow-y-auto max-h-96 p-4 font-mono text-xs text-gray-300 space-y-0.5">
                          {[...vpsLogs].reverse().map((line, i) => (
                              <p
                                key={i}
                                className={
                                  line.includes('PUBLISHED') || line.includes('published')
                                    ? 'text-green-400'
                                    : line.includes('ERROR') || line.includes('error')
                                    ? 'text-red-400'
                                    : line.includes('WARNING') || line.includes('skipping')
                                    ? 'text-amber-400'
                                    : line.includes('Cloning') || line.includes('pipeline')
                                    ? 'text-blue-300'
                                    : 'text-gray-300'
                                }
                              >
                                {line}
                              </p>
                            ))
                          }
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* ─── QUICK LINKS ─── */}
              {tab === 'links' && (
                <div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      {
                        label: 'Vercel Dashboard',
                        desc: 'Deployments, logs, env vars',
                        href: VERCEL_PROJECT_URL || 'https://vercel.com',
                        icon: '▲',
                      },
                      {
                        label: 'Vercel Analytics',
                        desc: 'Traffic, top pages, referrers',
                        href: VERCEL_PROJECT_URL ? `${VERCEL_PROJECT_URL}/analytics` : 'https://vercel.com',
                        icon: '📊',
                      },
                      {
                        label: 'GitHub Repo',
                        desc: 'Source code, commits, PRs',
                        href: GITHUB_REPO_URL || 'https://github.com',
                        icon: '⌥',
                      },
                      {
                        label: 'Live Site',
                        desc: siteConfig.domain,
                        href: siteConfig.url,
                        icon: '🌐',
                      },
                      {
                        label: 'Google Search Console',
                        desc: 'Search performance for this site',
                        href: `https://search.google.com/search-console/overview?resource_id=${encodeURIComponent(siteConfig.url)}`,
                        icon: '🏛',
                      },
                      {
                        label: 'Resend Dashboard',
                        desc: 'Email delivery, subscribers',
                        href: 'https://resend.com/dashboard',
                        icon: '✉',
                      },
                      {
                        label: 'Vercel Tokens',
                        desc: 'Manage API access tokens',
                        href: 'https://vercel.com/account/tokens',
                        icon: '🔑',
                      },
                      {
                        label: 'Drafts Folder',
                        desc: 'View all draft MDX files',
                        href: GITHUB_REPO_URL ? `${GITHUB_REPO_URL}/tree/main/drafts` : '#',
                        icon: '📝',
                      },
                    ].map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3.5 rounded-xl border border-gray-200 bg-gray-50 hover:bg-white hover:shadow-sm px-4 py-4 transition-all group"
                      >
                        <span className="text-xl mt-0.5 flex-none">
                          {link.icon}
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-gray-900 group-hover:text-[#0d6e6e] transition-colors">
                            {link.label} ↗
                          </p>
                          <p className="text-xs text-gray-500 mt-0.5">
                            {link.desc}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Schedule modal */}
      {schedulingDraft && (
        <ScheduleModal
          draft={schedulingDraft}
          existing={schedule[schedulingDraft.slug]}
          onSave={saveSchedule}
          onClose={() => setSchedulingDraft(null)}
        />
      )}
    </>
  )
}
