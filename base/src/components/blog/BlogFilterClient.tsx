'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { BlogPostMeta } from '@/types'

// Category pill colour palette — cycles through these for any category slug
const PILL_COLOURS = [
  { badge: 'bg-blue-100 text-blue-800', pillActive: 'border-blue-500 bg-blue-500 text-white', pillHover: 'hover:border-blue-400 hover:text-blue-700 hover:bg-blue-50' },
  { badge: 'bg-emerald-100 text-emerald-800', pillActive: 'border-emerald-500 bg-emerald-500 text-white', pillHover: 'hover:border-emerald-400 hover:text-emerald-700 hover:bg-emerald-50' },
  { badge: 'bg-violet-100 text-violet-800', pillActive: 'border-violet-500 bg-violet-500 text-white', pillHover: 'hover:border-violet-400 hover:text-violet-700 hover:bg-violet-50' },
  { badge: 'bg-orange-100 text-orange-800', pillActive: 'border-orange-500 bg-orange-500 text-white', pillHover: 'hover:border-orange-400 hover:text-orange-700 hover:bg-orange-50' },
  { badge: 'bg-pink-100 text-pink-800', pillActive: 'border-pink-500 bg-pink-500 text-white', pillHover: 'hover:border-pink-400 hover:text-pink-700 hover:bg-pink-50' },
  { badge: 'bg-amber-100 text-amber-800', pillActive: 'border-amber-500 bg-amber-500 text-white', pillHover: 'hover:border-amber-400 hover:text-amber-700 hover:bg-amber-50' },
]

function getCategoryColour(slug: string) {
  // Deterministic colour from slug — consistent across renders
  let hash = 0
  for (let i = 0; i < slug.length; i++) hash = slug.charCodeAt(i) + ((hash << 5) - hash)
  return PILL_COLOURS[Math.abs(hash) % PILL_COLOURS.length]
}

function formatCategoryLabel(slug: string): string {
  return slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
}

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

  // Derive unique categories from actual posts
  const categories = Array.from(new Set(posts.map((p) => p.category).filter(Boolean)))

  const filtered = active ? posts.filter((p) => p.category === active) : posts

  function toggle(cat: string) {
    setActive((prev) => (prev === cat ? null : cat))
  }

  const allPillBase = 'border-border text-muted-foreground'
  const allPillHover = 'hover:border-brand hover:text-brand hover:bg-brand-light'
  const allPillActive = 'border-brand bg-brand text-white'

  return (
    <>
      {/* Category filter pills */}
      <div className="mt-8 flex flex-wrap gap-2">
        <button
          onClick={() => setActive(null)}
          className={[
            'rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-150 cursor-pointer select-none',
            active === null ? allPillActive : `${allPillBase} ${allPillHover}`,
          ].join(' ')}
        >
          All
        </button>

        {categories.map((cat) => {
          const colours = getCategoryColour(cat)
          const isActive = active === cat
          return (
            <button
              key={cat}
              onClick={() => toggle(cat)}
              className={[
                'rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-150 cursor-pointer select-none',
                isActive ? colours.pillActive : `border-border text-muted-foreground ${colours.pillHover}`,
              ].join(' ')}
            >
              {formatCategoryLabel(cat)}
            </button>
          )
        })}
      </div>

      {/* Post count */}
      {active && (
        <p className="mt-4 text-sm text-muted-foreground">
          Showing {filtered.length} post{filtered.length !== 1 ? 's' : ''} in{' '}
          <span className="font-medium text-foreground">{formatCategoryLabel(active)}</span>
        </p>
      )}

      {/* Blog post grid */}
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {filtered.map((post) => {
          const colours = getCategoryColour(post.category ?? '')
          return (
            <article
              key={post.slug}
              className="flex flex-col rounded-xl border border-border bg-white p-6 hover:shadow-md transition-shadow"
            >
              <div className="mb-3">
                <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${colours.badge}`}>
                  {formatCategoryLabel(post.category ?? '')}
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
