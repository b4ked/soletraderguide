import Link from 'next/link'
import { generateMetadata as genMeta } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { AffiliateDisclosure } from '@/components/trust/AffiliateDisclosure'
import { ReviewedBy } from '@/components/trust/ReviewedBy'
import { LastUpdated } from '@/components/trust/LastUpdated'
import { ComparisonTable } from '@/components/comparison/ComparisonTable'
import { ProsConsList } from '@/components/comparison/ProsConsList'
import { InfoCallout } from '@/components/common/InfoCallout'
import { FAQAccordion } from '@/components/common/FAQAccordion'
import { CTABlock } from '@/components/common/CTABlock'
import { xero, freeagent } from '@/data/providers'
import type { ComparisonFeature } from '@/types'

export const metadata = genMeta({
  title: 'Xero vs FreeAgent for Sole Traders (2025): Which MTD Software Wins?',
  description:
    'Xero vs FreeAgent compared for UK sole traders. FreeAgent is simpler and can be free via NatWest/RBS; Xero is more powerful for growth. Find out which suits you.',
  canonicalPath: '/comparisons/xero-vs-freeagent',
  pageType: 'comparison',
  updatedDate: '2026-03-31',
})

const features: ComparisonFeature[] = [
  {
    name: 'MTD compatible',
    description: 'HMRC-recognised for MTD Income Tax',
    values: { xero: true, freeagent: true },
  },
  {
    name: 'Starting price',
    values: { xero: '£16/month', freeagent: '£19/month' },
  },
  {
    name: 'Free plan available',
    values: { xero: false, freeagent: 'Via NatWest/RBS' },
  },
  {
    name: 'Free trial',
    values: { xero: '30 days', freeagent: '30 days' },
  },
  {
    name: 'Supports sole traders',
    values: { xero: true, freeagent: true },
  },
  {
    name: 'Supports landlords',
    values: { xero: true, freeagent: false },
  },
  {
    name: 'Mobile app quality',
    values: { xero: 'Excellent', freeagent: 'Good' },
  },
  {
    name: 'Ease of use (1–5)',
    values: { xero: '4 / 5', freeagent: '4.5 / 5' },
  },
  {
    name: 'UK customer support',
    values: { xero: 'Chat + email', freeagent: 'Chat + email' },
  },
  {
    name: 'Integrations',
    values: { xero: '800+ apps', freeagent: '20+ apps' },
  },
  {
    name: 'Self-assessment filing',
    values: { xero: 'Via accountant', freeagent: 'Included' },
  },
]

const faqs = [
  {
    question: 'Is FreeAgent or Xero better for sole traders?',
    answer:
      "For most sole traders and freelancers, FreeAgent is the better fit — especially if you bank with NatWest or RBS. It's simpler, purpose-built for self-employed people, and includes self-assessment filing. Xero is better if you need more features, a larger integrations ecosystem, or plan to grow your business significantly.",
  },
  {
    question: 'Is FreeAgent really free?',
    answer:
      "FreeAgent is free for qualifying NatWest and RBS business account holders. This isn't a limited free plan — it's the full product, including MTD submissions and self-assessment filing. If you don't bank with NatWest/RBS, you pay £19/month for the sole trader plan.",
  },
  {
    question: 'Does Xero include self-assessment filing?',
    answer:
      "No. Xero doesn't file a Self Assessment tax return directly. Under MTD for Income Tax, quarterly updates and EOPS (submitted by Xero) replace the annual return for self-employment income. For other income types or a final declaration, most Xero users work with an accountant. FreeAgent is the exception — SA100 filing is included in its standard plans.",
  },
  {
    question: 'Which is better for invoicing — Xero or FreeAgent?',
    answer:
      'Xero has more advanced invoicing features — payment links, custom branding, automated reminders, and support for more currencies. FreeAgent has solid invoicing for most sole traders but is less flexible. If invoicing is a core part of your business, Xero has the edge.',
  },
  {
    question: 'Can I switch from Xero to FreeAgent (or vice versa)?',
    answer:
      'Yes. Both platforms support CSV data exports and imports. Migration is easiest at the start of a new tax year. If you switch mid-year, you may need to manually enter opening balances to ensure your quarterly MTD figures are accurate. FreeAgent has a dedicated migration support team that can help.',
  },
]

