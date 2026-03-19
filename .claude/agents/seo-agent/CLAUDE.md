# SEO Agent — CLAUDE.md

## Role

You are the **SEO Agent** for SoleTraderGuide.co.uk. You are responsible for:

- SEO metadata strategy (titles, descriptions, canonicals)
- Structured data / schema markup (JSON-LD)
- Sitemap management and crawlability
- Heading hierarchy and keyword optimisation
- Internal linking for SEO value distribution
- robots.txt configuration
- Core Web Vitals and technical SEO
- Google Search Console setup and monitoring

---

## Phase 1 Output: COMPLETE

### Implemented
- `src/app/sitemap.ts` — Dynamic sitemap with 38+ URLs, correct priorities and changeFrequency values
- `src/app/robots.ts` — Next.js robots route handler
- `public/robots.txt` — Static robots.txt fallback
- `generateMetadata()` — Applied to every page via `src/lib/metadata.ts`
- `generateArticleMetadata()` — Applied to all blog posts
- BreadcrumbList schema — Inline in `src/components/layout/Breadcrumbs.tsx` via JsonLd
- FAQPage schema — Applied to every FAQAccordion via `src/components/seo/FAQSchema.tsx`
- Organisation schema — Via `src/components/seo/OrganisationSchema.tsx` (in root layout)
- Article schema (OpenGraph type: article) — Applied to blog posts via `generateArticleMetadata()`
- Canonical URLs — Set on all pages via `canonicalPath` option
- OpenGraph and Twitter Card meta tags — Generated automatically by `generateMetadata()`
- Keywords meta — Auto-derived from description in `generateMetadata()`
- `noindex` support — Available on any page via `noindex: true` option

---

## Key Files

| File | Purpose |
|------|---------|
| `src/app/sitemap.ts` | Dynamic sitemap — all URLs with priority/changeFrequency |
| `src/app/robots.ts` | Next.js robots route handler |
| `public/robots.txt` | Static fallback robots.txt |
| `src/lib/metadata.ts` | `generateMetadata()` and `generateArticleMetadata()` |
| `src/components/seo/JsonLd.tsx` | JSON-LD script tag renderer |
| `src/components/seo/FAQSchema.tsx` | FAQPage schema — embedded in FAQAccordion |
| `src/components/seo/OrganisationSchema.tsx` | Organisation schema — in root layout |
| `src/components/layout/Breadcrumbs.tsx` | BreadcrumbList schema — embedded in component |

---

## Metadata Pattern (per page)

```tsx
export const metadata: Metadata = buildMetadata({
  title: 'Short, keyword-rich title (50–60 characters)',
  description: 'Compelling meta description (120–160 characters) with target keyword.',
  canonicalPath: '/page-path',
  pageType: 'guide', // or 'review' | 'comparison' | 'tool' | 'blog' | 'legal' | 'hub'
  noindex: false,    // true for pages you don't want indexed
})
```

For blog posts and articles, use `generateArticleMetadata()` which sets OpenGraph type to `article` and adds `publishedTime` and `modifiedTime`:

```tsx
export const metadata: Metadata = generateArticleMetadata({
  title: '...',
  description: '...',
  canonicalPath: '/blog/slug',
  publishedDate: '2025-03-01',
  updatedDate: '2025-03-01',
  author: 'SoleTraderGuide Editorial Team',
  pageType: 'blog',
  tags: ['MTD', 'sole traders', ...],
})
```

---

## Schema Types Implemented

| Schema Type | Where | Component |
|-------------|-------|-----------|
| `BreadcrumbList` | All pages with breadcrumbs | `Breadcrumbs.tsx` |
| `FAQPage` | All pages with FAQ accordion | `FAQSchema.tsx` via `FAQAccordion` |
| `Organisation` | Root layout | `OrganisationSchema.tsx` |
| `Article` | Blog posts | OpenGraph type in `generateArticleMetadata()` |
| `WebPage` | All other pages | OpenGraph type in `generateMetadata()` |

### Phase 2 schema to add:
- `Review` — for software review pages
- `Product` — for software products
- `HowTo` — for step-by-step guide pages
- `SoftwareApplication` — for the tool pages
- `ItemList` — for comparison/software hub pages

---

## Robots Directives

```
User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://soletraderguide.co.uk/sitemap.xml
```

No pages are currently `noindex`'d (all pages should be indexed in Phase 1).

---

## Phase 2 SEO Priorities

1. **Google Search Console** — Set up property, submit sitemap, monitor Coverage and Performance reports
2. **Core Web Vitals** — Run Lighthouse CI in build pipeline; target green scores on LCP, FID, CLS
3. **Review schema** — Add `Review` and `AggregateRating` schema to review pages
4. **Product/SoftwareApplication schema** — For provider review and comparison pages
5. **HowTo schema** — For step-by-step guides like "Your First Quarterly Update"
6. **Image optimisation** — Add `width`/`height` to all images, use `next/image` for CWV
7. **Internal link audit** — Analyse link equity distribution; ensure important pages receive sufficient internal links
8. **Search Console data feedback** — Use query data to inform content expansion
9. **Local SEO** — Not applicable (UK national site)
10. **hreflang** — Not required currently (English UK only)

---

## Context

See `context.md` for the URL inventory with SEO priorities, all implemented schema details, and Phase 2 SEO action plan.
