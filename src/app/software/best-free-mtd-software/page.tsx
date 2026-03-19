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
import { providersBySlug } from '@/data/providers'
import type { FAQ } from '@/types'

export const metadata = buildMetadata({
  title: 'Best Free MTD Software for Sole Traders',
  description:
    'Is there genuinely free MTD software for sole traders? We look at FreeAgent via NatWest/RBS, HMRC\'s basic tools, free trials, and what free usually means in practice.',
  canonicalPath: '/software/best-free-mtd-software/',
  pageType: 'review',
  updatedDate: '2025-03-01',
})

const faqs: FAQ[] = [
  {
    question: 'Is FreeAgent really free?',
    answer:
      'FreeAgent is free with qualifying NatWest or Royal Bank of Scotland (RBS) business bank accounts. If you don\'t hold a qualifying account, FreeAgent costs £19/month for sole traders. The free access is tied to maintaining an active qualifying bank account — if you close the account or switch banks, you\'ll be moved to a paid plan.',
  },
  {
    question: 'Does HMRC provide free MTD software?',
    answer:
      'HMRC publishes a list of recognised software products for MTD. Some basic or entry-level tools on this list may be available at low or no cost, though full-featured free products are rare. HMRC\'s own "Basic PAYE Tools" covers payroll only and is not an MTD Income Tax solution. Always check HMRC\'s current recognised software list for the most up-to-date information.',
  },
  {
    question: 'Are free trials the same as free software?',
    answer:
      'No. Free trials give you full access to a paid product for a limited period — usually 30 days — at no charge. After the trial ends, you need to subscribe or lose access. Free trials are a useful way to test software before committing, but are not a long-term free solution.',
  },
  {
    question: 'What are the risks of using free or very cheap MTD software?',
    answer:
      'Very basic or free tools may lack features like bank feeds, receipt capture, or proper HMRC-recognised MTD submission capability. Always verify that any free tool is on HMRC\'s official list of recognised MTD-compatible software before relying on it for compliance. Using non-recognised software could mean your submissions are not accepted.',
  },
  {
    question: 'If I open a NatWest business account just to get free FreeAgent, is that worth it?',
    answer:
      'Potentially yes — especially for sole traders who are already comparing business bank accounts. NatWest and RBS business accounts carry their own fees (typically £5–£12.50/month), so the net saving from free FreeAgent depends on whether the bank\'s account features justify those fees. NatWest\'s free banking for new businesses can make this a very attractive option in the first year or two.',
  },
]

