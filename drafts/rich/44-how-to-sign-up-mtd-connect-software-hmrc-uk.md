---
title: "How to Sign Up for MTD and Connect Your Software to HMRC"
description: "A step-by-step walkthrough of the actual process: from prerequisites to your first quarterly update. What you need, what you do, and what can go wrong."
publishedAt: "2026-04-09"
updatedAt: "2026-04-09"
author: "SoleTraderGuide Editorial Team"
category: "mtd-guides"
tags: ["MTD sign up", "Making Tax Digital", "HMRC", "MTD software", "Government Gateway", "MTD ITSA", "quarterly updates"]
readingTime: "10 min read"
affiliateDisclosure: true
cta:
  heading: "Try Sage — HMRC-recognised MTD software"
  description: "Sage is fully compatible with MTD for Income Tax. Connect once, submit quarterly updates directly from your records — no extra steps."
  primaryLabel: "Try Sage free"
  primaryHref: "https://sageuklimited.sjv.io/9VeqNW"
  secondaryLabel: "Not sure which software fits?"
  secondaryHref: "/tools/mtd-software-chooser"
faqs:
  - question: "When do I need to sign up for MTD for Income Tax?"
    answer: "If your total qualifying income exceeds £50,000 per year, you must be signed up and compliant from April 2026. The threshold drops to £30,000 from April 2027. Sign-up is open now — you don't have to wait until the mandatory date."
  - question: "What do I need before I can sign up?"
    answer: "You need: your Unique Taxpayer Reference (UTR), a working Government Gateway account with your login credentials, and at least one HMRC-recognised MTD software product already set up. You can't complete the sign-up process without software ready to connect."
  - question: "Can I sign up if a tax agent manages my affairs?"
    answer: "If you use an accountant or tax agent, check with them first. Agents can sign clients up for MTD through their own agent services account. If your agent manages your Government Gateway access, signing up yourself may cause complications. Talk to them before proceeding."
  - question: "What is the authorisation process for connecting my software to HMRC?"
    answer: "Most MTD software connects to HMRC using a standard OAuth process. This means you'll be redirected from your software to a Government Gateway login page, you'll log in and grant permission, and then you'll be redirected back. The software then holds an authorisation token that lets it submit data on your behalf. The token typically lasts 18 months before needing renewal."
  - question: "Can I sign up if I'm in a business partnership?"
    answer: "No. MTD for Income Tax currently does not support business partnerships. If you operate as a sole trader and also have partnership income, the position is complex — take advice before signing up. Partnerships are expected to join MTD at a later date."
relatedPosts:
  - title: "What is Making Tax Digital for Sole Traders?"
    href: "/blog/what-is-making-tax-digital-for-sole-traders"
  - title: "Your First Quarterly Update: What Sole Traders Need to Do"
    href: "/blog/first-quarterly-update-what-sole-traders-need-to-do"
---

## Before you start: do you need to sign up?

MTD for Income Tax Self Assessment (MTD ITSA) is being rolled out in stages:

- **From April 2026:** Mandatory for sole traders and landlords with qualifying income over £50,000/year
- **From April 2027:** Mandatory for those with qualifying income over £30,000/year
- **From April 2028:** Expected to extend further (threshold TBC)

If you're above the relevant threshold, you must be compliant by your start date. You can sign up voluntarily before your mandatory date — and there are good reasons to do so.

<InfoCallout type="deadline" title="Don't wait until your mandatory start date">
HMRC recommends signing up well before your mandatory compliance date. You'll need time to choose software, migrate your records, and do a test run before quarterly deadlines start. Starting six to twelve months early is sensible — not excessive.
</InfoCallout>

---

## What you need before signing up

Get these in place before you start the sign-up process:

**1. Your UTR (Unique Taxpayer Reference)**
This is the 10-digit reference number HMRC issued when you registered for Self Assessment. Find it on any letter from HMRC, or log into your Personal Tax Account.

**2. A Government Gateway account**
You need to be able to log in to Government Gateway with your User ID and password. If you've forgotten your credentials, reset them now — don't leave it until the moment you're trying to sign up.

**3. HMRC-recognised MTD software — already installed and set up**
You cannot complete the connection to HMRC without software in place. HMRC-recognised options for sole traders include:
- **FreeAgent** — popular with freelancers and contractors
- **Xero** — strong for growing businesses
- **QuickBooks** — widely used, good import tools
- **Sage** — particularly strong for CIS users and more complex sole traders

HMRC maintains a full list of compatible software. Check the latest version on gov.uk as new products are added regularly.

---

## The 6-step sign-up process

### Step 1: Confirm you need to sign up

Check your total qualifying income from the previous tax year. This includes:
- Self-employment income (all businesses)
- UK property income

If the combined total exceeds the threshold for your mandatory date, you need to act. If you're voluntarily signing up early, you just need to confirm you're eligible (no disqualifying circumstances — see below).

### Step 2: Choose your HMRC-recognised software

