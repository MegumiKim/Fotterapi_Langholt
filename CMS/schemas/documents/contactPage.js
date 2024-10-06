import {defineType, defineField} from 'sanity'
import {getContentBlocks} from '../utils/contentBlocks.js'

export default defineType({
  name: 'contactPage',
  type: 'document',
  title: 'Time Bestilling',
  options: {
    singleton: true,
  },
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
  ],
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      group: 'page',
      title: 'Overskrift',
      validation: (Rule) => [Rule.required().max(30).error('Obligatorisk. Maks 30 bokstaver.')],
    }),
    defineField({
      name: 'subHeading',
      type: 'string',
      group: 'page',
      title: 'Underoverskrift',
      description: 'Text under overskrift.',
      validation: (Rule) => [Rule.max(50).error('Maks 50 bokstaver')],
    }),
    defineField({
      name: 'image',
      type: 'imageObject',
      group: 'page',
      title: 'Banner picture',
      validation: (Rule) => [Rule.required().error('A image required')],
    }),

    // Common content blocks
    defineField({
      name: 'contentBlocks',
      type: 'array',
      group: 'content',
      title: 'Content blocks',
      description: 'Contents blocks of picture, text, images etc.',
      of: getContentBlocks(),
    }),
  ],
})
