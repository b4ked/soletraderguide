import type { Metadata } from 'next'
import { generateMetadata as buildMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { LastUpdated } from '@/components/trust/LastUpdated'

export const metadata: Metadata = buildMetadata({
  title: 'Affiliate Disclosure',
  description:
    'SoleTraderGuide is an independent editorial website. Some links on this site are affiliate links. Learn how this works and how it affects our reviews.',
  canonicalPath: '/affiliate-disclosure',
  pageType: 'legal',
})

export default function AffiliateDisclosurePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-8 sm:py-12">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Affiliate Disclosure' },
        ]}
      />

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Affiliate Disclosure
      </h1>

      <p className="mt-4 text-muted-foreground leading-relaxed">
        SoleTraderGuide.co.uk is an independent editorial website. We produce free content to help
        UK sole traders understand Making Tax Digital and choose the right software. Some links on
        this site are affiliate links — this page explains exactly what that means and how it
        affects our content.
      </p>

      <div className="mt-10 space-y-10">

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">What This Means</h2>
          <p className="text-muted-foreground leading-relaxed">
            When you click certain links on SoleTraderGuide — typically buttons labelled &ldquo;Visit
            [Provider]&rdquo;, &ldquo;Try [Provider] free&rdquo;, or &ldquo;Get started&rdquo; — you may be taken to a software
            provider&apos;s website via an affiliate tracking link. If you then purchase a subscription
            or sign up for the software, we may receive a small commission from the provider.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            This commission is paid by the software provider, not by you. The price you pay for
            the software is identical whether you arrive through our affiliate link or visit the
            provider&apos;s website directly.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">How It Affects Our Reviews</h2>
          <p className="text-muted-foreground leading-relaxed">
            The short answer is: it does not. Our editorial ratings, rankings, and recommendations
            are produced independently of our affiliate arrangements. A provider with an affiliate
            relationship does not receive a higher rating, more prominent placement, or more
            favourable coverage because of that relationship.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            We assess all software against the same five criteria — MTD compatibility, ease of use,
            value for money, features, and customer support — using a documented scoring
            methodology. The final ratings reflect our genuine editorial assessment, not commercial
            considerations.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            If a provider we cover does not offer an affiliate programme, or if we choose not to
            participate, it is included in our content on the same basis as any other provider.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">How to Identify Affiliate Links</h2>
          <p className="text-muted-foreground leading-relaxed">
            We identify affiliate links in two ways. First, pages containing commercial content
            display an affiliate disclosure notice near the top. Second, buttons that lead to
            provider websites are typically labelled to make their purpose clear (for example,
            &ldquo;Visit Xero&rdquo; or &ldquo;Try FreeAgent free&rdquo;).
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Standard editorial links to provider websites — for example, links within guide
            content that point to HMRC information or a provider&apos;s help centre — are not
            affiliate links and earn us nothing.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            Which Providers We Have Affiliate Relationships With
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We currently have or may have affiliate arrangements with the following providers.
            This list is updated as arrangements change.
          </p>
          <div className="rounded-lg border border-border divide-y divide-border">
            {[
              { name: 'Xero', note: 'We may earn a commission on qualifying referrals.' },
              { name: 'QuickBooks (Intuit)', note: 'We may earn a commission on qualifying referrals.' },
              { name: 'Sage', note: 'We may earn a commission on qualifying referrals.' },
              { name: 'FreeAgent', note: 'We may earn a commission on qualifying referrals.' },
            ].map((provider) => (
              <div key={provider.name} className="flex items-start justify-between gap-4 px-4 py-3">
                <span className="text-sm font-semibold text-foreground">{provider.name}</span>
                <span className="text-sm text-muted-foreground text-right">{provider.note}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Having an affiliate relationship with a provider does not guarantee a positive review
            or preferential treatment. Similarly, providers not listed above are covered on the
            same editorial basis.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Your Rights</h2>
          <p className="text-muted-foreground leading-relaxed">
            You are under no obligation to use our affiliate links. You can always visit software
            providers directly at no extra cost to you. Our editorial content — guides, tools,
            comparisons — remains free to access regardless of whether you use our affiliate links.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            If you have any questions about our affiliate arrangements, please contact us at{' '}
            <a
              href="mailto:hello@soletraderguide.co.uk"
              className="text-brand hover:underline underline-offset-2"
            >
              hello@soletraderguide.co.uk
            </a>
            .
          </p>
        </section>
      </div>

      <div className="mt-10 border-t border-border pt-6">
        <LastUpdated date="2025-03-01" />
      </div>
    </div>
  )
}
