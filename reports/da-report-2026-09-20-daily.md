# SoleTraderGuide.co.uk — Daily DA Report
**Date:** 20 September 2026  
**Agent:** DA Agent (Scheduled Run)  
**Status:** Research + Recommendations Only — No repo files modified

---

## Site Phase Snapshot

| Metric | Status |
|--------|--------|
| Estimated DA phase | Phase 1 — early authority build (estimated DA 0–15) |
| External backlinks detected | None identified via web search |
| Brand mentions detected | None confirmed |
| Q1 MTD deadline | PASSED — 44 days ago (7 August 2026) |
| Q2 deadline | **7 November 2026 — 48 days away** |
| Q2 period | 6 July – 5 October 2026 (cumulative from 6 April) |
| HMRC sign-up service | ONLINE |
| HMRC auto-enrolment | **ACTIVE — Day 20 since reactive post flagged; STG absent from consumer SERP** |
| Maintenance window | **26–28 September — 6 days away; urgency hook expires 28 Sept** |
| Phase 2 (£30k threshold) | April 2027 — 6.5 months away |
| Posts total | 48 blog posts |
| Days since last new post | **138 days** (last post: 5 May 2026) |
| Stale posts (>12 months) | **4 — Day 90 unactioned** |
| Reactive auto-enrolment post | **NOT PUBLISHED — Day 20** |
| SERP title anomaly | **"(2025)" confirmed live on /reviews/xero AND /reviews/sage — Day 14 unaddressed** |

---

## Step 1 — HMRC & MTD News: Digital PR Opportunities

### 1a. 🔴 ESCALATING — Consumer Auto-Enrolment SERP: IAB and Kennedys Accounting Enter

Two further new entries detected today:

**IAB (Institute of Accountancy Bookkeepers)** published *"HMRC Starts Signing Up MTD No-shows: What Bookkeepers And Accountants Should Do Now."* The IAB is a recognised professional body and their content carries significant trust signals. This entry targets the practitioner-facing query cluster but its presence will suppress the entire SERP section for consumer queries through authority association.

**Kennedys Accounting** published *"HMRC to Automatically Sign-Up Taxpayers for Making Tax Digital: What You Need to Know."* This is a further practitioner blog entry in the consumer space.

**3eCPA** has also published *"HMRC Automatic Sign-Up for Making Tax Digital for Income Tax"* — a third new entry this run.

**Confirmed auto-enrolment SERP as of today (20 Sept 2026):**

| Publisher | Title | Type | DA Profile |
|-----------|-------|------|-----------|
| FreeAgent | "Why has HMRC written to me about MTD for Income Tax?" | Vendor guide | Very high DA |
| IAB | "HMRC Starts Signing Up MTD No-shows: What Bookkeepers And Accountants Should Do Now" | Professional body | Very high DA (NEW) |
| CMA Accountancy | "HMRC is signing people up to MTD this month — what to do before 7 November" | Consumer guide | Medium DA |
| SMEAutomate | "HMRC Making Tax Digital Auto-Enrolment: What UK Sole Traders and Landlords Must Do" | Consumer guide | Low-medium DA |
| Accrue Accounting | "HMRC MTD Sign-Up 2026: What Sole Traders and Landlords Need to Do Next" | Practice blog | Low-medium DA |
| Bloom Financials | "HMRC automatic MTD sign-up: what taxpayers must do now" | Practice blog | Low DA |
| Kennedys Accounting | "HMRC to Automatically Sign-Up Taxpayers for Making Tax Digital: What You Need to Know" | Practice blog | Low DA (NEW) |
| 3eCPA | "HMRC Automatic Sign-Up for Making Tax Digital for Income Tax" | Practice blog | Low DA (NEW) |
| AJN Accountants | "Automatic MTD registration" | Practice advisory | Low DA |
| GOV.UK | "436,000 sole traders and landlords make their tax digital" | Primary source | Maximum DA |
| **SoleTraderGuide** | **(absent)** | — | — |

**Assessment:** The SERP now contains a professional body entry (IAB) alongside a high-DA vendor (FreeAgent). The consumer neutral position — the one STG can own — remains entirely vacant. With the maintenance window 6 days away, this is the last call. Publishing before 26 September retains the maintenance hook; publishing after 28 September loses it permanently and relies solely on the 7 November Q2 deadline hook (48 days).

### 1b. 🔴 URGENT — Maintenance Window: 6 Days Remaining

