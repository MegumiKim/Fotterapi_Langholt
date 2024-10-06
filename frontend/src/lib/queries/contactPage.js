import groq from 'groq';
import { asset, contentBlocks } from './components.js';

export const contactPageQuery = groq`
*[_type == "contactPage"]{
heading, 
subHeading, 
'image':image.${asset},
"focalPoint": image.hotspot,
${contentBlocks}
}
`;
