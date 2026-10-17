# SoleTraderGuide.co.uk — Daily DA Report
**Date:** 17 October 2026  
**Agent:** DA Agent (Scheduled Run)  
**Status:** Research + Recommendations Only — No repo files modified  
**Previous report:** 2026-10-16 | **Δ changes since yesterday noted inline**

---

## Site Phase Snapshot

| Metric | Status |
|--------|--------|
| Estimated DA phase | Phase 1 — early authority build (estimated DA 0–15) |
| External backlinks detected | None new identified |
| Brand mentions detected | None new |
| **Q2 deadline** | **7 November 2026 — 21 days away** (was 22 yesterday) — **falls on a Saturday; no extension** |
| Q3 period | 6 October 2026 – 5 January 2027 (Q3 deadline: 7 February 2027) |
| Posts total | 48 blog posts |
| Days since last new post | **165 days** |
| Stale posts >12 months (unactioned) | **4** (unchanged) |
| SERP title anomaly | `(2025)` live on Xero and Sage reviews — **Day 41 unaddressed** |
| Software production access | HMRC production credential freeze (confirmed 28 Sep) — still live |
| Legacy SA API retirement | **Unconfirmed on HMRC Developer Hub** — Freelance Informer date was 16 Oct; verify status |
| Autumn Budget 2026 | **28 October 2026 — 11 days away** — MTD update on agenda (BGM newsletter) |
| Phase 2 content gap | HMRC press release live since 5 Oct 2026 — STG still has no Phase 2 post |
| Salesforce/HMRC deal | **NEW — announced 15 October 2026** — £2bn CRM contract; content angle available |
| HMRC auto sign-up | **CONFIRMED** — HMRC started auto-enrolling Phase 1 taxpayers from September 2026 |

---

## Note — /da-agent Skill Not Found

The scheduled prompt references `/da-agent` — this command does not exist in `.claude/commands/`. **Day 4 of notice.** This run was completed using research plus reference to the `post-publish-da` protocol and prior report format. The `/da-agent` skill must be created to formalise the daily workflow.

---

## Step 1 — HMRC & MTD News: Digital PR Opportunities

### 1a. 🔴 NEW TODAY — HMRC Auto-Enrolment Confirmed for Phase 1 (September 2026 Onwards)

**Confirmed via GOV.UK:** From September 2026, HMRC began automatically signing up taxpayers whose records show qualifying income over £50,000 in the 2024/25 tax year and who had not yet self-enrolled. These taxpayers are now in MTD for ITSA for the 2026/27 tax year whether or not they chose to join.

**Additional data point:** Approximately 436,000 sole traders and landlords have already submitted their first Q1 quarterly update, according to HMRC press material carried in the Yorkshire Post.

**What this means:**
- A large cohort is enrolled but may not understand their Q2 obligations — the 7 November deadline is live for them
- Search intent is shifting from "do I need to sign up?" to "I've been signed up — what do I do now?" — STG has limited content addressing this enrolled-but-confused searcher
- The auto-enrolment confirmation is a strong news hook for Q2 filing content

**Content/PR angle — HIGH:** A Q2 guide that opens with "If HMRC automatically signed you up, here's what happens next" addresses the exact searcher state. Also a clean pitch hook for ByteStart and Enterprise Nation.

---

### 1b. 🔴 NEW TODAY — Salesforce/HMRC £2bn CRM Deal (15 October 2026)

**Announced:** Salesforce selected as HMRC's enterprise CRM provider on a 15-year, up to £2bn contract. Goal: unify legacy systems, 90% digital service delivery by 2030, AI-assisted case-handling for HMRC staff.

**Sources:** Salesforce press release (15 Oct 2026), Unite.AI procurement report, CX Today (10-year base with 5-year extension).

**Why this matters for STG:**
- This is not a direct MTD story, but it signals HMRC's accelerating digital infrastructure push — context that supports STG's core thesis that HMRC's digitisation is permanent and irreversible
- The story is being reported in tech and finance press; it is unlikely to generate direct search traffic for sole traders but it is a credible link-pitch hook to AccountingWEB, PublicTechnology, and CX Today readers
- A short explainer paragraph — *"HMRC has also just awarded a £2bn CRM contract to Salesforce, its latest step in moving all taxpayer services online"* — adds timeliness and third-party authority to Phase 2 and software-readiness posts

**Angle:** Low for standalone content. Medium as a supporting paragraph in Phase 2 post or software readiness post. Do not lead with it; use as context.

