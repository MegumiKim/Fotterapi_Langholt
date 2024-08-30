import {BlockContentIcon} from '@sanity/icons'
// import link from './link'

export default {
  name: 'richText',
  type: 'object',
  // title: 'Rich Text',
  icon: BlockContentIcon,
  fields: [
    {
      name: 'text',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            //removed styles
          ],

          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              // {title: 'Highlight', value: 'highlight'},
            ],
            // annotations: [link],
          },
        },
      ],
    },
  ],
}
