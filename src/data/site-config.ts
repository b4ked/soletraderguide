/**
 * SITE-SPECIFIC — override this file in each site repo.
 *
 * This stub provides defaults so the DNA base compiles standalone.
 * Each site must export a `siteConfig` object that satisfies SiteConfig.
 */
import type { SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
  name: 'My Site',
  domain: 'mysite.co.uk',
  url: 'https://mysite.co.uk',
  description: 'A content and comparison site.',
  tagline: 'Helpful guides and honest comparisons.',
  domainSuffix: '.co.uk',
  ogImage: '/og-default.png',
  twitter: '@mysite',
  email: 'hello@mysite.co.uk',
  publisherName: 'My Site Ltd',
  lastReviewedDate: 'April 2026',
  editorialEmail: 'editorial@mysite.co.uk',
  mobileCta: { label: 'Compare', href: '/comparisons' },
}