---

### 1c. 🔴 STANDING CRITICAL — Phase 2 Content Gap: Budget Now 11 Days Away

**Status: escalating.** Budget is 11 days away. HMRC's October 2026 press release has been seeding search demand for 12 days. STG still has zero Phase 2 content.

Confirmed competitors with Phase 2 content (unchanged from 16 Oct, carried forward):
- GOV.UK press release (lead result)
- Which? (2 pieces, DA 70+), BusinessAccountingBasics.co.uk, Coconut/GetCoconut
- Lanop.co.uk, FiguresUK, mtd.digital, accountaxzone.com
- Tide.co.uk, GoCardless, BeanCount.io (July/August 2026 fresh guides)
- ATT, ICAEW, Scottish Financial News

**STG: zero Phase 2 content — Day 12 of gap identified.**

---

### 1d. 🟡 MONITORING — Legacy SA API Retirement Status (16 October Date)

Yesterday's report flagged Freelance Informer's claim that HMRC turned off older SA API endpoints on 16 October 2026. This has not been confirmed on the HMRC Developer Hub changelog.

**Status today:** Unverified. Two possibilities:
1. The retirement proceeded and HMRC has not yet updated the Developer Hub  
2. The date was wrong or the shutdown was deferred

**Action required:** Verify at developer.service.hmrc.gov.uk before publishing any content referencing this date. If confirmed, the InfoCallout D wording from yesterday's report should be added to software posts immediately. If unconfirmed by 24 October, treat as deferred and remove from the standing action list.

---

### 1e. 🟡 UNCHANGED — Software Readiness Crisis

No new findings beyond yesterday. Standing figures:
- 165 HMRC-approved MTD products
- ~29 products never submitted a real Q1 update (FOI data)
- ~44 of 128 landlord-compatible products lack full tools
- Production credential access freeze (28 Sep 2026) still in effect
- ~1-in-3 approved products cannot yet file the Final Declaration (year-end)

---

### 1f. 🟡 UNCHANGED — Soft Landing Confirmed for Phase 1; Phase 2 Has None

HMRC confirmed no penalty points for late quarterly updates during 2026/27 (Phase 1, first year). Phase 2 (from April 2027) has **no confirmed soft landing**.

---

## Step 2 — Brand Mentions and Backlinks

**No new editorial backlinks or brand mentions detected.**

STG absent from Q2 deadline cluster (ANNA Money, gofile.co.uk, salarytax.uk, sparkreceipt.com all confirmed present). STG absent from Phase 2 cluster. STG absent from "making tax digital sole trader UK" primary query.

### 🔴 STANDING — SERP "(2025)" Year Tag (Day 41)

No change. Day 41. Six-line fix across two files:
- `src/app/(public)/reviews/xero/page.tsx` lines 24, 26, 118
- `src/app/(public)/reviews/sage/page.tsx` lines 24, 26, 118

Every competitor review page shows `(2026)`. STG shows `(2025)`. No other competitor surfaces this error.

---

## Step 3 — Content Freshness Audit (>12 Months)

Four stale posts — unchanged. No new posts have crossed the 12-month threshold.

| Priority | File | `updatedAt` | Age | Core issue |
|----------|------|-------------|-----|-----------|
| 🔴 CRITICAL | `free-vs-paid-mtd-software.mdx` | 2025-01-10 | **21 months** | Future-tense throughout; missing freeze, FOI data, auto-enrolment angle, API retirement |
| 🔴 CRITICAL | `first-quarterly-update-what-sole-traders-need-to-do.mdx` | 2025-02-15 | **20 months** | Future-tense Q1; wrong penalty FAQ; no catch-up guidance; ~436k already filed Q1, ~430k may have missed it |
| 🟡 HIGH | `mtd-software-options-explained.mdx` | 2025-01-28 | **21 months** | Future-tense; missing 2026 landscape, freeze, API retirement, FOI data |
| 🟡 HIGH | `april-2026-mtd-rollout-explained.mdx` | 2025-03-01 | **19+ months** | April 2026 framed as future; no Phase 2; no auto-enrolment; no soft landing |

**Standing flag (not stale by date, misleading by title):**  
`income-tax-rates-sole-traders-2025-26.mdx` — title and FAQs reference "2025-26" tax year; now in 2026/27.

---

## Step 4 — Link Acquisition Opportunity Research

**Target researched today:** Enterprise Nation — gap confirmed, pitch angle sharpened

