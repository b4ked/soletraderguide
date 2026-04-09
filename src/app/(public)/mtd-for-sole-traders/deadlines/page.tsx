import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { generateMetadata as buildMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { CTABlock } from '@/components/common/CTABlock'
import { FAQAccordion } from '@/components/common/FAQAccordion'
import { InfoCallout } from '@/components/common/InfoCallout'
import { LastUpdated } from '@/components/trust/LastUpdated'
import { ReviewedBy } from '@/components/trust/ReviewedBy'
import { mtdConfig } from '@/data/site-config'
import type { FAQ } from '@/types'

export const metadata = buildMetadata({
  title: 'MTD for Income Tax: Deadlines and Key Dates',
  description:
    'All the key MTD for Income Tax deadlines explained — the mandatory start date, quarterly submission windows, End of Period Statement, Final Declaration, and penalties for late filing.',
  canonicalPath: '/mtd-for-sole-traders/deadlines/',
  pageType: 'guide',
  updatedDate: '2026-03-31',
})

const faqs: FAQ[] = [
  {
    question: 'What happens if I miss a quarterly MTD deadline?',
    answer:
      'HMRC is introducing a points-based penalty system for MTD for Income Tax. Rather than an immediate financial penalty, you accumulate a point for each late quarterly update. Once you reach a threshold of points, a financial penalty is triggered. The system is designed to be more lenient for occasional mistakes while penalising persistent non-compliance.',
  },
  {
    question: 'Do I need to submit a quarterly update if I had no income in that period?',
    answer:
      'Yes. Even if you had no income or expenses in a particular quarter, you are still required to submit a nil return for that period. Your software will allow you to submit a zero-figure update. Failing to submit could result in penalty points.',
  },
  {
    question: 'When is the Final Declaration deadline?',
    answer:
      'The Final Declaration must be submitted by 31 January following the end of the tax year — the same date as the current Self Assessment deadline. So for the 2026/27 tax year, the Final Declaration would be due by 31 January 2028.',
  },
  {
    question: 'Is the End of Period Statement the same as the Final Declaration?',
    answer:
      'No. The End of Period Statement (EOPS) is filed separately for each income source (e.g. one for your self-employment and one for any property income). It\'s where you make annual adjustments and confirm your quarterly figures are correct. The Final Declaration brings together all your income — including EOPS data plus any other taxable income — and is the last step before your tax bill is calculated.',
  },
  {
    question: 'Can I submit quarterly updates early?',
    answer:
      'Yes, you can submit your quarterly update at any time after the quarter ends — you don\'t have to wait until the deadline. Many accountants recommend submitting as soon as your records for the quarter are complete, rather than waiting until the deadline.',
  },
]

export default function DeadlinesPage() {
  return (
    <div className="page-container py-8">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'MTD for Sole Traders', href: '/mtd-for-sole-traders/' },
          { label: 'Deadlines' },
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
          MTD for Income Tax: Deadlines and Key Dates
        </h1>
        <div className="mt-3 mb-4">
          <ReviewedBy
            name="SoleTraderGuide Editorial Team"
            role="UK Tax Content Specialists"
            date="2026-03-01"
          />
        </div>
        <p className="text-lg text-slate-600 leading-relaxed mb-4">
          Under MTD, you&apos;ll have quarterly submission deadlines throughout the year, plus
          annual deadlines for your End of Period Statement and Final Declaration. Here&apos;s
          everything you need to know about when and what to submit.
        </p>
        <LastUpdated date="2026-03-31" />
      </header>

      <InfoCallout type="deadline" title="Mandatory Start: April 2026">
        MTD for Income Tax becomes mandatory for sole traders and landlords with qualifying income
        above <strong>£50,000</strong> from <strong>6 April 2026</strong>. Those with income
        above £30,000 follow from 6 April 2027.
      </InfoCallout>

      {/* When MTD becomes mandatory */}
      <section className="mt-10 max-w-3xl" aria-labelledby="mandatory">
        <h2 id="mandatory" className="text-2xl font-bold text-slate-900 mb-4">
          When Does MTD Become Mandatory?
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          The rollout of MTD for Income Tax is phased by income level:
        </p>
        <div className="overflow-x-auto rounded-xl border border-border mb-4">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">
                  Qualifying income
                </th>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">
                  Mandatory from
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr className="bg-white">
                <td className="px-4 py-3 text-slate-900 font-medium">Over £50,000</td>
                <td className="px-4 py-3 text-slate-600">April 2026</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 text-slate-900 font-medium">Over £30,000</td>
                <td className="px-4 py-3 text-slate-600">April 2027</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 text-slate-900 font-medium">Over £20,000</td>
                <td className="px-4 py-3 text-slate-600">
                  Planned — date not yet confirmed
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-slate-600 leading-relaxed">
          Your qualifying income is determined by HMRC based on your most recently filed Self
          Assessment return. If you filed a 2024/25 return showing income above £50,000, you will
          need to be in the MTD system from April 2026.
        </p>
      </section>

      {/* Quarterly deadlines */}
      <section className="mt-10 max-w-3xl" aria-labelledby="quarterly">
        <h2 id="quarterly" className="text-2xl font-bold text-slate-900 mb-4">
          The Four Quarterly Update Deadlines
        </h2>
        <p className="text-slate-600 leading-relaxed mb-5">
          The MTD tax year runs from 6 April to 5 April, divided into four quarters. You must
          submit a summary of your income and expenses for each quarter within one month and two
          days of the quarter end. The standard deadlines are:
        </p>
        <div className="overflow-x-auto rounded-xl border border-border mb-5">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">Quarter</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">Period covered</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">
                  Submission deadline
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {mtdConfig.quarterlyDeadlines.map((q) => (
                <tr key={q.period} className="bg-white hover:bg-muted/20 transition-colors">
                  <td className="px-4 py-3 font-medium text-slate-900">{q.period}</td>
                  <td className="px-4 py-3 text-slate-600">{q.covers}</td>
                  <td className="px-4 py-3 font-medium text-slate-900">{q.deadline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-slate-600 leading-relaxed">
          These deadlines apply to each income source separately. If you have both self-employment
          and property income, you&apos;ll need to submit a quarterly update for each stream — so
          up to eight updates per year in total.
        </p>
      </section>

      {/* Visual timeline */}
      <section className="mt-10 max-w-3xl" aria-labelledby="timeline">
        <h2 id="timeline" className="text-2xl font-bold text-slate-900 mb-5">
          Full Year Timeline
        </h2>
        <div className="space-y-4">
          {[
            { label: 'Q1 ends', date: '5 July', action: 'Submit Q1 update by 7 August', type: 'quarterly' },
            { label: 'Q2 ends', date: '5 October', action: 'Submit Q2 update by 7 November', type: 'quarterly' },
            { label: 'Q3 ends', date: '5 January', action: 'Submit Q3 update by 7 February', type: 'quarterly' },
            { label: 'Q4 ends', date: '5 April', action: 'Submit Q4 update by 7 May', type: 'quarterly' },
            { label: 'End of Period Statement', date: '31 January', action: 'File EOPS for each income source (following tax year)', type: 'annual' },
            { label: 'Final Declaration', date: '31 January', action: 'File Final Declaration (replaces Self Assessment return)', type: 'annual' },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div
                className={`shrink-0 mt-1 size-8 rounded-full text-white text-xs font-bold flex items-center justify-center ${
                  item.type === 'annual' ? 'bg-slate-700' : 'bg-brand'
                }`}
              >
                {item.type === 'annual' ? 'Y' : `Q${i + 1}`}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.action}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EOPS */}
      <section className="mt-10 max-w-3xl" aria-labelledby="eops">
        <h2 id="eops" className="text-2xl font-bold text-slate-900 mb-4">
          End of Period Statement (EOPS)
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          After the tax year ends, you&apos;ll need to file an End of Period Statement for each
          of your qualifying income sources. The EOPS is where you can add annual adjustments that
          can&apos;t be captured in quarterly updates — for example, capital allowances, basis
          period adjustments, or any corrections to quarterly figures.
        </p>
        <p className="text-slate-600 leading-relaxed mb-3">
          The EOPS deadline is <strong>31 January</strong> following the end of the tax year. So
          for the 2026/27 tax year (6 April 2026 – 5 April 2027), your EOPS is due by 31 January
          2028.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Most MTD-compatible software handles EOPS submission automatically, prompting you to
          review and confirm your annual figures once the year ends.
        </p>
      </section>

      {/* Final Declaration */}
      <section className="mt-10 max-w-3xl" aria-labelledby="final-declaration">
        <h2 id="final-declaration" className="text-2xl font-bold text-slate-900 mb-4">
          Final Declaration (Replaces Self Assessment)
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          The Final Declaration is the last step in the MTD reporting cycle. It brings together
          all your income — including quarterly update data, EOPS figures, and any other taxable
          income not covered by MTD (such as dividends, employment income, or savings interest) —
          and allows HMRC to calculate your final tax liability for the year.
        </p>
        <p className="text-slate-600 leading-relaxed mb-3">
          Like the current Self Assessment return, the Final Declaration is due by{' '}
          <strong>31 January</strong> following the end of the tax year. This deadline is unchanged.
        </p>
        <p className="text-slate-600 leading-relaxed">
          You can also include claims for reliefs, allowances, and adjustments in your Final
          Declaration, as you would in a Self Assessment return.
        </p>
      </section>

      <InfoCallout type="warning" title="Late Submissions: Points-Based Penalties" className="mt-10 max-w-3xl">
        HMRC is introducing a points-based penalty system for MTD. Each missed quarterly deadline
        earns a penalty point. Once you accumulate enough points, a financial penalty is triggered.
        The system is designed to penalise persistent non-compliance rather than occasional
        mistakes, but it&apos;s still important to file on time.
      </InfoCallout>

      {/* Penalties */}
      <section className="mt-10 max-w-3xl" aria-labelledby="penalties">
        <h2 id="penalties" className="text-2xl font-bold text-slate-900 mb-4">
          Penalties for Late Submission
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          HMRC will use a points-based penalty system for late quarterly submissions under MTD for
          Income Tax. Each missed quarterly deadline results in a penalty point. When you reach
          the relevant threshold of points, a fixed financial penalty of £200 is charged.
        </p>
        <p className="text-slate-600 leading-relaxed mb-3">
          Separate (and typically larger) penalties apply for late submission of the Final
          Declaration. The late payment penalty rules for any tax owed remain unchanged and are
          separate from the submission penalties.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Points expire after a period of compliance, so consistent on-time filing can clear your
          record. HMRC has stated that the points system is designed to be proportionate — a
          single missed deadline will not immediately result in a penalty for most taxpayers.
        </p>
      </section>

      {/* CTA */}
      <div className="mt-12 max-w-3xl">
        <CTABlock
          heading="Ready to Choose Your MTD Software?"
          description="Good MTD software will send you deadline reminders and make quarterly submissions straightforward. Compare your options now."
          primaryCta={{ label: 'Compare MTD Software', href: '/software/' }}
          secondaryCta={{ label: 'Check My Eligibility', href: '/tools/mtd-eligibility-checker/' }}
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
              <ArrowRight className="size-3.5" /> Compare MTD Software for Sole Traders
            </Link>
          </li>
          <li>
            <Link
              href="/mtd-for-sole-traders/"
              className="text-sm text-brand hover:underline inline-flex items-center gap-1"
            >
              <ArrowRight className="size-3.5" /> MTD for Sole Traders: Complete Guide Hub
            </Link>
          </li>
        </ul>
      </section>
    </div>
  )
}
