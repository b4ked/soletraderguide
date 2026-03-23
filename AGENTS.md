<!-- BEGIN:nextjs-agent-rules -->
# Agent Instructions — SoleTraderGuide.co.uk

This file defines how AI agents should operate within this codebase. Read `context.md` for full project background.

---

## Agent Roles

This repo uses multiple agents with distinct roles:

### 1. Write-Up Agent
Creates new blog content as `.mdx` files.

**Responsibilities:**
- Output `.mdx` files to `src/content/blog/`
- Follow the MDX frontmatter schema exactly (see below)
- Write in UK English, plain language, ~800–2,000 words per post
- Include InfoCallout components where appropriate
- Ensure all FAQs, CTAs, and related posts are in frontmatter (not body)
- Do NOT modify any TypeScript, component, or layout files

### 2. Build Agent
Implements structural changes to the codebase.

**Responsibilities:**
- Add or modify pages, components, and utilities
- Follow all SEO requirements for every new page
- Use existing components — do not reinvent
- Run `npm run build` to verify before committing
- Follow the page metadata template for every `page.tsx` (see below)

### 3. Reviewer Agent
Quality-checks all new or modified pages.

**Responsibilities:**
- After any page creation or modification, verify the following checklist:
  - [ ] Page has unique, keyword-targeted `<title>` and `<meta description>` (150–160 chars)
  - [ ] Page has `canonicalPath` set in metadata
  - [ ] Page has breadcrumbs (every non-homepage page)
  - [ ] Page has correct structured data schema (Article, FAQ, BreadcrumbList)
  - [ ] Open Graph image and tags are populated
  - [ ] All internal links are direct (not via redirect)
  - [ ] Affiliate disclosure is shown on commercial pages
  - [ ] `<LastUpdated />` is present on content pages
  - [ ] UK English throughout
  - [ ] All `<img>` tags use `next/image` with descriptive `alt` text
  - [ ] Page is listed in `src/app/sitemap.ts` (for non-dynamic pages)
  - [ ] Lighthouse score target: 90+ Performance, 100 SEO, 100 Accessibility
- Output a structured review report with pass/fail per checklist item
- Flag any issues for the Build Agent to fix before commit

---

## MDX Frontmatter Schema (Blog Posts)

Every blog post in `src/content/blog/` must use this frontmatter schema:

```mdx
---
title: "Post title here — include primary keyword"
description: "Meta description here — 150 to 160 characters, include primary keyword, written for humans not robots"
publishedAt: "YYYY-MM-DD"
updatedAt: "YYYY-MM-DD"
author: "SoleTraderGuide Editorial Team"
category: "mtd-news | software-guides | tax-tips | mtd-guides"
tags: ["tag1", "tag2", "tag3"]
readingTime: "X min read"
affiliateDisclosure: false
cta:
  heading: "CTA heading here"
  description: "One sentence description of what the CTA does"
  primaryLabel: "Button label"
  primaryHref: "/tools/mtd-eligibility-checker"
  secondaryLabel: "Button label"
  secondaryHref: "/comparisons"
faqs:
  - question: "Frequently asked question?"
    answer: "Full answer in plain English. Can be multiple sentences."
  - question: "Another question?"
    answer: "Another answer."
relatedPosts:
  - title: "Related post title"
    href: "/blog/related-post-slug"
  - title: "Another related post"
    href: "/blog/another-slug"
---
```

### Required fields
- `title` — unique, keyword-targeted, under 60 characters preferred
- `description` — 150–160 characters, keyword-targeted, readable
- `publishedAt` — ISO date string
- `updatedAt` — ISO date string (same as publishedAt on creation)
- `author` — always "SoleTraderGuide Editorial Team"
- `category` — must be one of the four defined categories
- `tags` — 2–5 tags
- `readingTime` — estimated reading time
- `affiliateDisclosure` — boolean; set to `true` on any post mentioning specific paid software

### Optional fields
- `cta` — if omitted, a default CTA block is shown
- `faqs` — 3–5 FAQs recommended for SEO rich results
- `relatedPosts` — 2 related posts recommended

---

## Blog MDX Body Format

The `.mdx` body contains article content in standard Markdown with optional JSX components.

### Allowed JSX in MDX body

```mdx
<InfoCallout type="info | warning | tip | deadline" title="Optional title">
  Content goes here. Can be plain text or a markdown list.
</InfoCallout>
```

That is the only JSX component needed in the MDX body. Everything else (CTA, FAQs, related posts) is handled by the dynamic route template using frontmatter data.

### Markdown conventions

- Use `##` for main section headings (H2)
- Use `###` for sub-sections (H3)
- Use standard markdown lists (`-` for unordered, `1.` for ordered)
- Use `**bold**` for emphasis
- Use standard markdown links `[text](/path)` for internal links
- UK English throughout: colour, recognise, authorise, organisation, licence (noun)
- Never use `#` (H1) in the body — the title is rendered by the template

---

## Page Metadata Template (for `page.tsx` files)

Every `page.tsx` must export metadata. Use this pattern:

```tsx
// Standard page
export const metadata: Metadata = generateMetadata({
  title: 'Page Title',
  description: 'Meta description — 150–160 characters.',
  canonicalPath: '/path/to/page',
  pageType: 'guide | review | comparison | tool | hub | legal',
})

// Article/blog page
export const metadata: Metadata = generateArticleMetadata({
  title: 'Article Title',
  description: 'Meta description.',
  canonicalPath: '/blog/slug',
  publishedDate: 'YYYY-MM-DD',
  updatedDate: 'YYYY-MM-DD',
  author: 'SoleTraderGuide Editorial Team',
  tags: ['tag1', 'tag2'],
})
```

---

## Structured Data Requirements

