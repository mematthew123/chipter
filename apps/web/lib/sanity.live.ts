// Live Content API configuration for Next.js
// Using traditional approach for next-sanity v12

import { createClient } from '@sanity/client'
import { draftMode } from 'next/headers'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'yoeii34u'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'development'
const apiVersion = '2024-12-27'
const token = process.env.SANITY_API_READ_TOKEN

// Create a base client
const baseClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token, // Include token for authenticated requests
  perspective: 'published',
})

// Create a client with stega encoding for visual editing
export const liveClient = baseClient.withConfig({
  stega: {
    enabled: process.env.NODE_ENV === 'development',
    studioUrl: 'http://localhost:3333',
  },
})

// Wrapper for sanity fetch with proper typing and draft mode support
export async function sanityFetch<T = unknown>({
  query,
  params = {},
  revalidate = process.env.NODE_ENV === 'development' ? 0 : 60,
  stega = true,
}: {
  query: string
  params?: Record<string, unknown>
  revalidate?: number | false
  stega?: boolean
}) {
  const isDraftMode = (await draftMode()).isEnabled

  // Use stega-enabled client when in draft mode for visual editing
  const client = isDraftMode && stega
    ? liveClient
    : baseClient

  // Use preview perspective when in draft mode
  const perspective = isDraftMode ? 'previewDrafts' : 'published'

  const data = await client.fetch<T>(query, params, {
    perspective,
    next: {
      revalidate: isDraftMode ? 0 : revalidate,
    },
  })

  return { data }
}

// Placeholder component - SanityLive features are integrated directly
export function SanityLive() {
  return null
}