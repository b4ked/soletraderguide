# IA Agent — Context

## Current Sitemap (Phase 1)

### Implemented Routes

| URL | Priority | Change Freq | Notes |
|-----|----------|------------|-------|
| `/` | 1.0 | daily | Homepage |
| `/mtd-for-sole-traders` | 0.9 | weekly | MTD guide hub |
| `/mtd-for-sole-traders/what-is-mtd-income-tax` | 0.8 | monthly | Core guide |
| `/mtd-for-sole-traders/am-i-affected` | 0.8 | monthly | High intent guide |
| `/mtd-for-sole-traders/deadlines` | 0.8 | monthly | High intent guide |
| `/mtd-for-sole-traders/records-you-need-to-keep` | 0.7 | monthly | Supporting guide |
| `/mtd-for-sole-traders/spreadsheets` | 0.7 | monthly | Niche guide |
| `/mtd-for-sole-traders/sole-trader-and-landlord-income` | 0.7 | monthly | Niche guide |
| `/software` | 0.9 | weekly | Software hub |
| `/software/best-mtd-software-for-sole-traders` | 0.8 | monthly | High intent |
| `/software/best-free-mtd-software` | 0.8 | monthly | High intent |
| `/software/cheapest-mtd-software` | 0.7 | monthly | Intent page |
| `/software/best-mtd-software-for-spreadsheet-users` | 0.7 | monthly | Niche |
| `/reviews` | 0.8 | weekly | Reviews hub |
| `/reviews/xero` | 0.8 | monthly | Provider review |
| `/reviews/quickbooks` | 0.8 | monthly | Provider review |
| `/reviews/sage` | 0.8 | monthly | Provider review |
| `/reviews/freeagent` | 0.8 | monthly | Provider review |
| `/comparisons` | 0.9 | weekly | Comparisons hub |
| `/comparisons/xero-vs-quickbooks` | 0.8 | monthly | Head-to-head |
| `/comparisons/xero-vs-freeagent` | 0.8 | monthly | Head-to-head |
| `/comparisons/quickbooks-vs-sage` | 0.8 | monthly | Head-to-head |
| `/comparisons/free-vs-paid-mtd-software` | 0.7 | monthly | Comparison |
| `/tools` | 0.8 | monthly | Tools hub |
| `/tools/mtd-eligibility-checker` | 0.9 | monthly | High intent tool |
| `/tools/mtd-software-chooser` | 0.8 | monthly | Tool |
| `/blog` | 0.8 | weekly | Blog hub |
| `/blog/april-2026-mtd-rollout-explained` | 0.7 | monthly | Blog post |
| `/blog/first-quarterly-update-what-sole-traders-need-to-do` | 0.7 | monthly | Blog post |
| `/blog/mtd-software-options-explained` | 0.7 | monthly | Blog post |
| `/blog/free-vs-paid-mtd-software` | 0.7 | monthly | Blog post |
| `/about` | 0.5 | yearly | About page |
| `/editorial-policy` | 0.5 | yearly | Trust page |
| `/affiliate-disclosure` | 0.5 | yearly | Trust page |
| `/privacy-policy` | 0.4 | yearly | Legal page |
| `/terms-and-conditions` | 0.4 | yearly | Legal page |
| `/contact` | 0.5 | yearly | Contact page |
| `/sources-methodology` | 0.6 | monthly | Methodology |

Total: 38 URLs in sitemap

---

## Navigation Structure

### Primary Navigation

```
Home
MTD for Sole Traders
  What is MTD Income Tax?
  Am I Affected?
  MTD Deadlines
  Records You Need to Keep
  Using Spreadsheets
Software
  Best MTD Software
  Free MTD Software
  Cheapest Options
  For Spreadsheet Users
Reviews
  Xero Review
  QuickBooks Review
  Sage Review
  FreeAgent Review
Comparisons
  Xero vs QuickBooks
  Xero vs FreeAgent
  QuickBooks vs Sage
Tools
  MTD Eligibility Checker
  Software Chooser
Blog
```

### Footer Navigation

```
Column 1: MTD Guides
  What is MTD?
  Am I Affected?
  MTD Deadlines
  Quarterly Updates

Column 2: Software
  Best MTD Software
  Free MTD Software
  Xero Review
  QuickBooks Review
  Sage Review
  FreeAgent Review

Column 3: Tools & Blog
  Eligibility Checker
  Software Chooser
  Blog

Column 4: About
  About Us
  Editorial Policy
  Affiliate Disclosure
  Privacy Policy
  Terms & Conditions
  Contact
  Sources & Methodology
```

---

## Breadcrumb Patterns

All breadcrumbs start with `Home` (linked to `/`).

| Page type | Breadcrumb pattern |
|-----------|-------------------|
| MTD guide | Home / MTD for Sole Traders / [Guide Title] |
| Software hub child | Home / Software / [Page Title] |
| Review | Home / Reviews / [Provider Name] |
| Comparison | Home / Comparisons / [Page Title] |
| Tool | Home / Tools / [Tool Name] |
| Blog post | Home / Blog / [Post Title] |
| Legal page | Home / [Page Title] |
| Hub page | Home / [Hub Name] |

The current page (last breadcrumb item) is not a link — it renders as plain text.

---

## Internal Linking Conventions

1. **CTABlock at end of articles** — always links to the most relevant next step (usually a tool or comparison page).
2. **Related articles section** — 2–4 related posts at the bottom of blog posts.
3. **In-content links** — link naturally from guide text to related guides, tools, and reviews.
4. **Review → Comparison links** — all review pages should link to relevant comparison pages.
5. **Blog → Tool links** — blog posts covering eligibility or software choice link to the relevant tool.
6. **Tool → Software pages** — tool result screens link to software review and hub pages.
7. **Trust page cross-linking** — editorial-policy ↔ affiliate-disclosure ↔ sources-methodology are interlinked.

---

## Phase 2 URL Expansion Plan

### New provider reviews
- `/reviews/absolute-bridging`
- `/reviews/cirrostratus-mtd`
- `/reviews/hmrc-free-tools`

### New comparison pages
- `/comparisons/sage-vs-freeagent`
- `/comparisons/xero-vs-sage`

### New software hub pages
- `/software/best-mtd-software-for-landlords`
- `/software/mtd-bridging-software`

### New guide pages
- `/mtd-for-sole-traders/eops-explained`
- `/mtd-for-sole-traders/quarterly-update-categories`
- `/mtd-for-sole-traders/how-to-sign-up-for-mtd`
- `/mtd-for-sole-traders/hmrc-penalties`

### New blog posts
- As content calendar evolves — new slugs will follow `descriptive-topic-and-intent` pattern

### Category / tag pages (Phase 2)
- `/blog/category/mtd-news`
- `/blog/category/software-guides`
- `/blog/category/tax-tips`

### Author pages (Phase 2)
- `/authors/[slug]`

### Search (Phase 2)
- `/search` — search results page
