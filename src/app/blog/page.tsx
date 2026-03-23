import type { Metadata } from 'next'
import Link from 'next/link'
import { generateMetadata as buildMetadata } from '@/lib/metadata'
import { getAllPosts } from '@/lib/content'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { LastUpdated } from '@/components/trust/LastUpdated'

export const metadata: Metadata = buildMetadata({
  title: 'MTD Blog: News and Guides for Sole Traders',
  description:
    'MTD news, software guides, and tax tips for UK sole traders. Stay up to date with Making Tax Digital for Income Tax.',
  canonicalPath: '/blog',
  pageType: 'hub',
})

const categoryConfig: Record<string, { label: string; className: string }> = {
  'mtd-news': { label: 'MTD News', className: 'bg-blue-100 text-blue-800' },
  'tax-tips': { label: 'Tax Tips', className: 'bg-emerald-100 text-emerald-800' },
  'software-guides': { label: 'Software Guides', className: 'bg-violet-100 text-violet-800' },
  'mtd-guides': { label: 'MTD Guides', className: 'bg-orange-100 text-orange-800' },
}

// Format ISO date to "1 March 2025" style
function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function BlogPage() {
  const posts = getAllPosts('blog')

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8 sm:py-12">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Blog' },
        ]}
      />

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        MTD News and Guides for Sole Traders
      </h1>
      <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
        Plain-English articles on Making Tax Digital, software options, quarterly deadlines, and
        everything in between — written for UK sole traders, freelancers, and landlords.
      </p>

      {/* Category filter strip (static) */}
      <div className="mt-8 flex flex-wrap gap-2">
        {['All', 'MTD News', 'Software Guides', 'Tax Tips', 'MTD Guides'].map((cat) => (
          <span
            key={cat}
            className="rounded-full border border-border px-4 py-1.5 text-sm font-medium text-muted-foreground cursor-default select-none"
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Blog post grid — data-driven from MDX files */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {posts.map((post) => {
          const cat = categoryConfig[post.category] ?? {
            label: post.category,
            className: 'bg-slate-100 text-slate-700',
          }
          return (
            <article
              key={post.slug}
              className="flex flex-col rounded-xl border border-border bg-white p-6 hover:shadow-md transition-shadow"
            >
              <div className="mb-3">
                <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${cat.className}`}>
                  {cat.label}
                </span>
              </div>
              <h2 className="text-base font-bold text-foreground leading-snug mb-2">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-brand transition-colors"
                >
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

      <div className="mt-12 border-t border-border pt-6">
        <LastUpdated date={posts[0]?.publishedAt ?? '2025-03-01'} />
      </div>
    </div>
  )
}
