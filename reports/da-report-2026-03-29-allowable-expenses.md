# DA Impact Assessment — allowable-expenses-uk-sole-traders-hmrc — 2026-03-29

## Content Assessed
- File: src/content/blog/allowable-expenses-uk-sole-traders-hmrc.mdx
- Type: New blog post
- Topic: UK sole trader allowable expenses — comprehensive HMRC-approved list
- URL: https://soletraderguide.co.uk/blog/allowable-expenses-uk-sole-traders-hmrc

## Current Site Phase
**Phase 1: Foundation (DA 0 → 20)** — building topical authority and content depth.

---

## DA Impact Score: 30/40

| Dimension | Score | Notes |
|-----------|-------|-------|
| Word count / depth | 3 | ~1,150 words — good baseline; below 1,500+ sweet spot for pillar content that earns links |
| Original insight | 2 | Standard expense guide; HMRC mileage rates and flat-rate home working figures are widely published on other sites |
| E-E-A-T signals | 3 | Author credit and freshness date present; no qualified accountant review note; no HMRC GOV.UK source citations |
| Internal links to money pages | 5 | Excellent — links to all 4 review pages, software hub, and eligibility checker tool |
| Link-earning angle | 2 | Useful reference content but no original data, interactive element, or journalist-friendly hook |
| Topical relevance | 5 | Core authority topic — UK sole trader tax is the site's primary theme; fills an important content gap |
| Freshness | 5 | Published 2026-03-29 |
| CTA and conversion alignment | 5 | CTA correctly routes to MTD software chooser; secondary CTA to software hub |

**Total: 30/40**

## Verdict: GOOD DA Impact

Score of 30/40 places this in the "Good DA Impact" range (24–31). The post covers a core topical gap, has excellent internal linking to money pages, and is fresh. The main DA-limiting factors are: below-threshold word count for a pillar reference piece, lack of original data or a shareable data asset (rate tables), and absent E-E-A-T trust signals for YMYL tax content.

---

## Recommendations

### 1. Add HMRC rate summary tables — creates the single most shareable asset for this post type

**Rationale:** Expense guides with clear, formatted rate reference tables (mileage rates, home working flat rates, record-keeping periods) are the type of content that accountancy firm blogs, freelancer resources, and bookkeeping training sites link to as reference material. The current post lists these figures inline in prose, making them hard to scan and impossible to share as a standalone asset. Adding 2–3 short tables (mileage rates by vehicle, home working flat rates by hours, penalties for missing records) would significantly improve the post's link-earning potential without requiring new research.

**Proposed tables:**
- HMRC mileage rates (car/motorbike/bicycle) — 3 rows
- Home working flat rate (hours worked vs monthly amount) — 3 rows

**File:** src/content/blog/allowable-expenses-uk-sole-traders-hmrc.mdx
**Assign to:** Write-Up Agent

### 2. Add HMRC source citations via SourceList component

**Rationale:** This post makes specific HMRC tax claims (mileage rates, wholly-and-exclusively rule, 5-year record retention) without citing the authoritative GOV.UK source. For YMYL tax content, GOV.UK citations are an E-E-A-T signal that improves Google's trust in the content's accuracy. Competitor guides from FreeAgent and Xero consistently cite GOV.UK. A `<SourceList>` at the foot of the post would address this.

**Proposed citations:**
- HMRC Business expenses: https://www.gov.uk/expenses-if-youre-self-employed
- HMRC Mileage allowance: https://www.gov.uk/expenses-and-benefits-business-travel-mileage
- HMRC Work from home expenses: https://www.gov.uk/hmrc-internal-manuals/employment-income-manual/eim32760
- HMRC Record keeping: https://www.gov.uk/self-employed-records

**File:** src/content/blog/allowable-expenses-uk-sole-traders-hmrc.mdx
**Assign to:** Write-Up Agent (with SEO Agent review for placement)

### 3. Expand to 1,500+ words with edge cases and industry-specific examples

**Rationale:** Long-form content earns 3.5× more backlinks than short-form content (Backlinko, 2023). At 1,150 words, the current post is a solid foundation but falls short of the depth threshold that earns passive links. Expanding to 1,500–1,800 words with edge-case coverage (dual-use assets, home office where you also have an employer, sole traders who are also landlords, international travel) would differentiate it from competitors' standard guides and give accountancy firm blogs a reason to cite it as a reference.

**File:** src/content/blog/allowable-expenses-uk-sole-traders-hmrc.mdx
**Assign to:** Write-Up Agent

---

## Link Opportunity Associated with This Post

**Immediate opportunity:** Accountancy firm resource pages. This post covers a topic that UK accountancy firms with resource blogs frequently link to for clients — "what can I claim as a sole trader" is one of the most common questions they receive. Once the tables and HMRC citations are added, a targeted outreach campaign to 10–15 small UK accountancy firm blogs (DA 20–40) asking them to link to the guide as a reference resource for their sole trader clients has a reasonable conversion rate.

**Search query to find targets:** `site:.co.uk intitle:"allowable expenses" "sole trader" -site:soletraderguide.co.uk`

---

## Internal Linking Note

The post does not yet receive inbound links from other posts in the blog. Once published, consider adding a reference link from:
- `how-to-register-self-assessment-uk-freelancer.mdx` — natural context when discussing record-keeping
- Any future post on Self Assessment tax returns or reducing your tax bill

This is a fast-track quick win — a single sentence and link addition to the self-assessment post.

---

## Follow-up Actions

```
PRIORITY: HIGH
ACTION: Add HMRC mileage rates table and home working flat rate table to the MDX body — improves link-earning potential and shareable asset value
FILE: src/content/blog/allowable-expenses-uk-sole-traders-hmrc.mdx
ASSIGN_TO: Write-Up Agent
---
PRIORITY: MEDIUM
ACTION: Add <SourceList> with 4 GOV.UK citations to the bottom of the post (before relatedPosts section)
FILE: src/content/blog/allowable-expenses-uk-sole-traders-hmrc.mdx
ASSIGN_TO: Write-Up Agent (SEO Agent to confirm SourceList placement)
---
PRIORITY: MEDIUM
ACTION: Expand post to 1,500+ words — add edge cases section covering dual-use assets, sole trader + landlord, international business travel
FILE: src/content/blog/allowable-expenses-uk-sole-traders-hmrc.mdx
ASSIGN_TO: Write-Up Agent
---
PRIORITY: LOW
ACTION: Add a link from how-to-register-self-assessment-uk-freelancer.mdx to this post — contextually natural in the record-keeping section
FILE: src/content/blog/how-to-register-self-assessment-uk-freelancer.mdx
ASSIGN_TO: Write-Up Agent (fast-track quick win, no SEO Agent review required)
```

---

## Routes
- SEO Agent: Yes — confirm SourceList placement and verify tables are correctly formatted before follow-up commit
- QA/Reviewer Agent: Yes — build verification after any follow-up changes