export default function XeroVsFreeAgentPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Comparisons', href: '/comparisons' },
          { label: 'Xero vs FreeAgent' },
        ]}
      />

      <AffiliateDisclosure variant="banner" className="mb-8" />

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Xero vs FreeAgent for Sole Traders (2025): Which MTD Software Wins?
        </h1>
        <div className="flex flex-wrap items-center gap-3">
          <LastUpdated date="2026-03-31" />
          <ReviewedBy
            name="SoleTraderGuide Editorial Team"
            role="MTD Software Analyst"
            date="2026-03-31"
          />
        </div>
      </header>

      {/* Quick summary */}
      <section className="mb-10 rounded-xl border-2 border-brand/20 bg-brand-light p-6">
        <h2 className="text-lg font-bold text-foreground mb-4">In a nutshell</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <p className="font-semibold text-foreground mb-2">Xero</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>More powerful — 800+ integrations, advanced invoicing</li>
              <li>Best-in-class mobile app for on-the-go accounting</li>
              <li>Better for growing businesses and those needing scale</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-2">FreeAgent</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>Purpose-built for freelancers and sole traders</li>
              <li>Self-assessment filing included in every plan</li>
              <li>Free for NatWest/RBS business account holders</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Who each is best for */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-foreground mb-4">Who Each Tool is Best For</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="rounded-xl border border-border bg-white p-5">
            <p className="font-bold text-foreground mb-3">Choose Xero if you...</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-brand shrink-0">→</span>
                Invoice clients regularly and need advanced invoicing features
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand shrink-0">→</span>
                Need a large integrations ecosystem (CRM, payments, e-commerce)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand shrink-0">→</span>
                Plan to grow your business and potentially hire staff
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand shrink-0">→</span>
                Have a mix of income sources including property
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-white p-5">
            <p className="font-bold text-foreground mb-3">Choose FreeAgent if you...</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-brand shrink-0">→</span>
                Bank with NatWest or RBS (FreeAgent is free)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand shrink-0">→</span>
                Want self-assessment filing included without extra cost
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand shrink-0">→</span>
                Are a freelancer, consultant, or contractor
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand shrink-0">→</span>
                Want a simpler, less overwhelming platform
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-foreground mb-4">Full Feature Comparison</h2>
        <ComparisonTable
          providers={[xero, freeagent]}
          features={features}
          highlightedProvider="freeagent"
        />
      </section>

      {/* Pros and Cons */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-foreground mb-5">Pros and Cons</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <p className="font-semibold text-foreground mb-3 text-base">Xero</p>
            <ProsConsList pros={xero.pros} cons={xero.cons} layout="stacked" />
          </div>
          <div>
            <p className="font-semibold text-foreground mb-3 text-base">FreeAgent</p>
            <ProsConsList pros={freeagent.pros} cons={freeagent.cons} layout="stacked" />
          </div>
        </div>
      </section>

      {/* Key differences */}
      <section className="mb-12 space-y-8">
        <h2 className="text-xl font-bold text-foreground">Key Differences Explained</h2>

        <div>
          <h3 className="text-base font-bold text-foreground mb-3">
            The NatWest/RBS Factor
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            This is the most significant factor in the Xero vs FreeAgent decision for many sole
            traders. FreeAgent has a partnership with NatWest and RBS that gives qualifying business
            account holders full access to the platform for free. This includes MTD Income Tax
            submissions, self-assessment filing, invoicing, and expense tracking — everything. If
            you already bank with NatWest or RBS (or are willing to switch), FreeAgent at £0/month
            is an exceptional deal.
          </p>

          <InfoCallout type="tip" className="mt-4" title="Check your eligibility">
            NatWest and RBS offer FreeAgent free to business account holders, but the account type
            matters. Check directly with your bank whether your specific account qualifies. Many
            standard business current accounts are eligible.
          </InfoCallout>
        </div>

        <div>
          <h3 className="text-base font-bold text-foreground mb-3">Self-Assessment Filing</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            FreeAgent includes self-assessment (SA100) filing in its standard plans. This is a
            genuine cost saving — many sole traders pay an accountant £100–£300 per year purely
            for this service. Xero does not file self-assessment directly; users either work with
            an accountant or rely on MTD submissions covering self-employment income.
          </p>
        </div>

        <div>
          <h3 className="text-base font-bold text-foreground mb-3">
            Features and Integrations
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Xero has a significantly larger integrations marketplace — over 800 third-party apps
            compared to FreeAgent&apos;s 20+. If you rely on specific tools (Stripe, Shopify, HubSpot,
            SquareSpace), Xero is more likely to have a native integration. For most sole traders
            and freelancers, FreeAgent&apos;s integrations are sufficient — but if you need to connect
            multiple platforms, Xero is the safer choice.
          </p>
        </div>

        <div>
          <h3 className="text-base font-bold text-foreground mb-3">Simplicity vs Power</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            FreeAgent scores higher on ease of use. It was designed specifically for people who
            are not accountants — the tax timeline, simple dashboard, and guided workflows make it
            approachable. Xero is intuitive by accounting software standards, but it has more
            screens, more options, and more complexity. For most freelancers and sole traders,
            FreeAgent&apos;s simplicity is a feature, not a limitation.
          </p>
        </div>
      </section>

      {/* Verdict */}
      <section className="mb-12 rounded-xl border-2 border-brand/20 bg-brand-light p-6">
        <h2 className="text-lg font-bold text-foreground mb-4">The Verdict</h2>
        <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
          <p>
            <strong className="text-foreground">For freelancers and NatWest/RBS customers:</strong>{' '}
            FreeAgent wins, and it&apos;s not close. If you can get it for free via your bank, there
            is almost no reason to pay £16/month for Xero instead. FreeAgent is simpler,
            purpose-built for your situation, and includes self-assessment filing.
          </p>
          <p>
            <strong className="text-foreground">
              For sole traders who invoice clients and need to grow:
            </strong>{' '}
            Xero is the better long-term platform. Its invoicing tools, mobile app, and integrations
            ecosystem make it easier to scale. If you anticipate taking on staff, expanding your
            client base significantly, or needing specialist software integrations, Xero is the
            right investment.
          </p>
          <p>
            <strong className="text-foreground">On price:</strong> FreeAgent at £19/month (or
            free via NatWest/RBS) is competitive with Xero at £16/month given that FreeAgent
            includes self-assessment filing. On a like-for-like basis, FreeAgent often works out
            cheaper once you factor in accountant fees saved.
          </p>
        </div>
      </section>

      {/* Alternative options */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-foreground mb-4">Alternative Options</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              name: 'QuickBooks',
              slug: 'quickbooks',
              summary: 'More features than FreeAgent at comparable pricing. The Self-Employed plan at £8/month is the cheapest compliant MTD option.',
            },
            {
              name: 'Sage',
              slug: 'sage',
              summary: 'UK-native with UK-based phone support. Good for sole traders who prefer established UK brands.',
            },
          ].map((alt) => (
            <Link
              key={alt.slug}
              href={`/reviews/${alt.slug}`}
              className="rounded-lg border border-border bg-white p-4 hover:border-brand hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-foreground mb-1">{alt.name}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{alt.summary}</p>
              <p className="text-xs text-brand mt-2 font-medium">Read review →</p>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-foreground mb-5">Frequently Asked Questions</h2>
        <FAQAccordion faqs={faqs} headingLevel="h3" includeSchema />
      </section>

      <CTABlock
        heading="Ready to choose between Xero and FreeAgent?"
        description="Both offer 30-day free trials. NatWest/RBS customers can activate FreeAgent for free right now."
        primaryCta={{ label: 'Try FreeAgent free', href: freeagent.affiliateLink }}
        secondaryCta={{ label: 'Try Xero free', href: xero.affiliateLink }}
        variant="brand"
      />
    </div>
  )
}