export default function BestFreeMtdSoftwarePage() {
  const freeagent = providersBySlug['freeagent']

  return (
    <div className="page-container py-8">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'MTD Software', href: '/software/' },
          { label: 'Best Free MTD Software' },
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
          Best Free MTD Software for Sole Traders
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-4">
          The honest answer is that genuinely free, full-featured MTD software is rare. But there
          is one notable exception — and a few options worth knowing about if budget is your
          primary concern.
        </p>
        <LastUpdated date="2025-03-01" />
      </header>

      <AffiliateDisclosure variant="banner" className="mb-6 max-w-3xl" />

      <InfoCallout type="info" title="The Short Answer">
        The only major full-accounting MTD platform available at no ongoing cost to sole traders
        is <strong>FreeAgent</strong>, free with qualifying NatWest and RBS business bank accounts.
        All other major providers charge a monthly subscription.
      </InfoCallout>

      {/* Is there really free MTD software */}
      <section className="mt-10 max-w-3xl" aria-labelledby="really-free">
        <h2 id="really-free" className="text-2xl font-bold text-slate-900 mb-4">
          Is There Really Free MTD Software?
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          The MTD software market is dominated by subscription-based products. Xero, QuickBooks,
          Sage, and FreeAgent all charge monthly fees for their standard plans. There is no free
          tier offered by any of these providers for ongoing use — with one important exception.
        </p>
        <p className="text-slate-600 leading-relaxed mb-3">
          FreeAgent offers its full platform free of charge to business bank account holders at
          NatWest and Royal Bank of Scotland (RBS). This is a genuine ongoing benefit — not a
          time-limited promotion — available to eligible account holders for as long as they
          maintain their qualifying bank account.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Beyond FreeAgent, your options for reducing cost include free trials (available from all
          four major providers), very basic bridging tools, and checking HMRC&apos;s published list
          for any newer entrants offering free or very low-cost plans.
        </p>
      </section>

      {/* FreeAgent via NatWest/RBS */}
      <section className="mt-10" aria-labelledby="freeagent-section">
        <h2 id="freeagent-section" className="text-2xl font-bold text-slate-900 mb-5">
          FreeAgent via NatWest / RBS
        </h2>
        <div className="max-w-2xl">
          <ProviderCard provider={freeagent} variant="full" highlighted />
        </div>
        <div className="mt-6 max-w-3xl">
          <p className="text-slate-600 leading-relaxed mb-3">
            FreeAgent is purpose-built for freelancers and sole traders. It includes everything
            most sole traders need: MTD Income Tax quarterly submissions, self-assessment filing
            (including the Final Declaration), bank feeds, invoice creation, expense tracking,
            and a tax timeline dashboard that keeps you on top of upcoming deadlines.
          </p>
          <p className="text-slate-600 leading-relaxed mb-3">
            The free access via NatWest and RBS applies to personal (sole trader) and business
            accounts. If you already bank with NatWest or RBS through a qualifying business
            account, you can claim free FreeAgent access directly through your online banking
            portal.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Standalone pricing is £19/month for the sole trader plan — competitive but not the
            cheapest option if you pay directly. The NatWest/RBS route makes FreeAgent the best
            value option for qualifying customers by a significant margin.
          </p>
        </div>
      </section>

      {/* HMRC's Basic Tools */}
      <section className="mt-10 max-w-3xl" aria-labelledby="hmrc-tools">
        <h2 id="hmrc-tools" className="text-2xl font-bold text-slate-900 mb-4">
          HMRC&apos;s Own Tools
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          HMRC publishes its own &ldquo;Basic Tools&rdquo; for certain tax obligations (primarily
          payroll). For MTD Income Tax, HMRC has not released its own comprehensive free software,
          but it does maintain an up-to-date list of recognised products — some of which may offer
          basic or entry-level free tiers.
        </p>
        <p className="text-slate-600 leading-relaxed mb-3">
          Some providers on HMRC&apos;s recognised list offer free plans with limited features —
          for example, supporting submissions only, without bank feeds or invoice management.
          These may be suitable for sole traders with very simple finances who are confident
          managing their own records.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Always verify that any tool you rely on is currently on HMRC&apos;s recognised list
          before using it for MTD submissions. The list is updated regularly.
        </p>
      </section>

      {/* What free usually means */}
      <section className="mt-10 max-w-3xl" aria-labelledby="what-free-means">
        <h2 id="what-free-means" className="text-2xl font-bold text-slate-900 mb-4">
          What &ldquo;Free&rdquo; Usually Means in Practice
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          When software providers describe their products as &ldquo;free,&rdquo; it usually means
          one of the following:
        </p>
        <div className="space-y-4">
          <div className="rounded-xl border border-border bg-white p-5">
            <h3 className="font-semibold text-slate-900 mb-2">Free trial</h3>
            <p className="text-sm text-muted-foreground">
              Full access for a limited period — typically 30 days — at no charge. After the
              trial ends, a subscription is required. Useful for evaluating software, but not
              a long-term solution.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-white p-5">
            <h3 className="font-semibold text-slate-900 mb-2">Free with a qualifying bank account</h3>
            <p className="text-sm text-muted-foreground">
              FreeAgent&apos;s model: the software is bundled with a business bank account. The
              bank pays for your software access as a customer benefit. You still pay for the
              bank account itself.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-white p-5">
            <h3 className="font-semibold text-slate-900 mb-2">Freemium (limited features)</h3>
            <p className="text-sm text-muted-foreground">
              A basic free plan with significant limitations — e.g. no bank feeds, limited
              transactions, or submission-only capability. May be adequate for very simple
              businesses but often lacks the features most sole traders need.
            </p>
          </div>
        </div>
      </section>

      <InfoCallout type="warning" title="Always Check HMRC Recognition" className="mt-10 max-w-3xl">
        Before relying on any free or low-cost tool for MTD submissions, confirm it is on
        HMRC&apos;s current list of recognised MTD-compatible software for Income Tax. Using
        unrecognised software will mean your submissions are not accepted by HMRC.
      </InfoCallout>

      {/* When free might not be enough */}
      <section className="mt-10 max-w-3xl" aria-labelledby="when-free-not-enough">
        <h2 id="when-free-not-enough" className="text-2xl font-bold text-slate-900 mb-4">
          When Free Might Not Be Enough
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          Very basic or stripped-down MTD tools may be technically compliant but impractical for
          everyday use. If your software doesn&apos;t have bank feeds, you&apos;ll need to enter
          every transaction manually — which quickly becomes time-consuming and error-prone.
        </p>
        <p className="text-slate-600 leading-relaxed mb-3">
          Consider paying for full accounting software if any of the following apply:
        </p>
        <ul className="space-y-2 text-slate-600 ml-4 list-disc list-inside">
          <li>You have more than a handful of transactions per week</li>
          <li>You issue invoices to clients regularly</li>
          <li>You have employees or subcontractors to pay</li>
          <li>You need to track project costs or profitability</li>
          <li>You have property income alongside self-employment</li>
          <li>You want your accountant to have direct access to your records</li>
        </ul>
        <p className="text-slate-600 leading-relaxed mt-3">
          For most active sole traders, the time saved by a full accounting platform (with bank
          feeds and automation) is worth the subscription cost.
        </p>
      </section>

      {/* CTA */}
      <div className="mt-12 max-w-3xl">
        <CTABlock
          heading="Compare All MTD Software Options"
          description="See how free and paid MTD software compares across price, features, and sole-trader suitability."
          primaryCta={{ label: 'Compare All Software', href: '/software/' }}
          secondaryCta={{
            label: 'Best MTD Software (Full Guide)',
            href: '/software/best-mtd-software-for-sole-traders/',
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
              href="/software/cheapest-mtd-software/"
              className="text-sm text-brand hover:underline inline-flex items-center gap-1"
            >
              <ArrowRight className="size-3.5" /> Cheapest MTD Software for Sole Traders
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
              href="/mtd-for-sole-traders/spreadsheets/"
              className="text-sm text-brand hover:underline inline-flex items-center gap-1"
            >
              <ArrowRight className="size-3.5" /> Can You Use Spreadsheets for MTD?
            </Link>
          </li>
          <li>
            <Link
              href="/software/"
              className="text-sm text-brand hover:underline inline-flex items-center gap-1"
            >
              <ArrowRight className="size-3.5" /> MTD Software Hub: All Options Compared
            </Link>
          </li>
        </ul>
      </section>
    </div>
  )
}