### Enterprise Nation — 🔴 HIGH

**Why today:** Auto-enrolment confirmation (Step 1a) gives a fresh news hook beyond the HMRC press release. Enterprise Nation covers SME owner/operator decisions, not technicalities. The "HMRC signed me up automatically — what do I do?" angle is a better fit for their readership than a raw HMRC compliance explainer.

**Pitch package:**
1. **Auto-enrolment hook:** *"HMRC started auto-enrolling sole traders in Making Tax Digital from September 2026. 436,000 have already filed a quarterly update. Those who haven't — and those who were enrolled without realising — now face the Q2 deadline on Saturday 7 November. Here's what to do."*
2. **Phase 2 hook (HMRC press release):** *"1.1 million more sole traders face MTD from April 2027. HMRC just told them to act now. We've published the UK's most specific £30k threshold guide — with a calculator, edge-case examples, and the qualifying income rules HMRC buries in its own guidance."*
3. **Salesforce/HMRC context paragraph** (supporting only): adds currency and credibility.

**Status:** Pitch immediately. Gap confirmed.

---

### Carry-Over Targets (Status)

| Target | Priority | Status |
|--------|----------|--------|
| ByteStart | 🔴 HIGH | Gap confirmed **Day 4**. Pitch without further delay. |
| Enterprise Nation | 🔴 HIGH | Pitch angle sharpened today. Pitch immediately. |
| MoneySavingExpert | 🔴 HIGH | Phase 2 + Budget angle. Pitch by 27 October. |
| startups.co.uk | 🟡 HIGH | Phase 2 post hook when live. |
| Property118 | 🟡 HIGH | 44/128 landlord gap + Phase 2 landlord angle. |
| The Negotiator | 🟡 HIGH | Same landlord angle. |
| PropertyMark | 🟡 HIGH | Landlord MTD guide + Phase 2 pitch. |
| ANNA Money | 🟡 MEDIUM | Q2 deadline + catch-up angle post Q2 guide. |
| Chest (joinchest.com) | 🟡 MEDIUM | Budget angle — week of 28 October. |
| Coconut (GetCoconut) | 🟡 MEDIUM | Phase 2 + landlord angles when posts live. |
| GoCardless | 🟢 LOW | Evergreen eligibility checker pitch. |

---

## Step 5 — Competitor SERP Check

**Query checked today:** "making tax digital sole trader UK 2026"

| Competitor | Present | Notes |
|-----------|---------|-------|
| GOV.UK | ✅ | MTD collection page — lead result |
| BusinessAccountingBasics.co.uk | ✅ | "Making Tax Digital for Sole Traders: Complete Guide for 2026 and Beyond" — comprehensive, DA ~30 |
| Crunch.co.uk | ✅ | MTD hub + commercial software pages, DA ~50 |
| Tide.co.uk | ✅ | MTD guide, DA ~55 |
| GoCardless | ✅ | MTD ITSA 2026 guide, DA ~60 |
| BeanCount.io | ✅ | Two fresh guides (Jul/Aug 2026) — low DA but very recent |
| Accotax.co.uk | ✅ | Step-by-step 2026 guide |
| GetCoconut | ✅ | Knowledge hub piece, DA ~30 |
| **SoleTraderGuide** | ❌ | **Absent from primary query** |

**Competitive gap vs BusinessAccountingBasics.co.uk (closest direct competitor):**
- Their guide covers 2026 and beyond, includes Phase 2 reference
- No MTD eligibility tool / calculator — STG has `/tools/mtd-eligibility-checker` (advantage)
- No quarterly deadline calendar with Saturday-7-Nov warning
- No FOI/software-readiness data angle

STG's differentiation — tool, specificity, FOI data — is real but invisible while the site is absent from SERPs. Content gap (no Phase 2 post, stale Q1 post) is the primary blocker.

**Phase 2 SERP also confirmed (carried from 16 Oct):** 10+ competitors indexed; STG absent.

---

## Step 6 — Priority Recommendations Summary

