<script>
	import ContentBlocks from '../components/ContentBlocks.svelte';
	import Locations from '../components/Locations.svelte';
	import Banner from '../components/Banner.svelte';
	export let data;
	const pageData = data.homePageData[0];
</script>

{#if pageData}
	<Banner
		image={pageData.image}
		heading={pageData.heading}
		subHeading={pageData.subHeading}
		isHomePage={true}
		focalpoint={pageData.focalpoint}
		scrollY
	/>
	<ContentBlocks blocks={pageData.contentBlocks} />
	<Locations locations={pageData.contact} />
{/if}
