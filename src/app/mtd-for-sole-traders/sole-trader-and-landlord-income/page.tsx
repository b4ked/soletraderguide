import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { generateMetadata as buildMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { CTABlock } from '@/components/common/CTABlock'
import { FAQAccordion } from '@/components/common/FAQAccordion'
import { InfoCallout } from '@/components/common/InfoCallout'
import { LastUpdated } from '@/components/trust/LastUpdated'
import { ReviewedBy } from '@/components/trust/ReviewedBy'
import type { FAQ } from '@/types'

export const metadata = buildMetadata({
  title: 'MTD for Sole Traders with Both Trading and Property Income',
  description:
    'How MTD for Income Tax applies to sole traders who also have rental income. Threshold rules, separate reporting for each income stream, EOPS requirements, and software that supports both.',
  canonicalPath: '/mtd-for-sole-traders/sole-trader-and-landlord-income/',
  pageType: 'guide',
  updatedDate: '2025-03-01',
})

const faqs: FAQ[] = [
  {
    question: 'Do I need separate MTD software for my self-employment and my property income?',
    answer:
      'Not necessarily separate software, but the two income streams must be reported separately within your MTD submissions. Most full accounting packages allow you to manage multiple income sources within a single account and submit separate quarterly updates for each. Check that your chosen software explicitly supports both self-employment and property income categories.',
  },
  {
    question: 'My property income is only £5,000 but my self-employment is £48,000. Am I affected?',
    answer:
      'Yes. HMRC adds together all qualifying income from self-employment and property to assess your MTD threshold position. £48,000 + £5,000 = £53,000, which exceeds the £50,000 threshold. You would need to comply with MTD from April 2026, and report both income streams separately.',
  },
  {
    question: 'I only rent out one property. Does property management software apply to me?',
    answer:
      'For most sole traders with a single rental property, dedicated property management software is overkill. A full accounting package like Xero or FreeAgent (if it supports property income) will be sufficient. The important thing is that your chosen software allows you to categorise and submit property income and expenses as a distinct income source.',
  },
  {
    question: 'What happens if I sell my rental property while in MTD?',
    answer:
      'The sale of a rental property is a capital gains event, which is reported separately from your MTD income. You would still need to include it in your Final Declaration. MTD quarterly updates only cover ongoing income and expenses — not capital transactions. Capital gains from property should be reported via the 60-day Capital Gains Tax return and in your Final Declaration.',
  },
  {
    question: 'Do I file one End of Period Statement or two?',
    answer:
      'You file one End of Period Statement for each income source. So if you have self-employment income and property income, you\'ll file two EOPS — one for each. Both are typically due by 31 January following the end of the tax year. Your MTD software will usually handle this automatically, prompting you separately for each income source.',
  },
]

export default function SoleTraderLandlordPage() {
  return (
    <div className="page-container py-8">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'MTD for Sole Traders', href: '/mtd-for-sole-traders/' },
          { label: 'Sole Trader and Landlord Income' },
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
          MTD for Sole Traders with Both Trading and Property Income
        </h1>
        <div className="mt-3 mb-4">
          <ReviewedBy
            name="SoleTraderGuide Editorial Team"
            role="UK Tax Content Specialists"
            date="2026-03-01"
          />
        </div>
        <p className="text-lg text-slate-600 leading-relaxed mb-4">
          If you earn money both from running a business as a sole trader and from renting out
          property, MTD for Income Tax applies to both income streams. Here&apos;s how the rules
          work, how the threshold is calculated, and what you&apos;ll need to report.
        </p>
        <LastUpdated date="2025-03-01" />
      </header>

      <InfoCallout type="info" title="Both Income Streams Count Towards the Threshold">
        If your total income from self-employment AND property exceeds £50,000, you&apos;ll need
        to report both through MTD-compatible software from April 2026. Each income stream must
        be submitted as a separate set of quarterly updates.
      </InfoCallout>

      {/* Who has combined income */}
      <section className="mt-10 max-w-3xl" aria-labelledby="combined-income">
        <h2 id="combined-income" className="text-2xl font-bold text-slate-900 mb-4">
          Who Has Combined Sole-Trader and Property Income?
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          This situation is more common than many people realise. You might find yourself with
          both types of qualifying income if you:
        </p>
        <ul className="space-y-2 text-slate-600 ml-4 list-disc list-inside mb-3">
          <li>Run a business as a sole trader and own a buy-to-let property</li>
          <li>Are a freelancer who also rents out a room or a second home</li>
          <li>Have inherited a property and receive rental income alongside self-employment</li>
          <li>
            Are a contractor or consultant who also earns rental income from commercial or
            residential property
          </li>
        </ul>
        <p className="text-slate-600 leading-relaxed">
          In all these cases, HMRC treats both income streams as qualifying income for the purposes
          of the MTD threshold assessment.
        </p>
      </section>

      {/* Does the threshold include property income */}
      <section className="mt-10 max-w-3xl" aria-labelledby="threshold">
        <h2 id="threshold" className="text-2xl font-bold text-slate-900 mb-4">
          Does the £50,000 Threshold Include Property Income?
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          Yes. The MTD for Income Tax threshold of £50,000 (from April 2026) applies to the
          combined gross income from self-employment and property. It is not assessed separately
          for each income stream.
        </p>
        <p className="text-slate-600 leading-relaxed mb-3">
          This means you could be under the threshold for each individual source but still be in
          scope because of the combined total. For example:
        </p>
        <div className="rounded-xl border border-border bg-muted/30 p-5 mb-3">
          <p className="text-sm text-slate-600">
            <strong>Example:</strong> Sarah earns £32,000 as a freelance graphic designer and
            £22,000 in rental income from two properties. Neither income stream on its own exceeds
            the threshold. But combined — £54,000 — she exceeds £50,000 and must comply with MTD
            from April 2026.
          </p>
        </div>
        <p className="text-slate-600 leading-relaxed">
          The threshold is based on <em>gross</em> income before expenses are deducted, not on
          your net profit.
        </p>
      </section>

      {/* How to report both income streams */}
      <section className="mt-10 max-w-3xl" aria-labelledby="reporting">
        <h2 id="reporting" className="text-2xl font-bold text-slate-900 mb-4">
          How to Report Both Income Streams Under MTD
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          Under MTD, each qualifying income source must be reported separately. This means:
        </p>
        <ul className="space-y-3 text-slate-600 mb-3">
          <li className="flex gap-3">
            <span className="mt-1.5 size-2 rounded-full bg-brand shrink-0" />
            <span>
              You submit <strong>one set of quarterly updates for your self-employment</strong> —
              covering your business income and allowable business expenses
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 size-2 rounded-full bg-brand shrink-0" />
            <span>
              You submit <strong>a separate set of quarterly updates for your property income</strong>{' '}
              — covering rental income and allowable property expenses
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 size-2 rounded-full bg-brand shrink-0" />
            <span>
              If you have multiple rental properties, they are all reported under a single{' '}
              <strong>&ldquo;UK property&rdquo;</strong> income category (unless you also have
              furnished holiday let income, which is treated separately)
            </span>
          </li>
        </ul>
        <p className="text-slate-600 leading-relaxed">
          In practice, this means up to eight quarterly submissions per year (four for each income
          source). Good MTD software manages this within a single dashboard, making it less
          onerous than it sounds.
        </p>
      </section>

      {/* Software that supports property income */}
      <section className="mt-10 max-w-3xl" aria-labelledby="software">
        <h2 id="software" className="text-2xl font-bold text-slate-900 mb-4">
          Software That Supports Property Income
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          Not all MTD-compatible software supports property income reporting. Before choosing your
          software, check that it explicitly handles UK property (landlord) income alongside
          self-employment income within the same MTD submission framework.
        </p>
        <p className="text-slate-600 leading-relaxed mb-3">
          Among the major providers:
        </p>
        <ul className="space-y-2 text-slate-600 ml-4 list-disc list-inside mb-3">
          <li>
            <strong>Xero</strong> — supports landlord income; suitable for combined reporting
          </li>
          <li>
            <strong>QuickBooks</strong> — primarily focused on self-employment; landlord income
            support is more limited and should be verified before purchase
          </li>
          <li>
            <strong>Sage</strong> — check current capability for property income; has historically
            been stronger on business income
          </li>
          <li>
            <strong>FreeAgent</strong> — focused on freelancers and sole traders; landlord income
            support should be confirmed with their sales team
          </li>
        </ul>
        <p className="text-slate-600 leading-relaxed">
          The MTD for Income Tax software market is developing rapidly ahead of April 2026.
          Capability is changing — always check directly with a provider before subscribing.
        </p>
        <Link
          href="/software/"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
        >
          Compare all MTD software options <ArrowRight className="size-4" />
        </Link>
      </section>

      <InfoCallout type="tip" title="Talk to Your Accountant" className="mt-10 max-w-3xl">
        If you have both self-employment and property income, the complexity of dual MTD reporting
        is a good reason to work with an accountant who is already familiar with the MTD software
        you&apos;ll be using. They can act as your MTD agent and submit on your behalf.
      </InfoCallout>

      {/* EOPS for combined sources */}
      <section className="mt-10 max-w-3xl" aria-labelledby="eops">
        <h2 id="eops" className="text-2xl font-bold text-slate-900 mb-4">
          End of Period Statements for Combined Income Sources
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          You&apos;ll need to file a separate End of Period Statement (EOPS) for each qualifying
          income source. So if you have self-employment income and property income, you&apos;ll
          file two EOPS after each tax year.
        </p>
        <p className="text-slate-600 leading-relaxed mb-3">
          Each EOPS allows you to make annual adjustments specific to that income source — for
          example, claiming capital allowances on business equipment, or adjusting for property
          finance costs. The two income sources are kept separate throughout the MTD process and
          only combined in your Final Declaration.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Both EOPS must be filed by 31 January following the end of the relevant tax year,
          before your Final Declaration can be submitted.
        </p>
      </section>

      {/* Practical steps */}
      <section className="mt-10 max-w-3xl" aria-labelledby="practical-steps">
        <h2 id="practical-steps" className="text-2xl font-bold text-slate-900 mb-4">
          Practical Steps to Prepare
        </h2>
        <ol className="space-y-4 text-slate-600">
          <li className="flex gap-3">
            <span className="flex-shrink-0 mt-0.5 size-6 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center">
              1
            </span>
            <span>
              <strong className="text-slate-900">Calculate your combined qualifying income</strong>{' '}
              — add your gross self-employment turnover to your gross rental income from your most
              recent Self Assessment return. If this exceeds £50,000, you need to act.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 mt-0.5 size-6 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center">
              2
            </span>
            <span>
              <strong className="text-slate-900">Choose software that supports both income types</strong>{' '}
              — confirm with the provider that their product handles both self-employment and
              property income quarterly updates within MTD.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 mt-0.5 size-6 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center">
              3
            </span>
            <span>
              <strong className="text-slate-900">Set up separate records for each income source</strong>{' '}
              — keep your self-employment income and expenses separate from your property income
              and expenses in your software from the outset.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 mt-0.5 size-6 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center">
              4
            </span>
            <span>
              <strong className="text-slate-900">Register for MTD with HMRC</strong> — you&apos;ll
              need to register separately for MTD, even if you already file Self Assessment.
              HMRC may contact you with details, but you can also register proactively.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 mt-0.5 size-6 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center">
              5
            </span>
            <span>
              <strong className="text-slate-900">Consider working with an accountant</strong>{' '}
              — dual-income MTD compliance is more complex than single-source reporting. An
              accountant familiar with MTD software can ensure both streams are reported correctly.
            </span>
          </li>
        </ol>
      </section>

      {/* CTA */}
      <div className="mt-12 max-w-3xl">
        <CTABlock
          heading="Check Your MTD Eligibility"
          description="Find out whether your combined income puts you in scope for MTD from April 2026 — and what steps to take next."
          primaryCta={{
            label: 'Use the Eligibility Checker',
            href: '/tools/mtd-eligibility-checker/',
          }}
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
              href="/software/best-mtd-software-for-sole-traders/"
              className="text-sm text-brand hover:underline inline-flex items-center gap-1"
            >
              <ArrowRight className="size-3.5" /> Best MTD Software for Sole Traders
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
