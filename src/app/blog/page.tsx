import type { Metadata } from 'next'
import { generateMetadata as buildMetadata } from '@/lib/metadata'
import { getAllPosts } from '@/lib/content'
import { siteConfig } from '@/data/site-config'
import { blogPageMeta } from '@/data/navigation'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { LastUpdated } from '@/components/trust/LastUpdated'
import { BlogFilterClient } from '@/components/blog/BlogFilterClient'

export const metadata: Metadata = buildMetadata({
  title: blogPageMeta?.title ?? `Blog — ${siteConfig.name}`,
  description: blogPageMeta?.description ?? siteConfig.description,
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
        {blogPageMeta?.heading ?? `${siteConfig.name} Blog`}
      </h1>
      <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
        {blogPageMeta?.description ?? siteConfig.description}
      </p>

      <BlogFilterClient posts={posts} />

      <div className="mt-12 border-t border-border pt-6">
        <LastUpdated date={posts[0]?.publishedAt ?? '2026-03-31'} />
      </div>
    </div>
  )
}
