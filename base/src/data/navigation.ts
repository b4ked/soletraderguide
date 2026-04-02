/**
 * SITE-SPECIFIC — override this file in each site repo.
 *
 * This stub provides the expected exports so the DNA base compiles standalone.
 * Each site must provide its own nav config, sitemap routes, and blog page meta.
 */
import type { NavItem, FooterNav } from '@/types'

// ─── Header navigation ────────────────────────────────────────────────────────

export const primaryNav: NavItem[] = [
  { label: 'Guides', href: '/guides' },
  { label: 'Comparisons', href: '/comparisons' },
  { label: 'Blog', href: '/blog' },
]

// ─── Footer navigation ────────────────────────────────────────────────────────

export const footerNav: FooterNav = {
  columns: [
    {
      title: 'Guides',
      links: [
        { label: 'Getting Started', href: '/guides' },
      ],
    },
    {
      title: 'Compare',
      links: [
        { label: 'Comparisons', href: '/comparisons' },
      ],
    },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
  ],
}

// ─── Sitemap static routes ─────────────────────────────────────────────────────
// Add per-site static pages here. Blog posts and homepage are added automatically.

export const sitemapRoutes: Array<{
  path: string
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number
}> = [
  { path: '/guides', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/comparisons', changeFrequency: 'weekly', priority: 0.9 },
]

// ─── Blog page metadata ────────────────────────────────────────────────────────
// Override the blog hub title, heading, and description per site.

export const blogPageMeta: {
  title: string
  heading: string
  description: string
} | null = null
