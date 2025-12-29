import { defineEnableDraftMode } from 'next-sanity/draft-mode'
import { baseClient } from '@/lib/sanity.live'

const token = process.env.SANITY_API_READ_TOKEN

export const { GET } = defineEnableDraftMode({
  client: baseClient.withConfig({
    token,
  }),
})