// This file contains the content blocks that are used in the CMS

// A helper function to filter out the content blocks that are not required
export function getContentBlocks(exclude = []) {
  return contentBlocks.filter((block) => !exclude.includes(block.name))
}

export const contentBlocks = [
  {
    name: 'textWithImage',
    type: 'textWithImage',
  },
  {
    name: 'reviews',
    type: 'reviews',
  },
  {
    name: 'gallery',
    type: 'gallery',
  },
  // {
  //   name: 'image',
  //   type: 'image',
  // },
]
