import groq from 'groq';
import { asset } from './components.js';

export const siteSettingsQuery = groq`
*[_type == "site-settings"]{
    title,
    'logo':logo.${asset}, 
    orgNumber, 
    copyright
}`;
