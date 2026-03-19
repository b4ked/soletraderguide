# SoleTraderGuide.co.uk — Project CLAUDE.md

## Project Overview

**Name:** SoleTraderGuide.co.uk
**Purpose:** UK-focused, SEO-first editorial website helping sole traders, freelancers, and landlords understand Making Tax Digital (MTD) for Income Tax and compare accounting software options.
**Domain:** soletraderguide.co.uk
**Status:** Phase 1 COMPLETE

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui (customised) |
| CMS | None (Phase 1) — structured TypeScript data |
| Analytics | Abstraction layer in `src/lib/analytics.ts` — connect provider in Phase 2 |
| Deployment | Vercel (recommended) |

---

## Phase 1 Status: COMPLETE

### All Built Routes

**Homepage**
- `/` — Homepage (hero, trust signals, software cards, FAQs)

**MTD Guides (`/mtd-for-sole-traders`)**
- `/mtd-for-sole-traders` — Hub page
- `/mtd-for-sole-traders/what-is-mtd-income-tax`
- `/mtd-for-sole-traders/am-i-affected`
- `/mtd-for-sole-traders/deadlines`
- `/mtd-for-sole-traders/records-you-need-to-keep`
- `/mtd-for-sole-traders/spreadsheets`
- `/mtd-for-sole-traders/sole-trader-and-landlord-income`

**Software Hub (`/software`)**
- `/software` — Hub with best picks and comparison table
- `/software/best-mtd-software-for-sole-traders`
- `/software/best-free-mtd-software`
- `/software/cheapest-mtd-software`
- `/software/best-mtd-software-for-spreadsheet-users`

**Reviews (`/reviews`)**
- `/reviews` — Reviews hub
- `/reviews/xero`
- `/reviews/quickbooks`
- `/reviews/sage`
- `/reviews/freeagent`

**Comparisons (`/comparisons`)**
- `/comparisons` — Comparisons hub
- `/comparisons/xero-vs-quickbooks`
- `/comparisons/xero-vs-freeagent`
- `/comparisons/quickbooks-vs-sage`
- `/comparisons/free-vs-paid-mtd-software`

**Tools (`/tools`)** — Built by Pages-Agent-C
- `/tools` — Tools hub
- `/tools/mtd-eligibility-checker` — 3-step eligibility checker tool
- `/tools/mtd-software-chooser` — 5-step software recommender tool

**Blog (`/blog`)** — Built by Pages-Agent-C
- `/blog` — Blog hub with category filter
- `/blog/april-2026-mtd-rollout-explained`
- `/blog/first-quarterly-update-what-sole-traders-need-to-do`
- `/blog/mtd-software-options-explained`
- `/blog/free-vs-paid-mtd-software`

**Legal / Trust (`/about`, etc.)** — Built by Pages-Agent-C
- `/about`
- `/editorial-policy`
- `/affiliate-disclosure`
- `/privacy-policy`
- `/terms-and-conditions`
- `/contact`
- `/sources-methodology`

**SEO Infrastructure** — Built by Pages-Agent-C
- `src/app/sitemap.ts` — Dynamic sitemap (40+ URLs)
- `src/app/robots.ts` — Next.js robots route handler
- `public/robots.txt` — Static robots.txt fallback

---

## Architecture Overview

```
soletraderguide/
├── src/
│   ├── app/                    # Next.js App Router pages and route handlers
│   │   ├── layout.tsx          # Root layout (header, footer, fonts)
│   │   ├── page.tsx            # Homepage
│   │   ├── sitemap.ts          # Sitemap route handler
│   │   ├── robots.ts           # Robots route handler
│   │   ├── tools/              # Tool pages
│   │   ├── blog/               # Blog pages
│   │   ├── mtd-for-sole-traders/ # Guide pages
│   │   ├── software/           # Software hub and comparison pages
│   │   ├── reviews/            # Provider review pages
│   │   ├── comparisons/        # Comparison pages
│   │   ├── about/              # About page
│   │   ├── editorial-policy/   # Editorial policy
│   │   ├── affiliate-disclosure/
│   │   ├── privacy-policy/
│   │   ├── terms-and-conditions/
│   │   ├── contact/
│   │   └── sources-methodology/
│   ├── components/             # Reusable UI components
│   │   ├── common/             # Shared content components (CTABlock, FAQAccordion, etc.)
│   │   ├── layout/             # Layout components (Header, Footer, Breadcrumbs)
│   │   ├── seo/                # SEO components (JsonLd, FAQSchema, etc.)
│   │   ├── tools/              # Tool components (EligibilityCheckerForm, SoftwareChooserForm)
│   │   ├── trust/              # Trust components (AffiliateDisclosure, LastUpdated, SourceList)
│   │   └── ui/                 # shadcn/ui base components
│   ├── data/                   # Structured TypeScript data
│   │   ├── providers/          # Software provider data (index.ts)
│   │   ├── site-config.ts      # Site-wide config and MTD config constants
│   │   └── navigation.ts       # Navigation structure
│   ├── lib/                    # Utility functions
│   │   ├── metadata.ts         # generateMetadata() and generateArticleMetadata()
│   │   ├── analytics.ts        # Analytics abstraction layer
│   │   ├── content-utils.ts    # Content helpers (formatDate, etc.)
│   │   └── utils.ts            # Tailwind cn() utility
│   └── types/                  # TypeScript type definitions
│       └── index.ts            # All shared types
├── public/                     # Static assets
│   └── robots.txt              # Static robots.txt
└── .claude/                    # Agent context files
    ├── CLAUDE.md               # This file — top-level project context
    └── agents/                 # Per-agent context directories
```

