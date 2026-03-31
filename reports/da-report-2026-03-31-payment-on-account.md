# DA Impact Assessment — payment-on-account-explained-uk.mdx — 2026-03-31

## Content Assessed
- File: `src/content/blog/payment-on-account-explained-uk.mdx`
- Type: New blog post
- Topic: Payment on account UK — explaining HMRC's advance Self Assessment tax collection system for sole traders
- Primary keyword: payment on account UK

---

## DA Impact Score: 27/40

| Dimension | Score | Notes |
|-----------|-------|-------|
| Word count / depth | 3/5 | ~1,060 words — solid but below the 1,500+ long-form threshold that earns 3.5× more links |
| Original insight | 2/5 | Practical and clear, but no original data, HMRC statistics, or unique research angle. The "150% January payment" framing is a good hook but not original. |
| E-E-A-T signals | 2/5 | Author attributed. LastUpdated present via frontmatter. No HMRC GOV.UK citations for key factual claims (£1,000 threshold, 80% rule, 50% advance). No professional review noted. |
| Internal links to money pages | 4/5 | Links to /reviews/freeagent, /reviews/xero, /reviews/quickbooks, /tools/mtd-eligibility-checker — strong money page distribution |
| Link-earning angle | 3/5 | "First-year January shock" angle is relatable and shareable. No tool embed, no original data, no viral data point to anchor outreach. Moderate link-earning ceiling as written. |
| Topical relevance | 5/5 | Core topic for the site's authority theme — Self Assessment and sole trader tax mechanics |
| Freshness | 4/5 | Published today. Perennial topic that doesn't date quickly. Timing is good: approaching end of 2025–26 tax year and the July PoA deadline. |
| CTA alignment | 4/5 | CTA leads to /tools/mtd-software-chooser — highly relevant. Secondary CTA to eligibility checker. Well-targeted. |

---

## Verdict: GOOD DA Impact (27/40)

**Phase 1 context:** The site is in Phase 1 (DA 0→20), targeting 20–80 unique referring root domains. A score of 27/40 is a solid contribution to the site's topical authority. The post covers a core sole trader pain point not previously addressed on the site, fills a genuine content gap, and distributes link equity to money pages effectively.

The primary opportunities for improvement are E-E-A-T signals (HMRC citations) and expanding depth to 1,500+ words for greater link-earning potential.

---

## Recommendations

### HIGH — Add HMRC GOV.UK citations for key factual claims

The post states specific HMRC rules (£1,000 threshold, 80% at-source collection rule, 50% advance payment split) without citing the official source. For a tax and finance site, this is an E-E-A-T gap that affects trust with both users and Google's quality assessors.

**Proposed change:** Add inline citations linking to HMRC's official payment on account guidance page at `https://www.gov.uk/understand-self-assessment-bill/payments-on-account` when stating the threshold and mechanics. Alternatively, add a `<SourceList>` component at the bottom of the article.

**Evidence:** EE4 from Checklist 1 — "Tax fact claims reference HMRC guidance pages with links." This is especially important for YMYL (finance/tax) content.

**File:** `src/content/blog/payment-on-account-explained-uk.mdx`

**Route to:** Write-Up Agent (add inline HMRC citation or SourceList) → SEO Agent review → QA approval

---

### MEDIUM — Expand to 1,500+ words for enhanced link-earning potential

At ~1,060 words, the post is well above the minimum but below the long-form threshold (1,500+) that earns 3.5× more backlinks. Specific expansion opportunities that would add genuine value:

1. **A multi-income-level worked table** — show payment on account calculations for £2,000, £5,000, and £10,000 tax bills side by side. This kind of reference table is highly shareable and linkable.
2. **What happens when you stop self-employment** — a common question: how do payments on account end? This is a real reader question not currently answered in the post.
3. **Class 4 NI interaction** — the post mentions that PoA covers "Income Tax and Class 4 National Insurance combined" but doesn't explain what Class 4 NI is for readers unfamiliar with it.

**Route to:** Write-Up Agent (content expansion) → QA approval

---

### LOW — Seasonal link-building opportunity: July payment on account deadline

The second payment on account (31 July 2026) is ~4 months away. This post is well-timed to serve as a link target for:
- Accountancy firm blog posts warning clients about the July deadline
- Freelancer community posts (Reddit r/freelance UK, ContractorUK forums)
- Small Business UK and Enterprise Nation articles about tax planning

**Recommendation:** Flag this post for active internal promotion. Add a link to it from the `/mtd-for-sole-traders/deadlines` guide page where the July deadline is mentioned (if not already linked). This increases the post's internal link equity and positions it for external pickup.

**Route to:** SEO Agent (add link from deadlines guide page) — fast-track, low-risk change

---

## Routes
- Write-Up Agent: YES — HMRC citation addition (HIGH) and potential expansion (MEDIUM)
- SEO Agent: YES — add link from `/mtd-for-sole-traders/deadlines` to new post (LOW, fast-track)
- QA/Reviewer Agent: YES — required after any Write-Up or SEO Agent changes

---

## Follow-up Actions

```
PRIORITY: HIGH
ACTION: Add HMRC citation for payment on account rules — link to gov.uk/understand-self-assessment-bill/payments-on-account when stating the £1,000 threshold and 50% advance payment rule
FILE: src/content/blog/payment-on-account-explained-uk.mdx
ASSIGN_TO: Write-Up Agent
---
PRIORITY: MEDIUM
ACTION: Expand post to 1,500+ words with multi-income worked table, what-happens-when-you-stop-self-employment section, and brief Class 4 NI explanation
FILE: src/content/blog/payment-on-account-explained-uk.mdx
ASSIGN_TO: Write-Up Agent
---
PRIORITY: LOW
ACTION: Add internal link from /mtd-for-sole-traders/deadlines to /blog/payment-on-account-explained-uk where July deadline is mentioned
FILE: src/app/mtd-for-sole-traders/deadlines/page.tsx
ASSIGN_TO: SEO Agent (fast-track)
```
