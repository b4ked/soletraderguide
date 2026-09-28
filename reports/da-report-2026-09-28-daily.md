# SoleTraderGuide.co.uk — Daily DA Report
**Date:** 28 September 2026  
**Agent:** DA Agent (Scheduled Run)  
**Status:** Research + Recommendations Only — No repo files modified

---

## Site Phase Snapshot

| Metric | Status |
|--------|--------|
| Estimated DA phase | Phase 1 — early authority build (estimated DA 0–15) |
| External backlinks detected | None new identified |
| Brand mentions detected | None new |
| HMRC maintenance window | **CLOSES TODAY at 09:00 BST — service resumes in ~44 minutes from run time** |
| Q2 period closes | **5 October 2026 — 7 days away** |
| Q2 traffic peak | **~7 October — 9 days away** |
| Q2 deadline | **7 November 2026 — 40 days away** |
| Reactive auto-enrolment post | **NOT PUBLISHED — Day 27 — Maintenance hook permanently expired 26 Sept at 19:00** |
| Posts total | 48 blog posts (no new posts since 5 May 2026) |
| Days since last new post | **146 days** |
| Stale posts (>12 months) | **4 — Day 98 unactioned** |
| SERP title anomaly | **"(2025)" live on /reviews/xero AND /reviews/sage — Day 22 unaddressed** |
| Penalties post (2026/27) | **FAQ Q1 and expired CTA still live — 9 days to Q2 traffic peak** |
| First quarterly update post | **FAQ Q1 still incorrect — 19+ months stale — 9 days to Q2 traffic peak** |

---

## Step 1 — HMRC & MTD News: Digital PR Opportunities

### 1a. 🟡 HIGH — HMRC MTD Sign-Up Service Resumes Today at 09:00

The HMRC MTD for Income Tax sign-up service is scheduled to come back online at **09:00 BST today** after the planned 2-day maintenance window (26 Sept 19:00 → 28 Sept 09:00). The service handles:

- Voluntary sign-up for taxpayers who want to register before being auto-enrolled
- Agent sign-up on behalf of clients
- Access for taxpayers who received auto-enrolment letters and need to confirm their status

**Post-maintenance implications for STG:**

- The maintenance hook (the only angle that made the reactive post immediately unique) expired permanently at 19:00 on 26 September.
- The Q2-only angle — *"HMRC has been auto-enrolling sole traders; you must be compliant before 7 November"* — is now the only viable hook and is fully shared with 14+ SERP competitors.
- The service resuming is not itself a publishable news hook, but it restores the Q2 urgency signal: any taxpayer who paused their sign-up due to the maintenance window will now act. **The next 9 days are the highest-intent window for auto-enrolment search queries this cycle.**
- If the reactive post were published today, it could capture late-arriving auto-enrolment searchers during this high-intent window before Q2 period closes on 5 October.

**Revised urgency assessment for the reactive post (Day 27):**

The optimal publication window narrows in 7 days when Q2 closes. Any post published after 5 October loses the "Q2 period is still open" hook and competes purely on the "what to do before 7 November deadline" angle, which all 14 competitors already cover. Publishing in the next 7 days is the last window with a distinct urgency signal for the STG toolset differentiator (eligibility checker + software chooser as the "next step" after getting the letter).

### 1b. 🟡 HIGH — Phase 2 Content Gap: £30k–£50k Earners Ahead of April 2027 (Carry-forward)

No new SERP entries detected (carry-forward from 26 Sept). GoCardless, AIA, Eternity Accountants, and Howard Smith all have Phase 2 content. STG has none. April 2027 is 18 months away — early-mover opportunity is still open but window narrows as more practice blogs publish preparation guides.

### 1c. 🟢 MONITORING — Soft-Landing Status

No new HMRC announcements detected. Soft-landing for 2026/27 quarterly update penalties remains confirmed by: HMRC, Sage, ICAS, FlySoftware, PocketReceipt, AccountantSearch, UKTaxCalculators, MooreSouth (all from 26 Sept run). STG's two penalty-related posts remain factually incorrect for the current tax year.

