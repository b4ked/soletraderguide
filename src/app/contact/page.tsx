import type { Metadata } from 'next'
import { generateMetadata as buildMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { InfoCallout } from '@/components/common/InfoCallout'
import { LastUpdated } from '@/components/trust/LastUpdated'

export const metadata: Metadata = buildMetadata({
  title: 'Contact SoleTraderGuide',
  description:
    'Get in touch with the SoleTraderGuide editorial team. Contact us for editorial enquiries, corrections, commercial partnerships, or press enquiries.',
  canonicalPath: '/contact',
  pageType: 'legal',
})

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-8 sm:py-12">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Contact' },
        ]}
      />

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Contact SoleTraderGuide
      </h1>

      <p className="mt-4 text-muted-foreground leading-relaxed">
        We welcome questions, feedback, corrections, and commercial enquiries. Please read the
        relevant section below before getting in touch — this helps us route your message to
        the right person as quickly as possible.
      </p>

      <InfoCallout type="warning" title="We cannot answer personal tax questions" className="mt-8">
        We are an editorial team, not tax advisers. We cannot help with questions about your
        individual tax situation, Self Assessment returns, or whether MTD applies to your
        specific circumstances. For personal tax questions, please consult a qualified accountant
        or contact HMRC directly at{' '}
        <a
          href="https://www.gov.uk/contact-hmrc"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:opacity-80"
        >
          gov.uk/contact-hmrc
        </a>
        .
      </InfoCallout>

      <div className="mt-10 space-y-8">

        <section className="rounded-xl border border-border bg-white p-6">
          <h2 className="text-lg font-bold text-foreground mb-2">Editorial Enquiries</h2>
          <p className="text-muted-foreground leading-relaxed text-sm mb-4">
            For questions about our content, suggestions for topics we should cover, or feedback
            on specific articles and guides, contact our editorial team.
          </p>
          <a
            href="mailto:editorial@soletraderguide.co.uk"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline underline-offset-2"
          >
            editorial@soletraderguide.co.uk
          </a>
        </section>

        <section className="rounded-xl border border-border bg-white p-6">
          <h2 className="text-lg font-bold text-foreground mb-2">Corrections and Complaints</h2>
          <p className="text-muted-foreground leading-relaxed text-sm mb-4">
            If you believe any content on SoleTraderGuide contains a factual error, is out of
            date, or is otherwise inaccurate, please let us know. We take accuracy seriously and
            investigate all correction requests. Please include the URL of the page, the specific
            issue you have identified, and any supporting sources you can point to.
          </p>
          <a
            href="mailto:editorial@soletraderguide.co.uk"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline underline-offset-2"
          >
            editorial@soletraderguide.co.uk
          </a>
          <p className="mt-3 text-xs text-muted-foreground">
            We aim to respond to correction requests within 5 working days.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-white p-6">
          <h2 className="text-lg font-bold text-foreground mb-2">Commercial Partnerships</h2>
          <p className="text-muted-foreground leading-relaxed text-sm mb-4">
            If you represent a software provider or another business and are interested in
            discussing affiliate partnerships or commercial arrangements, please get in touch.
            We are transparent about all commercial relationships, and any such arrangement will
            be disclosed to readers.
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            Please note: commercial relationships do not influence our editorial ratings or
            content. We do not accept payment for positive reviews, higher rankings, or
            editorial coverage. See our{' '}
            <a href="/editorial-policy" className="text-brand hover:underline underline-offset-2">
              editorial policy
            </a>{' '}
            for more information.
          </p>
          <a
            href="mailto:hello@soletraderguide.co.uk"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline underline-offset-2"
          >
            hello@soletraderguide.co.uk
          </a>
        </section>

        <section className="rounded-xl border border-border bg-white p-6">
          <h2 className="text-lg font-bold text-foreground mb-2">Press Enquiries</h2>
          <p className="text-muted-foreground leading-relaxed text-sm mb-4">
            For press enquiries, interview requests, or media appearances, please contact us
            by email. We are happy to provide commentary on Making Tax Digital, sole trader
            finances, and the UK accounting software market.
          </p>
          <a
            href="mailto:hello@soletraderguide.co.uk"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline underline-offset-2"
          >
            hello@soletraderguide.co.uk
          </a>
        </section>

        <div className="rounded-lg border border-border bg-muted/30 px-5 py-4">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Response times:</strong> We aim to respond to all
            enquiries within 3–5 working days. During busy periods this may extend slightly. All
            messages are read — we will get back to you.
          </p>
        </div>
      </div>

      <div className="mt-10 border-t border-border pt-6">
        <LastUpdated date="2025-03-01" />
      </div>
    </div>
  )
}
