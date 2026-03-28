## DA Impact Assessment — quickbooks-vs-freeagent-uk-sole-traders-2026.mdx — 2026-03-28

### Current Status
- **Estimated Phase:** Phase 1 (DA 0 → 20 — Foundation)
- **On-push trigger:** New blog post published 2026-03-28

---

### Content Assessed
- **File:** `src/content/blog/quickbooks-vs-freeagent-uk-sole-traders-2026.mdx`
- **Type:** New blog post
- **Topic:** Head-to-head comparison of QuickBooks vs FreeAgent for UK sole traders — covering pricing, MTD for Income Tax readiness, Self Assessment filing, ease of use, invoicing, bank feeds, and customer support, with scenario-based verdict

---

### DA Impact Score: 32/40

| Dimension | Score | Notes |
|-----------|-------|-------|
| Word count / depth | 5/5 | ~1,600+ words of body content; covers pricing, MTD, SA, UX, invoicing, bank feeds, support — comprehensive for a product comparison post |
| Original insight | 3/5 | Clear scenario-based verdict (banking situation, use-case complexity) differentiates from generic comparisons; no original data or survey findings to elevate to a 4–5 |
| E-E-A-T signals | 2/5 | `affiliateDisclosure: true` set correctly; `updatedAt` current; author listed as "SoleTraderGuide Editorial Team" but no linked credentials page; no "Reviewed by a qualified accountant" note; no inline HMRC GOV.UK citation links in body despite stating tax facts |
| Internal links to money pages | 5/5 | Excellent: links to `/tools/mtd-software-chooser`, `/tools/mtd-eligibility-checker`, `/reviews/freeagent`, `/reviews/quickbooks`, `/software/best-mtd-software-for-sole-traders` — all core money pages covered |
| Link-earning angle | 3/5 | Timely pre-April 2026 angle is strong; "FreeAgent free via NatWest/RBS/Mettle" is a practical, newsworthy hook; lacks a data-driven or research angle that would make it cite-worthy for press or professional bodies |
| Topical relevance | 5/5 | Direct match to site's core authority theme: HMRC-recognised MTD software comparison for UK sole traders |
| Freshness | 5/5 | Published 2026-03-28 — 4 days before the April 2026 MTD for Income Tax mandatory start date; maximum timeliness |
| CTA alignment | 4/5 | CTA routes to MTD Software Chooser — directly relevant; secondary CTA to best software hub; strong conversion alignment. Minor: no CTA to the eligibility checker for readers still unsure if MTD applies to them |

### Verdict: HIGH DA Impact (32/40)

**Phase 1 context:** A score of 32/40 in Phase 1 (DA 0→20) represents an excellent addition. The post is comprehensive, timely, and well-linked to money pages. The primary weaknesses are E-E-A-T signals (no accountant review, no HMRC source links) and the absence of an original-data hook that would make it cite-worthy for third-party press.

---

### Checklist 3 — Content Quality and Link-Earning Potential

| # | Check | Score | Notes |
|---|-------|-------|-------|
| CL1 | Word count | 5/5 | ~1,600+ body words; exceeds 1,500w threshold for link-earning long-form |
| CL2 | Original insight | 3/5 | Scenario-based verdict framework is useful; no proprietary research |
| CL3 | Data or research | 2/5 | Pricing data is current and dated to March 2026; no original survey data or HMRC statistics cited in-body |
| CL4 | Definitive guide potential | 4/5 | Covers all comparison dimensions a sole trader needs; strong candidate for a go-to reference. Could be strengthened with a scored feature matrix |
| CL5 | Expert commentary | 1/5 | No named accountant quote or professional commentary — this is the weakest E-E-A-T element |
| CL6 | Link-worthy angle | 3/5 | "FreeAgent free via NatWest/RBS" is the standout angle; April 2026 deadline timing creates urgency. A "what percentage of sole traders use each?" stat would create a digital PR hook |
| CL7 | Tool or calculator | 3/5 | Links to MTD Software Chooser tool — good; does not embed or feature the tool inline |
| CL8 | Freshness | 5/5 | Published day of assessment, 4 days before April 2026 MTD deadline — maximum timeliness |
| CL9 | Competitor comparison | 3/5 | No obviously stronger version identified on competitor sites; Xero's and QuickBooks's own blogs cover comparisons but with obvious bias. Independent comparison has inherent advantage |
| CL10 | Shareable assets | 3/5 | Comparison table is present and well-structured; no infographic or data visualisation that could be embedded/linked |

