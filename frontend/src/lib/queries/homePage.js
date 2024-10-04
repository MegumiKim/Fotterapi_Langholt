import groq from 'groq';
import { asset, contentBlocks } from './components.js';

export const homePageQuery = groq`
*[_type == "homePage"]
{
heading, 
subHeading, 
'image':image.${asset},
"focalPoint": image.hotspot,

${contentBlocks},
contact[]{
  title,
  googleMapLink,
  comment,  
  image,
  address,
  opening_hours,
  "image":image.${asset},
  "focalPoint": image.hotspot,
}

}`;
