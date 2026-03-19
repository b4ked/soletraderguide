import type { Metadata } from 'next'
import Link from 'next/link'
import { generateArticleMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { FAQAccordion } from '@/components/common/FAQAccordion'
import { CTABlock } from '@/components/common/CTABlock'
import { InfoCallout } from '@/components/common/InfoCallout'
import { AffiliateDisclosure } from '@/components/trust/AffiliateDisclosure'
import { LastUpdated } from '@/components/trust/LastUpdated'
import type { FAQ } from '@/types'

export const metadata: Metadata = generateArticleMetadata({
  title: 'MTD Software Options Explained: Which Type is Right for You?',
  description:
    'From full accounting software to bridging tools, there are several ways to comply with MTD for Income Tax. We explain each option and help you choose the right one.',
  canonicalPath: '/blog/mtd-software-options-explained',
  publishedDate: '2025-01-28',
  updatedDate: '2025-01-28',
  author: 'SoleTraderGuide Editorial Team',
  pageType: 'blog',
  tags: ['MTD software', 'bridging software', 'accounting software', 'sole traders'],
})

const faqs: FAQ[] = [
  {
    question: 'Does HMRC offer free MTD software?',
    answer:
      'HMRC provides some basic free tools for MTD, primarily aimed at the simplest cases. However, these tools are limited in scope and do not offer the features most sole traders need, such as bank feeds, invoicing, or financial reporting. For most people, a third-party software solution will be more practical and efficient.',
  },
  {
    question: 'Can I use spreadsheets for MTD?',
    answer:
      'You can keep records in spreadsheets, but you cannot submit directly from a spreadsheet to HMRC. You will need bridging software to convert your spreadsheet data into the MTD-compatible format and submit it. Several bridging tools integrate directly with Excel or Google Sheets and handle the submission automatically.',
  },
  {
    question: 'What makes software "MTD-compatible"?',
    answer:
      'MTD-compatible software must be able to connect to HMRC\'s Making Tax Digital API and submit quarterly updates, the End of Period Statement (EOPS), and the final declaration digitally. HMRC maintains an official list of recognised software products. All of the main providers — Xero, QuickBooks, Sage, and FreeAgent — are on this list.',
  },
  {
    question: 'Can I switch MTD software mid-year?',
    answer:
      'Yes. You are not locked into a single software provider. However, switching mid-year requires some care: you need to ensure your year-to-date records transfer correctly and that your new software picks up from where the old one left off. Most providers can export your data in a format compatible with other tools, but it is usually easier to switch at the start of a new tax year.',
  },
]

const relatedPosts = [
  {
    title: 'Free vs Paid MTD Software: Is There a Genuinely Free Option?',
    href: '/blog/free-vs-paid-mtd-software',
  },
  {
    title: 'April 2026 MTD Rollout Explained',
    href: '/blog/april-2026-mtd-rollout-explained',
  },
]

export default function SoftwareOptionsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-8 sm:py-12">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: 'MTD Software Options Explained' },
        ]}
      />

      {/* Article header */}
      <div className="mt-4">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="rounded-full bg-violet-100 px-2.5 py-0.5 text-xs font-semibold text-violet-800">
            Software Guides
          </span>
          <span className="text-sm text-muted-foreground">7 min read</span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl leading-tight">
          MTD Software Options Explained: Which Type is Right for You?
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span>By SoleTraderGuide Editorial Team</span>
          <LastUpdated date="2025-01-28" />
        </div>

        <div className="mt-4">
          <AffiliateDisclosure variant="inline" />
        </div>
      </div>

      {/* Article body */}
      <div className="mt-8 space-y-8">

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-3">
            The Three Main Types of MTD Software
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            When it comes to MTD compliance, there is no single approach that suits everyone.
            HMRC recognises three broad categories of compatible software: full accounting
            software, bridging software, and HMRC&apos;s own free tools. The right choice depends
            on how you currently manage your records, your budget, and how hands-on you want to
            be with your finances.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            All three approaches can satisfy your MTD obligations, but they differ significantly
            in cost, features, and the amount of manual work involved. Understanding the
            differences will help you make a more informed decision.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Full Accounting Software (Xero, QuickBooks, Sage, FreeAgent)
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Full accounting software handles everything from recording transactions and invoicing
            clients to submitting your quarterly updates and end of year statements to HMRC. It
            is the most comprehensive option and, for most sole traders who do not use
            spreadsheets, the most practical.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              {
                name: 'Xero',
                href: '/reviews/xero',
                description: 'Feature-rich with 800+ integrations. Best for growing businesses that need powerful reporting and bank feeds.',
              },
              {
                name: 'QuickBooks',
                href: '/reviews/quickbooks',
                description: 'Competitive pricing with a Self-Employed plan from £8/month. Good for straightforward sole trader finances.',
              },
              {
                name: 'Sage',
                href: '/reviews/sage',
                description: 'UK-based with UK support. Sage Accounting Start is tailored for sole traders needing simple MTD compliance.',
              },
              {
                name: 'FreeAgent',
                href: '/reviews/freeagent',
                description: 'Purpose-built for freelancers and sole traders. Free for NatWest and RBS business banking customers.',
              },
            ].map((provider) => (
              <Link
                key={provider.name}
                href={provider.href}
                className="block rounded-lg border border-border bg-white p-4 hover:border-brand hover:shadow-sm transition-all"
              >
                <p className="text-sm font-bold text-foreground mb-1">{provider.name}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{provider.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Bridging Software: For Spreadsheet Users
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Bridging software is designed for sole traders who want to continue using spreadsheets
            — such as Excel or Google Sheets — for their record-keeping, but still need to submit
            their quarterly updates to HMRC digitally. The bridging tool sits between your
            spreadsheet and HMRC, reading the figures from your designated cells and submitting
            them in the correct MTD format.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Bridging software tends to be cheaper than full accounting packages, often priced at
            under £10 per month or as a one-off annual fee. However, it does not replace your
            record-keeping process — you still need to maintain your spreadsheets accurately. Well-known
            bridging tools include Absolute Bridging and Cirrostratus MTD Bridge.
          </p>
        </section>

        <InfoCallout type="tip" title="Bridging software works best when...">
          You already have well-organised spreadsheets, you are comfortable maintaining them
          yourself, and you do not need features like invoicing, bank feeds, or financial reports.
          If you want any of those features, full accounting software is likely more practical.
        </InfoCallout>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-3">HMRC&apos;s Own Free Tools</h2>
          <p className="text-muted-foreground leading-relaxed">
            HMRC provides some free tools for MTD compliance, but these are primarily aimed at
            the simplest cases — typically those with a very small number of transactions and no
            need for invoicing, reporting, or bank feeds. They are functional but basic, and HMRC
            has indicated these tools are intended as a last resort rather than a recommended
            primary solution.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            If cost is your primary concern, it is worth comparing the HMRC tools against the
            cheapest commercial options before committing. A low-cost full accounting package may
            actually save you time and reduce errors compared to using a free but limited tool.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-3">How to Choose the Right Option</h2>
          <p className="text-muted-foreground leading-relaxed">
            The right MTD software depends on a handful of key factors: whether you currently use
            spreadsheets (and want to continue), your budget, how much time you want to spend on
            bookkeeping, and whether you need additional features like invoicing or bank feeds.
            If you are comfortable with technology and want an all-in-one solution, full
            accounting software is usually the best fit.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            If you are committed to spreadsheets and your finances are straightforward, bridging
            software may be sufficient and cheaper. HMRC&apos;s free tools are worth considering if
            your finances are very simple and cost is the overriding concern.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-3">Our Top Recommendations</h2>
          <p className="text-muted-foreground leading-relaxed">
            For most sole traders, we recommend starting with full accounting software. FreeAgent
            is our top pick for freelancers and those who bank with NatWest or RBS, as it may be
            free. QuickBooks offers the most competitive pricing for budget-conscious users.
            FreeAgent and Xero both excel on ease of use, and Sage is the strongest choice for
            those wanting UK-based customer support.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Read our detailed reviews or use the Software Chooser tool to get a personalised
            recommendation based on your specific situation.
          </p>
        </section>
      </div>

      {/* CTA */}
      <div className="mt-10">
        <CTABlock
          heading="Get a personalised software recommendation"
          description="Answer 5 quick questions and we will suggest the best MTD software for your situation."
          primaryCta={{ label: 'Use the Software Chooser', href: '/tools/mtd-software-chooser' }}
          secondaryCta={{ label: 'Compare all options', href: '/comparisons' }}
          variant="brand"
        />
      </div>

      {/* FAQs */}
      <section className="mt-14">
        <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
        <FAQAccordion faqs={faqs} headingLevel="h3" />
      </section>

      {/* Related posts */}
      <section className="mt-14">
        <h2 className="text-xl font-bold text-foreground mb-4">Related Articles</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {relatedPosts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="block rounded-lg border border-border bg-white p-4 hover:border-brand hover:shadow-sm transition-all"
            >
              <p className="text-sm font-semibold text-foreground hover:text-brand transition-colors">
                {post.title}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <div className="mt-10 border-t border-border pt-6">
        <LastUpdated date="2025-01-28" />
      </div>
    </div>
  )
}
