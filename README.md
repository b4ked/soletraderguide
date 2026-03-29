# SoleTraderGuide.co.uk

A UK-focused, SEO-first content and comparison website for sole traders navigating Making Tax Digital (MTD) for Income Tax. Monetised through software affiliate referrals.

**Live:** [soletraderguide.co.uk](https://soletraderguide.co.uk) — deployed on Vercel, auto-deploys from `main`.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| Components | Radix UI / shadcn/ui (customised) |
| Content | MDX via `next-mdx-remote` + `gray-matter` |
| Deployment | Vercel (auto-deploy from `main`) |
| Scheduler backend | Node.js/Express on VPS (`api.parrytech.co`) |
| Blog automation | Claude Code on VPS — agentic blog pipeline |

---

## Repository Structure

```
soletraderguide/
├── src/
│   ├── app/                         # Next.js App Router pages + API routes
│   │   ├── layout.tsx               # Root layout
│   │   ├── page.tsx                 # Homepage
│   │   ├── sitemap.ts               # Dynamic sitemap (includes MDX posts)
│   │   ├── robots.ts                # robots.txt handler
│   │   ├── blog/                    # Blog hub + [slug] dynamic MDX route
│   │   ├── mtd-for-sole-traders/    # MTD guide hub + individual guides
│   │   ├── software/                # Software hub + best-of pages
│   │   ├── reviews/                 # Provider review pages
│   │   ├── comparisons/             # Provider comparison pages
│   │   ├── tools/                   # Eligibility checker + software chooser
│   │   └── api/
│   │       └── admin/schedules/     # Next.js proxy → VPS scheduler API
│   │           ├── route.ts         # GET + POST
│   │           └── [id]/
│   │               ├── route.ts     # PATCH + DELETE
│   │               └── complete/
│   │                   └── route.ts # POST mark-published
│   │
│   ├── components/
│   │   ├── common/                  # CTABlock, FAQAccordion, InfoCallout, HeroSection
│   │   ├── layout/                  # Header, Footer, Breadcrumbs
│   │   ├── seo/                     # JsonLd, FAQSchema, ArticleSchema, OrganisationSchema
│   │   ├── comparison/              # ComparisonTable, ProviderCard, ProsConsList
│   │   ├── tools/                   # EligibilityCheckerForm, SoftwareChooserForm
│   │   ├── trust/                   # AffiliateDisclosure, LastUpdated, ReviewedBy
│   │   └── ui/                      # shadcn/ui base components
│   │
│   ├── content/
│   │   └── blog/                    # MDX blog posts (filename = slug)
│   │
│   ├── data/
│   │   ├── providers/index.ts       # Software provider data
│   │   ├── site-config.ts           # MTD thresholds, deadlines, site metadata
│   │   └── navigation.ts            # Primary nav + footer nav
│   │
│   └── lib/
│       ├── metadata.ts              # generateMetadata() — used on every page
│       ├── content.ts               # getPostBySlug(), getAllPosts()
│       ├── analytics.ts             # Event tracking abstraction
│       └── utils.ts                 # cn() Tailwind utility
│
├── drafts/                          # Raw draft markdown files (input to blog pipeline)
├── reports/                         # DA Agent reports (auto-generated, post-publish)
│
├── scheduler/                       # VPS scheduler backend (runs on the VPS)
│   ├── server.js                    # Express API — schedule CRUD + due-check
│   ├── check-and-publish.sh         # Cron script — clones repo, runs Claude pipeline
│   ├── package.json
│   ├── package-lock.json
│   └── .env.example                 # Copy to .env on the VPS — never commit .env
│
└── CLAUDE.md                        # AI agent context — read before any work
```

---

## Local Development

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # Production build — run before committing
npm run lint      # ESLint
```

---

## Deployment

Pushing to `main` triggers an automatic Vercel deployment. No manual steps needed.

**Vercel environment variables required:**

| Variable | Purpose |
|----------|---------|
| `VPS_API_URL` | `https://api.parrytech.co/stg-scheduler` |
| `VPS_API_SECRET` | Shared secret — must match `VPS_API_KEY` on VPS |

---

## VPS — Automated Blog Publishing

A VPS at `api.parrytech.co` (Ubuntu 24.04, SSH alias: `parrytech-vps`) runs an automated blog publishing pipeline.

### How it works

```
Admin page (/admin → Drafts tab)
  └── Schedule a draft → POST /api/admin/schedules (Next.js proxy)
        └── VPS Express API :3001 → schedules.json

Cron (*/15 * * * *) on VPS
  └── check-and-publish.sh
        ├── GET /api/schedules/due
        ├── git clone repo → /home/parryh/stg-publish-work/
        ├── claude --print "run /blog-pipeline on drafts/<file>" --dangerously-skip-permissions
        ├── POST /api/schedules/:id/complete
        └── rm -rf /home/parryh/stg-publish-work/
```

### VPS file locations

| Path | Purpose |
|------|---------|
| `/home/parryh/soletraderguide/` | Git repo clone (scheduler + scripts) |
| `/home/parryh/soletraderguide/scheduler/server.js` | Express API |
| `/home/parryh/soletraderguide/scheduler/.env` | `VPS_API_KEY` + `PORT=3001` (not in git) |
| `/home/parryh/soletraderguide/scheduler/schedules.json` | Live schedule data (not in git) |
| `/home/parryh/soletraderguide/scheduler/check-and-publish.sh` | Cron runner script |
| `/home/parryh/stg-publish-work/` | Temp clone used during pipeline runs (deleted after) |
| `/etc/systemd/system/stg-scheduler.service` | systemd service — auto-starts on reboot |
| `/etc/caddy/Caddyfile` | Routes `/stg-scheduler/*` → port 3001 |
| `~/.ssh/github_stg` | SSH deploy key for git push |
| `/var/log/stg-publish.log` | Cron output log |

### VPS service management

```bash
ssh parrytech-vps

# Scheduler API service
systemctl status stg-scheduler
systemctl restart stg-scheduler
journalctl -u stg-scheduler -f

# Cron log
tail -f /var/log/stg-publish.log

# Check due schedules
curl -s -H "Authorization: Bearer <VPS_API_KEY>" http://127.0.0.1:3001/api/schedules/due

# Run cron script manually
/home/parryh/soletraderguide/scheduler/check-and-publish.sh

# Update scheduler scripts from repo
cd /home/parryh/soletraderguide && git pull origin main
```

### Updating the cron script or server

Edit in the repo locally → commit → push → `git pull origin main` on the VPS. The scheduler service reads `server.js` from the repo clone. Restart the service after updating `server.js`:

```bash
ssh parrytech-vps
cd /home/parryh/soletraderguide && git pull origin main
systemctl restart stg-scheduler
```

For `check-and-publish.sh`, a `git pull` is sufficient — no restart needed.

---

## Blog Pipeline (Agentic Workflow)

Blog posts are published via Claude Code running the `/blog-pipeline` skill defined in `CLAUDE.md`. The pipeline runs 5 agents sequentially:

| Step | Agent | Action |
|------|-------|--------|
| 1 | Write-Up Agent | Converts `drafts/<file>.md` → `src/content/blog/<slug>.mdx` |
| 2 | SEO Agent | Validates frontmatter, internal links, structured data |
| 3 | QA/Reviewer Agent | `npm run build` + `npm run lint` |
| 4 | Commit/Push | Commits MDX + pushes to `main` → Vercel auto-deploys |
| 5 | DA Agent | On-push domain authority assessment |

### Scheduling a post

1. Add a draft markdown file to `drafts/` and push to `main`
2. Go to `/admin` → Drafts tab → click Schedule on the draft
3. Pick a publish date → Save schedule
4. The VPS cron picks it up at the next :00, :15, :30, or :45 mark

---

## Admin Page

Password-protected at `/admin`. Built into the Next.js app.

- **Overview tab** — published posts, stale drafts, scheduled queue
- **Drafts tab** — all files in `drafts/`, with scheduling controls
- **Analytics tab** — placeholder for Phase 2

The admin page talks to the VPS scheduler API via server-side Next.js proxy routes at `/api/admin/schedules/*`. The `VPS_API_SECRET` env var is never exposed to the browser.

---

## Content Conventions

See `CLAUDE.md` for the full agent context including:
- MDX frontmatter schema
- Page layout templates
- Component usage guide
- SEO conventions
- UK English rules
- Coding conventions

---

## Key Data Files

| File | What to edit |
|------|-------------|
| `src/data/providers/index.ts` | Software provider data, pricing, affiliate links |
| `src/data/site-config.ts` | MTD thresholds, quarterly deadlines, site metadata |
| `src/data/navigation.ts` | Primary nav and footer nav items |

---

## Phase 2 Roadmap

- [ ] Analytics provider (Plausible recommended)
- [ ] Author profile pages with credentials (E-E-A-T)
- [ ] More software providers (Absolute Bridging, Coconut, Ember, HMRC free tools)
- [ ] Review + AggregateRating structured data on review pages
- [ ] `next/image` for all provider logos
- [ ] Email capture / newsletter integration
- [ ] Google Search Console setup
- [ ] Cookie consent banner
- [ ] Legal review of Privacy Policy and T&Cs
- [ ] Dark mode

---

## License

© SoleTraderGuide. All rights reserved.

Content is for general information only and does not constitute financial, tax, or legal advice.
