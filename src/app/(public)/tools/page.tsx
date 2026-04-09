import type { Metadata } from 'next'
import Link from 'next/link'
import { generateMetadata as buildMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { FAQAccordion } from '@/components/common/FAQAccordion'
import { LastUpdated } from '@/components/trust/LastUpdated'
import { CheckCircle, Star } from 'lucide-react'
import type { FAQ } from '@/types'

export const metadata: Metadata = buildMetadata({
  title: 'MTD Tools for Sole Traders',
  description:
    'Free tools to check your MTD eligibility and find the right software for your business.',
  canonicalPath: '/tools',
  pageType: 'tool',
})

const faqs: FAQ[] = [
  {
    question: 'Are these tools free to use?',
    answer:
      'Yes, both the MTD Eligibility Checker and the Software Chooser are completely free. They require no registration or personal information.',
  },
  {
    question: 'Do these tools give personalised tax advice?',
    answer:
      'No. The tools provide general guidance based on the answers you give. They are designed to help you understand your situation and point you in the right direction, but they do not constitute tax, financial, or legal advice. For advice specific to your circumstances, speak to a qualified accountant or contact HMRC directly.',
  },
  {
    question: 'How accurate is the eligibility checker?',
    answer:
      'The eligibility checker reflects the current HMRC rules for Making Tax Digital for Income Tax, including the April 2026 and April 2027 thresholds. We review and update the tool whenever HMRC publishes changes to the rules.',
  },
]

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-8 sm:py-12">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Tools' },
        ]}
      />

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Free MTD Tools for Sole Traders
      </h1>

      <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
        Use our free tools to check whether Making Tax Digital affects you and to find the right
        software for your situation. No registration required.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Eligibility Checker Card */}
        <Link
          href="/tools/mtd-eligibility-checker"
          className="group block rounded-xl border-2 border-border bg-white p-6 transition-all hover:border-brand hover:shadow-md"
        >
          <div className="mb-4 inline-flex size-12 items-center justify-center rounded-full bg-brand-light">
            <CheckCircle className="size-6 text-brand" aria-hidden="true" />
          </div>
          <h2 className="text-lg font-bold text-foreground group-hover:text-brand transition-colors">
            MTD Eligibility Checker
          </h2>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            Answer 3 quick questions to find out whether Making Tax Digital for Income Tax applies
            to you, and when your deadline is.
          </p>
          <p className="mt-4 text-sm font-semibold text-brand">
            Check my eligibility &rarr;
          </p>
        </Link>

        {/* Software Chooser Card */}
        <Link
          href="/tools/mtd-software-chooser"
          className="group block rounded-xl border-2 border-border bg-white p-6 transition-all hover:border-brand hover:shadow-md"
        >
          <div className="mb-4 inline-flex size-12 items-center justify-center rounded-full bg-brand-light">
            <Star className="size-6 text-brand" aria-hidden="true" />
          </div>
          <h2 className="text-lg font-bold text-foreground group-hover:text-brand transition-colors">
            MTD Software Chooser
          </h2>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            Not sure which MTD software is right for you? Answer 5 questions and we will recommend
            the best option for your situation and budget.
          </p>
          <p className="mt-4 text-sm font-semibold text-brand">
            Find my software &rarr;
          </p>
        </Link>
      </div>

      <section className="mt-14">
        <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
        <FAQAccordion faqs={faqs} headingLevel="h3" />
      </section>

      <div className="mt-10 border-t border-border pt-6">
        <LastUpdated date="2026-03-31" />
      </div>
    </div>
  )
}
