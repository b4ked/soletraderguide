# Blog Publishing Pipeline — SoleTraderGuide.co.uk

You are the orchestrating pipeline agent for SoleTraderGuide.co.uk's blog publishing workflow. Your job is to take one raw draft file from `drafts/` through the full Write-Up → SEO → QA → commit/push → DA sequence and get it live on the site.

This skill is the single source of truth for the blog publishing pipeline. The RemoteTrigger prompt invokes this skill — all pipeline logic lives here, not in the trigger.

---

## Before You Start

1. Read `CLAUDE.md` at the repo root in full.
2. Read this file in full.
3. Identify the next unprocessed draft (see Step 0 below).
4. If no unprocessed drafts remain, output "PIPELINE COMPLETE — no remaining drafts" and stop.

---

## Step 0 — Identify the Next Draft

```bash
ls drafts/
ls src/content/blog/
```

- Draft files are named `NN-slug-description.md` (e.g. `02-best-accounting-software.md`)
- A draft is **processed** if a corresponding `.mdx` file exists in `src/content/blog/` with a matching slug
- Pick the lowest-numbered draft that does NOT have a corresponding published MDX file
- If all drafts are processed: output "PIPELINE COMPLETE — all drafts published" and stop
- If a draft file contains `QUALITY_GATE_FAIL:` at the top: skip it, move to the next

**Draft state tracking:**
- No separate tracking file is needed — the presence of `src/content/blog/[slug].mdx` IS the processed marker
- If a draft fails the quality gate (P8), add a comment `<!-- QUALITY_GATE_FAIL: [reason] [date] -->` to the top of the draft file so future runs skip it

---

## Step 1 — Write-Up Agent

**Invoke:** Run `/write-up` to load the full skill before writing anything.

**Input:**
- Draft file path: `drafts/[filename].md`
- Produce: `src/content/blog/[slug].mdx`

**What the agent does:**
- Reads `CLAUDE.md` and `src/data/site-config.ts`
- Runs `ls src/content/blog/` for duplicate check (P3)
- Reads `src/data/providers/index.ts` for affiliate disclosure check (P6)
- Transforms the draft into a polished MDX file per all write-up checklists
- Outputs a **Handoff Payload** (see reference at bottom)

**Pipeline gate:**
- P8 FAIL (draft too thin / factually wrong / duplicate): add `<!-- QUALITY_GATE_FAIL: [reason] [date] -->` to the draft file. Log in pipeline summary. Stop this draft. Move to next draft if in batch mode.
- COMPLETE: capture the Handoff Payload and proceed to Step 2.

---

## Step 2 — SEO Agent

**Invoke:** Run `/seo-agent` to load the full skill before auditing.

**Input:**
- Write-Up Handoff Payload (file path, keyword, affiliate disclosure, internal links, FLAGS_FOR_SEO)
- Change type: `New .mdx blog post`
- Scope: Checklists 5, 7, 9

**What the agent does:**
- Reads the MDX file from Step 1
- Audits and directly fixes: title/description keyword placement, internal link count, CTA/FAQ/relatedPosts completeness, MTD facts, pricing accuracy
- Outputs SEO pass/fail report

**Pipeline gate:**
- SEO PASS: proceed to Step 3 with the SEO report.
- SEO FAIL (auto-fixable): agent fixes directly, re-runs affected checks, proceeds.
- SEO FAIL (needs content decision): flag in pipeline summary as "human review required". Proceed to QA with flag documented — do not hold the pipeline for non-blocking content decisions.

---

## Step 3 — QA / Reviewer Agent

**Invoke:** Run `/review` to load the full skill before verifying.

**Input:**
- File path from Handoff Payload
- SEO report from Step 2
- Change type: `New blog post (MDX only)`
- Scope: Checklist 1 (build gate), Checklist 5 (critical gates only), Checklist 6 (SD1 template check only)

**What the agent does:**
- Runs `npm install && npm run build` (CCR: node_modules not pre-installed; ~2 min)
- Checks MDX frontmatter schema completeness (CO1, CO4)
- Spot-checks MTD facts — 2 items: Phase 1 threshold + qualifying income definition (CO14)
- Verifies no prohibited JSX in body (CO16)
- Verifies relatedPosts slugs via `ls src/content/blog/` (CO11)
- Checks SD1: reads `src/app/blog/[slug]/page.tsx` to confirm ArticleSchema still in template
- Trusts SEO Agent report for all other SEO items — does not re-run SEO checklist

**Pipeline gate:**
- QA APPROVED: proceed to Step 4.
- QA BLOCKED (BLOCKER severity): route back to responsible agent, fix, re-run QA. Do not commit.
- QA BLOCKED (non-BLOCKER only): log in summary, proceed if no BLOCKERs outstanding.

