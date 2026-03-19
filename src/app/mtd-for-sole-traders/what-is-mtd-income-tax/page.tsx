import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { generateMetadata as buildMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { CTABlock } from '@/components/common/CTABlock'
import { FAQAccordion } from '@/components/common/FAQAccordion'
import { InfoCallout } from '@/components/common/InfoCallout'
import { LastUpdated } from '@/components/trust/LastUpdated'
import type { FAQ } from '@/types'

export const metadata = buildMetadata({
  title: 'What is Making Tax Digital for Income Tax?',
  description:
    'A plain-English guide to MTD for Income Tax — what it is, why HMRC introduced it, how quarterly updates work, and how it differs from Self Assessment and MTD for VAT.',
  canonicalPath: '/mtd-for-sole-traders/what-is-mtd-income-tax/',
  pageType: 'guide',
  updatedDate: '2025-03-01',
})

const faqs: FAQ[] = [
  {
    question: 'Is MTD for Income Tax the same as MTD for VAT?',
    answer:
      'No. MTD for VAT (which became mandatory from April 2019) is a separate programme covering VAT-registered businesses. MTD for Income Tax is an entirely different initiative affecting sole traders and landlords who file Self Assessment returns. Being compliant with MTD for VAT does not mean you are compliant with MTD for Income Tax.',
  },
  {
    question: 'Does MTD for Income Tax mean I pay tax quarterly?',
    answer:
      'No. Quarterly updates are summaries of your income and expenses — they are not tax payments. Your actual tax bill is still calculated at the end of the year and paid in the usual way (via payments on account or the January balancing payment).',
  },
  {
    question: 'What software do I need for MTD?',
    answer:
      'You need HMRC-recognised MTD-compatible software. This includes full accounting packages like Xero, QuickBooks, Sage, and FreeAgent, or specialist bridging software if you want to continue using spreadsheets. A list of recognised products is available on the HMRC website.',
  },
  {
    question: 'What is the End of Period Statement?',
    answer:
      'The End of Period Statement (EOPS) is filed at the end of each tax year for each income source. It\'s your opportunity to add any annual adjustments, claim reliefs and allowances, and confirm that the quarterly figures you\'ve submitted are correct. It must be submitted by 31 January following the end of the tax year.',
  },
  {
    question: 'What is the Final Declaration and does it replace Self Assessment?',
    answer:
      'The Final Declaration (sometimes called the tax return) replaces what was previously the Self Assessment tax return. It\'s where you bring together all income sources (including employment, dividends, or other income not covered by MTD), finalise your tax position for the year, and declare that everything is correct. Like the EOPS, it\'s due by 31 January.',
  },
]

export default function WhatIsMtdPage() {
  return (
    <div className="page-container py-8">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'MTD for Sole Traders', href: '/mtd-for-sole-traders/' },
          { label: 'What is MTD for Income Tax?' },
        ]}
      />

      {/* Article header */}
      <header className="mt-4 mb-8 max-w-3xl">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-brand-light px-3 py-0.5 text-xs font-medium text-brand">
            MTD Guides
          </span>
        </div>
        <h1 className="text-4xl font-bold text-slate-900 leading-tight mb-4">
          What is Making Tax Digital for Income Tax?
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-4">
          Making Tax Digital for Income Tax is HMRC&apos;s plan to replace the annual Self
          Assessment return with real-time digital reporting. Here&apos;s what it means in
          practice, why it exists, and what you&apos;ll actually need to do differently.
        </p>
        <LastUpdated date="2025-03-01" />
      </header>

      <InfoCallout type="info" title="MTD for Income Tax vs MTD for VAT">
        MTD for Income Tax is different from MTD for VAT — even if you&apos;re already
        MTD-compliant for VAT, you&apos;ll need to take additional steps. The two programmes use
        different software requirements and have separate sign-up processes.
      </InfoCallout>

      {/* Background */}
      <section className="mt-10 max-w-3xl" aria-labelledby="background">
        <h2 id="background" className="text-2xl font-bold text-slate-900 mb-4">
          Background: What is MTD ITSA?
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          Making Tax Digital for Income Tax Self Assessment — usually shortened to MTD ITSA or just
          MTD for Income Tax — is part of HMRC&apos;s wider Making Tax Digital initiative, which
          has been rolling out since 2019. MTD for Income Tax specifically targets sole traders and
          landlords who currently file a Self Assessment tax return each year.
        </p>
        <p className="text-slate-600 leading-relaxed mb-3">
          Under the current system, most sole traders file a single annual return by 31 January,
          covering the previous tax year. MTD for Income Tax changes this so that you maintain
          digital records throughout the year and submit a quarterly summary of your business
          income and expenses directly to HMRC through compatible software.
        </p>
        <p className="text-slate-600 leading-relaxed">
          The programme has been delayed several times since it was first announced. The current
          confirmed mandatory date is April 2026 for those with income over £50,000.
        </p>
      </section>

      {/* Why HMRC introduced it */}
      <section className="mt-10 max-w-3xl" aria-labelledby="why-hmrc">
        <h2 id="why-hmrc" className="text-2xl font-bold text-slate-900 mb-4">
          Why Did HMRC Introduce MTD for Income Tax?
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          HMRC&apos;s stated rationale is to reduce the &ldquo;tax gap&rdquo; — the difference
          between the tax that should theoretically be collected and the amount actually received.
          A significant portion of the tax gap is attributed to errors and misreporting in
          Self Assessment returns, which HMRC believes can be reduced through more frequent,
          software-driven submissions.
        </p>
        <p className="text-slate-600 leading-relaxed mb-3">
          More regular reporting also gives HMRC a closer to real-time view of tax liabilities,
          which they argue helps taxpayers budget more accurately — knowing where you stand
          tax-wise throughout the year rather than discovering a large bill in January.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Critics have raised concerns about the administrative burden on smaller businesses, which
          is one reason the rollout has been phased and the threshold set at £50,000 for the first
          mandatory wave.
        </p>
      </section>

      {/* How it works */}
      <section className="mt-10 max-w-3xl" aria-labelledby="how-it-works">
        <h2 id="how-it-works" className="text-2xl font-bold text-slate-900 mb-4">
          How MTD for Income Tax Works
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          Once you&apos;re signed up for MTD, your year is divided into four quarters. At the end
          of each quarter you submit a summary of your business income and allowable expenses to
          HMRC through your MTD-compatible software. These submissions are not tax payments —
          they&apos;re a digital record of your business activity in that period.
        </p>
        <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-3">
          The MTD reporting cycle
        </h3>
        <ol className="space-y-3 text-slate-600">
          <li className="flex gap-3">
            <span className="flex-shrink-0 mt-0.5 size-6 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center">
              1
            </span>
            <span>
              <strong className="text-slate-900">Keep digital records</strong> throughout each
              quarter — income received and expenses paid, categorised correctly.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 mt-0.5 size-6 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center">
              2
            </span>
            <span>
              <strong className="text-slate-900">Submit a quarterly update</strong> within one
              month of each quarter ending — your software will handle the submission to HMRC.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 mt-0.5 size-6 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center">
              3
            </span>
            <span>
              <strong className="text-slate-900">File an End of Period Statement (EOPS)</strong>{' '}
              for each income source after the tax year ends, confirming your quarterly figures
              and adding annual adjustments.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 mt-0.5 size-6 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center">
              4
            </span>
            <span>
              <strong className="text-slate-900">Submit your Final Declaration</strong> by 31
              January, bringing together all income sources and replacing the old Self Assessment
              return.
            </span>
          </li>
        </ol>
      </section>

      {/* What changes for sole traders */}
      <section className="mt-10 max-w-3xl" aria-labelledby="what-changes">
        <h2 id="what-changes" className="text-2xl font-bold text-slate-900 mb-4">
          What Changes for Sole Traders Under MTD?
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          The most significant change is the move from once-a-year filing to quarterly submissions.
          You&apos;ll also need to use HMRC-recognised software — keeping records in a spreadsheet
          or paper ledger alone is no longer sufficient (though you can still use a spreadsheet
          if you pair it with compliant bridging software).
        </p>
        <p className="text-slate-600 leading-relaxed">
          You&apos;ll need to categorise your income and expenses according to HMRC&apos;s
          required categories from the start of each quarter, so that your software can produce
          a compliant submission. Good accounting software does this automatically as you
          record transactions.
        </p>
      </section>

      {/* What stays the same */}
      <section className="mt-10 max-w-3xl" aria-labelledby="what-stays">
        <h2 id="what-stays" className="text-2xl font-bold text-slate-900 mb-4">
          What Stays the Same?
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          Quarterly updates are summaries only — not tax payments. Your payments on account
          schedule and the January balancing payment remain unchanged. The tax year still runs
          from 6 April to 5 April. You&apos;ll still claim the same allowances and reliefs as
          before. The January 31 deadline for your Final Declaration (formerly Self Assessment
          return) also remains.
        </p>
        <p className="text-slate-600 leading-relaxed">
          The fundamental rules of what is and isn&apos;t taxable as a sole trader don&apos;t
          change either — MTD changes how and when you report, not what you report.
        </p>
      </section>

      <InfoCallout type="warning" title="MTD is Not the Same as Paying Tax Quarterly" className="mt-10 max-w-3xl">
        A common misconception is that MTD means paying tax four times a year. This is not the
        case. Quarterly updates are reporting summaries only. Your actual tax liability is still
        calculated at the end of the tax year, and payment deadlines are unchanged.
      </InfoCallout>

      {/* Differs from Self Assessment */}
      <section className="mt-10 max-w-3xl" aria-labelledby="vs-sa">
        <h2 id="vs-sa" className="text-2xl font-bold text-slate-900 mb-4">
          How Does MTD Differ from Self Assessment?
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          Self Assessment involves filing one return a year, containing all your income from every
          source. MTD for Income Tax replaces this for your sole-trader and property income with
          quarterly updates plus an annual EOPS and Final Declaration. The Final Declaration is
          still required and covers any other income that falls outside the MTD framework (such as
          employment income, dividends, or savings interest), so it remains an important annual
          submission.
        </p>
        <p className="text-slate-600 leading-relaxed">
          The key difference is frequency and method: quarterly digital submissions versus one
          annual paper or online return.
        </p>
      </section>

      {/* Differs from MTD for VAT */}
      <section className="mt-10 max-w-3xl" aria-labelledby="vs-vat">
        <h2 id="vs-vat" className="text-2xl font-bold text-slate-900 mb-4">
          Is MTD for Income Tax the Same as MTD for VAT?
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          No. MTD for VAT (mandatory since April 2019 for businesses above the VAT threshold) is
          an entirely separate programme. It requires VAT-registered businesses to keep digital
          records and submit VAT returns via compatible software. If you already do this, you are
          compliant with MTD for VAT but this does not affect your MTD for Income Tax obligations
          at all.
        </p>
        <p className="text-slate-600 leading-relaxed">
          The two programmes use different HMRC APIs, may require different software features,
          and have separate sign-up processes. Some software products support both; others support
          only one. When comparing software, make sure the product explicitly lists MTD for Income
          Tax (not just MTD for VAT) among its features.
        </p>
      </section>

      {/* CTA */}
      <div className="mt-12 max-w-3xl">
        <CTABlock
          heading="Find Out if You're Affected by MTD"
          description="Use our free eligibility checker to find out exactly when you need to comply and what you need to do first."
          primaryCta={{ label: 'Check My Eligibility', href: '/tools/mtd-eligibility-checker/' }}
          secondaryCta={{ label: 'Compare MTD Software', href: '/software/' }}
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
              href="/mtd-for-sole-traders/am-i-affected/"
              className="text-sm text-brand hover:underline inline-flex items-center gap-1"
            >
              <ArrowRight className="size-3.5" /> Am I Affected by MTD for Income Tax?
            </Link>
          </li>
          <li>
            <Link
              href="/mtd-for-sole-traders/deadlines/"
              className="text-sm text-brand hover:underline inline-flex items-center gap-1"
            >
              <ArrowRight className="size-3.5" /> MTD for Income Tax: Deadlines and Key Dates
            </Link>
          </li>
          <li>
            <Link
              href="/mtd-for-sole-traders/records-you-need-to-keep/"
              className="text-sm text-brand hover:underline inline-flex items-center gap-1"
            >
              <ArrowRight className="size-3.5" /> What Records Do You Need to Keep for MTD?
            </Link>
          </li>
          <li>
            <Link
              href="/software/"
              className="text-sm text-brand hover:underline inline-flex items-center gap-1"
            >
              <ArrowRight className="size-3.5" /> MTD Software for Sole Traders: All Options
            </Link>
          </li>
        </ul>
      </section>
    </div>
  )
}
