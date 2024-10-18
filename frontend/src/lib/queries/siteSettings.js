import groq from 'groq';
import { asset } from './components.js';

export const siteSettingsQuery = groq`
*[_type == "site-settings"]{
    title,
    description,
    'image':image.${asset}, 
    orgNumber, 
    phone,
    address,
    email,
    facebook,
}`;
