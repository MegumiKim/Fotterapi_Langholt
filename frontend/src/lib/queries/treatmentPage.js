import groq from 'groq';
import { asset } from './components.js';

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
