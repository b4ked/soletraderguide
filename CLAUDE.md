# SoleTraderGuide.co.uk — CLAUDE.md

This is the single authoritative context file for all AI agents working in this repository.
Read this file in full before writing any code.

---

## Project Overview

**Name:** SoleTraderGuide.co.uk
**Purpose:** UK-focused, SEO-first editorial website helping sole traders, freelancers, and landlords understand Making Tax Digital (MTD) for Income Tax and compare accounting software options.
**Domain:** soletraderguide.co.uk
**Repo:** https://github.com/b4ked/soletraderguide
**Status:** Phase 1 COMPLETE — Phase 2 in progress

The site is:
- A trusted, practical, SEO-led resource for UK sole traders
- Monetised through affiliate referrals to MTD software providers
- Hosted on Vercel (upgrading from Hobby to Pro before launch)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| Components | Radix UI / shadcn/ui (customised) |
| Icons | Lucide React |
| Content | MDX via `next-mdx-remote` + `gray-matter` (blog); static TSX (guides/pages) |
| Analytics | Abstraction layer in `src/lib/analytics.ts` — connect provider in Phase 2 |
| Deployment | Vercel |

> **Next.js version note:** This project uses Next.js 16 with App Router. APIs, conventions, and file structure may differ from older versions. Read `node_modules/next/dist/docs/` before writing any Next.js-specific code. Heed all deprecation notices.

---

## Architecture

```
soletraderguide/
├── src/
│   ├── app/                    # Next.js App Router pages and route handlers
│   │   ├── layout.tsx          # Root layout (header, footer, fonts, OrganisationSchema)
│   │   ├── page.tsx            # Homepage
│   │   ├── sitemap.ts          # Sitemap route handler (dynamic — includes MDX posts)
│   │   ├── robots.ts           # Robots route handler
│   │   ├── blog/               # Blog hub + [slug] dynamic MDX route
│   │   ├── tools/              # Interactive tool pages
│   │   ├── mtd-for-sole-traders/ # Guide pages
│   │   ├── software/           # Software hub and comparison pages
│   │   ├── reviews/            # Provider review pages
│   │   ├── comparisons/        # Comparison pages
│   │   └── [legal pages]/      # about, privacy-policy, terms-and-conditions, etc.
│   ├── components/
│   │   ├── common/             # CTABlock, FAQAccordion, InfoCallout, HeroSection, etc.
│   │   ├── layout/             # Header, Footer, Breadcrumbs
│   │   ├── seo/                # JsonLd, FAQSchema, ArticleSchema, OrganisationSchema
│   │   ├── comparison/         # ComparisonTable, ProviderCard, ProsConsList, QuickVerdict
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
│   │   ├── content.ts          # getPostBySlug(), getAllPosts() — MDX reading utilities
│   │   ├── content-utils.ts    # formatDate() and other helpers
│   │   └── utils.ts            # Tailwind cn() utility
│   └── types/index.ts          # All shared TypeScript types
├── public/                     # Static assets, robots.txt
└── CLAUDE.md                   # This file — single source of truth for all agents
```

---

## URL Structure (All Routes)

```
/                                     Homepage
/mtd-for-sole-traders/               MTD guide hub
  /what-is-mtd-income-tax
  /am-i-affected
  /deadlines
  /records-you-need-to-keep
  /spreadsheets
  /sole-trader-and-landlord-income
/software/                           Software hub
  /best-mtd-software-for-sole-traders
  /best-free-mtd-software
  /cheapest-mtd-software
  /best-mtd-software-for-spreadsheet-users
/reviews/                            Review hub
  /xero  /quickbooks  /sage  /freeagent
/comparisons/
  /xero-vs-quickbooks  /xero-vs-freeagent  /quickbooks-vs-sage  /free-vs-paid-mtd-software
/tools/
  /mtd-eligibility-checker  /mtd-software-chooser
/blog/[slug]                         Dynamic MDX route
/about  /editorial-policy  /affiliate-disclosure
/privacy-policy  /terms-and-conditions  /contact  /sources-methodology
```

---

## Key Data Files

| File | Purpose |
|------|---------|
| `src/data/providers/index.ts` | Provider data — all fields defined in `Provider` type |
| `src/data/site-config.ts` | Site metadata, MTD thresholds, quarterly deadlines |
| `src/data/navigation.ts` | Primary nav and footer nav items |
| `src/content/blog/*.mdx` | Blog post content files |

