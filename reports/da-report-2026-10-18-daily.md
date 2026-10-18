# SoleTraderGuide.co.uk — Daily DA Report
**Date:** 18 October 2026  
**Agent:** DA Agent (Scheduled Run)  
**Status:** Research + Recommendations Only — No repo files modified  
**Previous report:** 2026-10-17 | **Δ changes since yesterday noted inline**

---

## Site Phase Snapshot

| Metric | Status |
|--------|--------|
| Estimated DA phase | Phase 1 — early authority build (estimated DA 0–15) |
| External backlinks detected | None new identified |
| Brand mentions detected | None new |
| **Q2 deadline** | **7 November 2026 — 20 days away** (was 21 yesterday) — **falls on a Saturday; no extension** |
| Q3 period | 6 October 2026 – 5 January 2027 (Q3 deadline: 7 February 2027) |
| Posts total | 48 blog posts |
| Days since last new post | **166 days** |
| Stale posts >12 months (unactioned) | **4** (unchanged) |
| SERP title anomaly | `(2025)` live on Xero and Sage reviews — **Day 42 unaddressed** |
| Software production access | HMRC production credential freeze (confirmed 28 Sep) — still live |
| Legacy API retirements | **CONFIRMED via GOV.UK Dev Newsletters** — v2 Capital Gains Income + Reliefs APIs retired 16 Oct; Freelance Informer framing was broader than reality |
| Autumn Budget 2026 | **28 October 2026 — 10 days away** |
| Phase 2 content gap | HMRC press release live since 5 Oct — STG still has no Phase 2 post — **Day 13** |
| ICAEW review call | **NEW TODAY** — ICAEW Rep 75/26: formal Budget submission calls for Phase 2 review before April 2027 launch |
| MoneySavingExpert gap | **CONFIRMED TODAY** — MSE has an MTD guide but not ranking in targeted queries; known start-date error (1 Apr vs 6 Apr) |

---

## Note — /da-agent Skill Not Found

The scheduled prompt references `/da-agent` — this command does not exist in `.claude/commands/`. **Day 5 of notice.** Run completed using the `post-publish-da` protocol and prior report format. This notice will continue daily until the skill is created.

---

## Step 1 — HMRC & MTD News: Digital PR Opportunities

### 1a. 🔴 NEW TODAY — ICAEW Representation 75/26: Formal Budget Submission Calls for Phase 2 Review

**Confirmed via ICAEW.com:** ICAEW has submitted **Representation 75/26** ahead of the 28 October 2026 Autumn Budget, formally asking the government to conduct a full review of Phase 1 MTD before proceeding with the Phase 2 rollout to taxpayers with income above £30,000 from April 2027.

**ICAEW's stated basis:**
- **Low awareness** among affected taxpayers about MTD obligations
- **Technical problems** reported by members — software errors, connectivity issues
- **Record errors** flagged by member firms using live MTD software
- Phase 2 would add an estimated 1.1 million taxpayers on top of Phase 1's 864,000 — ICAEW argues the foundations are not strong enough to scale yet

**Why this matters for STG — CRITICAL:**
- This is the strongest pre-Budget signal yet that the government may face pressure to delay or soften Phase 2
- Two outcomes are now in play: (a) Budget confirms Phase 2 as scheduled (April 2027, no soft landing); or (b) Budget announces a review, a soft landing, or a pause
- **Either outcome requires a Phase 2 post to be indexed before 28 October.** If Phase 2 is confirmed: STG's post is the freshest guide on the day. If Phase 2 is reviewed/paused: STG can update with breaking news within hours and own the "what does this mean for you?" query
- The ICAEW submission adds a third narrative thread to the Phase 2 post: not just "are you eligible?" but "is Phase 2 definitely happening? Here's the current state of play."
- ICAEW is DA 70+ and citing this in their formal submission to government — a credible authority source for any piece STG publishes

**Content/PR angle — HIGH:** Add the ICAEW review call as a section in the Phase 2 post. Pitch anchor: *"The UK's leading accountancy body has told the government to review Phase 1 before adding 1.1 million more taxpayers from April 2027. Here's what that means — and what you should do whether or not Phase 2 is delayed."*

---

