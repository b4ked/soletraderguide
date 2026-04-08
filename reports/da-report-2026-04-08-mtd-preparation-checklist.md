# DA Impact Assessment — mtd-preparation-checklist-april-2026-uk — 8 April 2026

> **Run type:** On-push assessment
> **Triggered by:** New blog post published — `src/content/blog/mtd-preparation-checklist-april-2026-uk.mdx`

---

## Content Assessed

- **File:** `src/content/blog/mtd-preparation-checklist-april-2026-uk.mdx`
- **Type:** New blog post
- **Topic:** Step-by-step MTD preparation checklist for sole traders affected by Phase 1 (April 2026)
- **Published:** 2026-04-08 — two days after MTD for Income Tax Phase 1 went live (6 April 2026)
- **Word count:** ~1,330 words (body)

---

## DA Impact Score: 29/40

| Dimension | Score | Notes |
|-----------|-------|-------|
| Word count / depth | 3/5 | ~1,330 words — solid but below the 1,500+ long-form threshold that earns 3.5× more links |
| Original insight or data | 2/5 | Practical checklist format; no original data, surveys, or HMRC statistics. Useful but not differentiated from what any MTD site could publish. |
| E-E-A-T signals | 2/5 | Author stated as SoleTraderGuide Editorial Team ✓; no accountant review attribution; no external GOV.UK/HMRC citations in body — relies on internal links only |
| Internal links to money pages | 5/5 | Links to all 4 review pages, software hub, MTD software chooser, eligibility checker, and first-quarterly-update guide — excellent money page coverage |
| Link-earning angle | 2/5 | Checklist is useful and perfectly timed (MTD just launched), but checklist format is widely replicated. No original data hook, no calculable element, no primary research. |
| Topical relevance | 5/5 | This is the site's core authority theme — MTD preparation is the most searched MTD topic right now |
| Freshness | 5/5 | Published 2 days after MTD Phase 1 launch; content is maximally timely for search intent in April 2026 |
| CTA alignment | 5/5 | Software chooser CTA directly aligned with the post's purpose (helping readers pick MTD software) |

---

## Verdict: GOOD DA Impact (29/40)

**Phase 1 context:** At Phase 1 (Foundation, DA 0→20), this score is strong. The post fills a critical topical gap, is perfectly timed with the MTD launch, and sends strong internal link equity to all money pages. The primary weaknesses are E-E-A-T depth (no external citations, no expert review) and link-earning differentiation (checklist format is replicable by competitors).

The post is a solid Phase 1 piece. To maximise DA return, two targeted follow-up improvements would meaningfully raise the score.

---

## Recommendations

### 1. Add GOV.UK external citations [HIGH priority — E-E-A-T]

The post advises sole traders to sign up for MTD ITSA and references HMRC processes throughout, but cites no GOV.UK URLs. For a YMYL finance post, this is a meaningful E-E-A-T gap.

**Proposed additions:**
- After the sign-up instructions in Step 4: link to `https://www.gov.uk/guidance/sign-up-to-make-tax-digital-for-income-tax` with anchor text "HMRC's MTD sign-up guidance"
- After the quarterly schedule table in Step 6: link to `https://www.gov.uk/guidance/use-software-to-send-income-tax-updates` for HMRC's official confirmation of quarterly deadlines
- These external links signal to Google that the content references authoritative primary sources — important for YMYL content

**Route to:** Write-Up Agent (content edit) → SEO Agent (spot-check) → QA/Reviewer (build gate)

---

### 2. Expand to 1,500+ words with a penalty and soft-landing section [MEDIUM priority — depth]

The post currently omits two topics that are high-search-intent right now:
- **What is the MTD soft landing year?** — HMRC's 2026/27 soft-landing approach means reduced penalties for some compliance failures; many sole traders are searching for this
- **What are MTD penalty points?** — HMRC's points-based penalty system is new and widely misunderstood

Adding these as a new H2 ("## What happens if you miss a quarterly deadline — penalties and the soft landing year") would:
- Push the post into 1,500+ long-form territory (higher link-earning potential)
- Capture additional long-tail search queries
- Differentiate the post from competitors' basic checklists

**Estimated word addition:** 200–300 words
**Route to:** Write-Up Agent (content expansion)

---

### 3. Add a `<SourceList>` component at the bottom [LOW priority — E-E-A-T]

Adding a formal source list citing HMRC's MTD guidance pages would demonstrate editorial rigour. The `<SourceList>` component already exists in the component library.

**Proposed sources:**
- HMRC: Sign up for Making Tax Digital for Income Tax (gov.uk)
- HMRC: Use software to send income tax updates (gov.uk)
- HMRC: Making Tax Digital for Income Tax — overview (gov.uk)

**Route to:** Build Agent or Write-Up Agent (fast-track quick win — no content decision required)

---

## Routes

- **SEO Agent:** No immediate action required (post passed SEO review)
- **Write-Up Agent:** Recommendations 1 and 2 require content edits
- **Build Agent:** Recommendation 3 (SourceList addition)
- **QA/Reviewer Agent:** Required after any content changes to re-verify build passes

---

## Follow-up Actions

```
PRIORITY: HIGH
ACTION: Add two GOV.UK external citations to Step 4 (sign-up) and Step 6 (quarterly schedule) with descriptive anchor text
FILE: src/content/blog/mtd-preparation-checklist-april-2026-uk.mdx
ASSIGN_TO: Write-Up Agent
---
PRIORITY: MEDIUM
ACTION: Expand post with 200–300 word section on MTD soft-landing year and penalty points system
FILE: src/content/blog/mtd-preparation-checklist-april-2026-uk.mdx
ASSIGN_TO: Write-Up Agent
---
PRIORITY: LOW
ACTION: Add <SourceList> component with GOV.UK sources to bottom of post
FILE: src/content/blog/mtd-preparation-checklist-april-2026-uk.mdx
ASSIGN_TO: Build Agent
```
