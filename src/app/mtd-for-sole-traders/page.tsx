import Link from 'next/link'
import { ArrowRight, BookOpen, Calendar, CheckCircle, FileText } from 'lucide-react'
import { generateMetadata as buildMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { GuideCard } from '@/components/common/GuideCard'
import { CTABlock } from '@/components/common/CTABlock'
import { FAQAccordion } from '@/components/common/FAQAccordion'
import { InfoCallout } from '@/components/common/InfoCallout'
import { NewsletterSignup } from '@/components/common/NewsletterSignup'
import { LastUpdated } from '@/components/trust/LastUpdated'
import { mtdConfig } from '@/data/site-config'
import type { FAQ } from '@/types'

export const metadata = buildMetadata({
  title: 'MTD for Sole Traders: Complete Guide',
  description:
    'Everything sole traders need to know about Making Tax Digital for Income Tax — who is affected, key deadlines, record-keeping requirements, and how to choose the right software.',
  canonicalPath: '/mtd-for-sole-traders/',
  pageType: 'hub',
  updatedDate: '2025-03-01',
})

const faqs: FAQ[] = [
  {
    question: 'What is Making Tax Digital for Income Tax?',
    answer:
      'Making Tax Digital for Income Tax (MTD ITSA) is HMRC\'s initiative to replace the annual Self Assessment return with digital record-keeping and quarterly income and expense updates submitted via compatible software. After each tax year, you\'ll also file an End of Period Statement and a Final Declaration.',
  },
  {
    question: 'When does MTD become mandatory for sole traders?',
    answer:
      'MTD for Income Tax becomes mandatory from April 2026 for sole traders and landlords with annual qualifying income above £50,000. Those with income above £30,000 must follow from April 2027. A further rollout to those above £20,000 is expected in 2028, though this has not been confirmed.',
  },
  {
    question: 'Do I need to sign up for MTD now?',
    answer:
      'If you\'re not yet affected, you don\'t need to sign up immediately. However, HMRC recommends that sole traders begin preparing well in advance — choosing software, getting records in order, and understanding the quarterly deadlines. Voluntary sign-up is available for those who want to get ahead.',
  },
  {
    question: 'Will MTD replace Self Assessment entirely?',
    answer:
      'MTD for Income Tax replaces the annual Self Assessment tax return for sole traders within scope. Instead, you\'ll submit quarterly updates throughout the year and then file a Final Declaration (similar to a simplified tax return) by 31 January following the tax year.',
  },
  {
    question: 'What software do I need for MTD?',
    answer:
      'You\'ll need HMRC-recognised MTD-compatible software. Popular options include Xero, QuickBooks, Sage, and FreeAgent — all of which can handle quarterly submissions and are recognised by HMRC. If you prefer to use a spreadsheet, you\'ll need bridging software to connect it to HMRC\'s systems.',
  },
]

export default function MtdHubPage() {
  return (
    <div className="page-container py-8">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'MTD for Sole Traders' },
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
          Making Tax Digital for Income Tax: The Complete Guide for Sole Traders
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-4">
          MTD for Income Tax is the biggest change to UK tax administration in a generation. This
          hub brings together everything you need to understand the rules, prepare your records, and
          choose the right software — all in one place.
        </p>
        <LastUpdated date="2025-03-01" />
      </header>

      <InfoCallout type="deadline" title="April 2026: MTD Becomes Mandatory">
        Sole traders and landlords with annual income above{' '}
        <strong>£{mtdConfig.currentThreshold.toLocaleString()}</strong> must use HMRC-compatible
        software from <strong>{mtdConfig.mandatoryDate}</strong>. Those above £
        {mtdConfig.nextThreshold.toLocaleString()} follow in{' '}
        <strong>{mtdConfig.nextMandatoryDate}</strong>.
      </InfoCallout>

      {/* What is MTD section */}
      <section className="mt-10 max-w-3xl" aria-labelledby="what-is-mtd">
        <h2 id="what-is-mtd" className="text-2xl font-bold text-slate-900 mb-4">
          What is MTD for Income Tax?
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          Making Tax Digital for Income Tax Self Assessment (MTD ITSA) is HMRC&apos;s programme to
          modernise the way sole traders and landlords report their income and expenses. Rather than
          filing a single annual tax return, you&apos;ll keep digital records throughout the year
          and submit quarterly updates directly to HMRC via compatible software.
        </p>
        <p className="text-slate-600 leading-relaxed mb-3">
          At the end of each tax year you&apos;ll file an End of Period Statement (EOPS) for each
          income source, followed by a Final Declaration that brings everything together — replacing
          what was previously your Self Assessment return.
        </p>
        <p className="text-slate-600 leading-relaxed">
          The quarterly updates aren&apos;t tax payments — they&apos;re summaries of your income
          and expenses so HMRC can build a more accurate real-time picture of your tax position
          throughout the year.
        </p>
        <Link
          href="/mtd-for-sole-traders/what-is-mtd-income-tax/"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
        >
          Read the full guide: What is MTD for Income Tax? <ArrowRight className="size-4" />
        </Link>
      </section>

      {/* Who is Affected section */}
      <section className="mt-10 max-w-3xl" aria-labelledby="who-is-affected">
        <h2 id="who-is-affected" className="text-2xl font-bold text-slate-900 mb-4">
          Who is Affected by MTD?
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          You&apos;ll need to comply with MTD for Income Tax if you&apos;re a sole trader or
          landlord (or both) and your total qualifying income from self-employment and property
          exceeds <strong>£50,000</strong> in a tax year. HMRC will assess your eligibility based
          on the income reported in your most recent Self Assessment return.
        </p>
        <p className="text-slate-600 leading-relaxed mb-3">
          If you have income from multiple sources — for example, freelance work plus rental income
          — both streams count towards the threshold. If your combined income crosses £50,000,
          you&apos;re in scope from April 2026.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Limited exemptions may apply in certain circumstances, such as insolvency, digital
          exclusion, or religious grounds. HMRC can grant deferrals in exceptional cases.
        </p>
        <Link
          href="/mtd-for-sole-traders/am-i-affected/"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
        >
          Check if you&apos;re affected: full eligibility guide <ArrowRight className="size-4" />
        </Link>
      </section>

      {/* Key Deadlines section */}
      <section className="mt-10 max-w-3xl" aria-labelledby="key-deadlines">
        <h2 id="key-deadlines" className="text-2xl font-bold text-slate-900 mb-4">
          Key MTD Deadlines
        </h2>
        <p className="text-slate-600 leading-relaxed mb-5">
          Once in scope, you&apos;ll have four quarterly submission deadlines per year. Below are
          the standard quarterly windows and their filing dates:
        </p>
        <div className="overflow-x-auto rounded-xl border border-border">
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
                  <td className="px-4 py-3 text-slate-600">{q.deadline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          After the year ends, your End of Period Statement is due by{' '}
          <strong className="text-slate-700">{mtdConfig.eopsDeadline}</strong>, followed by your
          Final Declaration.
        </p>
        <Link
          href="/mtd-for-sole-traders/deadlines/"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
        >
          Full deadlines guide <ArrowRight className="size-4" />
        </Link>
      </section>

      <InfoCallout type="tip" title="Start Preparing Early" className="mt-10 max-w-3xl">
        You don&apos;t need to wait until April 2026 to get ready. Choosing your software, setting
        up digital records, and doing a trial quarterly update now means far less stress when
        compliance becomes mandatory.
      </InfoCallout>

      {/* Guide cards grid */}
      <section className="mt-12" aria-labelledby="all-guides">
        <h2 id="all-guides" className="text-2xl font-bold text-slate-900 mb-6">
          All MTD Guides for Sole Traders
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <GuideCard
            title="What is MTD for Income Tax?"
            description="A plain-English explanation of MTD ITSA — what it is, how it works, and how it differs from Self Assessment."
            href="/mtd-for-sole-traders/what-is-mtd-income-tax/"
            category="MTD Guides"
            icon={BookOpen}
          />
          <GuideCard
            title="Am I Affected by MTD?"
            description="Find out if your income crosses the threshold, what counts, and how multiple income sources are treated."
            href="/mtd-for-sole-traders/am-i-affected/"
            category="MTD Guides"
            icon={CheckCircle}
          />
          <GuideCard
            title="MTD Deadlines Explained"
            description="All four quarterly deadlines, EOPS dates, and the Final Declaration — with a clear timeline and penalty information."
            href="/mtd-for-sole-traders/deadlines/"
            category="MTD Guides"
            icon={Calendar}
          />
          <GuideCard
            title="Records You Need to Keep"
            description="What HMRC considers a digital record, what income and expense data you must store, and for how long."
            href="/mtd-for-sole-traders/records-you-need-to-keep/"
            category="MTD Guides"
            icon={FileText}
          />
          <GuideCard
            title="MTD and Spreadsheets"
            description="How bridging software lets you continue using spreadsheets for MTD — and whether that's the right choice for you."
            href="/mtd-for-sole-traders/spreadsheets/"
            category="MTD Guides"
            badge="Popular"
          />
          <GuideCard
            title="Sole Trader and Landlord Income"
            description="How MTD handles combined self-employment and property income, and how to report both income streams correctly."
            href="/mtd-for-sole-traders/sole-trader-and-landlord-income/"
            category="MTD Guides"
          />
        </div>
      </section>

      {/* CTA */}
      <div className="mt-12 max-w-3xl">
        <CTABlock
          heading="Check if You're Affected by MTD"
          description="Answer a few quick questions and get a personalised answer about your MTD obligations and timeline."
          primaryCta={{ label: 'Use the Eligibility Checker', href: '/tools/mtd-eligibility-checker/' }}
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
          Related Pages
        </h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/software/"
              className="text-sm text-brand hover:underline inline-flex items-center gap-1"
            >
              <ArrowRight className="size-3.5" /> MTD Software for Sole Traders: All Options
              Compared
            </Link>
          </li>
          <li>
            <Link
              href="/software/best-mtd-software-for-sole-traders/"
              className="text-sm text-brand hover:underline inline-flex items-center gap-1"
            >
              <ArrowRight className="size-3.5" /> Best MTD Software for Sole Traders (2025 Guide)
            </Link>
          </li>
          <li>
            <Link
              href="/tools/mtd-eligibility-checker/"
              className="text-sm text-brand hover:underline inline-flex items-center gap-1"
            >
              <ArrowRight className="size-3.5" /> MTD Eligibility Checker Tool
            </Link>
          </li>
          <li>
            <Link
              href="/comparisons/"
              className="text-sm text-brand hover:underline inline-flex items-center gap-1"
            >
              <ArrowRight className="size-3.5" /> Compare All MTD Software
            </Link>
          </li>
        </ul>
      </section>
    </div>
  )
}
