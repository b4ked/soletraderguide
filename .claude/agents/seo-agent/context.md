# SEO Agent — Context

## URL Inventory with SEO Priorities

### Tier 1: High priority (0.8–1.0)
High commercial intent. These pages should rank for competitive terms.

| URL | Priority | Target keywords |
|-----|----------|----------------|
| `/` | 1.0 | MTD sole trader, making tax digital sole trader UK |
| `/mtd-for-sole-traders` | 0.9 | MTD for sole traders, making tax digital income tax guide |
| `/software` | 0.9 | best MTD software, MTD accounting software UK |
| `/comparisons` | 0.9 | MTD software comparison, compare MTD software |
| `/tools/mtd-eligibility-checker` | 0.9 | MTD eligibility checker, am I affected by MTD |
| `/software/best-mtd-software-for-sole-traders` | 0.8 | best MTD software for sole traders |
| `/software/best-free-mtd-software` | 0.8 | free MTD software, best free MTD software |
| `/reviews/xero` | 0.8 | Xero review MTD, Xero sole trader review |
| `/reviews/quickbooks` | 0.8 | QuickBooks review MTD, QuickBooks sole trader |
| `/reviews/sage` | 0.8 | Sage accounting review MTD |
| `/reviews/freeagent` | 0.8 | FreeAgent review MTD, FreeAgent sole trader |
| `/comparisons/xero-vs-quickbooks` | 0.8 | Xero vs QuickBooks, Xero vs QuickBooks UK |
| `/comparisons/xero-vs-freeagent` | 0.8 | Xero vs FreeAgent |
| `/comparisons/quickbooks-vs-sage` | 0.8 | QuickBooks vs Sage |
| `/mtd-for-sole-traders/am-i-affected` | 0.8 | am I affected by MTD, MTD threshold 2026 |
| `/mtd-for-sole-traders/deadlines` | 0.8 | MTD deadlines, making tax digital deadline 2026 |
| `/mtd-for-sole-traders/what-is-mtd-income-tax` | 0.8 | what is MTD income tax, what is making tax digital |

### Tier 2: Supporting content (0.6–0.8)
Informational. Builds topical authority and feeds Tier 1 pages.

| URL | Priority | Target keywords |
|-----|----------|----------------|
| `/tools/mtd-software-chooser` | 0.8 | MTD software chooser, which MTD software |
| `/blog` | 0.8 | MTD blog, making tax digital news |
| `/mtd-for-sole-traders/records-you-need-to-keep` | 0.7 | MTD digital records, what records to keep |
| `/mtd-for-sole-traders/spreadsheets` | 0.7 | MTD spreadsheets, can I use Excel for MTD |
| `/blog/april-2026-mtd-rollout-explained` | 0.7 | MTD April 2026, MTD rollout 2026 |
| `/blog/first-quarterly-update-what-sole-traders-need-to-do` | 0.7 | MTD quarterly update, first quarterly submission |
| `/blog/mtd-software-options-explained` | 0.7 | MTD software options, bridging software MTD |
| `/blog/free-vs-paid-mtd-software` | 0.7 | free MTD software, FreeAgent free NatWest |
| `/sources-methodology` | 0.6 | (not a target keyword page — trust signal) |

### Tier 3: Trust/legal (0.4–0.5)
Should be indexed but not prioritised for keyword ranking.

| URL | Priority |
|-----|----------|
| `/about` | 0.5 |
| `/editorial-policy` | 0.5 |
| `/affiliate-disclosure` | 0.5 |
| `/contact` | 0.5 |
| `/privacy-policy` | 0.4 |
| `/terms-and-conditions` | 0.4 |

---

## Implemented Schema Types

### BreadcrumbList
Implemented in: `src/components/layout/Breadcrumbs.tsx`
Triggered by: Every non-homepage page that renders `<Breadcrumbs>`
Format:
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://soletraderguide.co.uk/" },
    { "@type": "ListItem", "position": 2, "name": "Tools", "item": "https://soletraderguide.co.uk/tools" },
    { "@type": "ListItem", "position": 3, "name": "MTD Eligibility Checker" }
  ]
}
```

### FAQPage
Implemented in: `src/components/seo/FAQSchema.tsx`
Triggered by: Every `<FAQAccordion includeSchema={true}>` (default)
Format:
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Question text",
      "acceptedAnswer": { "@type": "Answer", "text": "Answer text" }
    }
  ]
}
```

### Organisation
Implemented in: `src/components/seo/OrganisationSchema.tsx` (root layout)
Contains: site name, URL, description, logo, contact info

### Article (via OpenGraph)
Implemented via `generateArticleMetadata()` in `src/lib/metadata.ts`
Sets: `og:type = article`, `article:published_time`, `article:modified_time`, `article:author`
Applied to: All blog post pages

---

## Metadata Patterns

### Title format
`[Page Title] | SoleTraderGuide`
- Target 50–60 characters for the page title portion
- Include primary keyword naturally
- Match search intent (informational: "What is...", commercial: "Best...", tool: "...Checker")

### Description format
- 120–160 characters
- Include primary keyword in first 120 characters
- Include a clear value proposition or call to action
- No keyword stuffing

### Canonical URLs
All pages have canonical URLs set via `canonicalPath` in `generateMetadata()`.
Format: `https://soletraderguide.co.uk[path]`

---

## Phase 2 SEO Action Plan

### Immediate (Phase 2 launch)
1. Set up Google Search Console — verify domain, submit sitemap
2. Set up Google Analytics 4 or Plausible
3. Add `Review` + `AggregateRating` schema to all review pages
4. Add `Product` / `SoftwareApplication` schema to review pages
5. Implement `next/image` for all provider logos (improves LCP)

### Short term (Phase 2 month 1–2)
6. Run Lighthouse CI in build pipeline — address any CWV issues
7. Internal link audit — use GSC data to identify under-linked pages
8. Search Console query analysis — identify ranking opportunities
9. Add `HowTo` schema to step-by-step guides

### Medium term (Phase 2 month 3+)
10. Expand content based on GSC query data
11. Monitor Core Web Vitals in field data (CrUX)
12. Evaluate hreflang if content is expanded to other English-speaking markets
13. Review and update sitemap as new pages are added