HMRC's MTD sign-up service will be unavailable from **19:00 Saturday 26 September to 09:00 Monday 28 September 2026.** This is confirmed via HMRC service availability notices and SPA. Any reactive post published before Friday 25 September can legitimately frame the maintenance window as a call to action: "HMRC's sign-up service goes offline Friday evening — register before then."

A post published on or after 28 September loses the maintenance hook entirely and must rely on the Q2 deadline alone.

### 1c. 🟡 MEDIUM — Q2 Traffic Wave: Varro and PocketReceipt Enter

New Q2-focused content indexed today:
- **Varro Tax** (varro-tax.co.uk) — *"MTD ITSA quarterly updates: dates, data and penalties (2026)"* — comprehensive practitioner guide covering deadlines and soft-landing rules
- **PocketReceipt** — *"MTD ITSA Quarterly Checklist (2026/27): Every Step + Every Deadline"* — consumer-facing checklist format

**Fact check on Q2 period:** Q2 covers **6 July to 5 October 2026**; the deadline is 7 November 2026. MTD updates are cumulative year-to-date from 6 April — the Q2 submission covers income/expenses from 6 April to 5 October, not just the July–October segment. Soft-landing: no quarterly penalty points for 2026/27; EOPS and Final Declaration penalties are live.

---

## Step 2 — Brand Mentions and Backlinks

**No new editorial backlinks to `soletraderguide.co.uk` detected.** Web search returns only STG's own pages and the public GitHub repository. No new unlinked brand mentions identified.

### 🔴 CONFIRMED — SERP "(2025)" Year Tag Anomaly: Day 14

The `(2025)` title is still live on STG's Xero review page (`src/app/(public)/reviews/xero/page.tsx`, lines 24 and 118). The Sage review page has the same issue. Verified by direct file inspection today:

- Line 24: `title: 'Xero Review: MTD Software for Sole Traders (2025)'`
- Line 118: `Xero Review: MTD Software for Sole Traders (2025)`

Five competitors in the Xero SERP now show 2026. STG is the only independent review at 2025. This is a four-edit fix across two files. It has now been unactioned for two full weeks.

---

## Step 3 — Content Freshness Audit

All four stale posts remain unchanged. Day 90. The penalty language in `first-quarterly-update-what-sole-traders-need-to-do.mdx` was verified by direct file inspection today — the FAQ at the frontmatter `faqs` array (published position) reads:

> *"Under MTD's penalty points system, each late quarterly submission earns one penalty point."*

This is factually incorrect. No quarterly penalty points apply in 2026/27. The soft-landing is confirmed by HMRC and all major software providers. This post is indexed and ranking; users arriving for Q2 preparation are receiving actively wrong information.

| Priority | File | updatedAt | Issue | Status |
|----------|------|-----------|-------|--------|
| 🔴 CRITICAL | `first-quarterly-update-what-sole-traders-need-to-do.mdx` | 2025-02-15 | FAQ asserts quarterly penalty points apply — confirmed false under 2026/27 soft-landing. Verified by direct file read today. Post body also uses future-tense framing for Q1, which has passed 44 days ago. | **Day 90 — confirmed unactioned** |
| 🔴 CRITICAL | `free-vs-paid-mtd-software.mdx` | 2025-01-10 | 20 months stale. No soft-landing distinction. Software landscape changed. Q2 traffic incoming. | **Day 90 — unactioned** |
| 🟡 HIGH | `april-2026-mtd-rollout-explained.mdx` | 2025-03-01 | April 2026 is 5.5 months past. Body describes it as a future event. Actively misleading. | Unactioned |
| 🟡 HIGH | `mtd-software-options-explained.mdx` | 2025-01-28 | 19 months stale. Future-tense framing. | Unactioned |

**Pre-Q2 critical check — `mtd-penalties-late-quarterly-updates-uk.mdx` (updatedAt: 2026-04-17):**

Not directly verified today but flagged from previous sessions. Q2 traffic wave beginning ~7 October (17 days). The quarterly/EOPS penalty distinction must be explicit and prominent in this post before that date.

---

## Step 4 — Link Acquisition Opportunity Research (Checklist 7)

**Opportunity researched today:** The Independent Landlord + HouseCheckup (landlord link cluster)

### Target A — The Independent Landlord: "Guide: Making Tax Digital (MTD) for Landlords"

