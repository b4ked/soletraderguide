'use client'

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { FAQSchema } from '@/components/seo/FAQSchema'
import { trackFAQExpand } from '@/lib/analytics'
import type { FAQ } from '@/types'
import { cn } from '@/lib/utils'

interface FAQAccordionProps {
  faqs: FAQ[]
  /**
   * Heading level for individual FAQ questions.
   * Use 'h2' when the FAQ is the primary section, 'h3' when nested.
   */
  headingLevel?: 'h2' | 'h3'
  /** Whether to include the FAQPage JSON-LD schema. */
  includeSchema?: boolean
  className?: string
}

/**
 * Renders an accessible FAQ accordion with optional schema.org FAQPage JSON-LD.
 * Uses the shadcn Accordion component under the hood.
 */
export function FAQAccordion({
  faqs,
  headingLevel = 'h3',
  includeSchema = true,
  className,
}: FAQAccordionProps) {
  return (
    <>
      {includeSchema && <FAQSchema faqs={faqs} />}

      <Accordion
        className={cn('divide-y divide-border rounded-lg border border-border', className)}
      >
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`faq-${index}`} className="px-5">
            <AccordionTrigger
              className="py-4 text-base font-medium text-left hover:no-underline"
              onClick={() => trackFAQExpand(faq.question)}
            >
              {headingLevel === 'h2' ? (
                <h2 className="text-base font-medium m-0">{faq.question}</h2>
              ) : (
                <h3 className="text-base font-medium m-0">{faq.question}</h3>
              )}
            </AccordionTrigger>
            <AccordionContent>
              <div className="text-muted-foreground leading-relaxed pb-1">
                {faq.answer}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  )
}
