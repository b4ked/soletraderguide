import { siteConfig } from '@/data/site-config'
import { JsonLd } from './JsonLd'

/**
 * Generates an Organization schema.org JSON-LD block for the site.
 * This should be included in the root layout so it appears on every page.
 */
export function OrganisationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.publisherName,
    url: siteConfig.url,
    description: siteConfig.description,
    contactPoint: {
      '@type': 'ContactPoint',
      email: siteConfig.email,
      contactType: 'customer service',
    },
  }

  return <JsonLd data={schema} />
}
