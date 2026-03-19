# Content Model Agent — Context

## Provider Data Schema (all fields)

The `Provider` interface in `src/types/index.ts` is the canonical schema.
Provider data lives in `src/data/providers/index.ts` as an `allProviders` array.

Current providers: Xero, QuickBooks, Sage, FreeAgent

### Helper functions available
```typescript
import { allProviders, getProviderBySlug } from '@/data/providers'

// Get all providers
const providers = allProviders

// Get a specific provider
const xero = getProviderBySlug('xero') // Returns Provider | undefined
```

### Provider categories
```
'full-accounting'    Xero, QuickBooks, Sage, FreeAgent
'mtd-bridging'       Bridging tools (Phase 2 additions)
'free'               HMRC free tools (Phase 2)
'spreadsheet-addon'  Excel add-ons (Phase 2)
```

---

## Site Config Values (src/data/site-config.ts)

```typescript
const siteConfig = {
  name: 'SoleTraderGuide',
  domain: 'soletraderguide.co.uk',
  url: 'https://soletraderguide.co.uk',
  description: 'Plain-English guidance on Making Tax Digital for sole traders...',
  ogImage: '/og-image.jpg',
  twitter: '',
  email: 'hello@soletraderguide.co.uk',
  publisherName: 'SoleTraderGuide',
  lastReviewedDate: '2025-03-01',
  editorialEmail: 'editorial@soletraderguide.co.uk',
}

const mtdConfig = {
  currentThreshold: 50000,       // £50,000
  nextThreshold: 30000,          // £30,000 from April 2027
  mandatoryDate: 'April 2026',
  nextMandatoryDate: 'April 2027',
  quarterlyDeadlines: [
    { period: 'Q1', covers: '6 April – 5 July', deadline: '7 August' },
    { period: 'Q2', covers: '6 July – 5 October', deadline: '7 November' },
    { period: 'Q3', covers: '6 October – 5 January', deadline: '7 February' },
    { period: 'Q4', covers: '6 January – 5 April', deadline: '7 May' },
  ],
  eopsDeadline: '31 January (following the tax year)',
}
```

---

## Blog Post Data (Phase 1)

In Phase 1, blog post metadata is defined as a static array in `src/app/blog/page.tsx`:

```typescript
const blogPosts = [
  {
    slug: 'april-2026-mtd-rollout-explained',
    title: 'April 2026 MTD Rollout Explained: What Sole Traders Need to Know',
    date: '1 March 2025',
    category: 'MTD News',
    readingTime: '6 min read',
    excerpt: '...',
  },
  // ... 3 more posts
]
```

In Phase 2, this should be replaced with dynamic data from MDX or a CMS.

---

## Content Relationships

```
Provider ──────── Review page (/reviews/[slug])
                   ↓
Provider (pair) ── Comparison page (/comparisons/[slug-vs-slug])
                   ↓
Provider ──────── Software hub page (/software/[topic])
                   ↓
Provider ──────── SoftwareChooserForm result

MTD topic ─────── Guide page (/mtd-for-sole-traders/[topic])
                   ↓
Guide ──────────── Blog post (related posts section)
                   ↓
Guide ──────────── Tool pages (CTABlocks link to tools)
```

---

## Phase 2 Content Expansion Plan

### New providers to add to data/providers/index.ts
1. Absolute Bridging — bridging software category
2. Cirrostratus MTD Bridge — bridging software category
3. HMRC Free Tools — free category

### New blog posts to create (suggested)
- "How to Choose an Accountant for MTD" — Tax Tips
- "MTD Penalty Points Explained" — MTD News
- "Moving from Spreadsheets to MTD Software" — Software Guides
- "MTD for Landlords: What You Need to Know" — MTD News

### MDX migration approach (Phase 2)
1. Install `@next/mdx` or `contentlayer`
2. Create `content/blog/` and `content/guides/` directories
3. Move blog post content from page.tsx files into MDX files
4. Add dynamic route `src/app/blog/[slug]/page.tsx` to replace static pages
5. Update `src/app/blog/page.tsx` to query MDX content
6. Add frontmatter schema validation (zod recommended)