- **URL:** `theindependentlandlord.com/mtd-landlords/`
- **Type:** Established editorial site for UK private landlords; high trust with landlord audience; non-commercial, non-vendor
- **Authority profile:** Well-regarded independent landlord resource. Ranks for landlord finance and compliance queries. Links out to authoritative external resources.
- **Gap analysis:** The guide covers MTD eligibility and quarterly obligations but does not include an interactive eligibility checker for landlords who hold both self-employment and property income. STG's `/tools/mtd-eligibility-checker` solves exactly this — it handles the combined qualifying income calculation that confuses landlords with multiple income streams.
- **Pitch angle:** "We built a free MTD eligibility checker that handles the combined qualifying income question — rental plus self-employment income — that many landlords find confusing. It may be a useful 'check your situation' link for readers unsure whether they need to comply."
- **Outreach timing:** Non-time-sensitive; article is established. Open outreach window.
- **Effort:** Low. One email. Content fit is high — their guide explicitly raises the qualifying income question without providing a calculation tool.
- **Risk:** None. No commercial overlap. Non-vendor.

### Target B — HouseCheckup: "Buy-to-Let Tax Guide 2026: Income Tax, CGT & Expenses"

- **URL:** `housecheckup.co.uk/blog/buy-to-let-tax-guide-2026`
- **Type:** Property-focused editorial site; buy-to-let landlord audience
- **Gap:** Covers MTD requirements but links only to HMRC guidance — no independent editorial MTD explanation. STG's `making-tax-digital-landlords-complete-guide-uk.mdx` directly fills this gap as a plain-English comprehensive guide.
- **Pitch angle:** "We have a plain-English landlord MTD guide that might be a more accessible complement to the HMRC guidance for your readers — it covers compliance steps, compatible software, and the combined qualifying income calculation."
- **Effort:** Low. Non-time-sensitive. Both B2C landlord audiences overlap.
- **Risk:** None.

### Carry-Over Targets

| Target | Status | Action |
|--------|--------|--------|
| Rhodium Accounting — MTD software guide | Open window | Pitch `/tools/mtd-software-chooser` as "next step" tool |
| AJN Accountants — "Automatic MTD registration" | Window closing TODAY (~3 days from first note) | Pitch reactive post once published |
| CMA Accountancy — "before 7 November" | Window open ~4 days post-identification | Pitch reactive post once published |
| GoFile.co.uk MTD Deadlines page | Non-time-sensitive | After penalties post corrected |
| MTD.digital Phase 2 page | Pending Phase 2 post | No action until Phase 2 post published |

---

## Step 5 — Competitor SERP Positioning Check

**Query 1: "HMRC MTD letter what to do sole trader 2026" / consumer auto-enrolment cluster**

| Competitor | Present | Notes |
|-----------|---------|-------|
| FreeAgent | ✅ | Vendor guide — highest DA in this SERP |
| IAB | ✅ NEW TODAY | Professional body — very high trust signals |
| GOV.UK | ✅ | Primary source; continues to rank |
| CMA Accountancy | ✅ | Consumer guide |
| SMEAutomate | ✅ | Consumer guide |
| Accrue Accounting | ✅ | Practice blog |
| Bloom Financials | ✅ | Practice blog |
| Kennedys Accounting | ✅ NEW | Practice blog |
| 3eCPA | ✅ NEW | Practice blog |
| **SoleTraderGuide** | ❌ | **Absent — Day 20** |

**Assessment:** The entry of the IAB today is significant. A professional body article tends to rank and persist based on domain authority alone, independent of content freshness. STG's window for owning the neutral consumer position is narrowing with each new high-authority entrant. FreeAgent (vendor) and IAB (professional body) together create an authority ceiling that a new STG post will need weeks of indexing to approach — but there is no other independent editorial resource in this SERP. STG's neutrality and depth remain the competitive moat, but only when a post exists.

---

**Query 2: "xero review 2026 UK sole traders"**

| Competitor | SERP Title | Year |
|-----------|-----------|------|
| startups.co.uk | "Xero Review 2026: Is It Still Worth the Cost?" | 2026 ✅ |
| accountingstack.co.uk | "Xero Review UK 2026: Pricing, MTD and Verdict" | 2026 ✅ |
| goldentreeconsulting.co.uk | "Xero for Sole Traders: UK Review, Pricing and MTD Check for 2026" | 2026 ✅ |
| marcandrews.com | "Xero For Sole Traders UK 2026: Is It Worth The Cost?" | 2026 ✅ |
| serverman.co.uk | "Xero Review UK 2026: Is It Worth It for Small Businesses?" | 2026 ✅ |
| **SoleTraderGuide** | **"Xero Review: MTD Software for Sole Traders (2025)"** | **2025 ❌** |

