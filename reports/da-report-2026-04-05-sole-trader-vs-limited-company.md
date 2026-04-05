# DA Impact Assessment — sole-trader-vs-limited-company-uk.mdx — 2026-04-05

## Content Assessed
- File: `src/content/blog/sole-trader-vs-limited-company-uk.mdx`
- Type: New blog post
- Topic: Structural decision guide — when to stay as a sole trader vs incorporating as a limited company; tax comparison, liability, admin burden, and incorporation process

---

## DA Impact Score: 27/40

| Dimension | Score | Notes |
|-----------|-------|-------|
| Word count / depth | 3 | ~1,200 words — solid but not long-form; 1,500+ would qualify for "definitive guide" territory |
| Original insight | 3 | Good: updated £40–50k threshold (not the outdated £30k advice), correct 2025-26 dividend rates (8.75%/33.75%), and honest narrowing of the tax saving. Not citing original data or survey. |
| E-E-A-T signals | 3 | Author credited as "SoleTraderGuide Editorial Team"; warning callout advises readers to consult an accountant; `LastUpdated` present. Missing: named accountant review, GOV.UK citations, specific HMRC reference links. |
| Internal links to money pages | 3 | Links to `/mtd-for-sole-traders/what-is-mtd-income-tax`, `/tools/mtd-eligibility-checker`, `/blog/income-tax-rates-sole-traders-2025-26`, `/blog/national-insurance-sole-traders-class-2-class-4`. Missing: links to `/software`, `/comparisons`, or any review page. |
| Link-earning angle | 2 | Highly competitive topic (every accountancy site covers this). The post adds value with current rates and updated threshold advice but lacks a unique angle — no original data, no expert quote, no interactive tax comparison tool. |
| Topical relevance | 4 | Directly in the site's core authority theme: sole trader financial decisions + MTD context. High relevance to the target audience. |
| Freshness | 5 | Published 5 April 2026 — same week as MTD Phase 1 mandatory start date. Maximum timeliness. |
| CTA alignment | 4 | CTA directs to `/tools/mtd-software-chooser` — well-matched to a reader deciding between structures who will need MTD-compliant software either way. |

---

## Verdict: GOOD DA Impact (27/40)

Solid, timely content that covers a high-search-volume topic with current, accurate information. The timing — published on the exact week MTD Phase 1 begins — is excellent. The main DA weakness is the lack of a link-earning differentiator: the topic is saturated and without original data, an expert quote, or a comparison tool, the post will struggle to attract editorial backlinks.

**Phase context:** In Phase 1 (DA 0→20), a score of 27/40 is a good result. This post contributes meaningfully to topical depth and E-E-A-T. The recommendations below are improvements for a follow-up commit, not blockers.

---

## Recommendations

### 1 — Add a sole trader vs limited company tax comparison calculator (MEDIUM priority)
The most powerful link-earning addition would be an interactive tax comparison tool embedded on or linked from this post. A simple input (annual profit) producing a side-by-side tax bill estimate would be highly shareable and genuinely useful. This is a Phase 2 project but should be planned now.
- Route to: **Frontend/Build Agent** (new tool at `/tools/sole-trader-vs-limited-company-calculator`) — plan for future pipeline
- Estimated DA impact uplift: +3–4 points on this post's link-earning score

### 2 — Add at least one link to the software hub or comparison pages (LOW priority, quick win)
The post mentions accounting software in the context of both structures but does not link to `/software/best-mtd-software-for-sole-traders` or `/comparisons`. Adding one natural internal link would improve both authority flow to money pages and reader journey.
- Suggested placement: In the "Admin: what you are actually signing up for" section, after mentioning that a limited company needs an accountant: "If you are looking for MTD-compatible software for either structure, see [our guide to the best MTD software for sole traders](/software/best-mtd-software-for-sole-traders)."
- Route to: **Write-Up Agent** (fast-track quick win — low risk, single internal link addition)

### 3 — Add GOV.UK citation for corporation tax rates (LOW priority)
The post states corporation tax rates (19%/25%) as fact without a HMRC source. Adding a GOV.UK reference link would strengthen E-E-A-T on a financial claim. E.g. "Corporation tax: 19% on profits up to £50,000 ([GOV.UK](https://www.gov.uk/corporation-tax-rates)) — this would improve trust signals for YMYL content.
- Route to: **Write-Up Agent** (fast-track, single citation addition)

---

## E-E-A-T Assessment (EE1–EE5)
- **EE1 Author credentials:** "SoleTraderGuide Editorial Team" — acceptable for Phase 1. Named author + credentials recommended for Phase 2. ✅ Pass
- **EE2 Professional review:** Not present. This post advises on tax structure — a "Reviewed by a qualified accountant" note would strengthen E-E-A-T for a YMYL topic. ⚠️ Recommend for follow-up
- **EE3 Last-reviewed date:** `updatedAt: 2026-04-05` — accurate and current. ✅ Pass
- **EE4 HMRC/GOV.UK citations:** Corporation tax and dividend tax rates stated without source links. ⚠️ Recommend adding GOV.UK citation
- **EE5 About page completeness:** Not assessed in this on-push run (page-level check)

---

## Internal Linking Assessment (IL3, IL4)
- **IL3 Links to money pages:** `/tools/mtd-eligibility-checker` linked ✓. Missing: `/software` hub or comparison page. ⚠️ See Recommendation 2
- **IL4 Orphan risk:** Post will be auto-discoverable via `/blog` hub and sitemap. Not an orphan. ✅ Pass

---

## Digital PR Opportunity
The MTD Phase 1 launch date (6 April 2026) creates a short window for digital PR. This post, combined with the site's existing MTD content, positions SoleTraderGuide as a current, authoritative source. Recommended immediate action:
- Search `"making tax digital" "april 2026"` on AccountingWEB, Accountancy Age, and Small Business UK to identify journalists covering the launch week — offer this post's sole trader vs limited company angle as expert commentary or a data point.
- A reactive pitch today/tomorrow has the highest probability of resulting in a citation or link.

---

## Follow-up Actions

```
PRIORITY: MEDIUM
ACTION: Plan interactive tax comparison tool (sole trader vs limited company profit calculator)
FILE: src/app/tools/sole-trader-vs-limited-company-calculator/page.tsx (to create)
ASSIGN_TO: Frontend/Build Agent
---
PRIORITY: LOW
ACTION: Add internal link to /software/best-mtd-software-for-sole-traders in "Admin" section
FILE: src/content/blog/sole-trader-vs-limited-company-uk.mdx
ASSIGN_TO: Write-Up Agent
---
PRIORITY: LOW
ACTION: Add GOV.UK citation for corporation tax rates (19%/25%)
FILE: src/content/blog/sole-trader-vs-limited-company-uk.mdx
ASSIGN_TO: Write-Up Agent
```
