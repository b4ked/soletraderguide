import type { BreadcrumbItem } from '@/types'

/**
 * Format a date string to the UK-preferred "18 March 2025" format.
 * Accepts ISO strings (e.g. "2025-03-18") or any date string parseable by Date.
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

/**
 * Estimate reading time for a block of plain text or HTML content.
 * Uses an average reading speed of 200 words per minute.
 * Returns a minimum of 1 minute.
 */
export function getReadingTime(text: string): number {
  // Strip HTML tags if present
  const stripped = text.replace(/<[^>]+>/g, ' ')
  const wordCount = stripped
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 0).length

  const wordsPerMinute = 200
  return Math.max(1, Math.round(wordCount / wordsPerMinute))
}

/**
 * A human-readable label map for common URL segments.
 * These are used when no custom label is provided.
 */
const defaultSegmentLabels: Record<string, string> = {
  'mtd-for-sole-traders': 'MTD for Sole Traders',
  'what-is-mtd': 'What is MTD?',
  'am-i-affected': 'Am I Affected?',
  'key-deadlines': 'Key Deadlines',
  'records-to-keep': 'Records to Keep',
  'spreadsheets-and-mtd': 'Spreadsheets & MTD',
  'sole-traders-and-landlords': 'Sole Traders & Landlords',
  software: 'Software',
  'best-for-sole-traders': 'Best for Sole Traders',
  free: 'Free MTD Software',
  cheapest: 'Cheapest Options',
  'spreadsheet-users': 'Best for Spreadsheet Users',
  compare: 'Comparisons',
  tools: 'Tools',
  'eligibility-checker': 'Eligibility Checker',
  'software-chooser': 'Software Chooser',
  blog: 'Blog',
  about: 'About',
  contact: 'Contact',
  'editorial-policy': 'Editorial Policy',
  'affiliate-disclosure': 'Affiliate Disclosure',
  'privacy-policy': 'Privacy Policy',
  terms: 'Terms and Conditions',
  sources: 'Sources & Methodology',
}

/**
 * Generate an array of BreadcrumbItems from a URL pathname.
 *
 * Example:
 *   "/mtd-for-sole-traders/am-i-affected"
 *   → [{label: "Home", href: "/"}, {label: "MTD for Sole Traders", href: "/mtd-for-sole-traders"}, {label: "Am I Affected?"}]
 *
 * @param pathname - The URL pathname (e.g. "/mtd-for-sole-traders/am-i-affected")
 * @param customLabels - Optional map of segment → display label overrides
 */
export function generateBreadcrumbs(
  pathname: string,
  customLabels?: Record<string, string>
): BreadcrumbItem[] {
  const labels = { ...defaultSegmentLabels, ...(customLabels ?? {}) }

  // Clean and split
  const segments = pathname
    .replace(/^\//, '')
    .replace(/\/$/, '')
    .split('/')
    .filter(Boolean)

  const breadcrumbs: BreadcrumbItem[] = [{ label: 'Home', href: '/' }]

  let accumulatedPath = ''
  segments.forEach((segment, index) => {
    accumulatedPath += `/${segment}`
    const isLast = index === segments.length - 1
    const label =
      labels[segment] ??
      segment
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')

    breadcrumbs.push({
      label,
      // Last item has no href (current page)
      href: isLast ? undefined : accumulatedPath,
    })
  })

  return breadcrumbs
}

/**
 * Truncate a string to a maximum length and append an ellipsis if needed.
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trimEnd() + '…'
}

/**
 * Slugify a string (for use in IDs and URLs).
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}