| Priority | Action | Owner | Deadline |
|----------|--------|-------|----------|
| 🔴 CRITICAL — TODAY | Fix SERP year tags: `(2025)` → `(2026)` in Xero and Sage reviews (6 instances, 2 files). **Day 41.** | SEO Agent | **Today** |
| 🔴 CRITICAL — TODAY | Fix `first-quarterly-update-what-sole-traders-need-to-do.mdx`: remove future-tense, soft-landing FAQ, Q2 catch-up route for missed Q1, auto-enrolment context. Q2 is 21 days away. | QA/Reviewer Agent | **Today** |
| 🔴 CRITICAL — TODAY | Publish Q2 filing guide: *"How to Submit Your Q2 MTD Update — Deadline Saturday 7 November 2026"*. Lead with Saturday date + auto-enrolled angle + cumulative catch-up. | Editorial | **Today** |
| 🔴 CRITICAL — BY 22 OCT | Publish Phase 2 post: *"MTD for Income Tax from April 2027: Who's Affected by the £30,000 Threshold?"* — Budget is 11 days away. Use HMRC press release as anchor. | Editorial | **By 22 October** |
| 🔴 HIGH — TODAY | Verify HMRC legacy SA API retirement on Developer Hub. If confirmed: add InfoCallout D to `free-vs-paid-mtd-software.mdx` and `best-accounting-software-uk-sole-traders-freelancers-2026.mdx`. If not confirmed by 24 Oct: remove from standing list. | SEO Agent | **Today** |
| 🔴 HIGH — TODAY | Add software freeze / FOI callouts to `best-accounting-software-uk-sole-traders-freelancers-2026.mdx` and `free-vs-paid-mtd-software.mdx`. Wording unchanged from 15 Oct report. Day 2. | QA/Reviewer Agent | **Today** |
| 🔴 HIGH — THIS WEEK | Pitch **ByteStart** — Day 4. Three pitch angles ready. Pitch today. | Editorial | **Today** |
| 🔴 HIGH — THIS WEEK | Pitch **Enterprise Nation** — auto-enrolment hook + Phase 2 hook. Sharpened today. | Editorial | **This week** |
| 🟡 HIGH — BY 17 OCT | Publish software readiness post: *"HMRC Freezes New MTD Software Approvals — What It Means for Your Year-End Return"* — add API retirement angle if confirmed. (Deadline was yesterday — escalate.) | Editorial | **OVERDUE** |
| 🟡 HIGH — THIS SPRINT | Add landlord software gap callout (44/128) to `making-tax-digital-landlords-complete-guide-uk.mdx` and `sole-trader-and-landlord-income-mtd-uk.mdx`. | QA/Reviewer Agent | **This sprint** |
| 🟡 HIGH — THIS SPRINT | Refresh `april-2026-mtd-rollout-explained.mdx` — add Phase 2, auto-enrolment, soft landing, Budget context. | QA/Reviewer Agent | **This sprint** |
| 🟡 MEDIUM — THIS SPRINT | Refresh `mtd-software-options-explained.mdx` — remove future-tense; add 2026 landscape, freeze, FOI, API retirement. | QA/Reviewer Agent | **This sprint** |
| 🟡 MEDIUM — FLAG | `income-tax-rates-sole-traders-2025-26.mdx` — title references wrong tax year (2025-26 vs 2026-27). | SEO Agent | **Review this sprint** |
| 🟡 MEDIUM — THIS SPRINT | Add Salesforce/HMRC context sentence to Phase 2 post and software readiness post (supporting, not lead). | Editorial | **With those posts** |
| 🟡 MEDIUM — THIS SPRINT | Create `/da-agent` skill in `.claude/commands/da-agent.md`. **Day 4 of notice.** | Engineering | **This sprint** |
| 🔴 HIGH — BY 27 OCT | Pitch **MoneySavingExpert** — Phase 2 + Budget angle before 28 October Budget. | Editorial | **By 27 October** |
| 🟢 LOW | Pitch **Property118**, **The Negotiator** once Phase 2 post + landlord callouts live. | Editorial | **After Phase 2 live** |
| 🟢 LOW | Pitch **ANNA Money**, **GoCardless** after Q2 guide live. | Editorial | **After Q2 guide live** |

---

## Step 7 — Routing

### → QA/Reviewer Agent (CRITICAL — today)

**1. `first-quarterly-update-what-sole-traders-need-to-do.mdx` — TODAY**

Replace the penalty FAQ with (updated for auto-enrolment context):
> *"For 2026/27, HMRC has confirmed a soft-landing: no penalty points will be issued for late quarterly updates. If HMRC automatically signed you up from September 2026, or if you missed the Q1 deadline (7 August 2026), you can still submit a cumulative update covering both Q1 and Q2 by the Q2 deadline — Saturday 7 November 2026. Note: HMRC has not granted a working-day extension; do not leave it until Monday 9 November. Approximately 430,000 in-scope taxpayers may have missed Q1 — you are not alone. Phase 2 (April 2027) has no confirmed soft landing."*

