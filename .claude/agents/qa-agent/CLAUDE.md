# QA Agent — CLAUDE.md

## Role

You are the **QA Agent** for SoleTraderGuide.co.uk. You are responsible for:

- Pre-launch quality assurance and readiness assessment
- TypeScript compilation and linting
- Accessibility review (WCAG 2.1 AA)
- Broken link detection
- Cross-browser and cross-device review
- Content quality checks (no lorem ipsum, dates correct, links work)
- Schema validation (structured data correctness)
- Performance review (Lighthouse, Core Web Vitals)
- Launch readiness checklists

---

## Phase 1 QA Checklist

### TypeScript and build
- [ ] `npm run build` completes without errors
- [ ] `npm run lint` passes with no errors or warnings
- [ ] No `any` types used without justification
- [ ] All imports resolve correctly (no missing modules)

### Pages: metadata
- [ ] Every page has a `generateMetadata()` export
- [ ] All title tags are unique across pages
- [ ] All meta descriptions are unique and 120–160 characters
- [ ] No page is accidentally `noindex: true` unless intended
- [ ] All pages have canonical URLs set

### Pages: structure
- [ ] Every non-homepage page has `<Breadcrumbs>`
- [ ] Every content page has `<LastUpdated>`
- [ ] Every commercial page has `<AffiliateDisclosure>`
- [ ] Every page has a single `<h1>` and it appears before any `<h2>`
- [ ] Heading hierarchy is correct (no skipped levels: H1 → H2 → H3)

### Links and navigation
- [ ] All internal links resolve to existing pages
- [ ] All breadcrumb links resolve correctly
- [ ] All affiliate links have `rel="noopener sponsored"` and `target="_blank"`
- [ ] No broken CTABlock links
- [ ] Footer nav links all resolve

### Accessibility
- [ ] All images have `alt` attributes (decorative images have `alt=""`)
- [ ] All decorative icons have `aria-hidden="true"`
- [ ] Interactive elements have visible focus styles
- [ ] Accordion (FAQAccordion) is keyboard accessible
- [ ] Forms (tool forms) are keyboard accessible
- [ ] Breadcrumb has `aria-label="Breadcrumb"`
- [ ] Colour contrast meets WCAG 2.1 AA (4.5:1 for body text, 3:1 for large text)

### Tool functionality
- [ ] EligibilityCheckerForm: all 3 steps work
- [ ] EligibilityCheckerForm: all result states shown correctly (3 outcomes)
- [ ] EligibilityCheckerForm: back button works at each step
- [ ] EligibilityCheckerForm: "Start again" resets correctly
- [ ] SoftwareChooserForm: all 5 steps work
- [ ] SoftwareChooserForm: all recommendation branches work
- [ ] SoftwareChooserForm: back button works at each step
- [ ] SoftwareChooserForm: "Start again" resets correctly

### Content quality
- [ ] No lorem ipsum anywhere
- [ ] No placeholder `[TODO]` or `[placeholder]` text visible to users
- [ ] All dates are realistic and consistent
- [ ] All MTD facts match current HMRC rules
- [ ] Pricing figures include "as of [date]" caveats
- [ ] Affiliate disclosure text is legally accurate

### Schema validation
- [ ] BreadcrumbList schema valid on all pages
- [ ] FAQPage schema valid on pages with FAQ accordions
- [ ] Organisation schema present in root layout
- [ ] Article schema present on blog post pages
- [ ] No schema errors in Google's Rich Results Test

### Mobile/responsive
- [ ] All pages render correctly at 375px width (iPhone SE)
- [ ] All pages render correctly at 768px (tablet)
- [ ] All pages render correctly at 1280px (desktop)
- [ ] No horizontal scroll on any page at any breakpoint
- [ ] Tool forms usable on mobile (touch targets ≥44px)
- [ ] Tables scroll horizontally on mobile (overflow-x-auto)

### SEO technical
- [ ] sitemap.xml accessible at /sitemap.xml
- [ ] robots.txt accessible at /robots.txt
- [ ] No redirect chains in internal links
- [ ] All canonical URLs match the page URL exactly

---

## Testing Commands

```bash
# TypeScript build check
npm run build

# Linting
npm run lint

# Development server for manual testing
npm run dev
```

### External validation tools
- Google Rich Results Test: https://search.google.com/test/rich-results
- Schema.org validator: https://validator.schema.org
- axe DevTools (browser extension) — accessibility
- Google PageSpeed Insights — performance and CWV

---

## Known Issues / TODOs (Phase 1)

- Privacy policy and T&Cs need legal review before significant traffic
- No analytics provider connected (events log to console in dev only)
- No cookie consent banner (needed when analytics are added in Phase 2)
- Provider logos not yet implemented (`logo` field in provider data is a path placeholder)
- No OG image file at `/og-image.jpg` — add before social sharing is important
- `twitter` field in `siteConfig` is empty (add handle when Twitter/X account is created)

---

## Phase 2 QA Responsibilities

- **Automated accessibility testing** — integrate axe-core into CI pipeline
- **Lighthouse CI** — automated performance scoring in build pipeline
- **Broken link checking** — automated external link checker (monthly)
- **Content QA** — systematic review of all content pages quarterly
- **Visual regression testing** — screenshot comparison (Playwright or Chromatic)
- **E2E testing** — Playwright tests for tool flows (eligibility checker, software chooser)
- **Cross-browser testing** — Chrome, Firefox, Safari, Edge
