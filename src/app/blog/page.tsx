import type { Metadata } from 'next'
import { generateMetadata as buildMetadata } from '@/lib/metadata'
import { getAllPosts } from '@/lib/content'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { LastUpdated } from '@/components/trust/LastUpdated'
import { BlogFilterClient } from '@/components/blog/BlogFilterClient'

export const metadata: Metadata = buildMetadata({
  title: 'MTD Blog: News and Guides for Sole Traders',
  description:
    'MTD news, software guides, and tax tips for UK sole traders. Stay up to date with Making Tax Digital for Income Tax.',
  canonicalPath: '/blog',
  pageType: 'hub',
})

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

      <BlogFilterClient posts={posts} />

      <div className="mt-12 border-t border-border pt-6">
        <LastUpdated date={posts[0]?.publishedAt ?? '2026-03-31'} />
      </div>
    </div>
  )
}
