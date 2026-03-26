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
  title: 'What Records Do You Need to Keep for MTD?',
  description:
    'MTD record-keeping requirements for sole traders — what income and expense records HMRC requires, what digital means in practice, how long to keep records, and whether photos of receipts count.',
  canonicalPath: '/mtd-for-sole-traders/records-you-need-to-keep/',
  pageType: 'guide',
  updatedDate: '2025-03-01',
})

const faqs: FAQ[] = [
  {
    question: 'Do I have to keep paper records as well as digital ones?',
    answer:
      'No. HMRC does not require you to keep paper copies alongside digital records. In fact, the whole point of MTD is to move to digital-only record-keeping. A photograph or scan of a paper receipt stored in your accounting software is perfectly acceptable as a digital record.',
  },
  {
    question: 'How long do I need to keep my digital records?',
    answer:
      'HMRC requires sole traders to keep business records for at least five years after the 31 January submission deadline for the relevant tax year. For example, records for the 2026/27 tax year must be kept until at least 31 January 2033. Most accounting software stores records indefinitely by default.',
  },
  {
    question: 'Does a smartphone photo of a receipt count as a digital record for MTD?',
    answer:
      'Yes. HMRC accepts photographs of paper receipts as valid digital records, provided the image is legible and clearly shows the date, amount, and nature of the expense. Many MTD-compatible apps have built-in receipt scanning tools that capture this information automatically.',
  },
  {
    question: 'What if I make a mistake in a quarterly record?',
    answer:
      'Corrections can be made in your accounting software before you submit your quarterly update. If you discover an error after submission, you can make corrections in a subsequent quarterly update, or address them in your End of Period Statement when you make annual adjustments.',
  },
  {
    question: 'Do I need to keep records of every individual transaction?',
    answer:
      'Yes. MTD requires digital records at the transaction level — each sale invoice and each expense receipt should be individually recorded in your software. You cannot submit a single lump-sum entry for a category. However, your software handles the categorisation and totalling automatically.',
  },
]

