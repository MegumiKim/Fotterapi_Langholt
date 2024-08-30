import {defineField, defineType} from 'sanity'
import {ComposeIcon} from '@sanity/icons'
export default defineType({
  name: 'quote',
  type: 'object',
  title: 'Anmeldelse',
  icon: ComposeIcon,
  fields: [
    defineField({
      name: 'text',
      type: 'text',
      title: 'Tekst',
      rows: 4,
      validation: (Rule) => Rule.required().max(200).error('Max 200 bokstaver'),
    }),
    defineField({
      name: 'by',
      type: 'string',
      title: 'By',
      validation: (Rule) => Rule.required().max(50).error('Name is required'),
    }),
  ],
})
