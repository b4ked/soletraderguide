import type { Metadata } from 'next'
import { generateMetadata as buildMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { SoftwareChooserForm } from '@/components/tools/SoftwareChooserForm'
import { FAQAccordion } from '@/components/common/FAQAccordion'
import { CTABlock } from '@/components/common/CTABlock'
import { InfoCallout } from '@/components/common/InfoCallout'
import { AffiliateDisclosure } from '@/components/trust/AffiliateDisclosure'
import { LastUpdated } from '@/components/trust/LastUpdated'
import type { FAQ } from '@/types'

export const metadata: Metadata = buildMetadata({
  title: 'MTD Software Chooser: Find the Right Tool for Your Business',
  description:
    'Answer 5 quick questions and find the best MTD-compatible accounting software for your sole trader business. Free, unbiased recommendations.',
  canonicalPath: '/tools/mtd-software-chooser',
  pageType: 'tool',
})

const faqs: FAQ[] = [
  {
    question: 'Can I change my MTD software later?',
    answer:
      'Yes. You are not locked into any single software provider once you sign up for MTD. You can switch software at any time, though you should ensure your records and submission history are exported before cancelling. Most providers allow data export in a standard format.',
  },
  {
    question: 'Do I need to use the software my accountant recommends?',
    answer:
      'Not necessarily. While it can be convenient to use the same software as your accountant for easier collaboration, there is no requirement to do so. Many providers support accountant access, and some even offer a free accountant edition. Our recommendation is based on what suits you, but always worth discussing with your accountant before committing.',
  },
  {
    question: 'Is free MTD software genuinely available?',
    answer:
      'Free MTD software does exist in limited circumstances. FreeAgent is free for eligible NatWest and RBS business banking customers. HMRC also provides some basic tools, though these are limited in scope. Most sole traders will need to pay for software, but several options have low monthly starting prices — from around £10 to £15 per month.',
  },
]

export default function SoftwareChooserPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-8 sm:py-12">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Tools', href: '/tools' },
          { label: 'MTD Software Chooser' },
        ]}
      />

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        MTD Software Chooser
      </h1>

      <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
        Answer 5 quick questions and we will recommend the best MTD-compatible software for your
        situation. We consider your income level, experience, priorities, and banking arrangements
        to give you a tailored suggestion.
      </p>

      <div className="mt-4 flex items-center gap-3">
        <AffiliateDisclosure variant="inline" />
      </div>

      <InfoCallout type="info" title="Editorially independent" className="mt-6">
        Our recommendations are based on editorial criteria — not on which providers pay us the
        most. We may earn a commission if you sign up via our links, but this does not influence
        our recommendations.
      </InfoCallout>

      <div className="mt-8">
        <SoftwareChooserForm />
      </div>

      {/* How We Make Recommendations */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold text-foreground mb-4">How We Make Recommendations</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Our software chooser uses a decision tree based on the five questions you answer. Each
          answer narrows the recommendation based on the criteria most relevant to that type of
          user. The final recommendation reflects our editorial assessment of which provider best
          fits that profile.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We evaluate all software against five criteria: MTD compatibility, ease of use, value for
          money, features, and customer support. You can read our full methodology on the{' '}
          <a href="/sources-methodology" className="text-brand hover:underline underline-offset-2">
            sources and methodology page
          </a>
          .
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Commercial relationships with providers (affiliate commissions) do not affect which
          software we recommend. See our{' '}
          <a href="/editorial-policy" className="text-brand hover:underline underline-offset-2">
            editorial policy
          </a>{' '}
          for more details.
        </p>
      </section>

      {/* FAQs */}
      <section className="mt-14">
        <h2 className="text-xl font-bold text-foreground mb-6">
          Frequently Asked Questions
        </h2>
        <FAQAccordion faqs={faqs} headingLevel="h3" />
      </section>

      {/* CTA */}
      <div className="mt-10">
        <CTABlock
          heading="Want to compare all options?"
          description="See a full side-by-side comparison of Xero, QuickBooks, Sage, and FreeAgent — including pricing, features, and MTD compliance."
          primaryCta={{ label: 'Compare all software', href: '/comparisons' }}
          secondaryCta={{ label: 'Read our reviews', href: '/reviews' }}
          variant="light"
        />
      </div>

      <div className="mt-8 border-t border-border pt-6">
        <LastUpdated date="2026-03-31" />
      </div>
    </div>
  )
}
