## DA Impact Assessment — making-tax-digital-landlords-complete-guide-uk.mdx — 2026-04-02

### Content Assessed
- File: `src/content/blog/making-tax-digital-landlords-complete-guide-uk.mdx`
- Type: New blog post
- Topic: Complete guide to Making Tax Digital for UK landlords — thresholds, quarterly reporting, digital records, mortgage interest restriction, software options, and preparation steps

### DA Impact Score: 30/40

| Dimension | Score | Notes |
|-----------|-------|-------|
| Word count / depth | 3 | ~1,350 words. Above 800w threshold but below 1,500w target for pillar-grade content. Covers the topic breadth well; mortgage interest restriction section is underweight. |
| Original insight | 3 | Landlord-specific angles (combined income threshold calculation, mortgage interest restriction under MTD, landlord-specific vs general-purpose software trade-offs) offer genuine differentiation vs generic MTD guides. No data or original analysis. |
| E-E-A-T signals | 3 | Author attributed (SoleTraderGuide Editorial Team), `LastUpdated` present, `affiliateDisclosure: true`. No named accountant review or expert quote. No GOV.UK citation for qualifying income definition or mortgage interest restriction rules. |
| Internal links to money pages | 4 | Links to `/reviews/xero`, `/reviews/freeagent`, `/tools/mtd-software-chooser`, `/tools/mtd-eligibility-checker` — four direct links to conversion pages. Well executed. |
| Link-earning angle | 3 | Published at a high-relevance moment (6 April 2026 — Phase 1 mandatory date). Comprehensive and practical, but no data hook, survey, or original research angle that would compel a journalist or accountancy blog to cite this specifically. |
| Topical relevance | 5 | Directly on-theme. MTD for landlords is a core topical gap many sites underserve — landlord-specific coverage strengthens the site's breadth authority on MTD ITSA. |
| Freshness | 5 | Published on the exact date MTD Phase 1 becomes mandatory (6 April 2026). Timing is optimal for search intent. |
| CTA alignment | 4 | Primary CTA to `/tools/mtd-software-chooser`; secondary to `/tools/mtd-eligibility-checker`. Directly aligned to commercial goals. `cta.description` is specific and landlord-relevant. |

### Verdict: GOOD DA Impact (30/40)

This is a solid, well-structured pillar-adjacent post published at optimal timing. The main gap is depth — it falls short of the 1,500w+ threshold that earns 3.5× more links, and lacks the expert E-E-A-T signals (accountant review, GOV.UK citation) that would make it a trustworthy reference for accountancy press to cite.

### Phase Context
Site is in **Phase 1 (DA 0→20)**. A score of 30/40 is strong for Phase 1. The content fills a genuine topical gap (landlords are an underserved MTD audience on this site) and supports the thematic authority build. The two improvements below would push this to the 35+ range and materially improve its link-earning ceiling.

---

### Recommendations

**1. Add a worked mortgage interest restriction example (HIGH)**

The mortgage interest restriction section explains the concept accurately but does not show the maths. A simple worked example (e.g. landlord with £55,000 gross rent, £18,000 mortgage interest, 40% income tax payer — showing how basic rate restriction applies at Final Declaration) would make this the definitive explanation on this topic for landlords. This type of concrete, step-by-step worked example is what accountancy bloggers and landlord forums cite and link to. Target: expand section to ~250 words with a worked example.

**2. Add a GOV.UK citation for qualifying income definition (MEDIUM)**

The qualifying income definition is a high-stakes factual claim that directly determines whether a landlord must comply. Adding a `<SourceList>` with the GOV.UK ITSA guidance page as a citation strengthens E-E-A-T considerably for a YMYL finance topic. This is low effort, high trust-signal return.

**3. Add an accountant-reviewed note to the mortgage interest restriction section (MEDIUM)**

The mortgage interest restriction section involves nuanced tax calculation. Adding a `<ReviewedBy>` component or inline "reviewed by a qualified accountant" note with a linked reviewer would signal credibility to both readers and journalists. This directly supports Checklist 1 items EE2 and EE5. Route to Write-Up Agent when an accountant reviewer relationship is established.

---

### E-E-A-T Quick Checks (EE1–EE5)
- EE1 Author credentials: ✅ "SoleTraderGuide Editorial Team" attributed
- EE2 Professional review: ⚠️ Not present — recommended for mortgage interest section
- EE3 Last-reviewed date: ✅ `updatedAt: "2026-04-02"` — current
- EE4 HMRC/GOV.UK citations: ⚠️ No inline GOV.UK citations — recommended
- EE5 About page: ✅ Site has `/about` and `/editorial-policy` — adequate for Phase 1

### Internal Linking (IL3, IL4)
- IL3 Links to money pages: ✅ 4 links to review and tool pages
- IL4 Orphan check: ✅ Post will be reachable via blog hub and sitemap immediately

---

### Routes
- SEO Agent: YES — for GOV.UK citation addition (SourceList) when a follow-up commit is triggered
- QA/Reviewer Agent: YES — for final approval on any follow-up improvements

---

### Follow-up Actions

```
PRIORITY: MEDIUM
ACTION: Expand mortgage interest restriction section with a worked numerical example (~200-250 words) to increase depth, differentiation, and link-earning potential
FILE: src/content/blog/making-tax-digital-landlords-complete-guide-uk.mdx
ASSIGN_TO: Write-Up Agent
---
PRIORITY: MEDIUM
ACTION: Add GOV.UK citation for qualifying income definition using <SourceList> component to strengthen E-E-A-T on a YMYL factual claim
FILE: src/content/blog/making-tax-digital-landlords-complete-guide-uk.mdx
ASSIGN_TO: Write-Up Agent
---
PRIORITY: LOW
ACTION: Add accountant reviewer credit to mortgage interest restriction section (requires establishing an accountant reviewer relationship first)
FILE: src/content/blog/making-tax-digital-landlords-complete-guide-uk.mdx
ASSIGN_TO: Write-Up Agent (after accountant reviewer relationship established)
```