---

### Checklist 4 — Internal Linking

| # | Check | Result | Notes |
|---|-------|--------|-------|
| IL3 | New post links to pillar pages | PASS | Links to `/reviews/freeagent`, `/reviews/quickbooks`, `/tools/mtd-software-chooser`, `/tools/mtd-eligibility-checker`, `/software/best-mtd-software-for-sole-traders` — 5 money page links |
| IL4 | Not an orphan | PASS | Blog hub picks up post automatically via `getAllPosts()`; `relatedPosts` set in frontmatter links from other posts; comparisons hub page at `/comparisons` likely links to QuickBooks-vs-FreeAgent comparison page |

**Additional IL observations:**
- IL6 (anchor text variety): Internal anchors are varied — "FreeAgent's full pricing", "MTD Software Chooser", "April 2026 MTD rollout guide", "check your eligibility" — good distribution, no over-optimisation
- IL7 (link count): Approximately 9 outbound internal links — well within the 15-link ceiling
- Post does not link back to `/comparisons` hub despite being a direct comparison post — minor gap

---

### Checklist 1 — E-E-A-T Signals (EE1–EE5)

| # | Signal | Status | Notes |
|---|--------|--------|-------|
| EE1 | Author credentials | PARTIAL | `author: "SoleTraderGuide Editorial Team"` is present; no linked author page or individual credentials visible — blog template should render byline but no credentials page exists to link to |
| EE2 | Professional review | FAIL | No "Reviewed by a qualified accountant" note. This is a software comparison that touches on Self Assessment filing and MTD compliance — qualifies as high-stakes content requiring review attribution |
| EE3 | Last-reviewed date | PASS | `updatedAt: 2026-03-28` — current and accurate |
| EE4 | HMRC/GOV.UK citations | PARTIAL | MTD thresholds and deadline dates stated correctly but no inline hyperlinks to GOV.UK source pages (e.g. `https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-income-tax`). The April 2026 deadline InfoCallout states facts without a source link |
| EE5 | About page | PASS (site-level) | `/about` exists per sitemap — not assessed per-post, but site-level signal is present |

---

### Recommendations

#### HIGH — Add HMRC source citation links (EE4)
The MTD deadline InfoCallout and the MTD section state tax facts (£50,000 threshold, April 2026 date, quarterly deadlines) without linking to GOV.UK. For a YMYL financial content page, uncited tax facts weaken E-E-A-T and reduce the likelihood of HMRC-adjacent sites citing or linking to this content.

**Proposed change:**
In the MTD section (approximately line 80) and the deadline InfoCallout (approximately line 88), add inline links to:
- `https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-income-tax` (HMRC HMRC-recognised software list)
- `https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax` (MTD for IT main guidance)

**File:** `src/content/blog/quickbooks-vs-freeagent-uk-sole-traders-2026.mdx`
**Route to:** Write-Up Agent (content change — fast-track quick win)

---

#### HIGH — Add accountant review attribution (EE2)
This post advises sole traders on software choices that directly affect their MTD compliance and Self Assessment filing — two areas HMRC classifies as financial/tax advice. Without a named reviewer, the post scores poorly on the E-E-A-T signal that most strongly differentiates legitimate financial guides from thin AI content in Google's quality rater guidelines.

**Proposed change:** Add `<ReviewedBy>` component after the byline/intro, crediting a qualified accountant (ACCA, ACA, or AAT). If no external reviewer is currently available, add an `<EditorialNote>` stating the editorial standards applied.

**File:** `src/content/blog/quickbooks-vs-freeagent-uk-sole-traders-2026.mdx` (content) and potentially the blog `[slug]/page.tsx` template if `<ReviewedBy>` is not yet wired into the MDX render pipeline.
**Route to:** SEO Agent first (to confirm schema `author` entity impact), then Write-Up Agent

---

#### MEDIUM — Add link back to `/comparisons` hub (IL gap)
The post is a direct product comparison but does not link to `/comparisons` — the hub page that aggregates all comparison content. This leaves a gap in the internal linking architecture and means the comparisons hub does not receive equity from this high-quality page.

**Proposed change:** Add one sentence in the "What About Xero?" section or the verdict section:
> "For a full overview of all head-to-head comparisons, see our [accounting software comparison hub](/comparisons)."

