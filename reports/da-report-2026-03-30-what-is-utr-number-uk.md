# DA Impact Assessment — what-is-utr-number-uk.mdx — 2026-03-30

### Content Assessed
- File: `src/content/blog/what-is-utr-number-uk.mdx`
- Type: New blog post
- Topic: UTR number UK — what it is, how to get one, where to find it, what to do if lost
- Draft processed from: `drafts/09-what-is-a-utr-number-how-to-get-one.md`
- URL: `https://soletraderguide.co.uk/blog/what-is-utr-number-uk`

---

### DA Impact Score: 25/40

| Dimension | Score | Notes |
|-----------|-------|-------|
| Word count / depth | 3/5 | ~920 words — within 800–1,200 range; not thin but well below 1,500+ long-form target |
| Original insight | 2/5 | Solid, clear explainer but commodity topic; GOV.UK, HMRC, and many accountant sites cover UTR registration; no unique data, research, or angle |
| E-E-A-T signals | 2/5 | Author field present ("SoleTraderGuide Editorial Team"); LastUpdated current (2026-03-30); no professional reviewer cited; no GOV.UK/HMRC citation links in body text |
| Internal links to money pages | 3/5 | Links to /tools/mtd-eligibility-checker ✓ and /mtd-for-sole-traders/am-i-affected ✓; no link to /software or /reviews despite natural opportunity in the "next steps" section |
| Link-earning angle | 2/5 | "What is a UTR number" is a functional explainer; security/fraud angle (do not share UTR) is the strongest differentiating element but underdeveloped; no data hook, no tool embed, no research |
| Topical relevance | 4/5 | Core topic for UK sole traders; UTR is foundational to Self Assessment and MTD; directly supports site's authority theme |
| Freshness | 5/5 | Published 2026-03-30; current and timely pre-MTD-launch content |
| CTA alignment | 4/5 | MTD eligibility checker CTA is well-matched for users who just registered for Self Assessment; secondary CTA to MTD explained is logical |

---

### Verdict: GOOD DA Impact (25/40)

**Phase 1 context:** In Phase 1 (DA 0→20), this score is acceptable. The site needs comprehensive coverage of all core UK sole trader tax topics, and UTR number is a foundational building block that supports the site's topical authority cluster around Self Assessment and MTD. However, three specific improvements would meaningfully increase this post's link-earning potential and E-E-A-T signals.

---

### Recommendations

#### 1 — Add GOV.UK citation links (E-E-A-T improvement)
The post makes factual claims about HMRC processes (10 working days for UTR delivery, helpline number 0300 200 3310, registration deadline of 5 October) without citing the GOV.UK source. For a YMYL-adjacent finance/tax topic, linking to authoritative GOV.UK sources signals to Google that the content is fact-checked.

**Proposed additions:**
- "Register for Self Assessment" section: add a citation link to `https://www.gov.uk/register-for-self-assessment`
- Helpline mention: add inline note "via GOV.UK" or link to the Self Assessment contact page
- This costs nothing; it improves E-E-A-T score from 2 → 3

#### 2 — Add link to /software hub in "next steps" section
The final section "What to do after receiving your UTR" is a natural insertion point for a link to the software section. The line "you will need HMRC-recognised software" currently links only to the eligibility checker; adding a link to `/software/best-mtd-software-for-sole-traders` or `/software` would:
- Increase internal link equity flow to a key money page
- Give the reader a useful next step
- Improve the IL3 score from 3 → 4

#### 3 — Expand UTR fraud/security section (link-earning angle)
The "Keeping your UTR secure" section is currently ~100 words covering basic guidance. UTR identity fraud is a real, HMRC-documented issue — expanding this section to 200–300 words with:
- Specific examples of UTR fraud (fraudulent tax returns filed in victim's name)
- HMRC's guidance on what to do if your identity is used fraudulently
- A mention of HMRC's online fraud reporting tool

This would differentiate the post from commodity UTR guides and create a newsworthy angle that could earn links from freelancer press (ContractorUK, FreelanceUK) and accountancy firm blogs. Would move link-earning score from 2 → 3.

---

### Routes
- SEO Agent: **Yes** — for recommendation 2 (internal link to /software hub)
- Write-Up Agent: **Yes** — for recommendations 1 (GOV.UK citations) and 3 (expand UTR fraud section)
- QA/Reviewer Agent: **Yes** — after Write-Up Agent implements, to verify build still passes

---

### Follow-up Actions

```
PRIORITY: MEDIUM
ACTION: Add GOV.UK citation link to 'Register for Self Assessment' in the 'How to get a UTR number' section
FILE: src/content/blog/what-is-utr-number-uk.mdx
ASSIGN_TO: Write-Up Agent
---
PRIORITY: MEDIUM
ACTION: Add internal link to /software/best-mtd-software-for-sole-traders in the 'What to do after receiving your UTR' section, on the "HMRC-recognised software" anchor text
FILE: src/content/blog/what-is-utr-number-uk.mdx
ASSIGN_TO: Write-Up Agent (or SEO Agent fast-track — low-risk internal link addition)
---
PRIORITY: LOW
ACTION: Expand 'Keeping your UTR secure' section to 200–300 words with UTR fraud examples, HMRC guidance, and fraud reporting information to create a link-earning differentiator
FILE: src/content/blog/what-is-utr-number-uk.mdx
ASSIGN_TO: Write-Up Agent
```

---

*Generated by DA Agent on-push workflow — 2026-03-30*
*Phase: 1 (Foundation, DA 0→20)*
