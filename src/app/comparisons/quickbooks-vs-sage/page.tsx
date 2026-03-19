import Link from 'next/link'
import { generateMetadata as genMeta } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { AffiliateDisclosure } from '@/components/trust/AffiliateDisclosure'
import { ReviewedBy } from '@/components/trust/ReviewedBy'
import { LastUpdated } from '@/components/trust/LastUpdated'
import { ComparisonTable } from '@/components/comparison/ComparisonTable'
import { ProsConsList } from '@/components/comparison/ProsConsList'
import { InfoCallout } from '@/components/common/InfoCallout'
import { FAQAccordion } from '@/components/common/FAQAccordion'
import { CTABlock } from '@/components/common/CTABlock'
import { quickbooks, sage } from '@/data/providers'
import type { ComparisonFeature } from '@/types'

export const metadata = genMeta({
  title: 'QuickBooks vs Sage for Sole Traders: MTD Software Compared (2025)',
  description:
    'QuickBooks vs Sage compared for UK sole traders. QuickBooks leads on features and mobile; Sage wins on UK support and compliance. Find out which is right for you.',
  canonicalPath: '/comparisons/quickbooks-vs-sage',
  pageType: 'comparison',
  updatedDate: '2025-03-01',
})

const features: ComparisonFeature[] = [
  {
    name: 'MTD compatible',
    description: 'HMRC-recognised for MTD Income Tax',
    values: { quickbooks: true, sage: true },
  },
  {
    name: 'Starting price',
    values: { quickbooks: '£8/month', sage: '£15/month' },
  },
  {
    name: 'Free plan available',
    values: { quickbooks: false, sage: false },
  },
  {
    name: 'Free trial',
    values: { quickbooks: '30 days', sage: '30 days' },
  },
  {
    name: 'Supports sole traders',
    values: { quickbooks: true, sage: true },
  },
  {
    name: 'Supports landlords',
    values: { quickbooks: false, sage: false },
  },
  {
    name: 'Mobile app quality',
    values: { quickbooks: 'Good', sage: 'Basic' },
  },
  {
    name: 'Ease of use (1–5)',
    values: { quickbooks: '3.5 / 5', sage: '3.5 / 5' },
  },
  {
    name: 'UK customer support',
    values: { quickbooks: 'Chat + phone', sage: 'Phone + chat (UK-based)' },
  },
  {
    name: 'Integrations',
    values: { quickbooks: '650+ apps', sage: '100+ apps' },
  },
  {
    name: 'Self-assessment filing',
    values: { quickbooks: 'Via accountant', sage: 'Via accountant' },
  },
]

const faqs = [
  {
    question: 'Is QuickBooks or Sage better for MTD?',
    answer:
      'Both are HMRC-recognised and handle MTD Income Tax quarterly updates and EOPS submissions equally well. The choice between them comes down to other factors: QuickBooks has better mobile tools and more integrations; Sage has better UK phone support and a stronger compliance focus. For pure MTD capability, they are evenly matched.',
  },
  {
    question: 'Which is cheaper — QuickBooks or Sage?',
    answer:
      "QuickBooks has a cheaper entry point: the Self-Employed plan at £8/month. Sage's cheapest plan (Accounting Start) is £15/month. At the full bookkeeping level, QuickBooks Simple Start is £14/month versus Sage Accounting Start at £15/month — very similar. Always check current pricing as both companies run frequent promotions.",
  },
  {
    question: 'Does Sage have better UK support than QuickBooks?',
    answer:
      'Sage is a UK-headquartered company and offers UK-based phone support on all plans. QuickBooks also offers phone support and has a substantial UK operation, but Sage\'s domestic roots mean their support team has deeper familiarity with UK-specific tax and accounting queries. For sole traders who like to pick up the phone, Sage is the safer choice.',
  },
  {
    question: "What's the difference between Sage 50 and Sage Accounting?",
    answer:
      "Sage 50 is Sage's legacy desktop software aimed at larger, more complex businesses. Sage Accounting (also called Sage Business Cloud Accounting) is the modern cloud-based product designed for sole traders and small businesses. Most sole traders will use Sage Accounting, not Sage 50.",
  },
  {
    question: 'Can I try both QuickBooks and Sage before deciding?',
    answer:
      "Yes — both offer 30-day free trials. We recommend running trials of both simultaneously if you're genuinely undecided. Connect your bank account to each and spend a week doing your normal bookkeeping in each platform. That hands-on experience will tell you more than any comparison article.",
  },
]

