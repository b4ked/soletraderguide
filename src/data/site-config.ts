export const siteConfig = {
  name: 'SoleTraderGuide',
  domain: 'soletraderguide.co.uk',
  url: 'https://soletraderguide.co.uk',
  description:
    'Plain-English guidance on Making Tax Digital for sole traders. Compare MTD software, check your eligibility, and find the right solution for your business.',
  ogImage: '/og-image.jpg',
  twitter: '',
  email: 'hello@soletraderguide.co.uk',
  publisherName: 'SoleTraderGuide',
  lastReviewedDate: '2025-03-01',
  editorialEmail: 'editorial@soletraderguide.co.uk',
}

export const mtdConfig = {
  currentThreshold: 50000, // £50,000 annual income
  nextThreshold: 30000, // £30,000 from April 2027
  mandatoryDate: 'April 2026',
  nextMandatoryDate: 'April 2027',
  quarterlyDeadlines: [
    { period: 'Q1', covers: '6 April – 5 July', deadline: '7 August' },
    { period: 'Q2', covers: '6 July – 5 October', deadline: '7 November' },
    { period: 'Q3', covers: '6 October – 5 January', deadline: '7 February' },
    { period: 'Q4', covers: '6 January – 5 April', deadline: '7 May' },
  ],
  eopsDeadline: '31 January (following the tax year)',
}
