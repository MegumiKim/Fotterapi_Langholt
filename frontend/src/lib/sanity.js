import { createClient } from '@sanity/client';
import { homePageQuery } from './queries/homePage.js';
import { treatmentPageQuery } from './queries/treatmentPage.js';
import { aboutPageQuery } from './queries/aboutPage.js';
import { contactPageQuery } from './queries/contactPage.js';
import { siteSettingsQuery } from './queries/siteSettings.js';

export const client = createClient({
	projectId: 'yy4hgj2v',
	dataset: 'production',
	useCdn: true, // `false` if you want to ensure fresh data
	apiVersion: '2022-03-07' // use a UTC date string
});

//
//Page
//
export async function getHomePage() {
	return await client.fetch(homePageQuery);
}
export async function getTreatmentPage() {
	return await client.fetch(treatmentPageQuery);
}
export async function getAboutPage() {
	return await client.fetch(aboutPageQuery);
}
export async function getContactPage() {
	return await client.fetch(contactPageQuery);
}
export async function getSiteSettings() {
	return await client.fetch(siteSettingsQuery);
}
