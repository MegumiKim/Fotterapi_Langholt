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
"content":items[]{${asset}}
  },

_type == "textWithImage" =>{
"type":_type,
"content":{
  heading, 
  text,
  cta,
'image':image.${asset},
"focalPoint": image.hotspot,
richText}
},

_type == "reviews" =>{
  "type" : _type,
"content":reviews[]{by, text}
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
