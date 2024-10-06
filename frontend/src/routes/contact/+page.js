import { getContactPage } from '$lib/sanity.js';

export async function load() {
	const pageData = await getContactPage();

	if (!pageData) {
		return { status: 404 };
	}

	return {
		pageData
	};
}
