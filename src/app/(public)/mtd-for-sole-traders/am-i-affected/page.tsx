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
  title: 'Am I Affected by Making Tax Digital for Income Tax?',
  description:
    'Find out if you need to comply with MTD for Income Tax. Understand the £50,000 threshold, what counts as qualifying income, landlord rules, exemptions, and how to check your obligations.',
  canonicalPath: '/mtd-for-sole-traders/am-i-affected',
  pageType: 'guide',
  updatedDate: '2026-03-31',
})

const faqs: FAQ[] = [
  {
    question: 'I earn £48,000 from self-employment and £6,000 from renting a room — am I affected?',
    answer:
      'Yes. HMRC looks at your total qualifying income from all self-employment and property sources combined. £48,000 + £6,000 = £54,000, which exceeds the £50,000 threshold. You would need to comply with MTD from April 2026.',
  },
  {
    question: 'What if my income varies year to year and sometimes goes above £50,000?',
    answer:
      'HMRC determines your MTD status based on the income reported in your most recent Self Assessment tax return. If that income is above the threshold, you\'ll need to comply from the April following that assessment. If your income subsequently drops below the threshold, you can apply to exit MTD, though the process for this has not yet been fully confirmed by HMRC.',
  },
  {
    question: 'Does employment income count towards the MTD threshold?',
    answer:
      'No. The £50,000 threshold only applies to income from self-employment (sole trader income) and property income. PAYE employment income does not count towards the threshold, even if your total income (including employment) is much higher.',
  },
  {
    question: 'I already file a Self Assessment — does that mean I automatically sign up for MTD?',
    answer:
      'No. Filing Self Assessment does not automatically enrol you into MTD. You will need to register separately for MTD, though HMRC may contact you with details closer to your mandatory start date. Voluntary sign-up is available now for those who want to prepare.',
  },
  {
    question: 'Are there any exemptions from MTD for Income Tax?',
    answer:
      'Yes, limited exemptions may apply. HMRC can grant exemptions or deferrals for reasons including being unable to use digital tools for religious reasons, a disability that makes digital record-keeping impractical, or in insolvency situations. You\'ll need to apply to HMRC directly if you believe you qualify for an exemption.',
  },
]