Day 14. The title anomaly is confirmed live by direct file inspection. Xero review is STG's highest-value commercial review page (Xero affiliate link). The CTR suppression is now in its second full week.

---

## Step 6 — Priority Recommendations Summary

| Priority | Action | Owner | Deadline |
|----------|--------|-------|----------|
| 🔴 CRITICAL — TODAY | Fix SERP year tag: update `(2025)` → `(2026)` in `src/app/(public)/reviews/xero/page.tsx` (lines 24 and 118) and `src/app/(public)/reviews/sage/page.tsx` (lines 24 and 118). **Day 14.** Confirmed by direct file inspection today. Four text edits, two files. Every day this stays live costs CTR on STG's highest-value commercial page. | SEO Agent | **Today** |
| 🔴 CRITICAL — TODAY | Fix FAQ in `first-quarterly-update-what-sole-traders-need-to-do.mdx`: the `faqs` answer at the frontmatter level currently reads "each late quarterly submission earns one penalty point." This is confirmed incorrect by direct file read today. Replace with explicit soft-landing statement: quarterly penalty points are waived for the full 2026/27 tax year; EOPS and Final Declaration penalties are live from April 2026. **Day 90.** | QA/Reviewer Agent | **Today** |
| 🔴 CRITICAL — TODAY | Fix same soft-landing error in `free-vs-paid-mtd-software.mdx`; also verify software landscape for Dext Solo entry and Coconut exit. **Day 90.** | QA/Reviewer Agent | **Today** |
| 🔴 CRITICAL — 6 DAYS | Publish reactive auto-enrolment post before **Friday 25 September** (service goes offline Friday 19:00). Working title: "Got an HMRC Letter About Making Tax Digital? Here's What It Means and What to Do." FreeAgent and IAB now dominate the high-DA positions; STG's neutral editorial position is the only gap. **Day 20 — urgency hook expires in 6 days.** | SEO Agent + Editorial | **By Friday 25 Sept** |
| 🔴 CRITICAL — 17 DAYS | Correct `mtd-penalties-late-quarterly-updates-uk.mdx` to make the quarterly/EOPS distinction explicit and prominent. Q2 traffic wave begins ~7 October. | QA/Reviewer Agent | **By 30 September** |
| 🟡 HIGH | Outreach to The Independent Landlord — pitch STG's `/tools/mtd-eligibility-checker` as a "check your situation" tool for their MTD landlords guide. Excellent content fit; non-time-sensitive. | Editorial | **This week** |
| 🟡 HIGH | Outreach to Rhodium Accounting — pitch `/tools/mtd-software-chooser` as a "next step" tool. Outreach window open from yesterday's run. | Editorial | **This week** |
| 🟡 HIGH | Outreach to AJN Accountants — window closing today. Pitch reactive post (once published). | Editorial | **Today if possible** |
| 🟡 HIGH | Outreach to CMA Accountancy — pitch reactive post once published. Window open ~4 more days. | Editorial | **Within 4 days of reactive post** |
| 🟡 HIGH | Full rewrite of `first-quarterly-update-what-sole-traders-need-to-do.mdx`: update from future-tense to post-Q1/pre-Q2 framing, cite GOV.UK 436k stat, add Q2 preparation angle, fix penalty FAQ. | SEO Agent | **This week** |
| 🟡 MEDIUM | Outreach to HouseCheckup — pitch STG's landlord MTD guide as complement to their buy-to-let tax page. Non-time-sensitive. | Editorial | **This week** |
| 🟡 MEDIUM | Reframe `april-2026-mtd-rollout-explained.mdx`: update title and body or redirect to Phase 2 forward-look. | SEO Agent | **This week** |
| 🟡 MEDIUM | New post: Phase 2 prep for £30–50k earners ("Will You Need to Join MTD in April 2027?"). Unlocks MTD.digital outreach. | SEO Agent | Within 3 weeks |
| 🟡 MEDIUM | Refresh `mtd-software-options-explained.mdx`: current software landscape, remove future-tense framing. | SEO Agent | This sprint |
| 🟢 LOW | Outreach to GoFile.co.uk — after penalties post corrected. | Editorial | Within 2 weeks |
| 🟢 LOW | Monitor FreeAgent and IAB ranking positions — both will move rapidly given DA profiles. | DA Agent (next run) | Ongoing |
| 🟢 LOW | Audit `mtd-preparation-checklist-april-2026-uk.mdx` title — "Get Ready for April 2026" is now 5+ months historical. | SEO Agent | Next sprint |

