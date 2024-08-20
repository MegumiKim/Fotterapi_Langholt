import groq from 'groq';

export const asset = groq`
asset->{
  _type,
  _updatedAt,
  title,
  altText,
  description,
  url,
  originalFilename,
  mimeType,
  extension,
  size,
  'width': metadata.dimensions.width,
  'height': metadata.dimensions.height,
  'aspectRatio': metadata.dimensions.aspectRatio,
  'blurHash': metadata.blurHash,
  'hasAlpha': coalesce(metadata.hasAlpha, false),
}
`;

// 'image':image.asset->url
export const contentBlocks = groq`
contentBlocks[]{

_type == "gallery" =>{
"type":_type,
"content":items[]{${asset}}
  },

_type == "textWithImage" =>{
"type":_type,
"content":{
  heading, 
  "richText":text.text,
  cta,
'image':image.${asset},
"focalPoint": image.hotspot}
},

_type == "reviews" =>{
  "type" : _type,
"content":reviews[]{by, text}
}

},
`;
