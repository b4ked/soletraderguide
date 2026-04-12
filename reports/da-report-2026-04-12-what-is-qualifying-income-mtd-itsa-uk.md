# DA Impact Assessment — what-is-qualifying-income-mtd-itsa-uk — 12 April 2026

---

## Content Assessed

- **File:** `src/content/blog/what-is-qualifying-income-mtd-itsa-uk.mdx`
- **Type:** New blog post
- **Topic:** What is qualifying income for MTD ITSA? — Explains which income sources count towards the MTD threshold, with worked examples for five common mixed-income scenarios and a clear gross-vs-net distinction.
- **Category:** `mtd-guides`
- **Word count:** ~1,000 words
- **Phase context:** Phase 1 (DA 0→20) — content foundation build

---

## DA Impact Score: 26/40

| Dimension | Score | Notes |
|-----------|-------|-------|
| Word count / depth | 3/5 | ~1,000 words; substantive but below the 1,500+ threshold that earns 3.5× more links |
| Original insight | 2/5 | Good practical explanation with 5 worked examples; covers HMRC rules clearly but not uniquely researched |
| E-E-A-T signals | 2/5 | Author attribution present; no expert/accountant review note; no GOV.UK/HMRC citation links |
| Internal links to money pages | 2/5 | Links to `/tools/mtd-eligibility-checker` ✓ but not to software hub, reviews, or comparisons |
| Link-earning angle | 2/5 | Practical worked examples and gross-vs-net distinction are genuinely useful; no PR-worthy hook |
| Topical relevance | 5/5 | Core MTD topic directly aligned with site's authority theme; fills a clear content gap |
| Freshness | 5/5 | Published 12 April 2026 — MTD is live from 6 April 2026, this is highly timely |
| CTA alignment | 5/5 | CTA to eligibility checker is well-matched to reader intent at end of post |

---

## Verdict: GOOD DA Impact (26/40)

This is a solid Phase 1 content piece. The topic is highly relevant — qualifying income is one of the most-searched MTD concepts among people near the threshold — and the timing (one week after mandatory MTD launched) makes it timely. The five worked scenarios are practical and accurate.

The main DA weaknesses are: (1) word count is below long-form threshold; (2) no E-E-A-T signals beyond author attribution; (3) no links to commercial/money pages to distribute authority into the review and software pages. These are actionable improvements.

**Phase 1 assessment:** A score of 26/40 in Phase 1 is acceptable and above the 20–24 floor. The topical gap this fills is genuine — the qualifying income definition catches many people out — and the post will support organic rankings for "what counts as qualifying income MTD" and similar queries.

---

## Recommendations

### 1. Expand to 1,500+ words and add HMRC GOV.UK citations

**Priority:** HIGH  
**Rationale:** At 1,000 words, this is a good post. At 1,500+ words, it becomes a candidate for genuine link earning. The expansion opportunity is clear: add a section on edge cases HMRC has specifically addressed (rent-a-room income details, jointly-owned properties, foreign nationals with UK property, furnished holiday lets counting separately vs combined). Each of these is a real question people have. Adding 3–4 GOV.UK citation links (to HMRC's MTD ITSA guidance pages) also materially improves E-E-A-T on a tax-adjacent post — financial content benefits significantly from source citations.

**Proposed additions:**
- New H2: "Edge cases: income types that are sometimes misunderstood" — covering jointly-owned property (each owner counted on their own income), furnished holiday lets, income from a deceased estate, sub-letting
- Add `<SourceList>` component at bottom or inline GOV.UK links on key claims
- Add sentence linking to `/software/best-mtd-software-for-sole-traders` in the concluding section: "Once you've confirmed you are in scope, choosing HMRC-recognised software is the next step — our [guide to the best MTD software](/software/best-mtd-software-for-sole-traders) covers the main options."

**File:** `src/content/blog/what-is-qualifying-income-mtd-itsa-uk.mdx`  
**Assign to:** Write-Up Agent (content expansion) + SEO Agent (verify internal link addition)

---

### 2. Add a link to `/software/best-mtd-software-for-sole-traders` in the concluding section

**Priority:** MEDIUM (fast-track quick win)  
**Rationale:** The concluding "How to check whether you are in scope" section addresses readers who have confirmed — or are about to confirm — that MTD applies to them. This is the exact moment they are most receptive to software recommendations. A single contextual link to the software hub in the final paragraph would distribute authority to a key money page and capture the conversion moment.

**Proposed change:** In the final paragraph of `src/content/blog/what-is-qualifying-income-mtd-itsa-uk.mdx`, after the eligibility checker link and before the end of the paragraph, add: "If your income puts you in scope, our [guide to the best MTD software for sole traders](/software/best-mtd-software-for-sole-traders) covers what to choose next."

**File:** `src/content/blog/what-is-qualifying-income-mtd-itsa-uk.mdx`  
**Route:** Fast-track quick win — no SEO Agent review required; route directly to QA/Reviewer Agent  
**Assign to:** Write-Up Agent

---

### 3. Add a `<ReviewedBy>` or professional review attribution

**Priority:** MEDIUM  
**Rationale:** This post explains HMRC tax rules and is YMYL-adjacent (Your Money Your Life). E-E-A-T improvement for financial content is material for Phase 1 DA building. A brief "This content has been reviewed for accuracy by [Name], [Qualification]" note — using the `<ReviewedBy>` component — would improve E-E-A-T signals measurably. The site currently has no professional review attribution on any blog post.

**Note:** This requires a real reviewer name. Recommend this as a site-wide trust improvement in the next Write-Up Agent batch, not just for this one post.

**File:** `src/content/blog/what-is-qualifying-income-mtd-itsa-uk.mdx` (and all YMYL-adjacent posts)  
**Assign to:** Write-Up Agent (when reviewer details are confirmed)

---

## Routes

- **SEO Agent:** Yes — for the content expansion (recommendation 1); verify internal link count and keyword coverage after expansion
- **QA/Reviewer Agent:** Yes — for recommendation 2 (fast-track quick win internal link addition)

---

## Follow-up Actions

```
PRIORITY: HIGH
ACTION: Expand post to 1,500+ words — add edge cases section (jointly-owned property, furnished holiday lets, sub-letting), add GOV.UK source citations, add link to /software/best-mtd-software-for-sole-traders
FILE: src/content/blog/what-is-qualifying-income-mtd-itsa-uk.mdx
ASSIGN_TO: Write-Up Agent
---
PRIORITY: MEDIUM
ACTION: Fast-track — add single internal link to /software/best-mtd-software-for-sole-traders in concluding paragraph
FILE: src/content/blog/what-is-qualifying-income-mtd-itsa-uk.mdx
ASSIGN_TO: Write-Up Agent (via QA/Reviewer Agent fast-track)
---
PRIORITY: MEDIUM
ACTION: Add professional review attribution (<ReviewedBy> component) to YMYL-adjacent blog posts site-wide, starting with qualifying-income and other tax-rules explainers
FILE: Multiple src/content/blog/*.mdx
ASSIGN_TO: Write-Up Agent (requires confirmed reviewer credentials)
```
