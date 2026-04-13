import type { NavItem, FooterNav } from '@/types'

// ─── Header navigation ────────────────────────────────────────────────────────

export const primaryNav: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'MTD for Sole Traders',
    href: '/mtd-for-sole-traders',
    children: [
      { label: 'What is MTD?', href: '/mtd-for-sole-traders/what-is-mtd-income-tax' },
      { label: 'Am I Affected?', href: '/mtd-for-sole-traders/am-i-affected' },
      { label: 'Key Deadlines', href: '/mtd-for-sole-traders/deadlines' },
      { label: 'Records to Keep', href: '/mtd-for-sole-traders/records-you-need-to-keep' },
      { label: 'Spreadsheets & MTD', href: '/mtd-for-sole-traders/spreadsheets' },
      { label: 'Sole Traders & Landlords', href: '/mtd-for-sole-traders/sole-trader-and-landlord-income' },
    ],
  },
  {
    label: 'Software',
    href: '/software',
    children: [
      { label: 'All Software', href: '/software' },
      { label: 'Best for Sole Traders', href: '/software/best-mtd-software-for-sole-traders' },
      { label: 'Free Software', href: '/software/best-free-mtd-software' },
      { label: 'Cheapest Options', href: '/software/cheapest-mtd-software' },
      { label: 'Best for Spreadsheet Users', href: '/software/best-mtd-software-for-spreadsheet-users' },
    ],
  },
  { label: 'Comparisons', href: '/comparisons' },
  { label: 'Tools', href: '/tools' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
]

// ─── Footer navigation ────────────────────────────────────────────────────────

export const footerNav: FooterNav = {
  columns: [
    {
      title: 'MTD Guides',
      links: [
        { label: 'What is MTD?', href: '/mtd-for-sole-traders/what-is-mtd-income-tax' },
        { label: 'Am I Affected?', href: '/mtd-for-sole-traders/am-i-affected' },
        { label: 'Key Deadlines', href: '/mtd-for-sole-traders/deadlines' },
        { label: 'Records to Keep', href: '/mtd-for-sole-traders/records-you-need-to-keep' },
        { label: 'Spreadsheets & MTD', href: '/mtd-for-sole-traders/spreadsheets' },
        { label: 'Sole Traders & Landlords', href: '/mtd-for-sole-traders/sole-trader-and-landlord-income' },
      ],
    },
    {
      title: 'Software',
      links: [
        { label: 'All MTD Software', href: '/software' },
        { label: 'Best for Sole Traders', href: '/software/best-mtd-software-for-sole-traders' },
        { label: 'Free MTD Software', href: '/software/best-free-mtd-software' },
        { label: 'Cheapest Options', href: '/software/cheapest-mtd-software' },
        { label: 'Best for Spreadsheets', href: '/software/best-mtd-software-for-spreadsheet-users' },
        { label: 'Compare All Software', href: '/comparisons' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Eligibility Checker', href: '/tools/mtd-eligibility-checker' },
        { label: 'Software Chooser', href: '/tools/mtd-software-chooser' },
        { label: 'Blog', href: '/blog' },
        { label: 'About Us', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'Sources & Methodology', href: '/sources-methodology' },
      ],
    },
  ],
  legal: [
    { label: 'About', href: '/about' },
    { label: 'Editorial Policy', href: '/editorial-policy' },
    { label: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms and Conditions', href: '/terms-and-conditions' },
    { label: 'Contact', href: '/contact' },
    { label: 'Sources & Methodology', href: '/sources-methodology' },
  ],
}

// ─── Sitemap static routes ─────────────────────────────────────────────────────

export const sitemapRoutes: Array<{
  path: string
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number
}> = [
  { path: '/mtd-for-sole-traders', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/mtd-for-sole-traders/what-is-mtd-income-tax', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/mtd-for-sole-traders/am-i-affected', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/mtd-for-sole-traders/deadlines', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/mtd-for-sole-traders/records-you-need-to-keep', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/mtd-for-sole-traders/spreadsheets', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/mtd-for-sole-traders/sole-trader-and-landlord-income', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/software', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/software/best-mtd-software-for-sole-traders', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/software/best-free-mtd-software', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/software/cheapest-mtd-software', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/software/best-mtd-software-for-spreadsheet-users', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/comparisons', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/comparisons/free-vs-paid-mtd-software', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/comparisons/quickbooks-vs-sage', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/comparisons/xero-vs-freeagent', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/comparisons/xero-vs-quickbooks', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/reviews', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/reviews/freeagent', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/reviews/quickbooks', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/reviews/sage', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/reviews/xero', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/tools', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/tools/mtd-eligibility-checker', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/tools/mtd-software-chooser', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/about', changeFrequency: 'yearly', priority: 0.5 },
  { path: '/contact', changeFrequency: 'yearly', priority: 0.4 },
  { path: '/editorial-policy', changeFrequency: 'yearly', priority: 0.4 },
  { path: '/affiliate-disclosure', changeFrequency: 'yearly', priority: 0.4 },
  { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms-and-conditions', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/sources-methodology', changeFrequency: 'yearly', priority: 0.4 },
]

// ─── Blog page metadata ────────────────────────────────────────────────────────

export const blogPageMeta = {
  title: 'MTD Blog: News and Guides for Sole Traders',
  heading: 'MTD News and Guides for Sole Traders',
  description:
    'Plain-English articles on Making Tax Digital, software options, quarterly deadlines, and everything in between — written for UK sole traders, freelancers, and landlords.',
}
