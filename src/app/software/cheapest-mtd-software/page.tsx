import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
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
  title: 'Cheapest MTD Software for Sole Traders (2025)',
  description:
    'Compare entry-level MTD software prices for sole traders in 2025. Xero, QuickBooks, Sage, and FreeAgent ranked by cost — plus hidden costs to watch out for.',
  canonicalPath: '/software/cheapest-mtd-software/',
  pageType: 'review',
  updatedDate: '2025-03-01',
})

const faqs: FAQ[] = [
  {
    question: 'What is the cheapest MTD software for a sole trader?',
    answer:
      'QuickBooks Self-Employed has one of the lowest entry prices at around £8/month for sole traders. Xero\'s Starter plan begins at £16/month. FreeAgent is free with qualifying NatWest/RBS accounts (£19/month otherwise), and Sage Accounting Start is £15/month. Prices change frequently — always check the provider\'s website for current pricing.',
  },
  {
    question: 'Does cheaper MTD software mean fewer features?',
    answer:
      'Generally yes — entry-level plans typically include the core features (bank feeds, invoicing, quarterly MTD submissions) but may limit transaction volumes, users, or access to advanced features like payroll, multi-currency, or project tracking. For most straightforward sole traders, the entry-level plan is sufficient.',
  },
  {
    question: 'Are there hidden costs I should watch out for?',
    answer:
      'Common additional costs include: payroll add-ons, accountant access fees (some providers charge extra for accountant collaboration), add-on apps, VAT filing features on lower tiers, and annual price increases. Also check whether the advertised price is for an introductory period — some providers offer a discounted first 6 months.',
  },
  {
    question: 'Is it worth paying more for premium MTD software?',
    answer:
      'It depends on your volume of transactions and complexity. If you send many invoices, need multi-currency support, or want more detailed reporting, a higher-tier plan may save you time and money overall. For a sole trader with straightforward finances, the cheapest plan from any recognised provider is usually adequate.',
  },
  {
    question: 'Can I get a discount on MTD software?',
    answer:
      'Most providers offer discounts for annual subscriptions (typically 10–20% versus monthly billing). Promotional discounts are common, particularly for new customers — Xero and Sage regularly run 50%-off promotions for the first 3–6 months. Your accountant may also be able to get you access through their partner programme at a discounted rate.',
  },
]

// Sort providers by monthly price ascending, with null prices last
const sortedByPrice = [...allProviders].sort((a, b) => {
  if (a.monthlyPrice === null) return 1
  if (b.monthlyPrice === null) return -1
  return a.monthlyPrice - b.monthlyPrice
})

