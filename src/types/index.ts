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
  supportsSoleTraders: boolean
  supportsLandlords: boolean
  supportsSpreadsheetWorkflow: boolean
  mtdCompatible: boolean
  mtdSuitabilityScore: number // 1-5
  pros: string[]
  cons: string[]
  keyFeatures: string[]
  mtdNotes: string
  pricingUrl: string
  affiliateEnabled: boolean
  affiliateLink: string
  notes: string
  category: 'full-accounting' | 'mtd-bridging' | 'free' | 'spreadsheet-addon'
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
