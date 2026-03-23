# SoleTraderGuide.co.uk — CLAUDE.md

## Project Overview

**Name:** SoleTraderGuide.co.uk
**Purpose:** UK-focused, SEO-first editorial website helping sole traders, freelancers, and landlords understand Making Tax Digital (MTD) for Income Tax and compare accounting software options.
**Domain:** soletraderguide.co.uk
**Repo:** https://github.com/b4ked/soletraderguide
**Status:** Phase 1 COMPLETE — Phase 2 in progress

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui (customised) |
| Content | MDX files in `src/content/blog/` (blog) — static TSX (guides/pages) |
| Analytics | Abstraction layer in `src/lib/analytics.ts` — connect provider in Phase 2 |
| Deployment | Vercel |

> **Next.js version note:** This project uses Next.js 15 with App Router. APIs, conventions, and file structure may differ from older versions. Read `node_modules/next/dist/docs/` before writing any Next.js-specific code. Heed all deprecation notices.

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
│   │   ├── blog/               # Blog hub + [slug] dynamic route
│   │   ├── tools/              # Interactive tool pages
│   │   ├── mtd-for-sole-traders/ # Guide pages
│   │   ├── software/           # Software hub and comparison pages
│   │   ├── reviews/            # Provider review pages
│   │   ├── comparisons/        # Comparison pages
│   │   └── [legal pages]/      # about, privacy-policy, terms-and-conditions, etc.
│   ├── components/
│   │   ├── common/             # CTABlock, FAQAccordion, InfoCallout, HeroSection, etc.
│   │   ├── layout/             # Header, Footer, Breadcrumbs
│   │   ├── seo/                # JsonLd, FAQSchema, OrganisationSchema, etc.
│   │   ├── tools/              # EligibilityCheckerForm, SoftwareChooserForm
│   │   ├── trust/              # AffiliateDisclosure, LastUpdated, SourceList, ReviewedBy
│   │   └── ui/                 # shadcn/ui base components
│   ├── content/
│   │   └── blog/               # MDX blog posts (one file per post)
│   ├── data/
│   │   ├── providers/index.ts  # Software provider data (Xero, QuickBooks, Sage, FreeAgent)
│   │   ├── site-config.ts      # Site metadata, MTD thresholds, quarterly deadlines
│   │   └── navigation.ts       # Primary nav and footer nav
│   ├── lib/
│   │   ├── metadata.ts         # generateMetadata() and generateArticleMetadata()
│   │   ├── analytics.ts        # Event tracking abstraction
│   │   ├── content.ts          # MDX reading utilities: getPostBySlug, getAllPosts
│   │   ├── content-utils.ts    # formatDate() and other helpers
│   │   └── utils.ts            # Tailwind cn() utility
│   └── types/index.ts          # All shared TypeScript types
├── public/                     # Static assets, robots.txt
└── CLAUDE.md                   # This file — single source of truth for all agents
```

---

## All Built Routes (Phase 1)

**Homepage:** `/`

**MTD Guides (`/mtd-for-sole-traders`):**
`/mtd-for-sole-traders`, `/what-is-mtd-income-tax`, `/am-i-affected`, `/deadlines`, `/records-you-need-to-keep`, `/spreadsheets`, `/sole-trader-and-landlord-income`

**Software Hub (`/software`):**
`/software`, `/best-mtd-software-for-sole-traders`, `/best-free-mtd-software`, `/cheapest-mtd-software`, `/best-mtd-software-for-spreadsheet-users`

**Reviews (`/reviews`):**
`/reviews`, `/xero`, `/quickbooks`, `/sage`, `/freeagent`

**Comparisons (`/comparisons`):**
`/comparisons`, `/xero-vs-quickbooks`, `/xero-vs-freeagent`, `/quickbooks-vs-sage`, `/free-vs-paid-mtd-software`

**Tools (`/tools`):**
`/tools`, `/mtd-eligibility-checker`, `/mtd-software-chooser`

**Blog (`/blog`):**
`/blog`, `/blog/[slug]` — dynamic MDX route

**Legal/Trust:**
`/about`, `/editorial-policy`, `/affiliate-disclosure`, `/privacy-policy`, `/terms-and-conditions`, `/contact`, `/sources-methodology`

---

## Key Data Files

| File | Purpose |
|------|---------|
| `src/data/providers/index.ts` | Provider data — all fields defined in `Provider` type |
| `src/data/site-config.ts` | Site metadata, MTD thresholds (`£50k`/`£30k`), quarterly deadlines |
| `src/data/navigation.ts` | Primary nav and footer nav items |

## Key Library Files

| File | Purpose |
|------|---------|
| `src/lib/metadata.ts` | `generateMetadata()` and `generateArticleMetadata()` — used on every page |
| `src/lib/analytics.ts` | Event tracking abstraction — `trackEvent()`, `trackCTAClick()`, etc. |
| `src/lib/content.ts` | `getPostBySlug()`, `getAllPosts()` — MDX reading utilities |
| `src/lib/content-utils.ts` | `formatDate()` and other content helpers |

---

## Coding Conventions

1. **All pages export `generateMetadata()`** from `@/lib/metadata`. Never hardcode metadata.
2. **All commercial pages use `<AffiliateDisclosure />`** — reviews, comparisons, software pages.
3. **All content pages use `<LastUpdated />`** — pass an ISO date string.
4. **Breadcrumbs on all non-homepage pages** — `<Breadcrumbs items={[...]} />`.
5. **Server Components by default** — only use `"use client"` on interactive components.
6. **Import paths use `@/` alias** — never use relative paths like `../../components`.
7. **No CSS modules** — all styling via Tailwind utility classes.
8. **shadcn/ui components** live in `src/components/ui/` — import from there.
9. **Affiliate links:** `rel="noopener sponsored"` + `target="_blank"`.

### Page template pattern

```tsx
import { generateMetadata as buildMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = buildMetadata({
  title: '...',
  description: '...',
  canonicalPath: '/path',
  pageType: 'guide',
})

export default function MyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-8 sm:py-12">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Page Title' }]} />
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">...</h1>
      {/* content sections */}
      <section className="mt-14">
        <FAQAccordion faqs={faqs} headingLevel="h3" />
      </section>
      <CTABlock heading="..." primaryCta={{ label: '...', href: '...' }} variant="brand" />
      <div className="mt-8 border-t border-border pt-6">
        <LastUpdated date="YYYY-MM-DD" />
      </div>
    </div>
  )
}
```

### MDX blog post frontmatter schema

```yaml
---
title: "Post title"                    # required — 50–60 chars
description: "Post description"        # required — 120–160 chars
publishedDate: "YYYY-MM-DD"           # required
updatedDate: "YYYY-MM-DD"             # required
author: "SoleTraderGuide Editorial"   # required
category: "MTD News"                  # required — MTD News | Tax Tips | Software Guides | Case Studies
tags: ["tag1", "tag2"]                # required — array
featured: false                        # required — boolean
slug: "kebab-case-slug"               # required — matches filename
affiliateContent: false               # optional — boolean (triggers AffiliateDisclosure)
readingTime: "5 min read"             # optional
---
```

Blog posts are MDX files in `src/content/blog/`. Filename = slug + `.mdx`. The dynamic route at `src/app/blog/[slug]/page.tsx` renders all posts automatically.

---

## Design System

### Brand palette

```css
--brand:        #0d6e6e   /* Deep teal — primary */
--brand-dark:   #0a5a5a   /* Hover states */
--brand-light:  #e6f3f3   /* Backgrounds, badges */
--cta:          #2563eb   /* CTA blue */
--cta-hover:    #1d4ed8
```

Callout colours: `info` (blue) | `warning` (amber) | `tip` (emerald) | `deadline` (red)

### Typography scale

| Class | Usage |
|-------|-------|
| `text-4xl font-bold tracking-tight` | H1 major pages |
| `text-3xl font-bold tracking-tight` | H1 standard pages |
| `text-2xl font-bold` | H2 section headings |
| `text-xl font-bold` | H2 FAQ sections |
| `text-lg font-bold` | Card headings |
| `text-base font-semibold` | H3, card titles |
| `text-sm font-semibold` | Badges, metadata |
| `text-lg text-muted-foreground leading-relaxed` | Intro paragraphs |
| `text-base text-muted-foreground leading-relaxed` | Body text |
| `text-sm text-muted-foreground` | Supporting / metadata |

### Spacing

- Page container: `max-w-3xl` (articles/tools) or `max-w-4xl` (wider layouts)
- Page padding: `px-4 sm:px-6`
- Section spacing: `mt-10` to `mt-14`
- Card padding: `p-6` / Callout: `p-4`

### Component usage guide

| Component | When to use |
|-----------|------------|
| `CTABlock` | End of every article, between sections, end of tools |
| `InfoCallout type="info"` | Clarifications, disclaimers, good-to-know |
| `InfoCallout type="warning"` | Tax advice disclaimers, important caveats |
| `InfoCallout type="tip"` | Actionable shortcuts |
| `InfoCallout type="deadline"` | HMRC dates and deadlines |
| `FAQAccordion` | Bottom of every guide, review, tool, blog post — 3–5 questions |
| `AffiliateDisclosure variant="banner"` | Top of commercial hub pages |
| `AffiliateDisclosure variant="inline"` | Near affiliate links in article text |
| `AffiliateDisclosure variant="footer"` | Bottom of review/comparison pages |
| `LastUpdated` | Bottom of every content page |
| `Breadcrumbs` | Every non-homepage page |

---

## Content Approach

- Plain English, trustworthy tone — no marketing fluff
- MTD facts sourced from HMRC guidance (verify before updating)
- No lorem ipsum anywhere
- MTD thresholds: >£50k mandatory from April 2026, £30,001–£50k from April 2027
- Quarterly deadlines: Q1 7 Aug, Q2 7 Nov, Q3 7 Feb, Q4 7 May

### Page layout templates

**Guide page:** Breadcrumbs → H1 → Intro → InfoCallout (optional) → H2 sections → CTABlock → FAQAccordion → LastUpdated

**Blog post:** Breadcrumbs → Category badge → H1 → Byline + LastUpdated → AffiliateDisclosure (if commercial) → H2 sections → CTABlock → FAQAccordion → Related posts → LastUpdated

**Tool page:** Breadcrumbs → H1 → Intro → AffiliateDisclosure inline → InfoCallout type="info" → Tool form component → "What to Do Next" → FAQAccordion → CTABlock → LastUpdated

**Review page:** Breadcrumbs → H1 → AffiliateDisclosure banner → Score + verdict → Pros/cons → Pricing → Features → CTABlock → FAQAccordion → AffiliateDisclosure footer → LastUpdated

**Legal page:** Breadcrumbs → H1 → Intro → InfoCallout type="warning" (if disclaimer needed) → H2 sections → LastUpdated

---

## SEO Conventions

- Title format: `[Page Title] | SoleTraderGuide` — 50–60 chars, keyword-rich
- Description: 120–160 chars, keyword within first 120 chars, clear value proposition
- Canonical URLs: `https://soletraderguide.co.uk[path]`
- Schema types in use: BreadcrumbList, FAQPage, Organisation, Article (OpenGraph)
- Sitemap: `src/app/sitemap.ts` — dynamic, includes all MDX blog posts via `getAllPosts()`
- Robots: allow all, disallow `/api/`

