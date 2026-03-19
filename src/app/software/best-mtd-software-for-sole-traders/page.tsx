import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { generateMetadata as buildMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { ProviderCard } from '@/components/comparison/ProviderCard'
import { CTABlock } from '@/components/common/CTABlock'
import { FAQAccordion } from '@/components/common/FAQAccordion'
import { InfoCallout } from '@/components/common/InfoCallout'
import { AffiliateDisclosure } from '@/components/trust/AffiliateDisclosure'
import { LastUpdated } from '@/components/trust/LastUpdated'
import { allProviders } from '@/data/providers'
import type { FAQ } from '@/types'

export const metadata = buildMetadata({
  title: 'Best MTD Software for Sole Traders (2025 Guide)',
  description:
    'Our top-rated MTD-compatible software picks for sole traders in 2025. We review Xero, QuickBooks, Sage, and FreeAgent — ranked by price, features, and suitability for sole traders.',
  canonicalPath: '/software/best-mtd-software-for-sole-traders/',
  pageType: 'review',
  updatedDate: '2025-03-01',
})

const faqs: FAQ[] = [
  {
    question: 'Which MTD software is best for a self-employed person with simple accounts?',
    answer:
      'For sole traders with straightforward accounts, FreeAgent and QuickBooks Self-Employed are the standout options. FreeAgent is purpose-built for freelancers, includes self-assessment filing, and is free with qualifying NatWest and RBS accounts. QuickBooks Self-Employed has the lowest standalone price and covers the basics well.',
  },
  {
    question: 'Does my accountant need to use the same MTD software as me?',
    answer:
      'Not necessarily. Many accountants work with multiple software platforms and can access your accounts as an authorised agent, regardless of which recognised software you use. However, if your accountant has a preferred platform, it may be more efficient to use the same one — they will often be able to set it up for you.',
  },
  {
    question: 'Can I switch MTD software later if I change my mind?',
    answer:
      'Yes, you can switch MTD software providers. You\'ll need to export your historical data from your old software and import it into the new system, then re-register the new software with HMRC as your MTD agent. Most providers offer data export tools. Try to avoid switching mid-quarter if possible to simplify the transition.',
  },
  {
    question: 'Do I need to pay for MTD software annually or monthly?',
    answer:
      'Most providers offer both monthly and annual billing options. Annual billing is typically 10–20% cheaper than paying month to month. If you\'re confident in your software choice after a trial period, switching to annual billing can save a meaningful amount each year.',
  },
  {
    question: 'What MTD software features should I look for as a sole trader?',
    answer:
      'The key features to look for are: HMRC recognition for MTD Income Tax (not just VAT), bank feeds, receipt capture, quarterly update submission, an intuitive interface, mobile app access, and self-assessment or Final Declaration support. If you also have property income, check that the software handles both income streams.',
  },
]

export default function BestMtdSoftwarePage() {
  return (
    <div className="page-container py-8">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'MTD Software', href: '/software/' },
          { label: 'Best MTD Software for Sole Traders' },
        ]}
      />

      {/* Article header */}
      <header className="mt-4 mb-6 max-w-3xl">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-brand-light px-3 py-0.5 text-xs font-medium text-brand">
            Software Guide
          </span>
        </div>
        <h1 className="text-4xl font-bold text-slate-900 leading-tight mb-4">
          Best MTD Software for Sole Traders (2025 Guide)
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-4">
          We&apos;ve reviewed every major MTD-compatible accounting package to find the best
          options for sole traders. Whether you&apos;re a freelancer, tradesperson, or consultant,
          here are our top picks — with honest assessments of pricing, features, and who each
          product suits best.
        </p>
        <LastUpdated date="2025-03-01" />
      </header>

      <AffiliateDisclosure variant="banner" className="mb-6 max-w-3xl" />

      <InfoCallout type="info" title="All four products below are HMRC-recognised">
        Every product in this guide is on HMRC&apos;s list of recognised MTD-compatible software
        for Income Tax. All will handle quarterly submissions, EOPS, and Final Declarations when
        the time comes.
      </InfoCallout>

      {/* Intro + methodology note */}
      <section className="mt-8 max-w-3xl" aria-labelledby="editorial-note">
        <h2 id="editorial-note" className="text-xl font-bold text-slate-900 mb-3">
          Our Approach
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          Every product in this guide has been assessed against a consistent set of criteria
          including HMRC MTD recognition, price-to-feature ratio, ease of use for non-accountants,
          mobile app quality, support options, and specific suitability for UK sole traders.
          We do not accept payment for editorial rankings. Where we have affiliate relationships,
          these are clearly disclosed.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Pricing information is accurate as of March 2025. Software pricing changes frequently —
          always check the provider&apos;s website for the current price before subscribing.
        </p>
      </section>

      {/* Our Recommendations */}
      <section className="mt-10" aria-labelledby="recommendations">
        <h2 id="recommendations" className="text-2xl font-bold text-slate-900 mb-6">
          Our Recommendations
        </h2>
        <div className="space-y-6">
          {allProviders.map((provider, i) => (
            <div key={provider.id}>
              <div className="mb-2 flex items-center gap-2">
                <span className="size-7 rounded-full bg-brand text-white text-sm font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <span className="text-sm font-medium text-muted-foreground">
                  {i === 0
                    ? 'Best overall for sole traders'
                    : i === 1
                    ? 'Best value'
                    : i === 2
                    ? 'Best for UK-based support'
                    : 'Best purpose-built for freelancers'}
                </span>
              </div>
              <ProviderCard
                provider={provider}
                variant="full"
                highlighted={i === 3}
              />
            </div>
          ))}
        </div>
      </section>

      {/* How we chose */}
      <section className="mt-14 max-w-3xl" aria-labelledby="methodology">
        <h2 id="methodology" className="text-2xl font-bold text-slate-900 mb-4">
          How We Chose These Products
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          Our shortlist started with all software products on HMRC&apos;s list of recognised
          MTD-compatible tools for Income Tax. We then filtered to those offering full accounting
          features (not just bridging) that are available to UK sole traders without requiring
          an accountant subscription.
        </p>
        <p className="text-slate-600 leading-relaxed mb-3">
          Products were scored on six criteria, each weighted equally:
        </p>
        <ul className="space-y-2 text-slate-600 ml-4 list-disc list-inside mb-3">
          <li>MTD feature completeness (quarterly updates, EOPS, Final Declaration)</li>
          <li>Value for money at sole-trader plan level</li>
          <li>Ease of use for non-accountants</li>
          <li>Quality of mobile app and bank feed functionality</li>
          <li>Self-assessment / tax filing support</li>
          <li>Quality and accessibility of customer support</li>
        </ul>
        <p className="text-slate-600 leading-relaxed">
          We also take into account user feedback, independent review scores, and any changes
          in features or pricing since our last review cycle. This guide is updated at least
          every six months.
        </p>
      </section>

      {/* What to look for */}
      <section className="mt-10 max-w-3xl" aria-labelledby="what-to-look-for">
        <h2 id="what-to-look-for" className="text-2xl font-bold text-slate-900 mb-4">
          What to Look for in MTD Software
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          When evaluating any MTD software product, the following features matter most for sole
          traders:
        </p>
        <div className="space-y-4">
          {[
            {
              title: 'HMRC recognition for MTD Income Tax',
              desc: 'Ensure the software is specifically recognised for MTD Income Tax — not just MTD for VAT. Check HMRC\'s published list.',
            },
            {
              title: 'Bank feeds',
              desc: 'Automatic bank transaction imports save hours of manual data entry each quarter. Most major providers support Open Banking connections to UK high-street banks.',
            },
            {
              title: 'Receipt capture',
              desc: 'The ability to photograph and categorise receipts via a mobile app makes keeping on top of expenses far easier.',
            },
            {
              title: 'Quarterly update submission',
              desc: 'The software should handle the actual submission to HMRC and ideally provide confirmation that the submission was accepted.',
            },
            {
              title: 'Self-assessment / Final Declaration support',
              desc: 'Some software (notably FreeAgent) includes self-assessment or Final Declaration filing at no extra charge. Others may require an additional step or accountant involvement.',
            },
            {
              title: 'Price transparency',
              desc: 'Check what is included at each plan level. Some features (like payroll or multi-currency) may require a more expensive plan that you don\'t need as a sole trader.',
            },
          ].map((item) => (
            <div key={item.title} className="flex gap-3">
              <div className="mt-1 size-2 rounded-full bg-brand shrink-0" />
              <div>
                <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                <p className="text-sm text-muted-foreground mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Free vs Paid */}
      <section className="mt-10 max-w-3xl" aria-labelledby="free-vs-paid">
        <h2 id="free-vs-paid" className="text-2xl font-bold text-slate-900 mb-4">
          Free vs. Paid: What&apos;s the Difference?
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          No major full-accounting MTD platform offers a genuinely free ongoing plan — other than
          FreeAgent via NatWest/RBS. Free trials are common (typically 30 days), but are time-limited.
        </p>
        <p className="text-slate-600 leading-relaxed mb-3">
          The question to ask is not just &ldquo;how much does it cost?&rdquo; but &ldquo;how much
          time will it save me?&rdquo; A platform costing £20/month that automates bank feeds and
          receipt capture might save you several hours of admin per month — hours that have real
          value for a self-employed person.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Also remember that accounting software costs are an allowable business expense for sole
          traders, so the net cost after tax relief is lower than the headline price.
        </p>
        <Link
          href="/software/best-free-mtd-software/"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
        >
          See our full guide: Best free MTD software <ArrowRight className="size-4" />
        </Link>
      </section>

      <InfoCallout type="tip" title="Use Free Trials Before Committing" className="mt-10 max-w-3xl">
        All four providers in this guide offer 30-day free trials. We recommend trying your
        shortlisted options with a month of real transactions before committing to a subscription
        — it&apos;s the best way to judge whether an interface suits the way you work.
      </InfoCallout>

      {/* CTA */}
      <div className="mt-12 max-w-3xl">
        <CTABlock
          heading="Ready to Choose Your MTD Software?"
          description="Compare all four recommended providers side by side — pricing, features, and MTD compatibility in one view."
          primaryCta={{ label: 'Compare All Software', href: '/comparisons/' }}
          secondaryCta={{ label: 'Check Free Options', href: '/software/best-free-mtd-software/' }}
          variant="brand"
        />
      </div>

      {/* FAQs */}
      <section className="mt-12 max-w-3xl" aria-labelledby="faqs">
        <h2 id="faqs" className="text-2xl font-bold text-slate-900 mb-6">
          Frequently Asked Questions
        </h2>
        <FAQAccordion faqs={faqs} headingLevel="h3" includeSchema />
      </section>

      {/* Related pages */}
      <section className="mt-12 max-w-3xl" aria-labelledby="related">
        <h2 id="related" className="text-xl font-bold text-slate-900 mb-4">
          Related Guides
        </h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/software/best-free-mtd-software/"
              className="text-sm text-brand hover:underline inline-flex items-center gap-1"
            >
              <ArrowRight className="size-3.5" /> Best Free MTD Software for Sole Traders
            </Link>
          </li>
          <li>
            <Link
              href="/software/cheapest-mtd-software/"
              className="text-sm text-brand hover:underline inline-flex items-center gap-1"
            >
              <ArrowRight className="size-3.5" /> Cheapest MTD Software for Sole Traders
            </Link>
          </li>
          <li>
            <Link
              href="/software/best-mtd-software-for-spreadsheet-users/"
              className="text-sm text-brand hover:underline inline-flex items-center gap-1"
            >
              <ArrowRight className="size-3.5" /> Best MTD Software for Spreadsheet Users
            </Link>
          </li>
          <li>
            <Link
              href="/mtd-for-sole-traders/"
              className="text-sm text-brand hover:underline inline-flex items-center gap-1"
            >
              <ArrowRight className="size-3.5" /> MTD for Sole Traders: Complete Guide
            </Link>
          </li>
        </ul>
      </section>
    </div>
  )
}
