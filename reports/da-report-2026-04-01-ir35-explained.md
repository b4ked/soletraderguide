---
date: 2026-04-01
type: on-push
file: src/content/blog/ir35-explained-sole-traders-uk.mdx
pipeline: blog-pipeline (deferred — post published 2026-03-29)
---

## DA Impact Assessment — ir35-explained-sole-traders-uk — 2026-04-01

### Content Assessed
- **File:** src/content/blog/ir35-explained-sole-traders-uk.mdx
- **Type:** New blog post (published 2026-03-29 — DA Agent on-push deferred, run 2026-04-01)
- **Topic:** IR35 explained for sole traders — distinction between IR35 legislation (Ltd companies) and HMRC employed vs self-employed tests (sole traders)
- **Primary keyword:** IR35 sole trader UK

---

### DA Impact Score: 23/40

| Dimension | Score | Notes |
|-----------|-------|-------|
| Word count / depth | 3/5 | ~900 words. Above minimum threshold; below the 1,500+ word count that earns 3.5× more links. Expansion opportunity exists. |
| Original insight | 2/5 | Correct and useful IR35 vs employment status distinction — valuable for readers but commodity content. Most specialist tax sites (ContractorUK, QDos, LITRG, Crunch) already cover this angle. No unique data, statistics, or proprietary angle. |
| E-E-A-T signals | 2/5 | Author: "SoleTraderGuide Editorial Team" ✓; LastUpdated ✓. Missing: (1) no "Reviewed by a qualified accountant" note — this is high-stakes tax/legal content; (2) no GOV.UK/HMRC citations; (3) CEST tool mentioned but no gov.uk link provided. |
| Internal links to money pages | 2/5 | Only 1 money page linked (/tools/mtd-eligibility-checker). Missing: /software hub, /reviews, /comparisons, /tools/mtd-software-chooser in body text. Minimum 2 money page links recommended. |
| Link-earning angle | 2/5 | Standard explainer post. No original data, no expert commentary, no tool embed, no unique angle that journalists or bloggers would cite. The "IR35 doesn't apply to sole traders — but here's the real risk" angle is the right hook, but not executed with the authority depth needed to earn links from accounting press. |
| Topical relevance | 4/5 | Directly on-theme: sole trader income, self-employment status, HMRC compliance. Strong topical cluster fit. Complements MTD content well since employment status determines qualifying income. |
| Freshness | 5/5 | Published 2026-03-29. Content is current and accurate. CEST tool mention is up to date. |
| CTA alignment | 3/5 | CTA → /tools/mtd-software-chooser. Reasonable. /tools/mtd-eligibility-checker would be a marginally stronger match given the post's focus on self-employment status and MTD qualifying income. |

---

### Verdict: MODERATE DA Impact (23/40)

Phase 1 baseline note: For Phase 1 (DA 0→20), a score of 23 is acceptable — the topic fills a genuine content gap and covers a real audience question. However, three specific improvements would materially increase the post's authority signal and link-earning potential.

---

### Competitive Landscape

**"IR35 sole trader UK" SERP — expected competition:**
The keyword is contested by high-DA specialist sites:
- **gov.uk** (HMRC employment status guidance) — DA 90+ — cannot be outranked, but can rank alongside it
- **contractoruk.com** (~DA 55) — focuses on IR35 for Ltd company contractors; SoleTraderGuide's sole trader angle is genuinely differentiated
- **qdoscontractor.com** (~DA 45) — IR35 insurance/advice; contractor-focused
- **litrg.org.uk** (Low Incomes Tax Reform Group, ~DA 55) — comprehensive tax guidance for lower-income workers
- **crunch.co.uk** (~DA 55) — accounting software with extensive HMRC-focused blog
- **simplybusiness.co.uk** (~DA 65) — insurance/small business; covers employment status

**SoleTraderGuide's differentiated angle:** The post correctly positions itself around the sole trader–specific angle (IR35 doesn't apply directly — the real risk is HMRC's employed vs self-employed test). This is genuinely differentiated from contractor/Ltd-focused content that dominates the SERP. The gap to exploit: most competitor content conflates IR35 and employment status, or focuses on contractors rather than sole traders.

---

### Recommendations

