import type { Metadata } from 'next'
import Link from 'next/link'
import { generateMetadata as buildMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { LastUpdated } from '@/components/trust/LastUpdated'

export const metadata: Metadata = buildMetadata({
  title: 'About SoleTraderGuide',
  description:
    'SoleTraderGuide is an independent editorial website helping UK sole traders understand Making Tax Digital for Income Tax and compare software options.',
  canonicalPath: '/about',
  pageType: 'legal',
})

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-8 sm:py-12">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'About' },
        ]}
      />

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        About SoleTraderGuide
      </h1>

      <div className="mt-8 space-y-10">

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Who We Are</h2>
          <p className="text-muted-foreground leading-relaxed">
            SoleTraderGuide.co.uk is an independent editorial website dedicated to helping UK
            sole traders, freelancers, and landlords navigate Making Tax Digital for Income Tax.
            We are not affiliated with HMRC, any accountancy body, or any software provider.
            Our content is produced by an editorial team with a background in UK tax and personal
            finance journalism.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            We built SoleTraderGuide because we found that most available MTD guidance was either
            too technical (written for accountants) or too vague (marketing copy from software
            companies). We wanted to create a resource that gives sole traders the plain-English
            answers they actually need.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">What We Do</h2>
          <p className="text-muted-foreground leading-relaxed">
            We produce three types of content on SoleTraderGuide:
          </p>
          <ul className="mt-4 space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 size-1.5 rounded-full bg-brand shrink-0" aria-hidden="true" />
              <span>
                <strong className="text-foreground">Plain-English guides</strong> — covering MTD
                deadlines, eligibility rules, quarterly updates, record-keeping requirements, and
                the End of Period Statement.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 size-1.5 rounded-full bg-brand shrink-0" aria-hidden="true" />
              <span>
                <strong className="text-foreground">Software comparisons and reviews</strong> —
                independent evaluations of the main MTD-compatible accounting software options,
                including Xero, QuickBooks, Sage, and FreeAgent.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 size-1.5 rounded-full bg-brand shrink-0" aria-hidden="true" />
              <span>
                <strong className="text-foreground">Free tools</strong> — including an MTD
                eligibility checker and a software recommender, designed to help sole traders
                understand their situation and make informed decisions.
              </span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Our Editorial Approach</h2>
          <p className="text-muted-foreground leading-relaxed">
            We follow an editorial-first model: our content decisions are made independently of
            commercial considerations. No software provider can pay for a positive review, a
            higher rating, or preferential placement in a comparison table. We assess all software
            against the same criteria — MTD compatibility, ease of use, value for money, features,
            and customer support — using a documented scoring methodology.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            We regularly review and update our content to reflect changes in HMRC rules, software
            pricing, and features. When we discover errors, we correct them promptly and note the
            update.
          </p>
          <p className="mt-3">
            <Link href="/editorial-policy" className="text-sm font-semibold text-brand hover:underline underline-offset-2">
              Read our full editorial policy &rarr;
            </Link>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">How We Review Content</h2>
          <p className="text-muted-foreground leading-relaxed">
            Every guide and review published on SoleTraderGuide is cross-checked against
            HMRC&apos;s official guidance before publication. Our review process covers four areas:
          </p>
          <ul className="mt-4 space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 size-1.5 rounded-full bg-brand shrink-0" aria-hidden="true" />
              <span>
                <strong className="text-foreground">HMRC verification</strong> — all MTD thresholds,
                deadlines, and rules are verified against gov.uk before publication and updated
                whenever HMRC announces changes.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 size-1.5 rounded-full bg-brand shrink-0" aria-hidden="true" />
              <span>
                <strong className="text-foreground">Pricing accuracy</strong> — software pricing is
                checked against each provider&apos;s website before publication. All pages show the
                date prices were last verified.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 size-1.5 rounded-full bg-brand shrink-0" aria-hidden="true" />
              <span>
                <strong className="text-foreground">Balanced assessment</strong> — software reviews
                assess all providers against the same criteria. No provider receives favourable
                treatment due to affiliate relationships.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 size-1.5 rounded-full bg-brand shrink-0" aria-hidden="true" />
              <span>
                <strong className="text-foreground">Quarterly updates</strong> — content is
                scheduled for review every quarter. Material changes are noted inline with an
                updated date.
              </span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">How We Make Money</h2>
          <p className="text-muted-foreground leading-relaxed">
            SoleTraderGuide is funded primarily through affiliate commissions. Some links on our
            site — particularly those pointing to software providers — are affiliate links. If you
            click one of these links and subscribe to the software, we may earn a small commission
            at no extra cost to you.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            We are transparent about this arrangement. Affiliate relationships do not affect our
            editorial ratings or the objectivity of our reviews. You can always visit software
            providers directly if you prefer not to use our links.
          </p>
          <p className="mt-3">
            <Link href="/affiliate-disclosure" className="text-sm font-semibold text-brand hover:underline underline-offset-2">
              Read our affiliate disclosure &rarr;
            </Link>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Who We Write For</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our primary audience is UK sole traders — self-employed individuals who run their own
            business without incorporating as a limited company. We also write for:
          </p>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 size-1.5 rounded-full bg-brand shrink-0" aria-hidden="true" />
              Freelancers and contractors working outside IR35
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 size-1.5 rounded-full bg-brand shrink-0" aria-hidden="true" />
              UK landlords with property rental income
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 size-1.5 rounded-full bg-brand shrink-0" aria-hidden="true" />
              People who are both employed and self-employed
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 size-1.5 rounded-full bg-brand shrink-0" aria-hidden="true" />
              Accountants and bookkeepers seeking plain-English resources to share with clients
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed">
            We welcome questions, corrections, and feedback. You can reach us at{' '}
            <a
              href="mailto:hello@soletraderguide.co.uk"
              className="text-brand hover:underline underline-offset-2"
            >
              hello@soletraderguide.co.uk
            </a>
            . We aim to respond to all enquiries within 3–5 working days.
          </p>
          <p className="mt-3">
            <Link href="/contact" className="text-sm font-semibold text-brand hover:underline underline-offset-2">
              Visit our contact page &rarr;
            </Link>
          </p>
        </section>

        {/* Trust signals */}
        <div className="rounded-xl border border-border bg-muted/30 p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 text-center">
            <div>
              <p className="text-sm font-semibold text-foreground">Founded 2025</p>
              <p className="text-xs text-muted-foreground mt-1">Built for the MTD era</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">30+ articles &amp; guides</p>
              <p className="text-xs text-muted-foreground mt-1">Growing weekly</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Independently operated</p>
              <p className="text-xs text-muted-foreground mt-1">No external investors or owners</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">HMRC-verified</p>
              <p className="text-xs text-muted-foreground mt-1">All facts checked against gov.uk</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-border pt-6">
        <LastUpdated date="2025-03-01" />
      </div>
    </div>
  )
}