export default function CheapestMtdSoftwarePage() {
  return (
    <div className="page-container py-8">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'MTD Software', href: '/software/' },
          { label: 'Cheapest MTD Software' },
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
          Cheapest MTD Software for Sole Traders (2025)
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-4">
          If keeping costs low is your priority, here&apos;s a clear comparison of the cheapest
          MTD-compatible accounting software options for sole traders — including what you get at
          each entry-level price point and the hidden costs to watch out for.
        </p>
        <LastUpdated date="2025-03-01" />
      </header>

      <AffiliateDisclosure variant="banner" className="mb-6 max-w-3xl" />

      <InfoCallout type="info" title="Prices Correct as of March 2025">
        All pricing shown is the standard monthly rate. Most providers offer discounts for annual
        billing and may run promotional offers for new subscribers. Always check the
        provider&apos;s website for the current price before subscribing.
      </InfoCallout>

      {/* What is the cheapest option */}
      <section className="mt-10 max-w-3xl" aria-labelledby="cheapest-option">
        <h2 id="cheapest-option" className="text-2xl font-bold text-slate-900 mb-4">
          What is the Cheapest MTD Software Option?
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          The cheapest ongoing option for a sole trader who qualifies is <strong>FreeAgent</strong>{' '}
          — free with qualifying NatWest and RBS business accounts. If you don&apos;t bank with
          NatWest or RBS, the next most affordable entry-level plan is from{' '}
          <strong>QuickBooks Self-Employed</strong> at around £8/month, followed by Sage at
          £15/month, Xero at £16/month, and FreeAgent at £19/month when paying directly.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Bear in mind that the cheapest plan is not always the best value. Consider the features
          included at each price point and how much time you&apos;ll spend on manual data entry
          if key automation features (like bank feeds) are absent or limited.
        </p>
      </section>

      {/* Price comparison */}
      <section className="mt-10" aria-labelledby="price-comparison">
        <h2 id="price-comparison" className="text-2xl font-bold text-slate-900 mb-5">
          Comparing Entry-Level Plans by Price
        </h2>

        {/* Price table */}
        <div className="overflow-x-auto rounded-xl border border-border mb-8 max-w-3xl">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">Provider</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">
                  Entry price/month
                </th>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">Free trial</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">Free option?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {sortedByPrice.map((provider) => (
                <tr key={provider.id} className="bg-white hover:bg-muted/20 transition-colors">
                  <td className="px-4 py-3 font-medium text-slate-900">{provider.name}</td>
                  <td className="px-4 py-3 text-slate-600">
                    {provider.monthlyPrice !== null ? `£${provider.monthlyPrice}/mo` : 'See pricing'}
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    {provider.hasFreeTrialDays ? `${provider.hasFreeTrialDays} days` : 'No'}
                  </td>
                  <td className="px-4 py-3">
                    {provider.hasFreePlan ? (
                      <span className="inline-flex items-center gap-1 text-emerald-700 font-medium text-xs">
                        <Check className="size-3.5" /> Yes
                      </span>
                    ) : provider.id === 'freeagent' ? (
                      <span className="text-xs text-amber-700 font-medium">
                        Free via NatWest/RBS
                      </span>
                    ) : (
                      <span className="text-xs text-muted-foreground">No</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Provider cards sorted by price */}
        <div className="space-y-5">
          {sortedByPrice.map((provider, i) => (
            <div key={provider.id}>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                #{i + 1} by price —{' '}
                {provider.monthlyPrice !== null
                  ? `from £${provider.monthlyPrice}/month`
                  : 'pricing varies'}
              </p>
              <div className="max-w-2xl">
                <ProviderCard provider={provider} variant="summary" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <InfoCallout type="warning" title="Watch Out for Introductory Pricing" className="mt-10 max-w-3xl">
        Several providers offer heavily discounted rates for the first 3–6 months of a new
        subscription. The standard price kicks in after the promotional period. Always check
        what you&apos;ll pay after the discount expires before committing.
      </InfoCallout>

      {/* Hidden costs */}
      <section className="mt-10 max-w-3xl" aria-labelledby="hidden-costs">
        <h2 id="hidden-costs" className="text-2xl font-bold text-slate-900 mb-4">
          Hidden Costs to Watch
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          The advertised monthly price is rarely the whole story. Here are the most common
          additional costs sole traders encounter:
        </p>
        <div className="space-y-4">
          {[
            {
              title: 'Payroll add-ons',
              desc: 'If you employ even one person (including paying yourself a salary from a limited company setup), you may need a payroll add-on. Xero charges extra for payroll; QuickBooks includes basic payroll at some tiers.',
            },
            {
              title: 'Annual price increases',
              desc: 'Most software providers increase their prices by 5–15% annually. Your starting price is unlikely to be permanent. Factor in future increases when comparing costs over a 2–3 year horizon.',
            },
            {
              title: 'VAT filing',
              desc: 'If you\'re VAT-registered, check whether MTD for VAT submissions are included in your chosen plan. Some entry-level plans require you to upgrade to submit VAT returns.',
            },
            {
              title: 'Accountant access',
              desc: 'Some providers charge for additional user seats if you want your accountant to have direct access to your account. Most do not charge extra for accountant access, but it\'s worth confirming.',
            },
            {
              title: 'Transaction limits on starter plans',
              desc: 'Xero\'s Starter plan limits you to 20 invoices and 5 bills per month. If you exceed these limits, you\'ll need to upgrade. Check the transaction limits on any plan you\'re considering.',
            },
          ].map((item) => (
            <div key={item.title} className="flex gap-3">
              <div className="mt-1 size-2 rounded-full bg-amber-400 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                <p className="text-sm text-muted-foreground mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* When cheap enough is enough */}
      <section className="mt-10 max-w-3xl" aria-labelledby="when-enough">
        <h2 id="when-enough" className="text-2xl font-bold text-slate-900 mb-4">
          When &ldquo;Cheap Enough&rdquo; is Enough
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          For sole traders with simple finances — a single income stream, a handful of regular
          expenses, and no payroll — the cheapest plan from any HMRC-recognised MTD provider is
          likely to be entirely sufficient. You don&apos;t need advanced features if you
          don&apos;t have complex reporting needs.
        </p>
        <p className="text-slate-600 leading-relaxed mb-3">
          The most important factors at the budget end are:
        </p>
        <ul className="space-y-2 text-slate-600 ml-4 list-disc list-inside mb-3">
          <li>HMRC recognition for MTD Income Tax (not just VAT)</li>
          <li>Bank feeds included (saves significant manual entry time)</li>
          <li>Quarterly MTD submission capability</li>
          <li>A mobile app for receipt capture</li>
        </ul>
        <p className="text-slate-600 leading-relaxed">
          If you can tick all four boxes at the entry price, that&apos;s likely to be all you
          need as a basic sole trader.
        </p>
        <Link
          href="/software/best-mtd-software-for-sole-traders/"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
        >
          Full guide: Best MTD software for sole traders <ArrowRight className="size-4" />
        </Link>
      </section>

      {/* CTA */}
      <div className="mt-12 max-w-3xl">
        <CTABlock
          heading="Find the Right MTD Software for Your Budget"
          description="Compare all four recommended providers across pricing, features, and MTD compliance in our full guide."
          primaryCta={{
            label: 'Best MTD Software Guide',
            href: '/software/best-mtd-software-for-sole-traders/',
          }}
          secondaryCta={{ label: 'Free Options', href: '/software/best-free-mtd-software/' }}
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
              href="/software/best-free-mtd-software/"
              className="text-sm text-brand hover:underline inline-flex items-center gap-1"
            >
              <ArrowRight className="size-3.5" /> Best Free MTD Software for Sole Traders
            </Link>
          </li>
          <li>
            <Link
              href="/software/best-mtd-software-for-sole-traders/"
              className="text-sm text-brand hover:underline inline-flex items-center gap-1"
            >
              <ArrowRight className="size-3.5" /> Best MTD Software for Sole Traders (Full Guide)
            </Link>
          </li>
          <li>
            <Link
              href="/software/best-mtd-software-for-spreadsheet-users/"
              className="text-sm text-brand hover:underline inline-flex items-center gap-1"
            >
              <ArrowRight className="size-3.5" /> Best MTD Software for Spreadsheet Users
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
