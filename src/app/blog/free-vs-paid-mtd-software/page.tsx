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
  title: 'Free vs Paid MTD Software: Is There a Genuinely Free Option?',
  description:
    'Is free MTD software a myth? We look at what is genuinely available for free, including FreeAgent for NatWest customers and HMRC\'s own tools, and when paying makes sense.',
  canonicalPath: '/blog/free-vs-paid-mtd-software',
  publishedDate: '2025-01-10',
  updatedDate: '2025-01-10',
  author: 'SoleTraderGuide Editorial Team',
  pageType: 'blog',
  tags: ['free MTD software', 'FreeAgent', 'HMRC tools', 'MTD cost'],
})

const faqs: FAQ[] = [
  {
    question: 'Is FreeAgent genuinely free for NatWest customers?',
    answer:
      'Yes. FreeAgent is included free of charge with NatWest and Royal Bank of Scotland business banking accounts, including the free Mettle account. There is no monthly fee for the software itself, though you still need an active business bank account with either bank. The full FreeAgent feature set is available, including MTD quarterly update submission.',
  },
  {
    question: 'Are free trials a reliable way to use MTD software for free?',
    answer:
      'No. Free trials typically last 30 days and are designed to let you evaluate the software, not use it indefinitely. Once the trial ends, you must subscribe or lose access to your records. You cannot chain together multiple free trials from different providers to avoid paying — and switching constantly would be impractical for managing continuous records.',
  },
  {
    question: 'What does HMRC offer for free?',
    answer:
      'HMRC provides some basic free software for MTD Income Tax, primarily through approved third-party providers who offer free-tier products. HMRC itself does not operate a full accounting system. The free HMRC-approved options are limited in features and best suited to the very simplest sole trader finances — typically those with one income stream and minimal expenses.',
  },
  {
    question: 'How much does paid MTD software typically cost?',
    answer:
      'Paid MTD software for sole traders typically starts from around £8 to £15 per month for basic plans, rising to £30 or more per month for more comprehensive packages. Annual subscriptions are often cheaper than month-to-month pricing. Most providers offer introductory discounts of 50% to 90% off for the first three to six months.',
  },
]

const relatedPosts = [
  {
    title: 'MTD Software Options Explained: Which Type is Right for You?',
    href: '/blog/mtd-software-options-explained',
  },
  {
    title: 'April 2026 MTD Rollout Explained: What Sole Traders Need to Know',
    href: '/blog/april-2026-mtd-rollout-explained',
  },
]

export default function FreeVsPaidSoftwarePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-8 sm:py-12">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: 'Free vs Paid MTD Software' },
        ]}
      />

      {/* Article header */}
      <div className="mt-4">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="rounded-full bg-violet-100 px-2.5 py-0.5 text-xs font-semibold text-violet-800">
            Software Guides
          </span>
          <span className="text-sm text-muted-foreground">5 min read</span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl leading-tight">
          Free vs Paid MTD Software: Is There a Genuinely Free Option?
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span>By SoleTraderGuide Editorial Team</span>
          <LastUpdated date="2025-01-10" />
        </div>

        <div className="mt-4">
          <AffiliateDisclosure variant="inline" />
        </div>
      </div>

      {/* Article body */}
      <div className="mt-8 space-y-8">

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Is Free MTD Software Really Possible?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            One of the most common questions we hear from sole traders preparing for Making Tax
            Digital is whether free software actually exists. The short answer is: yes, in some
            circumstances. But for most sole traders, genuinely free MTD software is either not
            available or too limited to be practical. Understanding the landscape will help you
            make the right choice for your situation.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            There is a meaningful difference between &ldquo;free&rdquo; software and software that is free
            to try. In this article, we focus only on options that are sustainably free — not
            just for a trial period.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-3">
            FreeAgent: Free with NatWest or RBS
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            FreeAgent is the most compelling genuinely free option for MTD. If you hold a business
            bank account with NatWest or Royal Bank of Scotland — including the free Mettle
            account — you are entitled to FreeAgent at no monthly charge. This is a full-featured
            accounting package specifically designed for freelancers and sole traders.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            FreeAgent includes bank feeds, invoicing, expense tracking, MTD quarterly update
            submission, and Self Assessment filing support. It is HMRC-recognised and handles all
            your MTD obligations. If you already bank with NatWest or RBS, or are willing to
            switch, this is the strongest free option available.
          </p>
          <div className="mt-4">
            <Link
              href="/reviews/freeagent"
              className="text-sm font-semibold text-brand hover:underline underline-offset-2"
            >
              Read our full FreeAgent review &rarr;
            </Link>
          </div>
        </section>

        <InfoCallout type="tip" title="Already a NatWest or RBS customer?">
          If you bank with NatWest or Royal Bank of Scotland, log in to your business banking app
          and look for the FreeAgent integration in the benefits section. You may already be
          entitled to activate it for free.
        </InfoCallout>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-3">HMRC&apos;s Basic Tools</h2>
          <p className="text-muted-foreground leading-relaxed">
            HMRC does not build its own full accounting software, but it maintains a list of
            approved third-party products — some of which offer free or very low-cost tiers. These
            are primarily aimed at sole traders with the simplest finances: one income stream,
            minimal expenses, and no need for invoicing or detailed reporting.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            The functionality of these free HMRC-approved tools is deliberately basic. They allow
            you to record income and expenses in prescribed categories and submit quarterly updates
            to HMRC. If that is genuinely all you need and you are comfortable with a minimal
            interface, they are worth exploring. For anyone who needs invoicing, bank feeds, or
            financial reports, they fall short.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Free Trials: Not the Same as Free
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Every major paid MTD software provider offers a free trial, typically lasting 30 days.
            Xero, QuickBooks, Sage, and FreeAgent all have trial periods, and some promotional
            offers extend these. However, once the trial ends, you must subscribe or your access
            is suspended.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Trials are excellent for evaluating software before committing — we strongly recommend
            using them. But they should not be confused with a free ongoing solution. If you start
            using a trial and decide not to subscribe, export your data before access ends.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-3">What Paid Software Gives You</h2>
          <p className="text-muted-foreground leading-relaxed">
            Paid MTD software typically starts from around £8 to £15 per month for a basic sole
            trader plan. For this, you usually get bank feeds (automatic transaction import from
            your bank), invoicing, expense categorisation, MTD quarterly updates, and Self
            Assessment support. Mid-range plans add features like multi-currency support, more
            detailed reporting, and accountant collaboration tools.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            The time saved by a bank feed alone — which can automatically categorise dozens of
            transactions per month — often outweighs the cost of a subscription for most sole
            traders. When you factor in reduced errors and faster year-end processes, the value
            proposition of paid software is strong.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-semibold text-foreground">Provider</th>
                  <th className="text-left py-2 pr-4 font-semibold text-foreground">Starting price</th>
                  <th className="text-left py-2 font-semibold text-foreground">Free option?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-muted-foreground">
                <tr>
                  <td className="py-2 pr-4 font-medium text-foreground">FreeAgent</td>
                  <td className="py-2 pr-4">£19/month</td>
                  <td className="py-2">Yes — free with NatWest/RBS</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium text-foreground">QuickBooks</td>
                  <td className="py-2 pr-4">£8/month (Self-Employed)</td>
                  <td className="py-2">Trial only</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium text-foreground">Sage</td>
                  <td className="py-2 pr-4">£14/month</td>
                  <td className="py-2">Trial only</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium text-foreground">Xero</td>
                  <td className="py-2 pr-4">£16/month</td>
                  <td className="py-2">Trial only</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-2 text-xs text-muted-foreground">
              Prices as of January 2025. Always check provider websites for current pricing and promotions.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Our Verdict: When Free is Enough
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Free MTD software is genuinely enough in a few specific circumstances: if you bank
            with NatWest or RBS and can use FreeAgent, or if your finances are extremely simple
            and you are comfortable with a basic HMRC-approved tool. For everyone else, a paid
            subscription is likely a better investment.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            The good news is that paid MTD software does not have to be expensive. At £8 to £15
            per month, a quality sole trader accounting package costs less than a business lunch
            and will save you significantly more time than that each month. Use our free Software
            Chooser to find the best match for your budget and situation.
          </p>
        </section>
      </div>

      {/* CTA */}
      <div className="mt-10">
        <CTABlock
          heading="Find the right software for your budget"
          description="Use our free Software Chooser to get a personalised recommendation in 5 quick questions."
          primaryCta={{ label: 'Find my software', href: '/tools/mtd-software-chooser' }}
          secondaryCta={{ label: 'Read our reviews', href: '/reviews' }}
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
        <LastUpdated date="2025-01-10" />
      </div>
    </div>
  )
}
