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
import { xero, quickbooks } from '@/data/providers'
import type { ComparisonFeature } from '@/types'

export const metadata = genMeta({
  title: 'Xero vs QuickBooks for Sole Traders: Which is Better for MTD? (2025)',
  description:
    'Xero vs QuickBooks compared for UK sole traders in 2025. We look at MTD compatibility, pricing, ease of use, features, and who each platform is best for.',
  canonicalPath: '/comparisons/xero-vs-quickbooks',
  pageType: 'comparison',
  updatedDate: '2025-03-01',
})

const features: ComparisonFeature[] = [
  {
    name: 'MTD compatible',
    description: 'HMRC-recognised for MTD Income Tax',
    values: { xero: true, quickbooks: true },
  },
  {
    name: 'Starting price',
    values: { xero: '£16/month', quickbooks: '£8/month' },
  },
  {
    name: 'Free plan available',
    values: { xero: false, quickbooks: false },
  },
  {
    name: 'Free trial',
    values: { xero: '30 days', quickbooks: '30 days' },
  },
  {
    name: 'Supports sole traders',
    values: { xero: true, quickbooks: true },
  },
  {
    name: 'Supports landlords',
    values: { xero: true, quickbooks: false },
  },
  {
    name: 'Mobile app quality',
    values: { xero: 'Excellent', quickbooks: 'Good' },
  },
  {
    name: 'Ease of use (1–5)',
    values: { xero: '4 / 5', quickbooks: '3.5 / 5' },
  },
  {
    name: 'UK customer support',
    values: { xero: 'Chat + email', quickbooks: 'Chat + phone' },
  },
  {
    name: 'Integrations',
    values: { xero: '800+ apps', quickbooks: '650+ apps' },
  },
  {
    name: 'Self-assessment filing',
    values: { xero: 'Via accountant', quickbooks: 'Via accountant' },
  },
]

const faqs = [
  {
    question: 'Is Xero or QuickBooks better for MTD?',
    answer:
      'Both are equally capable for MTD Income Tax — both are HMRC-recognised and handle quarterly updates and EOPS submissions. The difference is in the wider platform. Xero has a cleaner interface and better mobile app. QuickBooks has more features at lower price tiers, particularly the Self-Employed plan at £8/month.',
  },
  {
    question: 'Which is cheaper — Xero or QuickBooks?',
    answer:
      "QuickBooks is cheaper at the entry level. The Self-Employed plan at £8/month is significantly less expensive than Xero's Starter at £16/month. However, if you need full bookkeeping (invoicing, bank feeds, MTD), the comparison is QuickBooks Simple Start at £14/month versus Xero Starter at £16/month — a smaller difference.",
  },
  {
    question: 'Can I switch from QuickBooks to Xero (or vice versa)?',
    answer:
      'Yes. Both platforms support CSV imports, allowing you to migrate historical data. If you use an accountant, they can often assist with migration. Plan the switch at the start of a new tax year if possible, to minimise complexity with mid-year figures.',
  },
  {
    question: 'Which has better UK support — Xero or QuickBooks?',
    answer:
      "Both offer UK-based support, but QuickBooks includes phone support on its plans, which Xero doesn't. Xero's online help centre and chat support are generally considered very responsive. For complex queries, QuickBooks phone support can be more convenient.",
  },
  {
    question: 'Do Xero or QuickBooks include self-assessment filing?',
    answer:
      "Neither Xero nor QuickBooks files a traditional Self Assessment return (SA100) directly. Under MTD for Income Tax, the quarterly updates and EOPS replace the annual return for self-employment income. Both platforms submit these to HMRC. For a final declaration or other income types, users typically work with an accountant. FreeAgent is the exception — it includes self-assessment filing in its standard plan.",
  },
]

