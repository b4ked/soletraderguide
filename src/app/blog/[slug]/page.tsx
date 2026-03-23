import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { generateArticleMetadata } from '@/lib/metadata'
import { getPostBySlug, getAllSlugs } from '@/lib/content'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { FAQAccordion } from '@/components/common/FAQAccordion'
import { CTABlock } from '@/components/common/CTABlock'
import { InfoCallout } from '@/components/common/InfoCallout'
import { AffiliateDisclosure } from '@/components/trust/AffiliateDisclosure'
import { LastUpdated } from '@/components/trust/LastUpdated'
import { ArticleSchema } from '@/components/seo/ArticleSchema'
import { FAQSchema } from '@/components/seo/FAQSchema'
import Link from 'next/link'

// MDX components available inside .mdx files
const mdxComponents = {
  InfoCallout,
}

// Map category slug to display label and colour classes
const categoryConfig: Record<string, { label: string; className: string }> = {
  'mtd-news': { label: 'MTD News', className: 'bg-blue-100 text-blue-800' },
  'tax-tips': { label: 'Tax Tips', className: 'bg-emerald-100 text-emerald-800' },
  'software-guides': { label: 'Software Guides', className: 'bg-violet-100 text-violet-800' },
  'mtd-guides': { label: 'MTD Guides', className: 'bg-orange-100 text-orange-800' },
}

type Params = Promise<{ slug: string }>

export async function generateStaticParams() {
  const slugs = getAllSlugs('blog')
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  const slugs = getAllSlugs('blog')
  if (!slugs.includes(slug)) return {}

  const { frontmatter } = getPostBySlug('blog', slug)

  return generateArticleMetadata({
    title: frontmatter.title,
    description: frontmatter.description,
    canonicalPath: `/blog/${slug}`,
    publishedDate: frontmatter.publishedAt,
    updatedDate: frontmatter.updatedAt,
    author: frontmatter.author,
    tags: frontmatter.tags,
  })
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params
  const slugs = getAllSlugs('blog')
  if (!slugs.includes(slug)) notFound()

  const { frontmatter, content } = getPostBySlug('blog', slug)

  const categoryInfo = categoryConfig[frontmatter.category] ?? {
    label: frontmatter.category,
    className: 'bg-slate-100 text-slate-700',
  }

  const defaultCta = {
    heading: 'Check if MTD applies to you',
    description: 'Use our free eligibility checker to find out whether and when MTD affects your income.',
    primaryLabel: 'Check my eligibility',
    primaryHref: '/tools/mtd-eligibility-checker',
    secondaryLabel: 'Find MTD software',
    secondaryHref: '/tools/mtd-software-chooser',
  }

  const cta = frontmatter.cta ?? defaultCta

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-8 sm:py-12">
      {/* Structured data */}
      <ArticleSchema
        title={frontmatter.title}
        description={frontmatter.description}
        canonicalUrl={`https://soletraderguide.co.uk/blog/${slug}`}
        publishedDate={frontmatter.publishedAt}
        updatedDate={frontmatter.updatedAt}
        author={frontmatter.author}
      />
      {frontmatter.faqs && frontmatter.faqs.length > 0 && (
        <FAQSchema faqs={frontmatter.faqs} />
      )}

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: frontmatter.title },
        ]}
      />

      {/* Article header */}
      <div className="mt-4">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${categoryInfo.className}`}>
            {categoryInfo.label}
          </span>
          <span className="text-sm text-muted-foreground">{frontmatter.readingTime}</span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl leading-tight">
          {frontmatter.title}
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span>By {frontmatter.author}</span>
          <LastUpdated date={frontmatter.updatedAt} />
        </div>

        {frontmatter.affiliateDisclosure && (
          <div className="mt-4">
            <AffiliateDisclosure variant="inline" />
          </div>
        )}
      </div>

      {/* MDX article body */}
      <div className="mt-8 prose-like space-y-6">
        <MDXRemote source={content} components={mdxComponents} />
      </div>

      {/* CTA block */}
      <div className="mt-10">
        <CTABlock
          heading={cta.heading}
          description={cta.description}
          primaryCta={{ label: cta.primaryLabel, href: cta.primaryHref }}
          secondaryCta={
            cta.secondaryLabel && cta.secondaryHref
              ? { label: cta.secondaryLabel, href: cta.secondaryHref }
              : undefined
          }
          variant="brand"
        />
      </div>

      {/* FAQs */}
      {frontmatter.faqs && frontmatter.faqs.length > 0 && (
        <section className="mt-14">
          <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
          <FAQAccordion faqs={frontmatter.faqs} headingLevel="h3" />
        </section>
      )}

      {/* Related posts */}
      {frontmatter.relatedPosts && frontmatter.relatedPosts.length > 0 && (
        <section className="mt-14">
          <h2 className="text-xl font-bold text-foreground mb-4">Related Articles</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {frontmatter.relatedPosts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="block rounded-lg border border-border bg-white p-4 hover:border-brand hover:shadow-sm transition-all"
              >
                <p className="text-sm font-semibold text-foreground hover:text-brand transition-colors">
                  {post.title}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <div className="mt-10 border-t border-border pt-6">
        <LastUpdated date={frontmatter.updatedAt} />
      </div>
    </div>
  )
}
