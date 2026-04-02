# affiliate-portfolio-dna

## What this repo is

This is the **shared DNA base** for a portfolio of content + affiliate sites. It contains all shared infrastructure, components, layouts, API routes, and tooling that every site in the portfolio uses.

**Do not add site-specific content here.** This repo is the foundation — it must remain generic.

---

## Architecture

```
affiliate-portfolio-dna/   ← this repo (shared DNA)
  src/
    app/           ← base layouts, API routes, admin, blog shell
    components/    ← all shared UI components
    lib/           ← utilities, content helpers, metadata
    types/         ← shared TypeScript interfaces
    data/          ← STUB FILES ONLY — sites override these

each-site-repo/
  base/            ← git subtree embed of affiliate-portfolio-dna
  src/
    data/          ← site-specific overrides (site-config, navigation, providers)
    app/           ← site-specific pages (homepage, guides, comparisons, tools)
    content/blog/  ← site-specific MDX blog posts
```

---

## Per-site files (must be overridden in each site repo)

Every site repo must provide its own versions of these files in `src/data/`:

| File | Purpose |
|------|---------|
| `src/data/site-config.ts` | Site name, domain, URL, brand, email, CTA config |
| `src/data/navigation.ts` | Nav items, footer columns, sitemap routes, blog page meta |
| `src/data/providers.ts` | Affiliate provider data (if the site uses comparisons) |

The stubs in this repo exist only so the DNA compiles standalone. They are overridden by each site.

---

## Base read-only rule

When embedding this repo as a `git subtree` in a site repo:

- **Never modify files inside `base/`** directly in a site repo
- All changes to shared infrastructure must be made in this repo, then pulled into each site via `git subtree pull`
- Site-specific content goes in the site repo's own `src/` directories (outside `base/`)

---

## Updating the DNA across all sites

To propagate a change from this repo to all sites:

```bash
# In each site repo:
git subtree pull --prefix=base https://github.com/b4ked/affiliate-portfolio-dna.git main --squash
```

---

## Brand / theme customisation

Each site overrides brand colours in its own `src/app/globals.css`:

```css
/* Override DNA defaults with your site's brand */
--color-brand: #yourcolour;
--color-brand-dark: #yourdarkercolour;
--color-brand-light: #yourlightercolour;
```

The DNA ships with neutral blue defaults (`#1d4ed8`) that are intentionally generic.

---

## VPS scheduler

Each site runs a separate scheduler instance on the VPS. Port map:

| Site | Port |
|------|------|
| soletraderguide (live) | 3001 |
| saasguide (live) | 3002 |
| soletraderguide (test branch) | 3003 |

Scheduler code lives in `server.js` and `check-and-publish.sh` in each site's VPS folder.
