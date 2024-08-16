import { getHomePage } from '$lib/sanity.js';

export async function load() {
	const homePageData = await getHomePage();

	if (!homePageData) {
		return { status: 404 };
	}

	return {
		homePageData
	};
}
