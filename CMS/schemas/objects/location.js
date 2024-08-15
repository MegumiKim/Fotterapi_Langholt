import {defineField, defineType} from 'sanity'
import {ComposeIcon} from '@sanity/icons'
export default defineType({
  name: 'location',
  type: 'object',
  title: 'Location',
  icon: ComposeIcon,
  group: 'contact',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'address',
      type: 'string',
      title: 'address',
    }),
    defineField({
      name: 'opening_hours',
      type: 'array',
      title: 'Opening Hours',
      of: [
        {
          name: 'day',
          type: 'string',
          title: 'Day of the week',
        },
        {
          name: 'hour',
          type: 'string',
          title: 'Opening Hours',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'Anmeldelse', // Field name for the title in the preview
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