## Key Library Files

| File | Purpose |
|------|---------|
| `src/lib/metadata.ts` | `generateMetadata()` and `generateArticleMetadata()` |
| `src/lib/analytics.ts` | Event tracking abstraction |
| `src/lib/content.ts` | `getPostBySlug()`, `getAllPosts()`, `getAllSlugs()` |
| `src/lib/content-utils.ts` | `formatDate()` and other helpers |

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
10. **UK English throughout** — colour, recognise, authorise, organisation, licence (noun).
11. **Always run `npm run build` before committing any code changes.**

### Page template pattern

```tsx
import { generateMetadata as buildMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = buildMetadata({
  title: 'Page Title',
  description: 'Meta description — 150–160 characters.',
  canonicalPath: '/path/to/page',
  pageType: 'guide | review | comparison | tool | hub | legal',
})

export default function MyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-8 sm:py-12">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Page Title' }]} />
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">...</h1>
      {/* H2 content sections */}
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
title: "Post title here — include primary keyword"       # required, under 60 chars
description: "Meta description here — 150 to 160 chars"  # required, keyword-first
publishedAt: "YYYY-MM-DD"                                # required
updatedAt: "YYYY-MM-DD"                                  # required
author: "SoleTraderGuide Editorial Team"                 # required
category: "mtd-news | software-guides | tax-tips | mtd-guides"  # required
tags: ["tag1", "tag2", "tag3"]                           # required, 2–5 tags
readingTime: "X min read"                                # required
affiliateDisclosure: false                               # required, boolean
cta:                                                     # optional
  heading: "CTA heading here"
  description: "One sentence description"
  primaryLabel: "Button label"
  primaryHref: "/tools/mtd-eligibility-checker"
  secondaryLabel: "Button label"
  secondaryHref: "/comparisons"
faqs:                                                    # optional, 3–5 recommended
  - question: "Question?"
    answer: "Full answer in plain English."
relatedPosts:                                            # optional, 2 recommended
  - title: "Related post title"
    href: "/blog/related-post-slug"
---
```

Blog posts are MDX files in `src/content/blog/`. Filename = slug + `.mdx`. The dynamic route at `src/app/blog/[slug]/page.tsx` renders all posts. Hub and sitemap update automatically.

### MDX body conventions

- Use `##` for H2, `###` for H3 — never `#` (H1 is rendered by template)
- Use `<InfoCallout type="info|warning|tip|deadline" title="...">` for callout boxes
- `<InfoCallout>` is the only JSX needed in the body — FAQs, CTAs, related posts come from frontmatter
- UK English throughout
- Standard markdown links: `[text](/path)` for internal links (always direct, not via redirect)

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

### Typography

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

### Spacing

Page container: `max-w-3xl` (articles/tools) / `max-w-4xl` (wider layouts)
Page padding: `px-4 sm:px-6` | Section spacing: `mt-10` to `mt-14` | Card: `p-6`

### Component library

**Layout:** `<Breadcrumbs>`, `<Header>`, `<Footer>`

**Content:** `<InfoCallout type="info|warning|tip|deadline" title="...">`, `<CTABlock heading primaryCta secondaryCta variant="brand|soft">`, `<FAQAccordion faqs headingLevel>`, `<HeroSection>`, `<GuideCard>`, `<BlogCard>`, `<SectionHeader>`

**SEO:** `<ArticleSchema>`, `<FAQSchema>`, `<JsonLd>`, `<OrganisationSchema>` (in layout.tsx)

**Trust:** `<AffiliateDisclosure variant="inline|block">`, `<LastUpdated date>`, `<ReviewedBy>`, `<EditorialNote>`, `<SourceList sources>`

**Comparison:** `<ComparisonTable>`, `<ProviderCard>`, `<ProsConsList>`, `<QuickVerdict>`

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

### Voice and tone
- Plain English for a non-accountant audience
- Factual, balanced, never promotional
- Practical and action-oriented; honest about trade-offs
- UK English: colour, recognise, authorise, organisation, licence (noun)
- Prices in GBP (£), dates in UK format (6 April 2026)
- ~800–2,000 words per blog post

### MTD key facts (HMRC-verified)

| Phase | Threshold | Mandatory from |
|---|---|---|
| Phase 1 | Over £50,000 qualifying income | April 2026 |
| Phase 2 | Over £30,000 qualifying income | April 2027 |
| Phase 3 | Over £20,000 qualifying income | April 2028 |