---

## Analytics Event Taxonomy

All event names: `snake_case`

| Event | Fired in | Props |
|-------|----------|-------|
| `tool_start` | `EligibilityCheckerForm`, `SoftwareChooserForm` | `{ tool: string }` |
| `tool_complete` | Both tool forms | `{ tool: string, value: string }` |
| `faq_expand` | `FAQAccordion` | `{ label: string }` |
| `cta_click` | `CTABlock` | `{ label: string, page: string }` |
| `affiliate_click` | Review/comparison pages | `{ provider: string }` (Phase 2) |
| `comparison_view` | Comparison pages | (Phase 2) |

Phase 2: connect `src/lib/analytics.ts` to Plausible Analytics (recommended over GA4 for UK privacy).

---

## Affiliate Conventions

- Affiliate relationships: Xero, QuickBooks, Sage, FreeAgent
- Affiliate URLs stored in `affiliateLink` field in `src/data/providers/index.ts`
- Links always use `rel="noopener sponsored"` + `target="_blank"`
- Editorial independence maintained — ratings separate from affiliate relationships
- Trust components required on all commercial pages (see Component usage guide above)

---

## Build and Dev Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build — run before any commit
npm run start    # Start production server
npm run lint     # Run ESLint
```

**Always run `npm run build` before committing code changes.**

---

## Phase 2 TODOs

- [ ] Real analytics provider (Plausible recommended) — connect in `src/lib/analytics.ts`
- [ ] Author profile pages with credentials
- [ ] More software providers (Absolute Bridging, HMRC free tools, Coconut, Ember)
- [ ] Review + AggregateRating schema on review pages
- [ ] `next/image` for all provider logos (currently missing)
- [ ] Email capture / newsletter integration
- [ ] Automated Lighthouse CI in build pipeline
- [ ] Google Search Console setup and monitoring
- [ ] Cookie consent banner (required once analytics added)
- [ ] Legal review of Privacy Policy and T&Cs (HIGH — before significant traffic)
- [ ] Dark mode
- [ ] Internal link audit

---

## Agentic Workflow

### Core principle

When given a task that spans multiple areas of the site, **spawn multiple subagents in parallel** using the Task tool. Each agent works independently on its scope, then a QA Agent verifies the build at the end.

Do not do everything sequentially in one context. Parallelise wherever work is independent.

### Agent types

Define the following agent types when spawning Tasks:

#### Content Agent
- **Scope:** MDX blog posts, guide content
- **Files:** `src/content/blog/*.mdx`, MDX frontmatter schema
- **Output:** `.mdx` files conforming to the frontmatter schema above
- **Does not modify:** TSX files, data files, or components
- **Spawning pattern:** One agent per MDX file when writing multiple posts in parallel

#### Frontend Agent
- **Scope:** Page TSX, components, layout
- **Files:** `src/app/**/*.tsx`, `src/components/**/*.tsx`
- **Conventions:** Server Components by default; `"use client"` only for interactive; `@/` imports; `generateMetadata()` on every page
- **Must include:** Breadcrumbs, LastUpdated, AffiliateDisclosure (commercial), FAQAccordion
- **Does not modify:** Data files, MDX content, SEO infrastructure

#### Data Agent
- **Scope:** Provider data, site config, navigation, TypeScript types
- **Files:** `src/data/`, `src/types/index.ts`
- **Conventions:** Extend `Provider` type for new fields; update `allProviders` array; keep MTD facts HMRC-verified
- **Usually sequential** — data changes often block frontend work

#### SEO Agent
- **Scope:** Metadata, structured data, sitemap, robots
- **Files:** `src/lib/metadata.ts`, `src/app/sitemap.ts`, `src/app/robots.ts`, `src/components/seo/`
- **Checks after frontend changes:** All pages have `generateMetadata()`, canonical set, schema present, sitemap updated
- **Run after:** Frontend Agent completes

#### QA Agent
- **Scope:** Build verification, linting, conventions audit
- **Commands:** `npm run build` then `npm run lint`
- **Checks:** No TypeScript errors, no ESLint errors, all imports resolve, no missing exports
- **Always runs last** — must pass before any commit is made

### Parallel agent patterns

#### Building a new page

```
PARALLEL:
  → Frontend Agent: build page.tsx with all required components
  → SEO Agent: verify metadata pattern matches existing pages

