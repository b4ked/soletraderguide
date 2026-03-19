# Analytics Agent — Context

## Event Naming Conventions

All event names follow `snake_case`. Events are grouped by user action type:

### Tool events
- `tool_start` — fired when user begins interacting with a tool
- `tool_complete` — fired when tool produces a result

### Navigation events
- `cta_click` — any primary or secondary CTA button clicked
- `internal_link_click` — internal navigation (Phase 2)
- `affiliate_click` — outbound link to a software provider

### Content engagement events
- `faq_expand` — FAQ accordion item opened
- `comparison_view` — comparison table rendered/visible
- `comparison_filter` — comparison table filter applied

---

## Event Property Reference

Each event can carry optional properties:

| Property | Type | Examples |
|----------|------|---------|
| `label` | string | CTA label ("Check my eligibility"), FAQ question text |
| `provider` | string | "xero", "quickbooks", "freeagent", "sage" |
| `page` | string | Current page path ("/tools/mtd-eligibility-checker") |
| `tool` | string | "eligibility-checker", "software-chooser" |
| `value` | string / number | Affiliate URL, recommendation score |

---

## Current Event Wiring (Phase 1)

### Wired and firing in Phase 1

| Event | Fired in | Props |
|-------|----------|-------|
| `tool_start` | `EligibilityCheckerForm` | `{ tool: 'eligibility-checker' }` |
| `tool_complete` | `EligibilityCheckerForm` | `{ tool: 'eligibility-checker', value: result.message }` |
| `tool_start` | `SoftwareChooserForm` | `{ tool: 'software-chooser' }` |
| `tool_complete` | `SoftwareChooserForm` | `{ tool: 'software-chooser', value: rec.provider }` |
| `faq_expand` | `FAQAccordion` (every instance) | `{ label: faq.question }` |
| `cta_click` | `CTABlock` (every instance) | `{ label: primaryCta.label, page: pathname }` |

### Not yet wired (Phase 2)

| Event | Where to wire |
|-------|--------------|
| `affiliate_click` | Review pages, comparison pages — on "Visit [Provider]" button clicks |
| `comparison_view` | Comparison table component — on mount/visibility |
| `comparison_filter` | Comparison filter component — on filter change |
| `internal_link_click` | Key internal navigation (optional — may not be worth the noise) |

---

## Phase 2 Integration Plan

### Analytics provider decision matrix

| Provider | Cost | Privacy | Cookie consent needed | UK data |
|----------|------|---------|----------------------|---------|
| Google Analytics 4 | Free | Low | Yes | Partial |
| Plausible Analytics | £9/month | High | No | Yes |
| PostHog (cloud) | Free tier | Medium | Depends | EU |
| Fathom | £14/month | High | No | Yes |

**Recommendation:** Plausible Analytics for Phase 2. Reasons:
- No cookie consent banner required (significant UX win)
- UK/EU compliant without complex configuration
- Simple dashboard focused on key metrics
- Supports custom events with props
- Flat-rate pricing, scales well

### Integration code (Plausible)

1. Install Plausible script in `src/app/layout.tsx`:
```tsx
import Script from 'next/script'

// In layout:
<Script
  defer
  data-domain="soletraderguide.co.uk"
  src="https://plausible.io/js/script.js"
/>
```

2. Update `src/lib/analytics.ts` to call Plausible:
```typescript
// Replace the TODO comment with:
if (process.env.NODE_ENV === 'production') {
  window.plausible?.(name, { props: props as Record<string, string | number | boolean> })
}
```

3. Declare Plausible type globally in `src/types/index.ts` or a separate `global.d.ts`:
```typescript
declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string | number | boolean> }) => void
  }
}
```

### Google Search Console setup

1. Add site at search.google.com/search-console
2. Verify using HTML file method or DNS verification
3. Submit sitemap: `https://soletraderguide.co.uk/sitemap.xml`
4. Monitor weekly for first 3 months, then monthly

### Key dashboards to set up

**Plausible dashboard custom goals:**
- Goal: `tool_complete` where `tool = eligibility-checker`
- Goal: `tool_complete` where `tool = software-chooser`
- Goal: `affiliate_click`
- Goal: `cta_click`

**Search Console monitoring:**
- Page indexing coverage (target: all 38 pages indexed)
- Top queries by impression (keyword opportunities)
- Pages with >100 impressions but <2% CTR (title/description optimisation candidates)
- Core Web Vitals field data (once sufficient traffic)