### 1b. 🟡 CONFIRMED — HMRC API v2 Retirements on 16 October 2026: Scope Clarified

**Confirmed via HMRC GOV.UK Software Developer Newsletters (Editions 4–6):** On 16 October 2026, HMRC retired v2 versions of two specific APIs:
- **Individuals Capital Gains Income API** (v2 → migrate to v3)
- **Individuals Reliefs API** (v2 → migrate to v3)

**Clarification from yesterday:** The Freelance Informer article characterised these as "older Self Assessment API endpoints," implying a broader shutdown. In practice, these are capital gains and reliefs APIs specifically — not the core MTD ITSA quarterly filing APIs. However, software that handles capital gains or relief claims alongside quarterly updates would be affected.

**Updated InfoCallout D wording (replace yesterday's version):**
> *On 16 October 2026, HMRC retired v2 of its Individuals Capital Gains Income API and Individuals Reliefs API. Software handling capital gains or relief claims must now use v3. If your software throws errors when logging capital gains transactions or claiming reliefs, check with your software provider for an available update. Quarterly update and Final Declaration filing through the core MTD APIs are not directly affected by this change.*

**Action:** Route corrected InfoCallout D to QA Agent for addition to `best-accounting-software-uk-sole-traders-freelancers-2026.mdx` and `free-vs-paid-mtd-software.mdx`. Remove the "unconfirmed" status from the standing action list.

---

### 1c. 🔴 STANDING CRITICAL — Phase 2 Content Gap: Budget 10 Days Away; ICAEW Adding Urgency

**Status: most urgent action remaining.** Day 13 of confirmed gap. Budget is 10 days away. ICAEW's review submission (Step 1a) adds a new narrative dimension that makes the post both timely and differentiated.

Confirmed competitors with Phase 2 content (unchanged from 17 Oct, with startups.co.uk now confirmed):
- GOV.UK press release (lead result in Phase 2 cluster)
- Which? (2 pieces, DA 70+), BusinessAccountingBasics.co.uk, Coconut/GetCoconut, Crunch.co.uk
- Lanop.co.uk, FiguresUK, mtd.digital, accountaxzone.com, accounts-os.com, tinytax.co.uk
- Tide.co.uk, GoCardless, BeanCount.io (Jul/Aug 2026 guides)
- ATT, ICAEW, Scottish Financial News, Price Bailey
- **startups.co.uk — CONFIRMED today** (Phase 2 reference in their "mtd-sole-traders" page)

**STG: zero Phase 2 content — Day 13.**

---

### 1d. 🔴 STANDING CRITICAL — Q2 Deadline: 20 Days (7 November 2026, Saturday)

**Status: unchanged.** Key differentiators still unclaimed by any competitor:
- **Saturday date (no extension)** — unique to STG's planned guide
- **Cumulative Q1+Q2 catch-up** for ~430,000 who missed Q1 (exact GOV.UK figure: 436,000 filed Q1, of 864,000 in scope — meaning ~428,000 may not have filed)
- **Auto-enrolled cohort** ("HMRC signed me up automatically — what do I do now?") — confirmed since Phase 1 September auto-enrolment

**No new Q2 competitor content found today.** gofile.co.uk, ANNA Money, salarytax.uk, Pandle, sparkreceipt.com still indexed. STG absent. Tide's "5 November" error remains live — 20 days to deadline.

---

### 1e. 🟡 MONITORING — Budget MTD Agenda Possibilities (10 Days)

From pre-budget commentary (RSM, ICAEW, Simply Business, Taxfly, Creative Accountants):
- **Soft landing for Phase 2** — possible if ICAEW's review call gains traction
- **Penalty points system refinement** — one or two sources mention this as a speculated agenda item
- **E-invoicing roadmap** — flagged in two previews as a Budget digital-tax item
- **Phase 2 timeline reconfirmation** — most likely outcome if ICAEW's review call is rejected

**No pre-budget MTD announcement has been made.** Budget is confirmed for 28 October 2026.

---

## Step 2 — Brand Mentions and Backlinks

**No new editorial backlinks or brand mentions detected.**

STG absent from all MTD query clusters checked. 166 days since last new post published.

### 🔴 STANDING — SERP "(2025)" Year Tag (Day 42)

No change. Day 42. Six-line fix across two files:
- `src/app/(public)/reviews/xero/page.tsx` lines 24, 26, 118: `(2025)` → `(2026)`
- `src/app/(public)/reviews/sage/page.tsx` lines 24, 26, 118: same

Every competitor review page shows `(2026)`. STG shows `(2025)`. This is now the longest-standing unactioned fix in the standing list.

---

## Step 3 — Content Freshness Audit (>12 Months)

Four stale posts unchanged. No new posts have crossed the 12-month threshold.

| Priority | File | `updatedAt` | Age | Core issue |
|----------|------|-------------|-----|-----------|
| 🔴 CRITICAL | `free-vs-paid-mtd-software.mdx` | 2025-01-10 | **21 months** | Future-tense; no freeze; no FOI data; no API retirement context; no ICAEW review angle |
| 🔴 CRITICAL | `first-quarterly-update-what-sole-traders-need-to-do.mdx` | 2025-02-15 | **20 months** | Future-tense Q1; wrong penalty FAQ; no cumulative catch-up; no auto-enrolment context; highest-intent stale post |
| 🟡 HIGH | `mtd-software-options-explained.mdx` | 2025-01-28 | **21 months** | Future-tense; no 2026 developments, freeze, or API retirements |
| 🟡 HIGH | `april-2026-mtd-rollout-explained.mdx` | 2025-03-01 | **19+ months** | April 2026 as future; no Phase 2; no ICAEW review angle; no soft landing info |

**Standing flag (title misleading):** `income-tax-rates-sole-traders-2025-26.mdx` — title and FAQs reference "2025-26"; now in 2026/27 tax year.

---

## Step 4 — Link Acquisition Opportunity Research

**Target researched today:** MoneySavingExpert — gap confirmed, pitch angle sharpened with ICAEW hook

### MoneySavingExpert (moneysavingexpert.com) — 🔴 HIGH

**Evidence today:** MSE has a "Guide to Making Tax Digital" at moneysavingexpert.com/family/making-tax-digital/ but it is not appearing in any MTD query clusters searched today (Q2 deadline, Phase 2, "making tax digital sole traders UK 2026"). The guide contains a known factual error (start date listed as "1 April 2026" vs the correct "6 April 2026" per HMRC). DA 90+.

**Why MoneySavingExpert now:**
- Budget is 10 days away — MSE updates guides around Budget announcements
- ICAEW review call adds a major "will it change?" hook that MSE readers will search for
- MSE's own guide has an error STG can reference as a differentiation point
- Phase 2 affects ~1.1 million more taxpayers — MSE's audience includes exactly this group (savers, self-employed side hustlers, small landlords)
- Q2 deadline (20 days, Saturday) is the kind of deadline MSE guides their readers about

**Pitch package (updated for ICAEW angle):**

1. **Budget hook (most urgent — by 27 October):** *"The UK's leading accountancy body (ICAEW) formally asked the government this week to review Phase 1 before adding another 1.1 million taxpayers in April 2027. Your readers need to know: is Phase 2 definitely happening? We've published the most specific Phase 2 eligibility guide available — plus a calculator — covering the ICAEW's position, what the Budget might announce, and what £30k earners should do now regardless."*

2. **Q2 deadline hook (immediate):** *"The Q2 MTD quarterly update deadline is Saturday 7 November — HMRC has not granted a working-day extension. Half of eligible taxpayers may have missed Q1 and can still catch up. MSE's guide doesn't cover this deadline or the catch-up route. We've published a step-by-step guide. Can we flag this to your editorial team?"*

3. **Error correction hook (credibility):** *"MSE's current MTD guide lists the start date as 1 April 2026 — the correct date is 6 April 2026 (per HMRC's official guidance). We'd be happy to flag this directly if it's useful, and our guide can serve as the reference for a corrected update."*

**Status:** Highest-DA available target. Pitch by 27 October (day before Budget). The ICAEW review call has made the timing sharper than it was yesterday.

---

### Carry-Over Targets (Status)

| Target | Priority | Status |
|--------|----------|--------|
| ByteStart | 🔴 HIGH | Gap confirmed **Day 5**. All pitch angles ready. Pitch today — no further delay. |
| Enterprise Nation | 🔴 HIGH | Gap confirmed. Auto-enrolment + ICAEW review hooks sharpen pitch. |
| MoneySavingExpert | 🔴 HIGH | Gap confirmed today. Error in existing guide. Pitch by 27 October. |
| startups.co.uk | 🟡 HIGH | Phase 2 reference confirmed. Phase 2 post + ICAEW hook when live. |
| Property118 | 🟡 HIGH | 44/128 landlord gap + Phase 2 landlord angle. |
| The Negotiator | 🟡 HIGH | Landlord 44/128 gap — freshest data point for this audience. |
| PropertyMark | 🟡 HIGH | Landlord MTD guide + Phase 2 pitch. |
| ANNA Money | 🟡 MEDIUM | Q2 deadline + catch-up angle after Q2 guide live. |
| Chest (joinchest.com) | 🟡 MEDIUM | Budget angle — week of 28 October. ICAEW review sharpens hook. |
| Coconut (GetCoconut) | 🟡 MEDIUM | Phase 2 + landlord angles when posts live. |
| GoCardless | 🟢 LOW | Evergreen eligibility checker pitch. |

---

## Step 5 — Competitor SERP Check

**Query checked today:** "ICAEW MTD review phase 2 October 2026" — who is covering the new ICAEW angle

| Competitor | Present | Notes |
|-----------|---------|-------|
| ICAEW.com | ✅ | "Review the roll-out of MTD says ICAEW" — their own budget submission piece |
| ICAEW — Autumn Budget 2026 hub | ✅ | Budget preview page includes MTD review call |
| RSM UK | ✅ | Autumn Budget predictions — mentions MTD Phase 2 confirmation as possible agenda item |
| Saffery | ✅ | Budget preview — Phase 2 timeline referenced; no ICAEW review angle specifically |
| Simply Business | ✅ | Budget guide — MTD mentions but no ICAEW review angle |
| Taxfly.co.uk | ✅ | Budget predictions — Phase 2 mentioned |
| uktaxdrag.co.uk | ✅ | Budget tracker page |
| **SoleTraderGuide** | ❌ | **Absent from all Budget-related clusters** |

**Assessment:** The ICAEW review angle is not yet being picked up by consumer-facing sites — only accountancy/professional press. This is STG's window. A Phase 2 post that covers the ICAEW submission plus "what the Budget might mean" positions STG as the most current, most nuanced resource for the ~1.1 million taxpayers now researching their Phase 2 status. The 10-day window before the Budget closes this opportunity.

**Phase 2 query also re-checked: "MTD sole traders April 2027 £30,000 threshold UK":**

| Competitor | Present |
|-----------|---------|
| GOV.UK press release | ✅ |
| tinytax.co.uk | ✅ |
| FiguresUK | ✅ |
| accounts-os.com | ✅ |
| Price Bailey | ✅ |
| Lanop.co.uk | ✅ |
| startups.co.uk | ✅ (Phase 2 mentioned) |
| BusinessAccountingBasics | ✅ |
| **SoleTraderGuide** | ❌ |

STG still absent from Phase 2 cluster on Day 13.

---

## Step 6 — Priority Recommendations Summary

| Priority | Action | Owner | Deadline |
|----------|--------|-------|----------|
| 🔴 CRITICAL — TODAY | Fix SERP year tags: `(2025)` → `(2026)` in Xero and Sage reviews (6 instances, 2 files). **Day 42.** | SEO Agent | **Today** |
| 🔴 CRITICAL — TODAY | Fix `first-quarterly-update-what-sole-traders-need-to-do.mdx`: remove future-tense, add soft-landing FAQ, Q2 catch-up route for missed Q1, auto-enrolment context. Q2 is 20 days away. | QA/Reviewer Agent | **Today** |
| 🔴 CRITICAL — OVERDUE | Publish Q2 filing guide: *"How to Submit Your Q2 MTD Update — Deadline Saturday 7 November 2026."* Was due 17 October. Lead with Saturday date, auto-enrolment context, cumulative Q1+Q2 catch-up. | Editorial | **TODAY — overdue** |
| 🔴 CRITICAL — BY 22 OCT | Publish Phase 2 post: *"MTD for Income Tax from April 2027: Who's Affected by the £30,000 Threshold?"* Include ICAEW review call (Rep 75/26), Budget angle, HMRC press release anchor, no-confirmed-soft-landing fact. Budget is 10 days away. | Editorial | **By 22 October** |
| 🔴 HIGH — TODAY | Add software callouts to `best-accounting-software-uk-sole-traders-freelancers-2026.mdx` and `free-vs-paid-mtd-software.mdx` — InfoCallouts A (year-end gap), B (freeze), C (FOI: 29 unused), D (API retirements — use corrected wording from Step 1b). Now confirmed; no verification delay. | QA/Reviewer Agent | **Today** |
| 🔴 HIGH — TODAY | Pitch **ByteStart** — Day 5. Three pitch angles ready. No further prep needed. | Editorial | **Today** |
| 🔴 HIGH — THIS WEEK | Pitch **Enterprise Nation** — auto-enrolment + ICAEW review hooks. Sharpened. | Editorial | **This week** |
| 🔴 HIGH — BY 27 OCT | Pitch **MoneySavingExpert** — ICAEW Budget hook + Q2 deadline hook + error correction offer. Pitch by 27 October (day before Budget). | Editorial | **By 27 October** |
| 🟡 HIGH — OVERDUE | Publish software readiness post: *"HMRC Freezes New MTD Software Approvals — What It Means for Your Year-End Return."* Was due 17 Oct. Use corrected API retirement wording (Step 1b). | Editorial | **OVERDUE — publish today** |
| 🟡 HIGH — THIS SPRINT | Add landlord software gap `<InfoCallout>` (44/128) to `making-tax-digital-landlords-complete-guide-uk.mdx` and `sole-trader-and-landlord-income-mtd-uk.mdx`. | QA/Reviewer Agent | **This sprint** |
| 🟡 HIGH — THIS SPRINT | Refresh `april-2026-mtd-rollout-explained.mdx` — add Phase 2 context including ICAEW review call, auto-enrolment, soft landing status. | QA/Reviewer Agent | **This sprint** |
| 🟡 MEDIUM — THIS SPRINT | Refresh `mtd-software-options-explained.mdx` — remove future-tense; add 2026 landscape, freeze, FOI, API retirements. | QA/Reviewer Agent | **This sprint** |
| 🟡 MEDIUM — FLAG | `income-tax-rates-sole-traders-2025-26.mdx` — title references wrong tax year; now in 2026/27. | SEO Agent | **This sprint** |
| 🟡 MEDIUM — THIS SPRINT | Create `/da-agent` skill in `.claude/commands/da-agent.md`. **Day 5.** | Engineering | **This sprint** |
| 🟢 LOW | Pitch **Property118**, **The Negotiator**, **PropertyMark** once Phase 2 post + landlord callouts live. | Editorial | After Phase 2 live |
| 🟢 LOW | Pitch **ANNA Money**, **Coconut**, **GoCardless** after Q2 guide live. | Editorial | After Q2 guide live |
| 🟢 LOW | Pitch **Chest** (joinchest.com) — Budget angle week of 28 October. ICAEW review hook adds urgency. | Editorial | Week of 28 October |

---

## Step 7 — Routing

### → QA/Reviewer Agent (CRITICAL — today)

**1. `first-quarterly-update-what-sole-traders-need-to-do.mdx` — TODAY**

Replace penalty FAQ with (updated for auto-enrolment context, per 17 Oct version with minor ICAEW addition):
> *"For 2026/27, HMRC has confirmed a soft-landing: no penalty points will be issued for late quarterly updates. If HMRC automatically signed you up from September 2026, or if you missed the Q1 deadline (7 August 2026), you can still submit a cumulative update covering both Q1 and Q2 by the Q2 deadline — Saturday 7 November 2026. Note: HMRC has not granted a working-day extension; do not leave it until Monday 9 November. Approximately 428,000 in-scope taxpayers may have missed Q1 — you are not alone. The soft-landing applies to Phase 1 (2026/27) only. Phase 2 (April 2027) has no confirmed soft landing — and ICAEW has formally asked the government to review Phase 2 before it launches."*

Add `<InfoCallout>`:
- No penalty points for late quarterly updates in 2026/27 (Phase 1 soft landing)
- Auto-enrolled? HMRC signs up qualifying taxpayers automatically from September 2026
- Missed Q1? Submit cumulative Q1+Q2 update by **Saturday 7 November** — no Monday extension (no working-day grace period confirmed)
- Phase 2 (April 2027) has no confirmed soft landing — and ICAEW formally asked the government to review before launch (see Budget note)

Update `updatedAt` to `2026-10-18`.

**2. Software callouts — TODAY (all four now confirmed)**

For `best-accounting-software-uk-sole-traders-freelancers-2026.mdx` and `free-vs-paid-mtd-software.mdx`:

**InfoCallout A — year-end filing gap:**
> *As of October 2026, approximately one third of HMRC-approved MTD software cannot yet file the end-of-year tax return (Final Declaration). Verify your software explicitly supports both quarterly updates and the Final Declaration before committing.*

**InfoCallout B — accreditation freeze:**
> *HMRC paused all new software approvals for MTD for Income Tax in 2026/27. The 165 products approved as at 4 October 2026 are the only compliant options for this year. Further HMRC guidance expected by early 2027.*

**InfoCallout C — FOI finding:**
> *An FOI request revealed that 29 of the 165 approved products had never submitted a real quarterly update by the end of August 2026. Check that your chosen software has a live track record of successful submissions.*

**InfoCallout D — API retirements (corrected):**
> *On 16 October 2026, HMRC retired v2 of its Individuals Capital Gains Income API and Individuals Reliefs API. Software handling capital gains or relief claims must now use v3. If your software throws errors when logging capital gains transactions or claiming reliefs, check with your software provider for an available update. Quarterly update and Final Declaration filing through the core MTD APIs are not directly affected.*

**3. Landlord callouts (unchanged — still unactioned from earlier reports)**

Add to `making-tax-digital-landlords-complete-guide-uk.mdx` and `sole-trader-and-landlord-income-mtd-uk.mdx`:

**InfoCallout — landlord software gap:**
> *An October 2026 report found that 44 of 128 HMRC-approved products marketed as landlord-compatible do not include the full range of tools required for landlord-specific MTD reporting. Before choosing software, confirm it supports property income, multiple rental properties (if applicable), and Final Declaration filing.*

---

### → SEO Agent (CRITICAL — today)

**Fix SERP year tag — Day 42 (6-line change across 2 files):**
- `src/app/(public)/reviews/xero/page.tsx` lines 24, 26, 118: `(2025)` → `(2026)`
- `src/app/(public)/reviews/sage/page.tsx` lines 24, 26, 118: same

**Flag for title review:**
- `income-tax-rates-sole-traders-2025-26.mdx` — title and slug reference 2025-26 tax year; now in 2026/27. Recommend title update before this becomes a standing anomaly like the Xero/Sage tag.

**New/updated post briefs:**

*Post A — Q2 filing guide (TODAY — overdue from 17 October):*
- Title: *"How to Submit Your Q2 MTD Update — Deadline Saturday 7 November 2026"*
- Lead angles: Saturday date (no extension), auto-enrolled cohort, ~428k missed Q1 can file cumulative Q1+Q2
- Differentiators: Tide says "5 Nov" (wrong); Saturday warning absent from all competitors; auto-enrolment hook for new-to-MTD searchers
- Internal links: `/tools/mtd-eligibility-checker`, `first-quarterly-update-what-sole-traders-need-to-do.mdx`, software pages

*Post B — Phase 2 (by 22 October — 10 days before Budget):*
- Title: *"MTD for Income Tax from April 2027: Who's Affected by the £30,000 Threshold?"*
- Anchors: HMRC GOV.UK press release (5 Oct 2026) + ICAEW Rep 75/26 (Oct 2026)
- Key facts: 1.1 million newly affected; qualifying income = SE + property gross; PAYE/dividends/savings excluded; 2025/26 SA return determines eligibility; **no confirmed soft landing for Phase 2**; ICAEW calling for review before launch; Budget on 28 October may reconfirm, add soft landing, or announce review
- Supporting sentence: Salesforce/HMRC £2bn CRM deal (context — not lead)
- Internal links: `/tools/mtd-eligibility-checker`, Phase 1 post, landlords guide

*Post C — Software readiness (TODAY — overdue from 17 October):*
- Title: *"HMRC Freezes New MTD Software Approvals — What It Means for Your Year-End Return"*
- Key facts: production access freeze (Sep 2026); 165 approved products; 29 unused (FOI); 1-in-3 can't file year-end; landlord gap 44/128; API retirements 16 Oct (corrected scope — capital gains/reliefs v2)
- Sources: GOV.UK Dev Newsletters (confirmed), AccountingWEB, BuzzAccounting, Yahoo/FOI

---

### → Editorial (human decisions required)

**Immediate — today:**
1. **Publish Q2 guide** — was due 17 October. 20 days to Saturday deadline. Saturday warning + cumulative catch-up remain unclaimed by any competitor.
2. **Pitch ByteStart today** — Day 5 of ready pitch angles. All three hooks assembled. No further prep.
3. **Publish software readiness post** — was due 17 October. Use corrected API retirement wording. Do not let Q2 guide and software post both slip.

**By 22 October:**
4. **Publish Phase 2 post** — Budget is 10 days away. Add ICAEW Rep 75/26 as a key section. The "will Phase 2 be delayed?" angle is exclusive to STG right now — no consumer-facing site has covered it.

**By 27 October:**
5. **Pitch MoneySavingExpert** — ICAEW review + Budget hook + Q2 deadline + error correction offer. Highest-DA available target (90+).

**This week:**
6. **Pitch Enterprise Nation** — auto-enrolment + ICAEW review hook.

**Engineering:**
7. **Create `/da-agent` skill** — Day 5 of notice.

---

## Δ Summary: New Since 17 October Report

1. **🔴 ICAEW Representation 75/26 — formal Budget submission calls for Phase 2 review.** ICAEW formally asked the government to review Phase 1 before adding 1.1 million taxpayers from April 2027. Cites low awareness, technical problems, record errors from member firms. Budget is 10 days away. This is the most significant new angle of the week. STG must publish Phase 2 content with ICAEW review section before 28 October.
2. **🟡 HMRC API retirements on 16 October confirmed — but scope narrower than reported.** Freelance Informer described a broad SA API shutdown. Reality: v2 of the Individuals Capital Gains Income API and Individuals Reliefs API were retired. Core MTD ITSA quarterly filing APIs not affected. InfoCallout D wording corrected accordingly. Remove "unconfirmed" status from standing action list.
3. **🟢 MoneySavingExpert MTD gap confirmed.** MSE has an existing MTD guide but it is not ranking in targeted MTD queries and contains a known factual error (start date). Added to outreach list with ICAEW Budget hook as the pitch anchor. Highest-DA target (90+) confirmed available.
4. **🟢 startups.co.uk Phase 2 presence confirmed.** Mentioned Phase 2 on their MTD page — now on the competitor list for Phase 2 SERP.
5. **Q2 deadline now 20 days away.** Saturday warning + cumulative catch-up + auto-enrolment context remain unclaimed by any competitor. Q2 guide is overdue (was due 17 Oct).
6. **Software readiness post is overdue** (was due 17 Oct). Decision required: publish today alongside Q2 guide.
7. **ByteStart is Day 5 of confirmed gap.** No further preparation needed. Pitch today.
8. **SERP year-tag anomaly is Day 42.** Six lines of code. Longest-standing unactioned fix on the list.

---

*Report generated by DA Agent (post-publish-da protocol — /da-agent skill not found, Day 5) — research only, no repo files modified.*  
*Previous report: 2026-10-17 | Next scheduled run: 2026-10-19*

---

### Intelligence Sources

- [ICAEW — Review the roll-out of MTD says ICAEW (Oct 2026)](https://www.icaew.com/insights/tax-news/2026/oct-2026/review-the-roll-out-of-mtd-says-icaew)
- [ICAEW — Autumn Budget 2026 hub](https://www.icaew.com/technical/economy/autumn-budget-2026)
- [GOV.UK — Edition 5: Making Tax Digital for Income Tax software developer newsletter](https://www.gov.uk/government/publications/edition-5-making-tax-digital-for-income-tax-software-developer-newsletter/edition-5-making-tax-digital-for-income-tax-software-developer-newsletter)
- [GOV.UK — Edition 6: Making Tax Digital for Income Tax software developer newsletter](https://www.gov.uk/government/publications/edition-6-making-tax-digital-for-income-tax-software-developer-newsletter/edition-6-making-tax-digital-for-income-tax-software-developer-newsletter)
- [GOV.UK — 436,000 sole traders and landlords make their tax digital](https://www.gov.uk/government/news/436000-sole-traders-and-landlords-make-their-tax-digital)
- [HMRC GOV.UK press release — Sole traders and landlords earning more than £30,000 urged to act now (5 Oct 2026)](https://www.gov.uk/government/news/sole-traders-and-landlords-earning-more-than-30000-urged-to-act-now)
- [RSM UK — Autumn Budget 2026 predictions](https://www.rsmuk.com/insights/budget/autumn-budget-2026-predictions)
- [ICAEW — MTD for income tax penalties](https://www.icaew.com/technical/tax/making-tax-digital/mtd-for-income-tax-penalties)
- [Saffery — Autumn Budget 2026: expected UK tax changes](https://www.saffery.com/insights/articles/autumn-budget-2026-expected-uk-tax-changes-and-what-businesses-and-individuals-should-do-now/)
- [Simply Business — A beginner's guide to the Autumn Budget 2026](https://www.simplybusiness.co.uk/knowledge/business-news/autumn-budget-beginners-guide/)
- [Creative Accountants — Autumn Budget 2026: What You Can Expect](https://creative.accountants/budget/autumn-budget-2026/)
- [uktaxdrag.co.uk — Autumn Budget 2026 tracker](https://uktaxdrag.co.uk/autumn-budget-2026-tracker.html)
- [Taxfly.co.uk — Autumn Budget 2026: Date, Predictions and What to Expect](https://www.taxfly.co.uk/guides/autumn-budget-2026-predictions)
- [uktax.tools — Autumn Budget 2026: Confirmed 28 October](https://uktax.tools/autumn-budget-2026/)
- [Price Bailey — Guide to Making Tax Digital](https://www.pricebailey.co.uk/guides/mtd-guide/)
- [startups.co.uk — MTD sole traders](https://startups.co.uk/news/mtd-sole-traders/)
- [FiguresUK — MTD April 2027 £30k threshold](https://www.figuresuk.co.uk/mtd-april-2027-30k-threshold/)
- [accounts-os.com — MTD thresholds 2026–2028](https://accounts-os.com/guides/what-are-the-new-mtd-thresholds-for-uk-sole-traders-in-2026-2028.md)
- [tinytax.co.uk — MTD for Income Tax: A Sole Trader's Complete Guide](https://tinytax.co.uk/guides/mtd-itsa-for-sole-traders)
- [mtd.digital — Preparing for Phase 2: MTD for 30K+ Income](https://mtd.digital/mtd-income-tax/mtd-phase-2-preparation/)
- [House of Commons Library — Making Tax Digital: Developments since 2020](https://commonslibrary.parliament.uk/research-briefings/cbp-10573/)
- [Beancount.io — UK Making Tax Digital: Half missed first quarterly update guide (Aug 2026)](https://beancount.io/blog/2026/08/14/uk-making-tax-digital-half-missed-first-quarterly-update-guide)
- [Pandle — What Happens If I Miss the MTD Income Tax Quarterly Update Deadline?](https://www.pandle.com/tax/making-tax-digital/what-happens-if-i-miss-the-mtd-income-tax-quarterly-update-deadline-63061/)
- [CIPP — MTD first quarterly update deadline passes (Aug 2026)](https://www.cipp.org.uk/resources/news/mtd-first-quarterly-update-deadline-passes.html)
- [Meacher-Jones — Monthly business news October 2026](https://meacher-jones.com/monthly-business-news-october-2026)
- [MTD-makingtaxdigital.co.uk — MTD Threshold Reductions 2026 To 2028](https://mtd-makingtaxdigital.co.uk/blog/mtd-threshold-reductions-timeline/)
- [ICAEW — TAXguide 01/25: MTD income tax](https://www.icaew.com/technical/tax/tax-faculty/taxguides/2025/taxguide-01-25)
