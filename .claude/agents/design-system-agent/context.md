# Design System Agent — Context

## Colour Tokens Reference

All custom colours are defined as CSS variables in `src/app/globals.css`.

```css
/* Brand */
--brand:        #0d6e6e
--brand-dark:   #0a5a5a
--brand-light:  #e6f3f3

/* CTA */
--cta:          #2563eb
--cta-hover:    #1d4ed8

/* Shadcn/ui semantic tokens */
--background:        (white)
--foreground:        (near-black)
--muted:             (light grey)
--muted-foreground:  (medium grey)
--border:            (light grey)
--primary:           brand teal
--primary-foreground: white
```

## Typography Scale in Use

| Element | Tailwind classes |
|---------|----------------|
| Page H1 (large) | `text-3xl sm:text-4xl font-bold tracking-tight text-foreground` |
| Section H2 | `text-2xl font-bold text-foreground` |
| Sub H2 | `text-xl font-bold text-foreground` |
| Card H2 | `text-lg font-bold text-foreground` |
| Body intro | `text-lg text-muted-foreground leading-relaxed` |
| Body | `text-base text-muted-foreground leading-relaxed` (or `text-sm`) |
| Metadata | `text-sm text-muted-foreground` |
| Fine print | `text-xs text-muted-foreground` |

## Component File Inventory

```
src/components/
├── common/
│   ├── CTABlock.tsx           # "use client" — analytics tracking
│   ├── FAQAccordion.tsx       # "use client" — accordion + analytics
│   └── InfoCallout.tsx        # Server component
├── layout/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Breadcrumbs.tsx        # Server component + JsonLd
├── seo/
│   ├── JsonLd.tsx             # Renders JSON-LD script tags
│   ├── FAQSchema.tsx          # FAQPage schema
│   └── OrganisationSchema.tsx # Organisation schema
├── tools/
│   ├── EligibilityCheckerForm.tsx  # "use client"
│   └── SoftwareChooserForm.tsx     # "use client"
├── trust/
│   ├── AffiliateDisclosure.tsx  # Server component
│   ├── LastUpdated.tsx          # Server component
│   └── SourceList.tsx           # Server component
└── ui/                          # shadcn/ui base components
    ├── accordion.tsx
    ├── badge.tsx
    ├── button.tsx
    ├── card.tsx
    └── ... (other shadcn components)
```

## Border Radius Conventions

- Cards: `rounded-xl` (larger, friendly)
- Buttons: `rounded-lg`
- Callouts/InfoCallout: `rounded-lg`
- Badges/pills: `rounded-full`
- Progress bars: `rounded-full`
- Table cells: no rounding (inside table)

## Shadow Usage

- Cards on hover: `hover:shadow-md transition-shadow`
- No default box shadows (flat design for most elements)
- Modals/dialogs: `shadow-xl` (shadcn default)

## Interactive State Conventions

- Links: `hover:text-brand transition-colors`
- Buttons: `hover:bg-brand-dark transition-colors` (teal) or `hover:bg-[#1d4ed8]` (blue CTA)
- Card links: `hover:border-brand hover:shadow-md transition-all`
- Focus: `focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2`

## Phase 2 Design Decisions Pending

- **Custom font:** Geist (available in Next.js 15) is the leading candidate. Would add personality while maintaining readability.
- **Dark mode:** Requires adding dark-mode variants for all custom CSS variables.
- **Hero illustrations:** Consider simple SVG illustrations for the homepage hero and tool pages.
- **Micro-animations:** Subtle fade-in for cards on scroll (Intersection Observer).
- **Icon set expansion:** May need custom icons for specific MTD concepts (quarterly calendar, tax forms, etc.).