export default function QuickBooksVsSagePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Comparisons', href: '/comparisons' },
          { label: 'QuickBooks vs Sage' },
        ]}
      />

      <AffiliateDisclosure variant="banner" className="mb-8" />

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">
          QuickBooks vs Sage for Sole Traders: MTD Software Compared (2025)
        </h1>
        <div className="flex flex-wrap items-center gap-3">
          <LastUpdated date="2025-03-01" />
          <ReviewedBy
            name="SoleTraderGuide Editorial Team"
            role="MTD Software Analyst"
            date="2025-03-01"
          />
        </div>
      </header>

      {/* Quick summary */}
      <section className="mb-10 rounded-xl border-2 border-brand/20 bg-brand-light p-6">
        <h2 className="text-lg font-bold text-foreground mb-4">In a nutshell</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <p className="font-semibold text-foreground mb-2">QuickBooks</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>Cheaper entry point with the Self-Employed plan (£8/month)</li>
              <li>Better mobile app and 650+ integrations</li>
              <li>Mileage tracking and receipt capture built in</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-2">Sage</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>UK-headquartered with UK-based phone support</li>
              <li>Strong compliance focus — closely tracks UK tax rule changes</li>
              <li>Trusted brand with decades of UK accounting expertise</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Who each is best for */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-foreground mb-4">Who Each Tool is Best For</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="rounded-xl border border-border bg-white p-5">
            <p className="font-bold text-foreground mb-3">Choose QuickBooks if you...</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-brand shrink-0">→</span>
                Want the cheapest entry-level MTD plan (Self-Employed, £8/month)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand shrink-0">→</span>
                Drive for work and want automatic mileage tracking
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand shrink-0">→</span>
                Need lots of third-party integrations
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand shrink-0">→</span>
                Primarily use accounting software on your phone
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-white p-5">
            <p className="font-bold text-foreground mb-3">Choose Sage if you...</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-brand shrink-0">→</span>
                Want to speak to a UK-based accountant or support agent by phone
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand shrink-0">→</span>
                Value working with an established, UK-native brand
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand shrink-0">→</span>
                Have an accountant who recommends or uses Sage
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand shrink-0">→</span>
                May need to add payroll as your business grows
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-foreground mb-4">Full Feature Comparison</h2>
        <ComparisonTable
          providers={[quickbooks, sage]}
          features={features}
          highlightedProvider="quickbooks"
        />
      </section>

      {/* Pros and Cons */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-foreground mb-5">Pros and Cons</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <p className="font-semibold text-foreground mb-3 text-base">QuickBooks</p>
            <ProsConsList pros={quickbooks.pros} cons={quickbooks.cons} layout="stacked" />
          </div>
          <div>
            <p className="font-semibold text-foreground mb-3 text-base">Sage</p>
            <ProsConsList pros={sage.pros} cons={sage.cons} layout="stacked" />
          </div>
        </div>
      </section>

      {/* Key differences */}
      <section className="mb-12 space-y-8">
        <h2 className="text-xl font-bold text-foreground">Key Differences Explained</h2>

        <div>
          <h3 className="text-base font-bold text-foreground mb-3">UK Support and Heritage</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Sage is a UK company — founded in Newcastle in 1981 and headquartered in the UK today.
            This matters for sole traders who want genuine local expertise. Sage&apos;s support team
            understands UK payroll, UK VAT, and MTD nuances from first principles. QuickBooks is
            developed by Intuit, an American company with a strong UK operation but a global
            product roadmap. Both offer phone support, but Sage&apos;s team is explicitly UK-based.
          </p>
        </div>

        <div>
          <h3 className="text-base font-bold text-foreground mb-3">Mobile Experience</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            QuickBooks has the better mobile app — both in terms of features and user ratings in
            app stores. The mileage tracking feature is particularly useful for sole traders who
            use their car for business and want to claim mileage as an expense. Sage&apos;s mobile
            app is more limited, making it less suitable for sole traders who manage their accounts
            primarily on a phone.
          </p>
        </div>

        <div>
          <h3 className="text-base font-bold text-foreground mb-3">Integrations</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            QuickBooks has over 650 third-party app integrations; Sage has around 100. If you rely
            on specific tools — e-commerce platforms, payment processors, CRM systems — QuickBooks
            is more likely to have a native integration. For most straightforward sole trader
            businesses, Sage&apos;s available integrations are sufficient.
          </p>
        </div>

        <div>
          <h3 className="text-base font-bold text-foreground mb-3">MTD Compliance</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Both QuickBooks and Sage are fully HMRC-recognised for Making Tax Digital for Income
            Tax. Both can submit all four quarterly updates and the End of Period Statement directly
            to HMRC. There is no meaningful difference in MTD compliance between the two — your
            choice should be based on the other factors in this comparison.
          </p>

          <InfoCallout type="info" className="mt-4" title="Neither files self-assessment directly">
            Like most accounting platforms, neither QuickBooks nor Sage files a traditional
            Self Assessment return (SA100) automatically. Under MTD, quarterly updates replace
            the annual return for self-employment income. For a final declaration or other income
            types, most users work with an accountant. The exception is{' '}
            <Link href="/reviews/freeagent" className="underline underline-offset-2">
              FreeAgent
            </Link>
            , which includes self-assessment filing in its standard plans.
          </InfoCallout>
        </div>
      </section>

      {/* Verdict */}
      <section className="mb-12 rounded-xl border-2 border-brand/20 bg-brand-light p-6">
        <h2 className="text-lg font-bold text-foreground mb-4">The Verdict</h2>
        <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
          <p>
            <strong className="text-foreground">On features and mobile experience:</strong>{' '}
            QuickBooks wins. It has a better mobile app, more integrations, and the Self-Employed
            plan at £8/month is a genuinely good deal for sole traders with simple finances.
          </p>
          <p>
            <strong className="text-foreground">On UK support and compliance confidence:</strong>{' '}
            Sage wins. If picking up the phone and speaking to someone in the UK about your tax
            question is important to you, Sage is worth the slightly higher entry price.
          </p>
          <p>
            <strong className="text-foreground">Overall:</strong> For most sole traders, QuickBooks
            offers more value. But the &ldquo;right&rdquo; choice ultimately depends on whether you
            prioritise features (QuickBooks) or UK-based support and heritage (Sage). Both are
            solid, reliable, HMRC-recognised platforms.
          </p>
        </div>
      </section>

      {/* Alternative options */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-foreground mb-4">Alternative Options</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              name: 'Xero',
              slug: 'xero',
              summary: 'Clean interface, excellent mobile app, 800+ integrations. Comparable pricing to QuickBooks and Sage at the full bookkeeping level.',
            },
            {
              name: 'FreeAgent',
              slug: 'freeagent',
              summary: 'Purpose-built for freelancers. Self-assessment filing included. Free for NatWest/RBS business account holders.',
            },
          ].map((alt) => (
            <Link
              key={alt.slug}
              href={`/reviews/${alt.slug}`}
              className="rounded-lg border border-border bg-white p-4 hover:border-brand hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-foreground mb-1">{alt.name}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{alt.summary}</p>
              <p className="text-xs text-brand mt-2 font-medium">Read review →</p>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-foreground mb-5">Frequently Asked Questions</h2>
        <FAQAccordion faqs={faqs} headingLevel="h3" includeSchema />
      </section>

      <CTABlock
        heading="Ready to choose between QuickBooks and Sage?"
        description="Both offer 30-day free trials. Test both with your real business data before committing."
        primaryCta={{ label: 'Try QuickBooks free', href: quickbooks.affiliateLink }}
        secondaryCta={{ label: 'Try Sage free', href: sage.affiliateLink }}
        variant="brand"
      />
    </div>
  )
}
