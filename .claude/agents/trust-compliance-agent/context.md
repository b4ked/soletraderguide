# Trust & Compliance Agent — Context

## Trust Components and Usage

### AffiliateDisclosure

File: `src/components/trust/AffiliateDisclosure.tsx`
Props: `variant?: 'banner' | 'inline' | 'footer'`, `className?: string`

**Banner variant** — Full disclosure notice with amber background. Used at top of commercial pages.
**Inline variant** — Small asterisk-style note near affiliate links in article text.
**Footer variant** — Brief one-line note at bottom of commercial pages.

Usage pattern in commercial pages:
```tsx
// Top of software/review/comparison pages:
<AffiliateDisclosure variant="banner" />

// Near affiliate link buttons in article text:
<AffiliateDisclosure variant="inline" />

// Bottom of page as a reminder:
<AffiliateDisclosure variant="footer" />
```

---

### LastUpdated

File: `src/components/trust/LastUpdated.tsx`
Props: `date: string` (ISO format), `className?: string`

Always placed at the bottom of content pages, after the last section and optionally after a divider:
```tsx
<div className="mt-8 border-t border-border pt-6">
  <LastUpdated date="2025-03-01" />
</div>
```

---

### SourceList

File: `src/components/trust/SourceList.tsx`
Props: `sources: Source[]`, `className?: string`

Source object:
```typescript
interface Source {
  title: string
  url: string
  description?: string
  date?: string
}
```

Used on the `/sources-methodology` page and review pages that cite specific sources.

---

## Disclosure Conventions (Summary)

| Page type | Required disclosures |
|-----------|---------------------|
| Review pages | `AffiliateDisclosure variant="banner"` at top; `variant="footer"` at bottom |
| Comparison pages | `AffiliateDisclosure variant="banner"` at top; `variant="footer"` at bottom |
| Software hub pages | `AffiliateDisclosure variant="banner"` at top |
| Blog posts (with providers) | `AffiliateDisclosure variant="inline"` near first affiliate mention |
| Tool pages (software chooser) | `AffiliateDisclosure variant="inline"` near intro; "We may earn a commission" on result screen |
| MTD guide pages | No disclosure needed (no commercial content) |
| Legal pages | No disclosure needed |
| Blog posts (no providers) | No disclosure needed |

---

## Legal Page Structure

### About page (`/about`)
Sections: Who We Are, What We Do, Editorial Approach, How We Make Money, Who We Write For, Contact

### Editorial Policy (`/editorial-policy`)
Sections: Independence, Research/Testing, Keeping Content Up to Date, Rating System, Sources, Corrections, Commercial Relationships

### Affiliate Disclosure (`/affiliate-disclosure`)
Sections: What This Means, How It Affects Reviews, How to Identify Links, Provider Relationships, User Rights

### Privacy Policy (`/privacy-policy`)
Sections: What Data We Collect, How We Use It, Cookies, Third-Party Services, UK GDPR Rights, Contact

### Terms and Conditions (`/terms-and-conditions`)
Sections: About This Website, Not Financial Advice (prominent), Accuracy, Affiliate Links, IP, Limitation of Liability, Governing Law

### Contact (`/contact`)
Sections: Editorial Enquiries, Corrections, Commercial Partnerships, Press Enquiries
+ InfoCallout: "We cannot answer personal tax questions"

### Sources and Methodology (`/sources-methodology`)
Sections: Research Process, Rating Criteria (table), Primary Sources (SourceList), Keeping Up to Date, Limitations

---

## Affiliate Relationship Handling

Current affiliate providers: Xero, QuickBooks (Intuit), Sage, FreeAgent

### What this means operationally
1. All links to these providers' pricing/sign-up pages use affiliate URLs
2. These links must have `rel="noopener sponsored"` and `target="_blank"`
3. All pages containing these links must show an affiliate disclosure
4. Affiliate link URLs are stored in the `affiliateLink` field of each provider in `src/data/providers/index.ts`

### Editorial independence is maintained by
1. Keeping affiliate URL management separate from editorial rating
2. Not allowing providers to see or influence draft content
3. Using consistent, documented rating criteria for all providers
4. Including cons and limitations in all reviews regardless of affiliate status
5. Disclosing all commercial relationships transparently to readers

---

## Phase 2 Trust Priorities

1. **Legal review** — Privacy policy and T&Cs reviewed by a solicitor (HIGH PRIORITY before significant traffic)
2. **Cookie consent banner** — Required when GA4/Plausible analytics are added
3. **Author credentials** — Add author bios with professional qualifications
4. **External review badge** — Have a CTA or AAT-qualified accountant review MTD guide content
5. **Corrections log** — Consider publishing a public corrections log for transparency
6. **ASA review** — Review all commercial content against ASA CAP Code section 3 (affiliate marketing)
