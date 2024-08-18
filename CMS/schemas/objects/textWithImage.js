import {defineType} from 'sanity'
import {ComposeIcon} from '@sanity/icons'
export default defineType({
  name: 'textWithImage',
  type: 'object',
  title: 'Tekst med bilde',
  icon: ComposeIcon,
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Overtekst',
    },
    {
      name: 'text',
      type: 'richText',
    },
    {
      name: 'image',
      type: 'imageObject',
      description: 'Et bilde som vises ved siden av teksten',
    },
    {
      title: 'Button with link',
      name: 'cta',
      type: 'cta',
    },
  ],

  preview: {
    select: {
      media: 'image',
      title: 'heading',
    },
    prepare({title, media}) {
      return {
        title: title,
        media: media,
      }
    },
  },
})
