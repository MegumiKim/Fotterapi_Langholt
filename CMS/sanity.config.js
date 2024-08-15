import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
// import {media} from 'sanity-plugin-media'

export default defineConfig({
  name: 'default',
  title: 'yuko_website',

  projectId: 'yy4hgj2v',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Pages')
          .items([
            // Our singleton type has a list item with a custom child
            S.listItem().title('Home').id('homePage').child(
              // Instead of rendering a list of documents, we render a single
              // document, specifying the `documentId` manually to ensure
              // that we're editing the single instance of the document
              S.document().title('Home').schemaType('homePage').documentId('homePage'),
            ),
            S.listItem().title('Site Settings').child(S.document().schemaType('site-settings')),

            // Regular document types
            // S.documentTypeListItem('blogPost').title('Blog Posts'),
            // S.documentTypeListItem('author').title('Authors'),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