**File:** `src/content/blog/quickbooks-vs-freeagent-uk-sole-traders-2026.mdx`
**Route to:** Write-Up Agent (fast-track quick win — low risk, no SEO Agent review needed)

---

#### MEDIUM — Digital PR opportunity: April 2026 deadline hook
With 4 days to the April 2026 MTD for Income Tax mandatory start date, this post has a narrow but genuine window for digital PR outreach. The "FreeAgent free via NatWest/RBS/Mettle" angle is practically newsworthy for personal finance press covering MTD preparation.

**Proposed outreach targets:**
- AccountingWEB (`https://www.accountingweb.co.uk`) — reactive comment or contributed piece on "which software do sole traders actually choose?"
- Small Business UK (`https://smallbusiness.co.uk`) — "free MTD software for NatWest/RBS customers" tip piece
- ContractorUK (`https://www.contractoruk.com`) — April 2026 MTD deadline preparation roundup

**Action:** Draft a 150-word reactive press comment referencing the free FreeAgent via banking angle, with a link to this comparison. Pitch to the above outlets before 6 April 2026.
**Route to:** DA Agent follow-up (no repo changes required — outreach action)

---

#### LOW — Strengthen link-earning potential with usage data (CL3)
The post would earn significantly more inbound citations if it included a data point such as "X% of UK sole traders use cloud accounting software" or "FreeAgent has Y registered users in the UK." These figures are available from ONS, HMRC's own MTD readiness research, or software vendor investor relations pages.

**Proposed change:** Add one data-led sentence in the intro or verdict, with citation. Example: reference HMRC's published figures on MTD software adoption or FreeAgent's parent company (NatWest Group) annual report figures.
**File:** `src/content/blog/quickbooks-vs-freeagent-uk-sole-traders-2026.mdx`
**Route to:** Write-Up Agent (with research instruction)

---

### Sitemap Check
Blog posts are dynamically included via `getAllPosts('blog')` in `src/app/sitemap.ts` (line 10). This post will appear at `https://soletraderguide.co.uk/blog/quickbooks-vs-freeagent-uk-sole-traders-2026` with `lastModified: 2026-03-28` and `priority: 0.7`. No manual sitemap entry needed. **PASS.**

---

### Routes
- **SEO Agent:** YES — for EE2 recommendation (confirm `ArticleSchema` author entity impact before `<ReviewedBy>` is added to the MDX template)
- **QA/Reviewer Agent:** YES — after Write-Up Agent implements EE4 citation links and IL comparisons hub link; `npm run build` verification needed

---

### Follow-up Actions

```
PRIORITY: HIGH
ACTION: Add inline GOV.UK source links to MTD facts in the MTD section and deadline InfoCallout (EE4 — uncited tax facts on a YMYL page)
FILE: src/content/blog/quickbooks-vs-freeagent-uk-sole-traders-2026.mdx
ASSIGN_TO: Write-Up Agent
---
PRIORITY: HIGH
ACTION: Add <ReviewedBy> component crediting a qualified accountant (ACCA/ACA/AAT) — or <EditorialNote> as interim — to address EE2 failure on YMYL content
FILE: src/content/blog/quickbooks-vs-freeagent-uk-sole-traders-2026.mdx
ASSIGN_TO: SEO Agent (schema review first), then Write-Up Agent
---
PRIORITY: MEDIUM
ACTION: Add one internal link to /comparisons hub in the verdict or "What About Xero?" section to close internal linking gap
FILE: src/content/blog/quickbooks-vs-freeagent-uk-sole-traders-2026.mdx
ASSIGN_TO: Write-Up Agent
---
PRIORITY: MEDIUM
ACTION: Draft and send 150-word reactive press comment on "free MTD software via banking" angle to AccountingWEB, Small Business UK, ContractorUK before 6 April 2026 deadline window closes
FILE: N/A (outreach action — no repo change)
ASSIGN_TO: DA Agent follow-up
---
PRIORITY: LOW
ACTION: Add one data-led sentence (e.g. HMRC MTD readiness statistics or FreeAgent user count from NatWest Group annual report) to strengthen CL3 and link-earning potential
FILE: src/content/blog/quickbooks-vs-freeagent-uk-sole-traders-2026.mdx
ASSIGN_TO: Write-Up Agent
```
