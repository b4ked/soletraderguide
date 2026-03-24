'use client'

import { useState } from 'react'
import { ArrowLeft, ChevronRight, Star } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { trackToolStart, trackToolComplete } from '@/lib/analytics'
import { allProviders } from '@/data/providers'
import type { SoftwareRecommendation } from '@/types'

type IncomeLevel = 'over-50k' | '30k-50k' | 'under-30k' | null
type ComfortLevel = 'confident' | 'some-experience' | 'beginner' | null
type UsesSpreadsheets = 'yes-want-to-keep' | 'yes-willing-to-change' | 'no' | null
type Priority = 'price' | 'ease' | 'features' | 'uk-support' | null
type NatWestRBS = 'yes' | 'no' | null

interface FormState {
  step: number
  incomeLevel: IncomeLevel
  comfortLevel: ComfortLevel
  usesSpreadsheets: UsesSpreadsheets
  priority: Priority
  natWestRbs: NatWestRBS
}

const TOTAL_STEPS = 5

/**
 * Multi-step software recommendation tool.
 * Guides sole traders to the best MTD software based on their needs.
 */
export function SoftwareChooserForm() {
  const [state, setState] = useState<FormState>({
    step: 1,
    incomeLevel: null,
    comfortLevel: null,
    usesSpreadsheets: null,
    priority: null,
    natWestRbs: null,
  })
  const [result, setResult] = useState<SoftwareRecommendation | null>(null)
  const [started, setStarted] = useState(false)

  const handleStart = () => {
    setStarted(true)
    trackToolStart('software-chooser')
  }

  const handleNext = (updates: Partial<FormState>) => {
    const nextState = { ...state, ...updates }

    if (nextState.step === TOTAL_STEPS + 1) {
      const rec = calculateRecommendation(nextState)
      setResult(rec)
      trackToolComplete('software-chooser', rec.provider)
    } else {
      setState(nextState)
    }
  }

  const handleBack = () => {
    if (state.step === 1) {
      setStarted(false)
    } else {
      setState((prev) => ({ ...prev, step: prev.step - 1 }))
    }
    setResult(null)
  }

  const handleReset = () => {
    setState({
      step: 1,
      incomeLevel: null,
      comfortLevel: null,
      usesSpreadsheets: null,
      priority: null,
      natWestRbs: null,
    })
    setResult(null)
    setStarted(false)
  }

  if (!started) {
    return <IntroScreen onStart={handleStart} />
  }

  if (result) {
    return <ResultScreen result={result} onReset={handleReset} />
  }

  return (
    <div className="rounded-xl border border-border bg-white p-6 sm:p-8">
      <ProgressBar current={state.step} total={TOTAL_STEPS} />

      <div className="mt-6">
        {state.step === 1 && (
          <StepIncome
            value={state.incomeLevel}
            onNext={(v) => handleNext({ incomeLevel: v, step: 2 })}
          />
        )}
        {state.step === 2 && (
          <StepComfort
            value={state.comfortLevel}
            onNext={(v) => handleNext({ comfortLevel: v, step: 3 })}
          />
        )}
        {state.step === 3 && (
          <StepSpreadsheets
            value={state.usesSpreadsheets}
            onNext={(v) => handleNext({ usesSpreadsheets: v, step: 4 })}
          />
        )}
        {state.step === 4 && (
          <StepPriority
            value={state.priority}
            onNext={(v) => handleNext({ priority: v, step: 5 })}
          />
        )}
        {state.step === 5 && (
          <StepNatWestRBS
            value={state.natWestRbs}
            onNext={(v) => handleNext({ natWestRbs: v, step: 6 })}
          />
        )}
      </div>

      <button
        onClick={handleBack}
        className="mt-6 flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="size-3.5" />
        Back
      </button>
    </div>
  )
}

/* ---------------------------------------------------------------
   Intro screen
--------------------------------------------------------------- */

function IntroScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="rounded-xl border border-border bg-white p-6 sm:p-8 text-center">
      <div className="mx-auto mb-5 inline-flex size-14 items-center justify-center rounded-full bg-brand-light">
        <Star className="size-7 text-brand" aria-hidden="true" />
      </div>
      <h2 className="text-xl font-bold text-foreground mb-2">Software Recommender</h2>
      <p className="text-sm text-muted-foreground max-w-sm mx-auto mb-6">
        Answer 5 quick questions and we&apos;ll recommend the best MTD-compatible software
        for your situation.
      </p>
      <button
        onClick={onStart}
        className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
      >
        Find my software
        <ChevronRight className="size-4" />
      </button>
      <p className="mt-4 text-xs text-muted-foreground">
        Takes about 60 seconds. Personalised, unbiased guidance.
      </p>
    </div>
  )
}

/* ---------------------------------------------------------------
   Progress bar
--------------------------------------------------------------- */

function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = Math.round(((current - 1) / total) * 100)
  return (
    <div>
      <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
        <span>Step {current} of {total}</span>
        <span>{pct}% complete</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full bg-brand transition-all duration-300"
          style={{ width: `${pct}%` }}
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  )
}

/* ---------------------------------------------------------------
   Step components
--------------------------------------------------------------- */

function StepIncome({
  value,
  onNext,
}: {
  value: IncomeLevel
  onNext: (v: IncomeLevel) => void
}) {
  return (
    <Fieldset
      legend="What is your approximate annual income from self-employment or property?"
      description="This helps us gauge how urgently you need to act and which plans are appropriate."
    >
      <Options>
        <OptionButton
          label="Over £50,000"
          description="MTD is mandatory for you from April 2026."
          selected={value === 'over-50k'}
          onClick={() => onNext('over-50k')}
        />
        <OptionButton
          label="£30,001 – £50,000"
          description="MTD will be mandatory from April 2027."
          selected={value === '30k-50k'}
          onClick={() => onNext('30k-50k')}
        />
        <OptionButton
          label="£30,000 or less"
          description="No confirmed mandatory date yet."
          selected={value === 'under-30k'}
          onClick={() => onNext('under-30k')}
        />
      </Options>
    </Fieldset>
  )
}

function StepComfort({
  value,
  onNext,
}: {
  value: ComfortLevel
  onNext: (v: ComfortLevel) => void
}) {
  return (
    <Fieldset
      legend="How comfortable are you with accounting software?"
      description="We'll tailor our recommendation to your experience level."
    >
      <Options>
        <OptionButton
          label="Confident — I've used accounting software before"
          description="You're happy to explore features and set things up yourself."
          selected={value === 'confident'}
          onClick={() => onNext('confident')}
        />
        <OptionButton
          label="Some experience — I've tried it a little"
          description="You know the basics but prefer something straightforward."
          selected={value === 'some-experience'}
          onClick={() => onNext('some-experience')}
        />
        <OptionButton
          label="Beginner — I prefer things simple"
          description="You want something easy to set up and use from day one."
          selected={value === 'beginner'}
          onClick={() => onNext('beginner')}
        />
      </Options>
    </Fieldset>
  )
}

function StepSpreadsheets({
  value,
  onNext,
}: {
  value: UsesSpreadsheets
  onNext: (v: UsesSpreadsheets) => void
}) {
  return (
    <Fieldset
      legend="Do you currently use spreadsheets for your records?"
      description="Some MTD solutions let you keep your spreadsheet workflow."
    >
      <Options>
        <OptionButton
          label="Yes, and I want to keep using spreadsheets"
          description="You'll need bridging software to submit to HMRC."
          selected={value === 'yes-want-to-keep'}
          onClick={() => onNext('yes-want-to-keep')}
        />
        <OptionButton
          label="Yes, but I'm willing to switch"
          description="You're open to a dedicated accounting app."
          selected={value === 'yes-willing-to-change'}
          onClick={() => onNext('yes-willing-to-change')}
        />
        <OptionButton
          label="No, I don't use spreadsheets"
          description="You prefer an all-in-one accounting solution."
          selected={value === 'no'}
          onClick={() => onNext('no')}
        />
      </Options>
    </Fieldset>
  )
}

