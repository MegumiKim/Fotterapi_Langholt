import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'project',
  type: 'document',
  title: 'Project',
  groups: [
    {
      name: 'project',
      title: 'Project',
      default: true,
    },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      group: 'project',
      title: 'Title',
      description:
        'Punchy. 1 sentence. 3-8 words. Starts with the: <project name>: <project type> <context/problem> <solution>',
      validation: (Rule) => [
        Rule.required().max(80).error('A title is required (max 80 characters)'),
      ],
    }),
  ],
})
