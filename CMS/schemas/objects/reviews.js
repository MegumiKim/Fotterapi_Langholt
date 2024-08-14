import {defineField} from 'sanity'

export default defineField({
  name: 'reviews',
  type: 'object',
  Title: 'Anmeldelser',
  fields: [
    defineField({
      name: 'Anmeldelser',
      type: 'array',
      of: [
        {
          type: 'quote',
        },
      ],
    }),
  ],
})