function StepPriority({
  value,
  onNext,
}: {
  value: Priority
  onNext: (v: Priority) => void
}) {
  return (
    <Fieldset
      legend="What matters most to you when choosing software?"
      description="Pick the single most important factor for your decision."
    >
      <Options>
        <OptionButton
          label="Price — I want the cheapest option"
          description="Keeping costs down is the top priority."
          selected={value === 'price'}
          onClick={() => onNext('price')}
        />
        <OptionButton
          label="Ease of use — I want something simple"
          description="A clean, intuitive interface matters most."
          selected={value === 'ease'}
          onClick={() => onNext('ease')}
        />
        <OptionButton
          label="Features — I want comprehensive tools"
          description="Reporting, integrations, and advanced features are important."
          selected={value === 'features'}
          onClick={() => onNext('features')}
        />
        <OptionButton
          label="UK support — I want a UK-focused company"
          description="UK-based support and a focus on HMRC compliance."
          selected={value === 'uk-support'}
          onClick={() => onNext('uk-support')}
        />
      </Options>
    </Fieldset>
  )
}

function StepNatWestRBS({
  value,
  onNext,
}: {
  value: NatWestRBS
  onNext: (v: NatWestRBS) => void
}) {
  return (
    <Fieldset
      legend="Do you have a business bank account with NatWest or RBS?"
      description="If so, you may be eligible for free FreeAgent access."
    >
      <Options>
        <OptionButton
          label="Yes — NatWest or RBS business account"
          description="You may get FreeAgent for free as part of your account."
          selected={value === 'yes'}
          onClick={() => onNext('yes')}
        />
        <OptionButton
          label="No — I bank elsewhere"
          description="You'll need to pay for software directly."
          selected={value === 'no'}
          onClick={() => onNext('no')}
        />
      </Options>
    </Fieldset>
  )
}

/* ---------------------------------------------------------------
   Shared UI primitives
--------------------------------------------------------------- */

function Fieldset({
  legend,
  description,
  children,
}: {
  legend: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <fieldset>
      <legend className="text-lg font-semibold text-foreground mb-1">{legend}</legend>
      {description && (
        <p className="text-sm text-muted-foreground mb-5">{description}</p>
      )}
      {children}
    </fieldset>
  )
}

function Options({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 gap-3">{children}</div>
}

function OptionButton({
  label,
  description,
  selected,
  onClick,
}: {
  label: string
  description: string
  selected: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'w-full rounded-lg border-2 px-4 py-3.5 text-left transition-all',
        'hover:border-brand hover:bg-brand-light/50',
        'focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2',
        selected ? 'border-brand bg-brand-light' : 'border-border bg-white'
      )}
    >
      <span className="block text-sm font-semibold text-foreground">{label}</span>
      <span className="block text-xs text-muted-foreground mt-0.5">{description}</span>
    </button>
  )
}

/* ---------------------------------------------------------------
   Result screen
--------------------------------------------------------------- */

function ResultScreen({
  result,
  onReset,
}: {
  result: SoftwareRecommendation
  onReset: () => void
}) {
  const provider = allProviders.find((p) => p.slug === result.slug)

  return (
    <div className="rounded-xl border border-border bg-white p-6 sm:p-8">
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-1">
          Our recommendation
        </p>
        <h2 className="text-2xl font-bold text-foreground">{result.provider}</h2>
        <div className="mt-2 flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                'size-4',
                i < result.score
                  ? 'fill-amber-400 text-amber-400'
                  : 'fill-muted text-muted-foreground'
              )}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>

      {/* Reason */}
      <div className="rounded-lg border border-border bg-muted/30 p-4 mb-6">
        <p className="text-sm text-foreground leading-relaxed">{result.reason}</p>
      </div>

      {/* Provider snapshot */}
      {provider && (
        <div className="mb-6 space-y-2">
          <h3 className="text-sm font-semibold text-foreground">Why {provider.name}?</h3>
          <ul className="space-y-1.5">
            {provider.pros.slice(0, 4).map((pro, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 size-1.5 rounded-full bg-brand shrink-0" aria-hidden="true" />
                {pro}
              </li>
            ))}
          </ul>
          <p className="text-sm text-brand font-medium pt-1">{provider.pricingSummary}</p>
        </div>
      )}

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href={`/software/${result.slug}`}
          className="flex-1 rounded-lg border border-border px-4 py-2.5 text-center text-sm font-medium text-foreground hover:border-brand hover:text-brand transition-colors"
        >
          Read full review
        </Link>
        {provider && (
          <a
            href={provider.affiliateLink}
            target="_blank"
            rel="noopener sponsored"
            className="flex-1 rounded-lg bg-[var(--cta)] px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-[var(--cta-hover)] transition-colors"
          >
            Try {provider.name} free
          </a>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={onReset}
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          Start again
        </button>
        <Link
          href="/comparisons"
          className="text-xs text-brand hover:underline underline-offset-2"
        >
          Compare all software
        </Link>
      </div>

      <p className="mt-5 text-xs text-muted-foreground text-center">
        We may earn a commission if you sign up through our links. This does not affect our
        recommendations.
      </p>
    </div>
  )
}