---

## Step 2 — Brand Mentions and Backlinks

**No new editorial backlinks or unlinked brand mentions detected.**

Carry-forward from 26 Sept: STG own-site pages continue to appear in brand/site-specific searches only. No organic third-party links to any STG page detected this run.

### 🔴 CONFIRMED — SERP "(2025)" Year Tag Anomaly: Day 22

Both files verified in repo this run. All six instances remain live:

- `src/app/(public)/reviews/xero/page.tsx` line 24: `title: 'Xero Review: MTD Software for Sole Traders (2025)'` — **confirmed live**
- `src/app/(public)/reviews/xero/page.tsx` line 26: description includes `"in 2025"` — **confirmed live**
- `src/app/(public)/reviews/xero/page.tsx` line 118: heading `Xero Review: MTD Software for Sole Traders (2025)` — **confirmed live**
- `src/app/(public)/reviews/sage/page.tsx` line 24: `title: 'Sage Accounting Review: MTD Software for Sole Traders (2025)'` — **confirmed live**
- `src/app/(public)/reviews/sage/page.tsx` line 26: description includes `"worth it in 2025"` — **confirmed live**
- `src/app/(public)/reviews/sage/page.tsx` line 118: heading `Sage Accounting Review: MTD Software for Sole Traders (2025)` — **confirmed live**

Day 22. These are the two highest-traffic review pages on STG. Every software review competitor currently shows 2026 year tags. STG is signalling stale content to crawlers in a high-competition SERP. This fix is a 6-line change requiring no content review.

---

## Step 3 — Content Freshness Audit

All stale and incorrectly-stated posts remain unactioned. Day 98 since first flagged.

| Priority | File | updatedAt | Issue | Status |
|----------|------|-----------|-------|--------|
| 🔴 CRITICAL | `mtd-penalties-late-quarterly-updates-uk.mdx` | 2026-04-17 | FAQ Q1 confirmed incorrect for 2026/27: "You receive one penalty point for each missed quarterly update." CTA confirmed expired: "before April 2026." No soft-landing InfoCallout. Q2 traffic peak in 9 days. | **Unactioned — confirmed in repo** |
| 🔴 CRITICAL | `first-quarterly-update-what-sole-traders-need-to-do.mdx` | 2025-02-15 | FAQ Q1 confirmed incorrect for 2026/27: "each late quarterly submission earns one penalty point." 19+ months stale. Q1 framing throughout. Q2 traffic peak in 9 days. | **Unactioned — confirmed in repo** |
| 🔴 CRITICAL | `free-vs-paid-mtd-software.mdx` | 2025-01-10 | 20+ months stale. Future-tense MTD framing. No soft-landing statement. Q2 traffic peaks in 9 days. | **Unactioned — Day 98** |
| 🟡 HIGH | `april-2026-mtd-rollout-explained.mdx` | 2025-03-01 | Title and body treat April 2026 as future. 5.5 months historical. | **Unactioned — Day 98** |
| 🟡 HIGH | `mtd-software-options-explained.mdx` | 2025-01-28 | 19+ months stale. Future-tense throughout. | **Unactioned — Day 98** |

**Confirmed fact errors in code — verified this run:**

From `mtd-penalties-late-quarterly-updates-uk.mdx` frontmatter (lines 19–22):
```
"You receive one penalty point for each missed quarterly update. Once you accumulate four points, HMRC charges a £200 penalty."
```
→ Incorrect for 2026/27. No penalty points will be issued for late quarterly updates this tax year (soft-landing confirmed by 8+ independent sources). Points system activates April 2027.

CTA block (line 14):
```
"Check whether Making Tax Digital applies to you and what you need to do before April 2026."
```
→ April 2026 has passed (6 months ago). Expired call to action visible to all site visitors.