Qualifying income = gross self-employment + UK property income (before expenses).
PAYE, dividends, and savings interest do NOT count.

Quarterly deadlines: Q1 7 Aug, Q2 7 Nov, Q3 7 Feb, Q4 7 May

Do not modify provider pricing in `src/data/providers/index.ts` without verifying against provider websites.

### Page layout templates

**Guide page:** Breadcrumbs → H1 → Intro → InfoCallout (optional) → H2 sections → CTABlock → FAQAccordion → LastUpdated

**Blog post:** Breadcrumbs → Category badge → H1 → Byline + LastUpdated → AffiliateDisclosure (if commercial) → H2 sections → CTABlock → FAQAccordion → Related posts → LastUpdated

**Tool page:** Breadcrumbs → H1 → Intro → AffiliateDisclosure inline → InfoCallout type="info" → Tool form → "What to Do Next" → FAQAccordion → CTABlock → LastUpdated

**Review page:** Breadcrumbs → H1 → AffiliateDisclosure banner → Score + verdict → Pros/cons → Pricing → Features → CTABlock → FAQAccordion → AffiliateDisclosure footer → LastUpdated

**Legal page:** Breadcrumbs → H1 → Intro → InfoCallout type="warning" (if needed) → H2 sections → LastUpdated

---

## SEO Conventions

- Title format: `[Page Title] | SoleTraderGuide` — 50–60 chars, keyword-rich
- Description: 150–160 chars, keyword within first 120 chars, written for humans
- Canonical URLs: `https://soletraderguide.co.uk[path]`
- No trailing slashes (`trailingSlash: false` in next.config.ts)

### Structured data requirements

| Page type | Schema required |
|---|---|
| Blog post / Guide | ArticleSchema + FAQSchema (if FAQs) + BreadcrumbSchema |
| Review | ArticleSchema + BreadcrumbSchema |
| Comparison | BreadcrumbSchema |
| Tool | BreadcrumbSchema |
| Hub | BreadcrumbSchema |
| Homepage | OrganisationSchema (in layout.tsx — already present) |

### Sitemap
`src/app/sitemap.ts` — dynamic, includes all static routes + all MDX blog posts via `getAllPosts()`.
Add new non-dynamic pages manually to `src/app/sitemap.ts`.

---

## Analytics Event Taxonomy

All event names: `snake_case`

| Event | Fired in | Props |
|-------|----------|-------|
| `tool_start` | Both tool forms | `{ tool: string }` |
| `tool_complete` | Both tool forms | `{ tool: string, value: string }` |
| `faq_expand` | `FAQAccordion` | `{ label: string }` |
| `cta_click` | `CTABlock` | `{ label: string, page: string }` |
| `affiliate_click` | Review/comparison pages | `{ provider: string }` (Phase 2) |

Phase 2: connect `src/lib/analytics.ts` to Plausible Analytics (recommended over GA4 for UK privacy).

---

## Affiliate Conventions

- Affiliate relationships: Xero, QuickBooks, Sage, FreeAgent
- Affiliate URLs in `affiliateLink` field in `src/data/providers/index.ts`
- Links always use `rel="noopener sponsored"` + `target="_blank"`
- Editorial independence maintained — ratings separate from affiliate relationships

---

## File Naming Conventions

| File type | Convention | Example |
|---|---|---|
| Blog MDX | `kebab-case.mdx` | `mtd-software-options-explained.mdx` |
| Page routes | Next.js App Router convention | `src/app/blog/[slug]/page.tsx` |
| Components | PascalCase | `InfoCallout.tsx` |
| Utilities | camelCase | `content.ts`, `metadata.ts` |
| Data files | kebab-case | `site-config.ts`, `providers/index.ts` |

---

## Build and Dev Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build — run before any commit
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Phase 2 TODOs

- [ ] Real analytics provider (Plausible recommended) — connect in `src/lib/analytics.ts`
- [ ] Author profile pages with credentials
- [ ] More software providers (Absolute Bridging, HMRC free tools, Coconut, Ember)
- [ ] Review + AggregateRating schema on review pages
- [ ] `next/image` for all provider logos (currently missing — OG image placeholder too)
- [ ] Email capture / newsletter integration
- [ ] Automated Lighthouse CI in build pipeline
- [ ] Google Search Console setup and monitoring
- [ ] Cookie consent banner (required once analytics added)
- [ ] Legal review of Privacy Policy and T&Cs (HIGH — before significant traffic)
- [ ] Dark mode