/* ---------------------------------------------------------------
   Recommendation logic
--------------------------------------------------------------- */

function calculateRecommendation(state: FormState): SoftwareRecommendation {
  const { natWestRbs, priority, comfortLevel, usesSpreadsheets } = state

  // NatWest/RBS + price sensitive → FreeAgent (free access)
  if (natWestRbs === 'yes') {
    return {
      provider: 'FreeAgent',
      slug: 'freeagent',
      score: 5,
      reason:
        'Because you bank with NatWest or RBS, you may be eligible for FreeAgent completely free of charge as part of your business banking package. FreeAgent is purpose-built for freelancers and sole traders, is fully HMRC-recognised, and includes self-assessment filing — making it exceptional value.',
    }
  }

  // Wants to keep spreadsheets → guide to bridging software
  if (usesSpreadsheets === 'yes-want-to-keep') {
    return {
      provider: 'QuickBooks',
      slug: 'quickbooks',
      score: 4,
      reason:
        'If you want to keep your spreadsheet workflow, you will need bridging software to submit your quarterly updates to HMRC. QuickBooks offers import features that can work alongside existing records, or you could look at specialist bridging tools like Absolute Bridging or Cirrostratus. QuickBooks Self-Employed is also a solid lightweight option if you want to transition gradually.',
    }
  }

  // Priority: price → QuickBooks (cheapest at £14/month)
  if (priority === 'price') {
    return {
      provider: 'QuickBooks',
      slug: 'quickbooks',
      score: 4,
      reason:
        'QuickBooks offers the lowest starting price among full-featured MTD accounting packages, from £14/month. The Self-Employed plan (from £8/month) is even cheaper for straightforward sole traders. It is fully HMRC-recognised and covers all MTD Income Tax requirements.',
    }
  }

  // Priority: ease + beginner → FreeAgent
  if (priority === 'ease' || comfortLevel === 'beginner') {
    return {
      provider: 'FreeAgent',
      slug: 'freeagent',
      score: 5,
      reason:
        'FreeAgent is specifically designed for freelancers and sole traders — not adapted from a complex business tool. Its tax timeline dashboard makes MTD deadlines easy to understand, and its interface is clean and jargon-free. It also includes self-assessment filing, saving you extra effort at year end.',
    }
  }

  // Priority: UK support → Sage
  if (priority === 'uk-support') {
    return {
      provider: 'Sage',
      slug: 'sage',
      score: 4,
      reason:
        'Sage is a UK company with UK-based customer support — a genuine differentiator. Sage Accounting Start is designed for sole traders needing MTD compliance, with strong invoicing tools and a focus on HMRC regulations. Frequent promotional offers can also reduce the cost significantly.',
    }
  }

  // Priority: features + confident → Xero
  if (priority === 'features' || comfortLevel === 'confident') {
    return {
      provider: 'Xero',
      slug: 'xero',
      score: 4,
      reason:
        'Xero is the most feature-rich option for growing sole traders who need strong integrations, a powerful mobile app, and comprehensive bank feeds. With over 800 app integrations, it scales well as your business grows. It is fully HMRC-recognised and handles all MTD quarterly updates and EOPS automatically.',
    }
  }

  // Default → FreeAgent
  return {
    provider: 'FreeAgent',
    slug: 'freeagent',
    score: 5,
    reason:
      'FreeAgent is our top recommendation for most sole traders and freelancers. It is purpose-built for self-employed people, includes self-assessment filing in every plan, and provides a clear tax timeline to keep you on track with MTD deadlines. If you bank with NatWest or RBS, you may get it free.',
  }
}
