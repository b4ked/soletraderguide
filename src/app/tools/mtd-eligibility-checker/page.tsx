import type { Metadata } from 'next'
import Link from 'next/link'
import { generateMetadata as buildMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { EligibilityCheckerForm } from '@/components/tools/EligibilityCheckerForm'
import { FAQAccordion } from '@/components/common/FAQAccordion'
import { CTABlock } from '@/components/common/CTABlock'
import { InfoCallout } from '@/components/common/InfoCallout'
import { LastUpdated } from '@/components/trust/LastUpdated'
import type { FAQ } from '@/types'

export const metadata: Metadata = buildMetadata({
  title: 'MTD Eligibility Checker: Am I Affected by Making Tax Digital?',
  description:
    'Use our free MTD eligibility checker to find out whether Making Tax Digital for Income Tax applies to you, when your deadline is, and what you need to do next.',
  canonicalPath: '/tools/mtd-eligibility-checker',
  pageType: 'tool',
})

const faqs: FAQ[] = [
  {
    question: 'What income counts towards the MTD threshold?',
    answer:
      'The MTD threshold applies to your gross qualifying income — that is, income from self-employment and property before expenses. It does not include PAYE employment income, pensions, savings interest, or dividends. If you have both self-employment and property income, HMRC combines them to determine whether you exceed the threshold.',
  },
  {
    question: 'What if my income fluctuates year to year?',
    answer:
      'HMRC assesses your MTD obligation based on your income in the previous tax year. If you exceed the threshold in one year, you must comply from the following April. If your income then drops below the threshold, you can apply to HMRC to stop participating in MTD, but this is not automatic.',
  },
  {
    question: 'Am I affected if I am both employed and self-employed?',
    answer:
      'Having a PAYE salary alongside self-employment income does not exempt you from MTD. If your self-employment or property income alone exceeds the qualifying threshold, you will still need to comply. Your employment income handled through PAYE is not included in the MTD income calculation.',
  },
  {
    question: 'What happens if I miss the MTD deadline?',
    answer:
      'HMRC operates a penalty points system for late quarterly updates under MTD. You accumulate a point for each missed deadline, and once you reach the penalty threshold, a financial penalty is charged. The system is designed to be proportionate, but persistent non-compliance will result in fines. It is always better to sign up on time and get your first submission in correctly.',
  },
]

export default function EligibilityCheckerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-8 sm:py-12">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Tools', href: '/tools' },
          { label: 'MTD Eligibility Checker' },
        ]}
      />

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        MTD Eligibility Checker
      </h1>

      <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
        Not sure whether Making Tax Digital for Income Tax applies to you? Answer 3 quick questions
        and we will tell you whether you are affected, when your deadline is, and what your next
        steps should be.
      </p>

      <InfoCallout type="info" title="General guidance only" className="mt-6">
        This tool gives general guidance based on current HMRC rules. For advice specific to your
        personal situation, please speak to a qualified accountant or contact HMRC directly.
      </InfoCallout>

      <div className="mt-8">
        <EligibilityCheckerForm />
      </div>

      {/* What to Do Next */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold text-foreground mb-4">What to Do Next</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Once you know whether MTD applies to you, the next step is choosing the right software.
          HMRC requires you to use recognised MTD-compatible software to keep digital records and
          submit your quarterly updates. You cannot use HMRC&apos;s own portal to do this directly.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/software/best-mtd-software-for-sole-traders"
            className="block rounded-lg border border-border bg-white p-4 hover:border-brand transition-colors"
          >
            <p className="text-sm font-semibold text-foreground">Best MTD Software</p>
            <p className="mt-1 text-xs text-muted-foreground">Our top-rated options for sole traders</p>
          </Link>
          <Link
            href="/software/best-free-mtd-software"
            className="block rounded-lg border border-border bg-white p-4 hover:border-brand transition-colors"
          >
            <p className="text-sm font-semibold text-foreground">Free MTD Options</p>
            <p className="mt-1 text-xs text-muted-foreground">What is genuinely available for free</p>
          </Link>
          <Link
            href="/comparisons"
            className="block rounded-lg border border-border bg-white p-4 hover:border-brand transition-colors"
          >
            <p className="text-sm font-semibold text-foreground">Compare Software</p>
            <p className="mt-1 text-xs text-muted-foreground">Side-by-side comparison tables</p>
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section className="mt-14">
        <h2 className="text-xl font-bold text-foreground mb-6">
          Frequently Asked Questions About MTD Eligibility
        </h2>
        <FAQAccordion faqs={faqs} headingLevel="h3" />
      </section>

      {/* CTA */}
      <div className="mt-10">
        <CTABlock
          heading="Not sure which software to use?"
          description="Answer 5 quick questions and we will recommend the best MTD software for your situation and budget."
          primaryCta={{ label: 'Use the Software Chooser', href: '/tools/mtd-software-chooser' }}
          secondaryCta={{ label: 'Browse all software', href: '/software' }}
          variant="brand"
        />
      </div>

      <div className="mt-8 border-t border-border pt-6">
        <LastUpdated date="2025-03-01" />
      </div>
    </div>
  )
}
