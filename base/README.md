# affiliate-portfolio-dna

Shared infrastructure base for a portfolio of content + affiliate sites. Built on Next.js 15 App Router, Tailwind CSS v4, and MDX.

## What's included

- Next.js App Router layout shell (header, footer, mobile menu)
- MDX blog system with category filtering and scheduling
- Admin dashboard (auth + scheduler proxy)
- Newsletter signup and API routes (Resend)
- Trust/credibility components (TrustBar, AffiliateDisclosure, LastUpdated)
- Comparison components (ProviderCard)
- SEO utilities (structured data, metadata helpers, sitemap)
- Shared TypeScript types
- shadcn/ui + Tailwind CSS v4

## Usage

Each site embeds this repo as a `git subtree` at `base/` and overrides:

- `src/data/site-config.ts` — site identity and brand
- `src/data/navigation.ts` — nav, footer, sitemap routes, blog meta
- `src/data/providers.ts` — affiliate provider data
- `src/app/globals.css` — brand colour overrides
- `src/app/` (site-specific pages outside `base/`)
- `src/content/blog/` — MDX blog posts

## Adding a new site

1. Create a new repo
2. Add this repo as a git subtree: `git subtree add --prefix=base https://github.com/b4ked/affiliate-portfolio-dna.git main --squash`
3. Create `src/data/site-config.ts`, `src/data/navigation.ts`, `src/data/providers.ts`
4. Add site-specific pages in `src/app/`
5. Set env vars: `RESEND_API_KEY`, `ADMIN_PASSWORD`, `NEXT_PUBLIC_VERCEL_PROJECT_URL`, `NEXT_PUBLIC_GITHUB_REPO_URL`

## Updating the DNA base

In each site repo, pull latest base changes:

```bash
git subtree pull --prefix=base https://github.com/b4ked/affiliate-portfolio-dna.git main --squash
```

## Environment variables

| Variable | Purpose |
|----------|---------|
| `RESEND_API_KEY` | Newsletter and email sending |
| `RESEND_AUDIENCE_ID` | Resend audience for newsletter contacts |
| `ADMIN_PASSWORD` | Admin dashboard login |
| `SCHEDULER_API_URL` | VPS scheduler endpoint |
| `SCHEDULER_API_KEY` | Scheduler auth key |
| `NEWSLETTER_FROM_EMAIL` | Sender email address |
| `NEWSLETTER_FROM_NAME` | Sender display name |
| `NEWSLETTER_RECIPIENT_EMAIL` | Subscription notification recipient |
| `NEXT_PUBLIC_VERCEL_PROJECT_URL` | Vercel project URL for admin links |
| `NEXT_PUBLIC_GITHUB_REPO_URL` | GitHub repo URL for admin links |
