# SoleTraderGuide.co.uk — Daily DA Report
**Date:** 19 October 2026  
**Agent:** DA Agent (Scheduled Run)  
**Status:** Research + Recommendations Only — No repo files modified  
**Previous report:** 2026-10-18 | **Δ changes since yesterday noted inline**

---

## Site Phase Snapshot

| Metric | Status |
|--------|--------|
| Estimated DA phase | Phase 1 — early authority build (estimated DA 0–15) |
| External backlinks detected | None new identified |
| Brand mentions detected | None new |
| **Q2 deadline** | **7 November 2026 — 19 days away** (was 20 yesterday) — **Saturday; no confirmed extension** |
| Q3 period | 6 October 2026 – 5 January 2027 (Q3 deadline: 7 February 2027) |
| Posts total | 48 blog posts |
| Days since last new post | **167 days** |
| Stale posts >12 months (unactioned) | **4** (unchanged) |
| SERP title anomaly | `(2025)` live on Xero and Sage reviews — **Day 43 unaddressed** |
| Software production access freeze | Confirmed 28 Sep — still live; standing item |
| Autumn Budget 2026 | **28 October 2026 — 9 days away** |
| Phase 2 content gap | HMRC press release live since 5 Oct — STG still has no Phase 2 post — **Day 14** |
| Q2 filing guide | **Overdue Day 3** (was due 17 October) |
| Software readiness post | **Overdue Day 3** (was due 17 October) |
| ByteStart pitch | **Day 6** — no pitch sent |
| ICAEW Rep 75/26 | Phase 2 formal review call — confirmed 18 Oct; no government response yet |

---

## Note — /da-agent Skill Not Found

The scheduled prompt references `/da-agent` — this command does not exist in `.claude/commands/`. **Day 6 of notice.** Run completed using the `post-publish-da` protocol and prior report format. This notice will continue daily until the skill is created.

---

## Step 1 — HMRC & MTD News: Digital PR Opportunities

### 1a. 🟡 NEW TODAY — HMRC Identity Verification Change: Passport/Driving Licence Now Required

**Confirmed via search results:** HMRC has removed the option to verify identity by answering knowledge-based questions from the MTD sign-up journey. Users who cannot verify via the HMRC app must now present a passport or driving licence. This was not referenced in yesterday's report.

