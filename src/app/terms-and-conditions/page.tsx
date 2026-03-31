import type { Metadata } from 'next'
import { generateMetadata as buildMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { InfoCallout } from '@/components/common/InfoCallout'
import { LastUpdated } from '@/components/trust/LastUpdated'

export const metadata: Metadata = buildMetadata({
  title: 'Terms and Conditions',
  description:
    'Terms and conditions for using SoleTraderGuide.co.uk. Important disclaimer: content on this site is for general information only and does not constitute financial or tax advice.',
  canonicalPath: '/terms-and-conditions',
  pageType: 'legal',
})

export default function TermsAndConditionsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-8 sm:py-12">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Terms and Conditions' },
        ]}
      />

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Terms and Conditions
      </h1>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        Please read these terms carefully before using SoleTraderGuide.co.uk. By accessing or
        using this website, you agree to be bound by these terms.
      </p>

      <InfoCallout type="warning" title="Not financial or tax advice" className="mt-8">
        Content on SoleTraderGuide.co.uk is for general information only. It does not constitute
        financial, tax, legal, or professional advice. Always seek advice from a qualified
        accountant, tax adviser, or solicitor for your specific circumstances.
      </InfoCallout>

      <div className="mt-10 space-y-10">

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">About This Website</h2>
          <p className="text-muted-foreground leading-relaxed">
            SoleTraderGuide.co.uk is an independent editorial website providing general
            information and guidance about Making Tax Digital for Income Tax for UK sole traders,
            freelancers, and landlords. The website is operated as an independently owned
            editorial publication.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            We are not affiliated with, endorsed by, or acting on behalf of HMRC, HM Treasury,
            or any government body. We are also independent of all software providers featured
            or mentioned on this site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Not Financial Advice</h2>
          <p className="text-muted-foreground leading-relaxed">
            The content published on SoleTraderGuide.co.uk — including guides, articles, tool
            outputs, software reviews, comparisons, and any other material — is provided for
            general information purposes only. It is not intended to constitute, and should not
            be relied upon as, financial advice, tax advice, legal advice, or any other form of
            professional advice.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Tax rules are complex, change frequently, and their application depends on individual
            circumstances. While we make every reasonable effort to ensure the accuracy of our
            content, we make no representation or warranty, express or implied, regarding the
            completeness, accuracy, or suitability of any information on this site.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Always consult a qualified accountant, tax adviser,
            or contact HMRC directly</strong> for advice specific to your situation before making
            tax or financial decisions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Accuracy of Information</h2>
          <p className="text-muted-foreground leading-relaxed">
            We endeavour to ensure that information on this website is accurate, up to date, and
            reflects current HMRC rules. However, MTD rules, software pricing, and features change
            regularly. We cannot guarantee that all content is current at the time you read it.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            All pages display a &ldquo;Last updated&rdquo; date. Please check that date and, where relevant,
            verify information against primary sources such as HMRC&apos;s website at gov.uk. If you
            believe any content is incorrect, please contact us at{' '}
            <a
              href="mailto:editorial@soletraderguide.co.uk"
              className="text-brand hover:underline underline-offset-2"
            >
              editorial@soletraderguide.co.uk
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Affiliate Links</h2>
          <p className="text-muted-foreground leading-relaxed">
            Some links on this website are affiliate links. If you click such a link and make a
            purchase or subscription, we may receive a commission from the relevant software
            provider. This is at no extra cost to you. See our{' '}
            <a href="/affiliate-disclosure" className="text-brand hover:underline underline-offset-2">
              affiliate disclosure
            </a>{' '}
            for full details of which providers we work with and how these arrangements operate.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Intellectual Property</h2>
          <p className="text-muted-foreground leading-relaxed">
            All content on SoleTraderGuide.co.uk — including text, tools, graphics, design, and
            code — is the intellectual property of SoleTraderGuide and is protected by copyright.
            You may not reproduce, redistribute, or republish any content from this website
            without our express written permission.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            You are welcome to link to individual pages on this website from your own website,
            blog, or social media, provided you do so in a manner that is fair and does not
            suggest any form of endorsement or affiliation.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Limitation of Liability</h2>
          <p className="text-muted-foreground leading-relaxed">
            To the fullest extent permitted by law, SoleTraderGuide and its operators shall not
            be liable for any direct, indirect, incidental, consequential, or special damages
            arising from your use of this website or your reliance on any information contained
            herein. This includes, without limitation, any loss of income, profit, data, or
            business opportunity arising from decisions made on the basis of content published
            on this site.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            We accept no responsibility for the content of any third-party websites linked to
            from SoleTraderGuide.co.uk.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Governing Law</h2>
          <p className="text-muted-foreground leading-relaxed">
            These terms and conditions are governed by and construed in accordance with the laws
            of England and Wales. Any disputes arising in connection with these terms shall be
            subject to the exclusive jurisdiction of the courts of England and Wales.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Changes to These Terms</h2>
          <p className="text-muted-foreground leading-relaxed">
            We may update these terms from time to time. Any changes will be posted on this page
            with an updated date. Your continued use of the website following any changes
            constitutes your acceptance of the revised terms.
          </p>
        </section>
      </div>

      <div className="mt-10 border-t border-border pt-6">
        <LastUpdated date="2026-03-31" />
      </div>
    </div>
  )
}
