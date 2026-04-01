'use client'

import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

interface NewsletterSignupProps {
  heading?: string
  subtext?: string
  className?: string
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function NewsletterSignup({
  heading = 'Stay in the loop',
  subtext = 'Monthly updates — guides, comparisons, and useful tips. No spam. Unsubscribe anytime.',
  className = '',
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!isValidEmail(email)) {
      setStatus('error')
      return
    }

    setStatus('loading')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div
      className={`rounded-xl border-l-4 border-brand bg-[#e6f3f3] p-6 ${className}`}
    >
      {status === 'success' ? (
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-600" />
          <div>
            <p className="font-bold text-foreground">You&apos;re in — check your inbox</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Thanks for subscribing. We&apos;ll only send you useful updates.
            </p>
          </div>
        </div>
      ) : (
        <>
          <h2 className="text-lg font-bold text-foreground">{heading}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{subtext}</p>

          <form onSubmit={handleSubmit} noValidate className="mt-4">
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.co.uk"
                required
                disabled={status === 'loading'}
                className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand disabled:opacity-50"
                aria-label="Email address"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0a5a5a] disabled:opacity-60 transition-colors"
              >
                {status === 'loading' ? (
                  <>
                    <span
                      className="size-4 animate-spin rounded-full border-2 border-white border-t-transparent"
                      aria-hidden="true"
                    />
                    Subscribing…
                  </>
                ) : (
                  'Subscribe free'
                )}
              </button>
            </div>

            {status === 'error' && (
              <p className="mt-2 text-sm text-red-600" role="alert">
                Something went wrong — please try again.
              </p>
            )}
          </form>
        </>
      )}
    </div>
  )
}