export default function AmIAffectedPage() {
  return (
    <div className="page-container py-8">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'MTD for Sole Traders', href: '/mtd-for-sole-traders' },
          { label: 'Am I Affected?' },
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
          Am I Affected by Making Tax Digital for Income Tax?
        </h1>
        <div className="mt-3 mb-4">
          <ReviewedBy
            name="SoleTraderGuide Editorial Team"
            role="UK Tax Content Specialists"
            date="2026-03-01"
          />
        </div>
        <p className="text-lg text-slate-600 leading-relaxed mb-4">
          MTD for Income Tax applies to sole traders and landlords whose qualifying income crosses
          a set threshold. Here&apos;s how to work out whether you&apos;re in scope, when you
          need to start, and what you can do if you think you might qualify for an exemption.
        </p>
        <LastUpdated date="2026-03-31" />
      </header>

      <InfoCallout type="deadline" title="Mandatory from April 2026">
        From <strong>April 2026</strong>, sole traders and landlords with annual qualifying income
        over <strong>£50,000</strong> must use MTD-compatible software to keep digital records and
        submit quarterly updates to HMRC. Those with income over £30,000 follow in April 2027.
      </InfoCallout>

      {/* £50,000 threshold */}
      <section className="mt-10 max-w-3xl" aria-labelledby="threshold">
        <h2 id="threshold" className="text-2xl font-bold text-slate-900 mb-4">
          The £50,000 Income Threshold
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          The starting point for MTD eligibility is whether your qualifying income exceeds the
          threshold set by HMRC. For the first mandatory wave (April 2026), that threshold is
          £50,000 per year. For April 2027, it drops to £30,000. A further reduction to £20,000
          is planned, though not yet confirmed.
        </p>
        <p className="text-slate-600 leading-relaxed mb-3">
          HMRC will assess your eligibility based on the income declared in your most recent
          Self Assessment return. If your 2024/25 Self Assessment (filed by January 2026) shows
          income above £50,000, you will need to comply from April 2026.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Importantly, the threshold applies to your <em>gross</em> income — before expenses —
          not your profit.
        </p>
      </section>

      {/* What counts as income */}
      <section className="mt-10 max-w-3xl" aria-labelledby="what-counts">
        <h2 id="what-counts" className="text-2xl font-bold text-slate-900 mb-4">
          What Counts as Qualifying Income?
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          Only certain types of income count towards the MTD threshold. The two qualifying
          categories are:
        </p>
        <ul className="space-y-3 mb-4">
          <li className="flex gap-3 text-slate-600">
            <span className="mt-1.5 size-2 rounded-full bg-brand shrink-0" />
            <span>
              <strong className="text-slate-900">Self-employment income</strong> — your gross
              income from all sole-trader business activities before deducting expenses
            </span>
          </li>
          <li className="flex gap-3 text-slate-600">
            <span className="mt-1.5 size-2 rounded-full bg-brand shrink-0" />
            <span>
              <strong className="text-slate-900">Property income</strong> — gross rental income
              from UK or overseas property before expenses
            </span>
          </li>
        </ul>
        <p className="text-slate-600 leading-relaxed mb-3">
          The following types of income do <strong>not</strong> count towards the threshold:
        </p>
        <ul className="space-y-2 text-slate-600 ml-4 list-disc list-inside">
          <li>PAYE employment income</li>
          <li>Dividend income</li>
          <li>Interest from savings and investments</li>
          <li>Pension income</li>
          <li>Capital gains</li>
        </ul>
      </section>

      {/* Multiple income sources */}
      <section className="mt-10 max-w-3xl" aria-labelledby="multiple-sources">
        <h2 id="multiple-sources" className="text-2xl font-bold text-slate-900 mb-4">
          What If You Have Multiple Income Sources?
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          If you have income from more than one qualifying source — for example, two separate
          self-employed businesses, or self-employment plus rental income — HMRC adds them
          together to assess your threshold position.
        </p>
        <p className="text-slate-600 leading-relaxed mb-3">
          For example: if you earn £35,000 as a freelance consultant and £18,000 from renting a
          property, your combined qualifying income is £53,000 — above the threshold. You would
          need to comply with MTD from April 2026 even though neither income stream on its own
          crosses the threshold.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Each income source must be reported separately under MTD — you&apos;ll have one set of
          quarterly updates for your self-employment income and another for your property income.
        </p>
      </section>

      {/* What if below threshold */}
      <section className="mt-10 max-w-3xl" aria-labelledby="below-threshold">
        <h2 id="below-threshold" className="text-2xl font-bold text-slate-900 mb-4">
          What If You&apos;re Below the Threshold?
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          If your qualifying income is below £50,000, you are not required to comply with MTD
          for Income Tax from April 2026. However, you may want to keep an eye on your income
          if it&apos;s close to the threshold — if you cross it in a future tax year, you could
          become in scope.
        </p>
        <p className="text-slate-600 leading-relaxed">
          You can also choose to sign up voluntarily if you want to get ahead of the changes.
          Voluntary participation is available and some sole traders find that adopting digital
          record-keeping early makes the eventual transition much smoother.
        </p>
      </section>

      <InfoCallout type="tip" title="Voluntary Sign-Up Available" className="mt-10 max-w-3xl">
        Even if you&apos;re not yet required to use MTD, you can sign up voluntarily. This gives
        you time to get comfortable with the software and quarterly submission process before it
        becomes mandatory.
      </InfoCallout>

      {/* Landlord income */}
      <section className="mt-10 max-w-3xl" aria-labelledby="landlord">
        <h2 id="landlord" className="text-2xl font-bold text-slate-900 mb-4">
          Landlord Income and MTD
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          MTD for Income Tax covers both self-employment and property income. If you are a
          landlord — whether that&apos;s a single buy-to-let property or a larger portfolio —
          your gross rental income counts towards the MTD threshold.
        </p>
        <p className="text-slate-600 leading-relaxed mb-3">
          If you are both a sole trader and a landlord, you&apos;ll need to submit quarterly
          updates for each income stream separately. HMRC treats self-employment and property as
          distinct reporting categories, so you cannot combine them into a single update.
        </p>
        <Link
          href="/mtd-for-sole-traders/sole-trader-and-landlord-income"
          className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
        >
          Full guide: MTD for sole traders with both trading and property income{' '}
          <ArrowRight className="size-4" />
        </Link>
      </section>

      {/* Exemptions */}
      <section className="mt-10 max-w-3xl" aria-labelledby="exemptions">
        <h2 id="exemptions" className="text-2xl font-bold text-slate-900 mb-4">
          Exemptions and Deferrals
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          HMRC recognises that digital record-keeping is not practical for everyone. Limited
          exemptions are available in the following circumstances:
        </p>
        <ul className="space-y-2 text-slate-600 ml-4 list-disc list-inside mb-3">
          <li>You are digitally excluded — for example due to disability, age, or lack of internet access</li>
          <li>Religious or other grounds make it impractical to use digital tools</li>
          <li>You are subject to an insolvency procedure</li>
          <li>
            Other exceptional circumstances that HMRC may consider on a case-by-case basis
          </li>
        </ul>
        <p className="text-slate-600 leading-relaxed">
          If you believe you qualify for an exemption, you will need to apply directly to HMRC.
          They will review your circumstances and, if approved, you may be allowed to continue
          filing paper returns or may be given a deferred start date.
        </p>
      </section>

      {/* Voluntary sign-up */}
      <section className="mt-10 max-w-3xl" aria-labelledby="voluntary">
        <h2 id="voluntary" className="text-2xl font-bold text-slate-900 mb-4">
          Voluntary Sign-Up
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          HMRC has made MTD voluntary sign-up available to sole traders ahead of the mandatory
          dates. If you want to get ahead of the changes — whether to test software, build good
          habits, or simply avoid a last-minute rush — you can join before you&apos;re required to.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Bear in mind that once you sign up voluntarily, you are committing to the quarterly
          submission schedule. It is not straightforward to withdraw from MTD once enrolled,
          so make sure your software and record-keeping processes are ready before signing up.
        </p>
      </section>

      {/* CTA */}
      <div className="mt-12 max-w-3xl">
        <CTABlock
          heading="Check Your MTD Eligibility in 2 Minutes"
          description="Answer a few simple questions about your income sources and we'll give you a clear answer about your MTD obligations."
          primaryCta={{ label: 'Use the Eligibility Checker', href: '/tools/mtd-eligibility-checker' }}
          secondaryCta={{ label: 'Read: What is MTD?', href: '/mtd-for-sole-traders/what-is-mtd-income-tax' }}
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
              href="/mtd-for-sole-traders/what-is-mtd-income-tax"
              className="text-sm text-brand hover:underline inline-flex items-center gap-1"
            >
              <ArrowRight className="size-3.5" /> What is Making Tax Digital for Income Tax?
            </Link>
          </li>
          <li>
            <Link
              href="/mtd-for-sole-traders/deadlines"
              className="text-sm text-brand hover:underline inline-flex items-center gap-1"
            >
              <ArrowRight className="size-3.5" /> MTD for Income Tax: Deadlines and Key Dates
            </Link>
          </li>
          <li>
            <Link
              href="/mtd-for-sole-traders/sole-trader-and-landlord-income"
              className="text-sm text-brand hover:underline inline-flex items-center gap-1"
            >
              <ArrowRight className="size-3.5" /> MTD for Sole Traders with Both Trading and
              Property Income
            </Link>
          </li>
          <li>
            <Link
              href="/software"
              className="text-sm text-brand hover:underline inline-flex items-center gap-1"
            >
              <ArrowRight className="size-3.5" /> Compare MTD Software for Sole Traders
            </Link>
          </li>
        </ul>
      </section>
    </div>
  )
}
