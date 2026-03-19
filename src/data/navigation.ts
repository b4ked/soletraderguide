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
        href: '/mtd-for-sole-traders/what-is-mtd',
      },
      {
        label: 'Am I Affected?',
        href: '/mtd-for-sole-traders/am-i-affected',
      },
      {
        label: 'Key Deadlines',
        href: '/mtd-for-sole-traders/key-deadlines',
      },
      {
        label: 'Records to Keep',
        href: '/mtd-for-sole-traders/records-to-keep',
      },
      {
        label: 'Spreadsheets & MTD',
        href: '/mtd-for-sole-traders/spreadsheets-and-mtd',
      },
      {
        label: 'Sole Traders & Landlords',
        href: '/mtd-for-sole-traders/sole-traders-and-landlords',
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
        href: '/software/best-for-sole-traders',
      },
      {
        label: 'Free Software',
        href: '/software/free',
      },
      {
        label: 'Cheapest Options',
        href: '/software/cheapest',
      },
      {
        label: 'Best for Spreadsheet Users',
        href: '/software/spreadsheet-users',
      },
    ],
  },
  {
    label: 'Comparisons',
    href: '/compare',
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
    { label: 'What is MTD?', href: '/mtd-for-sole-traders/what-is-mtd' },
    { label: 'Am I Affected?', href: '/mtd-for-sole-traders/am-i-affected' },
    { label: 'Key Deadlines', href: '/mtd-for-sole-traders/key-deadlines' },
    { label: 'Records to Keep', href: '/mtd-for-sole-traders/records-to-keep' },
    { label: 'Spreadsheets & MTD', href: '/mtd-for-sole-traders/spreadsheets-and-mtd' },
    { label: 'Sole Traders & Landlords', href: '/mtd-for-sole-traders/sole-traders-and-landlords' },
  ],
  software: [
    { label: 'All MTD Software', href: '/software' },
    { label: 'Best for Sole Traders', href: '/software/best-for-sole-traders' },
    { label: 'Free MTD Software', href: '/software/free' },
    { label: 'Cheapest Options', href: '/software/cheapest' },
    { label: 'Best for Spreadsheets', href: '/software/spreadsheet-users' },
    { label: 'Compare All Software', href: '/compare' },
  ],
  resources: [
    { label: 'Eligibility Checker', href: '/tools/eligibility-checker' },
    { label: 'Software Chooser', href: '/tools/software-chooser' },
    { label: 'Blog', href: '/blog' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Sources & Methodology', href: '/sources' },
  ],
  legal: [
    { label: 'About', href: '/about' },
    { label: 'Editorial Policy', href: '/editorial-policy' },
    { label: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms and Conditions', href: '/terms' },
    { label: 'Contact', href: '/contact' },
    { label: 'Sources & Methodology', href: '/sources' },
  ],
}
