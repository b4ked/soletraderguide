# SoleTraderGuide.co.uk — Daily DA Report
**Date:** 16 October 2026  
**Agent:** DA Agent (Scheduled Run)  
**Status:** Research + Recommendations Only — No repo files modified  
**Previous report:** 2026-10-15 | **Δ changes since yesterday noted inline**

---

## Site Phase Snapshot

| Metric | Status |
|--------|--------|
| Estimated DA phase | Phase 1 — early authority build (estimated DA 0–15) |
| External backlinks detected | None new identified |
| Brand mentions detected | None new |
| **Q2 deadline** | **7 November 2026 — 22 days away** (was 23 yesterday) — **falls on a Saturday; no extension** |
| Q3 period | 6 October 2026 – 5 January 2027 (Q3 deadline: 7 February 2027) |
| Posts total | 48 blog posts |
| Days since last new post | **164 days** |
| Stale posts >12 months (unactioned) | **4** (unchanged) |
| SERP title anomaly | `(2025)` live on Xero and Sage reviews — **Day 40 unaddressed** |
| Software production access | HMRC has paused new production credential requests for 2026/27 (confirmed 28 Sep); freeze still live |
| Legacy SA API retirement | **Reported 16 October 2026** — Freelance Informer: HMRC turns off older SA API endpoints today; not yet confirmed on HMRC Developer Hub |
| Autumn Budget 2026 | **28 October 2026 — 12 days away** — BGM newsletter notes "Making Tax Digital update for sole traders and landlords" in budget agenda |
| Phase 2 content gap | **HMRC press release live** (5 Oct 2026): "sole traders and landlords earning more than £30,000 urged to act now" — STG has no Phase 2 post |
| Phase 2 soft landing | **No confirmed soft landing for Phase 2** (unchanged) |

---

## Note — /da-agent Skill Not Found

The scheduled prompt references `/da-agent` — this command does not exist in `.claude/commands/`. This run was completed using research plus reference to the `post-publish-da` protocol and prior report format. **Day 3 of notice.** The `/da-agent` skill must be created to formalise the daily workflow.

---

## Step 1 — HMRC & MTD News: Digital PR Opportunities

### 1a. 🔴 NEW TODAY — HMRC Legacy SA API Endpoints: Reported Retirement Date Is Today

**Freelance Informer** reported that HMRC will permanently turn off older Self Assessment API endpoints on **16 October 2026**, breaking custom software still on legacy API versions. A new 403 error applies to clients not enrolled in MTD.

**What this means:**
- HMRC's own API status page (Self Employment Business MTD API, updated 28 Sep 2026) confirms: "HMRC is no longer accepting production credential access requests for new 2026–27 quarterly update products, as the market window has now closed."
- If the legacy API shutdown proceeds today, sole traders using any software relying on the older SA endpoints — rather than the MTD ITSA APIs — may find their software unable to communicate with HMRC.
- This event may generate a wave of confused searches from sole traders whose software throws errors for the first time.

**Content/PR angle — HIGH:** STG's software-readiness content (especially `best-accounting-software-uk-sole-traders-freelancers-2026.mdx` and the planned software-freeze post) can now reference this concrete date as the moment the old system was retired. Adds immediate urgency.

**Caveat:** The 16 October date appears only in Freelance Informer, not yet confirmed on the HMRC Developer Hub changelog. Recommend verifying at developer.service.hmrc.gov.uk before publishing.

---

### 1b. 🔴 CONFIRMED TODAY — HMRC GOV.UK Press Release Live: Phase 2 Preparation Push

**HMRC GOV.UK press release (5 October 2026):** "Sole traders and landlords earning more than £30,000 urged to act now."

- HMRC is actively signalling that Phase 2 (6 April 2027) is not delayed
- An estimated **1.1 million** newly-affected taxpayers are urged to sign up early
- Early sign-up gives more time to choose software and prepare
- HMRC has started signing up people who haven't registered (for Phase 1)

