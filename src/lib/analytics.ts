// Analytics event tracking abstraction
// Designed so you can swap in GA4, Plausible, or PostHog later

type EventName =
  | 'cta_click'
  | 'affiliate_click'
  | 'tool_complete'
  | 'comparison_view'
  | 'comparison_filter'
  | 'internal_link_click'
  | 'faq_expand'
  | 'tool_start'

interface EventProps {
  label?: string
  provider?: string
  page?: string
  tool?: string
  value?: string | number
  [key: string]: unknown
}

/**
 * Track an analytics event. In development, events are logged to console.
 * In production, swap the TODO comment for your chosen analytics provider.
 */
export function trackEvent(name: EventName, props?: EventProps): void {
  // Guard against server-side calls
  if (typeof window === 'undefined') return

  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics]', name, props)
  }

  // TODO: Integrate analytics provider in Phase 2
  // GA4:       window.gtag?.('event', name, props)
  // Plausible: window.plausible?.(name, { props })
  // PostHog:   window.posthog?.capture(name, props)
}

/**
 * Track an outbound affiliate link click.
 */
export function trackAffiliateClick(provider: string, destination: string): void {
  trackEvent('affiliate_click', { provider, value: destination })
}

/**
 * Track completion of an on-site tool (e.g. eligibility checker).
 */
export function trackToolComplete(toolName: string, result: string): void {
  trackEvent('tool_complete', { tool: toolName, value: result })
}

/**
 * Track a CTA button click with its label and the page it appeared on.
 */
export function trackCTAClick(label: string, page: string): void {
  trackEvent('cta_click', { label, page })
}

/**
 * Track when a user starts interacting with a tool.
 */
export function trackToolStart(toolName: string): void {
  trackEvent('tool_start', { tool: toolName })
}

/**
 * Track when a user expands an FAQ item.
 */
export function trackFAQExpand(question: string): void {
  trackEvent('faq_expand', { label: question })
}

/**
 * Track a comparison table view with optional filter applied.
 */
export function trackComparisonView(filter?: string): void {
  trackEvent('comparison_view', { label: filter })
}
