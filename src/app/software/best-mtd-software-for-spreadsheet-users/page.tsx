import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { generateMetadata as buildMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { ProviderCard } from '@/components/comparison/ProviderCard'
import { CTABlock } from '@/components/common/CTABlock'
import { FAQAccordion } from '@/components/common/FAQAccordion'
import { InfoCallout } from '@/components/common/InfoCallout'
import { AffiliateDisclosure } from '@/components/trust/AffiliateDisclosure'
import { LastUpdated } from '@/components/trust/LastUpdated'
import { allProviders } from '@/data/providers'
import type { FAQ } from '@/types'

export const metadata = buildMetadata({
  title: 'Best MTD Software for Sole Traders Who Use Spreadsheets',
  description:
    'How to handle MTD if you currently use Excel or Google Sheets. Bridging software explained, which full accounting apps suit ex-spreadsheet users, and how to make the transition.',
  canonicalPath: '/software/best-mtd-software-for-spreadsheet-users/',
  pageType: 'review',
  updatedDate: '2026-03-31',
})

const faqs: FAQ[] = [
  {
    question: 'Can I continue using my existing spreadsheet for MTD?',
    answer:
      'Yes, but you\'ll need to add bridging software to connect your spreadsheet to HMRC\'s MTD systems for quarterly submissions. A spreadsheet alone cannot submit data directly to HMRC. Your spreadsheet becomes the record-keeping tool; the bridging software handles the compliance submission.',
  },
  {
    question: 'What is the best bridging software for sole traders?',
    answer:
      'The bridging software market for MTD Income Tax is less mature than for MTD for VAT. Several VAT bridging tools are expanding into Income Tax bridging ahead of April 2026. Check HMRC\'s current list of recognised MTD-compatible software for the latest approved tools, as the market is developing rapidly.',
  },
  {
    question: 'Is it better to switch to accounting software or keep using a spreadsheet with bridging?',
    answer:
      'For most sole traders, switching to a full accounting package is the more practical long-term option. The automation features — bank feeds, receipt scanning, automatic categorisation — save significant time compared to maintaining a manual spreadsheet. The bridging route is best for those with very simple finances who are highly proficient with spreadsheets and prefer the control they offer.',
  },
  {
    question: 'How do I export my historical data from my spreadsheet when switching to accounting software?',
    answer:
      'Most accounting software allows you to import a CSV file of transactions. You\'ll need to format your spreadsheet data to match the import template provided by your chosen software — typically including date, description, amount, and category for each transaction. Many providers offer onboarding support to help with the initial data import.',
  },
  {
    question: 'Will HMRC accept my spreadsheet as a digital record?',
    answer:
      'Yes. HMRC accepts spreadsheets as a valid form of digital record-keeping, provided the data is stored digitally (not just paper) and submitted to HMRC through MTD-compatible bridging software. The key requirement is that the submission to HMRC is made via a recognised software product.',
  },
]

export default function BestMtdSoftwareForSpreadsheetUsersPage() {
  // Providers that support spreadsheet workflows
  const spreadsheetFriendly = allProviders.filter((p) => p.supportsSpreadsheetWorkflow)
  // All others — full accounting options that work well for ex-spreadsheet users
  const fullAccountingOptions = allProviders.filter((p) => !p.supportsSpreadsheetWorkflow)

  return (
    <div className="page-container py-8">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'MTD Software', href: '/software/' },
          { label: 'Best MTD Software for Spreadsheet Users' },
        ]}
      />

      {/* Article header */}
      <header className="mt-4 mb-6 max-w-3xl">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-brand-light px-3 py-0.5 text-xs font-medium text-brand">
            Software Guide
          </span>
        </div>
        <h1 className="text-4xl font-bold text-slate-900 leading-tight mb-4">
          Best MTD Software for Sole Traders Who Use Spreadsheets
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-4">
          If you currently manage your accounts in Excel or Google Sheets, MTD introduces a
          challenge: spreadsheets alone can&apos;t submit data directly to HMRC. Here&apos;s how
          to handle the transition — whether you want to keep your spreadsheet or move to a
          dedicated accounting app.
        </p>
        <LastUpdated date="2026-03-31" />
      </header>

      <AffiliateDisclosure variant="banner" className="mb-6 max-w-3xl" />

      <InfoCallout type="warning" title="Spreadsheets Need Bridging Software for MTD">
        HMRC requires quarterly updates to be submitted via a recognised MTD API connection.
        A spreadsheet alone cannot do this — you need either bridging software (to submit from
        your spreadsheet) or a full accounting application. A spreadsheet with no bridging
        software does not constitute MTD compliance.
      </InfoCallout>

      {/* Why spreadsheet users need to consider their options */}
      <section className="mt-10 max-w-3xl" aria-labelledby="why-consider">
        <h2 id="why-consider" className="text-2xl font-bold text-slate-900 mb-4">
          Why Spreadsheet Users Need to Consider Their Options Now
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          If you&apos;ve been managing your self-employed accounts in a spreadsheet and filing
          Self Assessment manually each year, MTD for Income Tax requires a change. From April
          2026, if you&apos;re in scope, every quarterly submission must go through HMRC&apos;s
          digital API — something a standalone spreadsheet cannot do.
        </p>
        <p className="text-slate-600 leading-relaxed mb-3">
          You have two main routes to compliance:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
          <div className="rounded-xl border border-brand/20 bg-brand-light p-5">
            <h3 className="font-semibold text-brand mb-2">Option A: Keep your spreadsheet</h3>
            <p className="text-sm text-slate-600">
              Continue using Excel or Google Sheets for record-keeping, but add
              bridging software to handle quarterly submissions to HMRC.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-white p-5">
            <h3 className="font-semibold text-slate-900 mb-2">Option B: Switch to accounting software</h3>
            <p className="text-sm text-slate-600">
              Move your records to a full MTD-compatible accounting package that
              handles both record-keeping and submissions natively.
            </p>
          </div>
        </div>
        <p className="text-slate-600 leading-relaxed">
          Both are valid. The right choice depends on how many transactions you handle, how
          comfortable you are with your current spreadsheet, and whether you want features like
          bank feeds and invoicing.
        </p>
        <Link
          href="/mtd-for-sole-traders/spreadsheets/"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
        >
          Full guide: Spreadsheets and MTD explained <ArrowRight className="size-4" />
        </Link>
      </section>

      {/* Bridging software explained */}
      <section className="mt-10 max-w-3xl" aria-labelledby="bridging-explained">
        <h2 id="bridging-explained" className="text-2xl font-bold text-slate-900 mb-4">
          Bridging Software: A Brief Explainer
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          Bridging software is a class of MTD-compatible tool that connects your existing records
          (usually a spreadsheet) to HMRC&apos;s MTD API. At the end of each quarter, you import
          your income and expense totals into the bridging tool, which formats and submits the
          data to HMRC on your behalf.
        </p>
        <p className="text-slate-600 leading-relaxed mb-3">
          Bridging tools are typically simpler and cheaper than full accounting platforms — they
          do one job (submit to HMRC) without replacing your record-keeping method. Key things
          to look for in bridging software:
        </p>
        <ul className="space-y-2 text-slate-600 ml-4 list-disc list-inside mb-3">
          <li>HMRC recognition specifically for MTD Income Tax (not just VAT)</li>
          <li>Compatibility with your spreadsheet format (Excel, CSV, Google Sheets)</li>
          <li>Clear submission confirmation and reference numbers</li>
          <li>Support for multiple income sources if you have both self-employment and property</li>
        </ul>
        <p className="text-slate-600 leading-relaxed">
          The bridging software market for MTD for Income Tax is still developing. Check
          HMRC&apos;s recognised software list for the most current approved options.
        </p>
      </section>

      <InfoCallout type="tip" title="Consider the Long-Term Cost" className="mt-10 max-w-3xl">
        Bridging software may be cheaper per month than full accounting software, but factor in
        the time you spend managing your spreadsheet manually. For active sole traders, the
        automation in a full accounting package often makes it better value when you account for
        your time.
      </InfoCallout>

      {/* Full accounting options for ex-spreadsheet users */}
      <section className="mt-10" aria-labelledby="full-accounting">
        <h2 id="full-accounting" className="text-2xl font-bold text-slate-900 mb-4">
          Full Accounting Apps That Work Well for Ex-Spreadsheet Users
        </h2>
        <p className="text-slate-600 leading-relaxed mb-6 max-w-3xl">
          If you decide to transition away from spreadsheets, these four platforms are the most
          widely used MTD-compatible accounting applications for UK sole traders. All are
          HMRC-recognised for MTD Income Tax.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {fullAccountingOptions.map((provider) => (
            <ProviderCard key={provider.id} provider={provider} variant="summary" />
          ))}
        </div>

        {spreadsheetFriendly.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Software with Spreadsheet Import Support
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {spreadsheetFriendly.map((provider) => (
                <ProviderCard key={provider.id} provider={provider} variant="summary" />
              ))}
            </div>
          </div>
        )}
      </section>

      {/* How to transition */}
      <section className="mt-12 max-w-3xl" aria-labelledby="transition">
        <h2 id="transition" className="text-2xl font-bold text-slate-900 mb-4">
          How to Transition from Spreadsheets to MTD Software
        </h2>
        <p className="text-slate-600 leading-relaxed mb-5">
          Switching to accounting software doesn&apos;t mean losing your historical data. Here&apos;s
          a practical step-by-step approach to making the transition smoothly:
        </p>
        <ol className="space-y-4 text-slate-600">
          <li className="flex gap-3">
            <span className="flex-shrink-0 mt-0.5 size-7 rounded-full bg-brand text-white text-sm font-bold flex items-center justify-center">
              1
            </span>
            <div>
              <p className="font-semibold text-slate-900">Choose your software</p>
              <p className="text-sm mt-1">
                Select an HMRC-recognised platform and take advantage of a free trial to test
                the interface before committing.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 mt-0.5 size-7 rounded-full bg-brand text-white text-sm font-bold flex items-center justify-center">
              2
            </span>
            <div>
              <p className="font-semibold text-slate-900">Export your historical data</p>
              <p className="text-sm mt-1">
                From your spreadsheet, prepare a CSV export of your transactions with columns
                for date, description, amount, and category. Most accounting apps provide an
                import template to help structure this.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 mt-0.5 size-7 rounded-full bg-brand text-white text-sm font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <p className="font-semibold text-slate-900">Set up your opening balances</p>
              <p className="text-sm mt-1">
                Enter your bank balance and any outstanding invoices at the date you start using
                the new software. Many platforms have an opening balance wizard to guide you
                through this.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 mt-0.5 size-7 rounded-full bg-brand text-white text-sm font-bold flex items-center justify-center">
              4
            </span>
            <div>
              <p className="font-semibold text-slate-900">Connect your bank feed</p>
              <p className="text-sm mt-1">
                Once your account is set up, connect your bank account to import transactions
                automatically. This replaces the manual entry you were doing in your spreadsheet.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 mt-0.5 size-7 rounded-full bg-brand text-white text-sm font-bold flex items-center justify-center">
              5
            </span>
            <div>
              <p className="font-semibold text-slate-900">Register with HMRC for MTD</p>
              <p className="text-sm mt-1">
                Once your software is set up, authorise it to connect to HMRC on your behalf.
                Your software will guide you through the HMRC authorisation process.
              </p>
            </div>
          </li>
        </ol>
      </section>

      {/* CTA */}
      <div className="mt-12 max-w-3xl">
        <CTABlock
          heading="Learn More About Spreadsheets and MTD"
          description="Our detailed guide covers bridging software, how the submission process works, and whether sticking with your spreadsheet is the right choice."
          primaryCta={{
            label: 'Spreadsheets and MTD: Full Guide',
            href: '/mtd-for-sole-traders/spreadsheets/',
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
              href="/mtd-for-sole-traders/spreadsheets/"
              className="text-sm text-brand hover:underline inline-flex items-center gap-1"
            >
              <ArrowRight className="size-3.5" /> Can You Use Spreadsheets for MTD? Bridging
              Software Explained
            </Link>
          </li>
          <li>
            <Link
              href="/software/best-mtd-software-for-sole-traders/"
              className="text-sm text-brand hover:underline inline-flex items-center gap-1"
            >
              <ArrowRight className="size-3.5" /> Best MTD Software for Sole Traders (2025 Guide)
            </Link>
          </li>
          <li>
            <Link
              href="/software/cheapest-mtd-software/"
              className="text-sm text-brand hover:underline inline-flex items-center gap-1"
            >
              <ArrowRight className="size-3.5" /> Cheapest MTD Software for Sole Traders
            </Link>
          </li>
          <li>
            <Link
              href="/software/"
              className="text-sm text-brand hover:underline inline-flex items-center gap-1"
            >
              <ArrowRight className="size-3.5" /> All MTD Software Options Compared
            </Link>
          </li>
        </ul>
      </section>
    </div>
  )
}
