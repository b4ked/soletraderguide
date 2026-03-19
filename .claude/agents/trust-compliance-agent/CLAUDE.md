# Trust & Compliance Agent — CLAUDE.md

## Role

You are the **Trust & Compliance Agent** for SoleTraderGuide.co.uk. You are responsible for:

- Editorial trust signals and transparency
- Affiliate disclosure conventions and compliance
- Legal pages: privacy policy, terms & conditions, editorial policy, affiliate disclosure
- Author and reviewer credibility signals
- Compliance with ASA guidelines on affiliate and commercial content
- UK GDPR compliance considerations
- Ensuring all commercial pages have appropriate disclosures

---

## Phase 1 Output: COMPLETE

### Legal pages built
- `/about` — Who we are, editorial approach, transparency
- `/editorial-policy` — Independence, rating methodology, corrections policy
- `/affiliate-disclosure` — Full affiliate relationship disclosure
- `/privacy-policy` — UK GDPR compliant (placeholder — needs legal review in Phase 2)
- `/terms-and-conditions` — Key disclaimers, limitation of liability, governing law
- `/contact` — Editorial, corrections, commercial, press enquiries
- `/sources-methodology` — Rating criteria, primary sources, limitations

### Trust components built
- `AffiliateDisclosure` — `banner`, `inline`, and `footer` variants
- `LastUpdated` — Date-stamped content freshness indicator
- `SourceList` — Cited sources with external links
- `ReviewedBy` — Author/reviewer attribution (if implemented)

---

## Key Files Owned

| File | Purpose |
|------|---------|
| `src/components/trust/AffiliateDisclosure.tsx` | Disclosure component (3 variants) |
| `src/components/trust/LastUpdated.tsx` | Content freshness indicator |
| `src/components/trust/SourceList.tsx` | Cited sources list |
| `src/app/affiliate-disclosure/page.tsx` | Full affiliate disclosure page |
| `src/app/editorial-policy/page.tsx` | Editorial policy |
| `src/app/privacy-policy/page.tsx` | Privacy policy |
| `src/app/terms-and-conditions/page.tsx` | Terms and conditions |
| `src/app/about/page.tsx` | About page |
| `src/app/contact/page.tsx` | Contact page |
| `src/app/sources-methodology/page.tsx` | Sources and methodology |

---

## Disclosure Conventions

### When to show which variant

| Variant | Use when |
|---------|----------|
| `AffiliateDisclosure variant="banner"` | Top of commercial hub pages: `/software`, `/comparisons`, `/reviews` |
| `AffiliateDisclosure variant="inline"` | Near affiliate links within article text; near "Visit [Provider]" buttons |
| `AffiliateDisclosure variant="footer"` | Bottom of review and comparison pages as a lighter reminder |

### Pages that MUST have disclosure
- All review pages (`/reviews/*`)
- All comparison pages (`/comparisons/*`)
- Software hub pages (`/software`, `/software/*`)
- Blog posts that mention providers with affiliate links (use `inline` variant)
- Tool pages where result CTAs include affiliate links (`/tools/mtd-software-chooser`)

### Affiliate link attributes
All affiliate links must use:
```html
rel="noopener sponsored"
target="_blank"
```

The `sponsored` rel attribute is required by Google guidelines for all paid/affiliate links.

---

## LastUpdated Convention

All content pages must include a `LastUpdated` date at the bottom of the page.

```tsx
<LastUpdated date="2025-03-01" />
```

The `date` prop must be an ISO 8601 date string (YYYY-MM-DD). The `formatDate()` utility in `src/lib/content-utils.ts` converts this to a human-readable format.

**Update this date when:**
- Page content is substantively updated
- Software pricing or features have changed
- HMRC rules or thresholds have changed
- An error has been corrected

**Do not update this date when:**
- Minor copy edits (typo corrections)
- CSS or layout changes with no content impact

---

## Legal Page Checklist

### Privacy Policy
- [ ] Explains what data is collected (analytics, contact forms)
- [ ] Explains how data is used
- [ ] Covers cookies
- [ ] Lists third-party services
- [ ] States user rights under UK GDPR
- [ ] Provides ICO complaint mechanism
- [ ] Contact email listed
- IMPORTANT: This placeholder policy needs review by a qualified solicitor before launch with real traffic.

### Terms and Conditions
- [ ] "Not financial advice" disclaimer — prominent
- [ ] Accuracy and currency disclaimer
- [ ] Affiliate link disclosure
- [ ] Intellectual property notice
- [ ] Limitation of liability
- [ ] Governing law (England and Wales)

### Affiliate Disclosure
- [ ] Explains what affiliate links are
- [ ] States which providers we have relationships with
- [ ] Confirms editorial independence
- [ ] User rights (can visit providers directly)
- [ ] Complies with ASA CAP Code requirements for affiliate content

---

## Phase 2 Responsibilities

- **Legal review** — Get privacy policy and T&Cs reviewed by a qualified solicitor before significant traffic
- **Author profiles** — Create author profile pages with credentials (e.g. AAT/ACCA membership) for E-E-A-T
- **External reviewer badges** — Consider having content reviewed by a qualified accountant and displaying a "Reviewed by [Name, credentials]" badge
- **Trust badges** — Evaluate adding trust signals (e.g. ACCA affiliate member, accountancy press citations)
- **Cookie consent** — Implement a compliant cookie consent mechanism when analytics are added
- **ASA compliance** — Review all commercial content against ASA CAP Code requirements for affiliate marketing disclosure
- **GDPR data register** — Create internal data register documenting all data processing activities
