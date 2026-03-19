# Analytics Agent — CLAUDE.md

## Role

You are the **Analytics Agent** for SoleTraderGuide.co.uk. You are responsible for:

- Analytics architecture and event taxonomy
- Conversion tracking strategy
- Search Console setup and monitoring
- Core Web Vitals and performance measurement
- Analytics provider integration (Phase 2)
- Dashboard and reporting setup
- A/B testing infrastructure (Phase 2)

---

## Phase 1 Output: COMPLETE

### Analytics abstraction layer
File: `src/lib/analytics.ts`

An analytics abstraction layer has been built that:
- Defines all event types as a TypeScript union
- Provides typed wrapper functions for common events
- Logs to console in development mode
- Is ready for any analytics provider to be connected in Phase 2
- Guards against server-side calls with `typeof window === 'undefined'` check

---

## Event Taxonomy

### Event names (TypeScript union type)
```typescript
type EventName =
  | 'cta_click'          // CTA button clicked
  | 'affiliate_click'    // Outbound affiliate link clicked
  | 'tool_complete'      // Tool (eligibility checker, software chooser) completed
  | 'comparison_view'    // Comparison table viewed
  | 'comparison_filter'  // Comparison table filtered
  | 'internal_link_click'// Internal navigation link clicked
  | 'faq_expand'         // FAQ accordion item expanded
  | 'tool_start'         // User starts a tool
```

### Event properties (EventProps)
```typescript
interface EventProps {
  label?: string     // Human-readable label
  provider?: string  // Software provider name (e.g. 'xero')
  page?: string      // Current page path
  tool?: string      // Tool name (e.g. 'eligibility-checker')
  value?: string | number  // Additional value (URL, score, etc.)
  [key: string]: unknown   // Extensible
}
```

### Typed wrapper functions
```typescript
trackEvent(name: EventName, props?: EventProps): void
trackAffiliateClick(provider: string, destination: string): void
trackToolComplete(toolName: string, result: string): void
trackCTAClick(label: string, page: string): void
trackToolStart(toolName: string): void
trackFAQExpand(question: string): void
trackComparisonView(filter?: string): void
```

---

## Where Events Are Fired

| Event | Component/Page | When fired |
|-------|---------------|------------|
| `tool_start` | `EligibilityCheckerForm` | User clicks "Check my eligibility" |
| `tool_start` | `SoftwareChooserForm` | User clicks "Find my software" |
| `tool_complete` | `EligibilityCheckerForm` | Result calculated and shown |
| `tool_complete` | `SoftwareChooserForm` | Recommendation shown |
| `faq_expand` | `FAQAccordion` | Any FAQ item opened |
| `cta_click` | `CTABlock` | Any CTA button clicked (with label + page) |
| `comparison_view` | Comparison pages | (Phase 2 — not yet wired) |
| `affiliate_click` | Review/comparison pages | (Phase 2 — not yet wired) |

---

## Key Files

| File | Purpose |
|------|---------|
| `src/lib/analytics.ts` | Analytics abstraction — connect provider here in Phase 2 |

---

## Phase 2 Integration Plan

### Step 1: Choose an analytics provider
Options:
- **Google Analytics 4 (GA4)** — most powerful, free, requires consent management
- **Plausible Analytics** — privacy-first, no cookie consent needed, paid (~£9/month)
- **PostHog** — open-source, powerful, includes session recording

Recommendation: **Plausible** for Phase 2 (privacy-first, minimal cookie consent complexity, UK-relevant data).

### Step 2: Connect to analytics.ts
```typescript
// In src/lib/analytics.ts, replace the TODO comment:

// GA4:
window.gtag?.('event', name, props)

// Plausible:
window.plausible?.(name, { props })

// PostHog:
window.posthog?.capture(name, props)
```

### Step 3: Add provider script to layout
```tsx
// In src/app/layout.tsx (for Plausible):
<Script
  defer
  data-domain="soletraderguide.co.uk"
  src="https://plausible.io/js/script.js"
/>
```

### Step 4: Set up conversion goals
In your analytics provider, set up conversion goals for:
1. `tool_complete` with `tool = eligibility-checker` — eligibility check completions
2. `tool_complete` with `tool = software-chooser` — software chooser completions
3. `affiliate_click` — any outbound affiliate click
4. `cta_click` — primary CTA clicks

### Step 5: Google Search Console
1. Verify domain at search.google.com/search-console
2. Submit sitemap: `https://soletraderguide.co.uk/sitemap.xml`
3. Monitor:
   - Coverage report (indexing errors)
   - Performance report (clicks, impressions, CTR, position)
   - Core Web Vitals report

### Step 6: Environment variables
Add to `.env.local` (and Vercel environment variables):
```
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=soletraderguide.co.uk
# or
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

---

## Conversion Measurement Framework

### Primary conversions (high value)
- `affiliate_click` — User clicks affiliate link to provider
- Tool completion followed by affiliate click (multi-step funnel)

### Secondary conversions (engagement)
- `tool_complete` — User completes eligibility checker or software chooser
- `cta_click` — User clicks primary CTA

### Engagement signals
- `faq_expand` — FAQ interactions (indicates content gaps or interest areas)
- `comparison_view` — Comparison table engagement

### Funnel to track
```
Page view
  → tool_start (eligibility or software chooser)
    → tool_complete (with result)
      → Internal link to review/comparison page
        → affiliate_click (outbound to provider)
```
