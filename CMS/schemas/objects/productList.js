//code snippet: https://www.sanity.io/schemas/image-gallery-dea386ba

import {ImagesIcon} from '@sanity/icons'

export default {
  name: 'productList',
  type: 'object',
  title: 'Produktliste',
  icon: ImagesIcon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Sub Title',
    },
    {
      name: 'items',
      type: 'array',
      title: 'Items',
      of: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'product',
              type: 'string',
              title: 'Produkt Navn',
            },
            {
              name: 'price',
              type: 'number',
              title: 'Pris',
            },
            {
              name: 'description',
              type: 'string',
              title: 'Bescribelse',
            },
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
    },
  ],
  preview: {
    select: {
      images: 'items',
      image: 'items[0]',
    },
    prepare(selection) {
      const {images, image} = selection

      return {
        title: `Gallery block of ${Object.keys(images).length} items`,
        media: image,
      }
    },
  },
}
