import { getAboutPage } from '$lib/sanity.js';

export async function load() {
	const pageData = await getAboutPage();

	if (!pageData) {
		return { status: 404 };
	}

	return {
		pageData
	};
}