**Why this matters for STG today:** This is an official push — HMRC is now generating search demand for Phase 2 content. The search cluster is live. STG has no Phase 2 post. With the Budget 12 days away and this HMRC press release driving discovery, every day without Phase 2 content is a day where Which?, startups.co.uk, lanop.co.uk, Coconut, and FiguresUK receive that traffic instead.

**Digital PR angle — HIGH:** The HMRC press release is the hook. Pitch Phase 2 content to ByteStart, Enterprise Nation, and MoneySavingExpert with the official GOV.UK quote as the authority anchor.

---

### 1c. 🔴 NEW DETAIL — Q2 Deadline Falls on a Saturday; No Extension Confirmed

Today's research confirms: **7 November 2026 is a Saturday.** One source (gofile.co.uk) explicitly notes no working-day extension applies. Filers must submit on or before Saturday 7 November.

**Why this matters:**
- Several competitor guides (ANNA Money, salarytax.uk, IAB blog, sparkreceipt.com) cover the 7 November deadline but none prominently flag the weekend issue
- STG's planned Q2 guide should lead with: *"The deadline is Saturday 7 November — HMRC has not granted a working-day extension. Do not leave it until Monday."*
- This is a small but factually differentiating detail that positions STG as the most precise source

---

### 1d. 🔴 STANDING CRITICAL — Phase 2 Content Gap: HMRC Now Actively Pushing; Budget in 12 Days

**Status: escalating.** HMRC's own October 2026 press release is now live and driving search demand. Budget is 12 days away. No pre-budget MTD announcement confirmed. Phase 2 is already legislated; budget could only add a soft-landing or pause — either outcome is reportable if STG has a Phase 2 post already indexed.

