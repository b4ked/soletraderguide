# QA Agent — Context

## Phase 1 QA Status

### Build status
- TypeScript: Target — must pass `npm run build` before launch
- Linting: Target — must pass `npm run lint` before launch
- No known breaking errors at time of Phase 1 handover

### Known issues to resolve before launch

| Issue | Severity | Action needed |
|-------|----------|--------------|
| No OG image at `/og-image.jpg` | Medium | Create and place a 1200×630px OG image |
| Privacy policy not legally reviewed | High | Get solicitor review before significant traffic |
| T&Cs not legally reviewed | High | Get solicitor review before significant traffic |
| Analytics not connected | Medium | Connect provider in Phase 2 |
| No cookie consent banner | Medium | Add when analytics are connected |
| Provider logo files missing | Low | Add logo files to `/public/logos/` |
| Twitter handle empty in siteConfig | Low | Add when account created |

---

## Content QA Checklist (per page)

Run through this for each page before launch:

- [ ] Title is unique and keyword-optimised (50–60 chars)
- [ ] Description is unique and compelling (120–160 chars)
- [ ] H1 is present and appears once only
- [ ] H2s are in logical order (no skipping)
- [ ] Breadcrumbs correct and all links resolve
- [ ] LastUpdated date is accurate
- [ ] AffiliateDisclosure present if page has commercial content
- [ ] InfoCallout types match their content (warning for disclaimers, deadline for dates, etc.)
- [ ] All CTABlock links resolve to real pages
- [ ] All FAQs have both question and answer populated
- [ ] No placeholder text or [TODO] markers visible
- [ ] Related posts links all resolve

---

## Accessibility Standards

Target: **WCAG 2.1 AA**

Key criteria to check manually:
- **1.4.3 Contrast (Minimum):** Body text ≥4.5:1, large text ≥3:1
  - Brand teal (#0d6e6e) on white: check with contrast checker
  - Muted foreground text on white: check
  - CTA blue (#2563eb) on white: check
- **2.4.7 Focus Visible:** All interactive elements show focus ring
- **4.1.2 Name, Role, Value:** All form inputs have labels; icons have aria-hidden or aria-label
- **1.3.1 Info and Relationships:** Heading hierarchy is logical
- **2.4.1 Bypass Blocks:** Skip to content link in layout (if not already implemented)

---

## Performance Benchmarks

Target scores (Google PageSpeed Insights):
| Metric | Target | Priority |
|--------|--------|----------|
| Performance score | ≥90 | High |
| Accessibility score | ≥95 | High |
| Best Practices score | ≥90 | Medium |
| SEO score | ≥95 | High |
| LCP (Largest Contentful Paint) | <2.5s | High |
| CLS (Cumulative Layout Shift) | <0.1 | High |
| FID / INP | <200ms | Medium |

---

## Testing Commands Reference

```bash
# Development
npm run dev

# Production build (run before any launch)
npm run build
npm run start

# Linting
npm run lint

# Type checking (included in build)
npx tsc --noEmit
```

### External tools checklist
Before launch, run each page through:

1. **Google Rich Results Test** (https://search.google.com/test/rich-results)
   - Check: BreadcrumbList, FAQPage detected and valid

2. **Google PageSpeed Insights** (https://pagespeed.web.dev)
   - Check homepage, a review page, a tool page, a blog post

3. **axe DevTools** (browser extension)
   - Check: no critical accessibility violations on any page

4. **W3C HTML Validator** (https://validator.w3.org)
   - Check: no structural HTML errors on key pages

5. **Google Search Console** (post-launch)
   - Submit sitemap, monitor Coverage report for indexing errors

---

## Phase 2 Testing Expansion

### Automated testing to add

**Playwright E2E tests (priority order):**
1. EligibilityCheckerForm — complete all 3 paths (eligible, not yet, not applicable)
2. SoftwareChooserForm — complete at least 3 recommendation paths
3. All primary CTABlocks — verify links resolve and are not 404

**Lighthouse CI in build pipeline:**
```yaml
# .github/workflows/lighthouse.yml
- name: Run Lighthouse CI
  run: npx lhci autorun
```

**Axe-core in CI:**
```bash
npx axe http://localhost:3000 --exit
```

**Broken link checker (monthly scheduled):**
```bash
npx broken-link-checker https://soletraderguide.co.uk --recursive
```
