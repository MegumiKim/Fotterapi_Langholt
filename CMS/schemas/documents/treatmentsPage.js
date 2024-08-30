import {defineType, defineField} from 'sanity'
import {getContentBlocks} from '../utils/contentBlocks.js'

export default defineType({
  name: 'treatmentsPage',
  type: 'document',
  title: 'Behandlinger',
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
      name: 'treatments',
      title: 'List of Treatments',
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
      description: 'Overskrift på behandlingerside.',
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
      // fieldset: 'thumbnail',
      description: 'Background image behind the page title',
      validation: (Rule) => [Rule.required().error('An image required')],
    }),

    defineField({
      name: 'treatments',
      type: 'array',
      group: 'treatments',
      title: 'List of treatments',
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: 'treatment',
        },
      ],
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
