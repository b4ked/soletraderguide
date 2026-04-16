# Blog QA — SoleTraderGuide.co.uk

Use this command after `/draft-to-post`.

This skill replaces the old split between SEO review and QA review. The same agent must check, fix, and verify the post directly. Do not route issues to another agent.

## Required Reads

1. `CLAUDE.md`
2. The MDX file created for this draft
3. `src/content/blog/` for duplicate and related-post checks
4. `base/src/app/blog/[slug]/page.tsx` to confirm the template still handles blog schema and disclosure correctly

## Required Checks

### Content and SEO

- Frontmatter is complete and valid
- Category value is valid
- Description length is sensible and search-aligned
- Opening section matches the title intent
- No body H1
- Only `<InfoCallout>` JSX appears in the body
- At least 3 relevant internal links exist
- Related-post links are real
- FAQ count and CTA are complete
- Affiliate disclosure setting is correct
- Core MTD facts match repo facts
- Tables, if any, are valid multi-line markdown tables

### Quality Gate

Fail before publication if any of these remain true after editing:

- the article is still too thin to be useful
- the piece is still a duplicate
- key factual claims remain uncertain
- the draft intent and resulting slug no longer match

### Build Gate

Run these commands:

```bash
npm run build
npm run lint
```

If dependencies are missing in the environment, install them first.

Lint handling rule:

- `npm run build` is always blocking.
- `npm run lint` is blocking for issues in the current post workflow scope.
- If lint failures are unchanged pre-existing issues confined to `base/`, record them in the final notes and continue. `base/` is treated as read-only and those failures must not stop a draft-only publication.

## Fixing Rule

- Fix directly and rerun checks.
- Do not produce a review-only report while leaving fixable issues behind.
- Only stop when the post is either approved or clearly blocked by a hard quality issue.

## Approval Output

When approved, output:

```text
BLOG_QA: PASS
FILE: src/content/blog/[slug].mdx
BUILD: PASS
LINT: PASS
NOTES: [brief notes or "none"]
```

When blocked, output:

```text
BLOG_QA: FAIL
REASON: [specific reason]
ACTION: [stop publication / add QUALITY_GATE_FAIL marker]
```
