import {defineField, defineType} from 'sanity'
import {ComposeIcon} from '@sanity/icons'
export default defineType({
  name: 'textWithImage',
  type: 'object',
  title: 'Tekst med bildet',
  icon: ComposeIcon,
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Overtekst',
    }),
    defineField({
      name: 'text',
      type: 'richText',
      // title: 'Tekst',
    }),
    defineField({
      name: 'image',
      type: 'image',
      description: 'Et bilde som vises ved siden av teksten',
    }),
  ],

  preview: {
    select: {
      media: 'image',
      text: 'text',
    },
    prepare({title, media}) {
      return {
        title: title,
        media: media,
      }
    },
  },
})
