import type { Metadata } from 'next'
import Link from 'next/link'
import { generateMetadata as buildMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { LastUpdated } from '@/components/trust/LastUpdated'

export const metadata: Metadata = buildMetadata({
  title: 'Editorial Policy',
  description:
    'How SoleTraderGuide researches, rates, and updates its content. Our editorial standards, independence policy, and correction process.',
  canonicalPath: '/editorial-policy',
  pageType: 'legal',
})

export default function EditorialPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-8 sm:py-12">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Editorial Policy' },
        ]}
      />

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Editorial Policy
      </h1>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        SoleTraderGuide is committed to producing accurate, independent, and useful content for UK
        sole traders. This policy explains how we research, write, and maintain that content.
      </p>

      <div className="mt-10 space-y-10">

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Our Independence</h2>
          <p className="text-muted-foreground leading-relaxed">
            SoleTraderGuide operates independently of all software providers, accountancy firms,
            and government bodies. No external party has editorial control over our content.
            Software providers cannot pay to appear in our reviews, improve their ratings, or
            influence the content of our guides.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            We do have affiliate relationships with some providers — meaning we may earn a
            commission if a reader purchases software through our links. However, these
            relationships are disclosed transparently, and they have no influence on the ratings or
            recommendations we produce. Our editorial team and commercial relationships operate
            with a strict separation.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">How We Research and Test</h2>
          <p className="text-muted-foreground leading-relaxed">
            When reviewing MTD-compatible software, we evaluate each product against a consistent
            set of criteria. We use each product hands-on where possible, review the provider&apos;s
            official documentation, assess pricing across all plans, and analyse user feedback
            from UK-based reviews where reliable data is available.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            For factual content about MTD rules and HMRC requirements, we rely primarily on
            official HMRC guidance, HMRC consultation documents, and verified reporting from
            specialist UK accountancy press (including AccountingWeb and ICAEW communications).
            We do not rely on press releases from software providers to describe their own products
            without independent verification.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">How We Keep Content Up to Date</h2>
          <p className="text-muted-foreground leading-relaxed">
            MTD rules, software pricing, and features change regularly. We review all major
            content pages on a quarterly basis and update them when changes occur. Significant
            changes — such as new HMRC announcements on thresholds or deadlines — trigger an
            immediate review of all affected pages.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            All pages display a &ldquo;Last updated&rdquo; date so readers can judge the freshness of the
            information. When substantive changes are made to a page, we note what was changed and
            when at the bottom of the page.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Our Rating System</h2>
          <p className="text-muted-foreground leading-relaxed">
            Software products are assessed against five weighted criteria:
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-6 font-semibold text-foreground">Criterion</th>
                  <th className="text-left py-2 pr-6 font-semibold text-foreground">Weight</th>
                  <th className="text-left py-2 font-semibold text-foreground">What we assess</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-muted-foreground">
                <tr>
                  <td className="py-2.5 pr-6 font-medium text-foreground">MTD Compatibility</td>
                  <td className="py-2.5 pr-6">30%</td>
                  <td className="py-2.5">HMRC recognition, quarterly update submission, EOPS support</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-6 font-medium text-foreground">Ease of Use</td>
                  <td className="py-2.5 pr-6">25%</td>
                  <td className="py-2.5">Onboarding, interface clarity, mobile app quality</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-6 font-medium text-foreground">Value for Money</td>
                  <td className="py-2.5 pr-6">20%</td>
                  <td className="py-2.5">Pricing relative to features, sole trader plan availability</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-6 font-medium text-foreground">Features</td>
                  <td className="py-2.5 pr-6">15%</td>
                  <td className="py-2.5">Bank feeds, invoicing, Self Assessment support, integrations</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-6 font-medium text-foreground">Customer Support</td>
                  <td className="py-2.5 pr-6">10%</td>
                  <td className="py-2.5">UK support availability, response quality, help resources</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Scores for each criterion are assigned on a 1–5 scale. The weighted total produces
            an overall score out of 5, which is displayed on each review page. For a full
            breakdown of our methodology, see our{' '}
            <Link href="/sources-methodology" className="text-brand hover:underline underline-offset-2">
              sources and methodology page
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Sources We Use</h2>
          <p className="text-muted-foreground leading-relaxed">
            We rely on the following primary sources for factual content:
          </p>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            {[
              'HMRC\'s official Making Tax Digital guidance on gov.uk',
              'HMRC consultation documents and policy papers',
              'HMRC\'s approved software supplier list',
              'Official provider documentation and help centres',
              'AccountingWeb (UK accountancy trade press)',
              'ICAEW (Institute of Chartered Accountants in England and Wales) MTD resources',
              'ACCA (Association of Chartered Certified Accountants) guidance',
            ].map((source) => (
              <li key={source} className="flex items-start gap-3">
                <span className="mt-1.5 size-1.5 rounded-full bg-brand shrink-0" aria-hidden="true" />
                <span>{source}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Corrections Policy</h2>
          <p className="text-muted-foreground leading-relaxed">
            We are committed to accuracy. If you believe any content on SoleTraderGuide contains
            an error — factual, computational, or otherwise — please contact us at{' '}
            <a
              href="mailto:editorial@soletraderguide.co.uk"
              className="text-brand hover:underline underline-offset-2"
            >
              editorial@soletraderguide.co.uk
            </a>
            . Please include the URL of the page, the specific error you have identified, and your
            suggested correction.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            We aim to investigate and respond within 5 working days. If an error is confirmed, we
            will correct it promptly and note the correction on the page.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Commercial Relationships</h2>
          <p className="text-muted-foreground leading-relaxed">
            SoleTraderGuide has affiliate relationships with some of the software providers
            featured on this site. When you click a &ldquo;Visit [Provider]&rdquo; button or similar
            affiliate link and make a purchase, we may earn a commission. This commission comes at
            no extra cost to you.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Our editorial ratings, comparison rankings, and content recommendations are produced
            independently of these commercial arrangements. Providers with affiliate relationships
            are not rated more favourably, and providers without such relationships are not
            disadvantaged.
          </p>
          <p className="mt-3">
            <Link href="/affiliate-disclosure" className="text-sm font-semibold text-brand hover:underline underline-offset-2">
              Read our full affiliate disclosure &rarr;
            </Link>
          </p>
        </section>
      </div>

      <div className="mt-10 border-t border-border pt-6">
        <LastUpdated date="2026-03-31" />
      </div>
    </div>
  )
}
