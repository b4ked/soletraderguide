# Project Context — SoleTraderGuide.co.uk

## What This Site Is

**SoleTraderGuide.co.uk** is a UK-focused content and comparison website for sole traders who need to understand and comply with **Making Tax Digital for Income Tax (MTD ITSA)**.

The site is:
- A trusted, practical, SEO-led resource
- Built on Next.js 16 with App Router, TypeScript, and Tailwind CSS
- Hosted on Vercel (upgrading from Hobby to Pro before launch)
- Monetised through affiliate referrals to MTD software providers

---

## What the Site Does

1. **Explains MTD** — what it is, who is affected, when deadlines are, what records to keep
2. **Compares software** — Xero, QuickBooks, Sage, FreeAgent (reviews + comparisons)
3. **Guides decisions** — eligibility checker and software chooser tools
4. **Builds trust** — editorial policy, affiliate disclosure, sources, reviewed-by credentials

---

## Target Audience

- UK sole traders and freelancers (primary)
- Self-employed people with landlord income
- Users who currently use spreadsheets and need to transition
- Cost-conscious users looking for cheap or free MTD software
- Accountant-supported users researching software options

---

## MTD Rollout Phases

The site is built around HMRC's MTD ITSA rollout:

| Phase | Income threshold | Mandatory from |
|---|---|---|
| Phase 1 | Over £50,000 qualifying income | April 2026 |
| Phase 2 | Over £30,000 qualifying income | April 2027 |
| Phase 3 | Over £20,000 qualifying income | April 2028 |

Qualifying income = gross self-employment + UK property income (before expenses). PAYE, dividends, and savings interest do NOT count.

---

## Site Architecture

### URL Structure

```
/                                     Homepage
/mtd-for-sole-traders/               MTD guide hub
  /what-is-mtd-income-tax            What is MTD?
  /am-i-affected                     Eligibility guide
  /deadlines                         Key deadlines
  /records-you-need-to-keep          Record keeping
  /spreadsheets                      Spreadsheets & MTD
  /sole-trader-and-landlord-income   Combined income
/software/                           Software hub
  /best-mtd-software-for-sole-traders
  /best-free-mtd-software
  /cheapest-mtd-software
  /best-mtd-software-for-spreadsheet-users
/reviews/                            Review hub
  /xero
  /quickbooks
  /sage
  /freeagent
/comparisons/                        Comparison hub
  /xero-vs-quickbooks
  /xero-vs-freeagent
  /quickbooks-vs-sage
  /free-vs-paid-mtd-software
/tools/                              Tools hub
  /mtd-eligibility-checker
  /mtd-software-chooser
/blog/                               Blog hub (dynamic MDX)
  /[slug]                            Individual posts (MDX)
/about
/editorial-policy
/affiliate-disclosure
/privacy-policy
/terms-and-conditions
/contact
/sources-methodology
```

---

## Design Principles

Always align to:
- **Trust first** — editorial policy, sources, affiliate disclosure, reviewer credentials
- **Clarity over cleverness** — plain English, no jargon
- **Useful over verbose** — every sentence must earn its place
- **Decision-support** — help users choose, not just inform
- **SEO-aware** — structured data, metadata, canonical URLs, internal linking
- **Mobile-first** — responsive by default; Tailwind utility classes

---

## Brand Voice

- Plain English for a non-accountant audience
- Factual and balanced, never promotional
- Practical and action-oriented
- Honest about limitations and trade-offs
- UK English spelling throughout (colour, recognise, authorise, organisation)
- Prices in GBP (£), dates in UK format (6 April 2026)

---

## Technology Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16, App Router |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| UI components | Radix UI / shadcn |
| Icons | Lucide React |
| Blog content | MDX via `next-mdx-remote` + `gray-matter` |
| SEO | Custom metadata, JSON-LD schema components |
| Hosting | Vercel |

---

## Key Data Sources

- `src/data/site-config.ts` — site-wide configuration (URL, name, OG image)
- `src/data/providers/index.ts` — software provider data (pricing, features, affiliate links)
- `src/data/navigation.ts` — navigation structure
- `src/content/blog/*.mdx` — blog post content files

---

## Affiliate Model

The site earns through affiliate referrals. Key rules:
- Every page with affiliate links must include `<AffiliateDisclosure />` or `affiliateDisclosure: true` in frontmatter
- Reviews and comparison pages always have affiliate disclosure
- The editorial policy and affiliate disclosure pages explain the model clearly
- Reviews are written independently — affiliate relationships do not affect scores or recommendations