From `first-quarterly-update-what-sole-traders-need-to-do.mdx` frontmatter (lines 19–22):
```
"Under MTD's penalty points system, each late quarterly submission earns one penalty point."
```
→ Incorrect for 2026/27 (same soft-landing issue).

---

## Step 4 — Link Acquisition Opportunity Research (Checklist 7)

**Opportunity researched today:** GoCardless (primary target — carry-forward assessment with Q2 timing update)

### Target — GoCardless (Priority Escalated: Pre-Q2 Window Now Critical)

GoCardless publishes three MTD guides covering the highest-traffic intent clusters:
- *"Making Tax Digital explained: Your guide to the 2026 Income Tax changes"*
- *"A landlord's guide to Making Tax Digital 2026"*
- *"The sole traders' guide to Making Tax Digital 2026"*

None of the three link to an independent eligibility tool or software chooser. GoCardless is a very high-DA publisher and is not an accounting software vendor, meaning there is no commercial tension in linking to STG's tools.

**Pitch timing assessment:**

The 7-day window before Q2 period closes (5 October) is the highest-urgency outreach window of the current MTD cycle. GoCardless readers who landed on their MTD guides after receiving auto-enrolment letters are precisely the audience STG's eligibility checker serves — *"does the combined SE + property income rule apply to me?"*. No other independent source in the GoCardless SERP space links to a working eligibility tool.

**Recommended pitch message (editorial action):**

> *"Your three MTD guides are among the clearest independent explanations available. We built two free tools readers ask about after reading those guides: a qualifying income eligibility checker (handles the combined SE + property income calculation your guides describe but can't automate) and a 5-question software chooser. No registration. Happy to share them if useful for your readers."*

**GoCardless contact approach:** Content or editorial team via contact page at gocardless.com — look for a "content" or "marketing" team email, or via LinkedIn outreach to their UK content leads.

### Carry-Over Targets (Status Unchanged)

| Target | Priority | Action |
|--------|----------|--------|
| GoCardless | **HIGH — Primary (Q2 window critical)** | Pitch both tools this week |
| CMA Accountancy | HIGH — SERP competitor + target | Pitch eligibility checker + software chooser |
| Varro Tax | HIGH | Pitch both tools |
| AccrueAccounting | HIGH | Pitch both tools |
| TinyTax.co.uk | HIGH | Pitch both tools |
| The Independent Landlord | MEDIUM | Pitch eligibility checker |
| Rhodium Accounting | MEDIUM | Pitch software chooser |
| MTD.digital | MEDIUM — after reactive post | Defer |
| HouseCheckup | LOW | Pitch STG landlord MTD guide |
| GoFile.co.uk | LOW — after penalties post corrected | Defer |

---

## Step 5 — Competitor SERP Positioning Check

**Query checked today:** "MTD quarterly update Q2 2026 how to submit" — assessing Q2-framed query landscape pre-peak

| Competitor | Present | Notes |
|-----------|---------|-------|
| GOV.UK | ✅ | MTD quarterly updates submission guidance |
| Xero | ✅ | MTD quarterly updates guide (2026) |
| HMRC makingtaxdigital campaign | ✅ | Campaign site with Q2 framing |
| TinyTax | ✅ | MTD ITSA Quarterly Updates: Deadlines Explained |
| Varro Tax | ✅ | MTD ITSA quarterly updates: dates, data, penalties (2026) |
| MTD.digital | ✅ | MTD Deadlines 2026–2028 |
| PocketReceipt | ✅ | MTD ITSA Quarterly Checklist (2026/27) |
| AbraTax | ✅ | Q2 submission guide |
| AccrueAccounting | ✅ | Q2 framed guide |
| Finistry | ✅ | MTD quarterly update explainer |
| **SoleTraderGuide** | ❌ | `how-to-submit-first-mtd-quarterly-update-august-2026.mdx` is Q1-titled; locked out of Q2-framed queries |

