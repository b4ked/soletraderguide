'use client'

import { useState } from 'react'
import { CheckCircle, XCircle, AlertCircle, ChevronRight, ArrowLeft } from 'lucide-react'
import { cn } from '@/lib/utils'
import { trackToolStart, trackToolComplete } from '@/lib/analytics'
import { mtdConfig } from '@/data/site-config'
import type { EligibilityResult } from '@/types'
import Link from 'next/link'

type IncomeType = 'self-employed' | 'landlord' | 'both' | null
type IncomeLevel = 'over-50k' | '30k-50k' | 'under-30k' | null
type EmploymentStatus = 'employed-and-self-employed' | 'self-employed-only' | null

interface FormState {
  step: number
  incomeType: IncomeType
  incomeLevel: IncomeLevel
  employmentStatus: EmploymentStatus
}

const TOTAL_STEPS = 3

/**
 * Multi-step eligibility checker tool.
 * Helps sole traders determine if and when they must comply with MTD for Income Tax.
 */
export function EligibilityCheckerForm() {
  const [state, setState] = useState<FormState>({
    step: 1,
    incomeType: null,
    incomeLevel: null,
    employmentStatus: null,
  })
  const [result, setResult] = useState<EligibilityResult | null>(null)
  const [started, setStarted] = useState(false)

  const handleStart = () => {
    setStarted(true)
    trackToolStart('eligibility-checker')
  }

  const handleNext = (updates: Partial<FormState>) => {
    const nextState = { ...state, ...updates }

    if (nextState.step === TOTAL_STEPS + 1) {
      // Calculate result
      const eligibility = calculateEligibility(nextState)
      setResult(eligibility)
      trackToolComplete('eligibility-checker', eligibility.message)
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
    setState({ step: 1, incomeType: null, incomeLevel: null, employmentStatus: null })
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
      {/* Progress bar */}
      <ProgressBar current={state.step} total={TOTAL_STEPS} />

      {/* Step content */}
      <div className="mt-6">
        {state.step === 1 && (
          <Step1
            value={state.incomeType}
            onNext={(incomeType) =>
              handleNext({ incomeType, step: 2 })
            }
          />
        )}
        {state.step === 2 && (
          <Step2
            value={state.incomeLevel}
            onNext={(incomeLevel) =>
              handleNext({ incomeLevel, step: 3 })
            }
          />
        )}
        {state.step === 3 && (
          <Step3
            value={state.employmentStatus}
            onNext={(employmentStatus) =>
              handleNext({ employmentStatus, step: 4 })
            }
          />
        )}
      </div>

      {/* Back button */}
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
        <CheckCircle className="size-7 text-brand" aria-hidden="true" />
      </div>
      <h2 className="text-xl font-bold text-foreground mb-2">MTD Eligibility Checker</h2>
      <p className="text-sm text-muted-foreground max-w-sm mx-auto mb-6">
        Answer 3 quick questions to find out whether Making Tax Digital for Income Tax applies
        to you and when you need to be ready.
      </p>
      <button
        onClick={onStart}
        className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
      >
        Check my eligibility
        <ChevronRight className="size-4" />
      </button>
      <p className="mt-4 text-xs text-muted-foreground">
        Takes about 60 seconds. Not personalised tax advice.
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

function Step1({
  value,
  onNext,
}: {
  value: IncomeType
  onNext: (v: IncomeType) => void
}) {
  return (
    <fieldset>
      <legend className="text-lg font-semibold text-foreground mb-1">
        What is the nature of your income?
      </legend>
      <p className="text-sm text-muted-foreground mb-6">
        MTD for Income Tax applies to different income types.
      </p>
      <div className="grid grid-cols-1 gap-3">
        {[
          { value: 'self-employed' as IncomeType, label: 'Self-employed / Sole trader', desc: 'You earn income from running your own business.' },
          { value: 'landlord' as IncomeType, label: 'Landlord (property income)', desc: 'You earn rental income from UK properties.' },
          { value: 'both' as IncomeType, label: 'Both', desc: 'You have self-employment and property income.' },
        ].map((opt) => (
          <OptionButton
            key={opt.value}
            label={opt.label}
            description={opt.desc}
            selected={value === opt.value}
            onClick={() => onNext(opt.value)}
          />
        ))}
      </div>
    </fieldset>
  )
}

function Step2({
  value,
  onNext,
}: {
  value: IncomeLevel
  onNext: (v: IncomeLevel) => void
}) {
  return (
    <fieldset>
      <legend className="text-lg font-semibold text-foreground mb-1">
        What is your approximate gross annual income from self-employment or property?
      </legend>
      <p className="text-sm text-muted-foreground mb-6">
        This is your turnover <em>before</em> expenses, not profit.
      </p>
      <div className="grid grid-cols-1 gap-3">
        {[
          { value: 'over-50k' as IncomeLevel, label: 'Over £50,000', desc: `Mandatory from ${mtdConfig.mandatoryDate}` },
          { value: '30k-50k' as IncomeLevel, label: '£30,001 – £50,000', desc: `Mandatory from ${mtdConfig.nextMandatoryDate}` },
          { value: 'under-30k' as IncomeLevel, label: '£30,000 or less', desc: 'No mandatory date confirmed yet.' },
        ].map((opt) => (
          <OptionButton
            key={opt.value}
            label={opt.label}
            description={opt.desc}
            selected={value === opt.value}
            onClick={() => onNext(opt.value)}
          />
        ))}
      </div>
    </fieldset>
  )
}

function Step3({
  value,
  onNext,
}: {
  value: EmploymentStatus
  onNext: (v: EmploymentStatus) => void
}) {
  return (
    <fieldset>
      <legend className="text-lg font-semibold text-foreground mb-1">
        Do you also receive income from employment (e.g. a PAYE salary)?
      </legend>
      <p className="text-sm text-muted-foreground mb-6">
        Having both employment and self-employment income doesn't change your MTD obligation,
        but it affects how you complete your EOPS.
      </p>
      <div className="grid grid-cols-1 gap-3">
        {[
          { value: 'employed-and-self-employed' as EmploymentStatus, label: 'Yes — I have PAYE income too', desc: 'You are both employed and self-employed.' },
          { value: 'self-employed-only' as EmploymentStatus, label: 'No — self-employment only', desc: 'Your income comes entirely from self-employment or property.' },
        ].map((opt) => (
          <OptionButton
            key={opt.value}
            label={opt.label}
            description={opt.desc}
            selected={value === opt.value}
            onClick={() => onNext(opt.value)}
          />
        ))}
      </div>
    </fieldset>
  )
}

/* ---------------------------------------------------------------
   Option button
--------------------------------------------------------------- */

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
  result: EligibilityResult
  onReset: () => void
}) {
  const Icon = result.eligible ? CheckCircle : result.deadline ? AlertCircle : XCircle
  const iconColor = result.eligible
    ? 'text-emerald-500'
    : result.deadline
    ? 'text-amber-500'
    : 'text-slate-500'
  const borderColor = result.eligible
    ? 'border-emerald-200'
    : result.deadline
    ? 'border-amber-200'
    : 'border-slate-200'
  const bgColor = result.eligible
    ? 'bg-emerald-50'
    : result.deadline
    ? 'bg-amber-50'
    : 'bg-slate-50'

  return (
    <div className="rounded-xl border border-border bg-white p-6 sm:p-8">
      {/* Result badge */}
      <div className={cn('rounded-xl border p-5 mb-6', borderColor, bgColor)}>
        <div className="flex items-start gap-3">
          <Icon className={cn('size-5 mt-0.5 shrink-0', iconColor)} aria-hidden="true" />
          <div>
            <h2 className="text-base font-bold text-foreground mb-1">{result.message}</h2>
            {result.deadline && (
              <p className="text-sm font-semibold text-foreground mb-1">
                Mandatory from: {result.deadline}
              </p>
            )}
            <p className="text-sm text-muted-foreground">{result.explanation}</p>
          </div>
        </div>
      </div>

      {/* Next steps */}
      {result.nextSteps.length > 0 && (
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-foreground mb-3">Your next steps</h3>
          <ol className="space-y-2">
            {result.nextSteps.map((step, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-foreground">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-light text-xs font-bold text-brand">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/software"
          className="flex-1 rounded-lg bg-brand px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-brand-dark transition-colors"
        >
          Find MTD software
        </Link>
        <Link
          href="/mtd-for-sole-traders"
          className="flex-1 rounded-lg border border-border px-4 py-2.5 text-center text-sm font-medium text-foreground hover:border-brand hover:text-brand transition-colors"
        >
          MTD guides
        </Link>
      </div>

      <button
        onClick={onReset}
        className="mt-4 block w-full text-center text-xs text-muted-foreground hover:text-foreground transition-colors"
      >
        Start again
      </button>

      <p className="mt-4 text-xs text-muted-foreground text-center">
        This tool provides general guidance only. Always confirm your obligations with{' '}
        <a
          href="https://www.gov.uk/making-tax-digital-income-tax"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-foreground"
        >
          HMRC
        </a>{' '}
        or a qualified accountant.
      </p>
    </div>
  )
}

/* ---------------------------------------------------------------
   Eligibility logic
--------------------------------------------------------------- */

function calculateEligibility(state: FormState): EligibilityResult {
  const { incomeType, incomeLevel } = state

  // Not applicable if no self-employment or property income
  if (!incomeType) {
    return {
      eligible: false,
      message: 'MTD does not apply to you',
      explanation:
        'Making Tax Digital for Income Tax only applies to self-employed individuals and landlords with qualifying income. PAYE employees are not affected.',
      nextSteps: [
        'Continue filing your Self Assessment tax return as normal.',
        'Check back as MTD rules may change in future.',
      ],
    }
  }

  if (incomeLevel === 'over-50k') {
    return {
      eligible: true,
      deadline: mtdConfig.mandatoryDate,
      message: 'MTD is mandatory for you from April 2026',
      explanation: `Your income is above £${mtdConfig.currentThreshold.toLocaleString()}, which means you must sign up for Making Tax Digital for Income Tax before ${mtdConfig.mandatoryDate}. You will need to submit quarterly updates to HMRC using compatible software.`,
      nextSteps: [
        'Choose HMRC-recognised MTD software before April 2026.',
        'Set up digital records for your business income and expenses.',
        'Sign up for MTD for Income Tax via your Government Gateway account.',
        'Submit your first quarterly update by 7 August (for the Q1 period).',
      ],
    }
  }

  if (incomeLevel === '30k-50k') {
    return {
      eligible: true,
      deadline: mtdConfig.nextMandatoryDate,
      message: 'MTD will be mandatory for you from April 2027',
      explanation: `Your income is between £30,001 and £${mtdConfig.currentThreshold.toLocaleString()}. You will need to comply with MTD for Income Tax from ${mtdConfig.nextMandatoryDate}. Starting early is advisable so you have time to adjust to digital record-keeping.`,
      nextSteps: [
        'Start evaluating MTD-compatible software now — the transition takes time.',
        'Move your records to a digital format ahead of April 2027.',
        'Consider signing up voluntarily to get used to the process.',
        'Monitor HMRC announcements for any threshold changes.',
      ],
    }
  }

  // under-30k
  return {
    eligible: false,
    message: 'MTD is not yet mandatory for you',
    explanation:
      'Your income is currently below the £30,000 threshold. No mandatory date has been confirmed for those at this income level. However, HMRC may extend MTD in the future, so it pays to stay informed.',
    nextSteps: [
      'Keep an eye on HMRC announcements — thresholds may change.',
      'Consider getting familiar with MTD-compatible software voluntarily.',
      'Continue filing your Self Assessment tax return as normal for now.',
    ],
  }
}
