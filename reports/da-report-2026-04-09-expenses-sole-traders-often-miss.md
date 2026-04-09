# DA Impact Assessment — expenses-sole-traders-often-miss-uk.mdx — 2026-04-09

## Content Assessed
- **File:** `src/content/blog/expenses-sole-traders-often-miss-uk.mdx`
- **Type:** New blog post
- **Topic:** Business expenses UK sole traders commonly miss — pre-trading costs, home office calculation methods, Annual Investment Allowance timing, professional memberships, mileage, training, bank charges, phone/broadband proportional claims
- **Estimated Phase:** Phase 1 (Foundation — DA 0 → 20)

---

## DA Impact Score: 29/40

| Dimension | Score | Notes |
|-----------|-------|-------|
| Word count / depth | 4/5 | ~1,720 body words; above the 1,500+ threshold; solid depth across 8 distinct expense categories |
| Original insight | 3/5 | Practical and accurate; the £312 flat-rate vs £1,500–3,000 actual-cost comparison is concrete and quotable. Underlying rules are HMRC-published; no original research or survey data |
| E-E-A-T signals | 3/5 | Author attribution ✓; LastUpdated accurate ✓; no GOV.UK citations for fact claims (gap); no accountant review annotation |
| Internal links to money pages | 2/5 | CTA links to /tools/mtd-software-chooser and /software/best-mtd-software-for-sole-traders. Body links go to blog posts and one guide page — no inline links to /reviews/ or /comparisons/ |
| Link-earning angle | 3/5 | "Expenses sole traders miss" is high search intent; home office comparison figure (£312 vs £1,500–3,000) is a quotable, shareable data point; not an original research study |
| Topical relevance | 5/5 | Core topic for sole traders; directly on-theme for the site's editorial authority |
| Freshness | 5/5 | Published 2026-04-09; content current for 2025–26 tax year |
| CTA and conversion alignment | 4/5 | MTD software chooser CTA well-aligned with content angle; secondary CTA to software hub adds depth |

**Total: 29/40**

---

## Verdict: GOOD DA Impact

At 29/40 this is a solid, well-structured content addition. For Phase 1, this is above the 24–31 "good" threshold. The post fills a genuine topical niche (missed expenses vs the complete HMRC list already covered at `/blog/allowable-expenses-uk-sole-traders-hmrc`) and the two-part cluster adds content depth to a high-value tax topic.

**Primary weakness:** No GOV.UK citations for HMRC fact claims (EE4). For a YMYL tax content page, this is the most impactful E-E-A-T gap.

**Secondary weakness:** Body links do not direct link equity to money pages (reviews, comparisons). CTA covers the tool CTA but inline links are all blog-to-blog.

---

## Recommendations

### Recommendation 1 — HIGH: Add GOV.UK citation links for HMRC fact claims

**Rationale:** Checklist EE4 — tax fact claims on YMYL content should reference HMRC/GOV.UK guidance. This is the single highest-impact E-E-A-T improvement available for this post. Absence of GOV.UK links signals lower authoritativeness to both search engines and readers. All three key facts in this post have published GOV.UK source pages.

**Proposed changes (Write-Up Agent to implement):**

1. Pre-trading expenses section — add after the "seven years" rule: link anchor text `HMRC's guidance on pre-trading expenditure` → `https://www.gov.uk/hmrc-internal-manuals/business-income-manual/bim46350` (opens external, `rel="noopener noreferrer"`)

2. Mileage section — after the rates table, add: link anchor text `HMRC approved mileage rates` → `https://www.gov.uk/government/publications/rates-and-allowances-travel-mileage-and-fuel-allowances` (opens external)

3. Home office section — add after the flat-rate table: link anchor text `HMRC's simplified expenses guidance` → `https://www.gov.uk/simpler-income-tax-simplified-expenses` (opens external)

**Route to:** Write-Up Agent (content change — add 3 external GOV.UK citation links to body)

---

### Recommendation 2 — MEDIUM: Add one inline link to a money page in the bank charges section

