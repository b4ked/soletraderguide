import Link from 'next/link'
import { generateMetadata as genMeta } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { AffiliateDisclosure } from '@/components/trust/AffiliateDisclosure'
import { CTABlock } from '@/components/common/CTABlock'
import { InfoCallout } from '@/components/common/InfoCallout'

export const metadata = genMeta({
  title: 'MTD Software Comparisons for Sole Traders',
  description:
    'Side-by-side comparisons of the best MTD accounting software for UK sole traders. Compare Xero, QuickBooks, Sage, and FreeAgent on features, price, and MTD suitability.',
  canonicalPath: '/comparisons',
  pageType: 'hub',
  updatedDate: '2025-03-01',
})

const comparisons = [
  {
    href: '/comparisons/xero-vs-quickbooks',
    title: 'Xero vs QuickBooks',
    description:
      'Both are market leaders with strong MTD support. We break down the key differences in pricing, interface, and features for sole traders.',
    badge: 'Most popular',
  },
  {
    href: '/comparisons/xero-vs-freeagent',
    title: 'Xero vs FreeAgent',
    description:
      'FreeAgent is built for freelancers; Xero is built for growth. Find out which wins for your specific situation — especially if you bank with NatWest or RBS.',
    badge: null,
  },
  {
    href: '/comparisons/quickbooks-vs-sage',
    title: 'QuickBooks vs Sage',
    description:
      "A US giant versus a UK-native institution. QuickBooks has more features; Sage has better UK support. We compare both head-to-head for sole traders.",
    badge: null,
  },
  {
    href: '/comparisons/free-vs-paid-mtd-software',
    title: 'Free vs Paid MTD Software',
    description:
      'Is there genuinely free MTD software? We explain what HMRC offers, the FreeAgent/NatWest deal, and when paying for software is worth it.',
    badge: 'Educational',
  },
]

export default function ComparisonsHubPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Comparisons' },
        ]}
      />

      <AffiliateDisclosure variant="banner" className="mb-8" />

      <header className="mb-10">
        <span className="inline-block rounded-full bg-brand-light px-3 py-1 text-xs font-semibold text-brand mb-3">
          Software Comparisons
        </span>
        <h1 className="text-3xl font-bold text-foreground mb-4">
          MTD Software Comparisons for Sole Traders
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Choosing between Xero, QuickBooks, Sage, and FreeAgent can feel overwhelming. Our
          comparisons cut through the marketing to show you the real differences that matter for
          sole traders getting ready for Making Tax Digital.
        </p>
      </header>

      {/* Comparison cards */}
      <section className="mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {comparisons.map((comp) => (
            <Link
              key={comp.href}
              href={comp.href}
              className="relative rounded-xl border border-border bg-white p-6 hover:border-brand hover:shadow-sm transition-all group"
            >
              {comp.badge && (
                <span className="absolute -top-2.5 left-4 rounded-full bg-brand px-3 py-0.5 text-xs font-semibold text-white shadow-sm">
                  {comp.badge}
                </span>
              )}
              <h2 className="text-base font-bold text-foreground mb-2 group-hover:text-brand transition-colors">
                {comp.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{comp.description}</p>
              <p className="mt-4 text-xs font-semibold text-brand">Read comparison →</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Guide to choosing */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-foreground mb-4">How to Choose MTD Software</h2>

        <InfoCallout type="info" title="Start with your situation, not the software">
          The best MTD software is the one that fits your workflow — not the one with the most
          features or the most marketing. Ask yourself: how complex is my bookkeeping? How often
          do I invoice clients? Do I want to file self-assessment myself?
        </InfoCallout>

        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
          Here is a quick decision framework to help you narrow down your options before diving
          into the full comparison pages:
        </p>

        <div className="space-y-4">
          {[
            {
              condition: 'You bank with NatWest or RBS',
              recommendation: 'Get FreeAgent — it\'s free with a qualifying business account and covers everything a sole trader needs.',
              href: '/reviews/freeagent',
            },
            {
              condition: 'You invoice clients regularly and want to grow',
              recommendation: 'Xero is a strong choice — polished invoicing, excellent mobile app, and 800+ integrations for when you scale.',
              href: '/reviews/xero',
            },
            {
              condition: 'You want the most features for your money',
              recommendation: 'QuickBooks offers the widest feature set. The Self-Employed plan is one of the cheapest compliant MTD options available.',
              href: '/reviews/quickbooks',
            },
            {
              condition: 'You value UK-based support above all else',
              recommendation: 'Sage is the only major option with UK-based phone support — worth paying slightly more for peace of mind.',
              href: '/reviews/sage',
            },
          ].map((item) => (
            <div key={item.condition} className="rounded-lg border border-border bg-white p-4">
              <p className="text-sm font-semibold text-foreground mb-1">
                If: <span className="text-brand">{item.condition}</span>
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                {item.recommendation}
              </p>
              <Link
                href={item.href}
                className="text-xs font-semibold text-brand hover:underline underline-offset-2"
              >
                Read the full review →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <CTABlock
        heading="Still not sure? Use our software finder"
        description="Answer 3 quick questions about your business and we'll recommend the best MTD software for your situation."
        primaryCta={{ label: 'Find my software', href: '/tools/software-finder' }}
        secondaryCta={{ label: 'Read all reviews', href: '/reviews' }}
        variant="light"
      />
    </div>
  )
}
