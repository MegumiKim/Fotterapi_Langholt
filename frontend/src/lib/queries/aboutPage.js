import groq from 'groq';
import { asset, contentBlocks } from './components.js';

export const aboutPageQuery = groq`
*[_type == "aboutPage"]{
heading, 
subHeading, 
'image':image.${asset},
"focalPoint": image.hotspot,
${contentBlocks}
}
`;
