import {defineType, defineField} from 'sanity'
// import {getContentBlocks} from '../utils/contentBlocks.js'

export default defineType({
  name: 'treatmentsPage',
  type: 'document',
  title: 'Behandlinger',
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
  ],
})
