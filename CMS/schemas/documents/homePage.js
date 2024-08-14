import {defineType, defineField} from 'sanity'
import {getContentBlocks} from '../utils/contentBlocks.js'

export default defineType({
  name: 'homePage',
  type: 'document',
  title: 'Home',
  groups: [
    {
      name: 'page',
      title: 'Page',
      default: true,
    },
    {
      name: 'content',
      title: 'Content',
    },
    {
      name: 'Contact',
      title: 'Kontakt',
    },
  ],
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      group: 'page',
      title: 'Overskrift',
      description: 'Overskrift på hjemmesiden.',
      validation: (Rule) => [Rule.required().max(50).error('Obligatorisk. Maks 50 bokstaver.')],
    }),
    defineField({
      name: 'subHeading',
      type: 'string',
      group: 'page',
      title: 'Underoverskrift',
      description: 'Skrift under overskrift.',
      validation: (Rule) => [Rule.max(50).error('Maks 50 bokstaver')],
    }),
    defineField({
      name: 'image',
      type: 'imageObject',
      group: 'page',
      // fieldset: 'thumbnail',
      description: 'Hoved bilde på hjemmesiden.',
      validation: (Rule) => [Rule.required().error('A image required')],
    }),

    // Common content blocks
    defineField({
      name: 'contentBlocks',
      type: 'array',
      group: 'content',
      title: 'Content blocks',
      description: 'Overview/Demo/Scenario/Breakdown',
      of: getContentBlocks(),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare({title, media}) {
      return {
        title,
        media,
      }
    },
  },
})
