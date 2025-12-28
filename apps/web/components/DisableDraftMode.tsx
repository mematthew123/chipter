'use client'

import { useDraftModeEnvironment } from 'next-sanity/hooks'

export function DisableDraftMode() {
  const environment = useDraftModeEnvironment()

  // Only show outside of Presentation Tool (when viewing the site directly in draft mode)
  if (environment !== 'live' && environment !== 'unknown') return null

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a
        href="/api/draft-mode/disable"
        className="inline-block font-mono font-bold uppercase tracking-wide px-4 py-2 bg-hot-orange text-warm-white border-[3px] border-almost-black hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_var(--almost-black)] transition-all duration-200"
      >
        Exit Preview
      </a>
    </div>
  )
}