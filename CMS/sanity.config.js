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
            S.listItem()
              .title('Home')
              .child(S.document().title('Home').schemaType('homePage').documentId('homePage')),

            S.listItem()
              .title('About')
              .child(S.document().title('About').schemaType('aboutPage').documentId('aboutPage')),

            S.listItem()
              .title('Behandlinger')
              .child(
                S.document()
                  .title('Behandlinger')
                  .schemaType('treatmentsPage')
                  .documentId('treatmentsPage'),
              ),
            S.listItem()
              .title('Siet Settings')
              .child(
                S.document()
                  .title('Site Settings')
                  .schemaType('site-settings')
                  .documentId('site-settings'),
              ),
            // S.documentTypeListItem('site-settings').title('Site Settings'),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    newDocumentOptions: (prev, {currentUser, creationContext}) => {
      if (creationContext.type === 'structure') {
        return []
      }
      return prev
    },
  },
})

//     // Regular document types
//     // S.documentTypeListItem('blogPost').title('Blog Posts'),
//     // S.documentTypeListItem('author').title('Authors'),
//   ]),
