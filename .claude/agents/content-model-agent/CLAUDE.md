# Content Model Agent — CLAUDE.md

## Role

You are the **Content Model Agent** for SoleTraderGuide.co.uk. You are responsible for:

- Defining content types, their schemas, and relationships
- Managing the provider data model (`src/data/providers/index.ts`)
- TypeScript types for all content structures (`src/types/index.ts`)
- Site configuration data (`src/data/site-config.ts`)
- Navigation data (`src/data/navigation.ts`)
- Phase 2: MDX blog/guide system design
- Phase 2: CMS integration schema design

---

## Phase 1 Output: COMPLETE

- TypeScript types defined for all content in `src/types/index.ts`
- Provider data schema implemented in `src/data/providers/index.ts`
- Site config (MTD thresholds, deadlines, contact info) in `src/data/site-config.ts`
- Navigation data in `src/data/navigation.ts`
- Blog post data defined as inline static constants in `src/app/blog/page.tsx`

---

## Key Files Owned

| File | Purpose |
|------|---------|
| `src/types/index.ts` | All shared TypeScript interfaces and types |
| `src/data/providers/index.ts` | Provider/software data for Xero, QuickBooks, Sage, FreeAgent |
| `src/data/site-config.ts` | Site name, URL, MTD config (thresholds, deadlines) |
| `src/data/navigation.ts` | Primary nav and footer nav structure |

---

## Content Types Implemented

### Provider (Software Product)
Defined in `src/types/index.ts`:

| Field | Type | Description |
|-------|------|-------------|
| `id` | `string` | Unique identifier |
| `name` | `string` | Display name (e.g. "Xero") |
| `slug` | `string` | URL slug (e.g. "xero") |
| `logo` | `string` | Path to logo file |
| `tagline` | `string` | One-line description |
| `bestFor` | `string[]` | List of use cases this software suits |
| `pricingSummary` | `string` | Brief pricing description |
| `monthlyPrice` | `number \| null` | Lowest monthly price in GBP |
| `hasFreePlan` | `boolean` | Whether a free plan exists |
| `hasFreeTrialDays` | `number \| null` | Trial length in days |
| `supportsSoleTraders` | `boolean` | Suitable for sole traders |
| `supportsLandlords` | `boolean` | Suitable for landlords |
| `supportsSpreadsheetWorkflow` | `boolean` | Works alongside spreadsheets |
| `mtdCompatible` | `boolean` | HMRC-recognised for MTD |
| `mtdSuitabilityScore` | `number` | 1–5 rating for MTD suitability |
| `pros` | `string[]` | Key advantages |
| `cons` | `string[]` | Key disadvantages |
| `keyFeatures` | `string[]` | Feature list |
| `mtdNotes` | `string` | MTD-specific notes for this provider |
| `pricingUrl` | `string` | URL to pricing page |
| `affiliateEnabled` | `boolean` | Whether we have an affiliate link |
| `affiliateLink` | `string` | Affiliate link URL |
| `notes` | `string` | Internal notes |
| `category` | `'full-accounting' \| 'mtd-bridging' \| 'free' \| 'spreadsheet-addon'` | Category |

### PageMeta
For structured metadata passed to page templates:

| Field | Type | Description |
|-------|------|-------------|
| `title` | `string` | Page title |
| `description` | `string` | Meta description |
| `canonicalPath` | `string?` | Canonical URL path |
| `noindex` | `boolean?` | Exclude from search engines |
| `publishedDate` | `string?` | ISO date string |
| `updatedDate` | `string?` | ISO date string |
| `author` | `string?` | Author name |
| `reviewer` | `string?` | Reviewer name |
| `pageType` | enum | guide/review/comparison/tool/blog/legal/homepage/hub |
| `category` | `string?` | Content category |
| `tags` | `string[]?` | Content tags |
| `affiliateDisclosure` | `boolean?` | Whether to show disclosure |
| `faqs` | `FAQ[]?` | FAQs for this page |
| `relatedPages` | `RelatedPage[]?` | Related page links |

### FAQ
```typescript
interface FAQ {
  question: string
  answer: string
}
```

### BreadcrumbItem
```typescript
interface BreadcrumbItem {
  label: string
  href?: string  // Last item has no href
}
```

### BlogPost (from types/index.ts)
```typescript
interface BlogPost {
  slug: string
  title: string
  description: string
  publishedDate: string
  updatedDate: string
  author: string
  category: string
  tags: string[]
  featured: boolean
}
```

### EligibilityResult (tool output)
```typescript
interface EligibilityResult {
  eligible: boolean
  deadline?: string
  message: string
  explanation: string
  nextSteps: string[]
}
```

### SoftwareRecommendation (tool output)
```typescript
interface SoftwareRecommendation {
  provider: string
  slug: string
  reason: string
  score: number
}
```

---

## Phase 2 Content Expansion Plan

### MDX Blog/Guide System
In Phase 2, blog posts and guide pages should migrate from static Next.js pages to MDX files:
- Blog posts: `content/blog/[slug].mdx`
- Guides: `content/guides/[section]/[slug].mdx`
- MDX frontmatter to match `BlogPost` type fields

Each MDX file needs frontmatter fields:
```yaml
---
title: "..."
description: "..."
publishedDate: "2025-03-01"
updatedDate: "2025-03-01"
author: "SoleTraderGuide Editorial Team"
category: "MTD News"
tags: ["MTD", "deadlines"]
featured: false
affiliateDisclosure: false
---
```

### CMS Integration Schema
If using Contentful or Sanity in Phase 2, content types to create:
- `blogPost` — maps to `BlogPost` type
- `guide` — for MTD guide content
- `provider` — maps to `Provider` type (replaces `src/data/providers/index.ts`)
- `author` — for author profiles

### Author Profiles (Phase 2)
New content type needed:
```typescript
interface Author {
  slug: string
  name: string
  bio: string
  credentials: string[]  // e.g. "CTA qualified", "AAT member"
  avatar: string
  linkedinUrl?: string
}
```

### Tagging System (Phase 2)
Implement a tag/category taxonomy:
```typescript
type BlogCategory = 'MTD News' | 'Software Guides' | 'Tax Tips' | 'Case Studies'
type GuideCategory = 'Getting Started' | 'Compliance' | 'Software' | 'Record Keeping'
```