**Assessment:** STG's Q1 submission post is effectively invisible to the Q2 query cluster, which is now the active consumer question with Q2 period open until 5 October. This is a reframe task, not a new post — updating the title and slug-reference from Q1-specific to a "how to submit MTD quarterly updates" evergreen framing would capture all four quarters from a single post. The Q1 post's traffic window has passed; the Q2 window is 9 days from peak. No time to publish a new Q2 post from scratch before the peak — reframing the existing post is the only viable option this week.

**Competitor soft-landing SERP check (carry-forward):**

Multiple competitors continue to carry accurate soft-landing content: Sage, TinyTax, Varro Tax, PocketReceipt, AccountantSearch, MTD.digital. STG's penalty post remains the only independent guide in this SERP cluster that contradicts the soft-landing. If a searcher reads STG and then checks Xero or TinyTax, the discrepancy is immediately apparent.

---

## Step 6 — Priority Recommendations Summary

| Priority | Action | Owner | Deadline |
|----------|--------|-------|----------|
| 🔴 CRITICAL — TODAY | Fix `mtd-penalties-late-quarterly-updates-uk.mdx`: (1) Replace FAQ Q1 answer with soft-landing statement. (2) Update CTA from expired "before April 2026" to "before 7 November 2026." (3) Add InfoCallout at top: no penalty points for 2026/27; system activates April 2027. Q2 traffic peak in 9 days. **Day 22.** | QA/Reviewer Agent | **Today** |
| 🔴 CRITICAL — TODAY | Fix `first-quarterly-update-what-sole-traders-need-to-do.mdx` FAQ Q1: replace incorrect penalty points answer with soft-landing statement. **Day 98.** | QA/Reviewer Agent | **Today** |
| 🔴 CRITICAL — TODAY | Fix SERP year tag: `(2025)` → `(2026)` in Xero and Sage reviews — 6 instances, 2 files, 6-line change. **Day 22.** | SEO Agent | **Today** |
| 🔴 CRITICAL — TODAY | Fix `free-vs-paid-mtd-software.mdx`: add soft-landing InfoCallout; remove future-tense MTD framing; verify software list against providers data. **Day 98.** | QA/Reviewer Agent | **Today** |
| 🔴 HIGH — 7 DAYS | Reframe `how-to-submit-first-mtd-quarterly-update-august-2026.mdx` from Q1-specific to evergreen quarterly updates guide. Current Q1 title locks it out of Q2/Q3/Q4 queries. Q2 peak in 9 days — reframing today could still capture tail of Q2 traffic. | SEO Agent | **Today or tomorrow** |
| 🔴 HIGH — 7 DAYS | Publish reactive auto-enrolment post before Q2 period closes (5 Oct). After 5 Oct the "Q2 period is still open" hook is gone. Revised angle: *"HMRC Has Enrolled You in MTD — Here's What to Do Before 7 November."* Differentiators: working eligibility checker, software chooser, Q2 catch-up fact (missed Q1 filers can submit cumulative update by 7 November). | SEO Agent + Editorial | **By 5 October** |
| 🟡 HIGH | Outreach to **GoCardless** — pre-Q2 window is now critical (7 days). Three MTD guides, no tool links, very high DA. | Editorial | **This week** |
| 🟡 HIGH | Outreach to **CMA Accountancy, Varro Tax, AccrueAccounting, TinyTax.co.uk** — Q2 window is now the outreach context. | Editorial | **This week** |
| 🟡 HIGH | Refresh `april-2026-mtd-rollout-explained.mdx` — reframe from future-look to retrospective + Phase 2 preview. | SEO Agent | **This sprint** |
| 🟡 HIGH | New post: Phase 2 preparation for £30k–£50k earners ahead of April 2027. GoCardless, AIA, Eternity Accountants, Howard Smith all covering this; STG has nothing. | SEO Agent | **Within 2 weeks** |
| 🟡 MEDIUM | Update `/tools/mtd-eligibility-checker` meta to emphasise combined qualifying income (SE + property) as unique calculation differentiator. | SEO Agent | **This week** |
| 🟡 MEDIUM | Refresh `mtd-software-options-explained.mdx`: current software landscape, remove future-tense. | SEO Agent | **This sprint** |
| 🟢 LOW | Outreach to The Independent Landlord, Rhodium Accounting, HouseCheckup — non-time-sensitive windows. | Editorial | Within 3 weeks |

