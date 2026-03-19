import type { Metadata } from 'next'
import { generateMetadata as buildMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { SourceList } from '@/components/trust/SourceList'
import { InfoCallout } from '@/components/common/InfoCallout'
import { LastUpdated } from '@/components/trust/LastUpdated'

export const metadata: Metadata = buildMetadata({
  title: 'Sources and Methodology',
  description:
    'How SoleTraderGuide researches software reviews, how our rating criteria are weighted, and the primary sources we rely on for MTD guidance.',
  canonicalPath: '/sources-methodology',
  pageType: 'legal',
})

const sources = [
  {
    title: 'HMRC: Making Tax Digital for Income Tax',
    url: 'https://www.gov.uk/guidance/using-making-tax-digital-for-income-tax',
    description: 'Official HMRC guidance on MTD ITSA, eligibility, signing up, and submitting updates.',
    date: 'March 2025',
  },
  {
    title: 'HMRC: Find software suppliers for Making Tax Digital for Income Tax',
    url: 'https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-income-tax',
    description: 'HMRC\'s official list of recognised MTD-compatible software products.',
    date: 'March 2025',
  },
  {
    title: 'Xero UK: Pricing and feature documentation',
    url: 'https://www.xero.com/uk/pricing-plans/',
    description: 'Xero\'s UK pricing pages and help centre documentation, used to verify features and costs.',
    date: 'March 2025',
  },
  {
    title: 'QuickBooks UK: Documentation and pricing',
    url: 'https://quickbooks.intuit.com/uk/pricing/',
    description: 'Intuit QuickBooks UK pricing and feature documentation for the Self-Employed and Simple Start plans.',
    date: 'March 2025',
  },
  {
    title: 'Sage UK: Accounting software documentation',
    url: 'https://www.sage.com/en-gb/accounting-software/',
    description: 'Sage UK product and pricing pages, including Sage Accounting Start for sole traders.',
    date: 'March 2025',
  },
  {
    title: 'FreeAgent: Documentation and MTD guidance',
    url: 'https://www.freeagent.com/making-tax-digital/',
    description: 'FreeAgent\'s MTD guidance, pricing, and feature documentation.',
    date: 'March 2025',
  },
  {
    title: 'AccountingWeb: Making Tax Digital coverage',
    url: 'https://www.accountingweb.co.uk/tax/personal-tax/making-tax-digital',
    description: 'UK accountancy trade publication covering MTD policy developments, HMRC consultations, and practitioner perspectives.',
    date: 'March 2025',
  },
  {
    title: 'ICAEW: Making Tax Digital resources',
    url: 'https://www.icaew.com/technical/tax/making-tax-digital',
    description: 'Institute of Chartered Accountants in England and Wales MTD guidance and policy commentary.',
    date: 'March 2025',
  },
]

export default function SourcesMethodologyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-8 sm:py-12">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Sources and Methodology' },
        ]}
      />

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Sources and Methodology
      </h1>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        Transparency about how we produce our content is fundamental to our editorial approach.
        This page explains how we research software reviews, how our rating system works, and
        the primary sources we rely on for MTD guidance.
      </p>

      <div className="mt-10 space-y-10">

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">How We Research Software Reviews</h2>
          <p className="text-muted-foreground leading-relaxed">
            When reviewing an MTD-compatible software product, we follow a consistent research
            process. We begin by evaluating each product hands-on, using free trials where
            available to assess the onboarding experience, interface quality, and the process of
            connecting to HMRC&apos;s API. We review each provider&apos;s official documentation, help centre,
            and pricing pages.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            We also review user feedback from verified UK-based sources where sufficient reliable
            data exists, and we consult independent accountancy press to understand how providers
            are regarded within the professional community. Where a provider has made public claims
            about their product, we verify these against what we observe in practice.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            We do not rely on marketing materials or press releases from providers as primary
            sources. All claims about pricing, features, and MTD compatibility are verified
            against primary sources before publication.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Our Rating Criteria</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We score each software product on five criteria, weighted to reflect their relative
            importance for a typical sole trader looking for MTD compliance:
          </p>

          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-muted/40 border-b border-border">
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Criterion</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Weight</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">What we assess</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  {
                    criterion: 'MTD Income Tax Compatibility',
                    weight: '30%',
                    details: 'HMRC recognition, quarterly update submission, EOPS filing, final declaration support, and API integration reliability.',
                  },
                  {
                    criterion: 'Ease of Use',
                    weight: '25%',
                    details: 'Onboarding experience, interface clarity, mobile app quality, bank feed setup, and suitability for non-accountants.',
                  },
                  {
                    criterion: 'Value for Money',
                    weight: '20%',
                    details: 'Pricing relative to features offered, availability of a suitable sole trader plan, contract flexibility, and discount transparency.',
                  },
                  {
                    criterion: 'Features',
                    weight: '15%',
                    details: 'Bank feeds, invoicing, Self Assessment support, expense management, integrations, and reporting capabilities.',
                  },
                  {
                    criterion: 'Customer Support',
                    weight: '10%',
                    details: 'UK support availability, response quality and speed, quality of self-serve help resources, and community forums.',
                  },
                ].map((row) => (
                  <tr key={row.criterion}>
                    <td className="px-4 py-3 font-medium text-foreground">{row.criterion}</td>
                    <td className="px-4 py-3 text-brand font-semibold">{row.weight}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Each criterion is scored on a 1–5 scale. The weighted average of all five scores
            produces the overall rating displayed on each review. For example, a product scoring
            5/5 on MTD Compatibility (worth 30%) and 4/5 on Ease of Use (worth 25%) would
            contribute 1.5 + 1.0 = 2.5 points to its total from those two criteria alone.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Primary Sources</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The following sources are used as primary references across our content. All URLs
            were verified at the time of publication. Prices, features, and guidance may have
            changed since we last reviewed each source.
          </p>
          <SourceList sources={sources} />
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">How We Keep Content Up to Date</h2>
          <p className="text-muted-foreground leading-relaxed">
            We review all major content pages on a quarterly basis. Reviews and comparison pages
            are updated whenever significant changes occur to pricing, features, or HMRC
            compatibility. Guide content covering MTD rules is updated whenever HMRC publishes
            relevant changes.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Each page displays a &ldquo;Last updated&rdquo; date. We also update this page when our
            methodology changes. If you spot content that appears out of date, please contact us
            at{' '}
            <a
              href="mailto:editorial@soletraderguide.co.uk"
              className="text-brand hover:underline underline-offset-2"
            >
              editorial@soletraderguide.co.uk
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Limitations</h2>

          <InfoCallout type="warning" title="Pricing and features change frequently">
            Software pricing, plan structures, and features can change without notice. Always
            verify current pricing and features directly with the provider before making a
            purchasing decision.
          </InfoCallout>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our ratings reflect our assessment at the time of our most recent review. No rating
            system can perfectly capture every nuance of a software product, and different users
            will weight criteria differently based on their needs. We recommend using our ratings
            as a starting point rather than the sole basis for your decision.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            MTD rules are set by HMRC and can change with little notice, particularly thresholds
            and deadlines. Always verify the current rules on gov.uk before relying on our guides
            for compliance purposes.
          </p>
        </section>
      </div>

      <div className="mt-10 border-t border-border pt-6">
        <LastUpdated date="2025-03-01" />
      </div>
    </div>
  )
}