export default function XeroVsQuickBooksPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Comparisons', href: '/comparisons' },
          { label: 'Xero vs QuickBooks' },
        ]}
      />

      <AffiliateDisclosure variant="banner" className="mb-8" />

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Xero vs QuickBooks for Sole Traders: Which is Better for MTD? (2025)
        </h1>
        <div className="flex flex-wrap items-center gap-3">
          <LastUpdated date="2025-03-01" />
          <ReviewedBy
            name="SoleTraderGuide Editorial Team"
            role="MTD Software Analyst"
            date="2025-03-01"
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
              <li>Clean, intuitive interface — great for beginners</li>
              <li>Best-in-class mobile app for on-the-go accounting</li>
              <li>800+ integrations; excellent for growing businesses</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-2">QuickBooks</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>Cheaper entry point with the Self-Employed plan (£8/month)</li>
              <li>More features at comparable price tiers</li>
              <li>Phone support available; better for those who like to call</li>
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
                Want the cleanest, most polished interface
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand shrink-0">→</span>
                Invoice clients regularly and need strong invoicing tools
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand shrink-0">→</span>
                Need lots of third-party integrations (CRM, payments, etc.)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand shrink-0">→</span>
                Primarily work on mobile
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-white p-5">
            <p className="font-bold text-foreground mb-3">Choose QuickBooks if you...</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-brand shrink-0">→</span>
                Have simple finances and want the cheapest MTD option (£8/month)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand shrink-0">→</span>
                Want mileage tracking and receipt capture built in
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand shrink-0">→</span>
                Prefer to call support when you have an issue
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand shrink-0">→</span>
                Need a tax liability estimate visible at all times
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-foreground mb-4">Full Feature Comparison</h2>
        <ComparisonTable
          providers={[xero, quickbooks]}
          features={features}
          highlightedProvider="xero"
        />
      </section>

      {/* Pros and Cons side by side */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-foreground mb-5">Pros and Cons</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <p className="font-semibold text-foreground mb-3 text-base">Xero</p>
            <ProsConsList pros={xero.pros} cons={xero.cons} layout="stacked" />
          </div>
          <div>
            <p className="font-semibold text-foreground mb-3 text-base">QuickBooks</p>
            <ProsConsList pros={quickbooks.pros} cons={quickbooks.cons} layout="stacked" />
          </div>
        </div>
      </section>

      {/* Key differences */}
      <section className="mb-12 space-y-8">
        <h2 className="text-xl font-bold text-foreground">Key Differences Explained</h2>

        <div>
          <h3 className="text-base font-bold text-foreground mb-3">Pricing</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            At the entry level, QuickBooks wins on price. The Self-Employed plan at £8/month is
            the cheapest HMRC-recognised MTD option among the major platforms. Xero&apos;s Starter
            plan begins at £16/month. However, once you step up to full bookkeeping plans — where
            invoicing and bank reconciliation are included — the gap narrows. QuickBooks Simple
            Start is £14/month versus Xero Starter at £16/month. Both offer 30-day free trials.
          </p>
        </div>

        <div>
          <h3 className="text-base font-bold text-foreground mb-3">Interface and Ease of Use</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Xero has long been praised for its clean, logical interface. For sole traders who are
            new to accounting software, Xero&apos;s layout is less overwhelming. QuickBooks packs more
            features into its screens, which makes it feel busier — some users love this, others
            find it distracting. This is worth testing yourself during a free trial; interface
            preference is personal.
          </p>
        </div>

        <div>
          <h3 className="text-base font-bold text-foreground mb-3">Mobile Apps</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Xero&apos;s mobile app is consistently rated more highly by users and in app store reviews.
            It allows full invoicing, bank reconciliation, and expense capture on the go. QuickBooks&apos;
            mobile app is functional but less polished. If you do a significant amount of your work
            on a phone, Xero has the edge here.
          </p>
        </div>

        <div>
          <h3 className="text-base font-bold text-foreground mb-3">MTD and Self-Assessment</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Both platforms are HMRC-recognised for MTD Income Tax and handle quarterly updates and
            EOPS submissions. Neither files a traditional Self Assessment return directly — for this,
            users typically work with an accountant or consider FreeAgent, which includes
            self-assessment filing in its plans.
          </p>

          <InfoCallout type="info" className="mt-4" title="Note on self-assessment filing">
            If having self-assessment filing built in is important to you,{' '}
            <Link href="/reviews/freeagent" className="underline underline-offset-2">
              FreeAgent
            </Link>{' '}
            is the only major platform that includes this as standard. NatWest and RBS business
            account holders get FreeAgent for free.
          </InfoCallout>
        </div>
      </section>

      {/* Verdict */}
      <section className="mb-12 rounded-xl border-2 border-brand/20 bg-brand-light p-6">
        <h2 className="text-lg font-bold text-foreground mb-4">The Verdict</h2>
        <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
          <p>
            <strong className="text-foreground">For most established sole traders:</strong> Xero
            edges ahead on interface quality, mobile experience, and integrations. If you regularly
            invoice clients and want software that feels professional, Xero is the better choice.
          </p>
          <p>
            <strong className="text-foreground">For sole traders with simple finances:</strong>{' '}
            QuickBooks Self-Employed at £8/month is hard to argue with. It covers MTD, mileage, and
            basic expenses at a price that&apos;s almost half of Xero&apos;s entry-level plan.
          </p>
          <p>
            <strong className="text-foreground">If budget is the primary concern:</strong> Start
            with QuickBooks Self-Employed and upgrade if you outgrow it. If you eventually need
            proper invoicing and bank reconciliation, you can move to QuickBooks Simple Start or
            switch to Xero at that point.
          </p>
        </div>
      </section>

      {/* Alternative options */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-foreground mb-4">Alternative Options</h2>
        <p className="text-sm text-muted-foreground mb-5">
          Neither Xero nor QuickBooks the right fit? Here are two other strong options:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              name: 'FreeAgent',
              slug: 'freeagent',
              summary: 'Purpose-built for freelancers. Includes self-assessment filing. Free with NatWest/RBS business accounts.',
            },
            {
              name: 'Sage',
              slug: 'sage',
              summary: 'UK-native with UK-based phone support. Good for sole traders who prefer domestic software and local support.',
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
        heading="Ready to choose your MTD software?"
        description="Both Xero and QuickBooks offer 30-day free trials. Test both and decide for yourself — no commitment required."
        primaryCta={{ label: 'Try Xero free', href: xero.affiliateLink }}
        secondaryCta={{ label: 'Try QuickBooks free', href: quickbooks.affiliateLink }}
        variant="brand"
      />
    </div>
  )
}
