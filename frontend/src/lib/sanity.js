import { createClient } from '@sanity/client';
import groq from 'groq';

export const client = createClient({
	projectId: 'yy4hgj2v',
	dataset: 'production',
	useCdn: true, // `false` if you want to ensure fresh data
	apiVersion: '2022-03-07' // use a UTC date string
});

//
//Page
//
//fetch a single page by slug
export async function getPage() {
	return await client.fetch(
		groq`
    *[_type == "project"]`
	);
}