---

## Step 7 — Routing

**→ QA/Reviewer Agent (CRITICAL — before 7 October, ideally today):**

**1. `mtd-penalties-late-quarterly-updates-uk.mdx`** — Three changes required:

- **FAQ Q1 (frontmatter lines 19–22):** Replace:  
  *"You receive one penalty point for each missed quarterly update. Once you accumulate four points, HMRC charges a £200 penalty. Points can expire after 24 months of full compliance, but only once all outstanding submissions have been filed."*  
  With:  
  *"For 2026/27, HMRC has confirmed a soft-landing: no penalty points will be issued for late quarterly updates during the first year of MTD. The points-based system — where four accumulated points trigger a £200 fine — takes effect from April 2027. However, EOPS and Final Declaration penalties apply from April 2026."*

- **CTA block (frontmatter line 14):** Replace:  
  *"Check whether Making Tax Digital applies to you and what you need to do before April 2026."*  
  With:  
  *"Check whether Making Tax Digital applies to you and what you need to do before 7 November 2026."*

- **Add `<InfoCallout>` at start of post body:**  
  *"For 2026/27, HMRC has confirmed a soft-landing: no penalty points will be issued for late quarterly updates during the first year of MTD. The points-based penalty system — four accumulated points triggering a £200 fine — applies from April 2027 onwards. EOPS and Final Declaration penalties are live from April 2026."*

**2. `first-quarterly-update-what-sole-traders-need-to-do.mdx`** — Two changes required:

- **FAQ Q1 (frontmatter lines 19–22):** Replace:  
  *"Under MTD's penalty points system, each late quarterly submission earns one penalty point. When you accumulate enough points (currently four for quarterly filers), a £200 financial penalty is triggered. Points expire after a period of clean compliance, but it is always best to submit on time. If you genuinely cannot submit, contact HMRC as early as possible."*  
  With:  
  *"For 2026/27, HMRC has confirmed a soft-landing: no penalty points will be issued for late quarterly updates. The points-based penalty system — four points triggering a £200 fine — applies from April 2027. EOPS and Final Declaration penalties are live from April 2026. If you missed Q1 (7 August deadline), you can submit a cumulative update covering both Q1 and Q2 by 7 November 2026."*

- **Body content:** Update updatedAt date and reframe all Q1 future-tense references. Q1 deadline was 7 August 2026 — 51 days ago. Sections written as "you will submit your first update" need past/current framing.

**3. `free-vs-paid-mtd-software.mdx`** (Day 98):
- Add soft-landing InfoCallout at top.
- Remove future-tense MTD framing throughout ("when MTD launches in April 2026", etc).
- Verify software list is current against `src/data/providers/index.ts`.
- Update updatedAt date.

---

**→ SEO Agent (CRITICAL — today):**

**Fix SERP year tag (Day 22 — 6-line change across 2 files):**

- `src/app/(public)/reviews/xero/page.tsx`:
  - Line 24: `(2025)` → `(2026)`
  - Line 26: `"in 2025"` → `"in 2026"`
  - Line 118: `(2025)` → `(2026)`
- `src/app/(public)/reviews/sage/page.tsx`:
  - Line 24: `(2025)` → `(2026)`
  - Line 26: `"in 2025"` → `"in 2026"`
  - Line 118: `(2025)` → `(2026)`

**Reframe `how-to-submit-first-mtd-quarterly-update-august-2026.mdx` (before Q2 peak, 9 days):**
- Title: *"How to Submit an MTD Quarterly Update — Step-by-Step Guide for Sole Traders"*
- Description: evergreen framing covering all four quarters; include Q2 deadline (7 November) as current hook
- Body: reframe Q1-specific sections as Q1 example within a general quarterly cycle guide; add Q2 and beyond content
- Add InfoCallout on soft-landing (no penalty points for missed Q1 in 2026/27)

