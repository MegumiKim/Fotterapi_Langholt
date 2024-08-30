import {defineField, defineType} from 'sanity'
import {SparklesIcon} from '@sanity/icons'

export default defineType({
  name: 'treatment',
  type: 'object',
  title: 'Behandling',
  icon: SparklesIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required().max(20).error('Max 20 bokstaver'),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      rows: 4,
      validation: (Rule) => Rule.required().max(400).error('Max 400 bokstaver'),
    }),
    defineField({
      name: 'price',
      type: 'object',
      title: 'Price',
      description: 'please provide number or text.',
      fields: [
        {
          name: 'price',
          type: 'number',
          title: 'Price',
          description: 'Price of the treatment',
        },
        {
          name: 'text',
          type: 'string',
          title: 'Comment',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title', // Field name for the title in the preview
    },
    prepare({title}) {
      return {
        title: title,
      }
    },
  },
})