Pick one product and set it up before continuing. At minimum, you should have:
- Created an account
- Entered your basic business information
- Set up your chart of accounts or income/expense categories
- Ideally, connected your bank feed

**Software ease-of-sign-up comparison:**

| Software | MTD set-up ease | Bank feed | Mobile app | Best for |
|---|---|---|---|---|
| FreeAgent | Very easy | Yes | Yes | Freelancers, contractors |
| Sage | Easy | Yes | Yes | CIS, complex sole traders |
| QuickBooks | Easy | Yes | Yes | General use, importing data |
| Xero | Moderate | Yes | Yes | Growing businesses |

### Step 3: Sign in to Government Gateway and navigate to MTD ITSA

1. Go to [gov.uk](https://www.gov.uk) and sign in to your Personal Tax Account or Business Tax Account
2. Look for the "Making Tax Digital for Income Tax" section
3. Select "Sign up" or "Get started with MTD for Income Tax"
4. Enter your UTR when prompted and confirm your identity

HMRC will ask you to confirm some details about your business — your accounting period, your income sources, and whether you use an agent.

<InfoCallout type="warning" title="Who cannot sign up directly">
You cannot sign up for MTD via this process if you:
- Are in a business partnership (partnerships have a separate, later MTD timeline)
- Have been declared bankrupt or are in an Individual Voluntary Arrangement
- Have a tax agent managing your account through their own agent services portal (check with your agent first)
- Have certain complex tax affairs (HMRC will notify you if you're excluded)

If any of these apply, contact HMRC or your agent before proceeding.
</InfoCallout>

### Step 4: Authorise your software to connect to HMRC

Once you've completed the Government Gateway sign-up, your MTD software needs to be granted permission to submit data to HMRC on your behalf.

This process varies slightly by software, but it works like this:

1. Inside your software, find the MTD connection settings (usually under Settings > HMRC or Settings > Tax)
2. Click "Connect to HMRC" or "Authorise"
3. You'll be redirected to a Government Gateway login page
4. Log in with your Government Gateway credentials
5. Confirm you're granting the software permission to access your MTD data
6. You'll be redirected back to your software — the connection is live

The authorisation uses HMRC's standard OAuth system. Your software receives a token, not your password. Most tokens last 18 months before they need renewing.

If the authorisation times out or fails, clear your browser cache, try a different browser, and make sure you're using the Government Gateway account associated with your UTR — not a different one.

### Step 5: Set up your digital records

With the software connected, start recording your income and expenses digitally in that software. HMRC requires:

- A record of all business income (sales, invoices)
- A record of all allowable expenses
- The ability to submit this data in quarterly updates

Most software will walk you through setting up:
- Income categories relevant to your business type
- Expense categories aligned with HMRC's categories
- Your bank connection (so transactions import automatically)

Get at least one month of clean data in place before your first quarterly deadline.

### Step 6: Submit your first quarterly update

MTD ITSA divides the tax year into four reporting quarters:

| Quarter | Covers | Deadline |
|---|---|---|
| Q1 | 6 April – 5 July | 5 August |
| Q2 | 6 July – 5 October | 5 November |
| Q3 | 6 October – 5 January | 5 February |
| Q4 | 6 January – 5 April | 5 May |

At the end of each quarter, your software will allow you to review and submit your income and expense totals for that period. This is not a tax payment — it's a data submission. HMRC uses it to build up a picture of your income across the year.

Your End of Period Statement (EOPS) and final declaration follow later, replacing the current Self Assessment return.

---

## Common problems and how to fix them

**Wrong UTR entered**
Double-check against your HMRC correspondence. UTRs are 10 digits. If you enter the wrong one, HMRC may link your sign-up to the wrong record.

**Government Gateway login issues**
Reset your password before you start. Use the Government Gateway recovery process if you've lost your User ID. Don't try to create a new account — that will cause complications.

**Software authorisation timeout**
The OAuth session times out quickly. Don't navigate away during the authorisation flow. Have your Government Gateway credentials ready before you click "Authorise".

**Software not appearing as HMRC-recognised**
Not all products marketed as "MTD-ready" are on HMRC's official compatible software list. Check [gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-income-tax](https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-income-tax) before committing to any product.

**Agent access conflict**
If your accountant is trying to connect their agent services account at the same time you're signing up yourself, there can be conflicts. Co-ordinate with your agent before doing anything.

---

## Summary

Signing up for MTD doesn't have to be complicated. The process is:

1. Confirm your income threshold and eligibility
2. Choose and set up HMRC-recognised software
3. Sign in to Government Gateway and complete the MTD ITSA sign-up
4. Authorise your software to connect to HMRC
5. Set up clean digital records
6. Submit quarterly updates on schedule

The most common failure point is going into it without software already ready. Sort the software first, then do the sign-up. It'll take a fraction of the time.

---

*Prompt used: Write Post 44 — How to Sign Up for MTD and Connect Your Software to HMRC. Full brief as specified including 6-step walkthrough, software comparison table, quarterly deadlines table, InfoCallouts, common issues, FAQs, and CTA blocks. Publish date 2026-04-09.*
