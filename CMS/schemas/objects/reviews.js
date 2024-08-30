import {defineField} from 'sanity'
import {AddCommentIcon} from '@sanity/icons'

export default defineField({
  name: 'reviews',
  type: 'object',
  Title: 'Anmeldelser',
  icon: AddCommentIcon,
  fields: [
    defineField({
      name: 'reviews',
      type: 'array',
      of: [
        {
          type: 'quote',
        },
      ],
    }),
  ],
  preview: {
    select: {
      reviews: 'reviews', // Field name for the title in the preview
    },
    prepare({reviews}) {
      return {
        title: `${Object.keys(reviews).length} reviews`,
        media: AddCommentIcon,
      }
    },
  },
})
