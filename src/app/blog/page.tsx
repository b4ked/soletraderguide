import type { Metadata } from 'next'
import Link from 'next/link'
import { generateMetadata as buildMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { LastUpdated } from '@/components/trust/LastUpdated'

export const metadata: Metadata = buildMetadata({
  title: 'MTD Blog: News and Guides for Sole Traders',
  description:
    'MTD news, software guides, and tax tips for UK sole traders. Stay up to date with Making Tax Digital for Income Tax.',
  canonicalPath: '/blog',
  pageType: 'hub',
})

const blogPosts = [
  {
    slug: 'april-2026-mtd-rollout-explained',
    title: 'April 2026 MTD Rollout Explained: What Sole Traders Need to Know',
    date: '1 March 2025',
    category: 'MTD News',
    readingTime: '6 min read',
    excerpt:
      'From April 2026, Making Tax Digital for Income Tax becomes mandatory for sole traders earning over £50,000. Here is everything you need to know about the rollout.',
  },
  {
    slug: 'first-quarterly-update-what-sole-traders-need-to-do',
    title: 'Your First Quarterly Update: A Step-by-Step Guide for Sole Traders',
    date: '15 February 2025',
    category: 'Tax Tips',
    readingTime: '8 min read',
    excerpt:
      'Not sure what your first MTD quarterly update involves? We break down the process step by step, from categorising income to making your first submission.',
  },
  {
    slug: 'mtd-software-options-explained',
    title: 'MTD Software Options Explained: Which Type is Right for You?',
    date: '28 January 2025',
    category: 'Software Guides',
    readingTime: '7 min read',
    excerpt:
      'From full accounting software to bridging tools, there are several ways to comply with MTD. We explain each option and help you choose the right one.',
  },
  {
    slug: 'free-vs-paid-mtd-software',
    title: 'Free vs Paid MTD Software: Is There a Genuinely Free Option?',
    date: '10 January 2025',
    category: 'Software Guides',
    readingTime: '5 min read',
    excerpt:
      'Is free MTD software a myth? We look at what is genuinely available for free and when paying for software actually makes sense.',
  },
]

const categoryColours: Record<string, string> = {
  'MTD News': 'bg-blue-100 text-blue-800',
  'Tax Tips': 'bg-emerald-100 text-emerald-800',
  'Software Guides': 'bg-violet-100 text-violet-800',
}

export default function BlogPage() {
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
        {['All', 'MTD News', 'Software Guides', 'Tax Tips'].map((cat) => (
          <span
            key={cat}
            className="rounded-full border border-border px-4 py-1.5 text-sm font-medium text-muted-foreground cursor-default select-none"
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Blog post grid */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="flex flex-col rounded-xl border border-border bg-white p-6 hover:shadow-md transition-shadow"
          >
            <div className="mb-3">
              <span
                className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                  categoryColours[post.category] ?? 'bg-slate-100 text-slate-700'
                }`}
              >
                {post.category}
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
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">{post.excerpt}</p>
            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <time>{post.date}</time>
              <span aria-hidden="true">&middot;</span>
              <span>{post.readingTime}</span>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 border-t border-border pt-6">
        <LastUpdated date="2025-03-01" />
      </div>
    </div>
  )
}
