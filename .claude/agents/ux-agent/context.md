# UX Agent — Context

## Primary User Journeys

### Journey 1: MTD Eligibility Check
**User intent:** "Do I need to comply with Making Tax Digital?"
**Entry points:** `/mtd-for-sole-traders/am-i-affected`, homepage, `/tools/mtd-eligibility-checker`
**Flow:**
1. User arrives via organic search
2. Reads brief intro explaining the tool
3. Sees InfoCallout (general guidance disclaimer)
4. Completes 3-step EligibilityCheckerForm
5. Receives result (affected / not yet / not applicable)
6. If affected: shown next steps + CTABlock → software pages
7. If not yet: shown next steps for April 2027 + CTABlock → guides

**Key UX considerations:**
- Tool must feel trustworthy (disclaimer visible before starting)
- Progress bar helps with completion (3 steps, ~60 seconds)
- Result screen must be actionable — clear next steps
- "Start again" option prominent for users who made an error

---

### Journey 2: Software Comparison Research
**User intent:** "What's the best MTD software for me?"
**Entry points:** `/software/best-mtd-software-for-sole-traders`, `/comparisons`, `/tools/mtd-software-chooser`
**Flow:**
1. User arrives via organic search
2. Reads comparison table or software hub content
3. Narrows down to 2–3 candidates
4. Visits comparison page (e.g. `/comparisons/xero-vs-quickbooks`)
5. Visits individual review (e.g. `/reviews/xero`)
6. Clicks affiliate CTA → provider website
**Key UX considerations:**
- AffiliateDisclosure visible before comparison tables
- Star ratings must be prominently displayed
- CTABlocks placed after comparison table (not just at page end)
- Pros/cons visible without scrolling too far

---

### Journey 3: Provider Deep-Dive
**User intent:** "Is [specific software] right for me?"
**Entry points:** `/reviews/[provider]`
**Flow:**
1. User arrives with provider in mind (branded search)
2. Sees overall score + quick verdict
3. Reads pros/cons
4. Views pricing breakdown
5. Reads MTD-specific notes
6. Clicks "Try [Provider] free" CTA
**Key UX considerations:**
- Score and verdict visible above the fold
- Affiliate CTA near top (after score) and at bottom
- ReviewedBy / LastUpdated must be visible — builds trust

---

### Journey 4: Software Chooser Tool
**User intent:** "I need help deciding which software to use"
**Entry points:** `/tools/mtd-software-chooser`, CTABlocks throughout site
**Flow:**
1. User arrives (often referred from guide or blog post)
2. Sees intro + AffiliateDisclosure inline
3. Sees InfoCallout (editorial independence statement)
4. Completes 5-step SoftwareChooserForm
5. Receives personalised recommendation with rationale
6. Clicks "Read full review" or "Try [Provider] free"
**Key UX considerations:**
- Must feel personalised, not generic
- Affiliate disclosure prominent but not alarmist
- "Start again" option always visible on result
- Result links to both review and direct provider

---

### Journey 5: Knowledge Building
**User intent:** "Help me understand MTD before I have to comply"
**Entry points:** `/mtd-for-sole-traders`, `/blog`, organic informational searches
**Flow:**
1. User reads MTD guide or blog post
2. Follows related links to deepen knowledge
3. Eventually uses eligibility checker tool
4. Then proceeds to software research
**Key UX considerations:**
- Related content links visible without excessive scrolling
- InfoCallouts break up text and reinforce key points
- FAQAccordion at bottom captures common follow-up questions
- LastUpdated date reassures user content is current

---

## Component Usage Patterns

### InfoCallout Usage
- `type="deadline"`: HMRC deadlines, submission dates — red for urgency
- `type="warning"`: Tax advice disclaimers ("not financial advice"), watch-out points
- `type="info"`: Tool disclaimers, good-to-know context
- `type="tip"`: Actionable shortcuts, money-saving tips

Always place InfoCallouts:
- After the intro paragraph (if it contains a critical disclaimer)
- Before key decision points within an article
- After a section heading if that section warrants special attention

### CTABlock Variants
- `variant="brand"`: Deep teal background — primary CTAs (e.g. "Check eligibility", "Find software")
- `variant="light"`: Pale teal background — secondary CTAs (e.g. "Compare all options")
- `variant="bordered"`: White with teal border — tertiary CTAs, less emphasis

Always provide `secondaryCta` where a natural fallback exists (e.g. "Compare all options" alongside "Check eligibility").

---

## Page Layout Templates

### Guide page layout
```
<Breadcrumbs>
<H1>
<Intro paragraph>
<InfoCallout> (if needed)
<H2 section> × N
<CTABlock>
<H2: FAQ section>
<FAQAccordion>
<LastUpdated>
```

### Blog post layout
```
<Breadcrumbs>
<Category badge + reading time>
<H1>
<Byline + LastUpdated>
<AffiliateDisclosure inline> (if commercial)
<InfoCallout> (if needed)
<H2 sections> × N
<CTABlock>
<FAQAccordion>
<Related posts grid>
<LastUpdated>
```

### Tool page layout
```
<Breadcrumbs>
<H1>
<Intro>
<AffiliateDisclosure inline> (if commercial)
<InfoCallout type="info">
<Tool form component>
<"What to Do Next" section>
<FAQAccordion>
<CTABlock>
<LastUpdated>
```

### Legal page layout
```
<Breadcrumbs>
<H1>
<Intro paragraph>
<InfoCallout type="warning"> (if disclaimer needed)
<H2 sections> × N
<LastUpdated>
```