| Priority | Recommendation | Rationale | Route to |
|----------|---------------|-----------|----------|
| HIGH | Add professional review note to the post | This is HMRC tax/legal content with real financial consequences. Adding "Reviewed by [Name], Chartered Accountant" (even a generic team review note) increases E-E-A-T signals — YMYL content without professional review credentials is a known Google ranking weakness. Cite CEST tool with gov.uk link. | Write-Up Agent |
| HIGH | Add GOV.UK citation for CEST tool | The post mentions CEST at gov.uk but does not link to `https://www.gov.uk/guidance/check-employment-status-for-tax`. This is a direct HMRC source cite that demonstrates editorial authority and builds trust. The Internal Linking rules require internal links only in body — but external authority citations to gov.uk are positive E-E-A-T signals. Link as: `[HMRC's CEST tool](https://www.gov.uk/guidance/check-employment-status-for-tax)` | Write-Up Agent |
| MEDIUM | Add one additional money page internal link | Only /tools/mtd-eligibility-checker is linked as a money page. Adding a link to /software or a relevant comparison page (e.g. "if you need to demonstrate clean records, [MTD-compliant accounting software](/software) makes this straightforward") would increase internal link equity flow to money pages and reach IL3 recommended minimum of 2. | Write-Up Agent (fast-track quick win) |

---

### E-E-A-T Assessment (Checklist 1, EE1–EE5)

| Signal | Status | Notes |
|--------|--------|-------|
| EE1 — Author credentials | PARTIAL ✓ | "SoleTraderGuide Editorial Team" present. No linked team/credentials page yet. |
| EE2 — Professional review | ❌ MISSING | No "reviewed by qualified accountant" note. HIGH-stakes content — HMRC tax and employment status. |
| EE3 — Last-reviewed date | ✅ PASS | `updatedAt: "2026-03-29"` — recent and accurate. |
| EE4 — HMRC/GOV.UK citations | ❌ MISSING | CEST tool mentioned but not linked to gov.uk. No inline HMRC citations. |
| EE5 — About page completeness | ⚠️ PENDING | /about page exists — not audited in this run. Phase 2 item. |

---

### Internal Linking Assessment (IL3, IL4)

| Check | Result | Notes |
|-------|--------|-------|
| IL3 — Links to money pages | ⚠️ PARTIAL | 1 money page link (/tools/mtd-eligibility-checker). Minimum 2 recommended. |
| IL4 — Not an orphan | ✅ PASS | Post will be linked from /blog hub automatically via getAllPosts(). |

---

### Routes
- **Write-Up Agent:** Yes — EE2 professional review note; EE4 CEST gov.uk citation; IL3 additional money page link
- **SEO Agent:** Review after Write-Up changes — verify no frontmatter or metadata impact
- **QA/Reviewer Agent:** Yes — after Write-Up implements changes, run build verification

---

### Follow-up Actions

```
PRIORITY: HIGH
ACTION: Add HMRC CEST tool external link — replace "available at gov.uk" with a direct markdown link to https://www.gov.uk/guidance/check-employment-status-for-tax
FILE: src/content/blog/ir35-explained-sole-traders-uk.mdx
ASSIGN_TO: Write-Up Agent
---
PRIORITY: HIGH
ACTION: Add professional review note — add an InfoCallout type="info" or inline note stating "This content has been reviewed for accuracy by [reviewer title/name]" near the top of the post. Coordinate with editorial team on reviewer credentials.
FILE: src/content/blog/ir35-explained-sole-traders-uk.mdx
ASSIGN_TO: Write-Up Agent
---
PRIORITY: MEDIUM
ACTION: Add one additional money page internal link — link to /software or /tools/mtd-software-chooser naturally within the "How to Protect Your Self-Employed Status" section (e.g. mentioning accounting software for clean record-keeping)
FILE: src/content/blog/ir35-explained-sole-traders-uk.mdx
ASSIGN_TO: Write-Up Agent
---
PRIORITY: LOW
ACTION: Consider expanding to 1,500+ words to reach high link-earning threshold — could add: (1) a brief section on case law examples of HMRC employment status disputes; (2) a checklist of contract clauses that support self-employment; (3) worked examples. This would push the post toward "definitive guide" territory.
FILE: src/content/blog/ir35-explained-sole-traders-uk.mdx
ASSIGN_TO: Write-Up Agent
```

---

### Brand Mention Check
No external brand mentions for soletraderguide.co.uk identified in this run (site is in Phase 1 — limited backlink profile expected).

### Digital PR Opportunity
The "IR35 doesn't apply to sole traders — here's the real risk" angle has PR potential if framed as a correction to widespread public misunderstanding. Pitch targets: AccountingWEB, Freelancer UK, Small Business UK. However, the post needs the E-E-A-T improvements above before it is pitch-ready.
