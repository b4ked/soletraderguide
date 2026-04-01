import type { BreadcrumbItem } from '@/types'

/**
 * Format a date string to the UK-preferred "18 March 2026" format.
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
 * Generate an array of BreadcrumbItems from a URL pathname.
 * Pass a site-specific segmentLabels map from your navigation.ts to provide
 * human-readable labels for URL segments (e.g. 'reviews' → 'Reviews').
 * Unknown segments are auto-capitalised from their slug.
 *
 * @param pathname - The URL pathname (e.g. "/reviews/hubspot")
 * @param segmentLabels - Site-specific map of segment → display label (from navigation.ts)
 */
export function generateBreadcrumbs(
  pathname: string,
  segmentLabels?: Record<string, string>
): BreadcrumbItem[] {
  const labels = segmentLabels ?? {}

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
