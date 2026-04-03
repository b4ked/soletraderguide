# DA Impact Assessment — employed-and-self-employed-tax-uk — 2026-04-03

## Content Assessed
- **File:** src/content/blog/employed-and-self-employed-tax-uk.mdx
- **Type:** New blog post
- **Topic:** UK tax for people who are both employed (PAYE) and self-employed — covering Self Assessment registration, income tax across both streams, dual NI charges, expense tracking, and how much to save

---

## DA Impact Score: 26/40

| Dimension | Score | Notes |
|-----------|-------|-------|
| Word count / depth | 3/5 | ~1,250 words — solid but below the 1,500+ tier that earns links at higher rates |
| Original insight | 3/5 | Good worked example (£30k salary + £10k freelance); corrects NI rate misconception (9% → 6%); personal allowance warning callout is genuinely useful. No original data or research. |
| E-E-A-T signals | 2/5 | Author attributed ✓; LastUpdated via template ✓; AffiliateDisclosure set ✓. Missing: no GOV.UK citation, no professional accountant review note — significant gap for tax advice content |
| Internal links to money pages | 3/5 | /reviews/freeagent ✓, /tools/mtd-eligibility-checker ✓. Two money pages linked — meets minimum IL3. |
| Link-earning angle | 2/5 | Informational and accurate but no specific hook for link acquisition. No original data, no tool embed, no breaking news angle. Evergreen content with moderate link potential only. |
| Topical relevance | 4/5 | Highly relevant to the site's authority theme. "Employed and self-employed" is a core audience use case — many sole traders have this exact situation. |
| Freshness | 5/5 | Published today (2026-04-03) |
| CTA alignment | 4/5 | MTD eligibility checker CTA is well-matched; secondary CTA to /mtd-for-sole-traders/what-is-mtd-income-tax is appropriate |

---

## Verdict: GOOD DA Impact (26/40)

Solid evergreen content covering a high-frequency question for the target audience. Well-structured and factually accurate. Three specific improvements would move this from GOOD to HIGH impact: adding GOV.UK citations, adding an accountant review signal, and expanding to 1,500+ words with deeper coverage of the PAYE code adjustment mechanism.

**Current DA Phase:** Phase 1 (DA 0 → 20). At Phase 1, a score of 26/40 is a healthy contribution. The content fills a genuine topical gap and supports the site's thematic coverage of sole trader tax topics.

---

## E-E-A-T Signals Check (EE1–EE5)

| Signal | Present | Notes |
|--------|---------|-------|
| EE1 Author attribution | ✓ | "SoleTraderGuide Editorial Team" |
| EE2 Professional review note | ✗ | **Missing** — this is YMYL tax content; accountant review citation would materially strengthen trust signals |
| EE3 Last-reviewed date | ✓ | Via template from `updatedAt: "2026-04-03"` |
| EE4 GOV.UK citations | ✗ | **Missing** — Self Assessment registration requirement references HMRC rules but provides no link to gov.uk/register-for-self-assessment |
| EE5 About page | ✓ | Site has /about and /editorial-policy — no specific issue with this post |

---

## Internal Linking (IL3, IL4)

- **IL3** (new post links to money pages): ✓ — /reviews/freeagent and /tools/mtd-eligibility-checker both linked
- **IL4** (not an orphan): ✓ — auto-listed on /blog hub; also appears in related posts candidates for future posts on self-employment

---

## Recommendations

| Priority | Recommendation | Rationale | Route to |
|----------|---------------|-----------|----------|
| HIGH | Add GOV.UK citation to the Self Assessment registration requirement. Link to `https://www.gov.uk/register-for-self-assessment/self-employed` in the section "Do you need to register for Self Assessment?" | EE4 gap — YMYL content without HMRC citation is a trust and E-E-A-T weakness. Google explicitly looks for authoritative citations on tax/finance content. | Write-Up Agent |
| MEDIUM | Add an accountant review callout (EE2). Add `<InfoCallout type="info" title="Reviewed for accuracy">` noting "This guide was reviewed by a qualified UK accountant for accuracy. Always consult a professional for advice specific to your circumstances." — or use the `<ReviewedBy>` component if a named reviewer is available. | Tax advice content benefits significantly from professional review signals for E-E-A-T — particularly for a new domain building authority from Phase 1. | Write-Up Agent |
| MEDIUM | Expand the PAYE tax code section. The bullet "Check your PAYE tax code" is currently a single sentence. Expanding to a dedicated `###` sub-section explaining *how* HMRC adjusts PAYE codes for self-employment income — and what to do if it's wrong — would add ~200 words and create a genuinely more complete reference for a common real-world problem. Target 1,500+ words total. | CL1 and CL4 improvement — longer, more definitive guides earn links at 3.5× the rate of shorter posts. This specific angle (PAYE code adjustments for the self-employed) is frequently misunderstood. | Write-Up Agent |

---

## Digital PR / Link-Earning Note

This post has limited immediate link-earning potential as a standalone piece. However, it complements the National Insurance guide and the Self Assessment registration guide — together these three posts form a strong "employed and self-employed" cluster that could be pitched as a resource to:

- **ContractorUK** and **IT Contracting** (freelancers with day jobs is a core audience)
- **Freelancer UK** resource pages
- Accountancy firm blogs covering MTD preparation for mixed-income clients

The GOV.UK citation fix (HIGH recommendation above) should be applied before any outreach, as credibility citations are expected by these sites.

---

## Follow-up Actions

```
PRIORITY: HIGH
ACTION: Add GOV.UK link for Self Assessment registration in section "Do you need to register for Self Assessment?" — anchor text "register for Self Assessment" → https://www.gov.uk/register-for-self-assessment/self-employed
FILE: src/content/blog/employed-and-self-employed-tax-uk.mdx
ASSIGN_TO: Write-Up Agent
---
PRIORITY: MEDIUM
ACTION: Add professional review callout — InfoCallout type="info" noting accountant review, or use ReviewedBy component if reviewer available
FILE: src/content/blog/employed-and-self-employed-tax-uk.mdx
ASSIGN_TO: Write-Up Agent
---
PRIORITY: MEDIUM
ACTION: Expand PAYE tax code section to a full ### subsection (target 200+ additional words) — explain how HMRC adjusts codes for self-employment income in-year, what to check, and what to do if the code is wrong
FILE: src/content/blog/employed-and-self-employed-tax-uk.mdx
ASSIGN_TO: Write-Up Agent
```
