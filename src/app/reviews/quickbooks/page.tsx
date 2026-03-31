import Link from 'next/link'
import {
  FileText,
  Car,
  Camera,
  Landmark,
  ClipboardList,
  BarChart2,
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
import { quickbooks } from '@/data/providers'

export const metadata = genMeta({
  title: 'QuickBooks Review: MTD Software for Sole Traders (2025)',
  description:
    'A detailed, honest QuickBooks review for UK sole traders. We assess MTD compatibility, pricing plans including the Self-Employed option, key features, pros and cons, and who it suits best.',
  canonicalPath: '/reviews/quickbooks',
  pageType: 'review',
  updatedDate: '2026-03-31',
})

const features = [
  {
    name: 'MTD Income Tax Submissions',
    description:
      'QuickBooks is HMRC-recognised for MTD ITSA. Quarterly updates are compiled from your categorised transactions and submitted directly to HMRC.',
    icon: FileText,
  },
  {
    name: 'Mileage Tracking',
    description:
      'The mobile app uses your phone GPS to automatically track business journeys. An under-appreciated feature that can save sole traders a significant tax deduction.',
    icon: Car,
  },
  {
    name: 'Receipt Capture',
    description:
      'Photograph receipts with your phone and QuickBooks will extract the key data automatically. Expenses are matched against bank transactions to save time.',
    icon: Camera,
  },
  {
    name: 'Bank Feeds',
    description:
      'Connect your UK business or personal bank account for daily automatic imports. QuickBooks uses machine learning to categorise transactions over time.',
    icon: Landmark,
  },
  {
    name: 'Self-Assessment Integration',
    description:
      'The QuickBooks Self-Employed plan is tailored for sole traders, separating business and personal spending and preparing your figures for tax time.',
    icon: ClipboardList,
  },
  {
    name: 'Reporting Dashboard',
    description:
      'Clear profit and loss reports, tax estimates, and cash flow summaries give you a real-time view of your business finances without needing an accountant.',
    icon: BarChart2,
  },
]

const faqs = [
  {
    question: 'Is QuickBooks approved for MTD Income Tax?',
    answer:
      'Yes. QuickBooks is on HMRC\'s approved list of software for Making Tax Digital for Income Tax Self Assessment. Both the QuickBooks Self-Employed and Simple Start plans can submit quarterly updates and EOPS directly to HMRC.',
  },
  {
    question: "What's the difference between QuickBooks Self-Employed and Simple Start?",
    answer:
      'QuickBooks Self-Employed (from £8/month) is a lightweight product designed specifically for sole traders with simple finances — it separates business and personal transactions and handles MTD. Simple Start (from £14/month) is a full bookkeeping product with invoicing, VAT, and more reporting. Most sole traders with clients should opt for Simple Start or above.',
  },
  {
    question: 'Does QuickBooks file my self-assessment tax return?',
    answer:
      'QuickBooks does not file a full Self Assessment return (SA100) in the traditional sense. Under MTD for Income Tax, your quarterly updates and EOPS replace the annual return for self-employment and property income. For other income sources you may need to make a final declaration via HMRC\'s online service. Many users work with an accountant for this step.',
  },
  {
    question: 'Can I migrate from a spreadsheet to QuickBooks?',
    answer:
      'Yes. QuickBooks accepts CSV imports, so you can bring in historical transaction data from an Excel or Google Sheets spreadsheet. The process takes a bit of time to set up correctly, but it means you can start with your historical data intact rather than beginning from scratch.',
  },
  {
    question: 'Does QuickBooks offer a free trial?',
    answer:
      'Yes. QuickBooks offers a 30-day free trial on its main plans. This is a full trial with no credit card required, giving you enough time to connect your bank account and test the MTD workflow.',
  },
]

export default function QuickBooksReviewPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Reviews', href: '/reviews' },
          { label: 'QuickBooks' },
        ]}
      />

      <AffiliateDisclosure variant="banner" className="mb-8" />

      {/* Header */}
      <header className="mb-8">
        <span className="inline-block rounded-full bg-brand-light px-3 py-1 text-xs font-semibold text-brand mb-3">
          Software Review
        </span>
        <h1 className="text-3xl font-bold text-foreground mb-4">
          QuickBooks Review: MTD Software for Sole Traders (2025)
        </h1>
        <div className="flex flex-wrap items-center gap-3">
          <LastUpdated date="2026-03-31" />
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
        verdict="QuickBooks is a comprehensive, HMRC-recognised MTD platform with one of the widest feature sets available for UK sole traders. The Self-Employed plan offers an affordable entry point, while the higher tiers are among the most capable accounting tools on the market. Its interface can feel busy, but the depth of functionality is hard to beat."
        bestFor="Sole traders wanting comprehensive features and strong reporting"
        price="From £8/month (Self-Employed)"
        logo={quickbooks.logo}
        name={quickbooks.name}
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
          pros={quickbooks.pros}
          cons={quickbooks.cons}
          layout="side-by-side"
        />
      </section>

      {/* Key Features */}
      <section id="features" className="mb-12">
        <h2 className="text-xl font-bold text-foreground mb-2">Key Features</h2>
        <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
          QuickBooks packs a large number of features into its platform. Here are the six most
          relevant for sole traders using it for MTD.
        </p>
        <FeatureGrid features={features} columns={3} />
      </section>

      {/* MTD Suitability */}
      <section id="mtd" className="mb-12">
        <h2 className="text-xl font-bold text-foreground mb-4">
          Is QuickBooks Good for MTD Income Tax?
        </h2>

        <InfoCallout type="info" title="HMRC-recognised software">
          QuickBooks is listed on HMRC&apos;s approved software list for MTD Income Tax Self
          Assessment. Both the Self-Employed and Simple Start plans can submit quarterly updates
          and an End of Period Statement directly to HMRC.
        </InfoCallout>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          QuickBooks is developed by Intuit, a large US-based financial software company with a
          dedicated UK team. The platform&apos;s MTD capability is well-developed and regularly
          updated to reflect HMRC rule changes. Intuit&apos;s scale means the software is unlikely
          to miss a deadline or be caught off-guard by a regulatory shift.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          The Self-Employed plan is a notable option for sole traders with simpler finances. It is
          essentially a lightweight MTD tool — it separates business and personal transactions, tracks
          mileage, captures receipts, and submits quarterly updates. For sole traders earning under
          the £50,000 threshold with relatively straightforward income, it is one of the most
          affordable compliant options on the market.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          For more complex businesses — those with invoicing needs, VAT registration, or multiple
          projects — the Simple Start or Essentials plans provide the full bookkeeping suite alongside
          MTD submissions. The quarterly updates are built into the workflow: as you categorise
          income and expenses, QuickBooks compiles the quarterly figures in the background.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The self-assessment integration is worth highlighting. QuickBooks uses your categorised
          transactions to produce an estimate of your tax liability — visible on your dashboard at
          any point in the year. This is a genuinely useful feature that helps sole traders avoid
          unexpected tax bills in January.
        </p>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mb-12">
        <h2 className="text-xl font-bold text-foreground mb-4">How Much Does QuickBooks Cost?</h2>
        <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
          QuickBooks offers multiple plans to suit different business sizes. All plans include MTD
          Income Tax submissions for sole traders.
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
                <td className="px-5 py-3 font-medium text-foreground">Self-Employed</td>
                <td className="px-5 py-3 text-brand font-semibold">£8/month</td>
                <td className="px-5 py-3 text-muted-foreground">
                  Basic MTD for sole traders, mileage tracking, receipt capture
                </td>
              </tr>
              <tr className="bg-muted/20">
                <td className="px-5 py-3 font-medium text-foreground">Simple Start</td>
                <td className="px-5 py-3 text-brand font-semibold">£14/month</td>
                <td className="px-5 py-3 text-muted-foreground">
                  Invoicing, expenses, bank feeds, MTD submissions
                </td>
              </tr>
              <tr>
                <td className="px-5 py-3 font-medium text-foreground">Essentials</td>
                <td className="px-5 py-3 text-brand font-semibold">£28/month</td>
                <td className="px-5 py-3 text-muted-foreground">
                  Everything in Simple Start + multi-user access, bill management
                </td>
              </tr>
              <tr className="bg-muted/20">
                <td className="px-5 py-3 font-medium text-foreground">Plus</td>
                <td className="px-5 py-3 text-brand font-semibold">£38/month</td>
                <td className="px-5 py-3 text-muted-foreground">
                  Everything in Essentials + project tracking, budgeting
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <InfoCallout type="warning" title="Prices may change">
          QuickBooks frequently offers introductory discounts. The prices above were correct at
          time of writing — always{' '}
          <a
            href={quickbooks.pricingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            check QuickBooks&apos; website
          </a>{' '}
          for current pricing and any active promotions.
        </InfoCallout>

        <div className="flex items-center gap-3 mt-5">
          <a
            href={quickbooks.affiliateLink}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark transition-colors"
          >
            Start QuickBooks free trial
          </a>
          <AffiliateDisclosure variant="inline" />
        </div>
      </section>

      {/* Best for */}
      <section id="best-for" className="mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
            <h2 className="text-base font-bold text-emerald-800 mb-3">
              Who QuickBooks is Best For
            </h2>
            <ul className="space-y-2 text-sm text-foreground">
              {[
                'Sole traders who want a comprehensive, feature-rich platform',
                'Those with a mix of income types (self-employment + property)',
                'Sole traders who drive for work and want mileage tracking',
                'Those already in the Intuit ecosystem (TurboTax users)',
                'Businesses that may employ staff in future',
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
                'Those on very tight budgets who need simple MTD only',
                'Users who prefer a clean, uncluttered interface',
                'NatWest/RBS account holders (FreeAgent is free)',
                'Sole traders who want self-assessment filing included',
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
        <h2 className="text-xl font-bold text-foreground mb-5">Alternatives to QuickBooks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              name: 'Xero',
              slug: 'xero',
              summary: 'Similar positioning to QuickBooks. Often considered to have a cleaner interface. Strong integrations ecosystem.',
            },
            {
              name: 'FreeAgent',
              slug: 'freeagent',
              summary: 'Simpler and freelancer-focused with self-assessment filing included. Free with NatWest/RBS accounts.',
            },
            {
              name: 'Sage',
              slug: 'sage',
              summary: 'UK-native product with UK-based support. Comparable pricing to QuickBooks Simple Start.',
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
        heading="Ready to try QuickBooks?"
        description="Start a 30-day free trial and explore whether QuickBooks is the right MTD software for your sole trader business."
        primaryCta={{ label: 'Start free trial', href: quickbooks.affiliateLink }}
        secondaryCta={{ label: 'Compare all software', href: '/comparisons' }}
        variant="brand"
      />
    </div>
  )
}