| Page type | Schema required |
|---|---|
| Blog post | ArticleSchema + FAQSchema (if FAQs present) + BreadcrumbSchema |
| Guide | ArticleSchema + FAQSchema (if FAQs present) + BreadcrumbSchema |
| Review | ReviewSchema or SoftwareApplicationSchema + BreadcrumbSchema |
| Comparison | BreadcrumbSchema |
| Tool | BreadcrumbSchema |
| Hub | BreadcrumbSchema |
| Homepage | OrganisationSchema (in layout.tsx — already present) |

Use the existing schema components in `src/components/seo/`:
- `<ArticleSchema />` — for blog posts and guides
- `<FAQSchema />` — for pages with FAQ sections
- `<JsonLd />` — generic JSON-LD wrapper
- `<OrganisationSchema />` — organisation-level schema (already in layout)

---

## SEO Checklist (Run Before Every Commit)

The Reviewer Agent must verify:

```
[ ] Every page.tsx exports generateMetadata() or generateArticleMetadata()
[ ] Every page has canonicalPath set
[ ] Breadcrumbs present on all non-homepage pages
[ ] ArticleSchema on all blog/guide pages
[ ] FAQSchema on pages with FAQ sections
[ ] Open Graph type set correctly (website vs article)
[ ] All images use next/image with alt text
[ ] robots.ts allows crawl of all public pages
[ ] sitemap.ts includes all non-dynamic pages
[ ] Blog dynamic route generates sitemap via getAllPosts()
[ ] No trailing slashes in URLs (next.config.ts: trailingSlash: false)
[ ] All internal links are direct (not via 301 redirect hops)
```

---

## Component Library Reference

### Layout
- `<Breadcrumbs items={[...]} />` — breadcrumb nav with schema
- `<Header />` — site header (in layout.tsx)
- `<Footer />` — site footer (in layout.tsx)

### Content
- `<InfoCallout type="info|warning|tip|deadline" title="...">` — coloured callout box
- `<CTABlock heading="..." description="..." primaryCta={{label, href}} secondaryCta={{label, href}} variant="brand|soft" />` — CTA section
- `<FAQAccordion faqs={[{question, answer}]} headingLevel="h2|h3" />` — FAQ accordion
- `<HeroSection />` — page hero (homepage)
- `<SectionHeader />` — section heading
- `<GuideCard />` — card for guide links
- `<BlogCard />` — card for blog post links

### SEO
- `<ArticleSchema />` — article JSON-LD
- `<FAQSchema />` — FAQ JSON-LD
- `<JsonLd />` — generic JSON-LD
- `<OrganisationSchema />` — org JSON-LD (in layout)

### Trust
- `<AffiliateDisclosure variant="inline|block" />` — affiliate disclosure
- `<LastUpdated date="YYYY-MM-DD" />` — last updated stamp
- `<ReviewedBy name="..." credentials="..." />` — reviewer credit
- `<EditorialNote />` — editorial transparency note
- `<SourceList sources={[...]} />` — sources list

### Comparison
- `<ComparisonTable />` — feature comparison table
- `<ProviderCard />` — software provider summary card
- `<ProsConsList />` — pros and cons list
- `<QuickVerdict />` — quick summary verdict

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

## Content Expansion Methodology

### Adding a New Blog Post
1. Write-Up Agent creates `src/content/blog/new-post-slug.mdx`
2. Frontmatter must include all required fields
3. Reviewer Agent checks the rendered page for SEO compliance
4. Blog hub and sitemap update automatically (dynamic)
5. No code changes required

### Adding a New Guide Page
1. Create `src/app/mtd-for-sole-traders/new-guide/page.tsx`
2. Export `generateMetadata()` with unique title, description, canonicalPath
3. Add breadcrumbs
4. Add `<ArticleSchema />` and `<FAQSchema />` if applicable
5. Add the URL to `src/app/sitemap.ts`
6. Update the guide hub `src/app/mtd-for-sole-traders/page.tsx` to link to it

### Adding a New Review Page
1. Add provider data to `src/data/providers/index.ts`
2. Create `src/app/reviews/[provider-slug]/page.tsx`
3. Use `<ComparisonTable />`, `<ProsConsList />`, `<QuickVerdict />`, `<ProviderCard />`
4. Include `<AffiliateDisclosure />` — all review pages have affiliate context
5. Add `<ArticleSchema />` with review-specific properties
6. Add URL to `src/app/sitemap.ts`
7. Update the reviews hub page

### Adding a New Comparison Page
1. Create `src/app/comparisons/[slug]/page.tsx`
2. Use existing comparison components
3. Include `<AffiliateDisclosure />`
4. Add URL to `src/app/sitemap.ts`
5. Update the comparisons hub page

---

## Internal Linking Strategy

- Blog posts link to: relevant guides, software pages, comparison pages, tool pages
- Guide pages link to: software hub, review pages, comparison pages, tools
- Review pages link to: comparison pages, other reviews, software hub
- Comparison pages link to: individual review pages, software hub
- All pages link to: the two tool pages (eligibility checker, software chooser) where relevant
- Money pages (reviews, comparisons) receive links from blog and guide pages

Always use direct internal links (not via redirects). Use `href="/path"` not `href="https://soletraderguide.co.uk/path"`.

---

## What NOT to Do

- Do not add `"use client"` unless the component genuinely needs browser APIs or state
- Do not inline styles — use Tailwind classes
- Do not create new components for one-off layouts — compose existing ones
- Do not hardcode blog post lists — the blog hub reads from the filesystem
- Do not add pages without metadata
- Do not add pages without breadcrumbs
- Do not commit without running `npm run build`
- Do not modify `src/data/providers/index.ts` pricing without verifying against provider websites
<!-- END:nextjs-agent-rules -->
