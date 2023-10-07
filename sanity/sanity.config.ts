import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '../sanity/node_modules/@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'nextjs-portfolio',

  projectId: '8f9ktdya',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
