## DA Impact Assessment — working-from-home-expenses-sole-traders-uk.mdx — 2026-04-16

### Content Assessed
- **File:** `src/content/blog/working-from-home-expenses-sole-traders-uk.mdx`
- **Type:** New blog post
- **Topic:** Working from home expenses for UK sole traders — HMRC flat rate vs actual costs method, with worked example comparing tax savings under both methods
- **Current Phase:** Phase 1 (DA 0 → 20) — Foundation stage

### DA Impact Score: 31/40

| Dimension | Score | Notes |
|-----------|-------|-------|
| Word count / depth | 4/5 | ~1,450 words. Good depth — covers both methods fully, includes worked example with 5 comparison tables, practical decision guide. Just below the 1,500w threshold for top score. |
| Original insight | 3/5 | Well-executed explainer with a useful concrete example (Sarah the graphic designer — £216 flat rate vs £4,113 actual costs). However, the underlying HMRC rules are publicly documented; no original survey data or first-party research. The worked example numbers are the strongest differentiating asset. |
| E-E-A-T signals | 3/5 | Author attribution present ("SoleTraderGuide Editorial Team"). LastUpdated present. However: (1) no `<ReviewedBy>` professional accountant note — this is tax advice content; (2) no GOV.UK/HMRC citations for the flat rate figures — citing the official HMRC simplified expenses guidance would strengthen trust signals. |
| Internal links to money pages | 4/5 | Links to 4 review pages (/reviews/freeagent, /reviews/xero, /reviews/quickbooks, /reviews/sage) + eligibility checker tool + records guide. Good money page coverage. Missing a link to /tools/mtd-software-chooser or /software hub — the MTD software section would naturally link there. |
| Link-earning angle | 3/5 | The worked example comparison (£216 flat rate vs £4,113 actual costs = 19× difference) is a memorable, shareable data point. Good hook for freelancer/contractor press and accounting blogs. However, no original survey data, no journalist-ready press angle beyond the worked example. Not press-worthy for national outlets at this stage. |
| Topical relevance | 5/5 | Core on-topic content for the site's authority theme. Working from home expenses is a top-5 search query for sole traders. Directly complements existing expense and tax content. Addresses a topic not previously covered in depth on the site. |
| Freshness | 5/5 | Published 2026-04-16. Covers 2025/26 tax year flat rates. Highly current. |
| CTA alignment | 4/5 | Primary CTA to /tools/mtd-eligibility-checker is appropriate. The MTD software section in the post creates a natural secondary hook for /tools/mtd-software-chooser — the existing secondary CTA to the allowable expenses guide is useful but a software chooser would be more conversion-aligned for readers who reach the MTD section. |

### Verdict: GOOD DA Impact (31/40)

Solid Phase 1 content. The worked example is the strongest asset — the £216 vs £4,113 comparison is concrete and memorable. Two targeted improvements would push this toward HIGH impact: a GOV.UK citation for the flat rate figures (E-E-A-T) and a digital PR pitch around the worked example numbers to accounting/freelancer press.

### Phase Context
In Phase 1 (DA 0→20), a score of 31/40 is a strong result. The topical relevance and freshness dimensions are maxed out, which is exactly right for building the authority cluster this site needs. The main gaps are E-E-A-T (professional review note and HMRC citations) — both are quick wins.

### Recommendations

**1. Add GOV.UK citation for HMRC flat rate figures (HIGH)**
The flat rate table (£10/£18/£26 per month) is presented without citing the HMRC source. Adding a link to the official HMRC simplified expenses guidance (`https://www.gov.uk/expenses-if-youre-self-employed/working-from-home`) improves E-E-A-T and gives Google a clear trust signal that the figures are HMRC-authoritative. This is especially important for financial content.

**2. Add software chooser link in MTD software section (MEDIUM)**
Line 191 mentions FreeAgent, Xero, QuickBooks, Sage and links to their review pages. A link to `/tools/mtd-software-chooser` here would direct undecided readers to the conversion tool, improving both internal authority flow to a key money page and the reader's path to the most relevant CTA.

**3. Digital PR: pitch the worked example angle (MEDIUM)**
The "£216 vs £4,113 — same tax year, same home" framing is an accessible, shareable number. Pitch to:
- **AccountingWEB** — "How much are sole traders leaving on the table by using the HMRC flat rate?"
- **FreelanceUK / Contractor UK** — "The home office tax claim that saves freelancers up to £1,645 per year"
- **Small Business UK** — practical guide to the actual costs method with worked example
This content does not need to be sponsored — it is original worked-example analysis that these outlets regularly publish as expert contributed content.

### Routes
- **SEO Agent:** Yes — to verify the GOV.UK internal link addition does not use an absolute URL; to confirm `/tools/mtd-software-chooser` link is in the right position
- **QA/Reviewer Agent:** Yes — for CO11 and build verification after any link additions
- **Write-Up Agent:** Yes — to add GOV.UK citation text and /tools/mtd-software-chooser internal link

### Follow-up Actions

```
PRIORITY: HIGH
ACTION: Add inline GOV.UK citation for HMRC flat rate figures — link to https://www.gov.uk/expenses-if-youre-self-employed/working-from-home near the flat rate table (after the table, as a "Source: HMRC" note or via <SourceList>)
FILE: src/content/blog/working-from-home-expenses-sole-traders-uk.mdx
ASSIGN_TO: Write-Up Agent
---
PRIORITY: MEDIUM
ACTION: Add link to /tools/mtd-software-chooser in the "MTD software and home working records" section — e.g. anchor text "use our MTD software chooser" near the end of the section listing FreeAgent, Xero, etc.
FILE: src/content/blog/working-from-home-expenses-sole-traders-uk.mdx
ASSIGN_TO: Write-Up Agent
---
PRIORITY: MEDIUM
ACTION: Pitch the £216 vs £4,113 worked example to AccountingWEB, FreelanceUK, and Small Business UK as an expert-contributed article on home office tax claims for sole traders. No code change required — outreach only.
FILE: N/A
ASSIGN_TO: SEO Agent (for outreach strategy and draft pitch)
```