---

## Agentic Workflow

### Core principle

When given a task that spans multiple areas of the site, **spawn multiple subagents in parallel** using the Task tool. Each agent works independently on its scope, then a QA/Reviewer Agent verifies the build.

Do not do everything sequentially in one context. Parallelise wherever work is independent.

### Agent types

#### Write-Up Agent
- **Scope:** Creates new blog content as `.mdx` files
- **Files:** `src/content/blog/*.mdx`
- **Output:** MDX files conforming to the frontmatter schema above
- **Conventions:** UK English, 800–2,000 words, `<InfoCallout>` where appropriate, `affiliateDisclosure: true` on posts mentioning paid software
- **Does not modify:** TypeScript, components, or layout files
- **Spawning pattern:** One agent per post — multiple Write-Up Agents run in parallel for batch content

#### Frontend / Build Agent
- **Scope:** Page TSX, components, layout
- **Files:** `src/app/**/*.tsx`, `src/components/**/*.tsx`
- **Conventions:** Server Components by default; `"use client"` only for interactive; `@/` imports; `generateMetadata()` on every page; page layout templates above
- **Must include on every page:** Breadcrumbs, LastUpdated, AffiliateDisclosure (commercial), FAQAccordion, CTABlock
- **Does not modify:** Data files, MDX content files

#### Data Agent
- **Scope:** Provider data, site config, navigation, TypeScript types
- **Files:** `src/data/`, `src/types/index.ts`
- **Conventions:** Extend `Provider` type for new fields; update `allProviders` array; keep MTD facts HMRC-verified; verify provider pricing before updating
- **Usually sequential** — data changes often unblock frontend work

#### SEO Agent
- **Scope:** Metadata correctness, structured data, sitemap, robots
- **Files:** `src/lib/metadata.ts`, `src/app/sitemap.ts`, `src/app/robots.ts`, `src/components/seo/`
- **Checks after frontend changes:** All pages have `generateMetadata()`, canonical set, correct schema type, sitemap updated
- **Run after:** Frontend Agent completes

#### QA / Reviewer Agent
- **Scope:** Build verification, linting, SEO checklist, conventions audit
- **Skill:** `/review` — invoke this skill to load the full QA checklist and output format (`.claude/commands/review.md`)
- **Commands:** `npm run build` then `npm run lint`
- **Checks:** No TypeScript errors, no ESLint errors, all imports resolve, SEO checklist passes
- **Always runs last** — must pass before any commit is made
- **Output:** Structured pass/fail report per checklist item; flag issues for Build Agent to fix
- **How to invoke:** When spawning the QA/Reviewer Agent via Task, instruct it to run `/review` at the start of its work. The skill contains the full 9-domain checklist, scoping rules by change type, output format, and all files to read.

### Parallel agent patterns

#### Building a new page

```
PARALLEL:
  → Frontend/Build Agent: build page.tsx with all required components
  → SEO Agent: verify metadata and schema match existing pages

THEN SEQUENTIAL:
  → QA/Reviewer Agent: npm run build && npm run lint
```

#### Content pipeline — multiple blog posts

```
PARALLEL (one agent per post):
  → Write-Up Agent: write post-1.mdx
  → Write-Up Agent: write post-2.mdx
  → Write-Up Agent: write post-3.mdx

THEN SEQUENTIAL:
  → QA/Reviewer Agent: npm run build (verify all MDX frontmatter is valid)
```

#### Adding a new software provider

```
SEQUENTIAL:
  → Data Agent: add provider to src/data/providers/index.ts + update types

THEN PARALLEL:
  → Frontend/Build Agent A: create /reviews/[provider]/page.tsx
  → Frontend/Build Agent B: update /software/ pages
  → Frontend/Build Agent C: update /comparisons/ pages

THEN SEQUENTIAL:
  → SEO Agent: update sitemap, check metadata on new pages
  → QA/Reviewer Agent: npm run build && npm run lint
```

#### Site-wide convention update

```
PARALLEL (by section):
  → Frontend/Build Agent A: update guide pages
  → Frontend/Build Agent B: update review pages
  → Frontend/Build Agent C: update comparison pages

THEN SEQUENTIAL:
  → QA/Reviewer Agent: npm run build && npm run lint
```