---

## Design System

**Brand palette:**
- Primary (deep teal): `#0d6e6e` — CSS var `--brand`
- CTA blue: `#2563eb` — CSS var `--cta`
- Brand light (pale teal bg): CSS var `--brand-light`
- Brand dark: CSS var `--brand-dark`
- Background: white / `--muted` (light grey)
- Text: `--foreground` / `--muted-foreground`

**Typography:**
- Body: System font stack (or Geist when available)
- Headings: `font-bold`, tracking-tight
- UI labels: `font-semibold`, small size

**Tone:** Professional, calm, trustworthy. Clear over clever. Plain English throughout.

---

## Key Data Files

| File | Purpose |
|------|---------|
| `src/data/providers/index.ts` | Provider data (Xero, QuickBooks, Sage, FreeAgent) — all fields defined in `Provider` type |
| `src/data/site-config.ts` | Site metadata, MTD thresholds, quarterly deadlines |
| `src/data/navigation.ts` | Primary nav and footer nav items |

---

## Key Library Files

| File | Purpose |
|------|---------|
| `src/lib/metadata.ts` | `generateMetadata()` and `generateArticleMetadata()` — used on every page |
| `src/lib/analytics.ts` | Event tracking abstraction — `trackEvent()`, `trackCTAClick()`, etc. |
| `src/lib/content-utils.ts` | `formatDate()` and other content helpers |

---

## Important Conventions

1. **All pages use `generateMetadata()`** — exported from `@/lib/metadata`. Never hardcode metadata.
2. **All commercial pages use `<AffiliateDisclosure />`** — reviews, comparisons, software pages.
3. **All content pages use `<LastUpdated />`** — pass an ISO date string.
4. **Breadcrumbs on all non-homepage pages** — use `<Breadcrumbs items={[...]} />`.
5. **Server Components by default** — only use `"use client"` on interactive components.
6. **Import paths use `@/` alias** — never use relative paths like `../../components`.
7. **No CSS modules** — all styling via Tailwind utility classes.
8. **shadcn/ui components** live in `src/components/ui/` — import from there.

---

## Content Approach

- Phase 1 content is realistic placeholder content aligned to MTD facts.
- Phase 2 should replace placeholder content with fully researched editorial content.
- All MTD facts (thresholds, deadlines, dates) are sourced from HMRC guidance.
- No lorem ipsum anywhere in the codebase.

---

## Affiliate Approach

- Transparent disclosure on all commercial pages.
- `<AffiliateDisclosure variant="banner" />` at the top of commercial hub pages.
- `<AffiliateDisclosure variant="inline" />` near affiliate links in articles.
- All affiliate links use `rel="noopener sponsored"`.
- Affiliate relationships: Xero, QuickBooks, Sage, FreeAgent.

---

## Phase 2 TODOs

- [ ] MDX integration for blog posts and guide pages (replace static pages)
- [ ] CMS integration (Contentful or Sanity) for editorial content management
- [ ] Real analytics provider (GA4 or Plausible) — connect in `src/lib/analytics.ts`
- [ ] More software providers (Absolute Bridging, HMRC free tools, etc.)
- [ ] Author profile pages with credentials
- [ ] Email capture / newsletter integration
- [ ] Search functionality (Algolia or local)
- [ ] User accounts (optional — for saving tool results)
- [ ] Dark mode
- [ ] Automated Lighthouse CI in build pipeline
- [ ] Google Search Console setup and monitoring

---

## Build and Dev Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Deployment

Deploy to Vercel (recommended):
1. Push to GitHub
2. Connect repository in Vercel dashboard
3. Set environment variables (none required in Phase 1)
4. Deploy — Vercel auto-detects Next.js and configures correctly

No environment variables are required in Phase 1.
