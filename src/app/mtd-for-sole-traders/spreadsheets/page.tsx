import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { generateMetadata as buildMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { CTABlock } from '@/components/common/CTABlock'
import { FAQAccordion } from '@/components/common/FAQAccordion'
import { InfoCallout } from '@/components/common/InfoCallout'
import { LastUpdated } from '@/components/trust/LastUpdated'
import { ReviewedBy } from '@/components/trust/ReviewedBy'
import type { FAQ } from '@/types'

export const metadata = buildMetadata({
  title: 'Can You Use Spreadsheets for MTD? Bridging Software Explained',
  description:
    'Find out whether you can continue using a spreadsheet for MTD for Income Tax. How bridging software works, which tools support it, and the pros and cons of the spreadsheet route.',
  canonicalPath: '/mtd-for-sole-traders/spreadsheets/',
  pageType: 'guide',
  updatedDate: '2025-03-01',
})

const faqs: FAQ[] = [
  {
    question: 'Can I continue using Excel or Google Sheets for my accounts under MTD?',
    answer:
      'Yes — but not alone. A spreadsheet by itself cannot submit quarterly updates to HMRC. You\'ll need bridging software that connects your spreadsheet data to HMRC\'s MTD API. Bridging tools typically import your spreadsheet data and handle the submission on your behalf.',
  },
  {
    question: 'What is bridging software?',
    answer:
      'Bridging software is a category of MTD-compatible tool that acts as an intermediary between your existing records (typically a spreadsheet) and HMRC\'s systems. You prepare your income and expense figures in your spreadsheet as normal, then import them into the bridging tool, which formats and submits the data to HMRC in the required format.',
  },
  {
    question: 'Is bridging software cheaper than full accounting software?',
    answer:
      'Generally yes. Many bridging tools are available for less than £10 per month, compared to £14–£20+ for full accounting packages. However, you\'ll be managing your own records in the spreadsheet, which takes more time. The total cost in time and effort may be comparable to or higher than using dedicated software.',
  },
  {
    question: 'What are the main risks of the bridging software route?',
    answer:
      'The main risks are user error (incorrect data in your spreadsheet won\'t be caught by the bridging tool), missing HMRC\'s exact category requirements, and the extra step of importing data before each submission. If you have an accountant, they may also charge more for reviewing and correcting spreadsheet-based records than if you used dedicated software.',
  },
  {
    question: 'Which MTD software products support a spreadsheet workflow?',
    answer:
      'Xero and QuickBooks can import data from spreadsheets, though they are primarily full accounting packages rather than bridging tools. Dedicated bridging tools for MTD Income Tax are still emerging — check HMRC\'s list of recognised MTD-compatible software for the current options as the market develops ahead of April 2026.',
  },
]

export default function SpreadsheetsPage() {
  return (
    <div className="page-container py-8">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'MTD for Sole Traders', href: '/mtd-for-sole-traders/' },
          { label: 'MTD and Spreadsheets' },
        ]}
      />

      {/* Article header */}
      <header className="mt-4 mb-8 max-w-3xl">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-brand-light px-3 py-0.5 text-xs font-medium text-brand">
            MTD Guides
          </span>
        </div>
        <h1 className="text-4xl font-bold text-slate-900 leading-tight mb-4">
          Can You Use Spreadsheets for MTD? Bridging Software Explained
        </h1>
        <div className="mt-3 mb-4">
          <ReviewedBy
            name="SoleTraderGuide Editorial Team"
            role="UK Tax Content Specialists"
            date="2026-03-01"
          />
        </div>
        <p className="text-lg text-slate-600 leading-relaxed mb-4">
          Many sole traders manage their accounts in Excel or Google Sheets. Under MTD, you can
          continue to use a spreadsheet — but you&apos;ll need additional bridging software to
          submit your quarterly updates to HMRC. Here&apos;s how it works.
        </p>
        <LastUpdated date="2025-03-01" />
      </header>

      <InfoCallout type="warning" title="Spreadsheets Alone Are Not Enough">
        HMRC requires digital submissions via its MTD API — a spreadsheet alone cannot send data
        directly to HMRC. You&apos;ll need bridging software to submit quarterly updates. Using a
        spreadsheet without bridging software does not constitute MTD compliance.
      </InfoCallout>

      {/* Can you still use spreadsheets */}
      <section className="mt-10 max-w-3xl" aria-labelledby="can-use-spreadsheets">
        <h2 id="can-use-spreadsheets" className="text-2xl font-bold text-slate-900 mb-4">
          Can You Still Use Spreadsheets Under MTD?
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          Yes — using a spreadsheet for MTD is permitted. HMRC explicitly acknowledges that some
          businesses may prefer to continue using spreadsheets and has made provision for this
          through the use of bridging software. The key point is that the spreadsheet is used for
          record-keeping, while the bridging software handles the compliant submission to HMRC.
        </p>
        <p className="text-slate-600 leading-relaxed mb-3">
          This approach is valid, but it requires you to:
        </p>
        <ul className="space-y-2 text-slate-600 ml-4 list-disc list-inside mb-3">
          <li>Keep your spreadsheet records in a format compatible with your bridging software</li>
          <li>Categorise income and expenses according to HMRC&apos;s required categories</li>
          <li>Import or upload your quarterly figures into the bridging tool before each deadline</li>
          <li>Submit through the bridging tool rather than directly from your spreadsheet</li>
        </ul>
        <p className="text-slate-600 leading-relaxed">
          The spreadsheet and bridging software together form a &ldquo;functional compatible
          software&rdquo; combination in HMRC&apos;s terminology.
        </p>
      </section>

      {/* What is bridging software */}
      <section className="mt-10 max-w-3xl" aria-labelledby="what-is-bridging">
        <h2 id="what-is-bridging" className="text-2xl font-bold text-slate-900 mb-4">
          What is Bridging Software?
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          Bridging software is a category of MTD-compatible application designed specifically to
          act as an intermediary between your existing records and HMRC&apos;s digital systems.
          You continue to keep your records however you prefer (typically a spreadsheet), and the
          bridging software reads your data and submits it to HMRC via the MTD API in the correct
          format.
        </p>
        <p className="text-slate-600 leading-relaxed mb-3">
          The bridging software market for MTD for Income Tax is still developing. Several tools
          became available for MTD for VAT and similar products are emerging for the MTD ITSA
          programme. HMRC maintains a list of recognised compatible software on its website.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Bridging tools are generally simpler and cheaper than full accounting packages — they
          don&apos;t usually include invoicing, bank feeds, or payroll. They do one job: connect
          your data to HMRC.
        </p>
      </section>

      {/* How bridging software works */}
      <section className="mt-10 max-w-3xl" aria-labelledby="how-bridging-works">
        <h2 id="how-bridging-works" className="text-2xl font-bold text-slate-900 mb-4">
          How Bridging Software Works
        </h2>
        <p className="text-slate-600 leading-relaxed mb-5">
          The typical bridging workflow for MTD quarterly submissions looks like this:
        </p>
        <ol className="space-y-4 text-slate-600">
          <li className="flex gap-3">
            <span className="flex-shrink-0 mt-0.5 size-6 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center">
              1
            </span>
            <span>
              <strong className="text-slate-900">Maintain your spreadsheet</strong> — record your
              income and expenses throughout the quarter as normal in your spreadsheet.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 mt-0.5 size-6 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center">
              2
            </span>
            <span>
              <strong className="text-slate-900">Categorise your totals</strong> — at the end of
              the quarter, ensure your figures are categorised according to HMRC&apos;s required
              income and expense categories.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 mt-0.5 size-6 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center">
              3
            </span>
            <span>
              <strong className="text-slate-900">Import into bridging software</strong> — upload
              or link your spreadsheet to the bridging tool, which reads your categorised totals.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 mt-0.5 size-6 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center">
              4
            </span>
            <span>
              <strong className="text-slate-900">Review and submit</strong> — check the figures
              in the bridging tool and submit your quarterly update to HMRC via the tool&apos;s
              MTD API connection.
            </span>
          </li>
        </ol>
      </section>

      {/* Bridging vs native */}
      <section className="mt-10 max-w-3xl" aria-labelledby="bridging-vs-native">
        <h2 id="bridging-vs-native" className="text-2xl font-bold text-slate-900 mb-4">
          Bridging Software vs. Native MTD Software
        </h2>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">Feature</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">
                  Bridging + Spreadsheet
                </th>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">
                  Native MTD Software
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-slate-600">
              <tr className="bg-white">
                <td className="px-4 py-3 font-medium text-slate-700">Monthly cost</td>
                <td className="px-4 py-3">Usually £3–£10/month</td>
                <td className="px-4 py-3">£14–£20+/month</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 font-medium text-slate-700">Bank feeds</td>
                <td className="px-4 py-3">No</td>
                <td className="px-4 py-3">Yes</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 font-medium text-slate-700">Invoicing</td>
                <td className="px-4 py-3">No</td>
                <td className="px-4 py-3">Yes</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 font-medium text-slate-700">Receipt capture</td>
                <td className="px-4 py-3">No</td>
                <td className="px-4 py-3">Yes (most)</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 font-medium text-slate-700">MTD submission</td>
                <td className="px-4 py-3">Yes (via bridging tool)</td>
                <td className="px-4 py-3">Yes (built in)</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 font-medium text-slate-700">Familiar interface</td>
                <td className="px-4 py-3">Yes (your spreadsheet)</td>
                <td className="px-4 py-3">Learning curve</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <InfoCallout type="tip" title="Consider the Full Picture" className="mt-10 max-w-3xl">
        While bridging software appears cheaper, you also need to factor in the time cost of
        manually maintaining a spreadsheet versus automated bank feeds and transaction imports
        in full accounting software. For busy sole traders, the time saving of native MTD software
        can justify the higher monthly cost.
      </InfoCallout>

      {/* Pros and cons */}
      <section className="mt-10 max-w-3xl" aria-labelledby="pros-cons">
        <h2 id="pros-cons" className="text-2xl font-bold text-slate-900 mb-4">
          Pros and Cons of the Spreadsheet Route
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
            <h3 className="font-semibold text-emerald-800 mb-3">Pros</h3>
            <ul className="space-y-2 text-sm text-emerald-700">
              <li className="flex gap-2">
                <span>+</span>
                <span>Lower monthly cost than full accounting software</span>
              </li>
              <li className="flex gap-2">
                <span>+</span>
                <span>Familiar interface — no need to learn new software</span>
              </li>
              <li className="flex gap-2">
                <span>+</span>
                <span>Full control over how records are structured</span>
              </li>
              <li className="flex gap-2">
                <span>+</span>
                <span>Works well for very simple businesses with low transaction volumes</span>
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
            <h3 className="font-semibold text-amber-800 mb-3">Cons</h3>
            <ul className="space-y-2 text-sm text-amber-700">
              <li className="flex gap-2">
                <span>-</span>
                <span>Extra step required for every quarterly submission</span>
              </li>
              <li className="flex gap-2">
                <span>-</span>
                <span>No bank feeds, receipt capture, or invoicing tools</span>
              </li>
              <li className="flex gap-2">
                <span>-</span>
                <span>Higher risk of category errors that bridging software won&apos;t catch</span>
              </li>
              <li className="flex gap-2">
                <span>-</span>
                <span>
                  Bridging software for MTD Income Tax is less mature than for MTD for VAT
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Which software supports spreadsheet workflows */}
      <section className="mt-10 max-w-3xl" aria-labelledby="software-options">
        <h2 id="software-options" className="text-2xl font-bold text-slate-900 mb-4">
          Which Software Supports Spreadsheet Workflows?
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          The MTD for Income Tax bridging market is developing rapidly ahead of the April 2026
          deadline. Several specialist tools already exist for MTD for VAT bridging and are
          expanding their features to cover MTD for Income Tax.
        </p>
        <p className="text-slate-600 leading-relaxed mb-3">
          Among the major accounting software providers, Xero supports data import from
          spreadsheets and may suit spreadsheet-oriented users who want a hybrid approach. Sage
          also allows CSV imports as part of its workflow.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Always verify that any bridging software you consider is on HMRC&apos;s current list of
          recognised MTD-compatible software before committing to a subscription.
        </p>
        <Link
          href="/software/best-mtd-software-for-spreadsheet-users/"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
        >
          See our guide: Best MTD software for spreadsheet users{' '}
          <ArrowRight className="size-4" />
        </Link>
      </section>

      {/* CTA */}
      <div className="mt-12 max-w-3xl">
        <CTABlock
          heading="Find the Right Software for Spreadsheet Users"
          description="Our guide covers the best MTD software options for sole traders who want to keep using spreadsheets — or transition to a native MTD app."
          primaryCta={{
            label: 'Best MTD Software for Spreadsheet Users',
            href: '/software/best-mtd-software-for-spreadsheet-users/',
          }}
          secondaryCta={{ label: 'Compare All MTD Software', href: '/software/' }}
          variant="brand"
        />
      </div>

      {/* FAQs */}
      <section className="mt-12 max-w-3xl" aria-labelledby="faqs">
        <h2 id="faqs" className="text-2xl font-bold text-slate-900 mb-6">
          Frequently Asked Questions
        </h2>
        <FAQAccordion faqs={faqs} headingLevel="h3" includeSchema />
      </section>

      {/* Related pages */}
      <section className="mt-12 max-w-3xl" aria-labelledby="related">
        <h2 id="related" className="text-xl font-bold text-slate-900 mb-4">
          Related Guides
        </h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/software/best-mtd-software-for-spreadsheet-users/"
              className="text-sm text-brand hover:underline inline-flex items-center gap-1"
            >
              <ArrowRight className="size-3.5" /> Best MTD Software for Sole Traders Who Use
              Spreadsheets
            </Link>
          </li>
          <li>
            <Link
              href="/mtd-for-sole-traders/records-you-need-to-keep/"
              className="text-sm text-brand hover:underline inline-flex items-center gap-1"
            >
              <ArrowRight className="size-3.5" /> What Records Do You Need to Keep for MTD?
            </Link>
          </li>
          <li>
            <Link
              href="/software/"
              className="text-sm text-brand hover:underline inline-flex items-center gap-1"
            >
              <ArrowRight className="size-3.5" /> MTD Software for Sole Traders: All Options
            </Link>
          </li>
          <li>
            <Link
              href="/mtd-for-sole-traders/"
              className="text-sm text-brand hover:underline inline-flex items-center gap-1"
            >
              <ArrowRight className="size-3.5" /> MTD for Sole Traders: Complete Guide Hub
            </Link>
          </li>
        </ul>
      </section>
    </div>
  )
}
