import Link from 'next/link'
import {
  FileText,
  Landmark,
  Receipt,
  Wallet,
  BarChart2,
  Smartphone,
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
import { xero } from '@/data/providers'

export const metadata = genMeta({
  title: 'Xero Review: MTD Software for Sole Traders (2025)',
  description:
    'An honest, in-depth Xero review for sole traders. We cover MTD compatibility, pricing, ease of use, pros and cons, and who Xero is really best for in 2025.',
  canonicalPath: '/reviews/xero',
  pageType: 'review',
  updatedDate: '2025-03-01',
})

const features = [
  {
    name: 'Quarterly MTD Updates',
    description:
      'Xero handles all four quarterly MTD Income Tax submissions automatically, pulling data straight from your bank feed and categorised transactions.',
    icon: FileText,
  },
  {
    name: 'Bank Feeds',
    description:
      'Connect your UK bank account directly. Transactions import daily and Xero learns your categorisation preferences over time to speed up reconciliation.',
    icon: Landmark,
  },
  {
    name: 'Invoicing',
    description:
      'Create and send professional invoices, set up automatic payment reminders, and accept online payments. Ideal for sole traders who bill clients.',
    icon: Receipt,
  },
  {
    name: 'Expense Tracking',
    description:
      'Log expenses on the go with the mobile app. Snap a photo of a receipt and Xero extracts the data automatically using OCR.',
    icon: Wallet,
  },
  {
    name: 'Reporting',
    description:
      'Profit and loss reports, balance sheets, and cash flow statements are available at a click. Useful for understanding your business performance at a glance.',
    icon: BarChart2,
  },
  {
    name: 'Mobile App',
    description:
      "Xero's mobile app for iOS and Android is one of the best in the market — allowing invoicing, expense capture, and bank reconciliation on the go.",
    icon: Smartphone,
  },
]

const faqs = [
  {
    question: 'Is Xero approved for MTD Income Tax?',
    answer:
      'Yes. Xero is fully HMRC-recognised software for Making Tax Digital for Income Tax (MTD ITSA). It can submit your quarterly updates and End of Period Statement (EOPS) directly to HMRC. You can verify this on the HMRC website.',
  },
  {
    question: 'Does Xero handle self-assessment?',
    answer:
      'Xero does not file a traditional Self Assessment tax return (SA100) directly, but under MTD for Income Tax the quarterly updates and EOPS replace the annual return for income from self-employment and property. For other income sources you may still need to file a final declaration via HMRC. Many Xero users work with an accountant for this step.',
  },
  {
    question: 'Is Xero good for sole traders?',
    answer:
      'Xero is well-suited to sole traders who invoice clients, have multiple income streams, or want to grow their business. It can feel over-engineered for very simple businesses — if you just want basic expense tracking and MTD submissions, FreeAgent may be a simpler fit. But for sole traders who want room to scale, Xero is excellent.',
  },
  {
    question: "What's the cheapest Xero plan?",
    answer:
      "Xero's Starter plan starts at £16/month (prices may change — check Xero's website for current pricing). It includes invoicing, bank reconciliation, and MTD submissions. The main limitation on Starter is a cap on monthly invoices and bill entries, which won't affect most sole traders.",
  },
  {
    question: 'Can I try Xero for free?',
    answer:
      'Yes. Xero offers a 30-day free trial with no credit card required. This gives you full access to all features so you can assess whether it suits your workflow before committing.',
  },
]

export default function XeroReviewPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Reviews', href: '/reviews' },
          { label: 'Xero' },
        ]}
      />

      <AffiliateDisclosure variant="banner" className="mb-8" />

      {/* Header */}
      <header className="mb-8">
        <span className="inline-block rounded-full bg-brand-light px-3 py-1 text-xs font-semibold text-brand mb-3">
          Software Review
        </span>
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Xero Review: MTD Software for Sole Traders (2025)
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
        score={4}
        verdict="Xero is a powerful, HMRC-recognised MTD platform that suits sole traders who need more than just the basics. Its bank feeds, invoicing, and integrations ecosystem are genuinely impressive — but it comes at a cost, and simpler alternatives may serve very small businesses better."
        bestFor="Growing sole traders who want powerful features"
        price="From £16/month (Starter)"
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
          pros={xero.pros}
          cons={xero.cons}
          layout="side-by-side"
        />
      </section>

      {/* Key Features */}
      <section id="features" className="mb-12">
        <h2 className="text-xl font-bold text-foreground mb-2">Key Features</h2>
        <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
          Here are the six features that matter most for sole traders using Xero for MTD.
        </p>
        <FeatureGrid features={features} columns={3} />
      </section>

      {/* MTD Suitability */}
      <section id="mtd" className="mb-12">
        <h2 className="text-xl font-bold text-foreground mb-4">
          Is Xero Good for MTD Income Tax?
        </h2>

        <InfoCallout type="info" title="HMRC-recognised software">
          Xero is listed on HMRC&apos;s approved software list for Making Tax Digital for Income Tax
          Self Assessment (MTD ITSA). This means it can submit your quarterly updates and End of
          Period Statement directly to HMRC.
        </InfoCallout>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Xero was one of the earlier accounting platforms to gain HMRC recognition for MTD Income
          Tax. As a result, the MTD workflow is well-integrated — not bolted on as an afterthought.
          When you connect your bank account and categorise your income and expenses throughout the
          quarter, Xero compiles the quarterly update automatically.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          The four quarterly deadlines (7 August, 7 November, 7 February, and 7 May) are visible
          in your Xero dashboard, and the software will prompt you when submissions are due. This is
          genuinely helpful for sole traders who are not naturally organised with their bookkeeping.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          For the End of Period Statement (EOPS) — effectively your annual sign-off — Xero handles
          this too. The software compiles a summary of your year&apos;s figures and submits it to
          HMRC on your behalf. You then make any final adjustments via your final declaration.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The bank reconciliation feature is particularly valuable for MTD accuracy. By keeping your
          bank feed up to date and reconciling regularly, you reduce the risk of errors in your
          quarterly submissions. Xero&apos;s smart categorisation learns from your past behaviour,
          which speeds up the reconciliation process over time.
        </p>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mb-12">
        <h2 className="text-xl font-bold text-foreground mb-4">How Much Does Xero Cost?</h2>
        <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
          Xero uses a tiered subscription model. All plans include MTD Income Tax submissions. Prices
          are listed excluding VAT.
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
                <td className="px-5 py-3 font-medium text-foreground">Starter</td>
                <td className="px-5 py-3 text-brand font-semibold">£16/month</td>
                <td className="px-5 py-3 text-muted-foreground">
                  Invoicing, bills, bank reconciliation, MTD submissions
                </td>
              </tr>
              <tr className="bg-muted/20">
                <td className="px-5 py-3 font-medium text-foreground">Standard</td>
                <td className="px-5 py-3 text-brand font-semibold">£33/month</td>
                <td className="px-5 py-3 text-muted-foreground">
                  Everything in Starter + bulk reconciliation, multi-currency
                </td>
              </tr>
              <tr>
                <td className="px-5 py-3 font-medium text-foreground">Premium</td>
                <td className="px-5 py-3 text-brand font-semibold">£47/month</td>
                <td className="px-5 py-3 text-muted-foreground">
                  Everything in Standard + expense claims
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <InfoCallout type="warning" title="Prices may change">
          Xero periodically adjusts its pricing. The figures above were correct at the time of
          writing but we recommend{' '}
          <a
            href={xero.pricingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            checking Xero&apos;s website
          </a>{' '}
          for the most up-to-date prices before subscribing.
        </InfoCallout>

        <p className="text-sm text-muted-foreground mb-4">
          Most sole traders will find the Starter plan sufficient. The Standard and Premium plans
          are more relevant if you have employees or significant multi-currency transactions.
        </p>

        <div className="flex items-center gap-3">
          <a
            href={xero.affiliateLink}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark transition-colors"
          >
            Start Xero free trial
          </a>
          <AffiliateDisclosure variant="inline" />
        </div>
      </section>

      {/* Best for */}
      <section id="best-for" className="mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
            <h2 className="text-base font-bold text-emerald-800 mb-3">Who Xero is Best For</h2>
            <ul className="space-y-2 text-sm text-foreground">
              {[
                'Established sole traders with regular invoicing needs',
                'Sole traders who want strong accountant integrations',
                'Those needing 800+ third-party app connections',
                'Users who want a polished mobile experience',
                'Businesses planning to grow beyond sole trader status',
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
                'Complete beginners who find accounting software intimidating',
                'Sole traders on very tight budgets (under £10/month)',
                'Those with very simple books who only need basic MTD filing',
                'NatWest or RBS customers (FreeAgent is free for them)',
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
        <h2 className="text-xl font-bold text-foreground mb-5">Alternatives to Xero</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              name: 'QuickBooks',
              slug: 'quickbooks',
              summary: 'Similar pricing to Xero with more features at comparable tiers. Has a dedicated Self-Employed plan from £8/month.',
            },
            {
              name: 'FreeAgent',
              slug: 'freeagent',
              summary: 'Simpler and freelancer-focused. Free with qualifying NatWest/RBS accounts. Includes self-assessment filing.',
            },
            {
              name: 'Sage',
              slug: 'sage',
              summary: 'UK-native software with UK-based customer support. Good for sole traders who prefer domestic products.',
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
        heading="Ready to try Xero?"
        description="Start a 30-day free trial and see if Xero is the right MTD software for your sole trader business."
        primaryCta={{ label: 'Start free trial', href: xero.affiliateLink }}
        secondaryCta={{ label: 'Compare all software', href: '/comparisons' }}
        variant="brand"
      />
    </div>
  )
}
