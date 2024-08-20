import groq from 'groq';
import { asset, contentBlocks } from './components.js';

export const treatmentPageQuery = groq`
*[_type == "treatmentsPage"]
{
heading, 
subHeading, 
'image':image.${asset},
"focalPoint": image.hotspot,

  treatments[]{
        title,
      description,
      price
  },
${contentBlocks}

contact[]{
  title,
  googleMap,
  image,
  address,
opening_hours,
  "image":image.${asset},
  "focalPoint": image.hotspot,
}

}`;
