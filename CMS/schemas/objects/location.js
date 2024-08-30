import {defineField, defineType} from 'sanity'
import {PinIcon} from '@sanity/icons'
import {CalendarIcon} from '@sanity/icons'

export default defineType({
  name: 'location',
  type: 'object',
  title: 'Location',
  icon: PinIcon,
  group: 'contact',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address',
      type: 'string',
      title: 'Address',
    }),
    defineField({
      name: 'image',
      type: 'imageObject',
      title: 'Image',
    }),
    defineField({
      name: 'googleMapLink',
      type: 'url',
      title: 'Google Map URL',
    }),
    // defineField({
    //   name: 'googleMap',
    //   type: 'string',
    //   title: 'Google Map embed URL',
    //   validation: (Rule) =>
    //     Rule.custom((input) => {
    //       if (!input) {
    //         // If input is empty or undefined, it's valid because the field is optional
    //         return true
    //       }

    //       // Regular expression to match the iframe tag with src attribute containing Google Maps embed URL
    //       const googleMapEmbedUrlPattern =
    //         /^<iframe\s+src="https:\/\/www\.google\.com\/maps\/embed\?pb=.*".*<\/iframe>$/

    //       // Validate if the input matches the expected pattern
    //       return googleMapEmbedUrlPattern.test(input)
    //         ? true
    //         : 'Input has to start with "<iframe src="https://www.google.com/maps/embed?pb="'
    //     }),
    // }),
    defineField({
      name: 'comment',
      type: 'string',
      title: 'Additional Comment',
    }),
    defineField({
      name: 'opening_hours',
      type: 'array',
      title: 'Opening Hours',
      of: [
        {
          name: 'opening_hour',
          type: 'object',
          title: 'Opening Hour',
          fields: [
            {
              name: 'day',
              type: 'string',
              title: 'Day of the week',
              options: {
                list: [
                  {title: 'Mandag', value: 'Mandag', default: true},
                  {title: 'Tirsdag', value: 'Tirsdag'},
                  {title: 'Onsdag', value: 'Onsdag'},
                  {title: 'Torsdag', value: 'Torsdag'},
                  {title: 'Fredag', value: 'Fredag'},
                  {title: 'Lørdag', value: 'Lørdag'},
                  {title: 'Søndag', value: 'Søndag'},
                ],
              },
            },
            {
              name: 'from',
              type: 'number',
              title: 'Opening Time',
              validation: (Rule) => Rule.min(0).max(24),
            },
            {
              name: 'to',
              type: 'number',
              title: 'Closing Time',
              validation: (Rule) => Rule.min(0).max(24),
            },
          ],
          preview: {
            select: {
              title: 'day', // Field name for the title in the preview
            },
            prepare({title}) {
              return {
                title: title,
                media: CalendarIcon,
              }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title', // Field name for the title in the preview
    },
    prepare({title}) {
      return {
        title: title,
      }
    },
  },
})
