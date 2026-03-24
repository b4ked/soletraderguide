import type { NavItem } from '@/types'

export const primaryNav: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'MTD for Sole Traders',
    href: '/mtd-for-sole-traders',
    children: [
      {
        label: 'What is MTD?',
        href: '/mtd-for-sole-traders/what-is-mtd-income-tax',
      },
      {
        label: 'Am I Affected?',
        href: '/mtd-for-sole-traders/am-i-affected',
      },
      {
        label: 'Key Deadlines',
        href: '/mtd-for-sole-traders/deadlines',
      },
      {
        label: 'Records to Keep',
        href: '/mtd-for-sole-traders/records-you-need-to-keep',
      },
      {
        label: 'Spreadsheets & MTD',
        href: '/mtd-for-sole-traders/spreadsheets',
      },
      {
        label: 'Sole Traders & Landlords',
        href: '/mtd-for-sole-traders/sole-trader-and-landlord-income',
      },
    ],
  },
  {
    label: 'Software',
    href: '/software',
    children: [
      {
        label: 'All Software',
        href: '/software',
      },
      {
        label: 'Best for Sole Traders',
        href: '/software/best-mtd-software-for-sole-traders',
      },
      {
        label: 'Free Software',
        href: '/software/best-free-mtd-software',
      },
      {
        label: 'Cheapest Options',
        href: '/software/cheapest-mtd-software',
      },
      {
        label: 'Best for Spreadsheet Users',
        href: '/software/best-mtd-software-for-spreadsheet-users',
      },
    ],
  },
  {
    label: 'Comparisons',
    href: '/comparisons',
  },
  {
    label: 'Tools',
    href: '/tools',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'About',
    href: '/about',
  },
]

export const footerNav = {
  mtdGuides: [
    { label: 'What is MTD?', href: '/mtd-for-sole-traders/what-is-mtd-income-tax' },
    { label: 'Am I Affected?', href: '/mtd-for-sole-traders/am-i-affected' },
    { label: 'Key Deadlines', href: '/mtd-for-sole-traders/deadlines' },
    { label: 'Records to Keep', href: '/mtd-for-sole-traders/records-you-need-to-keep' },
    { label: 'Spreadsheets & MTD', href: '/mtd-for-sole-traders/spreadsheets' },
    { label: 'Sole Traders & Landlords', href: '/mtd-for-sole-traders/sole-trader-and-landlord-income' },
  ],
  software: [
    { label: 'All MTD Software', href: '/software' },
    { label: 'Best for Sole Traders', href: '/software/best-mtd-software-for-sole-traders' },
    { label: 'Free MTD Software', href: '/software/best-free-mtd-software' },
    { label: 'Cheapest Options', href: '/software/cheapest-mtd-software' },
    { label: 'Best for Spreadsheets', href: '/software/best-mtd-software-for-spreadsheet-users' },
    { label: 'Compare All Software', href: '/comparisons' },
  ],
  resources: [
    { label: 'Eligibility Checker', href: '/tools/mtd-eligibility-checker' },
    { label: 'Software Chooser', href: '/tools/mtd-software-chooser' },
    { label: 'Blog', href: '/blog' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Sources & Methodology', href: '/sources-methodology' },
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
