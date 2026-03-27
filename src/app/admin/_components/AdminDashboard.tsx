'use client'

import { useState, useEffect, useCallback } from 'react'
import type { DraftMeta } from '@/app/api/admin/drafts/route'
import type { PublishedMeta } from '@/app/api/admin/published/route'

type Tab = 'overview' | 'drafts' | 'published' | 'analytics' | 'links'

interface Schedule {
  [slug: string]: {
    targetDate: string
    notes: string
    priority: 'high' | 'medium' | 'low'
  }
}

interface AnalyticsData {
  error?: string
  instructions?: string
  setupUrl?: string
  vercelDashboardUrl?: string
  httpStatus?: number
  vercelResponse?: Record<string, unknown> | string | null
  hint?: string
  period?: { days: number; from: number; to: number }
  stats?: Record<string, unknown>
  topPages?: Record<string, unknown>
  referrers?: Record<string, unknown>
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
  const [targetDate, setTargetDate] = useState(existing?.targetDate ?? '')
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
              Target publish date
            </label>
            <input
              type="date"
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

          <div className="bg-amber-50 rounded-lg p-3 text-xs text-amber-700">
            <strong>Note:</strong> Schedules are stored in this browser only.
            Publishing requires moving the file from{' '}
            <code className="font-mono">/drafts/</code> to{' '}
            <code className="font-mono">src/content/blog/</code>.
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
            className="rounded-lg bg-[#0d6e6e] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0a5a5a] transition-colors"
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
  const [schedule, setSchedule] = useState<Schedule>({})
  const [schedulingDraft, setSchedulingDraft] = useState<DraftMeta | null>(null)
  const [draftSearch, setDraftSearch] = useState('')
  const [loading, setLoading] = useState(true)

