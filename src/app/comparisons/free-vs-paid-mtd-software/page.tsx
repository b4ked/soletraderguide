import Link from 'next/link'
import { generateMetadata as genMeta } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { AffiliateDisclosure } from '@/components/trust/AffiliateDisclosure'
import { ReviewedBy } from '@/components/trust/ReviewedBy'
import { LastUpdated } from '@/components/trust/LastUpdated'
import { InfoCallout } from '@/components/common/InfoCallout'
import { FAQAccordion } from '@/components/common/FAQAccordion'
import { CTABlock } from '@/components/common/CTABlock'

export const metadata = genMeta({
  title: 'Free vs Paid MTD Software: What\'s the Difference for Sole Traders?',
  description:
    'Is there genuinely free MTD software for sole traders? We explain what HMRC offers, how to get FreeAgent for free via NatWest/RBS, and when paying for software is worth it.',
  canonicalPath: '/comparisons/free-vs-paid-mtd-software',
  pageType: 'comparison',
  updatedDate: '2026-03-31',
})

const faqs = [
  {
    question: 'Is there completely free MTD Income Tax software?',
    answer:
      "There is no widely available, fully free MTD Income Tax software comparable to the paid options in terms of features. The main exceptions are: (1) FreeAgent, which is free with qualifying NatWest/RBS business bank accounts; (2) HMRC's own Basic PAYE Tools and similar tools, which cover specific narrow use cases; and (3) occasional free tiers from smaller providers. Most dedicated MTD accounting platforms require a paid subscription.",
  },
  {
    question: 'Can I use a spreadsheet for MTD?',
    answer:
      "Not directly. HMRC does not accept raw spreadsheets as MTD submissions. However, you can use a spreadsheet alongside bridging software — a tool that takes your spreadsheet data and submits it to HMRC in the correct format. This is a legitimate approach and some sole traders use it as a cost-effective compromise. Bridging software typically costs £5–£15/month.",
  },
  {
    question: 'Is HMRC free software good enough?',
    answer:
      "HMRC's free tools are very basic and not designed as a full accounting solution. They can help with specific tasks (such as checking MTD eligibility or submitting a final declaration) but they don't replace accounting software for day-to-day bookkeeping, invoicing, or expense tracking. Most sole traders with any business activity will find HMRC's free tools insufficient on their own.",
  },
  {
    question: 'Is £15–£20/month for MTD software worth it?',
    answer:
      "For most sole traders, yes. The time saving from automated bank feeds and auto-categorisation alone is typically worth more than £15/month. Add in reduced accountant fees (many accountants charge less when you use good software), better tax accuracy, and peace of mind around MTD compliance — and paid software usually pays for itself. That said, if your income is very straightforward and you're confident with your numbers, simpler options may suffice.",
  },
  {
    question: 'What happens if I don\'t use MTD-compatible software?',
    answer:
      "From April 2026, sole traders earning over £50,000 will be legally required to use HMRC-compatible software for Making Tax Digital for Income Tax. Filing paper returns or using spreadsheets without bridging software will not be compliant. HMRC can issue penalties for non-compliance. From April 2027, the threshold drops to £30,000. It's important to get set up with a compliant solution before your mandatory start date.",
  },
]

export default function FreeVsPaidMtdSoftwarePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Comparisons', href: '/comparisons' },
          { label: 'Free vs Paid MTD Software' },
        ]}
      />

      <AffiliateDisclosure variant="banner" className="mb-8" />

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Free vs Paid MTD Software: What&apos;s the Difference for Sole Traders?
        </h1>
        <div className="flex flex-wrap items-center gap-3">
          <LastUpdated date="2026-03-31" />
          <ReviewedBy
            name="SoleTraderGuide Editorial Team"
            role="MTD Software Analyst"
            date="2026-03-31"
          />
        </div>
        <p className="mt-5 text-base text-muted-foreground leading-relaxed">
          One of the most common questions we receive from sole traders approaching MTD is: &ldquo;Do I
          have to pay for software?&rdquo; The honest answer is: it depends. This guide explains what
          free options actually exist, what paid software gives you that free doesn&apos;t, and how to
          decide what&apos;s right for your situation.
        </p>
      </header>

      {/* Section: Is there genuinely free MTD software? */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-foreground mb-4">
          Is There Genuinely Free MTD Software?
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          The short answer is: kind of. There is no widely available, full-featured MTD accounting
          platform that is completely free for all UK sole traders. The market leaders — Xero,
          QuickBooks, Sage, and FreeAgent — all charge a monthly subscription fee.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          However, there are three scenarios where you can access MTD-compliant tools at no cost:
        </p>
        <ol className="list-decimal list-inside space-y-3 text-sm text-muted-foreground leading-relaxed mb-4 ml-2">
          <li>
            <strong className="text-foreground">FreeAgent via NatWest or RBS</strong> — the main
            &ldquo;free&rdquo; full-featured option (more on this below)
          </li>
          <li>
            <strong className="text-foreground">HMRC&apos;s own tools</strong> — free but very limited
            in scope and functionality
          </li>
          <li>
            <strong className="text-foreground">Bridging software</strong> — not free, but cheaper
            than full accounting software if you want to keep using a spreadsheet
          </li>
        </ol>

        <InfoCallout type="warning" title="Important: Free trials are not free plans">
          Many software providers advertise a &ldquo;free trial&rdquo; — this is time-limited access (usually
          30 days) rather than an ongoing free plan. After the trial, you must subscribe or lose
          access to your data. Don&apos;t confuse the two.
        </InfoCallout>
      </section>

      {/* Section: FreeAgent via NatWest/RBS */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-foreground mb-4">
          FreeAgent via NatWest or RBS: The Main &lsquo;Free&rsquo; Option
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          The most significant &ldquo;free&rdquo; MTD software deal available to UK sole traders is FreeAgent
          via a NatWest or RBS business bank account. This is a genuine, full-featured product —
          not a cut-down free tier. NatWest Group acquired FreeAgent in 2018, and as part of their
          offering they provide all qualifying business account holders with full FreeAgent access
          at no extra cost.
        </p>

        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 mb-5">
          <p className="font-semibold text-emerald-800 mb-3">What you get for free with NatWest/RBS:</p>
          <ul className="space-y-2 text-sm text-foreground">
            {[
              'MTD Income Tax quarterly updates (HMRC-recognised)',
              'End of Period Statement (EOPS) filing',
              'Self-assessment tax return (SA100) filing',
              'Invoicing and expense tracking',
              'Bank feed from your NatWest/RBS account',
              'Tax timeline dashboard (upcoming deadlines and amounts owed)',
              'Time and project tracking',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-emerald-600 mt-0.5 shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          If you already bank with NatWest or RBS and have a business current account, you should
          activate FreeAgent before even considering paid alternatives. It is the best deal
          available for sole traders in the MTD software market.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          If you don&apos;t currently bank with NatWest or RBS, it is worth considering whether
          switching your business banking would make sense purely to access FreeAgent for free.
          FreeAgent costs £19/month if you pay directly — that&apos;s £228/year. Weigh this against any
          banking costs or incentives associated with switching.
        </p>

        <InfoCallout type="info" className="mt-5" title="Check your account eligibility">
          Not all NatWest/RBS accounts qualify. Log into your NatWest/RBS business banking and
          check the FreeAgent section, or speak to your business banking relationship manager to
          confirm whether your specific account type is eligible.
        </InfoCallout>

        <div className="mt-5">
          <Link
            href="/reviews/freeagent"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline underline-offset-2"
          >
            Read our full FreeAgent review →
          </Link>
        </div>
      </section>

      {/* Section: HMRC's free tools */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-foreground mb-4">
          HMRC&apos;s Free Tools: What They Offer
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          HMRC provides a number of free digital tools that sole traders can use for specific tasks.
          These are not replacements for accounting software, but they can complement a paid
          subscription — or cover specific needs for very simple businesses.
        </p>

        <div className="space-y-4 mb-5">
          <div className="rounded-lg border border-border bg-white p-4">
            <p className="font-semibold text-foreground mb-1">HMRC Online Services</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              HMRC&apos;s Government Gateway provides free access to your tax account, allows you to
              view previous submissions, and in some cases allows you to make a final declaration.
              However, it does not provide bookkeeping, invoicing, or bank feed functionality.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-white p-4">
            <p className="font-semibold text-foreground mb-1">HMRC&apos;s MTD-compatible tools list</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              HMRC publishes a list of approved MTD software. Some smaller providers on this list
              offer basic free tiers. These are typically more limited than the major paid platforms
              and may lack bank feeds, invoicing, or mobile apps. They can work for very simple
              businesses.
            </p>
          </div>
        </div>

        <InfoCallout type="warning" title="HMRC tools are not accounting software">
          HMRC&apos;s free tools are designed for tax administration, not business management. They
          do not replace the invoicing, expense tracking, bank reconciliation, and reporting
          features that accounting software provides. For most sole traders running an active
          business, HMRC&apos;s tools alone are insufficient.
        </InfoCallout>
      </section>

      {/* Section: What paid software offers that free doesn't */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-foreground mb-4">
          What Paid Software Offers That Free Doesn&apos;t
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
          Beyond MTD compliance (which free options can technically provide), paid accounting
          software delivers a range of additional benefits that save time and reduce errors:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
          {[
            {
              feature: 'Automatic bank feeds',
              description: 'Transactions import daily — no manual data entry. This alone can save 1–3 hours per month for a typical sole trader.',
            },
            {
              feature: 'Smart categorisation',
              description: 'The software learns your spending patterns and auto-categorises transactions, making quarterly MTD figures more accurate.',
            },
            {
              feature: 'Professional invoicing',
              description: 'Create and send branded invoices, accept online payments, and automate payment reminders — all in one place.',
            },
            {
              feature: 'Real-time tax estimates',
              description: 'Know roughly what you owe HMRC throughout the year, not just in January. Prevents cash flow surprises.',
            },
            {
              feature: 'Mileage and receipt tracking',
              description: 'Log business expenses on the go via mobile. Automated mileage tracking (QuickBooks) means you never miss a deductible journey.',
            },
            {
              feature: 'Accountant collaboration',
              description: 'Paid platforms integrate with accountant portals, making it easier to share data and reduce the time (and cost) of an annual review.',
            },
          ].map((item) => (
            <div key={item.feature} className="rounded-lg border border-border bg-white p-4">
              <p className="font-semibold text-foreground text-sm mb-1">{item.feature}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section: When free is enough, when you should pay */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-foreground mb-4">
          When Free is Enough — and When to Pay
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
            <p className="font-bold text-emerald-800 mb-3">Free may be enough if...</p>
            <ul className="space-y-2 text-sm text-foreground">
              {[
                'You bank with NatWest or RBS (use FreeAgent for free)',
                'Your income is very straightforward — one source, few expenses',
                'You already have a system that works and just need MTD compliance',
                'You are comfortable managing your finances manually',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5 shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
            <p className="font-bold text-amber-800 mb-3">Consider paying if...</p>
            <ul className="space-y-2 text-sm text-foreground">
              {[
                'You have multiple income sources (self-employment + property, etc.)',
                'You invoice clients and need professional invoicing tools',
                'You spend significant time on bookkeeping each month',
                "You're not confident your current system is HMRC-compliant",
                'You want a real-time view of your tax liability throughout the year',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-amber-600 mt-0.5 shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section: Cost calculation narrative */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-foreground mb-4">
          Is Paid MTD Software Worth the Cost?
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Let&apos;s look at the numbers. The cheapest paid MTD option from a major provider is
          QuickBooks Self-Employed at £8/month — that&apos;s £96/year. The next tier up (Xero Starter,
          QuickBooks Simple Start, Sage Accounting Start) runs to £14–16/month, or around
          £168–192/year.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          The question is: what does that buy you in time and money?
        </p>

        <div className="rounded-xl border border-border bg-muted/30 p-5 mb-5">
          <p className="font-semibold text-foreground mb-3 text-sm">A rough cost-benefit calculation:</p>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-start gap-3">
              <span className="text-brand font-bold shrink-0 mt-0.5">+</span>
              <p>
                <strong className="text-foreground">Time saved on bookkeeping:</strong> If automated bank
                feeds save you 2 hours/month, and your effective hourly rate is £20, that&apos;s £480/year
                in time value — exceeding the software cost.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-brand font-bold shrink-0 mt-0.5">+</span>
              <p>
                <strong className="text-foreground">Accountant fee reduction:</strong> Many accountants
                charge £100–£200 less per year when clients use good software, as the data quality is
                higher and reconciliation takes less time.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-brand font-bold shrink-0 mt-0.5">+</span>
              <p>
                <strong className="text-foreground">Tax accuracy:</strong> Better categorisation means
                fewer missed deductions. Even finding one additional £500 deductible expense per year
                saves a basic-rate sole trader £100 in tax — paying for the software cost.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-brand font-bold shrink-0 mt-0.5">+</span>
              <p>
                <strong className="text-foreground">Self-assessment filing:</strong> FreeAgent includes
                SA100 filing. Paying an accountant to do this typically costs £100–£300/year. If you
                use FreeAgent and file yourself, you save this cost entirely.
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm font-medium text-foreground">
            For most sole traders, paid MTD software pays for itself within the first year.
          </p>
        </div>
      </section>

      {/* Verdict section with recommendation matrix */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-foreground mb-4">
          Our Recommendation: Who Should Use What
        </h2>

        <div className="space-y-4">
          {[
            {
              scenario: 'NatWest or RBS business account holder',
              recommendation: 'FreeAgent (free)',
              reasoning: 'Full-featured MTD software including self-assessment filing at no cost. There is no better deal in the market.',
              href: '/reviews/freeagent',
            },
            {
              scenario: 'Sole trader with simple income, tight budget',
              recommendation: 'QuickBooks Self-Employed (£8/month)',
              reasoning: 'The cheapest HMRC-recognised MTD option with a reputable provider. Covers the basics without excess complexity.',
              href: '/reviews/quickbooks',
            },
            {
              scenario: 'Freelancer or consultant who invoices clients',
              recommendation: 'Xero Starter (£16/month) or FreeAgent (£19/month)',
              reasoning: "Both handle invoicing and MTD well. Xero has better invoicing tools; FreeAgent includes self-assessment filing and has a simpler interface.",
              href: '/comparisons/xero-vs-freeagent',
            },
            {
              scenario: 'Established sole trader who values UK support',
              recommendation: 'Sage Accounting Start (£15/month)',
              reasoning: "UK-based phone support, strong compliance focus, and a product built by a UK company that understands UK tax law.",
              href: '/reviews/sage',
            },
            {
              scenario: 'Growing sole trader planning to scale',
              recommendation: 'Xero Standard (£33/month)',
              reasoning: '800+ integrations, excellent mobile app, and a platform that grows with your business. The investment is justified once you reach a certain size.',
              href: '/reviews/xero',
            },
          ].map((item) => (
            <div key={item.scenario} className="rounded-lg border border-border bg-white p-4">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                If you are a...
              </p>
              <p className="font-semibold text-foreground text-sm mb-1">{item.scenario}</p>
              <p className="text-sm text-brand font-medium mb-1">Our pick: {item.recommendation}</p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-2">{item.reasoning}</p>
              <Link
                href={item.href}
                className="text-xs font-semibold text-brand hover:underline underline-offset-2"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-foreground mb-5">Frequently Asked Questions</h2>
        <FAQAccordion faqs={faqs} headingLevel="h3" includeSchema />
      </section>

      <CTABlock
        heading="Ready to find the right MTD software?"
        description="Use our software finder to get a personalised recommendation based on your income, bank, and budget."
        primaryCta={{ label: 'Find my software', href: '/tools/software-finder' }}
        secondaryCta={{ label: 'Browse all reviews', href: '/reviews' }}
        variant="brand"
      />
    </div>
  )
}
