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