  // Load schedule from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('stg_publish_schedules')
      if (stored) setSchedule(JSON.parse(stored))
    } catch {
      // ignore
    }
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

  function saveSchedule(slug: string, data: Schedule[string]) {
    const updated = { ...schedule, [slug]: data }
    setSchedule(updated)
    try {
      localStorage.setItem('stg_publish_schedules', JSON.stringify(updated))
    } catch {
      // ignore
    }
  }

  function clearSchedule(slug: string) {
    const updated = { ...schedule }
    delete updated[slug]
    setSchedule(updated)
    try {
      localStorage.setItem('stg_publish_schedules', JSON.stringify(updated))
    } catch {
      // ignore
    }
  }

  const staleDrafts = drafts.filter((d) => daysSince(d.lastModified) > 30)
  const stalePublished = published.filter((p) => daysSince(p.updatedAt) > 60)
  const scheduledDrafts = drafts.filter((d) => schedule[d.slug]?.targetDate)
  const lastPublished = published[0]

  const filteredDrafts = drafts.filter(
    (d) =>
      !draftSearch ||
      d.title.toLowerCase().includes(draftSearch.toLowerCase()) ||
      d.category.toLowerCase().includes(draftSearch.toLowerCase()) ||
      d.tags.some((t) => t.toLowerCase().includes(draftSearch.toLowerCase()))
  )

  const tabs: { id: Tab; label: string; count?: number }[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'drafts', label: 'Drafts', count: drafts.length },
    { id: 'published', label: 'Published', count: published.length },
    { id: 'analytics', label: 'Analytics' },
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
          {loading && tab !== 'analytics' && tab !== 'links' ? (
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
                                const da = schedule[a.slug]?.targetDate ?? ''
                                const db = schedule[b.slug]?.targetDate ?? ''
                                return da.localeCompare(db)
                              })
                              .map((d) => (
                                <tr
                                  key={d.slug}
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
                                      schedule[d.slug]?.targetDate ?? ''
                                    )}
                                  </td>
                                  <td className="px-4 py-3">
                                    <PriorityBadge
                                      priority={
                                        schedule[d.slug]?.priority ?? 'medium'
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
                      Most Recent Drafts
                    </h2>
                    <div className="rounded-xl border border-gray-200 overflow-hidden">
                      <table className="w-full text-sm">
                        <thead className="bg-gray-50 text-xs font-medium text-gray-500">
                          <tr>
                            <th className="px-4 py-3 text-left">Title</th>
                            <th className="px-4 py-3 text-left">Category</th>
                            <th className="px-4 py-3 text-left">Modified</th>
                            <th className="px-4 py-3 text-left">Words</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {[...drafts]
                            .sort(
                              (a, b) =>
                                new Date(b.lastModified).getTime() -
                                new Date(a.lastModified).getTime()
                            )
                            .slice(0, 8)
                            .map((d) => (
                              <tr
                                key={d.slug}
                                className="hover:bg-gray-50 transition-colors"
                              >
                                <td className="px-4 py-3 font-medium text-gray-900 max-w-xs truncate">
                                  {d.title}
                                </td>
                                <td className="px-4 py-3">
                                  <CategoryBadge category={d.category} />
                                </td>
                                <td className="px-4 py-3 text-gray-500 text-xs">
                                  {daysSince(d.lastModified)}d ago
                                </td>
                                <td className="px-4 py-3 text-gray-500">
                                  {d.wordCount.toLocaleString()}
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
                      placeholder="Search drafts by title, category, or tag…"
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
                            <th className="px-4 py-3 text-left">Title</th>
                            <th className="px-4 py-3 text-left">Category</th>
                            <th className="px-4 py-3 text-left">Modified</th>
                            <th className="px-4 py-3 text-left">Words</th>
                            <th className="px-4 py-3 text-left">Scheduled</th>
                            <th className="px-4 py-3 text-left">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {filteredDrafts.length === 0 ? (
                            <tr>
                              <td
                                colSpan={6}
                                className="px-4 py-8 text-center text-gray-400"
                              >
                                No drafts found
                              </td>
                            </tr>
                          ) : (
                            filteredDrafts.map((d) => {
                              const isStale = daysSince(d.lastModified) > 30
                              const sched = schedule[d.slug]
                              return (
                                <tr
                                  key={d.slug}
                                  className={`hover:bg-gray-50 transition-colors ${isStale ? 'bg-amber-50/40' : ''}`}
                                >
                                  <td className="px-4 py-3">
                                    <div className="font-medium text-gray-900 max-w-xs">
                                      {isStale && (
                                        <span className="mr-1.5 text-amber-500 text-xs">
                                          ⚠
                                        </span>
                                      )}
                                      {d.title}
                                    </div>
                                    <div className="text-xs text-gray-400 mt-0.5 truncate max-w-xs">
                                      {d.slug}
                                    </div>
                                  </td>
                                  <td className="px-4 py-3">
                                    <CategoryBadge category={d.category} />
                                  </td>
                                  <td className="px-4 py-3 text-xs text-gray-500">
                                    {daysSince(d.lastModified)}d ago
                                  </td>
                                  <td className="px-4 py-3 text-gray-600">
                                    {d.wordCount.toLocaleString()}
                                  </td>
                                  <td className="px-4 py-3">
                                    {sched?.targetDate ? (
                                      <div className="text-xs">
                                        <span className="text-gray-700 font-medium">
                                          {formatDate(sched.targetDate)}
                                        </span>
                                        <br />
                                        <PriorityBadge
                                          priority={sched.priority}
                                        />
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
                                          onClick={() => clearSchedule(d.slug)}
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
                <div>
                  {analyticsLoading ? (
                    <div className="py-12 text-center text-sm text-gray-400">
                      Fetching analytics…
                    </div>
                  ) : analytics?.error ? (
                    <div className="space-y-4">
                      <div className="rounded-xl bg-amber-50 border border-amber-200 p-5">
                        <div className="flex items-start justify-between mb-1">
                          <h3 className="text-sm font-semibold text-amber-900">
                            {analytics.httpStatus
                              ? `Vercel API returned HTTP ${analytics.httpStatus}`
                              : 'Analytics not configured'}
                          </h3>
                        </div>
                        <p className="text-sm text-amber-700 mb-3">
                          {analytics.hint ?? analytics.instructions ?? analytics.error}
                        </p>
                        {analytics.vercelResponse && (
                          <details className="mb-3">
                            <summary className="text-xs font-medium text-amber-800 cursor-pointer hover:underline">
                              Show Vercel API response
                            </summary>
                            <pre className="mt-2 text-xs bg-amber-100 rounded p-2 overflow-x-auto text-amber-900 whitespace-pre-wrap">
                              {typeof analytics.vercelResponse === 'string'
                                ? analytics.vercelResponse
                                : JSON.stringify(analytics.vercelResponse, null, 2)}
                            </pre>
                          </details>
                        )}
                        {analytics.setupUrl && (
                          <a
                            href={analytics.setupUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-800 underline hover:no-underline"
                          >
                            Get Vercel token ↗
                          </a>
                        )}
                      </div>

                      <div className="rounded-xl bg-gray-50 border border-gray-200 p-5">
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">
                          Setup instructions
                        </h3>
                        <ol className="text-sm text-gray-600 space-y-1.5 list-decimal list-inside">
                          <li>
                            Go to{' '}
                            <a
                              href="https://vercel.com/account/tokens"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#0d6e6e] underline"
                            >
                              vercel.com/account/tokens
                            </a>
                          </li>
                          <li>Create a new token — name it &ldquo;STG Admin Analytics&rdquo;</li>
                          <li>
                            Add <code className="font-mono bg-gray-200 px-1 rounded">VERCEL_TOKEN=your_token</code> to{' '}
                            <code className="font-mono bg-gray-200 px-1 rounded">.env.local</code>
                          </li>
                          <li>Also add to Vercel project environment variables</li>
                          <li>Restart the dev server</li>
                        </ol>
                      </div>

                      {analytics.vercelDashboardUrl && (
                        <a
                          href={analytics.vercelDashboardUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl bg-black text-white px-5 py-3 text-sm font-medium hover:bg-gray-800 transition-colors"
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M24 22.525H0l12-21.05 12 21.05z" />
                          </svg>
                          Open Vercel Analytics dashboard
                        </a>
                      )}
                    </div>
                  ) : analytics ? (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h2 className="text-sm font-semibold text-gray-700">
                          Last {analytics.period?.days} days
                        </h2>
                        {analytics.vercelDashboardUrl && (
                          <a
                            href={analytics.vercelDashboardUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-[#0d6e6e] hover:text-[#0a5a5a] font-medium"
                          >
                            Open full dashboard ↗
                          </a>
                        )}
                      </div>

                      {/* Raw analytics data */}
                      {analytics.stats && (
                        <div>
                          <h3 className="text-sm font-semibold text-gray-700 mb-3">
                            Overview
                          </h3>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {Object.entries(
                              analytics.stats as Record<string, unknown>
                            )
                              .filter(([, v]) => typeof v === 'number')
                              .map(([key, value]) => (
                                <div
                                  key={key}
                                  className="bg-gray-50 rounded-xl border border-gray-200 px-4 py-3"
                                >
                                  <p className="text-xs text-gray-500 capitalize">
                                    {key.replace(/_/g, ' ')}
                                  </p>
                                  <p className="mt-1 text-xl font-bold text-gray-900">
                                    {typeof value === 'number'
                                      ? value.toLocaleString()
                                      : String(value)}
                                  </p>
                                </div>
                              ))}
                          </div>
                        </div>
                      )}

                      {/* Top pages */}
                      {analytics.topPages && (
                        <div>
                          <h3 className="text-sm font-semibold text-gray-700 mb-3">
                            Top Pages
                          </h3>
                          <pre className="bg-gray-50 rounded-xl border border-gray-200 p-4 text-xs overflow-x-auto text-gray-700">
                            {JSON.stringify(analytics.topPages, null, 2)}
                          </pre>
                        </div>
                      )}

                      {/* Referrers */}
                      {analytics.referrers && (
                        <div>
                          <h3 className="text-sm font-semibold text-gray-700 mb-3">
                            Referrers
                          </h3>
                          <pre className="bg-gray-50 rounded-xl border border-gray-200 p-4 text-xs overflow-x-auto text-gray-700">
                            {JSON.stringify(analytics.referrers, null, 2)}
                          </pre>
                        </div>
                      )}
                    </div>
                  ) : null}
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
                        href: 'https://vercel.com/hishan-parrys-projects/soletraderguide',
                        icon: '▲',
                      },
                      {
                        label: 'Vercel Analytics',
                        desc: 'Traffic, top pages, referrers',
                        href: 'https://vercel.com/hishan-parrys-projects/soletraderguide/analytics',
                        icon: '📊',
                      },
                      {
                        label: 'GitHub Repo',
                        desc: 'Source code, commits, PRs',
                        href: 'https://github.com/b4ked/soletraderguide',
                        icon: '⌥',
                      },
                      {
                        label: 'Live Site',
                        desc: 'soletraderguide.co.uk',
                        href: 'https://soletraderguide.co.uk',
                        icon: '🌐',
                      },
                      {
                        label: 'Google Search Console',
                        desc: 'Search performance, indexing',
                        href: 'https://search.google.com/search-console',
                        icon: '🔍',
                      },
                      {
                        label: 'HMRC MTD News',
                        desc: 'Latest MTD updates from HMRC',
                        href: 'https://www.gov.uk/government/collections/making-tax-digital',
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
                        href: 'https://github.com/b4ked/soletraderguide/tree/main/drafts',
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
