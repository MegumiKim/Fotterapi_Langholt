import {defineField} from 'sanity'

export default defineField({
  name: 'reviews',
  type: 'object',
  Title: 'Anmeldelser',
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
})
