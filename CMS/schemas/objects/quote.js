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
    }),
  ],
  preview: {
    select: {
      title: 'text', // Field name for the title in the preview
      subtitle: 'by', // Field name for the subtitle in the preview
    },
    prepare({title, subtitle}) {
      return {
        title: title,
        subtitle: `By: ${subtitle}`,
      }
    },
  },
})
