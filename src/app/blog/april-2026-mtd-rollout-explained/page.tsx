import type { Metadata } from 'next'
import Link from 'next/link'
import { generateArticleMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { FAQAccordion } from '@/components/common/FAQAccordion'
import { CTABlock } from '@/components/common/CTABlock'
import { InfoCallout } from '@/components/common/InfoCallout'
import { LastUpdated } from '@/components/trust/LastUpdated'
import type { FAQ } from '@/types'

export const metadata: Metadata = generateArticleMetadata({
  title: 'April 2026 MTD Rollout Explained: What Sole Traders Need to Know',
  description:
    'From April 2026, Making Tax Digital for Income Tax becomes mandatory for sole traders and landlords earning over £50,000 per year. Here is everything you need to know.',
  canonicalPath: '/blog/april-2026-mtd-rollout-explained',
  publishedDate: '2025-03-01',
  updatedDate: '2025-03-01',
  author: 'SoleTraderGuide Editorial Team',
  pageType: 'blog',
  tags: ['MTD', 'April 2026', 'sole traders', 'deadlines'],
})

const faqs: FAQ[] = [
  {
    question: 'Does the April 2026 deadline apply to all sole traders?',
    answer:
      'No. The April 2026 deadline only applies to sole traders and landlords whose qualifying income (self-employment and/or property income) exceeds £50,000 in the previous tax year. Those earning between £30,001 and £50,000 have until April 2027. There is currently no confirmed mandatory date for those earning £30,000 or less.',
  },
  {
    question: 'What counts as qualifying income for the MTD threshold?',
    answer:
      'Qualifying income includes gross income from self-employment (before expenses) and gross rental income from UK property. It does not include PAYE employment income, pension income, savings interest, or dividends. If you have both self-employment and property income, HMRC adds them together to determine whether you exceed the threshold.',
  },
  {
    question: 'Can I sign up for MTD before April 2026?',
    answer:
      'Yes, and HMRC actively encourages it. Voluntary sign-up is available now, and many accountants recommend joining early so you have time to get used to the process before it becomes mandatory. Early adoption also helps you identify any issues with your software setup or record-keeping well ahead of the deadline.',
  },
  {
    question: 'What software do I need for MTD from April 2026?',
    answer:
      'You must use HMRC-recognised MTD-compatible software to keep digital records and submit your quarterly updates. Popular options include Xero, QuickBooks, Sage, and FreeAgent. You cannot use HMRC\'s own portal for MTD Income Tax submissions. Use our free Software Chooser tool to find the right option for you.',
  },
]

const relatedPosts = [
  {
    title: 'Your First Quarterly Update: A Step-by-Step Guide',
    href: '/blog/first-quarterly-update-what-sole-traders-need-to-do',
  },
  {
    title: 'MTD Software Options Explained',
    href: '/blog/mtd-software-options-explained',
  },
]

export default function AprilRolloutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-8 sm:py-12">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: 'April 2026 MTD Rollout Explained' },
        ]}
      />

      {/* Article header */}
      <div className="mt-4">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800">
            MTD News
          </span>
          <span className="text-sm text-muted-foreground">6 min read</span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl leading-tight">
          April 2026 MTD Rollout Explained: What Sole Traders Need to Know
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span>By SoleTraderGuide Editorial Team</span>
          <LastUpdated date="2025-03-01" />
        </div>
      </div>

      <InfoCallout type="deadline" title="Key deadline: 6 April 2026" className="mt-8">
        Sole traders and landlords with qualifying income over £50,000 must be enrolled in Making
        Tax Digital for Income Tax by 6 April 2026. Missing this deadline may result in penalty
        points under HMRC&apos;s new points-based system.
      </InfoCallout>

      {/* Article body */}
      <div className="mt-8 prose-like space-y-8">

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-3">
            What is the April 2026 MTD Deadline?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            April 2026 marks the point at which Making Tax Digital for Income Tax Self Assessment
            (MTD ITSA) becomes mandatory for sole traders and landlords with qualifying income above
            £50,000 per year. From this date, you will be required to keep digital records and
            submit quarterly updates to HMRC using approved software, replacing the current annual
            Self Assessment return for this portion of your tax affairs.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            The April 2026 deadline has been legislated and is not expected to change. It follows
            several years of delays and pilots, and HMRC is now focused on helping businesses
            prepare rather than postponing further.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Who is Affected from April 2026?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The April 2026 requirement applies to any UK sole trader or landlord whose qualifying
            income — the combined gross income from self-employment and property before expenses —
            exceeds £50,000 in the 2024/25 tax year. If you fall into this group, you must sign up
            for MTD for Income Tax and begin submitting quarterly updates from April 2026.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Partnerships, limited companies, and PAYE employees without self-employment income are
            not in scope for April 2026. However, HMRC has indicated that the scheme will be
            extended over time.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-3">
            What Happens if I Miss the Deadline?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            HMRC uses a penalty points system for MTD non-compliance. Each missed quarterly
            submission deadline earns you a penalty point. Once you reach a certain threshold of
            points — currently four for quarterly filers — a financial penalty of £200 is charged.
            Points can be erased after a period of full compliance.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Beyond quarterly submissions, failing to sign up at all could result in further
            sanctions. HMRC has stated it will take a supportive approach in the early months of
            mandatory MTD, but this will not last indefinitely.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-3">
            What Do I Need to Do Before April 2026?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            There are three main things you need to do before April 2026: choose MTD-compatible
            software, set up digital records, and formally sign up for MTD through your Government
            Gateway account. Leaving any of these steps to the last minute increases the risk of
            problems when the deadline arrives.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            We recommend starting your software evaluation at least six months before the
            deadline, so you have time to test the software with your actual records, make
            adjustments to how you categorise income and expenses, and ensure your software
            connects successfully to HMRC&apos;s systems.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-3">
            The April 2027 Extension: What Changes Next?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            From April 2027, MTD for Income Tax will extend to sole traders and landlords with
            qualifying income between £30,001 and £50,000. This second phase means that a
            significantly larger group of self-employed people and landlords will need to comply
            within the following year. If your income falls in this band, it is worth getting
            familiar with MTD now — the software you choose and the habits you build will be the
            same regardless of which deadline applies to you.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            HMRC has not yet confirmed when — or whether — MTD will be extended to those earning
            below £30,000. This group is currently out of scope, and no mandatory date has been
            announced.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-3">Where to Get Help</h2>
          <p className="text-muted-foreground leading-relaxed">
            The official source for MTD guidance is HMRC&apos;s website at gov.uk. If you work
            with an accountant or bookkeeper, speak to them — many have already begun migrating
            clients across to MTD-compatible software. If you are self-managing, use our free
            eligibility checker to confirm your situation and our software chooser to find the right
            tool for your needs.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Accountancy bodies such as the ICAEW and ACCA also publish practical guides for
            members and their clients on MTD preparation.
          </p>
        </section>
      </div>

      {/* CTA */}
      <div className="mt-10">
        <CTABlock
          heading="Check if you are affected"
          description="Use our free eligibility checker to find out whether and when MTD applies to your income."
          primaryCta={{ label: 'Check my eligibility', href: '/tools/mtd-eligibility-checker' }}
          secondaryCta={{ label: 'Find MTD software', href: '/tools/mtd-software-chooser' }}
          variant="brand"
        />
      </div>

      {/* FAQs */}
      <section className="mt-14">
        <h2 className="text-xl font-bold text-foreground mb-6">
          Frequently Asked Questions
        </h2>
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
        <LastUpdated date="2025-03-01" />
      </div>
    </div>
  )
}
