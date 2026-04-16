# Publish Blog — SoleTraderGuide.co.uk

Use this command when the task is to publish one specific draft file from `drafts/`.

This is a single-agent sequential workflow. Do not spawn subagents. Do not run parallel work. Do not auto-select a draft.

## Input

- Required: exact draft path, for example `drafts/24-can-i-use-spreadsheet-making-tax-digital-uk.md`

## Workflow

1. Read `CLAUDE.md`.
2. Confirm the supplied draft file exists.
3. Treat that supplied draft as the only draft in scope.
4. Run `/draft-to-post` and create or update the target MDX file in `src/content/blog/`.
5. Run `/blog-qa` and fix every blocking issue directly in the same session until the post is publish-ready or fails the quality gate.
6. Commit and push the published MDX file.
7. Run `/post-publish-da` and write the advisory report to `reports/`.
8. Commit and push the DA report.
9. Output a concise summary with:
   - draft file
   - published file
   - slug
   - publish commit
   - report commit
   - any follow-up items

## Commit Rules

- First commit: published blog post only.
- Second commit: DA report only.
- Commit messages:
  - `feat: publish blog post - [slug]`
  - `chore: add DA report - [slug]`

## Push Rules

- Push to the current branch unless the caller explicitly requires another branch.
- If push is rejected:
  - run `git pull --rebase origin <branch>`
  - resolve only conflicts related to the current work
  - retry push

## Failure Rules

- If the draft is too thin, irreparably wrong, or a clear duplicate, stop before publication.
- If the failure is content-quality related and future scheduled runs should skip it, add this marker at the top of the draft:

```md
<!-- QUALITY_GATE_FAIL: [reason] [YYYY-MM-DD] -->
```

- Never commit or push a failed publication attempt.
