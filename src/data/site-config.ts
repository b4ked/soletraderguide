import type { SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
  name: 'SoleTraderGuide',
  domain: 'soletraderguide.co.uk',
  url: 'https://soletraderguide.co.uk',
  description:
    'Plain-English guidance on Making Tax Digital for sole traders. Compare MTD software, check your eligibility, and find the right solution for your business.',
  tagline: 'MTD for Sole Traders, Explained Simply',
  domainSuffix: '.co.uk',
  ogImage: '/og-image.jpg',
  twitter: '',
  email: 'hello@soletraderguide.co.uk',
  publisherName: 'SoleTraderGuide',
  lastReviewedDate: '2026-03-31',
  editorialEmail: 'editorial@soletraderguide.co.uk',
  mobileCta: { label: 'Compare Software', href: '/comparisons' },
  headerCta: { label: 'Compare Software', href: '/comparisons' },
}

export const mtdConfig = {
  // Phase rollout — qualifying income = gross self-employment + UK property income (before expenses)
  phases: [
    { phase: 1, threshold: 50000, mandatoryFrom: 'April 2026', label: 'Over £50,000' },
    { phase: 2, threshold: 30000, mandatoryFrom: 'April 2027', label: 'Over £30,000' },
    { phase: 3, threshold: 20000, mandatoryFrom: 'April 2028', label: 'Over £20,000' },
  ],
  currentThreshold: 50000,
  nextThreshold: 30000,
  thirdThreshold: 20000,
  mandatoryDate: 'April 2026',
  nextMandatoryDate: 'April 2027',
  thirdMandatoryDate: 'April 2028',
  // Standard tax-year quarters (default). Calendar quarter election also available.
  quarterlyDeadlines: [
    { period: 'Q1', covers: '6 April – 5 July', deadline: '7 August' },
    { period: 'Q2', covers: '6 July – 5 October', deadline: '7 November' },
    { period: 'Q3', covers: '6 October – 5 January', deadline: '7 February' },
    { period: 'Q4', covers: '6 January – 5 April', deadline: '7 May' },
  ],
  // Calendar quarter alternative (optional election before first submission)
  calendarQuarterDeadlines: [
    { period: 'Q1', covers: '1 April – 30 June', deadline: '7 August' },
    { period: 'Q2', covers: '1 July – 30 September', deadline: '7 November' },
    { period: 'Q3', covers: '1 October – 31 December', deadline: '7 February' },
    { period: 'Q4', covers: '1 January – 31 March', deadline: '7 May' },
  ],
  finalDeclarationDeadline: '31 January (following the tax year)',
  eopsDeadline: '31 January (following the tax year)',
  softLandingYear: '2026/27',
  qualifyingIncomeNote: 'Qualifying income is gross self-employment turnover plus gross UK property income — before expenses. PAYE wages, dividends, and savings interest do NOT count toward the threshold.',
}