THEN SEQUENTIAL:
  → QA Agent: npm run build && npm run lint
```

#### Content pipeline — multiple blog posts

```
PARALLEL (one agent per post):
  → Content Agent: write post-1.mdx
  → Content Agent: write post-2.mdx
  → Content Agent: write post-3.mdx

THEN SEQUENTIAL:
  → QA Agent: npm run build (verify all MDX frontmatter is valid)
```

#### Adding a new software provider

```
SEQUENTIAL:
  → Data Agent: add provider to src/data/providers/index.ts + update types

THEN PARALLEL:
  → Frontend Agent: create /reviews/[provider]/page.tsx
  → Frontend Agent: update /software/page.tsx comparison table
  → Frontend Agent: update /comparisons/ pages as needed

THEN SEQUENTIAL:
  → SEO Agent: update sitemap, check metadata on new pages
  → QA Agent: npm run build && npm run lint
```

#### Site-wide convention update

```
PARALLEL (by section):
  → Frontend Agent A: update guide pages
  → Frontend Agent B: update review pages
  → Frontend Agent C: update comparison pages

THEN SEQUENTIAL:
  → QA Agent: npm run build && npm run lint
```

### Agent task prompt format

When spawning a subagent via Task, include:

```
You are a [Agent Type] for SoleTraderGuide.co.uk.

TASK: [Specific task description]

KEY FILES:
- [List relevant files to read/modify]

CONVENTIONS:
- [Paste relevant section from CLAUDE.md]

COMPLETE WHEN:
- [Specific done criteria]
- npm run build passes (if code changes made)
```

### QA checklist (run on every page before commit)

- [ ] `generateMetadata()` exported with title, description, canonicalPath
- [ ] Breadcrumbs present (non-homepage)
- [ ] Single H1, logical H2 hierarchy
- [ ] `<LastUpdated date="..." />` at bottom
- [ ] `<AffiliateDisclosure />` present if commercial page
- [ ] `<FAQAccordion />` with 3–5 relevant questions
- [ ] `<CTABlock />` at end of content
- [ ] All imports use `@/` alias
- [ ] No `"use client"` on page files (only child components)
- [ ] `npm run build` passes with no errors
- [ ] `npm run lint` passes with no errors

---

## Deployment

Deploy to Vercel:
1. Push to GitHub
2. Vercel auto-deploys on push to `main`
3. No environment variables required for Phase 1
4. Phase 2: add `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`, CMS keys as needed