### Agent task prompt format

When spawning a subagent via Task, include:

```
You are a [Agent Type] for SoleTraderGuide.co.uk (Next.js 16, TypeScript, Tailwind CSS v4).

TASK: [Specific task description]

KEY FILES TO READ/MODIFY:
- [List relevant files]

CONVENTIONS TO FOLLOW:
- [Paste relevant section from this CLAUDE.md]

COMPLETE WHEN:
- [Specific acceptance criteria]
- npm run build passes (if code changes made)
```

### QA / Reviewer checklist (run on every page before commit)

> **Full checklist is in `.claude/commands/review.md`** — invoke via `/review` skill.
> The skill contains 9 domain checklists, scoping rules, and output format.
> Summary items below for quick reference only.

```
[ ] generateMetadata() exported with unique title, description, canonicalPath
[ ] canonicalPath set correctly
[ ] Breadcrumbs present on all non-homepage pages
[ ] Single H1, logical H2 hierarchy
[ ] ArticleSchema on blog/guide pages; FAQSchema if FAQs present
[ ] Open Graph type set correctly (website vs article)
[ ] All images use next/image with descriptive alt text
[ ] <AffiliateDisclosure /> present on commercial pages
[ ] <LastUpdated date="..."/> at bottom of content pages
[ ] <FAQAccordion /> with 3–5 relevant questions
[ ] <CTABlock /> at end of content
[ ] All imports use @/ alias
[ ] No "use client" on page files (only on child components)
[ ] Page listed in src/app/sitemap.ts (non-dynamic pages)
[ ] UK English throughout
[ ] MTD facts correct (£50k/Apr 2026, £30k/Apr 2027, £20k/Apr 2028)
[ ] Affiliate links: rel="noopener sponsored" + target="_blank"
[ ] npm run build passes — no errors
[ ] npm run lint passes — no errors
```

---

## Internal Linking Strategy

- Blog posts → relevant guides, software pages, comparison pages, tool pages
- Guide pages → software hub, review pages, comparison pages, tools
- Review pages → comparison pages, other reviews, software hub
- Comparison pages → individual review pages, software hub
- All content pages → eligibility checker and software chooser where relevant
- Money pages (reviews, comparisons) receive links from blog and guide pages

Always use direct internal links: `href="/path"` not `href="https://soletraderguide.co.uk/path"`.

---

## Content Expansion: Step-by-Step

### Adding a new blog post
1. Write-Up Agent creates `src/content/blog/new-post-slug.mdx` with complete frontmatter
2. Reviewer Agent checks rendered page for SEO compliance
3. Hub and sitemap update automatically (no code changes needed)

### Adding a new guide page
1. Create `src/app/mtd-for-sole-traders/new-guide/page.tsx`
2. Export `generateMetadata()` with unique title, description, canonicalPath
3. Add breadcrumbs, `<ArticleSchema>`, `<FAQSchema>` if applicable
4. Add URL to `src/app/sitemap.ts`
5. Update guide hub `src/app/mtd-for-sole-traders/page.tsx` to link to it

### Adding a new review page
1. Add provider data to `src/data/providers/index.ts`
2. Create `src/app/reviews/[provider-slug]/page.tsx`
3. Use `<ComparisonTable>`, `<ProsConsList>`, `<QuickVerdict>`, `<ProviderCard>`
4. Include `<AffiliateDisclosure>` — required on all review pages
5. Add URL to `src/app/sitemap.ts`; update reviews hub

### Adding a new comparison page
1. Create `src/app/comparisons/[slug]/page.tsx`
2. Use existing comparison components
3. Include `<AffiliateDisclosure>`
4. Add URL to `src/app/sitemap.ts`; update comparisons hub

---

## What NOT to Do

- Do not add `"use client"` unless the component genuinely needs browser APIs or state
- Do not inline styles — use Tailwind classes
- Do not create new components for one-off layouts — compose existing ones
- Do not hardcode blog post arrays — the blog hub reads from the filesystem
- Do not add pages without metadata, breadcrumbs, or `<LastUpdated />`
- Do not add pages without adding them to `src/app/sitemap.ts`
- Do not commit without running `npm run build`
- Do not modify provider pricing without verifying against provider websites
- Do not use relative import paths — always use `@/`
- Do not use `#` H1 in MDX body — the template renders the title from frontmatter
