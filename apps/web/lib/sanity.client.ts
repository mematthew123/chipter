import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'yoeii34u',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'development',
  apiVersion: '2024-12-27',
  useCdn: false, // Set to true for production
  perspective: 'published',
  stega: {
    enabled: false,
    studioUrl: 'http://localhost:3333',
  },
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}