Add `<InfoCallout>`:
- No penalty points for late quarterly updates in 2026/27 (Phase 1 soft landing)
- Auto-enrolled? HMRC signs up qualifying taxpayers automatically from September 2026
- Missed Q1? Submit cumulative Q1+Q2 update by Saturday 7 November — no Monday extension
- Phase 2 (April 2027) has no confirmed soft landing

Update `updatedAt` to `2026-10-17`.

**2. Software callouts (unchanged — still unactioned from 15 Oct)**

Add InfoCallouts A, B, C to `best-accounting-software-uk-sole-traders-freelancers-2026.mdx` and `free-vs-paid-mtd-software.mdx` per 15 Oct wording. Add InfoCallout D (API retirement) once confirmed by SEO Agent.

**3. Landlord callouts (unchanged — still unactioned from earlier reports)**

Add 44/128 finding to `making-tax-digital-landlords-complete-guide-uk.mdx` and `sole-trader-and-landlord-income-mtd-uk.mdx`.

---

### → SEO Agent (CRITICAL — today)

**Fix SERP year tag — Day 41 (6-line change across 2 files):**
- `src/app/(public)/reviews/xero/page.tsx` lines 24, 26, 118: `(2025)` → `(2026)`
- `src/app/(public)/reviews/sage/page.tsx` lines 24, 26, 118: same

