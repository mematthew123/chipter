import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'yoeii34u',
    dataset: 'development',
  },
  deployment: {
    appId: 'kkjpscb8q6fbdyeentwp9v8m',
    // https://chipter.sanity.studio this is deployed studio URL
    autoUpdates: true,
  }
})