**Rationale:** Checklist IL3 — new posts should contain at least 2 links to money pages (reviews, comparisons, tools). The CTA satisfies the tool link. The body currently links only to blog posts and one guide page. Adding a single inline money page link in the bank charges section is natural and routes link equity to a commercial page.

**Proposed change:**

In the bank charges section, the sentence: "An accountant or accounting software will typically capture them automatically if you have a bank feed connected."

Update to: "An accountant or [accounting software with a bank feed](/software/best-mtd-software-for-sole-traders) will typically capture them automatically."

**Route to:** Write-Up Agent (content change — add one inline link to /software/best-mtd-software-for-sole-traders)

---

### Recommendation 3 — MEDIUM: Digital PR pitch opportunity — home office comparison figure

**Rationale:** The post contains a quotable, concrete comparison: HMRC flat rate yields up to £312/year, while the actual cost method can yield £1,500–£3,000 for full-time home workers. This is the kind of specific, practical financial figure that freelancer/contractor press uses in "money-saving" round-ups.

**Outreach targets:**
- **Contractor UK** (contractoruk.com) — resource articles on tax and expenses for contractors; target the editorial team via their contact page
- **Small Business UK** (smallbusiness.co.uk) — regularly publishes "tax tips for small businesses" round-ups; pitch as expert source
- **FreelanceUK** (freelanceuk.com) — tax guides section

**Pitch angle:** "UK sole traders are missing up to £2,700 a year in home office tax deductions by using HMRC's flat rate" — lead with the comparison figure, link to the full post.

**Note:** This is a research/outreach recommendation for the human team — not a repo change. No agent routing required.

---

## E-E-A-T Quick Assessment (EE1–EE5)

| Check | Status | Notes |
|-------|--------|-------|
| EE1 Author credentials | ✅ | "SoleTraderGuide Editorial Team" attributed |
| EE2 Professional review | ⚠️ | No "reviewed by accountant" note; recommended for tax-advice posts |
| EE3 Last-reviewed date | ✅ | updatedAt: 2026-04-09; template renders LastUpdated |
| EE4 HMRC/GOV.UK citations | ❌ | Three key fact claims (pre-trading, mileage, home office) lack GOV.UK source links — see Recommendation 1 |
| EE5 About page | ℹ️ | Not reviewed in on-push scope; covered in daily cycle |

---

## Internal Link Assessment (IL3, IL4)

| Check | Status | Notes |
|-------|--------|-------|
| IL3 Links to money pages | ⚠️ | CTA: /tools/mtd-software-chooser ✓, /software/best-mtd-software-for-sole-traders ✓. Body: 0 inline money page links. See Recommendation 2 |
| IL4 Orphan risk | ✅ | Auto-included in blog hub; will receive links as related post links are added to future content |

---

## Routes

- **Write-Up Agent:** Yes — Recommendations 1 and 2 (GOV.UK citations + bank charges inline link). Low-risk content additions; can be fast-tracked to QA without full SEO Agent review.
- **SEO Agent:** No — Recommendations 1 and 2 are content-level changes that do not affect metadata, canonical, or structured data.
- **QA/Reviewer Agent:** Yes — verify fast-track changes before commit.
- **Human team:** Recommendation 3 (digital PR outreach) — not a repo change.

---

## Follow-up Actions

```
PRIORITY: HIGH
ACTION: Add three GOV.UK external citation links to body — pre-trading expenses (BIM46350), mileage rates (approved mileage rates pub), home office (simplified expenses guidance)
FILE: src/content/blog/expenses-sole-traders-often-miss-uk.mdx
ASSIGN_TO: Write-Up Agent
---
PRIORITY: MEDIUM
ACTION: Add inline link to /software/best-mtd-software-for-sole-traders in bank charges section ("accounting software with a bank feed")
FILE: src/content/blog/expenses-sole-traders-often-miss-uk.mdx
ASSIGN_TO: Write-Up Agent
---
PRIORITY: MEDIUM
ACTION: Pitch "£312 vs £1,500–3,000 home office deduction" angle to Contractor UK, Small Business UK, FreelanceUK editorial teams with link to this post
FILE: n/a — outreach task
ASSIGN_TO: Human team
```