**Verify today:**
- HMRC legacy SA API retirement on [developer.service.hmrc.gov.uk](https://developer.service.hmrc.gov.uk/api-documentation/docs/api) changelog. Report result back to Editorial and QA. If confirmed: route InfoCallout D. If unconfirmed by 24 Oct: remove from standing list.

**New post brief — Q2 filing guide (TODAY):**
- Title: *"How to Submit Your Q2 MTD Update — Deadline Saturday 7 November 2026"*
- Lead angles: Saturday date (no extension), auto-enrolled taxpayers, ~430k missed Q1 cumulative catch-up
- Differentiation: Tide says "5 Nov" (wrong); no competitor has surfaced the Saturday detail or auto-enrolment context
- Internal links: `/tools/mtd-eligibility-checker`, software chooser, `first-quarterly-update-what-sole-traders-need-to-do.mdx`

**Phase 2 post brief (by 22 October):**
- Title: *"MTD for Income Tax from April 2027: Who's Affected by the £30,000 Threshold?"*
- Anchor: HMRC GOV.UK press release (5 October 2026)
- Key facts: 1.1 million newly affected; qualifying income = SE + property gross; PAYE/dividends/savings excluded; 2025/26 SA return determines Phase 2 eligibility; no confirmed soft landing; Salesforce/HMRC deal as one supporting sentence; Budget 11 days away
- Internal links: `/tools/mtd-eligibility-checker`, Phase 1 post, landlords guide

---

### → Editorial (human decisions required)

**Immediate (today):**
1. **Publish Q2 guide** — 21 days to deadline. Saturday 7 November warning is the unique angle. Auto-enrolment hook broadens reach.
2. **Pitch ByteStart today** — Day 4 of ready pitch angles. No further prep needed.
3. **Software readiness post** — was due yesterday. Escalate or deprioritise in favour of Q2 guide; do not let both slip.

**This week:**
4. **Publish Phase 2 post by 22 October** — Budget is 11 days away. STG needs Phase 2 content indexed before the Budget can make it newsworthy.
5. **Pitch Enterprise Nation** — auto-enrolment hook + Phase 2 hook.

**By 27 October:**
6. **Pitch MoneySavingExpert** — Phase 2 + Budget package.

**Engineering:**
7. **Create `/da-agent` skill** — Day 4 of notice. The absence forces this workaround on every scheduled run.

---

## Δ Summary: New Since 16 October Report

1. **HMRC auto-enrolment confirmed for Phase 1 (September 2026 onwards).** Taxpayers with qualifying income >£50,000 in 2024/25 who had not self-enrolled are being signed up automatically. ~436,000 have already filed a Q1 update. Content should now address the "enrolled automatically — what next?" searcher state. Sharpens Q2 guide and Enterprise Nation pitch.
2. **Salesforce/HMRC £2bn, 15-year CRM deal confirmed (15 Oct 2026).** Not a direct MTD story but useful context for Phase 2 post and software readiness post. Do not lead with it; use as a supporting sentence.
3. **Q2 deadline now 21 days away** (was 22 yesterday). The Saturday warning and cumulative catch-up for missed Q1 are the two details no competitor has surfaced.
4. **Enterprise Nation pitch angle sharpened** using auto-enrolment hook. Added to immediate action list.
5. **Software readiness post is now overdue** (deadline was 17 October). Decision needed: publish today or deprioritise in favour of Q2 guide.
6. **ByteStart now Day 4 — no further delay.** Three pitch angles assembled and ready.
7. **Phase 2 gap now Day 12.** Budget is 11 days away. Every day STG lacks Phase 2 content is a day competitors receive that search traffic.
8. **SERP year-tag anomaly now Day 41.** Six lines of code. Escalate.
9. **HMRC legacy SA API retirement still unconfirmed on Developer Hub.** Do not publish or add content referencing 16 October date until confirmed.

---

*Report generated by DA Agent (post-publish-da protocol — /da-agent skill not found, Day 4) — research only, no repo files modified.*  
*Previous report: 2026-10-16 | Next scheduled run: 2026-10-18*

---

### Intelligence Sources

- [HMRC — Making Tax Digital for Income Tax collection (GOV.UK)](https://www.gov.uk/government/collections/making-tax-digital-for-income-tax)
- [HMRC GOV.UK press release — Sole traders and landlords earning more than £30,000 urged to act now (5 Oct 2026)](https://www.gov.uk/government/news/sole-traders-and-landlords-earning-more-than-30000-urged-to-act-now)
- [Yorkshire Post — HMRC: More than 436,000 sole traders and landlords go digital with their tax](https://www.yorkshirepost.co.uk/business/hmrc-more-than-436000-sole-traders-and-landlords-go-digital-with-their-tax-8920390)
- [Salesforce — Salesforce Selected by HMRC to Modernise Tax Services (15 Oct 2026)](https://www.salesforce.com/uk/news/press-releases/2026/10/15/salesforce-selected-by-hmrc-to-modernise-tax-services-for-uk-citizens-and-businesses/)
- [CX Today — HMRC Selects Salesforce for £2bn CRM Program](https://cxtoday.com/hmrc-selects-salesforce-for-2bn-crm-program-as-overhaul-takes-shape)
- [PublicTechnology — HMRC reveals £770m service modernisation investment in FY26](https://www.publictechnology.net/2026/07/15/economics-and-finance/hmrc-reveals-770m-service-modernisation-investment-in-fy26/)
- [Meacher-Jones — Monthly business news October 2026](https://meacher-jones.com/monthly-business-news-october-2026/)
- [BusinessAccountingBasics.co.uk — Making Tax Digital for Sole Traders: Complete Guide for 2026 and Beyond](https://www.businessaccountingbasics.co.uk/mtd-sole-traders/)
- [Crunch — Making Tax Digital hub](https://crunch.co.uk/making-tax-digital-mtd)
- [Tide — Making Tax Digital for sole traders guide](https://www.tide.co/blog/tax/making-tax-digital-sole-traders-guide/)
- [GoCardless — MTD ITSA sole traders and landlords 2026 guide](https://gocardless.com/blog/mtd-itsa-sole-traders-landlords-2026-guide/)
- [BeanCount.io — UK Making Tax Digital Income Tax guide (Jul 2026)](https://beancount.io/blog/2026/07/13/uk-making-tax-digital-income-tax-sole-traders-landlords-guide)
- [Accotax — Making Tax Digital for Sole Traders in 2026: Step-by-Step Guide](https://accotax.co.uk/making-tax-digital-for-sole-traders/)
- [goSimpleTax — Making Tax Digital for Income Tax glossary](https://www.gosimpletax.com/glossary/making-tax-digital-income-tax/)
- [ACCA — Urgent HMRC call to sign up MTD for ITSA clients (March 2026)](https://www.accaglobal.com/uk/en/technical-activities/uk-tech/in-practice-ezine-archive/In-Practice-archive-2026/March/Urgent-HMRC-call-to-sign-up-MTD-for-ITSA-clients.html)
- [Wikipedia — Making Tax Digital](https://en.wikipedia.org/wiki/Making_Tax_Digital)
- [House of Commons Library — Making Tax Digital: Developments since 2020](https://commonslibrary.parliament.uk/research-briefings/cbp-10573/)