export default function RecordsPage() {
  return (
    <div className="page-container py-8">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'MTD for Sole Traders', href: '/mtd-for-sole-traders/' },
          { label: 'Records You Need to Keep' },
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
          What Records Do You Need to Keep for MTD?
        </h1>
        <div className="mt-3 mb-4">
          <ReviewedBy
            name="SoleTraderGuide Editorial Team"
            role="UK Tax Content Specialists"
            date="2026-03-01"
          />
        </div>
        <p className="text-lg text-slate-600 leading-relaxed mb-4">
          MTD for Income Tax requires sole traders to maintain digital records of all business
          income and expenses. Here&apos;s exactly what HMRC expects, what counts as a digital
          record, and how long you need to keep everything.
        </p>
        <LastUpdated date="2025-03-01" />
      </header>

      <InfoCallout type="info" title="Digital Records are Mandatory">
        Under MTD, you must keep your business records digitally from the start of each tax year
        you&apos;re within the MTD programme. Paper-only records are no longer acceptable —
        though you can photograph paper receipts and store the image digitally.
      </InfoCallout>

      {/* Digital record keeping */}
      <section className="mt-10 max-w-3xl" aria-labelledby="digital-records">
        <h2 id="digital-records" className="text-2xl font-bold text-slate-900 mb-4">
          Digital Record Keeping Under MTD
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          HMRC defines digital record keeping as recording your income and expenses using
          software — rather than maintaining a manual cashbook or handwritten ledger. Each
          transaction must be recorded individually; you cannot enter a single weekly or monthly
          total for a category of income or expense.
        </p>
        <p className="text-slate-600 leading-relaxed mb-3">
          Your records must be maintained in a format that allows your MTD-compatible software to
          extract the required data and submit your quarterly updates directly to HMRC. Most
          dedicated accounting software does this automatically as you enter transactions.
        </p>
        <p className="text-slate-600 leading-relaxed">
          If you prefer to use a spreadsheet, you can — but you will need bridging software to
          connect your spreadsheet to HMRC&apos;s MTD API for submissions.
        </p>
      </section>

      {/* Income records */}
      <section className="mt-10 max-w-3xl" aria-labelledby="income">
        <h2 id="income" className="text-2xl font-bold text-slate-900 mb-4">
          Income Records to Keep
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          For each piece of business income you receive, you should record:
        </p>
        <ul className="space-y-2 text-slate-600 ml-4 list-disc list-inside mb-3">
          <li>The date the income was received (or the invoice date)</li>
          <li>The amount received (gross, before any deductions)</li>
          <li>The name of the customer or client</li>
          <li>A brief description of the goods or services provided</li>
          <li>The invoice number (if applicable)</li>
        </ul>
        <p className="text-slate-600 leading-relaxed">
          If you issue invoices, keeping a copy of each invoice within your software is the
          easiest way to satisfy these requirements. Most accounting software creates and stores
          invoices automatically.
        </p>
      </section>

      {/* Expense records */}
      <section className="mt-10 max-w-3xl" aria-labelledby="expenses">
        <h2 id="expenses" className="text-2xl font-bold text-slate-900 mb-4">
          Expense Records to Keep
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          For each business expense, you should record:
        </p>
        <ul className="space-y-2 text-slate-600 ml-4 list-disc list-inside mb-3">
          <li>The date of the purchase or payment</li>
          <li>The amount paid (including VAT if relevant)</li>
          <li>The supplier&apos;s name</li>
          <li>The nature of the expense (what it was for)</li>
          <li>The expense category (e.g. travel, office costs, stock)</li>
        </ul>
        <p className="text-slate-600 leading-relaxed mb-3">
          HMRC requires you to categorise expenses according to its defined expense types. Your
          software will typically prompt you to assign the correct category when you add an
          expense. Common allowable business expense categories for sole traders include:
        </p>
        <ul className="space-y-2 text-slate-600 ml-4 list-disc list-inside">
          <li>Office, property, and equipment costs</li>
          <li>Travel and vehicle costs</li>
          <li>Clothing and uniforms (if required for work)</li>
          <li>Staff costs</li>
          <li>Cost of goods bought to resell</li>
          <li>Financial and legal costs</li>
          <li>Marketing and advertising</li>
          <li>Professional fees</li>
        </ul>
      </section>

      {/* What digital means in practice */}
      <section className="mt-10 max-w-3xl" aria-labelledby="what-digital-means">
        <h2 id="what-digital-means" className="text-2xl font-bold text-slate-900 mb-4">
          What &lsquo;Digital&rsquo; Means in Practice
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          HMRC&apos;s definition of &lsquo;digital&rsquo; is broader than you might expect.
          It doesn&apos;t mean you need to use a specific type of software or store records in a
          particular way — it means each transaction must be recorded electronically and stored
          in a format that can be read and reported by MTD-compatible software.
        </p>
        <p className="text-slate-600 leading-relaxed mb-3">
          Acceptable digital records include:
        </p>
        <ul className="space-y-2 text-slate-600 ml-4 list-disc list-inside mb-3">
          <li>Entries in accounting software (Xero, QuickBooks, Sage, FreeAgent, etc.)</li>
          <li>Records in a digital spreadsheet linked to bridging software</li>
          <li>Scanned or photographed receipts stored within your accounting app</li>
          <li>Bank feeds imported automatically into your accounting software</li>
        </ul>
        <p className="text-slate-600 leading-relaxed">
          What is not acceptable is a purely paper-based record system — even if you intend to
          enter the figures into software at a later date.
        </p>
      </section>

      <InfoCallout type="tip" title="Use Bank Feeds to Save Time" className="mt-10 max-w-3xl">
        Most MTD-compatible accounting software can connect directly to your bank account and
        import transactions automatically. This dramatically reduces manual data entry and ensures
        your records are up to date throughout the quarter.
      </InfoCallout>

      {/* How long to keep records */}
      <section className="mt-10 max-w-3xl" aria-labelledby="how-long">
        <h2 id="how-long" className="text-2xl font-bold text-slate-900 mb-4">
          How Long Do You Need to Keep Records?
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          HMRC requires sole traders to retain business records for at least five years after the
          31 January submission deadline for the relevant tax year. In practice, this means:
        </p>
        <p className="text-slate-600 leading-relaxed mb-3">
          Records for the 2026/27 tax year (the first mandatory MTD year for those above £50,000)
          must be kept until at least <strong>31 January 2033</strong>.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Most cloud accounting software stores your records indefinitely and will not delete
          them unless you explicitly request it. If you change software providers, make sure you
          export and retain your historical data.
        </p>
      </section>

      {/* Can you photograph receipts */}
      <section className="mt-10 max-w-3xl" aria-labelledby="receipts">
        <h2 id="receipts" className="text-2xl font-bold text-slate-900 mb-4">
          Can You Photograph Receipts?
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          Yes. HMRC explicitly accepts photographs of paper receipts as valid digital records.
          This is particularly useful for cash purchases, taxi fares, or other expenses where
          you receive a paper receipt. The photograph must be legible and clearly show the key
          details — date, amount, supplier name, and nature of the expense.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Many accounting apps — including FreeAgent, Xero, and QuickBooks — have built-in
          receipt scanning features that use optical character recognition (OCR) to extract
          the relevant data automatically, creating a digital record without any manual typing.
        </p>
      </section>

      {/* Using apps and software */}
      <section className="mt-10 max-w-3xl" aria-labelledby="apps">
        <h2 id="apps" className="text-2xl font-bold text-slate-900 mb-4">
          Using Apps and Software for Records
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          The easiest way to maintain compliant digital records is to use MTD-compatible
          accounting software throughout the year. These tools are designed around HMRC&apos;s
          requirements, so if you record every transaction as it happens, you&apos;ll almost
          automatically be ready to submit your quarterly update when the deadline arrives.
        </p>
        <p className="text-slate-600 leading-relaxed">
          If you have an accountant, they may use software that you also have access to — allowing
          them to review and submit on your behalf. Always confirm that your accountant is set up
          to act as your MTD agent with HMRC.
        </p>
        <Link
          href="/software/"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
        >
          Compare MTD software options <ArrowRight className="size-4" />
        </Link>
      </section>

      {/* Common mistakes */}
      <section className="mt-10 max-w-3xl" aria-labelledby="mistakes">
        <h2 id="mistakes" className="text-2xl font-bold text-slate-900 mb-4">
          Common Record-Keeping Mistakes to Avoid
        </h2>
        <ul className="space-y-4 text-slate-600">
          <li className="flex gap-3">
            <span className="shrink-0 mt-1 text-amber-500">&#9888;</span>
            <span>
              <strong className="text-slate-900">Batch-entering records at quarter end</strong> —
              this creates a rush before deadlines and increases the chance of errors. Record
              transactions as they happen or at least weekly.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="shrink-0 mt-1 text-amber-500">&#9888;</span>
            <span>
              <strong className="text-slate-900">Mixing personal and business transactions</strong>{' '}
              — keep a separate business bank account to make reconciliation straightforward.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="shrink-0 mt-1 text-amber-500">&#9888;</span>
            <span>
              <strong className="text-slate-900">Forgetting small cash expenses</strong> — petty
              cash, parking, stamps, and similar small costs are easily overlooked but can add up.
              Record them as soon as possible after the transaction.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="shrink-0 mt-1 text-amber-500">&#9888;</span>
            <span>
              <strong className="text-slate-900">Not backing up data</strong> — cloud accounting
              software is generally backed up automatically, but if you use a spreadsheet make
              sure you have regular backups stored securely.
            </span>
          </li>
        </ul>
      </section>

      {/* CTA */}
      <div className="mt-12 max-w-3xl">
        <CTABlock
          heading="Ready to Get Your Records in Order?"
          description="The right MTD software makes digital record-keeping straightforward. Compare your options and find the best fit for your business."
          primaryCta={{ label: 'Compare MTD Software', href: '/software/' }}
          secondaryCta={{ label: 'MTD Deadlines Guide', href: '/mtd-for-sole-traders/deadlines/' }}
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
              href="/mtd-for-sole-traders/spreadsheets/"
              className="text-sm text-brand hover:underline inline-flex items-center gap-1"
            >
              <ArrowRight className="size-3.5" /> Can You Use Spreadsheets for MTD? Bridging
              Software Explained
            </Link>
          </li>
          <li>
            <Link
              href="/mtd-for-sole-traders/deadlines/"
              className="text-sm text-brand hover:underline inline-flex items-center gap-1"
            >
              <ArrowRight className="size-3.5" /> MTD for Income Tax: Deadlines and Key Dates
            </Link>
          </li>
          <li>
            <Link
              href="/software/best-mtd-software-for-sole-traders/"
              className="text-sm text-brand hover:underline inline-flex items-center gap-1"
            >
              <ArrowRight className="size-3.5" /> Best MTD Software for Sole Traders
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
