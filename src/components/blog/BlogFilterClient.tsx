'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { BlogPostMeta } from '@/types'

const categoryConfig: Record<
  string,
  { label: string; badge: string; pill: string; pillActive: string; pillHover: string }
> = {
  'mtd-news': {
    label: 'MTD News',
    badge: 'bg-blue-100 text-blue-800',
    pill: 'border-border text-muted-foreground',
    pillHover: 'hover:border-blue-400 hover:text-blue-700 hover:bg-blue-50 hover:shadow-[0_0_0_2px_rgba(96,165,250,0.3)]',
    pillActive: 'border-blue-500 bg-blue-500 text-white shadow-[0_0_0_2px_rgba(96,165,250,0.35)]',
  },
  'tax-tips': {
    label: 'Tax Tips',
    badge: 'bg-emerald-100 text-emerald-800',
    pill: 'border-border text-muted-foreground',
    pillHover: 'hover:border-emerald-400 hover:text-emerald-700 hover:bg-emerald-50 hover:shadow-[0_0_0_2px_rgba(52,211,153,0.3)]',
    pillActive: 'border-emerald-500 bg-emerald-500 text-white shadow-[0_0_0_2px_rgba(52,211,153,0.35)]',
  },
  'software-guides': {
    label: 'Software Guides',
    badge: 'bg-violet-100 text-violet-800',
    pill: 'border-border text-muted-foreground',
    pillHover: 'hover:border-violet-400 hover:text-violet-700 hover:bg-violet-50 hover:shadow-[0_0_0_2px_rgba(167,139,250,0.3)]',
    pillActive: 'border-violet-500 bg-violet-500 text-white shadow-[0_0_0_2px_rgba(167,139,250,0.35)]',
  },
  'mtd-guides': {
    label: 'MTD Guides',
    badge: 'bg-orange-100 text-orange-800',
    pill: 'border-border text-muted-foreground',
    pillHover: 'hover:border-orange-400 hover:text-orange-700 hover:bg-orange-50 hover:shadow-[0_0_0_2px_rgba(251,146,60,0.3)]',
    pillActive: 'border-orange-500 bg-orange-500 text-white shadow-[0_0_0_2px_rgba(251,146,60,0.35)]',
  },
}

const allPill = {
  pill: 'border-border text-muted-foreground',
  pillHover: 'hover:border-brand hover:text-brand hover:bg-brand-light hover:shadow-[0_0_0_2px_rgba(13,110,110,0.25)]',
  pillActive: 'border-brand bg-brand text-white shadow-[0_0_0_2px_rgba(13,110,110,0.3)]',
}

const CATEGORIES = Object.keys(categoryConfig)

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

interface Props {
  posts: BlogPostMeta[]
}

export function BlogFilterClient({ posts }: Props) {
  const [active, setActive] = useState<string | null>(null)

  const filtered = active ? posts.filter((p) => p.category === active) : posts

  function toggle(cat: string) {
    setActive((prev) => (prev === cat ? null : cat))
  }

  return (
    <>
      {/* Category filter pills */}
      <div className="mt-8 flex flex-wrap gap-2">
        {/* All pill */}
        <button
          onClick={() => setActive(null)}
          className={[
            'rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-150 cursor-pointer select-none',
            active === null ? allPill.pillActive : `${allPill.pill} ${allPill.pillHover}`,
          ].join(' ')}
        >
          All
        </button>

        {/* Per-category pills */}
        {CATEGORIES.map((cat) => {
          const cfg = categoryConfig[cat]
          const isActive = active === cat
          return (
            <button
              key={cat}
              onClick={() => toggle(cat)}
              className={[
                'rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-150 cursor-pointer select-none',
                isActive ? cfg.pillActive : `${cfg.pill} ${cfg.pillHover}`,
              ].join(' ')}
            >
              {cfg.label}
            </button>
          )
        })}
      </div>

      {/* Post count */}
      {active && (
        <p className="mt-4 text-sm text-muted-foreground">
          Showing {filtered.length} post{filtered.length !== 1 ? 's' : ''} in{' '}
          <span className="font-medium text-foreground">{categoryConfig[active]?.label}</span>
        </p>
      )}

      {/* Blog post grid */}
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {filtered.map((post) => {
          const cat = categoryConfig[post.category] ?? {
            label: post.category,
            badge: 'bg-slate-100 text-slate-700',
          }
          return (
            <article
              key={post.slug}
              className="flex flex-col rounded-xl border border-border bg-white p-6 hover:shadow-md transition-shadow"
            >
              <div className="mb-3">
                <span
                  className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${cat.badge}`}
                >
                  {cat.label}
                </span>
              </div>
              <h2 className="text-base font-bold text-foreground leading-snug mb-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-brand transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {post.description}
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                <span aria-hidden="true">&middot;</span>
                <span>{post.readingTime}</span>
              </div>
            </article>
          )
        })}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-muted-foreground">
          No posts in this category yet.
        </p>
      )}
    </>
  )
}
