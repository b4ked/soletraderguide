import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { generateMetadata as buildMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { ProviderCard } from '@/components/comparison/ProviderCard'
import { GuideCard } from '@/components/common/GuideCard'
import { CTABlock } from '@/components/common/CTABlock'
import { FAQAccordion } from '@/components/common/FAQAccordion'
import { InfoCallout } from '@/components/common/InfoCallout'
import { AffiliateDisclosure } from '@/components/trust/AffiliateDisclosure'
import { LastUpdated } from '@/components/trust/LastUpdated'
import { allProviders } from '@/data/providers'
import type { FAQ } from '@/types'

export const metadata = buildMetadata({
  title: 'MTD Software for Sole Traders: All Options Compared',
  description:
    'Compare MTD-compatible accounting software for sole traders. Review Xero, QuickBooks, Sage, and FreeAgent — including pricing, features, and which is best for your situation.',
  canonicalPath: '/software/',
  pageType: 'hub',
  updatedDate: '2026-03-31',
})

const faqs: FAQ[] = [
  {
    question: 'Do I need MTD software to file my tax return?',
    answer:
      'From April 2026, sole traders and landlords with qualifying income over £50,000 must use HMRC-recognised MTD-compatible software to keep digital records and submit quarterly updates. You cannot use traditional paper records or non-compatible software once MTD becomes mandatory for you.',
  },
  {
    question: 'What is the best MTD software for a sole trader?',
    answer:
      'The best software depends on your circumstances. FreeAgent is purpose-built for freelancers and sole traders and is free with qualifying NatWest and RBS business accounts. QuickBooks Self-Employed offers a lower entry price. Xero suits those wanting a comprehensive platform with strong integrations. Our full guide compares all four in detail.',
  },
  {
    question: 'Is there any free MTD software for sole traders?',
    answer:
      'FreeAgent is available free of charge to NatWest and RBS business account holders. Some providers offer free trials (typically 30 days), but there is no ongoing free plan from the major full-accounting providers. HMRC\'s own basic tools may offer limited bridging capability — check HMRC\'s current recognised software list.',
  },
  {
    question: 'Can I use my current bookkeeping software for MTD?',
    answer:
      'Only if it is on HMRC\'s list of recognised MTD-compatible software. Many older desktop accounting packages or simpler bookkeeping tools are not MTD-compatible. Check with your current software provider whether they have added or plan to add MTD for Income Tax support ahead of April 2026.',
  },
  {
    question: 'What happens if I don\'t get MTD software before April 2026?',
    answer:
      'If you are in scope for MTD and do not use compatible software, you risk missing quarterly submission deadlines and incurring penalty points. HMRC will begin applying its points-based penalty system from the moment MTD becomes mandatory for you. It\'s advisable to choose and set up your software well before April 2026.',
  },
]

export default function SoftwareHubPage() {
  return (
    <div className="page-container py-8">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'MTD Software' },
        ]}
      />

      {/* Article header */}
      <header className="mt-4 mb-6 max-w-3xl">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-brand-light px-3 py-0.5 text-xs font-medium text-brand">
            Software Guides
          </span>
        </div>
        <h1 className="text-4xl font-bold text-slate-900 leading-tight mb-4">
          MTD Software for Sole Traders: All Options Compared
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-4">
          From April 2026, sole traders in scope for MTD must use HMRC-recognised software to
          keep digital records and submit quarterly updates. Here&apos;s a complete overview of
          your options — and how to choose the right one for your business.
        </p>
        <LastUpdated date="2026-03-31" />
      </header>

      <AffiliateDisclosure variant="banner" className="mb-6 max-w-3xl" />

      <InfoCallout type="info" title="What is MTD Software?">
        MTD-compatible software connects directly to HMRC&apos;s systems and can submit your
        quarterly income and expense summaries automatically. Not all accounting software is
        MTD-compatible — it must be on HMRC&apos;s list of recognised providers.
      </InfoCallout>

      {/* What MTD software is */}
      <section className="mt-10 max-w-3xl" aria-labelledby="what-is-software">
        <h2 id="what-is-software" className="text-2xl font-bold text-slate-900 mb-4">
          What is MTD Software and Why Do You Need It?
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          MTD-compatible software is any application that HMRC has recognised as capable of
          maintaining digital records in the required format and submitting quarterly updates
          directly to HMRC&apos;s Making Tax Digital API. Broadly, there are two categories:
        </p>
        <ul className="space-y-3 text-slate-600 mb-3">
          <li className="flex gap-3">
            <span className="mt-1.5 size-2 rounded-full bg-brand shrink-0" />
            <span>
              <strong className="text-slate-900">Full accounting software</strong> — platforms
              like Xero, QuickBooks, Sage, and FreeAgent that handle all aspects of your
              bookkeeping, invoicing, bank feeds, and tax submissions in one place.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 size-2 rounded-full bg-brand shrink-0" />
            <span>
              <strong className="text-slate-900">Bridging software</strong> — lighter tools that
              connect your existing spreadsheet or other records to HMRC&apos;s MTD API, handling
              the submission without replacing your current record-keeping method.
            </span>
          </li>
        </ul>
        <p className="text-slate-600 leading-relaxed">
          For most sole traders, a full accounting package is the most practical option — the
          automation features (bank feeds, receipt scanning, quarterly reminders) save time and
          reduce errors compared to managing a spreadsheet manually.
        </p>
      </section>

      {/* Our top picks */}
      <section className="mt-12" aria-labelledby="top-picks">
        <h2 id="top-picks" className="text-2xl font-bold text-slate-900 mb-2">
          Our Top Picks
        </h2>
        <p className="text-slate-600 mb-6 max-w-2xl">
          All four of these providers are HMRC-recognised MTD-compatible software for Income Tax.
          We&apos;ve selected them based on their suitability for sole traders, MTD feature
          completeness, price, and ease of use.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {allProviders.map((provider, i) => (
            <ProviderCard
              key={provider.id}
              provider={provider}
              variant="summary"
              highlighted={i === 3} // FreeAgent highlighted as top pick for sole traders
            />
          ))}
        </div>
        <Link
          href="/software/best-mtd-software-for-sole-traders/"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
        >
          Full guide: Best MTD software for sole traders <ArrowRight className="size-4" />
        </Link>
      </section>

      {/* Browse by need */}
      <section className="mt-14" aria-labelledby="browse-by-need">
        <h2 id="browse-by-need" className="text-2xl font-bold text-slate-900 mb-6">
          Browse by Need
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <GuideCard
            title="Best MTD Software for Sole Traders"
            description="Our top-rated MTD software picks for sole traders in 2025 — ranked, reviewed, and compared by price, features, and ease of use."
            href="/software/best-mtd-software-for-sole-traders/"
            category="Software Guide"
            badge="Top Guide"
          />
          <GuideCard
            title="Best Free MTD Software"
            description="Is there genuinely free MTD software for sole traders? We look at FreeAgent via NatWest/RBS, HMRC's own tools, and what 'free' usually means in practice."
            href="/software/best-free-mtd-software/"
            category="Software Guide"
          />
          <GuideCard
            title="Cheapest MTD Software"
            description="Entry-level plans from Xero, QuickBooks, Sage, and FreeAgent compared by price — and which hidden costs to watch out for."
            href="/software/cheapest-mtd-software/"
            category="Software Guide"
          />
          <GuideCard
            title="Best MTD Software for Spreadsheet Users"
            description="Already using Excel or Google Sheets? Here's how to add MTD compliance without giving up your spreadsheet workflow."
            href="/software/best-mtd-software-for-spreadsheet-users/"
            category="Software Guide"
          />
        </div>
      </section>

      {/* Free vs paid */}
      <section className="mt-14 max-w-3xl" aria-labelledby="free-vs-paid">
        <h2 id="free-vs-paid" className="text-2xl font-bold text-slate-900 mb-4">
          Free vs. Paid MTD Software: A Quick Summary
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          The only truly free full-accounting MTD software for sole traders is <strong>FreeAgent</strong>,
          available at no charge to NatWest and RBS business account holders. All other major
          providers charge a monthly subscription starting from £14–£19/month.
        </p>
        <p className="text-slate-600 leading-relaxed mb-3">
          Most providers offer free trials of 30 days. These can be a valuable way to test
          software before committing — particularly to check that the user interface suits you
          and that the software handles your specific income type correctly.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Bridging software (for those using spreadsheets) is generally cheaper than full
          accounting packages — often £3–£10 per month — but offers far fewer features. The
          total cost-benefit equation depends on how much time you spend on your books each month.
        </p>
        <Link
          href="/software/best-free-mtd-software/"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
        >
          Full guide: Best free MTD software <ArrowRight className="size-4" />
        </Link>
      </section>

      {/* CTA */}
      <div className="mt-12 max-w-3xl">
        <CTABlock
          heading="Not Sure Which Software to Choose?"
          description="Use our MTD eligibility checker to confirm whether you're affected — then compare software based on your needs."
          primaryCta={{ label: 'Compare All Software', href: '/comparisons/' }}
          secondaryCta={{
            label: 'Check My Eligibility',
            href: '/tools/mtd-eligibility-checker/',
          }}
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
              href="/mtd-for-sole-traders/"
              className="text-sm text-brand hover:underline inline-flex items-center gap-1"
            >
              <ArrowRight className="size-3.5" /> MTD for Sole Traders: Complete Guide Hub
            </Link>
          </li>
          <li>
            <Link
              href="/mtd-for-sole-traders/spreadsheets/"
              className="text-sm text-brand hover:underline inline-flex items-center gap-1"
            >
              <ArrowRight className="size-3.5" /> Can You Use Spreadsheets for MTD?
            </Link>
          </li>
          <li>
            <Link
              href="/comparisons/"
              className="text-sm text-brand hover:underline inline-flex items-center gap-1"
            >
              <ArrowRight className="size-3.5" /> Compare All MTD Software Side by Side
            </Link>
          </li>
          <li>
            <Link
              href="/tools/mtd-eligibility-checker/"
              className="text-sm text-brand hover:underline inline-flex items-center gap-1"
            >
              <ArrowRight className="size-3.5" /> MTD Eligibility Checker Tool
            </Link>
          </li>
        </ul>
      </section>
    </div>
  )
}
