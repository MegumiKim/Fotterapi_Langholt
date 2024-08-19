import { getTreatmentPage } from '$lib/sanity.js';

export async function load() {
	const pageData = await getTreatmentPage();

	if (!pageData) {
		return { status: 404 };
	}

	return {
		pageData
	};
}
