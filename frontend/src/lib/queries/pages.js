import groq from 'groq';
import { asset } from './components.js';

export const homePageQuery = groq`
*[_type == "homePage"]
{
heading, 
subHeading, 
'image':image.${asset},
"focalPoint": image.hotspot,

contentBlocks[]{

_type == "gallery" =>{
"type":_type,
items[]{${asset}}
  },

_type == "textWithImage" =>{
"type":_type,
  heading, 
  text,
  cta,
'image':image.${asset},
"focalPoint": image.hotspot,
richText,
},

_type == "reviews" =>{
  "type" : _type,
  reviews[]{
    text, by
  }    
}

},
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
