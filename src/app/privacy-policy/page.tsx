import type { Metadata } from 'next'
import { generateMetadata as buildMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { LastUpdated } from '@/components/trust/LastUpdated'

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  description:
    'How SoleTraderGuide collects, uses, and protects your data. Our privacy policy under UK GDPR.',
  canonicalPath: '/privacy-policy',
  pageType: 'legal',
})

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-8 sm:py-12">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Privacy Policy' },
        ]}
      />

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Privacy Policy
      </h1>

      <p className="mt-4 text-muted-foreground leading-relaxed">
        This policy explains how SoleTraderGuide.co.uk (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) collects,
        uses, and protects information about visitors to our website. We are committed to
        protecting your privacy and handling your data in accordance with UK GDPR and the Data
        Protection Act 2018.
      </p>
      <p className="mt-3 text-sm text-muted-foreground">
        This policy was last updated March 2026. For legal advice specific to your situation,
        consult a qualified solicitor.
      </p>

      <div className="mt-10 space-y-10">

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">What Data We Collect</h2>
          <p className="text-muted-foreground leading-relaxed">
            We collect a limited amount of data about how visitors use our website. This falls
            into two categories:
          </p>
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="text-base font-semibold text-foreground mb-1">Analytics data</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We use analytics software (currently in the process of being configured — we will
                update this policy when an analytics provider is selected) to understand how
                visitors use our site. This typically includes: pages visited, time spent on pages,
                approximate location (country/region level), browser type, and device type. We do
                not collect personally identifiable information through analytics.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground mb-1">Contact form submissions</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                If you contact us via email at hello@soletraderguide.co.uk, we will receive your
                email address and any information you choose to include in your message. We use
                this solely to respond to your enquiry and do not add you to any marketing list
                without your explicit consent.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">How We Use Your Data</h2>
          <p className="text-muted-foreground leading-relaxed">
            We use the data we collect for the following purposes:
          </p>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 size-1.5 rounded-full bg-brand shrink-0" aria-hidden="true" />
              To understand how visitors use our website and improve our content accordingly
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 size-1.5 rounded-full bg-brand shrink-0" aria-hidden="true" />
              To respond to enquiries submitted by email
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 size-1.5 rounded-full bg-brand shrink-0" aria-hidden="true" />
              To detect and prevent security issues or abuse
            </li>
          </ul>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We do not sell your data to third parties. We do not use your data for automated
            decision-making that produces legal or similarly significant effects.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Cookies</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our website may use cookies — small text files stored in your browser — to support
            analytics and site functionality. We aim to use as few cookies as technically
            necessary. If we introduce analytics or marketing cookies, we will update this policy
            and implement a consent mechanism compliant with UK GDPR.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            You can control and delete cookies through your browser settings at any time. Note
            that disabling cookies may affect the functionality of some parts of our website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Third-Party Services</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our website may include links to third-party websites, including software provider
            sites and HMRC&apos;s gov.uk pages. We are not responsible for the privacy practices of
            these websites and encourage you to review their privacy policies before submitting
            any personal information.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            We participate in affiliate programmes with some software providers. When you click
            an affiliate link, the provider may use cookies or tracking technologies to attribute
            your visit. See our{' '}
            <a href="/affiliate-disclosure" className="text-brand hover:underline underline-offset-2">
              affiliate disclosure
            </a>{' '}
            for details of which providers we work with.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Our website is hosted on Vercel. Vercel may process connection data (such as IP
            addresses) as part of serving web traffic. See{' '}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline underline-offset-2"
            >
              Vercel&apos;s privacy policy
            </a>{' '}
            for details.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Your Rights Under UK GDPR</h2>
          <p className="text-muted-foreground leading-relaxed">
            Under UK GDPR, you have the following rights in relation to your personal data:
          </p>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            {[
              'The right to access the personal data we hold about you',
              'The right to rectify inaccurate personal data',
              'The right to erasure (the "right to be forgotten") in certain circumstances',
              'The right to restrict processing of your personal data',
              'The right to data portability in certain circumstances',
              'The right to object to processing based on legitimate interests',
              'The right to withdraw consent at any time where processing is based on consent',
            ].map((right) => (
              <li key={right} className="flex items-start gap-3">
                <span className="mt-1.5 size-1.5 rounded-full bg-brand shrink-0" aria-hidden="true" />
                <span>{right}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            To exercise any of these rights, please contact us at{' '}
            <a
              href="mailto:hello@soletraderguide.co.uk"
              className="text-brand hover:underline underline-offset-2"
            >
              hello@soletraderguide.co.uk
            </a>
            . You also have the right to lodge a complaint with the Information Commissioner&apos;s
            Office (ICO) at{' '}
            <a
              href="https://ico.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline underline-offset-2"
            >
              ico.org.uk
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have questions or concerns about this privacy policy or how we handle your
            data, please contact us at{' '}
            <a
              href="mailto:hello@soletraderguide.co.uk"
              className="text-brand hover:underline underline-offset-2"
            >
              hello@soletraderguide.co.uk
            </a>
            . We will respond within 5 working days.
          </p>
        </section>
      </div>

      <div className="mt-10 border-t border-border pt-6">
        <LastUpdated date="2026-03-31" />
      </div>
    </div>
  )
}
