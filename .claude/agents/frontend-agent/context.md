# Frontend Agent — Context

## File Structure Overview

```
src/
├── app/                              # Next.js App Router
│   ├── globals.css                   # Tailwind v4 + custom CSS variables
│   ├── layout.tsx                    # Root layout: header, footer, fonts
│   ├── page.tsx                      # Homepage
│   ├── sitemap.ts                    # /sitemap.xml route handler
│   ├── robots.ts                     # /robots.txt route handler
│   │
│   ├── mtd-for-sole-traders/         # MTD guide section
│   │   ├── page.tsx                  # Hub page
│   │   ├── what-is-mtd-income-tax/page.tsx
│   │   ├── am-i-affected/page.tsx
│   │   ├── deadlines/page.tsx
│   │   ├── records-you-need-to-keep/page.tsx
│   │   ├── spreadsheets/page.tsx
│   │   └── sole-trader-and-landlord-income/page.tsx
│   │
│   ├── software/                     # Software hub section
│   │   ├── page.tsx
│   │   ├── best-mtd-software-for-sole-traders/page.tsx
│   │   ├── best-free-mtd-software/page.tsx
│   │   ├── cheapest-mtd-software/page.tsx
│   │   └── best-mtd-software-for-spreadsheet-users/page.tsx
│   │
│   ├── reviews/                      # Review pages
│   │   ├── page.tsx
│   │   ├── xero/page.tsx
│   │   ├── quickbooks/page.tsx
│   │   ├── sage/page.tsx
│   │   └── freeagent/page.tsx
│   │
│   ├── comparisons/                  # Comparison pages
│   │   ├── page.tsx
│   │   ├── xero-vs-quickbooks/page.tsx
│   │   ├── xero-vs-freeagent/page.tsx
│   │   ├── quickbooks-vs-sage/page.tsx
│   │   └── free-vs-paid-mtd-software/page.tsx
│   │
│   ├── tools/                        # Tool pages
│   │   ├── page.tsx                  # Tools hub
│   │   ├── mtd-eligibility-checker/page.tsx
│   │   └── mtd-software-chooser/page.tsx
│   │
│   ├── blog/                         # Blog pages
│   │   ├── page.tsx                  # Blog hub
│   │   ├── april-2026-mtd-rollout-explained/page.tsx
│   │   ├── first-quarterly-update-what-sole-traders-need-to-do/page.tsx
│   │   ├── mtd-software-options-explained/page.tsx
│   │   └── free-vs-paid-mtd-software/page.tsx
│   │
│   ├── about/page.tsx
│   ├── editorial-policy/page.tsx
│   ├── affiliate-disclosure/page.tsx
│   ├── privacy-policy/page.tsx
│   ├── terms-and-conditions/page.tsx
│   ├── contact/page.tsx
│   └── sources-methodology/page.tsx
│
├── components/
│   ├── common/
│   │   ├── CTABlock.tsx              # "use client" — analytics
│   │   ├── FAQAccordion.tsx          # "use client" — accordion + analytics
│   │   └── InfoCallout.tsx           # Server component
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Breadcrumbs.tsx           # Server component + JsonLd schema
│   ├── seo/
│   │   ├── JsonLd.tsx
│   │   ├── FAQSchema.tsx
│   │   └── OrganisationSchema.tsx
│   ├── tools/
│   │   ├── EligibilityCheckerForm.tsx  # "use client"
│   │   └── SoftwareChooserForm.tsx     # "use client"
│   ├── trust/
│   │   ├── AffiliateDisclosure.tsx
│   │   ├── LastUpdated.tsx
│   │   └── SourceList.tsx
│   └── ui/                           # shadcn/ui components
│
├── data/
│   ├── providers/
│   │   └── index.ts                  # allProviders array + getProviderBySlug()
│   ├── site-config.ts                # siteConfig + mtdConfig
│   └── navigation.ts                 # Primary and footer nav
│
├── lib/
│   ├── metadata.ts                   # generateMetadata() + generateArticleMetadata()
│   ├── analytics.ts                  # trackEvent() abstraction
│   ├── content-utils.ts              # formatDate() and other helpers
│   └── utils.ts                      # cn() Tailwind merge utility
│
└── types/
    └── index.ts                      # All shared TypeScript types
```

## Which Components Are Client Components

| Component | Client? | Reason |
|-----------|---------|--------|
| `CTABlock` | Yes | Uses `usePathname()` for analytics |
| `FAQAccordion` | Yes | Accordion state + analytics |
| `EligibilityCheckerForm` | Yes | Multi-step form state |
| `SoftwareChooserForm` | Yes | Multi-step form state |
| `Header` | Possibly | Mobile nav toggle state |
| Everything else | No | Server Component (default) |

## Page-Level Client Boundary Rule

Pages themselves are **never** `"use client"`. Client functionality is encapsulated in child components. This allows Next.js to render the page shell on the server and hydrate only the interactive parts.

## Rendering Strategy

- All pages: **Static Site Generation (SSG)** — generated at build time
- Phase 2: Add `revalidate` for pages with CMS content (ISR)
- No dynamic server-side rendering needed in Phase 1

## TypeScript Types Quick Reference

```typescript
// From src/types/index.ts

interface Provider {
  id: string; slug: string; name: string; logo: string;
  tagline: string; bestFor: string[]; pricingSummary: string;
  monthlyPrice: number | null; hasFreePlan: boolean;
  hasFreeTrialDays: number | null; supportsSoleTraders: boolean;
  supportsLandlords: boolean; supportsSpreadsheetWorkflow: boolean;
  mtdCompatible: boolean; mtdSuitabilityScore: number;
  pros: string[]; cons: string[]; keyFeatures: string[];
  mtdNotes: string; pricingUrl: string;
  affiliateEnabled: boolean; affiliateLink: string; notes: string;
  category: 'full-accounting' | 'mtd-bridging' | 'free' | 'spreadsheet-addon';
}

interface FAQ { question: string; answer: string; }
interface BreadcrumbItem { label: string; href?: string; }
interface EligibilityResult { eligible: boolean; deadline?: string; message: string; explanation: string; nextSteps: string[]; }
interface SoftwareRecommendation { provider: string; slug: string; reason: string; score: number; }
```
