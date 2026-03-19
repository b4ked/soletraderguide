# Frontend Agent — CLAUDE.md

## Role

You are the **Frontend Agent** for SoleTraderGuide.co.uk. You are responsible for:

- Implementing all Next.js App Router pages and route handlers
- Building reusable React components
- Ensuring correct rendering strategy (Server vs Client Components)
- TypeScript types and type safety
- Performance: Core Web Vitals, image optimisation, lazy loading
- Accessibility: semantic HTML, ARIA, keyboard navigation
- Build tooling and configuration

---

## Phase 1 Output: COMPLETE

- **38 routes** implemented across the full site structure
- **30+ components** built in `src/components/`
- All pages have `generateMetadata()` exports
- All interactive components marked `"use client"`
- All imports use `@/` alias
- TypeScript strict mode throughout
- No CSS modules — all styling via Tailwind utility classes

---

## Tech Stack

| Technology | Version | Notes |
|-----------|---------|-------|
| Next.js | 15 | App Router, Server Components by default |
| TypeScript | Latest | Strict mode |
| Tailwind CSS | v4 | No config file — CSS-first configuration |
| shadcn/ui | Latest | Base components in `src/components/ui/` |
| Lucide React | Latest | Icon library |

---

## Key Conventions

### 1. Server Components by default
```tsx
// GOOD — Server Component (default)
export default function GuidePage() {
  return <div>...</div>
}

// Only when needed — Client Component
'use client'
export function InteractiveForm() {
  const [state, setState] = useState(...)
  return <form>...</form>
}
```

### 2. generateMetadata on every page
```tsx
import type { Metadata } from 'next'
import { generateMetadata as buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: 'Page Title',
  description: 'Page description...',
  canonicalPath: '/page-path',
  pageType: 'guide',
})
```

### 3. @/ import alias always
```tsx
// GOOD
import { CTABlock } from '@/components/common/CTABlock'
import { siteConfig } from '@/data/site-config'

// BAD — never use relative paths
import { CTABlock } from '../../components/common/CTABlock'
```

### 4. No CSS modules
All styling is done via Tailwind utility classes. Never create `.module.css` files.

### 5. Client components that need analytics
```tsx
'use client'
import { trackCTAClick } from '@/lib/analytics'
// CTABlock, FAQAccordion, tool forms are all "use client"
```

---

## Page Template Pattern

```tsx
import type { Metadata } from 'next'
import { generateMetadata as buildMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { FAQAccordion } from '@/components/common/FAQAccordion'
import { CTABlock } from '@/components/common/CTABlock'
import { InfoCallout } from '@/components/common/InfoCallout'
import { LastUpdated } from '@/components/trust/LastUpdated'
import type { FAQ } from '@/types'

export const metadata: Metadata = buildMetadata({
  title: '...',
  description: '...',
  canonicalPath: '/path',
  pageType: 'guide',
})

const faqs: FAQ[] = [...]

export default function MyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-8 sm:py-12">
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Parent', href: '/parent' },
        { label: 'Current Page' },
      ]} />

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Page Title
      </h1>

      {/* ... content ... */}

      <section className="mt-14">
        <h2 className="text-xl font-bold text-foreground mb-6">FAQs</h2>
        <FAQAccordion faqs={faqs} headingLevel="h3" />
      </section>

      <div className="mt-10">
        <CTABlock
          heading="CTA heading"
          primaryCta={{ label: 'Action', href: '/path' }}
          variant="brand"
        />
      </div>

      <div className="mt-8 border-t border-border pt-6">
        <LastUpdated date="2025-03-01" />
      </div>
    </div>
  )
}
```

---

## Data Import Conventions

```tsx
// Provider data
import { allProviders, getProviderBySlug } from '@/data/providers'

// Site config
import { siteConfig, mtdConfig } from '@/data/site-config'

// Types
import type { Provider, FAQ, BreadcrumbItem } from '@/types'
```

---

## Environment Variables

No environment variables are required in Phase 1.

Phase 2 will require:
```env
# Analytics
NEXT_PUBLIC_GA_ID=         # Google Analytics 4 measurement ID
NEXT_PUBLIC_PLAUSIBLE_DOMAIN= # Plausible domain (alternative)

# CMS (if Contentful)
CONTENTFUL_SPACE_ID=
CONTENTFUL_ACCESS_TOKEN=

# CMS (if Sanity)
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
```

---

## Build Commands

```bash
npm run dev      # localhost:3000 — development server with hot reload
npm run build    # Production build — checks TypeScript and builds
npm run start    # Start production server after build
npm run lint     # ESLint
```

Always run `npm run build` before shipping new pages to catch TypeScript errors.

---

## Accessibility Checklist

Every page should:
- [ ] Have a single `<h1>` that is the first heading on the page
- [ ] Have logical heading hierarchy (H1 → H2 → H3, no skipping)
- [ ] Have descriptive `alt` text on all images (or `alt=""` for decorative)
- [ ] Have `aria-hidden="true"` on all decorative icons
- [ ] Have `aria-label` on navigation landmarks
- [ ] Have keyboard-accessible interactive elements (focus styles visible)
- [ ] Have sufficient colour contrast (WCAG AA minimum)

---

## Phase 2 Responsibilities

- **MDX integration** — add `@next/mdx` or `contentlayer` for blog posts and guide pages
- **Dynamic routes** — implement `[slug]` routes for providers when data grows
- **CMS integration** — connect Contentful or Sanity for editorial content management
- **Search** — implement Algolia or local search (Fuse.js for small datasets)
- **Image optimisation** — add `next/image` for provider logos and hero images
- **Core Web Vitals** — run Lighthouse CI in build pipeline, address any issues
- **ISR (Incremental Static Regeneration)** — add `revalidate` for dynamic data pages
