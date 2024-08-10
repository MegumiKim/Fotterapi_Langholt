import { getPage } from '../lib/sanity.js';

export async function load({ parent }) {
	const projectData = await getPage();

	if (!projectData) {
		return { status: 404 };
	}

	return {
		projectData
	};
}