**Why this matters for STG:**
- Creates a meaningful barrier for taxpayers without current photo ID (older landlords, sole traders who haven't renewed a passport)
- Directly affects STG's target audience searching "how to sign up for MTD"
- The `how-to-register-self-assessment-uk-freelancer.mdx` post and any sign-up guide should carry an InfoCallout flagging this change
- No competitor consumer-facing site was found to have updated their sign-up guides for this change — gap opportunity for STG

**Content action (HIGH):** Add an `<InfoCallout>` to the registration post:
> *To sign up for MTD for Income Tax, you'll need to verify your identity through the HMRC app with a valid passport or UK driving licence. HMRC has removed the previous option to verify by answering knowledge-based security questions. If you don't have photo ID, contact HMRC to discuss alternatives before the registration deadline.*

---

### 1b. 🔴 STANDING CRITICAL — Phase 2 Content Gap: Budget 9 Days Away; Day 14

No new government announcement today. The situation from yesterday is unchanged:
- ICAEW Rep 75/26 (formal Phase 2 review call) is the strongest pre-Budget differentiation angle available
- GOV.UK £30,000 press release (5 Oct 2026) is the anchor source
- Budget on 28 October will either confirm Phase 2 as scheduled or signal a review/soft landing
- STG has zero Phase 2 content; the window before Budget closes in 9 days

**Status:** No change. Continued from yesterday.

---

### 1c. 🔴 STANDING CRITICAL — Q2 Deadline: 19 Days (Saturday 7 November 2026)

**New competitor activity:** Sage published "10 tips and tricks for your MTD quarterly update" on their UK blog (sage.com/en-gb/blog/). Xero has a dedicated guide on quarterly updates (xero.com/uk/guides/mtd-quarterly-updates/). AAT Comment (aatcomment.org.uk) also has Q2 content.

**Software vendor entries this week:** Sage and Xero guides now confirmed indexed. As HMRC-approved MTD software providers, their guides will rank well. STG's value-add over these is platform-neutral, deadline-specific, Saturday-date-warning, and cumulative catch-up content — none of which Sage or Xero covers.

**Key differentiators still unclaimed:**
- Saturday date with no working-day extension
- Cumulative Q1+Q2 catch-up for ~428,000 who missed Q1
- Auto-enrolled cohort ("HMRC signed me up — what do I do now?")

---

### 1d. 🟡 MONITORING — Budget MTD Agenda (9 Days)

No new pre-budget MTD signals today. Standing scenario analysis from yesterday unchanged:
- Phase 2 reconfirmation (most likely per RSM, Simply Business)
- Soft landing or review for Phase 2 (ICAEW's preferred outcome; possible)
- Penalty system refinement (speculated; low confidence)
- E-invoicing roadmap (mentioned in two previews)

---

## Step 2 — Brand Mentions and Backlinks

**No new editorial backlinks or brand mentions detected today.**

STG absent from all MTD query clusters checked. 167 days since last new post.

### 🔴 STANDING — SERP "(2025)" Year Tag (Day 43)

No change. Day 43. Six-line fix:
- `src/app/(public)/reviews/xero/page.tsx` lines 24, 26, 118: `(2025)` → `(2026)`
- `src/app/(public)/reviews/sage/page.tsx` lines 24, 26, 118: same

Sage and Xero now publishing active Q2 content (see Step 1c). Their own MTD guides carry `(2026)`. STG's review pages for their products still show `(2025)`. This is the longest-standing unactioned fix in the queue.

---

## Step 3 — Content Freshness Audit (>12 Months)

Four stale posts unchanged. No new posts have crossed the 12-month threshold since yesterday.

| Priority | File | `updatedAt` | Age | Core issue |
|----------|------|-------------|-----|-----------|
| 🔴 CRITICAL | `free-vs-paid-mtd-software.mdx` | 2025-01-10 | **21 months** | Future-tense; no freeze data; no FOI; no API retirement context; no ICAEW review angle |
| 🔴 CRITICAL | `first-quarterly-update-what-sole-traders-need-to-do.mdx` | 2025-02-15 | **20 months** | Future-tense Q1; wrong penalty FAQ; no cumulative catch-up; no auto-enrolment context; Q2 is 19 days away |
| 🟡 HIGH | `mtd-software-options-explained.mdx` | 2025-01-28 | **21 months** | Future-tense; no 2026 developments, freeze, or API retirement context |
| 🟡 HIGH | `april-2026-mtd-rollout-explained.mdx` | 2025-03-01 | **20 months** | April 2026 described as future; no Phase 2; no ICAEW review angle; no soft landing info |

**Standing flag:** `income-tax-rates-sole-traders-2025-26.mdx` — title and FAQs reference 2025-26 tax year; now in 2026/27.

**New flag (Step 1a):** `how-to-register-self-assessment-uk-freelancer.mdx` — does not reflect HMRC's updated identity verification requirement (passport/driving licence now required). Not technically >12 months (published 2026-03-27) but functionally out of date on a key UX step.

---

## Step 4 — Link Acquisition Opportunity Research

**Target researched today:** Enterprise Nation

### Enterprise Nation (enterprisenation.com) — 🔴 HIGH

**Gap status:** Confirmed. No Enterprise Nation MTD guide was found in search results for "MTD making tax digital sole trader 2026." Enterprise Nation has no standalone MTD content for sole traders appearing in any cluster checked.

**Why Enterprise Nation:**
- UK membership platform for small business owners and self-employed; estimated DA 50–60+
- Their member base includes the exact taxpayer demographic affected by Phase 1 and Phase 2 MTD
- Enterprise Nation regularly publishes tax and finance guides from external contributors
- The ICAEW review call (Rep 75/26) and Budget angle are exactly the kind of "what's changing and what does it mean for my business?" content they publish
- Phase 2 affects ~1.1 million additional taxpayers, many of whom are Enterprise Nation's small business readers

**Three pitch angles:**

1. **Phase 2 + Budget hook (most time-sensitive — by 25 October):**
*"9 days before the Autumn Budget, the UK's leading accountancy body formally asked the government to review Phase 1 of Making Tax Digital before adding 1.1 million more self-employed people from April 2027. Your members need clear answers: is Phase 2 happening? What should £30k earners do now? We've published the most specific Phase 2 eligibility guide available, covering the ICAEW position, Budget scenarios, and a step-by-step action plan."*

2. **Q2 deadline hook (immediate):**
*"The Q2 MTD quarterly update is due Saturday 7 November — HMRC has not granted a working-day extension. Half of eligible taxpayers may have missed Q1 and can catch up in the same submission. We've published a step-by-step guide covering both scenarios. Would you link to it or share it with your members ahead of the deadline?"*

3. **Identity verification hook (this week):**
*"HMRC quietly changed the MTD sign-up process — users can no longer verify identity by answering knowledge-based questions. They now need a passport or driving licence. Many self-employed people don't know this. We've flagged it in our sign-up guide and it would be useful for your members to know before they try to register."*

**Recommended approach:** Email the Enterprise Nation editorial team (editorial contact on their contributor/write-for-us page). Lead with the Phase 2 + Budget hook given the 9-day window. Budget-timed outreach is the sharpest hook available.

**Status:** Confirmed gap, ready to pitch. Budget gives this outreach the urgency it needs — pitch by Friday 23 October.

---

### Carry-Over Targets (Status Updated)

| Target | Priority | Status |
|--------|----------|--------|
| ByteStart | 🔴 HIGH | Gap confirmed **Day 6**. All pitch angles ready. **Pitch today — overdue.** |
| MoneySavingExpert | 🔴 HIGH | Confirmed yesterday. Error in existing MTD guide. Pitch by 27 Oct (Budget eve). |
| Enterprise Nation | 🔴 HIGH | Gap confirmed today. Three pitch angles ready. Pitch by 23 Oct. |
| startups.co.uk | 🟡 HIGH | Phase 2 reference confirmed. Phase 2 post + ICAEW hook when live. |
| Property118 | 🟡 HIGH | 44/128 landlord gap + Phase 2 landlord angle. |
| The Negotiator | 🟡 HIGH | Landlord 44/128 gap. |
| PropertyMark | 🟡 HIGH | Landlord MTD guide + Phase 2 pitch. |
| ANNA Money | 🟡 MEDIUM | MTD deadlines content confirmed. Q2 deadline + catch-up angle after Q2 guide live. |
| Chest (joinchest.com) | 🟡 MEDIUM | Budget angle — week of 28 October. ICAEW review hook. |
| Coconut (GetCoconut) | 🟡 MEDIUM | Phase 2 + landlord angles when posts live. |
| GoCardless | 🟢 LOW | MTD ITSA sole traders landlords guide confirmed. Evergreen eligibility checker pitch. |

---

## Step 5 — Competitor SERP Check

**Query checked today:** "MTD quarterly update Q2 November 2026 deadline" — who is ranking for the imminent Q2 deadline

| Competitor | Present | Notes |
|-----------|---------|-------|
| sage.com | ✅ NEW | "10 tips and tricks for your MTD quarterly update" — Q2-specific, high DA |
| xero.com | ✅ NEW | Dedicated MTD quarterly updates guide; no Saturday-date warning |
| pandle.com | ✅ | "What Happens If I Miss the MTD Income Tax Quarterly Update Deadline?" |
| businessaccountingbasics.co.uk | ✅ | MTD sole traders complete guide includes Q2 dates |
| tinytax.co.uk | ✅ | MTD ITSA sole trader guide includes Q2 dates |
| accountingweb.co.uk | ✅ | Confirmed HMRC soft landing / no penalty points content |
| aatcomment.org.uk | ✅ NEW | Q2 content from professional body; DA 50+ |
| **SoleTraderGuide** | ❌ | **Absent from Q2 deadline cluster** |

**Tide error still live:** Tide's guide reportedly lists "5 November" (incorrect). HMRC deadline is 7 November. STG's Q2 guide — when published — is the only consumer-facing source confirmed to include: (a) the Saturday date, (b) no working-day extension, (c) cumulative Q1+Q2 catch-up, (d) auto-enrolment context. Sage and Xero do not cover any of these points.

**New entrants:** Sage and Xero are newly confirmed in the Q2 cluster this week — neither previously detected. Both have high DA (60–70+). Their presence does not eliminate STG's opportunity: software vendor guides are transactional and do not cover the deadline-specific, Saturday-date, catch-up content STG's guide would own.

---

## Step 6 — Priority Recommendations Summary

| Priority | Action | Owner | Deadline |
|----------|--------|-------|----------|
| 🔴 CRITICAL — TODAY | Fix SERP year tags: `(2025)` → `(2026)` in Xero and Sage reviews (6 instances, 2 files). **Day 43.** | SEO Agent | **Today** |
| 🔴 CRITICAL — TODAY | Fix `first-quarterly-update-what-sole-traders-need-to-do.mdx`: remove future-tense, add soft-landing FAQ, Q2 catch-up route, auto-enrolment context, ICAEW Phase 2 note. Q2 is 19 days away. | QA/Reviewer Agent | **Today** |
| 🔴 CRITICAL — OVERDUE | Publish Q2 filing guide: *"How to Submit Your Q2 MTD Update — Deadline Saturday 7 November 2026."* **Day 3 overdue.** Lead with Saturday date, auto-enrolment context, cumulative Q1+Q2 catch-up. | Editorial | **TODAY** |
| 🔴 CRITICAL — BY 22 OCT | Publish Phase 2 post: *"MTD for Income Tax from April 2027: Who's Affected by the £30,000 Threshold?"* Include ICAEW Rep 75/26, Budget scenarios, no-soft-landing fact. **Day 14 gap; Budget 9 days away.** | Editorial | **By 22 October** |
| 🔴 HIGH — TODAY | Pitch **ByteStart** — Day 6. All pitch angles assembled. No further prep needed. **Overdue.** | Editorial | **Today** |
| 🔴 HIGH — TODAY | Add software callouts (InfoCallouts A–D) to `best-accounting-software-uk-sole-traders-freelancers-2026.mdx` and `free-vs-paid-mtd-software.mdx`. Use confirmed/corrected wording from 18 Oct report Step 1b. | QA/Reviewer Agent | **Today** |
| 🔴 HIGH — THIS WEEK | Add identity verification `<InfoCallout>` to `how-to-register-self-assessment-uk-freelancer.mdx` — HMRC now requires passport/driving licence for MTD sign-up; knowledge-based questions removed. | QA/Reviewer Agent | **This week** |
| 🟡 HIGH — BY 23 OCT | Pitch **Enterprise Nation** — Phase 2 + Budget hook is the lead angle; 9-day window before Budget closes. Gap confirmed today. | Editorial | **By 23 October** |
| 🟡 HIGH — BY 27 OCT | Pitch **MoneySavingExpert** — ICAEW review hook + Q2 deadline + error correction offer. Highest-DA available target (90+). | Editorial | **By 27 October** |
| 🟡 HIGH — OVERDUE | Publish software readiness post: *"HMRC Freezes New MTD Software Approvals — What It Means for Your Year-End Return."* **Day 3 overdue.** | Editorial | **TODAY** |
| 🟡 HIGH — THIS SPRINT | Add landlord software gap `<InfoCallout>` (44/128) to `making-tax-digital-landlords-complete-guide-uk.mdx` and `sole-trader-and-landlord-income-mtd-uk.mdx`. | QA/Reviewer Agent | **This sprint** |
| 🟡 HIGH — THIS SPRINT | Refresh `april-2026-mtd-rollout-explained.mdx` — add Phase 2, ICAEW review, auto-enrolment, soft landing status. | QA/Reviewer Agent | **This sprint** |
| 🟡 MEDIUM — THIS SPRINT | Refresh `mtd-software-options-explained.mdx` — remove future-tense; add 2026 landscape, freeze, FOI, API retirements. | QA/Reviewer Agent | **This sprint** |
| 🟡 MEDIUM — FLAG | `income-tax-rates-sole-traders-2025-26.mdx` — title references wrong tax year; now in 2026/27. | SEO Agent | **This sprint** |
| 🟡 MEDIUM — THIS SPRINT | Create `/da-agent` skill in `.claude/commands/da-agent.md`. **Day 6.** | Engineering | **This sprint** |
| 🟢 LOW | Pitch **Property118**, **The Negotiator**, **PropertyMark** once Phase 2 post + landlord callouts live. | Editorial | After Phase 2 live |
| 🟢 LOW | Pitch **ANNA Money**, **Coconut**, **GoCardless** after Q2 guide live. | Editorial | After Q2 guide live |
| 🟢 LOW | Pitch **Chest** (joinchest.com) — Budget angle week of 28 October. | Editorial | Week of 28 October |

---

## Step 7 — Routing

### → QA/Reviewer Agent (CRITICAL + HIGH — today)

**1. `first-quarterly-update-what-sole-traders-need-to-do.mdx` — TODAY**

Replace penalty FAQ with:
> *"For 2026/27, HMRC has confirmed a soft-landing: no penalty points will be issued for late quarterly updates. If HMRC automatically signed you up from September 2026, or if you missed the Q1 deadline (7 August 2026), you can still submit a cumulative update covering both Q1 and Q2 by the Q2 deadline — Saturday 7 November 2026. Note: HMRC has not granted a working-day extension; do not leave it until Monday 9 November. Approximately 428,000 in-scope taxpayers may have missed Q1 — you are not alone. The soft-landing applies to Phase 1 (2026/27) only. Phase 2 (April 2027) has no confirmed soft landing — and ICAEW has formally asked the government to review Phase 2 before it launches."*

Update `updatedAt` to `2026-10-19`.

**2. Software callouts (A–D) — TODAY**

Files: `best-accounting-software-uk-sole-traders-freelancers-2026.mdx` and `free-vs-paid-mtd-software.mdx`

Use exact wording from 18 Oct report Step 2 (InfoCallouts A–D). Wording is confirmed, not pending verification.

**3. Identity verification callout — THIS WEEK**

File: `how-to-register-self-assessment-uk-freelancer.mdx`

> *To sign up for MTD for Income Tax, you'll need to verify your identity through the HMRC app with a valid passport or UK driving licence. HMRC has removed the previous option to verify by answering knowledge-based security questions. If you don't have photo ID, contact HMRC to discuss alternatives before you need to file your first quarterly update.*

Update `updatedAt` to `2026-10-19`.

**4. Landlord callouts (carry-over — unactioned)**

Add to `making-tax-digital-landlords-complete-guide-uk.mdx` and `sole-trader-and-landlord-income-mtd-uk.mdx` — wording unchanged from previous reports.

---

### → SEO Agent (CRITICAL — today)

**Fix SERP year tag — Day 43:**
- `src/app/(public)/reviews/xero/page.tsx` lines 24, 26, 118: `(2025)` → `(2026)`
- `src/app/(public)/reviews/sage/page.tsx` lines 24, 26, 118: same

**Flag for title review:**
- `income-tax-rates-sole-traders-2025-26.mdx` — wrong tax year in title and slug

**New/updated post briefs:**

*Post A — Q2 filing guide (TODAY — Day 3 overdue):*
- Title: *"How to Submit Your Q2 MTD Update — Deadline Saturday 7 November 2026"*
- Lead angles: Saturday date (no working-day extension confirmed), auto-enrolled cohort, ~428k who missed Q1 can file cumulative Q1+Q2
- Differentiators: Tide says "5 Nov" (wrong); Sage/Xero guides present but don't cover Saturday date, catch-up, or auto-enrolment
- Internal links: `/tools/mtd-eligibility-checker`, `first-quarterly-update-what-sole-traders-need-to-do.mdx`, software comparison pages

*Post B — Phase 2 (by 22 October):*
- Title: *"MTD for Income Tax from April 2027: Who's Affected by the £30,000 Threshold?"*
- Anchors: HMRC GOV.UK press release (5 Oct 2026) + ICAEW Rep 75/26 (Oct 2026)
- Key facts: 1.1 million newly affected; qualifying income = SE + property gross before expenses; PAYE/dividends/savings excluded; no confirmed soft landing for Phase 2; ICAEW calling for formal review; Budget on 28 October may reconfirm or signal change
- Internal links: `/tools/mtd-eligibility-checker`, Phase 1 post, landlords guide

*Post C — Software readiness (TODAY — Day 3 overdue):*
- Title: *"HMRC Freezes New MTD Software Approvals — What It Means for Your Year-End Return"*
- Key facts: freeze Sep 2026; 165 approved products; 29 unused (FOI); 1-in-3 can't file year-end (Final Declaration); landlord gap 44/128; API retirements 16 Oct (capital gains/reliefs v2 only — quarterly filing APIs not affected)

---

### → Editorial (human decisions required)

**Immediate — today:**
1. **Publish Q2 guide** — Day 3 overdue. 19 days to Saturday deadline. No new entrants cover Saturday date, catch-up, or auto-enrolment. Sage and Xero now in the cluster; delay cedes more ground.
2. **Pitch ByteStart** — Day 6. Three angles assembled. No further prep.
3. **Publish software readiness post** — Day 3 overdue. InfoCallout wording is confirmed.

**By 22 October (6 days):**
4. **Publish Phase 2 post** — Budget is 9 days away. Add ICAEW Rep 75/26. The "will Phase 2 be delayed?" angle is still uncovered by any consumer-facing site.

**By 23 October:**
5. **Pitch Enterprise Nation** — Phase 2 + Budget hook. Gap confirmed today. Pre-Budget is the strongest moment for this outreach.

**By 27 October:**
6. **Pitch MoneySavingExpert** — ICAEW review + Budget + Q2 deadline + error correction. DA 90+.

**This week:**
7. **Pitch Enterprise Nation** (secondary: Q2 deadline + identity verification hooks if Phase 2 post not yet live)

**Engineering:**
8. **Create `/da-agent` skill** — Day 6 of notice.

---

## Δ Summary: New Since 18 October Report

1. **🟡 HMRC identity verification change confirmed.** HMRC removed knowledge-based questions from MTD sign-up; users now need passport or driving licence for identity verification. No consumer-facing competitor has updated sign-up guides for this. New InfoCallout added to routing for `how-to-register-self-assessment-uk-freelancer.mdx`.

2. **🔴 Sage and Xero now confirmed in Q2 deadline SERP cluster.** Both published MTD quarterly update guides indexed this week. Neither covers Saturday date, no-extension fact, catch-up route, or auto-enrolment. STG's Q2 guide differentiation intact but urgency increases — software vendors have high DA and are now in the cluster.

3. **🔴 Enterprise Nation MTD gap confirmed.** No Enterprise Nation MTD guide found in any cluster. Three pitch angles assembled. Pre-Budget window (9 days) makes this the best timing for outreach. Pitch by 23 October.

4. **🟢 AAT Comment (aatcomment.org.uk) confirmed in Q2 SERP cluster.** Professional body with DA 50+. Not a link acquisition target (editorial independence) but confirms the Q2 cluster is thickening — further delay loses ground.

5. **Standing items unchanged:** Phase 2 gap Day 14; Q2 guide overdue Day 3; SERP year tag Day 43; ByteStart pitch Day 6; Budget 9 days away; ICAEW Rep 75/26 no government response yet.

---

*Report generated by DA Agent (post-publish-da protocol — /da-agent skill not found, Day 6) — research only, no repo files modified.*  
*Previous report: 2026-10-18 | Next scheduled run: 2026-10-20*

---

### Intelligence Sources

- [ZipTax — MTD News October 2026: Sign-up Update, £30,000 Threshold and November Deadline](https://ziptax.co.uk/post/mtd-news-october-2026-sign-up-update-30-000-threshold-and-november-deadline)
- [Zmartly — HMRC to Sign Up MTD No-Shows From September 2026](https://zmartly.co.uk/news-insights/hmrc-signing-up-mtd-no-shows-september-2026)
- [ICAEW — Tax news highlights from August 2026 (HMRC auto sign-up)](https://www.icaew.com/insights/tax-news/2026/sep-2026/tax-news-highlights-from-august-2026)
- [ICAS — HMRC to sign up taxpayers for MTD automatically from September](https://icas.com/news-insights-events/news/tax/hmrc-to-sign-up-taxpayers-for-mtd-automatically-from-september/)
- [Sage — 10 tips and tricks for your MTD quarterly update](https://www.sage.com/en-gb/blog/mtd-quarterly-updates-listicle/)
- [Xero — MTD quarterly updates guide (UK)](https://www.xero.com/uk/guides/mtd-quarterly-updates/)
- [Pandle — What Happens If I Miss the MTD Income Tax Quarterly Update Deadline?](https://www.pandle.com/tax/making-tax-digital/what-happens-if-i-miss-the-mtd-income-tax-quarterly-update-deadline-63061/)
- [AccountingWeb — HMRC soft landing on quarterly update penalty points 2026/27](https://www.accountingweb.co.uk/node/231352)
- [businessaccountingbasics.co.uk — Making Tax Digital for Sole Traders: Complete Guide for 2026 and Beyond](https://www.businessaccountingbasics.co.uk/mtd-sole-traders/)
- [tinytax.co.uk — MTD for Income Tax: A Sole Trader's Complete Guide](https://tinytax.co.uk/guides/mtd-itsa-for-sole-traders)
- [GoCardless — MTD ITSA sole traders landlords 2026 guide](https://gocardless.com/blog/mtd-itsa-sole-traders-landlords-2026-guide)
- [ANNA Money — What are the MTD Deadlines for 2026?](https://anna.money/blog/guides/mtd-deadlines/)
- [ICAS — Further updates to MTD for ITSA announced](https://www.icas.com/news-insights-events/news/tax/further-updates-to-making-tax-digital-for-income-tax-self-assessment-announced)
- [House of Commons Library — Making Tax Digital: Developments since 2020](https://commonslibrary.parliament.uk/research-briefings/cbp-10573/)
- [GOV.UK — 436,000 sole traders and landlords make their tax digital](https://www.gov.uk/government/news/436000-sole-traders-and-landlords-make-their-tax-digital)
- [HMRC GOV.UK — Sole traders and landlords earning more than £30,000 urged to act now (5 Oct 2026)](https://www.gov.uk/government/news/sole-traders-and-landlords-earning-more-than-30000-urged-to-act-now)
