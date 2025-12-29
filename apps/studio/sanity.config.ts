import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {presentationTool} from 'sanity/presentation'
import {schemaTypes} from './schemaTypes'
import {resolve} from './presentation/resolve'

export default defineConfig({
  name: 'default',
  title: 'Chipter Studio',

  projectId: 'yoeii34u',
  dataset: 'development',

  plugins: [
    structureTool(),
    presentationTool({
      resolve,
      previewUrl: {
        origin: typeof location === 'undefined' ? 'http://localhost:3000' : location.origin,
        previewMode: {
          enable: '/api/draft/enable',
        },
      },
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
