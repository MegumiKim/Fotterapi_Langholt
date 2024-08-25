import {LinkIcon} from '@sanity/icons'

export default {
  name: 'socialMediaLinks',
  type: 'array',
  group: 'footer',
  title: 'Social Media',
  of: [
    {
      name: 'navigationItem',
      type: 'object',
      title: 'Social Media Links',
      icon: LinkIcon,
      fields: [
        {
          name: 'label',
          type: 'string',
          title: 'Label',
          validation: (rule) => rule.required(),
        },
        {
          name: 'url',
          type: 'url',
          title: 'URL',
          validation: (rule) => rule.required(),
        },
      ],
    },
  ],
}
