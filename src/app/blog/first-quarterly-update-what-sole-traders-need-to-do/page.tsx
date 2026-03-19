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
  title: 'Your First Quarterly Update: A Step-by-Step Guide for Sole Traders',
  description:
    'Not sure what your first MTD quarterly update involves? We break down the process step by step — from categorising income to submitting to HMRC.',
  canonicalPath: '/blog/first-quarterly-update-what-sole-traders-need-to-do',
  publishedDate: '2025-02-15',
  updatedDate: '2025-02-15',
  author: 'SoleTraderGuide Editorial Team',
  pageType: 'blog',
  tags: ['MTD', 'quarterly update', 'sole traders', 'step by step'],
})

const faqs: FAQ[] = [
  {
    question: 'What happens if I submit my quarterly update late?',
    answer:
      'Under MTD\'s penalty points system, each late quarterly submission earns one penalty point. When you accumulate enough points (currently four for quarterly filers), a £200 financial penalty is triggered. Points expire after a period of clean compliance, but it is always best to submit on time. If you genuinely cannot submit, contact HMRC as early as possible.',
  },
  {
    question: 'Do I need to include every single transaction in a quarterly update?',
    answer:
      'Your quarterly update must summarise your income and expenses for the period using the correct HMRC categories. Most MTD software handles this automatically once you have categorised your transactions. You do not need to send HMRC individual receipts or invoices — just the category totals.',
  },
  {
    question: 'Can I correct a quarterly update after it has been submitted?',
    answer:
      'Yes. HMRC allows you to amend a quarterly update after submission. Most MTD software makes it straightforward to resubmit a corrected update for a period. It is better to submit on time with approximate figures and correct them later than to miss a deadline waiting for perfect information.',
  },
  {
    question: 'What is the End of Period Statement (EOPS)?',
    answer:
      'The End of Period Statement is an annual declaration you make at the end of each tax year to confirm that your quarterly updates are complete and accurate. It also allows you to make any final adjustments — such as allowable expenses or reliefs — before HMRC calculates your tax liability for the year. The EOPS replaces part of your existing Self Assessment return.',
  },
]

const relatedPosts = [
  {
    title: 'April 2026 MTD Rollout Explained: What Sole Traders Need to Know',
    href: '/blog/april-2026-mtd-rollout-explained',
  },
  {
    title: 'MTD Software Options Explained: Which Type is Right for You?',
    href: '/blog/mtd-software-options-explained',
  },
]

export default function FirstQuarterlyUpdatePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-8 sm:py-12">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: 'Your First Quarterly Update' },
        ]}
      />

      {/* Article header */}
      <div className="mt-4">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800">
            Tax Tips
          </span>
          <span className="text-sm text-muted-foreground">8 min read</span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl leading-tight">
          Your First Quarterly Update: A Step-by-Step Guide for Sole Traders
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span>By SoleTraderGuide Editorial Team</span>
          <LastUpdated date="2025-02-15" />
        </div>
      </div>

      {/* Article body */}
      <div className="mt-8 space-y-8">

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-3">
            What is a Quarterly Update?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Under Making Tax Digital for Income Tax, sole traders and landlords must submit a
            summary of their income and expenses to HMRC four times a year, instead of once at
            the end of the year. This is known as a quarterly update. It is not a tax payment —
            it is simply a digital record of your business activity for that three-month period,
            sent directly from your MTD-compatible software to HMRC.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Each quarterly update includes your income and expense totals broken down into the
            categories HMRC requires. You are not sending individual invoices or receipts — just
            the summarised figures. Think of it as a regular financial check-in rather than a
            full tax return.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-3">
            When is Your First Quarterly Update Due?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The MTD tax year runs from 6 April to 5 April, aligned with the standard UK tax year.
            Your first quarterly update covers the period from 6 April to 5 July, and the deadline
            to submit it is 7 August. After that, updates follow a similar pattern every three
            months throughout the year.
          </p>
        </section>

        <InfoCallout type="deadline" title="The four quarterly deadlines">
          <ul className="space-y-1 mt-1">
            <li><strong>Q1:</strong> 6 April – 5 July — submit by 7 August</li>
            <li><strong>Q2:</strong> 6 July – 5 October — submit by 7 November</li>
            <li><strong>Q3:</strong> 6 October – 5 January — submit by 7 February</li>
            <li><strong>Q4:</strong> 6 January – 5 April — submit by 7 May</li>
          </ul>
        </InfoCallout>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Step 1: Make Sure Your Software is Set Up
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Before your first update is due, you need MTD-compatible software connected to your
            HMRC account. Log in to your Government Gateway, navigate to the MTD for Income Tax
            service, and follow the sign-up process. You will be asked to authorise your chosen
            software to communicate with HMRC on your behalf — most software platforms walk you
            through this process with clear on-screen instructions.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Set up your business details within the software, including your trading name, business
            type, and accounting basis (cash or accruals). If you are unsure which accounting basis
            applies to you, the cash basis is the default for most small sole traders and is
            generally simpler.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Step 2: Categorise Your Income and Expenses
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            HMRC requires your quarterly update to categorise income and expenses into prescribed
            headings. Common income categories include turnover and other business income. Expense
            categories include cost of goods, employee costs, premises costs, travel, advertising,
            professional fees, financial charges, and depreciation.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Your MTD software will present these categories for you. As you record each
            transaction throughout the quarter, assign it to the correct category. If your software
            connects to your bank account via a bank feed, many transactions will be categorised
            automatically based on rules you set up — saving you significant time.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Step 3: Review Your Records
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Before submitting, spend a few minutes reviewing your income and expense figures for
            the quarter. Check that the totals look reasonable, that no major transactions are
            missing or miscategorised, and that your bank feed is up to date. Most MTD software
            provides a summary screen showing your quarterly totals before submission.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            You do not need perfectly exact figures at the quarterly stage — you can correct
            errors in later submissions or in your End of Period Statement. But the more accurate
            your quarterly updates are, the less work you will have to do at year end.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Step 4: Submit Your Quarterly Update
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Once you are happy with your figures, find the submission or &ldquo;send to HMRC&rdquo; option
            within your software. Confirm the details and submit. Your software will send the
            update directly to HMRC and you should receive a confirmation that it has been
            accepted. Keep this confirmation for your records.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            The whole process — from review to submission — should take no more than 15 to 30
            minutes for most sole traders with straightforward finances, once you have your records
            in order.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-3">
            What Happens After You Submit?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            After each quarterly submission, HMRC will provide an in-year tax estimate based on
            the figures you have sent. This is an estimate only — your actual tax bill will be
            calculated at the end of the year once you have submitted your End of Period Statement
            (EOPS) and final declaration.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            The EOPS is submitted once per year after the tax year ends. It allows you to make
            adjustments — such as claiming allowances or correcting figures — before your tax bill
            is finalised. Under MTD, the Self Assessment final declaration replaces the traditional
            tax return for your self-employment income.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Common Mistakes to Avoid
          </h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2.5">
              <span className="mt-1.5 size-1.5 rounded-full bg-red-400 shrink-0" aria-hidden="true" />
              <span><strong className="text-foreground">Missing the deadline.</strong> Set calendar reminders for all four submission dates well in advance.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-1.5 size-1.5 rounded-full bg-red-400 shrink-0" aria-hidden="true" />
              <span><strong className="text-foreground">Leaving categorisation to the end.</strong> Record transactions as they happen, not in a rush before the deadline.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-1.5 size-1.5 rounded-full bg-red-400 shrink-0" aria-hidden="true" />
              <span><strong className="text-foreground">Not connecting your bank feed.</strong> A bank feed saves hours of manual entry and reduces errors.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-1.5 size-1.5 rounded-full bg-red-400 shrink-0" aria-hidden="true" />
              <span><strong className="text-foreground">Confusing quarterly updates with tax payments.</strong> Submitting does not mean paying — payments are still due on the normal Self Assessment schedule.</span>
            </li>
          </ul>
        </section>
      </div>

      {/* CTA */}
      <div className="mt-10">
        <CTABlock
          heading="Not sure which MTD software to use?"
          description="Use our free tool to find the right software for your situation in 5 quick questions."
          primaryCta={{ label: 'Find my software', href: '/tools/mtd-software-chooser' }}
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
        <LastUpdated date="2025-02-15" />
      </div>
    </div>
  )
}
