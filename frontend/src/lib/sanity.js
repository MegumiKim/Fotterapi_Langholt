import { createClient } from '@sanity/client';
import groq from 'groq';
import { homePageQuery } from './queries/pages';

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
export async function getHomePage() {
	return await client.fetch(homePageQuery);
}
