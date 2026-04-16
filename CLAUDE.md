# SoleTraderGuide.co.uk — CLAUDE.md

This file is the root instruction set for Claude Code in this repo.
Keep it short. Put detailed workflow logic inside the skill files in `.claude/commands/`.

## Project

- Site: `soletraderguide.co.uk`
- Purpose: publish practical, SEO-led UK content for sole traders, freelancers, and landlords
- Stack: Next.js App Router, TypeScript, Tailwind, MDX blog posts
- Content source: raw drafts in `drafts/`
- Published blog posts: `src/content/blog/*.mdx`
- Advisory reports: `reports/`

## Hard Repo Rules

- `base/` is a subtree and is treated as read-only in this repo.
- Do not auto-select a draft when publishing. The draft path will always be supplied.
- Do not use parallel agents, subagents, or orchestration patterns. One Claude session completes the workflow sequentially.
- When asked to publish a blog, the agent must follow the repo skill workflow below instead of inventing a new one in the prompt.
- Blog posts must be published from a specific draft file and pushed to the remote before the DA report is generated.

## Publish Workflow

When the instruction is to publish a selected draft, run this sequential workflow:

1. Read this file.
2. Run `/publish-blog` with the supplied draft path.
3. `/publish-blog` must load these supporting skills in order:
   - `/draft-to-post`
   - `/blog-qa`
   - `/post-publish-da`

The scheduler prompt should only name the draft and tell Claude to publish it. The workflow itself lives here and in the skills.

## Key Files

- Root workflow: `.claude/commands/publish-blog.md`
- Draft shaping: `.claude/commands/draft-to-post.md`
- Final QA and release gate: `.claude/commands/blog-qa.md`
- Post-publish authority report: `.claude/commands/post-publish-da.md`
- Site facts: `src/data/site-config.ts`
- Provider data and affiliate state: `src/data/providers/index.ts`
- Blog template: `base/src/app/blog/[slug]/page.tsx`
- Scheduler script: `scheduler/check-and-publish.sh`

## Blog Output Rules

- Output file: `src/content/blog/[slug].mdx`
- The slug should come from the draft if supplied; otherwise derive it from the topic.
- Drafts may arrive as plain text, rough markdown, or partly formatted MDX. The agent is responsible for deciding what structure and formatting the final post needs.
- Do not force fixed formatting patterns onto every draft. Use tables, lists, callouts, and other supported markdown structures only where they materially improve clarity.
- Frontmatter must include:
  - `title`
  - `description`
  - `publishedAt`
  - `updatedAt`
  - `author`
  - `category`
  - `tags`
  - `readingTime`
  - `affiliateDisclosure`
  - `cta`
  - `faqs`
  - `relatedPosts`
- MDX body must not contain an H1.
- `<InfoCallout>` is the only JSX allowed in blog body content.
- Prefer structural clarity over decorative formatting. Formatting choices must follow the content, not a template quota.
- Internal links must use direct site-relative paths such as `/tools/mtd-eligibility-checker`.
- Use UK English throughout.

## Content and Fact Invariants

- Phase 1 MTD ITSA: qualifying income over `£50,000`, mandatory from `6 April 2026`
- Phase 2: over `£30,000`, from `April 2027`
- Phase 3: over `£20,000`, from `April 2028`
- Qualifying income: gross self-employment income plus gross UK property income before expenses
- PAYE wages, dividends, and savings interest do not count toward qualifying income
- Quarterly deadlines: `7 August`, `7 November`, `7 February`, `7 May`
- If a post mentions paid software or affiliate-enabled providers, verify disclosure requirements against `src/data/providers/index.ts`

## Release Rules

- The blog workflow must run quality checks and fix issues directly in the same session.
- Run `npm run build` before publication. Run `npm run lint` when the workflow changes content or code that could affect linting.
- Pre-existing lint failures confined to unchanged `base/` files should be recorded but should not block a draft-only publication.
- If quality is too weak, the topic is a duplicate, or facts cannot be verified confidently, stop without publishing.
- If a push is rejected, rebase on `origin/main` and retry.

## Expected Command

Natural language instructions such as `publish the blog draft drafts/example.md` should resolve to the `/publish-blog` workflow automatically.
