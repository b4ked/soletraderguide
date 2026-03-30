import Link from 'next/link'
import {
  FileText,
  HeadphonesIcon,
  Receipt,
  Landmark,
  TrendingUp,
  Users,
} from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { AffiliateDisclosure } from '@/components/trust/AffiliateDisclosure'
import { ReviewedBy } from '@/components/trust/ReviewedBy'
import { LastUpdated } from '@/components/trust/LastUpdated'
import { QuickVerdict } from '@/components/comparison/QuickVerdict'
import { ProsConsList } from '@/components/comparison/ProsConsList'
import { FeatureGrid } from '@/components/comparison/FeatureGrid'
import { InfoCallout } from '@/components/common/InfoCallout'
import { FAQAccordion } from '@/components/common/FAQAccordion'
import { CTABlock } from '@/components/common/CTABlock'
import { sage } from '@/data/providers'

export const metadata = genMeta({
  title: 'Sage Accounting Review: MTD Software for Sole Traders (2025)',
  description:
    'An in-depth Sage Accounting review for UK sole traders. We cover MTD compatibility, pricing, UK support, pros and cons, and whether Sage is worth it in 2025.',
  canonicalPath: '/reviews/sage',
  pageType: 'review',
  updatedDate: '2025-03-01',
})

const features = [
  {
    name: 'MTD Income Tax Submissions',
    description:
      'Sage Accounting is HMRC-recognised for MTD ITSA. Quarterly updates are compiled from your records and submitted directly, helping you stay compliant without needing an accountant.',
    icon: FileText,
  },
  {
    name: 'UK-Based Customer Support',
    description:
      "Sage offers UK-based phone and chat support — a genuine differentiator from US-headquartered rivals. If you prefer to pick up the phone and speak to someone, Sage has the edge.",
    icon: HeadphonesIcon,
  },
  {
    name: 'Invoicing',
    description:
      'Create professional invoices, set up payment terms, and track outstanding payments. Sage supports both one-off and recurring invoices for sole traders with regular clients.',
    icon: Receipt,
  },
  {
    name: 'Bank Reconciliation',
    description:
      'Connect your UK bank account for automatic transaction imports. Sage learns your categorisation preferences and makes reconciliation faster with each passing month.',
    icon: Landmark,
  },
  {
    name: 'Cash Flow Forecasting',
    description:
      "Sage's cash flow forecasting tool gives you a forward view of your expected income and expenses — useful for sole traders managing irregular income.",
    icon: TrendingUp,
  },
  {
    name: 'Payroll Add-on',
    description:
      "If you take on staff or pay yourself a salary, Sage's payroll module can be added to your subscription. It's fully RTI-compliant and integrates with your accounts.",
    icon: Users,
  },
]

const faqs = [
  {
    question: 'Is Sage Accounting approved for MTD Income Tax?',
    answer:
      "Yes. Sage Accounting (formerly Sage One) is on HMRC's approved software list for Making Tax Digital for Income Tax Self Assessment. It can submit quarterly updates and the End of Period Statement directly to HMRC.",
  },
  {
    question: "What's the difference between Sage 50 and Sage Accounting?",
    answer:
      "Sage 50 is Sage's desktop-based product aimed at larger SMEs with more complex accounting needs. Sage Accounting (sometimes shown as Sage Accounting Start or just Sage Business Cloud) is the cloud-based product designed for sole traders and small businesses. Most sole traders will want Sage Accounting, not Sage 50.",
  },
  {
    question: 'Is Sage good for sole traders specifically?',
    answer:
      "Yes, particularly via the Sage Accounting Start plan. This plan is priced and designed for sole traders — it covers MTD Income Tax submissions, invoicing, and bank reconciliation at £15/month. It's less feature-rich than the full Sage Accounting plan but sufficient for most straightforward self-employed situations.",
  },
  {
    question: 'Does Sage file my self-assessment tax return?',
    answer:
      "Under MTD for Income Tax, quarterly updates and the End of Period Statement submitted via Sage replace the traditional Self Assessment return for self-employment income. If you have other income sources (employment, savings interest, etc.) you may need to make a final declaration separately via HMRC. We recommend speaking to an accountant if you're unsure.",
  },
  {
    question: 'Does Sage offer a free trial?',
    answer:
      'Yes. Sage typically offers a 30-day free trial. Check their website for current promotions — Sage frequently runs extended trial offers or discounted first-period pricing.',
  },
]