---

## Step 7 — Routing

**→ SEO Agent (CRITICAL — act today or within 6 days):**

1. **Fix SERP year tag — TODAY:**
   - `src/app/(public)/reviews/xero/page.tsx`: line 24, change `'Xero Review: MTD Software for Sole Traders (2025)'` → `'Xero Review: MTD Software for Sole Traders (2026)'`; line 118, same text change.
   - `src/app/(public)/reviews/sage/page.tsx`: same pattern at lines 24 and 118.
   - Direct file inspection today confirmed the (2025) tag is still live. Four edits, two files.

2. **Publish reactive auto-enrolment post — before 25 September (Friday):**
   - Working title: *"Got an HMRC Letter About Making Tax Digital? Here's What It Means and What to Do"*
   - **Maintenance window hook (expires Friday 19:00):** "HMRC's MTD sign-up service goes offline from Friday 26 September evening until Monday 28 September — if you haven't registered yet, do it before then."
   - **Q2 hook (ongoing):** Next quarterly deadline is 7 November — 48 days. Auto-enrolled taxpayers without compatible software cannot submit.
   - **Key facts:** 294,000 taxpayers enrolled in stages through Sept–Oct; auto-enrolment does not fulfil reporting obligations; soft-landing means no quarterly penalty points for 2026/27; EOPS and Final Declaration penalties are live.
   - **Neutral positioning (STG's moat):** FreeAgent's consumer guide drives readers to FreeAgent software. IAB's guide is practitioner-facing. STG's version must be neutral, multi-option, and tool-linked (`/tools/mtd-software-chooser`). This is the only independent editorial position in this SERP.
   - **Target queries:** "got HMRC MTD letter what to do," "automatically enrolled MTD income tax 2026," "HMRC signed me up Making Tax Digital."

**→ QA/Reviewer Agent (CRITICAL — act today):**

1. **`first-quarterly-update-what-sole-traders-need-to-do.mdx`** — The FAQ at the `faqs` frontmatter key directly asserts "each late quarterly submission earns one penalty point." This was verified by direct file read today. Replace with: *"No quarterly penalty points apply for the 2026/27 tax year — HMRC has confirmed a soft-landing. Points will apply from April 2027. However, EOPS and Final Declaration penalties are live from April 2026, so your annual obligations must be met."* Also: update all body text that frames Q1 as a future event; Q1 closed 7 August — 44 days ago.

2. **`free-vs-paid-mtd-software.mdx`** — Apply soft-landing correction; verify current software landscape reflects Dext Solo entry and Coconut exit from compatible software list.

3. **`mtd-penalties-late-quarterly-updates-uk.mdx`** — Confirm the quarterly/EOPS distinction is in a primary consumer-readable position (callout or top-level FAQ answer). Must be clean before 7 October.

**→ Editorial (human — cannot be automated):**

- **AJN Accountants outreach** — window closing today (3 days from identification). Pitch once reactive post is published.
- **Rhodium Accounting outreach** — newly identified yesterday. Pitch `/tools/mtd-software-chooser` as "next step" tool. One email, low effort.
- **The Independent Landlord outreach** — newly identified today. Pitch `/tools/mtd-eligibility-checker` for their landlord MTD guide. Excellent content fit.
- **HouseCheckup outreach** — pitch STG's landlord MTD guide as complement to their buy-to-let tax page.
- **CMA Accountancy outreach** — pitch reactive post once published. Window open ~4 more days.

---

## Summary of Changes Since Last Report (19 September)

1. **IAB (Institute of Accountancy Bookkeepers) entered the auto-enrolment SERP** with "HMRC Starts Signing Up MTD No-shows" — a professional body entry carries significant trust signals and will rank durably. STG now absent from a SERP that includes both a vendor (FreeAgent) and a professional body (IAB).
2. **Kennedys Accounting and 3eCPA published** consumer-facing auto-enrolment guides — further erosion of STG's available SERP share.
3. **Varro Tax and PocketReceipt published Q2 content** — Q2 search traffic wave becoming more competitive.
4. **HMRC maintenance window confirmed as 19:00 Fri 26 Sept to 09:00 Mon 28 Sept** — exact timing locked; urgency hook expires in 6 days.
5. **Xero review year tag still live at (2025)** — Day 14. Confirmed by direct file inspection.
6. **First quarterly update penalty FAQ confirmed incorrect** — Day 90. Verified by direct file read.
7. **Two new link targets identified** — The Independent Landlord (landlord MTD guide) and HouseCheckup (buy-to-let tax guide).
8. **AJN Accountants outreach window closing today** — identified 3 days ago; response rates fall sharply after 72 hours.

---

*Report generated by DA Agent — research only, no repo files modified.*  
*Previous report: 2026-09-19 | Next scheduled run: 2026-09-21*

---

### Sources Consulted This Run

- [ICAS — HMRC to sign up taxpayers for MTD automatically from September](https://www.icas.com/news-insights-events/news/tax/hmrc-to-sign-up-taxpayers-for-mtd-automatically-from-september)
- [Rayner Essex — HMRC automatic MTD sign-up from September 2026](https://rayneressex.com/news/hmrc-to-automatically-sign-up-taxpayers-for-mtd-from-september-2026/)
- [SPA — HMRC Planned Outages: 26–28 September 2026](https://spa.org.uk/hmrc-planned-outages-26-28-september-2026/)
- [FreeAgent — Why has HMRC written to me about MTD for Income Tax?](https://www.freeagent.com/blog/why-has-hmrc-written-to-me-about-mtd/)
- [IAB — HMRC Starts Signing Up MTD No-shows: What Bookkeepers And Accountants Should Do Now](https://www.iab.org.uk/blog/hmrc-starts-signing-up-mtd-no-shows-what-bookkeepers-and-accountants-should-do-now/)
- [Kennedys Accounting — HMRC to Automatically Sign-Up Taxpayers for Making Tax Digital](https://kennedysaccounting.uk/hmrc-to-automatically-sign-up-taxpayers-for-making-tax-digital-what-you-need-to-know-insights/)
- [3eCPA — HMRC Automatic Sign-Up for Making Tax Digital for Income Tax](https://www.3ecpa.co.uk/regulatory-and-business/hmrc-begins-automatic-sign-up-making-tax-digital-income-tax/)
- [Varro Tax — MTD ITSA quarterly updates: dates, data and penalties (2026)](https://varro-tax.co.uk/guides/mtd-itsa-quarterly-updates)
- [PocketReceipt — MTD ITSA Quarterly Checklist (2026/27): Every Step + Every Deadline](https://pocketreceipt.co.uk/blog/mtd-itsa-quarterly-checklist)
- [Accrue Accounting — HMRC MTD Sign-Up 2026: What Sole Traders and Landlords Need to Do Next](https://www.accrueaccounting.co.uk/resources/blog/hmrc-is-signing-you-up-for-mtd-heres-what-to-expect/)
- [Bloom Financials — HMRC automatic MTD sign-up: what taxpayers must do now](https://bloomfinancials.com/hmrc-automatic-mtd-sign-up-2026/)
- [SMEAutomate — HMRC Making Tax Digital Auto-Enrolment: What UK Sole Traders and Landlords Must Do](https://www.smeautomate.com/blog/hmrc-mtd-auto-enrolment-september-2026-sole-traders-landlords)
- [GOV.UK — 436,000 sole traders and landlords make their tax digital](https://www.gov.uk/government/news/436000-sole-traders-and-landlords-make-their-tax-digital)
- [The Independent Landlord — Guide: Making Tax Digital (MTD) for landlords](https://theindependentlandlord.com/mtd-landlords/)
- [HouseCheckup — Buy-to-Let Tax Guide 2026: Income Tax, CGT & Expenses](https://housecheckup.co.uk/blog/buy-to-let-tax-guide-2026)
- [Rhodium Accounting — Choosing the Right MTD Software: An Honest Guide for UK Sole Traders in 2026](https://www.rhodiumaccounting.co.uk/best-mtd-software-uk-sole-traders-2026)
- [Startups.co.uk — Xero Review 2026: Is It Still Worth the Cost?](https://startups.co.uk/accounting/xero-review/)
- [AccountingStack — Xero Review UK 2026: Pricing, MTD and Verdict](https://accountingstack.co.uk/accounting-software/reviews/xero/)
- [AbraTax — MTD Q2 Records 2026: What You Need to Keep](https://www.abratax.co.uk/blog/mtd-q2-records-2026/)
- [Xero — MTD quarterly updates: How to submit your first quarterly report to HMRC](https://www.xero.com/uk/guides/mtd-quarterly-updates/)
- [Finistry — MTD Q1: Your First Quarterly Update Dates and What to Submit](https://finistry.co.uk/learn/self-employed/guides/payments-deadlines/first-mtd-quarterly-update)
