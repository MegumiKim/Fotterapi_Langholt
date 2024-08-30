import {defineType, defineField} from 'sanity'
import {getContentBlocks} from '../utils/contentBlocks.js'
import {HomeIcon} from '@sanity/icons'

export default defineType({
  name: 'homePage',
  type: 'document',
  title: 'Home',
  icon: HomeIcon,
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
    {
      name: 'contact',
      title: 'Contact',
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
      description: 'Contents blocks of picture, text, images etc.',
      of: getContentBlocks(),
    }),

    defineField({
      name: 'contact',
      type: 'array',
      group: 'contact',
      of: [
        {
          type: 'location',
        },
      ],
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