export default function SageReviewPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Reviews', href: '/reviews' },
          { label: 'Sage' },
        ]}
      />

      <AffiliateDisclosure variant="banner" className="mb-8" />

      {/* Header */}
      <header className="mb-8">
        <span className="inline-block rounded-full bg-brand-light px-3 py-1 text-xs font-semibold text-brand mb-3">
          Software Review
        </span>
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Sage Accounting Review: MTD Software for Sole Traders (2025)
        </h1>
        <div className="flex flex-wrap items-center gap-3">
          <LastUpdated date="2025-03-01" />
          <ReviewedBy
            name="SoleTraderGuide Editorial Team"
            role="UK Tax Content Specialists"
            date="2026-03-01"
          />
        </div>
      </header>

      {/* Quick Verdict */}
      <QuickVerdict
        score={3.5}
        verdict="Sage Accounting is a reliable, HMRC-recognised MTD platform built by a well-established UK company. Its UK-based support is a genuine differentiator, and the Accounting Start plan is competitively priced for sole traders. However, the interface is less polished than Xero or QuickBooks, and the integrations ecosystem is smaller. Best for sole traders who value UK support and compliance confidence."
        bestFor="Established sole traders who value UK-based support"
        price="From £15/month (Accounting Start)"
        logo={sage.logo}
        name={sage.name}
        className="mb-8"
      />

      {/* Jump to nav */}
      <nav aria-label="Page sections" className="mb-10 rounded-lg border border-border bg-muted/30 p-4">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
          Jump to
        </p>
        <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
          {[
            ['Pros and Cons', '#pros-cons'],
            ['Key Features', '#features'],
            ['MTD Suitability', '#mtd'],
            ['Pricing', '#pricing'],
            ["Who It's Best For", '#best-for'],
            ['Alternatives', '#alternatives'],
            ['FAQ', '#faq'],
          ].map(([label, href]) => (
            <li key={href}>
              <a href={href} className="text-brand hover:underline underline-offset-2">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Pros and Cons */}
      <section id="pros-cons" className="mb-12">
        <h2 className="text-xl font-bold text-foreground mb-5">Pros and Cons</h2>
        <ProsConsList
          pros={sage.pros}
          cons={sage.cons}
          layout="side-by-side"
        />
      </section>

      {/* Key Features */}
      <section id="features" className="mb-12">
        <h2 className="text-xl font-bold text-foreground mb-2">Key Features</h2>
        <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
          Sage Accounting covers the essentials for sole trader bookkeeping and MTD compliance. Here
          are the six features most relevant for self-employed users.
        </p>
        <FeatureGrid features={features} columns={3} />
      </section>

      {/* MTD Suitability */}
      <section id="mtd" className="mb-12">
        <h2 className="text-xl font-bold text-foreground mb-4">
          Is Sage Good for MTD Income Tax?
        </h2>

        <InfoCallout type="info" title="HMRC-recognised software">
          Sage Accounting is listed on HMRC&apos;s approved software list for Making Tax Digital for
          Income Tax Self Assessment. It can submit quarterly updates and the End of Period Statement
          directly to HMRC.
        </InfoCallout>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Sage has been a leading name in UK accountancy software for decades, and this heritage
          shows in their approach to MTD compliance. Being a UK-headquartered company, Sage tends
          to track HMRC rule changes closely — quarterly deadlines, threshold changes, and reporting
          format updates are incorporated into the software quickly.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          The Accounting Start plan covers the core MTD workflow: connect your bank account, import
          and categorise transactions, and submit quarterly updates to HMRC. The compliance focus is
          strong — the dashboard makes it clear what has been submitted and what is outstanding.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          For the End of Period Statement (EOPS), Sage handles the submission process as part of
          its MTD workflow. After confirming your year-end figures, the software submits the EOPS
          directly to HMRC, which is the penultimate step in the annual MTD process for sole traders.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          One area where Sage stands out is customer support. If you have a question about how to
          categorise an expense or why a quarterly submission looks different from last quarter, you
          can pick up the phone and speak to a UK-based support agent. For sole traders who are not
          confident with accounting software, this is genuinely reassuring.
        </p>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mb-12">
        <h2 className="text-xl font-bold text-foreground mb-4">How Much Does Sage Cost?</h2>
        <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
          Sage Accounting offers two main plans for sole traders and small businesses.
        </p>

        <div className="rounded-xl border border-border overflow-hidden mb-5">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="px-5 py-3 text-left font-semibold text-foreground">Plan</th>
                <th className="px-5 py-3 text-left font-semibold text-foreground">Price</th>
                <th className="px-5 py-3 text-left font-semibold text-foreground">What&apos;s included</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-5 py-3 font-medium text-foreground">Accounting Start</td>
                <td className="px-5 py-3 text-brand font-semibold">£15/month</td>
                <td className="px-5 py-3 text-muted-foreground">
                  Sole trader plan — MTD submissions, invoicing, bank reconciliation
                </td>
              </tr>
              <tr className="bg-muted/20">
                <td className="px-5 py-3 font-medium text-foreground">Accounting</td>
                <td className="px-5 py-3 text-brand font-semibold">£30/month</td>
                <td className="px-5 py-3 text-muted-foreground">
                  Everything in Start + cash flow forecasting, purchase invoices, multi-currency
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <InfoCallout type="tip" title="Check for promotional pricing">
          Sage frequently runs discounts for new customers — often 50% off for the first few months.
          Always check the{' '}
          <a
            href={sage.pricingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            Sage pricing page
          </a>{' '}
          for the current offer before subscribing.
        </InfoCallout>

        <div className="flex items-center gap-3 mt-5">
          <a
            href={sage.affiliateLink}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark transition-colors"
          >
            Start Sage free trial
          </a>
          <AffiliateDisclosure variant="inline" />
        </div>
      </section>

      {/* Best for */}
      <section id="best-for" className="mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
            <h2 className="text-base font-bold text-emerald-800 mb-3">Who Sage is Best For</h2>
            <ul className="space-y-2 text-sm text-foreground">
              {[
                'UK-focused sole traders who want UK-based phone support',
                'Established businesses wanting a trusted brand',
                'Those who value compliance confidence above slick design',
                'Sole traders whose accountant uses Sage',
                'Businesses that may add payroll in future',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5 shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-red-200 bg-red-50 p-5">
            <h2 className="text-base font-bold text-red-800 mb-3">Who Should Look Elsewhere</h2>
            <ul className="space-y-2 text-sm text-foreground">
              {[
                "Beginners who want the slickest, most intuitive interface",
                'Those who need lots of third-party app integrations',
                'Sole traders wanting a polished mobile app experience',
                'NatWest/RBS customers (FreeAgent is free for them)',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5 shrink-0">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Alternatives */}
      <section id="alternatives" className="mb-12">
        <h2 className="text-xl font-bold text-foreground mb-5">Alternatives to Sage</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              name: 'Xero',
              slug: 'xero',
              summary: 'More integrations and a cleaner interface. Comparable pricing. Better for those who need 800+ app connections.',
            },
            {
              name: 'QuickBooks',
              slug: 'quickbooks',
              summary: 'More features at comparable pricing, with a dedicated Self-Employed plan. Better mobile experience.',
            },
            {
              name: 'FreeAgent',
              slug: 'freeagent',
              summary: 'Simpler and freelancer-focused. Includes self-assessment filing. Free with NatWest/RBS accounts.',
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
      <section id="faq" className="mb-12">
        <h2 className="text-xl font-bold text-foreground mb-5">Frequently Asked Questions</h2>
        <FAQAccordion faqs={faqs} headingLevel="h3" includeSchema />
      </section>

      {/* Editorial methodology */}
      <section className="mb-10 rounded-lg border border-border bg-muted/30 p-5 text-sm text-muted-foreground leading-relaxed">
        <p>
          <strong className="text-foreground font-semibold">Editorial note:</strong> This review
          was produced by the SoleTraderGuide editorial team. We assess software based on hands-on
          testing, published documentation, and user feedback. Our ratings are independent of
          commercial arrangements. We may earn a commission if you purchase via our links.{' '}
          <Link href="/editorial-policy" className="text-brand underline underline-offset-2">
            Read our editorial policy
          </Link>
          .
        </p>
      </section>

      <CTABlock
        heading="Ready to try Sage Accounting?"
        description="Start a 30-day free trial and see if Sage is the right MTD software for your sole trader business."
        primaryCta={{ label: 'Start free trial', href: sage.affiliateLink }}
        secondaryCta={{ label: 'Compare all software', href: '/comparisons' }}
        variant="brand"
      />
    </div>
  )
}