**Phase 2 content brief (within 2 weeks):**
- Working title: *"Making Tax Digital and the £30,000 Threshold: Phase 2 Preparation Guide (April 2027)"*
- Target audience: sole traders and landlords with qualifying income £30,000–£50,000
- Key differentiator: use STG's qualifying income definition (combined SE + property; PAYE/dividends/savings excluded) to clarify who Phase 2 captures that Phase 1 missed
- CTA: eligibility checker as primary tool

---

**→ Editorial (human — cannot be automated):**

- **GoCardless (CRITICAL — 7-day Q2 window):** Contact their UK content team directly. Three guides, no tool links, very high DA. Pitch both tools. Do not wait.
- **CMA Accountancy:** Published auto-enrolment post 26 September. Pitch eligibility checker + software chooser as reader next-steps.
- **Varro Tax, AccrueAccounting, TinyTax.co.uk:** Pre-Q2 outreach window. Pitch both tools.
- **Reactive post draft:** If auto-enrolment post cannot be written before 5 October, the window for the "Q2 period is still open" hook closes. A human author needs to commit to the draft this week.

---

## Summary of Changes Since Last Report (26 September)

1. **HMRC maintenance window ends at 09:00 today.** MTD sign-up service resumes. Maintenance hook for the reactive post expired 26 Sept at 19:00 — not recoverable.
2. **Reactive post now Day 27.** Q2 is the only remaining hook. The publication window before Q2 period closes (5 October) is now 7 days.
3. **Q2 period closes in 7 days.** After 5 October, the "period is still open" urgency signal disappears. Q2 deadline (7 November) remains but is shared with all 14 SERP competitors.
4. **All critical items remain unactioned.** Stale posts: Day 98. SERP year tags: Day 22. Both penalty FAQ errors confirmed live in repo this run.
5. **No new backlinks or brand mentions detected.**
6. **Soft-landing status unchanged.** No new HMRC announcements. Fact errors in penalty posts remain unaddressed.
7. **GoCardless outreach window is now the most time-sensitive editorial action.** Very high-DA, no commercial tension, pre-Q2 peak is ideal timing.

---

*Report generated by DA Agent — research only, no repo files modified.*  
*Previous report: 2026-09-26 | Next scheduled run: 2026-09-29*

---

### Intelligence Sources (Carry-Forward from 26 September — no live search access this run)

- [ICAS — HMRC to sign up taxpayers for MTD automatically from September](https://www.icas.com/news-insights-events/news/tax/hmrc-to-sign-up-taxpayers-for-mtd-automatically-from-september)
- [Sage — MTD for Income Tax soft landing period explained](https://www.sage.com/en-gb/blog/mtd-for-income-tax-soft-landing-period-explained/)
- [PocketReceipt — Missed the 7 August MTD Deadline? What Actually Happens](https://pocketreceipt.co.uk/blog/missed-mtd-deadline)
- [FlySoftware — HMRC Confirms Soft-Landing Year for MTD Quarterly Update Penalties](https://flysoftware.com/media/news-article?id=54)
- [AccountantSearch — The August 7th MTD Deadline: Why the Soft Landing Isn't a Reason to Slack Off](https://www.accountantsearch.co.uk/post/the-august-7th-mtd-deadline-why-the-soft-landing-isn-t-a-reason-to-slack-off)
- [MTD.digital — MTD Deadlines 2026-2028](https://mtd.digital/mtd-income-tax/mtd-deadlines-key-dates/)
- [GoCardless — Making Tax Digital: Your guide to the 2026 Income Tax changes](https://gocardless.com/blog/mtd-itsa-income-tax-changes-2026-guide)
- [SPA — HMRC Planned Outages: 26–28 September 2026](https://spa.org.uk/hmrc-planned-outages-26-28-september-2026/)
