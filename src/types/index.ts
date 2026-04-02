/**
 * SoleTraderGuide type extensions.
 * Re-exports all base types and extends Provider with STG-specific optional fields.
 */
export type {
  SiteConfig,
  NavItem,
  FooterNavColumn,
  FooterNav,
  PageMeta,
  FAQ,
  RelatedPage,
  BlogPost,
  BlogPostFrontmatter,
  BlogPostMeta,
  GuideSection,
  BreadcrumbItem,
  ComparisonFeature,
  EligibilityResult,
  SoftwareRecommendation,
} from '../../base/src/types/index'

import type { Provider as BaseProvider } from '../../base/src/types/index'

/** STG-extended Provider — includes all base fields plus MTD-specific fields */
export interface Provider extends BaseProvider {
  /** Whether the provider's software natively handles spreadsheet-based workflows (e.g. MTD bridging) */
  supportsSpreadsheetWorkflow?: boolean
  /** Whether the provider is HMRC-recognised for MTD Income Tax */
  mtdCompatible?: boolean
  /** Whether the provider explicitly supports sole traders */
  supportsSoleTraders?: boolean
  /** Whether the provider supports landlord income alongside self-employment */
  supportsLandlords?: boolean
  /** Legacy score field — maps to suitabilityScore; kept for data backwards compat */
  mtdSuitabilityScore?: number
  /** Legacy notes field — maps to notes; kept for data backwards compat */
  mtdNotes?: string
}
