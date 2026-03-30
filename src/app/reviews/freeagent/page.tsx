import Link from 'next/link'
import {
  FileText,
  ClipboardList,
  Receipt,
  CalendarClock,
  Clock,
  FolderKanban,
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
import { freeagent } from '@/data/providers'

export const metadata = genMeta({
  title: 'FreeAgent Review: MTD Software for Sole Traders and Freelancers (2025)',
  description:
    'A detailed FreeAgent review for UK sole traders and freelancers. Covers MTD compatibility, self-assessment filing, NatWest/RBS free access, pricing, pros and cons, and who it suits.',
  canonicalPath: '/reviews/freeagent',
  pageType: 'review',
  updatedDate: '2025-03-01',
})

const features = [
  {
    name: 'MTD Income Tax Submissions',
    description:
      'FreeAgent is fully HMRC-recognised for MTD ITSA. It submits your quarterly updates and End of Period Statement directly to HMRC from within the platform.',
    icon: FileText,
  },
  {
    name: 'Self-Assessment Filing Included',
    description:
      'Unlike most competitors, FreeAgent includes self-assessment tax return filing in its standard plans. This is a significant differentiator that saves sole traders accountant fees.',
    icon: ClipboardList,
  },
  {
    name: 'Invoice and Expense Tracking',
    description:
      'Create, send, and track invoices. Log expenses using the mobile app — photograph a receipt and FreeAgent extracts the data. All feeding directly into your MTD quarterly figures.',
    icon: Receipt,
  },
  {
    name: 'Tax Timeline Dashboard',
    description:
      "FreeAgent's tax timeline shows you all upcoming tax deadlines, estimated amounts owed, and what you've already paid. A unique feature that helps sole traders avoid January surprises.",
    icon: CalendarClock,
  },
  {
    name: 'Time Tracking',
    description:
      'Log time against projects or clients directly in FreeAgent. Hours are converted to invoices automatically — particularly useful for consultants and freelancers who bill by the hour.',
    icon: Clock,
  },
  {
    name: 'Project Tracking',
    description:
      'Track income and expenses against specific projects or clients. FreeAgent shows you which projects are profitable and which are not — essential intelligence for freelancers.',
    icon: FolderKanban,
  },
]

const faqs = [
  {
    question: 'Is FreeAgent really free?',
    answer:
      'FreeAgent is free for customers with a qualifying NatWest or RBS business bank account. If you bank with NatWest or RBS, you can access the full FreeAgent platform at no additional cost — this includes all MTD features and self-assessment filing. If you don\'t bank with them, the sole trader plan costs £19/month (after any trial period).',
  },
  {
    question: 'Is FreeAgent approved for MTD Income Tax?',
    answer:
      "Yes. FreeAgent is on HMRC's approved software list for Making Tax Digital for Income Tax Self Assessment. It can submit all four quarterly updates and the End of Period Statement directly to HMRC.",
  },
  {
    question: 'Does FreeAgent file my self-assessment tax return?',
    answer:
      'Yes — and this is one of FreeAgent\'s key selling points. FreeAgent can prepare and file your Self Assessment tax return (SA100) directly with HMRC, included in the standard plan. Under MTD for Income Tax, quarterly updates replace the traditional return for self-employment income, but FreeAgent handles this transition seamlessly.',
  },
  {
    question: 'Is FreeAgent good for landlords?',
    answer:
      'FreeAgent is primarily designed for freelancers and sole traders rather than property landlords. While it can track rental income and expenses, it lacks some of the property-specific features that dedicated landlord software offers. If property is your primary income source, you may want to look at specialist landlord software alongside FreeAgent.',
  },
  {
    question: 'Can I switch to FreeAgent mid-year?',
    answer:
      'Yes. You can switch to FreeAgent at any point during the tax year. You can import historical transactions via CSV, or simply start from the current date and manually enter any prior figures. FreeAgent\'s onboarding support team can help with migration. Switching mid-year does not affect your MTD obligations — FreeAgent will pick up submissions from where you are.',
  },
]

export default function FreeAgentReviewPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Reviews', href: '/reviews' },
          { label: 'FreeAgent' },
        ]}
      />

      <AffiliateDisclosure variant="banner" className="mb-8" />

      {/* Header */}
      <header className="mb-8">
        <span className="inline-block rounded-full bg-brand-light px-3 py-1 text-xs font-semibold text-brand mb-3">
          Software Review
        </span>
        <h1 className="text-3xl font-bold text-foreground mb-4">
          FreeAgent Review: MTD Software for Sole Traders and Freelancers (2025)
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
        score={4.5}
        verdict="FreeAgent is our top pick for freelancers and sole traders. It was purpose-built for self-employed people from day one, and it shows. The tax timeline dashboard, self-assessment filing, and MTD submissions are all included — and if you bank with NatWest or RBS, you get the whole platform for free. For NatWest/RBS customers, it is simply the best deal in the market."
        bestFor="Freelancers and sole traders — especially NatWest/RBS customers"
        price="£19/month sole trader plan (free with NatWest/RBS)"
        logo={freeagent.logo}
        name={freeagent.name}
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
          pros={freeagent.pros}
          cons={freeagent.cons}
          layout="side-by-side"
        />
      </section>

      {/* Key Features */}
      <section id="features" className="mb-12">
        <h2 className="text-xl font-bold text-foreground mb-2">Key Features</h2>
        <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
          FreeAgent was built specifically for freelancers and sole traders. Every feature in the
          platform reflects that focus.
        </p>
        <FeatureGrid features={features} columns={3} />
      </section>

      {/* MTD Suitability */}
      <section id="mtd" className="mb-12">
        <h2 className="text-xl font-bold text-foreground mb-4">
          Is FreeAgent Good for MTD Income Tax?
        </h2>

        <InfoCallout type="tip" title="Built for sole traders from day one">
          Unlike most accounting platforms that added MTD support as a feature, FreeAgent was
          designed with freelancers and sole traders at its core. MTD Income Tax compliance is
          built into the fundamental workflow — not an add-on.
        </InfoCallout>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          FreeAgent is fully HMRC-recognised for Making Tax Digital for Income Tax Self Assessment.
          It can handle all four quarterly updates as well as the End of Period Statement (EOPS),
          submitting these directly to HMRC from within the platform. The workflow is clean and
          intuitive — you don&apos;t need to understand the technicalities of MTD to use it correctly.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          The tax timeline dashboard is one of the standout features in the market. It shows you
          all upcoming HMRC deadlines, an estimated amount owed for each deadline, what you&apos;ve
          already paid, and what is still due. For sole traders who find tax deadlines stressful or
          hard to track, this feature is genuinely transformative — you always know where you stand.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          FreeAgent also includes self-assessment tax return (SA100) filing as part of its standard
          plans. This is a significant differentiator — most other platforms either don&apos;t include
          this or charge extra via an accountant integration. Being able to file your self-assessment
          directly from FreeAgent can save sole traders £100–£300 in accountant fees per year.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Under MTD for Income Tax (mandatory from April 2026 for income over £50,000), quarterly
          updates effectively replace the traditional annual return for self-employment income.
          FreeAgent is well-positioned for this transition, having already handled quarterly
          reporting for MTD VAT customers for years.
        </p>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mb-12">
        <h2 className="text-xl font-bold text-foreground mb-4">How Much Does FreeAgent Cost?</h2>
        <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
          FreeAgent has a straightforward pricing structure. Notably, it is available for free to
          qualifying NatWest and RBS business bank account holders.
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
              <tr className="bg-emerald-50">
                <td className="px-5 py-3 font-medium text-foreground">
                  NatWest/RBS customers
                  <span className="ml-2 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                    Free
                  </span>
                </td>
                <td className="px-5 py-3 text-emerald-700 font-bold">£0/month</td>
                <td className="px-5 py-3 text-muted-foreground">
                  Full FreeAgent platform — all features including self-assessment filing
                </td>
              </tr>
              <tr>
                <td className="px-5 py-3 font-medium text-foreground">Sole Trader</td>
                <td className="px-5 py-3 text-brand font-semibold">£19/month</td>
                <td className="px-5 py-3 text-muted-foreground">
                  All features — MTD, self-assessment, invoicing, expenses, time tracking
                </td>
              </tr>
              <tr className="bg-muted/20">
                <td className="px-5 py-3 font-medium text-foreground">Partnership</td>
                <td className="px-5 py-3 text-brand font-semibold">£24/month</td>
                <td className="px-5 py-3 text-muted-foreground">All features for partnerships</td>
              </tr>
              <tr>
                <td className="px-5 py-3 font-medium text-foreground">Limited Company</td>
                <td className="px-5 py-3 text-brand font-semibold">£29/month</td>
                <td className="px-5 py-3 text-muted-foreground">
                  All features including Corporation Tax return
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <InfoCallout type="info" title="30-day free trial available">
          FreeAgent offers a 30-day free trial for all plans. No credit card is required. This
          gives you enough time to connect your bank account, test the MTD workflow, and assess
          whether the platform suits your working style.
        </InfoCallout>

        <div className="flex items-center gap-3 mt-5">
          <a
            href={freeagent.affiliateLink}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark transition-colors"
          >
            Start FreeAgent free trial
          </a>
          <AffiliateDisclosure variant="inline" />
        </div>
      </section>

      {/* Best for */}
      <section id="best-for" className="mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
            <h2 className="text-base font-bold text-emerald-800 mb-3">
              Who FreeAgent is Best For
            </h2>
            <ul className="space-y-2 text-sm text-foreground">
              {[
                'Freelancers, consultants, and contractors',
                'Sole traders earning under £100,000/year',
                'NatWest or RBS business account holders (free access)',
                'Those who want self-assessment filing included',
                'Sole traders who bill clients by the hour (time tracking)',
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
                'Very complex businesses with multi-currency needs',
                'Those needing extensive third-party app integrations',
                'Businesses needing payroll for multiple employees',
                'Non-NatWest/RBS customers on very tight budgets (£8/month QuickBooks SE may suit better)',
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
        <h2 className="text-xl font-bold text-foreground mb-5">Alternatives to FreeAgent</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              name: 'QuickBooks Self-Employed',
              slug: 'quickbooks',
              summary: 'From £8/month for sole traders — cheaper if you don\'t have NatWest/RBS. Less comprehensive but lighter and affordable.',
            },
            {
              name: 'Xero',
              slug: 'xero',
              summary: 'More powerful for growing businesses. Better integrations and invoicing tools. Recommended if you plan to expand.',
            },
            {
              name: 'Sage',
              slug: 'sage',
              summary: 'UK-native with UK-based support. Good alternative if you value UK customer service and compliance focus.',
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
        heading="Ready to try FreeAgent?"
        description="Start a 30-day free trial — no credit card required. NatWest/RBS customers can access FreeAgent free forever."
        primaryCta={{ label: 'Start free trial', href: freeagent.affiliateLink }}
        secondaryCta={{ label: 'Compare all software', href: '/comparisons' }}
        variant="brand"
      />
    </div>
  )
}
