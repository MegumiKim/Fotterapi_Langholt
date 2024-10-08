import { getSiteSettings } from '$lib/sanity.js';

export async function load({ url }) {
	const siteSettings = await getSiteSettings();

	if (!siteSettings) {
		return { status: 404 };
	}

	return {
		siteSettings,
		url: url.pathname
	};
}
