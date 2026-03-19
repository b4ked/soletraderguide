import Link from 'next/link'
import { generateMetadata as genMeta } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { AffiliateDisclosure } from '@/components/trust/AffiliateDisclosure'
import { ProviderCard } from '@/components/comparison/ProviderCard'
import { CTABlock } from '@/components/common/CTABlock'
import { allProviders } from '@/data/providers'

export const metadata = genMeta({
  title: 'MTD Software Reviews for Sole Traders',
  description:
    'Independent, in-depth reviews of MTD accounting software for UK sole traders. We cover Xero, QuickBooks, Sage, and FreeAgent — comparing features, pricing, and MTD suitability.',
  canonicalPath: '/reviews',
  pageType: 'hub',
  updatedDate: '2025-03-01',
})

export default function ReviewsHubPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Software Reviews' },
        ]}
      />

      <AffiliateDisclosure variant="banner" className="mb-8" />

      <header className="mb-10">
        <span className="inline-block rounded-full bg-brand-light px-3 py-1 text-xs font-semibold text-brand mb-3">
          Software Reviews
        </span>
        <h1 className="text-3xl font-bold text-foreground mb-4">
          MTD Software Reviews for Sole Traders
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          We review the most popular Making Tax Digital accounting packages used by UK sole traders.
          Every review is written by our editorial team, independently tested, and updated regularly.
          We never let affiliate relationships influence our scores.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-xl font-bold text-foreground mb-2">How we review software</h2>
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed max-w-2xl">
          Each review assesses MTD Income Tax compatibility, ease of use, pricing, support quality,
          and suitability for sole traders specifically. We use a 1–5 rating scale. Scores are our
          editorial opinion and are not influenced by commercial relationships.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {allProviders.map((provider) => (
            <div key={provider.id} className="relative">
              <ProviderCard provider={provider} variant="summary" />
              <Link
                href={`/reviews/${provider.slug}`}
                className="absolute inset-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
                aria-label={`Read full ${provider.name} review`}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12 rounded-xl border border-border bg-muted/30 p-6">
        <h2 className="text-lg font-bold text-foreground mb-3">Which software should I choose?</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          The right MTD software depends on your income level, how you work, and your budget. As a
          rough guide:
        </p>
        <ul className="space-y-2 text-sm text-foreground">
          <li className="flex items-start gap-2">
            <span className="font-semibold text-brand shrink-0">FreeAgent</span>
            <span className="text-muted-foreground">
              — Best for freelancers and NatWest/RBS account holders. Free if you bank with them.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-semibold text-brand shrink-0">Xero</span>
            <span className="text-muted-foreground">
              — Best for growing sole traders who invoice clients and need strong integrations.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-semibold text-brand shrink-0">QuickBooks</span>
            <span className="text-muted-foreground">
              — Best for sole traders who want a feature-rich platform with a Self-Employed plan
              option.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-semibold text-brand shrink-0">Sage</span>
            <span className="text-muted-foreground">
              — Best for established sole traders who value UK-based phone support.
            </span>
          </li>
        </ul>
        <p className="text-sm text-muted-foreground mt-4">
          Not sure?{' '}
          <Link href="/comparisons" className="text-brand font-medium hover:underline underline-offset-2">
            Browse our comparison pages
          </Link>{' '}
          or{' '}
          <Link href="/tools/software-finder" className="text-brand font-medium hover:underline underline-offset-2">
            use our software finder tool
          </Link>
          .
        </p>
      </section>

      <CTABlock
        heading="Not sure which software is right for you?"
        description="Answer 3 quick questions and we'll recommend the best MTD software for your situation."
        primaryCta={{ label: 'Find my software', href: '/tools/software-finder' }}
        secondaryCta={{ label: 'Compare all software', href: '/comparisons' }}
        variant="light"
      />
    </div>
  )
}
