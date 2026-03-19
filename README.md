# SoleTraderGuide.co.uk

A UK-focused, SEO-first website helping sole traders understand Making Tax Digital (MTD) for Income Tax and compare software options.

## Phase 1 Status: Complete

All pages, components, and infrastructure for Phase 1 are built and ready for launch.

### Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui (customised)
- **Data:** Structured TypeScript (no CMS in Phase 1)
- **Analytics:** Abstraction layer ready — connect provider in Phase 2
- **Deployment:** Vercel (recommended)

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## Project Structure

```
soletraderguide/
├── public/
│   ├── robots.txt              # Static robots.txt
│   └── (logos, og-image, etc.) # Static assets
│
├── src/
│   ├── app/                    # Next.js App Router pages and route handlers
│   │   ├── layout.tsx          # Root layout (header, footer, global styles)
│   │   ├── page.tsx            # Homepage
│   │   ├── sitemap.ts          # /sitemap.xml — dynamic sitemap
│   │   ├── robots.ts           # /robots.txt — Next.js route handler
│   │   │
│   │   ├── mtd-for-sole-traders/   # MTD guides hub + individual guides
│   │   ├── software/               # Software hub + best-of pages
│   │   ├── reviews/                # Provider review pages
│   │   ├── comparisons/            # Provider comparison pages
│   │   ├── tools/                  # MTD tools (eligibility checker, software chooser)
│   │   ├── blog/                   # Blog hub + individual blog posts
│   │   │
│   │   ├── about/
│   │   ├── editorial-policy/
│   │   ├── affiliate-disclosure/
│   │   ├── privacy-policy/
│   │   ├── terms-and-conditions/
│   │   ├── contact/
│   │   └── sources-methodology/
│   │
│   ├── components/
│   │   ├── common/             # Shared: CTABlock, FAQAccordion, InfoCallout
│   │   ├── layout/             # Header, Footer, Breadcrumbs
│   │   ├── seo/                # JsonLd, FAQSchema, OrganisationSchema
│   │   ├── tools/              # EligibilityCheckerForm, SoftwareChooserForm
│   │   ├── trust/              # AffiliateDisclosure, LastUpdated, SourceList
│   │   └── ui/                 # shadcn/ui base components
│   │
│   ├── data/
│   │   ├── providers/index.ts  # All software provider data
│   │   ├── site-config.ts      # Site config + MTD thresholds/deadlines
│   │   └── navigation.ts       # Nav structure
│   │
│   ├── lib/
│   │   ├── metadata.ts         # generateMetadata() — used on every page
│   │   ├── analytics.ts        # Analytics abstraction layer
│   │   ├── content-utils.ts    # formatDate() and helpers
│   │   └── utils.ts            # cn() Tailwind utility
│   │
│   └── types/
│       └── index.ts            # All TypeScript types
│
└── .claude/                    # Agent context files
    ├── CLAUDE.md               # Top-level project context
    └── agents/                 # Per-agent context directories
        ├── ia-agent/
        ├── ux-agent/
        ├── design-system-agent/
        ├── frontend-agent/
        ├── seo-agent/
        ├── content-model-agent/
        ├── trust-compliance-agent/
        ├── research-agent/
        ├── analytics-agent/
        └── qa-agent/
```

---

## Content Editing Guide

### Adding a new software provider

1. Add provider data to `src/data/providers/index.ts` following the `Provider` interface
2. Create a review page at `src/app/reviews/[slug]/page.tsx`
3. Update comparison pages to include the new provider
4. Add to `src/app/sitemap.ts`
5. Update software hub pages as appropriate

### Updating provider pricing

Edit the relevant entry in `src/data/providers/index.ts`. Update the `LastUpdated` date on all affected review and comparison pages.

### Adding a blog post

1. Create `src/app/blog/[your-slug]/page.tsx`
2. Use `generateArticleMetadata()` from `@/lib/metadata` for the metadata export
3. Add the post to the `blogPosts` array in `src/app/blog/page.tsx`
4. Add the URL to `src/app/sitemap.ts`

### Editing page metadata

Each page has an exported `metadata` constant at the top, using `generateMetadata()` or `generateArticleMetadata()` from `@/lib/metadata`. Edit the `title`, `description`, and `canonicalPath` there.

### Updating MTD thresholds or deadlines

Edit the `mtdConfig` object in `src/data/site-config.ts`. The eligibility checker logic in `src/components/tools/EligibilityCheckerForm.tsx` references these values directly.

---

## Key Conventions

1. **Server Components by default** — only use `"use client"` on interactive components
2. **`@/` imports** — always use the alias, never relative paths
3. **`generateMetadata()` on every page** — no hardcoded meta tags
4. **`AffiliateDisclosure` on all commercial pages** — reviews, comparisons, software pages
5. **`LastUpdated` on all content pages** — with the actual last-updated date
6. **`Breadcrumbs` on all non-homepage pages**
7. **No CSS modules** — all styling via Tailwind utilities

---

## Analytics

See `src/lib/analytics.ts` — events are defined and fire in development (console.log). Connect your analytics provider in Phase 2 by replacing the TODO comment with your provider's tracking call.

**Tracked events in Phase 1:**
- `tool_start` — user begins a tool
- `tool_complete` — user receives a tool result
- `faq_expand` — user opens a FAQ item
- `cta_click` — user clicks a CTA button

---

## Phase 2 Roadmap

- [ ] **MDX** — migrate blog posts and guide pages to MDX files
- [ ] **CMS integration** — Contentful or Sanity for editorial content management
- [ ] **Analytics provider** — connect GA4 or Plausible in `src/lib/analytics.ts`
- [ ] **More software providers** — bridging software, HMRC free tools, Coconut, etc.
- [ ] **Email capture / newsletter** — integrate Mailchimp or ConvertKit
- [ ] **Author profile pages** — with credentials for E-E-A-T
- [ ] **Search functionality** — Algolia or Fuse.js
- [ ] **User accounts** — optional, for saving tool results
- [ ] **Dark mode** — add dark variant CSS variables
- [ ] **Automated testing** — Playwright E2E + Lighthouse CI
- [ ] **Google Search Console** — set up post-launch
- [ ] **Legal review** — get privacy policy and T&Cs reviewed by a solicitor

---

## Deployment

Deploy to Vercel (recommended):

1. Push to GitHub
2. Connect repository in [Vercel dashboard](https://vercel.com)
3. No environment variables required in Phase 1
4. Vercel auto-detects Next.js and configures build settings
5. Set custom domain: `soletraderguide.co.uk`

**Note:** Add an OG image at `public/og-image.jpg` (1200x630px) before launch for proper social sharing previews.

---

## Editorial Guidelines

See `.claude/agents/` for agent context files covering:
- Information architecture conventions
- UX patterns and component usage
- Design system tokens and components
- Frontend implementation conventions
- SEO metadata and schema patterns
- Content model and data schemas
- Trust and disclosure requirements
- Analytics event taxonomy
- QA checklists and testing procedures

---

## License

(c) SoleTraderGuide. All rights reserved.

Content on SoleTraderGuide.co.uk is for general information only and does not constitute financial, tax, or legal advice. Always seek professional advice for your specific circumstances.
