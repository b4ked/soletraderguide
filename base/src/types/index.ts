// Site configuration type — implement this in src/data/site-config.ts per site
export interface SiteConfig {
  name: string
  domain: string
  url: string
  description: string
  /** Short tagline used in the root layout <title> default. Falls back to description. */
  tagline?: string
  /** Optional domain suffix shown in footer logo (e.g. '.co.uk'). Omit if not needed. */
  domainSuffix?: string
  /** Custom footer disclaimer text. Defaults to generic affiliate independence statement. */
  footerDisclaimer?: string
  ogImage: string
  twitter: string
  email: string
  publisherName: string
  lastReviewedDate: string
  editorialEmail: string
  /** Optional CTA button shown in header/mobile menu (e.g. "Compare Software" → /comparisons) */
  mobileCta?: { label: string; href: string }
  /** Optional desktop header CTA (falls back to mobileCta if not set) */
  headerCta?: { label: string; href: string }
}

// Provider/Software types
export interface Provider {
  id: string
  name: string
  slug: string
  logo: string // path to logo file
  tagline: string
  bestFor: string[]
  pricingSummary: string
  monthlyPrice: number | null // lowest monthly price in GBP
  hasFreePlan: boolean
  hasFreeTrialDays: number | null
  pros: string[]
  cons: string[]
  keyFeatures: string[]
  pricingUrl: string
  affiliateEnabled: boolean
  affiliateLink: string
  notes: string
  category: string // site-specific — e.g. 'full-accounting', 'crm', 'hosting', etc.
  /** Generic suitability score 1-5 for the target audience of this site */
  suitabilityScore?: number
  /** Commission structure note — shown in comparisons */
  commissionNote?: string
}

// Page/Content types
export interface PageMeta {
  title: string
  description: string
  seoTitle?: string
  seoDescription?: string
  canonicalPath?: string
  noindex?: boolean
  publishedDate?: string
  updatedDate?: string
  author?: string
  reviewer?: string
  pageType: 'guide' | 'review' | 'comparison' | 'tool' | 'blog' | 'legal' | 'homepage' | 'hub'
  category?: string
  tags?: string[]
  affiliateDisclosure?: boolean
  faqs?: FAQ[]
  relatedPages?: RelatedPage[]
}

export interface FAQ {
  question: string
  answer: string
}

export interface RelatedPage {
  title: string
  href: string
  description?: string
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  publishedDate: string
  updatedDate: string
  author: string
  category: string
  tags: string[]
  featured: boolean
}

/** Frontmatter fields for MDX blog posts in src/content/blog/ */
export interface BlogPostFrontmatter {
  title: string
  description: string
  publishedAt: string
  updatedAt: string
  author: string
  category: string
  tags: string[]
  readingTime: string
  affiliateDisclosure?: boolean
  cta?: {
    heading: string
    description: string
    primaryLabel: string
    primaryHref: string
    secondaryLabel?: string
    secondaryHref?: string
  }
  faqs?: Array<{ question: string; answer: string }>
  relatedPosts?: Array<{ title: string; href: string }>
}

/** Slim post metadata used in the blog hub listing */
export interface BlogPostMeta {
  slug: string
  title: string
  description: string
  publishedAt: string
  updatedAt: string
  author: string
  category: string
  tags: string[]
  readingTime: string
}

export interface GuideSection {
  id: string
  heading: string
  content: string
}

// Navigation types
export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
  badge?: string
}

export interface FooterNavColumn {
  title: string
  links: { label: string; href: string }[]
}

export interface FooterNav {
  /** Link columns rendered in the main footer grid */
  columns: FooterNavColumn[]
  /** Legal links rendered in the footer bar */
  legal: { label: string; href: string }[]
}

export interface BreadcrumbItem {
  label: string
  href?: string
}

// Comparison types
export interface ComparisonFeature {
  name: string
  description?: string
  values: Record<string, string | boolean | null>
}

// Tool types
export interface EligibilityResult {
  eligible: boolean
  deadline?: string
  message: string
  explanation: string
  nextSteps: string[]
}

export interface SoftwareRecommendation {
  provider: string
  slug: string
  reason: string
  score: number
}