---

## Step 4 — Commit and Push

Only run after QA APPROVED.

```bash
git add src/content/blog/[slug].mdx
git commit -m "feat: publish blog post — [slug]

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"
git push origin main
```

- Commit only the new MDX file. Do not commit draft files or DA reports in this step.
- Push rejected: run `git pull --rebase origin main` then push again.
- After push: Vercel auto-deploys. Post is live within ~60 seconds.

---

## Step 5 — DA Agent On-Push Assessment

**Invoke:** Run `/da-agent` to load the full skill before assessing.

**Note:** Content is already live. DA recommendations are advisory — they go into `reports/` for follow-up, not for blocking this publication.

**What the agent does:**
- Reads the newly published MDX file
- Runs On-Push Workflow: Checklists 3, 4, and EE1–EE5 from Checklist 1
- Calculates DA Impact Score (out of 40) with phase-relative interpretation
- Saves report to `reports/da-report-[YYYY-MM-DD].md`
- Outputs machine-readable Follow-up Actions block

**After DA Agent:**

```bash
git add reports/
git commit -m "chore: DA report — [slug]

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"
git push origin main
```

---

## Step 6 — Pipeline Summary

```
## Blog Pipeline Complete — [slug] — [date]

### Post Published
- File: src/content/blog/[slug].mdx
- URL: https://soletraderguide.co.uk/blog/[slug]
- Category: [category]
- Word count: ~[N]

### Pipeline Results
| Step | Agent | Result | Notes |
|------|-------|--------|-------|
| 1 | Write-Up | COMPLETE / QUALITY_GATE_FAIL | |
| 2 | SEO | PASS / FAIL | [issues fixed or flagged] |
| 3 | QA | APPROVED / BLOCKED | [issues cleared or outstanding] |
| 4 | Commit/Push | DONE | [commit hash] |
| 5 | DA | COMPLETE | [score/40 — verdict] |

### Flags for Human Review
[Items requiring a human decision across all steps — or "None"]

### DA Follow-up Actions
[Follow-up Actions block from DA Agent output — or "None"]

### Remaining Drafts
[List unprocessed draft filenames — or "All drafts published"]
```

---

## Error Handling

| Error | Action |
|-------|--------|
| Draft quality gate fail | Add QUALITY_GATE_FAIL comment to draft. Log. Move to next or stop. |
| SEO FAIL — auto-fixable | SEO Agent fixes directly. Re-run affected checks. Proceed. |
| SEO FAIL — content decision needed | Flag as human review. Proceed to QA with flag. |
| QA BLOCKER | Route to responsible agent. Fix. Re-run QA. Do not commit. |
| git push rejected | `git pull --rebase origin main` then push. If rebase fails, flag for human review. |
| npm install or build fails | STOP. Do not push. Log the exact error in summary. |

---

## Handoff Payload Reference

Write-Up Agent outputs this; SEO and QA Agents read it to avoid re-deriving context:

```
FILE: src/content/blog/[slug].mdx
SLUG: [slug]
KEYWORD: [primary keyword]
CATEGORY: [category]
WORD_COUNT: ~[N] words
AFFILIATE_DISCLOSURE: [true/false] — reason: [why]
INTERNAL_LINKS: [anchor text → /path, ...]
RELATED_POSTS: [href, ... — verified via ls src/content/blog/]
CTA_PRIMARY_HREF: [href]
TABLES_IN_BODY: [yes — N tables, all multi-line / no]
DRAFT_QUALITY_GATE: PASSED
FLAGS_FOR_SEO: [specific items to check, or "none"]
```

---

## Files This Pipeline Touches

| Step | Reads | Writes |
|------|-------|--------|
| 0 | `drafts/`, `src/content/blog/` | — |
| 1 | `CLAUDE.md`, `src/data/`, draft file, existing MDX | `src/content/blog/[slug].mdx` |
| 2 | MDX file, `src/data/`, `CLAUDE.md` | Edits to `src/content/blog/[slug].mdx` |
| 3 | MDX file, `src/app/blog/[slug]/page.tsx` | — |
| 4 | — | git commit |
| 5 | MDX file, `src/content/blog/`, `src/app/sitemap.ts` | `reports/da-report-[date].md` |

---

## What This Pipeline Does NOT Do

- Does not modify `src/app/`, `src/components/`, or `src/data/` files — blog MDX only
- Does not update the sitemap manually — MDX posts auto-included via `getAllPosts()`
- Does not add nav items — blog posts are not in nav
- Does not run DA Agent daily workflow — only the on-push assessment
- Does not action DA follow-up recommendations — those require a separate pipeline run
