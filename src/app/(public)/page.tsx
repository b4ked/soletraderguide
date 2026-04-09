import Link from 'next/link'
import { ArrowRight, BookOpen, Calendar, CheckCircle, FileText, Shield, RefreshCw } from 'lucide-react'
import { generateMetadata as buildMetadata } from '@/lib/metadata'
import { HeroSection } from '@/components/common/HeroSection'
import { GuideCard } from '@/components/common/GuideCard'
import { ProviderCard } from '@/components/comparison/ProviderCard'
import { LastUpdated } from '@/components/trust/LastUpdated'
import { TrustBar } from '@/components/trust/TrustBar'
import { NewsletterSignup } from '@/components/common/NewsletterSignup'
import { allProviders } from '@/data/providers'

export const metadata = buildMetadata({
  title: "MTD Is Compulsory from April 2026 — Here's What to Do",
  description:
    "Plain-English guidance on Making Tax Digital for Income Tax. Find out if you're affected, understand your deadlines, and compare MTD software — without needing an accountant to translate.",
  canonicalPath: '/',
  pageType: 'homepage',
  updatedDate: '2026-03-31',
})

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        badge="The independent MTD guide — no accountant required"
        heading="MTD Is Compulsory from April 2026. Here's What to Do."
        subheading="Plain-English guidance so you know whether you're affected, what you need to change, and which software makes compliance straightforward — without needing an accountant to translate."
        primaryCta={{ label: 'Am I Affected?', href: '/mtd-for-sole-traders/am-i-affected/' }}
        secondaryCta={{ label: 'Compare Software', href: '/software/' }}
        trustNote="Independent guidance. No financial advice. Updated March 2026."
      />

      {/* Trust bar — surfaces credibility before any commercial content */}
      <TrustBar />

      {/* Eligibility checker — position 2, the most common first question */}
      <section className="bg-slate-50 border-b border-border py-12">
        <div className="page-container">
          <div className="max-w-2xl mx-auto rounded-2xl border-2 border-brand bg-white p-8 text-center shadow-sm">
            <div className="mb-4 inline-flex size-12 items-center justify-center rounded-full bg-brand-light">
              <CheckCircle className="size-6 text-brand" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Not Sure if You&apos;re Affected?
            </h2>
            <p className="text-slate-600 mb-6 text-sm leading-relaxed">
              Answer 3 quick questions about your income and we&apos;ll tell you exactly when MTD
              applies to you — and what to do next.
            </p>
            <Link
              href="/tools/mtd-eligibility-checker/"
              className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark transition-colors"
            >
              Check my eligibility <ArrowRight className="size-4" />
            </Link>
            <p className="mt-3 text-xs text-muted-foreground">
              Takes 60 seconds. You&apos;ll know your deadline and next steps.
            </p>
          </div>
        </div>
      </section>

      {/* What is MTD? Section */}
      <section className="page-container py-16" aria-labelledby="what-is-mtd">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 id="what-is-mtd" className="text-3xl font-bold text-slate-900 mb-4">
            What is Making Tax Digital for Income Tax?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Making Tax Digital (MTD) for Income Tax Self Assessment is HMRC&apos;s programme to
            move sole traders and landlords away from annual paper returns and onto digital
            record-keeping and quarterly reporting. Instead of filing once a year, you&apos;ll
            submit a summary of your income and expenses to HMRC every quarter using compatible
            software.
          </p>
          <p className="text-slate-600 leading-relaxed mt-3">
            The change is mandatory for sole traders and landlords with qualifying income over
            £50,000 from April 2026. The April 2027 rollout extends this to sole traders and
            landlords earning over £30,000.
          </p>
          <Link
            href="/mtd-for-sole-traders/what-is-mtd-income-tax/"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
          >
            Read the full MTD guide <ArrowRight className="size-4" />
          </Link>
        </div>

        {/* Key stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          <div className="rounded-xl border border-brand/20 bg-brand-light p-6 text-center">
            <p className="text-4xl font-bold text-brand mb-2">£50,000</p>
            <p className="text-sm font-semibold text-slate-700">Income threshold</p>
            <p className="text-xs text-muted-foreground mt-1">
              Annual qualifying income from April 2026
            </p>
          </div>
          <div className="rounded-xl border border-brand/20 bg-brand-light p-6 text-center">
            <p className="text-4xl font-bold text-brand mb-2">April 2026</p>
            <p className="text-sm font-semibold text-slate-700">Mandatory start date</p>
            <p className="text-xs text-muted-foreground mt-1">
              When MTD becomes compulsory for higher earners
            </p>
          </div>
          <div className="rounded-xl border border-brand/20 bg-brand-light p-6 text-center">
            <p className="text-4xl font-bold text-brand mb-2">4 per year</p>
            <p className="text-sm font-semibold text-slate-700">Quarterly updates</p>
            <p className="text-xs text-muted-foreground mt-1">
              You&apos;ll replace your annual Self Assessment return with 4 quarterly updates
            </p>
          </div>
        </div>
      </section>

      {/* Key Guides Grid */}
      <section className="page-container py-16" aria-labelledby="key-guides">
        <div className="mb-10">
          <h2 id="key-guides" className="text-3xl font-bold text-slate-900 mb-3">
            MTD Guides for Sole Traders
          </h2>
          <p className="text-slate-600 max-w-2xl">
            Everything you need to understand Making Tax Digital — from the basics through to
            practical steps for getting your records and software in order before April 2026.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <GuideCard
            title="What is MTD for Income Tax?"
            description="A plain-English explanation of what Making Tax Digital for Income Tax means, how it works, and how it differs from Self Assessment."
            href="/mtd-for-sole-traders/what-is-mtd-income-tax/"
            category="MTD Guides"
            icon={BookOpen}
          />
          <GuideCard
            title="Am I Affected by MTD?"
            description="Find out whether you need to comply with MTD, what counts towards the £50,000 threshold, and when you'll need to start."
            href="/mtd-for-sole-traders/am-i-affected/"
            category="MTD Guides"
            icon={CheckCircle}
          />
          <GuideCard
            title="MTD Deadlines Explained"
            description="Key dates for quarterly submissions, End of Period Statements, and your Final Declaration — with a clear quarterly timeline."
            href="/mtd-for-sole-traders/deadlines/"
            category="MTD Guides"
            icon={Calendar}
          />
          <GuideCard
            title="Records You Need to Keep"
            description="What digital records HMRC requires, how long to keep them, and whether photos of receipts count as digital records."
            href="/mtd-for-sole-traders/records-you-need-to-keep/"
            category="MTD Guides"
            icon={FileText}
          />
          <GuideCard
            title="MTD and Spreadsheets"
            description="Can you still use a spreadsheet? Yes — but you'll need bridging software. Find out how bridging works and whether it's right for you."
            href="/mtd-for-sole-traders/spreadsheets/"
            category="MTD Guides"
            badge="Popular"
          />
          <GuideCard
            title="Sole Trader and Landlord Income"
            description="If you have both self-employment and property income, find out how MTD applies and how to report both income streams correctly."
            href="/mtd-for-sole-traders/sole-trader-and-landlord-income/"
            category="MTD Guides"
          />
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/mtd-for-sole-traders/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
          >
            View all MTD guides <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      {/* Newsletter signup */}
      <section className="page-container py-12">
        <div className="max-w-2xl mx-auto">
          <NewsletterSignup
            heading="Stay ahead of MTD deadlines"
            subtext="Your free MTD compliance checklist — plus a heads-up before every key deadline. We send it when it matters, not on a schedule. One click to leave, any time."
          />
        </div>
      </section>

      {/* Software Comparison Section */}
      <section
        className="bg-slate-50 border-y border-border py-16"
        aria-labelledby="software-comparison"
      >
        <div className="page-container">
          <div className="mb-10">
            <h2 id="software-comparison" className="text-3xl font-bold text-slate-900 mb-3">
              Compare MTD Software for Sole Traders
            </h2>
            <p className="text-slate-600 max-w-2xl">
              HMRC requires you to use compatible software to submit quarterly updates. Here are
              four leading MTD options for sole traders, compared side by side.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {allProviders.map((provider) => (
              <ProviderCard key={provider.id} provider={provider} variant="summary" />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/comparisons/"
              className="inline-flex items-center gap-2 rounded-lg border border-brand px-6 py-2.5 text-sm font-semibold text-brand hover:bg-brand-light transition-colors"
            >
              See Full Comparison <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust / About Section */}
      <section className="page-container py-16" aria-labelledby="why-trust">
        <div className="max-w-3xl mx-auto">
          <h2 id="why-trust" className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Why Trust SoleTraderGuide?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="mb-4 inline-flex size-12 items-center justify-center rounded-full bg-brand-light">
                <Shield className="size-6 text-brand" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">Fully Independent</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We don&apos;t take payment from software companies to rank them higher. Every
                recommendation is based on our published scoring criteria —{' '}
                <Link href="/sources-methodology/" className="underline hover:text-brand">
                  read the full methodology
                </Link>
                .
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex size-12 items-center justify-center rounded-full bg-brand-light">
                <RefreshCw className="size-6 text-brand" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">Regularly Updated</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                MTD rules are evolving. We review every guide when HMRC guidance changes and
                publish a clear &ldquo;Last updated&rdquo; date on every page.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex size-12 items-center justify-center rounded-full bg-brand-light">
                <BookOpen className="size-6 text-brand" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Real Editorial Methodology
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Software recommendations are based on a published scoring framework covering MTD
                compatibility, price, ease of use, and sole-trader suitability.
              </p>
            </div>
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Read our{' '}
            <Link href="/editorial-policy/" className="text-brand hover:underline">
              editorial policy
            </Link>{' '}
            and{' '}
            <Link href="/sources/" className="text-brand hover:underline">
              sources &amp; methodology
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Latest Blog / Updates Section */}
      <section
        className="bg-slate-50 border-t border-border py-16"
        aria-labelledby="latest-updates"
      >
        <div className="page-container">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 id="latest-updates" className="text-3xl font-bold text-slate-900 mb-2">
                Latest MTD Updates
              </h2>
              <p className="text-slate-600">
                Stay up to date as HMRC refines the MTD for Income Tax programme.
              </p>
            </div>
            <Link
              href="/blog/"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
            >
              All articles <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <article className="rounded-xl border border-border bg-white p-6 flex flex-col">
              <span className="mb-3 rounded-full bg-brand-light px-2.5 py-0.5 text-xs font-medium text-brand self-start">
                News
              </span>
              <h3 className="text-base font-semibold text-slate-900 mb-2 leading-snug">
                April 2026 MTD Rollout Explained
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                Everything sole traders earning over £50,000 need to know about the April 2026
                mandatory start date — from registration deadlines to software choices.
              </p>
              <Link
                href="/blog/"
                className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-brand hover:underline"
              >
                Read more <ArrowRight className="size-3.5" />
              </Link>
            </article>

            <article className="rounded-xl border border-border bg-white p-6 flex flex-col">
              <span className="mb-3 rounded-full bg-brand-light px-2.5 py-0.5 text-xs font-medium text-brand self-start">
                Guide
              </span>
              <h3 className="text-base font-semibold text-slate-900 mb-2 leading-snug">
                What to Do Before Your First Quarterly Update
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                A practical checklist for sole traders approaching their first MTD quarterly
                submission — covering software setup, record organisation, and what to submit.
              </p>
              <Link
                href="/blog/"
                className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-brand hover:underline"
              >
                Read more <ArrowRight className="size-3.5" />
              </Link>
            </article>

            <article className="rounded-xl border border-border bg-white p-6 flex flex-col">
              <span className="mb-3 rounded-full bg-brand-light px-2.5 py-0.5 text-xs font-medium text-brand self-start">
                Comparison
              </span>
              <h3 className="text-base font-semibold text-slate-900 mb-2 leading-snug">
                Free vs Paid MTD Software: What&apos;s the Difference?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                Is free MTD software good enough for sole traders? We look at what free options
                actually include, what they leave out, and when it makes sense to pay.
              </p>
              <Link
                href="/blog/"
                className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-brand hover:underline"
              >
                Read more <ArrowRight className="size-3.5" />
              </Link>
            </article>
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/blog/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
            >
              All articles <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Page footer meta */}
      <div className="page-container py-6 border-t border-border">
        <LastUpdated date="2026-03-31" />
      </div>
    </>
  )
}
