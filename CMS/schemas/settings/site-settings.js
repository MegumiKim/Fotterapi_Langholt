import {CogIcon, LinkIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'site-settings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  preview: {
    select: {
      title: 'title',
    },
    prepare() {
      return {
        // TODO: Hack for showing static value
        title: 'Site Settings',
      }
    },
  },

  groups: [
    {
      name: 'site',
      title: 'Site',
      default: true,
    },
    {
      name: 'header',
      title: 'Header',
    },
    {
      name: 'footer',
      title: 'Footer',
    },
  ],

  fields: [
    defineField({
      name: 'title',
      type: 'string',
      group: 'site',
      title: 'Site Title',
      description: 'Title of the site which appears in the browser tab.',
      initialValue: 'Fotterapi Langholt',
      validation: (rule) => rule.max(20).error('Site title cannot exceed 20 characters'),
    }),

    // defineField({
    //   name: 'elevatorPitch',
    //   type: 'string',
    //   group: 'site',
    //   title: 'キャッチコピー',
    //   description: 'メインページのキャッチコピー。',
    //   initialValue: '綺麗な脚にしましょう',
    //   validation: (rule) => rule.max(70).error('70文字以下'),
    // }),
    // defineField({
    //   name: 'seo',
    //   type: 'seo',
    //   group: 'site',
    //   title: 'SEO',
    // }),

    //
    // Header
    //
    // defineField({
    //   name: 'navHeader',
    //   type: 'array',
    //   group: 'header',
    //   title: 'Navigation',
    //   of: [{type: 'navigationItem'}],
    // }),

    //
    // Footer
    //
    // defineField({
    //   name: 'copyright',
    //   type: 'string',
    //   group: 'footer',
    //   title: 'Footer Copyright',
    //   description: 'Copy right text to display in the footer',
    // }),
    defineField({
      name: 'orgNumber',
      type: 'string',
      group: 'footer',
      title: 'Oganization number',
      description: 'Organization number to display in the footer',
    }),
    defineField({
      name: 'phone',
      type: 'string',
      group: 'footer',
      title: 'Phone number',
      description: 'Phone number to display in the footer',
    }),
    defineField({
      name: 'address',
      type: 'string',
      group: 'footer',
      title: 'Address',
      description: 'Address of the clinic to display in the footer',
    }),
    defineField({
      name: 'email',
      type: 'email',
      group: 'footer',
      title: 'email',
    }),
    defineField({
      name: 'facebook',
      type: 'url',
      group: 'footer',
      title: 'Social Media URL',
      description: 'URL to the FaceBook page',
    }),

    defineField({
      name: 'logo',
      type: 'imageObject',
      group: 'footer',
      title: 'Logo of the authority',
      description: 'Logo of the authority to display in the footer',
    }),
  ],
})
