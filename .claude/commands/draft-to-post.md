# Draft To Post — SoleTraderGuide.co.uk

Use this command to turn one supplied draft into a publishable MDX blog post.

This skill combines the old write-up and blog SEO shaping work into one pass. The output should already be close to publish-ready before QA starts.

## Role

- Transform a raw draft, outline, or rough MDX dump into a polished post in `src/content/blog/`
- Resolve structure, SEO, internal links, affiliate disclosure, CTA, FAQs, and related posts in one pass
- Improve weak raw material without inventing unsupported facts

## Required Reads

1. `CLAUDE.md`
2. The supplied draft file
3. `src/data/site-config.ts`
4. `src/data/providers/index.ts`
5. `src/content/blog/` to check for duplicates and related-post targets
6. Two or three related existing posts to match tone and frontmatter conventions

## Pre-Write Gate

Stop and fail the draft if any of these are true:

- The draft is under roughly 300 useful words and offers no meaningful angle to build from.
- The core topic duplicates an existing published post without a stronger angle, fresher framing, or materially different intent.
- The draft contains factual claims you cannot correct confidently from repo sources or clearly authoritative sources already embedded in the repo workflow.

## Output Requirements

- Create `src/content/blog/[slug].mdx`
- Use the draft slug if present. Otherwise derive a clean kebab-case slug from the topic.
- Keep the title specific and search-led.
- Make the description human-readable and tightly aligned to the main query.
- Write for UK sole traders first. Landlords and freelancers are secondary where relevant.

## Frontmatter Standard

Every post must include:

```yaml
title:
description:
publishedAt:
updatedAt:
author: "SoleTraderGuide Editorial Team"
category:
tags:
readingTime:
affiliateDisclosure:
cta:
faqs:
relatedPosts:
```

### Frontmatter Rules

- `title`: under about 60 characters where possible and keyword-led
- `description`: around 150 to 160 characters
- `publishedAt` and `updatedAt`: ISO date for the publication run
- `category`: one of `mtd-news`, `software-guides`, `tax-tips`, `mtd-guides`
- `tags`: 2 to 5 useful tags
- `readingTime`: realistic estimate such as `6 min read`
- `affiliateDisclosure`: `true` when the post mentions paid software generally or references providers that should trigger disclosure

## Body Standard

- No `#` H1 in the body
- Start with a short opening paragraph that states the problem clearly
- Use `##` and `###` headings only
- Use plain English and UK spelling
- Use direct internal links across the body, not clustered at the end
- Use `<InfoCallout>` only when it adds real value
- End with a practical next step, not an abrupt stop

## Embedded SEO Standard

Complete these inside this skill rather than handing them off:

- Place the primary keyword naturally in the title, opening section, and key headings
- Add at least 3 relevant internal links
- Choose the right CTA target for the post intent
- Write 3 to 5 search-aligned FAQs
- Set 2 or 3 valid related posts using real existing routes only
- Check whether affiliate disclosure must be `true`
- For software or commercial posts, keep claims factual and balanced

## Accuracy Standard

Use `src/data/site-config.ts` as the first source for:

- MTD thresholds
- dates
- qualifying income definition
- quarterly deadlines

Use `src/data/providers/index.ts` as the source for:

- provider names
- affiliate state
- pricing references already maintained in the repo

Do not preserve draft claims that conflict with these sources.

## Output Block

After writing the MDX file, produce this handoff block for the next skill:

```text
FILE: src/content/blog/[slug].mdx
SLUG: [slug]
KEYWORD: [primary keyword]
CATEGORY: [category]
WORD_COUNT: ~[n]
AFFILIATE_DISCLOSURE: [true/false]
INTERNAL_LINKS: [count]
RELATED_POSTS: [href, href]
QUALITY_GATE: PASS
NOTES: [brief notes or "none"]
```