Competitors now confirmed with Phase 2 content:
- Which? (x2 pieces, DA 70+)
- Coconut/GetCoconut (MTD timeline piece confirmed)
- Lanop.co.uk (Phase 2 business guide confirmed)
- FiguresUK (Phase 2 dedicated post)
- mtd.digital (Phase 2 preparation guide)
- Business Accounting Basics (comprehensive MTD sole traders guide)
- accountaxzone.com (extension of MTD post)
- ATT (agents' guide)
- ICAEW (confirmed from earlier report)
- Scottish Financial News (carrying HMRC press release)

**STG: zero Phase 2 content.**

---

### 1e. 🟡 MONITORING — Budget MTD Agenda Item Confirmed in Trade Newsletter

BGM Accountants' newsletter (4 September 2026) lists "Making Tax Digital update for sole traders and landlords" as a budget agenda item. This is a secondary source, not an official Treasury announcement. It may indicate expected Budget commentary on MTD Phase 2 progress — not a new announcement, but a political signal.

**Implication:** If the Budget adds a soft-landing for Phase 2 or further endorses the April 2027 timeline, STG needs an indexed Phase 2 post before 28 October to be citable on Budget day.

---

### 1f. 🟡 UNCHANGED — Software Readiness Crisis (Production Freeze + Unused Products)

No new findings today beyond the API retirement angle (Step 1a). Standing figures remain:
- 165 approved products as at 4 October 2026
- ~1-in-3 cannot yet file the Final Declaration (year-end)
- 29 approved products never submitted a real Q1 update (FOI data)
- 44 of 128 landlord-compatible products lack full tools

---

## Step 2 — Brand Mentions and Backlinks

**No new editorial backlinks or brand mentions detected.**

Direct searches for `soletraderguide.co.uk` returned no STG pages. The Q2 filing deadline cluster now includes gofile.co.uk, ANNA Money, salarytax.uk, sparkreceipt.com, IAB blog, and fredmichael.co.uk — STG absent from all.

### 🔴 STANDING — SERP "(2025)" Year Tag (Day 40)

No change. Day 40. Six-line fix across two files:
- `src/app/(public)/reviews/xero/page.tsx` lines 24, 26, 118
- `src/app/(public)/reviews/sage/page.tsx` lines 24, 26, 118

Every competitor review page shows `(2026)`. STG shows `(2025)`.

---

## Step 3 — Content Freshness Audit (>12 Months)

Four stale posts unchanged. No new posts have crossed the 12-month threshold today (the next at-risk post, `april-2026-mtd-rollout-explained.mdx`, updatedAt 2025-03-01, is 19+ months old — already tracked).

| Priority | File | `updatedAt` | Age | Core issue |
|----------|------|-------------|-----|-----------|
| 🔴 CRITICAL | `free-vs-paid-mtd-software.mdx` | 2025-01-10 | **21 months** | Future-tense; missing freeze, FOI data, API retirement angle |
| 🔴 CRITICAL | `first-quarterly-update-what-sole-traders-need-to-do.mdx` | 2025-02-15 | **20 months** | Future-tense Q1; wrong penalty FAQ; no catch-up guidance; most urgent given ~430k missed Q1 |
| 🟡 HIGH | `mtd-software-options-explained.mdx` | 2025-01-28 | **21 months** | Future-tense; missing all 2026 developments |
| 🟡 HIGH | `april-2026-mtd-rollout-explained.mdx` | 2025-03-01 | **19+ months** | April 2026 still framed as future; no Phase 2 |

**Flagged but not yet stale:** `income-tax-rates-sole-traders-2025-26.mdx` (updatedAt: 2026-04-04) — title and FAQs reference "2025-26" tax year; now in 2026/27. Not stale by updatedAt but the title produces a misleading SERP impression today.

---

## Step 4 — Link Acquisition Opportunity Research

**Target researched today:** ByteStart — HIGH priority, gap re-confirmed

### ByteStart (bytestart.co.uk) — 🔴 HIGH

**Evidence today:** ByteStart appeared in the Autumn Budget cluster (earlier reports) but zero ByteStart MTD content appeared in today's Q2 deadline searches, Phase 2 searches, or software-readiness queries. Gap confirmed for the third consecutive day.

**Why ByteStart is the best available target:**
- Small business / startup focused audience = STG core reader
- No MTD-specific October 2026 content visible across three separate query clusters
- HMRC's October 2026 Phase 2 press release is a clear pitch hook
- ByteStart has historically covered SME tax topics — the gap is timing, not alignment

**Pitch package — ready now:**
1. **Phase 2 hook (HMRC press release):** *"HMRC just published 'Sole traders earning more than £30,000 urged to act now' — 1.1 million people are 6 months away from mandatory MTD. Most don't know. Here's our Phase 2 eligibility guide — includes calculator and the £30k vs £50k difference explained."*
2. **Software readiness hook (FOI + freeze):** *"29 of 165 HMRC-approved MTD products were never used in Q1. A third can't file the year-end return. HMRC's production access freeze means these products are locked for the year. Here's how your readers choose software that actually works."*
3. **Q2 catch-up hook (immediate):** *"The Q2 MTD deadline is Saturday 7 November — no extension. Half of the 864,000 in-scope taxpayers may have missed Q1. Our step-by-step catch-up guide covers both routes."*

**Status:** Ready to pitch. Email: check ByteStart About/Contact page for current editor contact.

---

### Carry-Over Targets (Status)

| Target | Priority | Status |
|--------|----------|--------|
| ByteStart | 🔴 HIGH | Gap confirmed Day 3. Pitch immediately. |
| Enterprise Nation | 🔴 HIGH | MTD content gap confirmed. HMRC press release = pitch hook. |
| MoneySavingExpert | 🔴 HIGH | Phase 2 + budget angle. Pitch by 27 October. |
| startups.co.uk | 🟡 HIGH | Confirmed in Q2 deadline SERP today. Phase 2 post hook when live. |
| Property118 | 🟡 HIGH | Landlord software gap (44/128). |
| The Negotiator | 🟡 HIGH | Landlord 44/128 gap + Phase 2 angle for landlords. |
| PropertyMark | 🟡 HIGH | Landlord MTD guide + Phase 2 pitch. |
| Chest (joinchest.com) | 🟡 MEDIUM | Budget angle. Week of 28 October. |
| ANNA Money | 🟡 MEDIUM | Confirmed in Q2 deadline SERP today. Good pitch alignment. |
| Coconut (GetCoconut) | 🟡 MEDIUM | Confirmed in Phase 2 cluster today. MTD timeline post live. |
| GoCardless | 🟢 LOW | Evergreen eligibility checker pitch. |

---

## Step 5 — Competitor SERP Check

**Query checked today:** "MTD quarterly update deadline November 2026"

| Competitor | Present | Notes |
|-----------|---------|-------|
| gofile.co.uk | ✅ | "MTD Income Tax Deadlines & Quarterly Update Due Dates (2026/27)" — explicit Q2 dates |
| ANNA Money | ✅ | "What are the MTD Deadlines for 2026?" — deadline dates present |
| salarytax.uk | ✅ | "MTD ITSA Quarterly Deadlines + Penalties 2026/27" — dedicated penalties guide |
| sparkreceipt.com | ✅ | "MTD quarterly update checklist" — cross-language with UK content |
| IAB blog | ✅ | "MTD IT Timeline 2026–2028" — dated calendar view |
| fredmichael.co.uk | ✅ | Q2 update piece confirmed |
| AccountingWEB | ✅ | Deadline coverage in professional context |
| **SoleTraderGuide** | ❌ | **Absent from Q2 deadline cluster** |

**New entrant today:** gofile.co.uk has a comprehensive deadline calendar page and a bridging software guide — competitor to watch. Well-structured, specific to quarterly dates. No catch-up mechanics, no Tide-error correction.

**Phase 2 SERP also checked — "sole traders £30000 MTD April 2027":**

| Competitor | Present |
|-----------|---------|
| GOV.UK (press release) | ✅ |
| Scottish Financial News | ✅ |
| Lanop.co.uk | ✅ |
| FiguresUK | ✅ |
| accountaxzone.com | ✅ |
| Coconut/GetCoconut | ✅ |
| Business Accounting Basics | ✅ |
| mtd.digital | ✅ |
| ATT | ✅ |
| **SoleTraderGuide** | ❌ |

HMRC's own press release is the lead result. Every accountancy and finance competitor at or above STG's authority level is indexed. STG is missing from a cluster HMRC is now actively seeding.

---

## Step 6 — Priority Recommendations Summary

| Priority | Action | Owner | Deadline |
|----------|--------|-------|----------|
| 🔴 CRITICAL — TODAY | Fix SERP year tags: `(2025)` → `(2026)` in Xero and Sage reviews (6 instances, 2 files). **Day 40.** | SEO Agent | **Today** |
| 🔴 CRITICAL — TODAY | Fix `first-quarterly-update-what-sole-traders-need-to-do.mdx`: soft-landing FAQ, cumulative Q2 catch-up, future-tense removal, updatedAt refresh. Q2 deadline 22 days away. ~430k missed Q1. | QA/Reviewer Agent | **Today** |
| 🔴 CRITICAL — BY 17 OCT | Publish Q2 filing guide: *"How to Submit Your Q2 MTD Update — Deadline Saturday 7 November 2026."* Lead with Saturday date (no extension). Include cumulative Q1+Q2 catch-up; correct 7 Nov (Tide says "5 Nov" — still wrong). | Editorial | **By 17 October** |
| 🔴 CRITICAL — BY 22 OCT | Publish Phase 2 post: *"MTD for Income Tax from April 2027: Who's Affected by the £30,000 Threshold?"* HMRC press release is now live seeding search demand. 10+ competitors indexed. Budget 12 days away. | Editorial | **By 22 October** |
| 🔴 CRITICAL — BY 17 OCT | Add software freeze / FOI callouts to `best-accounting-software-uk-sole-traders-freelancers-2026.mdx` and `free-vs-paid-mtd-software.mdx`. Add API retirement angle (16 Oct) if HMRC confirms it. | QA/Reviewer Agent | **By 17 October** |
| 🔴 HIGH — BY 17 OCT | Publish software readiness post: *"HMRC Freezes New MTD Software Approvals — What It Means for Your Year-End Return."* Include API retirement angle. FOI data (29 unused). | Editorial | **By 17 October** |
| 🔴 HIGH — THIS WEEK | Pitch **ByteStart** — gap confirmed Day 3. Three pitch angles ready (Phase 2 HMRC press release, FOI software data, Q2 catch-up). | Editorial | **This week** |
| 🔴 HIGH — THIS WEEK | Pitch **Enterprise Nation** — gap confirmed. HMRC press release = pitch hook. | Editorial | **This week** |
| 🔴 HIGH — THIS WEEK | Add landlord software gap callout (44/128) to `making-tax-digital-landlords-complete-guide-uk.mdx` and `sole-trader-and-landlord-income-mtd-uk.mdx`. | QA/Reviewer Agent | **This week** |
| 🔴 HIGH — BY 27 OCT | Pitch **MoneySavingExpert** — Phase 2 + budget angle before 28 October Budget. | Editorial | **By 27 October** |
| 🟡 HIGH — THIS SPRINT | Refresh `april-2026-mtd-rollout-explained.mdx` — add Phase 2, accreditation freeze, Budget context. | QA/Reviewer Agent | **This sprint** |
| 🟡 MEDIUM — THIS SPRINT | Refresh `mtd-software-options-explained.mdx` — remove future-tense; add year-end gap, freeze, FOI, API retirement. | QA/Reviewer Agent | **This sprint** |
| 🟡 MEDIUM — THIS SPRINT | Monitor/verify HMRC legacy SA API retirement (16 Oct 2026). If confirmed on Developer Hub, add to software posts. | SEO Agent | **Today/Monitor** |
| 🟡 MEDIUM — FLAG | `income-tax-rates-sole-traders-2025-26.mdx` — title references wrong tax year; now in 2026/27. Recommend title/slug review. | SEO Agent | **Monitor/flag** |
| 🟡 MEDIUM — THIS SPRINT | Create `/da-agent` skill in `.claude/commands/da-agent.md`. Day 3 of notice. | Engineering | **This sprint** |
| 🟢 LOW | Pitch **ANNA Money** — confirmed in Q2 deadline SERP. Deadline + catch-up angle. | Editorial | After Q2 guide live |
| 🟢 LOW | Pitch **Chest** (joinchest.com) — budget angle. Week of 28 October. | Editorial | After budget |
| 🟢 LOW | Pitch **Property118**, **The Negotiator**, **Coconut** once Phase 2 post + landlord callouts live. | Editorial | After Phase 2 post live |

---

## Step 7 — Routing

### → QA/Reviewer Agent (CRITICAL — today / by 17 October)

**1. `first-quarterly-update-what-sole-traders-need-to-do.mdx` — TODAY**

Replace penalty FAQ with:
> *"For 2026/27, HMRC has confirmed a soft-landing: no penalty points will be issued for late quarterly updates. If you missed the Q1 deadline (7 August 2026), you can still submit a cumulative update covering Q1 and Q2 together by 7 November 2026 — and note the deadline falls on a Saturday, so submit by Friday 6 November to be safe. Around half of the 864,000 in-scope taxpayers may have missed Q1 — you are not alone. Penalty points apply from April 2027 (Phase 2). Phase 2 currently has no confirmed soft landing."*

Add `<InfoCallout>`:
- Soft landing (no penalty points 2026/27 for quarterly updates)
- Cumulative Q2 catch-up for missed Q1 — deadline Saturday 7 November
- Year-end Final Declaration required by 31 January 2028
- Phase 2 (April 2027) has no confirmed soft landing

Update `updatedAt` to `2026-10-16`.

**2. Software callouts — by 17 October** (unchanged from Day 2; still unactioned)

Three `<InfoCallout>`s for `best-accounting-software-uk-sole-traders-freelancers-2026.mdx` and `free-vs-paid-mtd-software.mdx` — see Step 7, 15 October report for exact wording. Add fourth once HMRC API retirement confirmed:

**InfoCallout D — API retirement (pending HMRC Developer Hub confirmation):**
> *HMRC switched off its older Self Assessment API endpoints on 16 October 2026. Software still relying on legacy API connections may throw errors when attempting to submit updates. If your software stops connecting to HMRC, check for an available software update before contacting support.*

**3. Landlord callouts — this week** (unchanged; still unactioned)

See Step 7, 15 October report for exact wording on 44/128 finding.

---

### → SEO Agent (CRITICAL — today)

**Fix SERP year tag — Day 40 (6-line change across 2 files):**
- `src/app/(public)/reviews/xero/page.tsx` lines 24, 26, 118: `(2025)` → `(2026)`
- `src/app/(public)/reviews/sage/page.tsx` lines 24, 26, 118: same

**Monitor today:**
- Verify HMRC legacy SA API retirement on [developer.service.hmrc.gov.uk](https://developer.service.hmrc.gov.uk/api-documentation/docs/api) changelog. If confirmed, flag to Editorial for Phase C callout addition.

**Flag for title review:**
- `income-tax-rates-sole-traders-2025-26.mdx` — title and slug reference 2025-26; now in 2026/27 tax year.

**New post briefs (route to Editorial):**

*Post A — Q2 filing guide (by 17 October):*
- Title: *"How to Submit Your Q2 MTD Update — Deadline Saturday 7 November 2026"*
- Lead: Saturday date, no extension; ~430k missed Q1; cumulative Q1+Q2 catch-up
- Differentiation: correct date (Tide says "5 Nov" — wrong), Saturday warning, catch-up reassurance
- Internal links: `/tools/mtd-eligibility-checker`, software chooser, Phase 1 post

*Post B — Phase 2 (by 22 October — before Autumn Budget):*
- Title: *"MTD for Income Tax from April 2027: Who's Affected by the £30,000 Threshold?"*
- Source hook: HMRC GOV.UK press release, 5 October 2026
- Key facts: 1.1 million newly affected; qualifying income = SE + property gross; PAYE/dividends excluded; 2025/26 SA return determines eligibility; no confirmed soft landing; Budget 12 days away

*Post C — Software readiness (by 17 October):*
- Title: *"HMRC Freezes New MTD Software Approvals — What It Means for Your Year-End Return"*
- Add: API retirement angle (16 October — verify first)

---

### → Editorial (human decisions required)

- **Q2 guide (CRITICAL — by 17 October):** Q2 deadline is Saturday 7 November (22 days). Saturday detail is a differentiator no competitor has highlighted. Tide's "5 November" error still live.
- **Phase 2 post (CRITICAL — by 22 October):** HMRC press release now live seeding demand. 10+ competitors indexed. Budget 12 days away. This is now the most urgent content gap.
- **Software readiness post (HIGH — by 17 October):** API retirement (16 Oct) adds a concrete date to the story — verify and include.
- **Outreach:** ByteStart this week (three ready pitch angles). Enterprise Nation this week. MoneySavingExpert by 27 October.
- **Create `/da-agent` skill:** Day 3 of notice.

---

## Δ Summary: New Since 15 October Report

1. **HMRC legacy SA API endpoints reportedly retired today (16 October 2026).** Freelance Informer reported HMRC permanently turns off older SA endpoints today. HMRC API page confirms production credential access paused (28 Sep). If confirmed on Developer Hub, this is a new content and callout angle. Adds a fourth InfoCallout type to software posts.
2. **HMRC GOV.UK press release confirmed live (5 October 2026):** "Sole traders and landlords earning more than £30,000 urged to act now." HMRC is now actively seeding Phase 2 search demand. This is the authority anchor for Phase 2 pitches to ByteStart, Enterprise Nation, and MoneySavingExpert.
3. **Q2 deadline (7 November) confirmed to fall on a Saturday — no working-day extension.** Source: gofile.co.uk. No competitor has surfaced this detail. STG's planned Q2 guide should lead with it.
4. **New Q2 SERP competitors identified: gofile.co.uk, salarytax.uk, fredmichael.co.uk.** Gofile.co.uk is a notable new entrant with a dedicated deadline calendar page. ANNA Money also confirmed in Q2 cluster. STG absent from all.
5. **ANNA Money promoted to Medium outreach target** — confirmed in Q2 deadline SERP; good pitch alignment for the Q2 guide.
6. **Autumn Budget MTD agenda item noted** in BGM September newsletter. Not a formal announcement but suggests Budget will address MTD. Budget is 12 days away.
7. **ByteStart gap confirmed for Day 3.** Three ready pitch angles assembled. Pitch without further delay.
8. **Day 40 of SERP year-tag anomaly** (Xero/Sage reviews showing `(2025)`). Still six lines of code. Still unactioned.

---

*Report generated by DA Agent (post-publish-da protocol — /da-agent skill not found) — research only, no repo files modified.*  
*Previous report: 2026-10-15 | Next scheduled run: 2026-10-17*

---

### Intelligence Sources

- [HMRC GOV.UK — Sole traders and landlords earning more than £30,000 urged to act now](https://www.gov.uk/government/news/sole-traders-and-landlords-earning-more-than-30000-urged-to-act-now)
- [GOV.UK — Making Tax Digital: reducing the mandation threshold from £30,000 to £20,000 from April 2028](https://www.gov.uk/government/publications/making-tax-digital-for-income-tax-self-assessment-reducing-the-mandation-threshold-from-30000-to-20000-from-april-2028/reduction-of-the-mandation-threshold-from-30000-to-20000-from-april-2028)
- [Freelance Informer — MTD contractor software devs must update client tools before 16 October](https://www.freelanceinformer.com/news/mtd-contractor-software-devs-must-update-client-tools-before-16-october/)
- [HMRC Developer Hub — Self Employment Business (MTD) API v5.0](https://developer.service.hmrc.gov.uk/api-documentation/docs/api/service/self-employment-business-api/5.0)
- [AccountingWeb — MTD software: Has HMRC pressed pause at the right time?](https://www.accountingweb.co.uk/tax/hmrc-policy/mtd-software-has-hmrc-pressed-pause-at-the-right-time)
- [AccountingWeb — Stalling self assessment API spells trouble for HMRC's digital future](https://www.accountingweb.co.uk/tech/tech-pulse/stalling-self-assessment-api-spells-trouble-for-hmrcs-digital-future)
- [gofile.co.uk — MTD Income Tax Deadlines & Quarterly Update Due Dates (2026/27)](https://gofile.co.uk/knowledgebase/income-tax/deadlines/)
- [ANNA Money — What are the MTD Deadlines for 2026?](https://anna.money/blog/guides/mtd-deadlines/)
- [salarytax.uk — MTD ITSA Quarterly Deadlines + Penalties 2026/27](https://salarytax.uk/guides/mtd-itsa-quarterly-deadlines-penalties-2026-27)
- [Scottish Financial News — Sole traders and landlords earning more than £30,000 urged to act now](https://www.scottishfinancialnews.com/articles/sole-traders-and-landlords-earning-more-than-ps30000-urged-to-act-no)
- [FiguresUK — MTD April 2027 £30k threshold](https://www.figuresuk.co.uk/mtd-april-2027-30k-threshold/)
- [Lanop — Making Tax Digital 2026 business guide](https://lanop.co.uk/news/making-tax-digital-2026-business-guide/)
- [Coconut/GetCoconut — The MTD timeline: every key date and phase](https://www.getcoconut.com/knowledge-hub/mtd-timeline-every-key-date-and-phase)
- [mtd.digital — Preparing for Phase 2: MTD for 30K+ Income](https://mtd.digital/mtd-income-tax/mtd-phase-2-preparation/)
- [BGM Accountants — BGM NewsUpdate 4 September 2026](https://www.bgm.co.uk/uploads/files/Newsletters/BGM_NewsUpdate_4Sep2026.pdf)
- [sparkreceipt.com — MTD quarterly update checklist](https://sparkreceipt.com/en-gb/blog/mtd-quarterly-update-checklist/)
- [IAB blog — MTD IT Timeline 2026–2028: core dates to note](https://www.iab.org.uk/blog/mtd-it-timeline-2026-2028-core-dates-to-note/)
- [tinytax.co.uk — Who is Affected by Making Tax Digital for Income Tax?](https://tinytax.co.uk/guides/who-is-affected-by-mtd-itsa)
