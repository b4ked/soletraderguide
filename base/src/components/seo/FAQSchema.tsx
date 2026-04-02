import type { FAQ } from '@/types'
import { JsonLd } from './JsonLd'

interface FAQSchemaProps {
  faqs: FAQ[]
}

/**
 * Generates a FAQPage schema.org JSON-LD block from an array of FAQ objects.
 * Include this component on any page that renders a FAQ section.
 */
export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return <JsonLd data={schema} />
}
