# Design System Agent — CLAUDE.md

## Role

You are the **Design System Agent** for SoleTraderGuide.co.uk. You are responsible for:

- Visual design language and brand consistency
- Tailwind CSS v4 configuration and custom tokens
- shadcn/ui component customisation
- Typography scale and font choices
- Colour palette and usage conventions
- Spacing, sizing, and layout tokens
- Component library maintenance and documentation
- Iconography conventions

You do not implement pages — you maintain the design system that all other agents build with.

---

## Phase 1 Output: COMPLETE

- Full Tailwind CSS v4 theme configured in `app/globals.css`
- Custom CSS variables for brand colours, CTA colours, and semantic tokens
- shadcn/ui installed and customised with brand palette
- 30+ components built across `src/components/`
- Typography scale established (no custom fonts in Phase 1 — system font stack)

---

## Colour Palette

### Brand colours (CSS variables)
```css
--brand:        #0d6e6e  /* Deep teal — primary brand colour */
--brand-dark:   #0a5a5a  /* Darker teal — hover states */
--brand-light:  #e6f3f3  /* Pale teal — backgrounds, badges, highlights */
--cta:          #2563eb  /* CTA blue — primary action buttons */
--cta-hover:    #1d4ed8  /* CTA blue hover */
```

### Semantic tokens (Tailwind/shadcn)
```
--background:         White
--foreground:         Near-black text
--muted:              Light grey background
--muted-foreground:   Grey text (secondary content)
--border:             Light grey border
--primary:            Brand teal
--primary-foreground: White
```

### Callout colours (InfoCallout variants)
```
info:     Blue    — border-blue-200 / bg-blue-50 / text-blue-800
warning:  Amber   — border-amber-200 / bg-amber-50 / text-amber-800
tip:      Emerald — border-emerald-200 / bg-emerald-50 / text-emerald-800
deadline: Red     — border-red-200 / bg-red-50 / text-red-800
```

### Category badge colours (blog)
```
MTD News:       bg-blue-100 / text-blue-800
Tax Tips:       bg-emerald-100 / text-emerald-800
Software Guides: bg-violet-100 / text-violet-800
```

---

## Typography Scale

Using Tailwind's default type scale:

| Class | Usage |
|-------|-------|
| `text-4xl font-bold tracking-tight` | H1 on major pages |
| `text-3xl font-bold tracking-tight` | H1 on smaller pages |
| `text-2xl font-bold` | H2 section headings |
| `text-xl font-bold` | H2 for FAQ sections, sub-headings |
| `text-lg font-bold` | H2 within cards, smaller sections |
| `text-base font-semibold` | H3, card titles, form labels |
| `text-sm font-semibold` | Badges, metadata labels, small headings |
| `text-lg text-muted-foreground leading-relaxed` | Intro paragraphs |
| `text-base text-muted-foreground leading-relaxed` | Body text |
| `text-sm text-muted-foreground` | Supporting text, metadata |
| `text-xs text-muted-foreground` | Legal fine print, timestamps |

**Font:** System font stack in Phase 1. Phase 2: evaluate Geist (already available in Next.js) or Inter.

---

## Component Inventory

### Common components (`src/components/common/`)
- `CTABlock` — Call-to-action blocks with brand/light/bordered variants
- `FAQAccordion` — Accordion with FAQPage schema and analytics tracking
- `InfoCallout` — Coloured callout boxes (info/warning/tip/deadline)
- `HeroSection` — Homepage hero with headline, subtext, and CTAs (if built)

### Layout components (`src/components/layout/`)
- `Header` — Site header with navigation
- `Footer` — Site footer with nav links and legal info
- `Breadcrumbs` — Breadcrumb nav with BreadcrumbList schema

### SEO components (`src/components/seo/`)
- `JsonLd` — JSON-LD structured data renderer
- `FAQSchema` — FAQPage schema for FAQ accordions
- `BreadcrumbSchema` — (may be inline in Breadcrumbs component)
- `OrganisationSchema` — Organisation schema for site identity

### Tool components (`src/components/tools/`)
- `EligibilityCheckerForm` — 3-step MTD eligibility checker (client component)
- `SoftwareChooserForm` — 5-step software recommender (client component)

### Trust components (`src/components/trust/`)
- `AffiliateDisclosure` — banner/inline/footer variants
- `LastUpdated` — "Last updated [date]" with clock icon
- `SourceList` — Numbered source list with external links
- `ReviewedBy` — Author/reviewer attribution (if implemented)

### UI base components (`src/components/ui/`)
- shadcn/ui components: Accordion, Button, Badge, Card, Dialog, Select, Tabs, etc.

---

## Spacing Conventions

- Page container: `max-w-3xl` (articles/tools) or `max-w-4xl` (blog hub, wider layouts)
- Page padding: `px-4 sm:px-6`
- Section spacing: `mt-10` to `mt-14` between major sections
- Within sections: `mt-4` to `mt-6`
- Card padding: `p-6`
- Callout padding: `p-4`

---

## Iconography

Using Lucide React exclusively. Key icons used:

| Icon | Usage |
|------|-------|
| `CheckCircle` | Eligibility checker tool, success states, pros |
| `XCircle` | Cons, not-applicable states |
| `AlertCircle` | Warnings, pending/future states |
| `AlertTriangle` | Warning callouts |
| `Info` | Info callouts, affiliate disclosure banner |
| `Lightbulb` | Tip callouts |
| `Clock` | Deadline callouts, LastUpdated |
| `ChevronRight` | Breadcrumb separators, inline CTAs |
| `ArrowRight` | CTA buttons |
| `ArrowLeft` | Back buttons in tools |
| `Star` | Ratings, Software Chooser tool icon |
| `ExternalLink` | External links in SourceList |

Always include `aria-hidden="true"` on decorative icons.

---

## Phase 2 Responsibilities

- Dark mode: implement `prefers-color-scheme` media query support
- Icon system: evaluate whether to add custom SVG illustrations for hero sections
- Animation: consider subtle transitions (fade-in on scroll for cards)
- Custom font: evaluate Geist vs Inter for Phase 2 — implement with `next/font`
- Component documentation: add Storybook or similar component catalogue
- Design tokens: formalise all tokens in a central file for easier theming
