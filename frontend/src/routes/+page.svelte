<script>
	import ContentBlocks from '../components/ContentBlocks.svelte';
	import Locations from '../components/Locations.svelte';
	import Banner from '../components/Banner.svelte';
	import WelcomeBanner from '../components/WelcomeBanner.svelte';
	export let data;
	const pageData = data.homePageData[0];
</script>

{#if pageData}
	<WelcomeBanner
		image={pageData.image}
		heading={pageData.heading}
		subHeading={pageData.subHeading}
		isHomePage={true}
		focalpoint={pageData.focalpoint}
	/>
	<!-- <Banner
		image={pageData.image}
		heading={pageData.heading}
		subHeading={pageData.subHeading}
		isHomePage={true}
		focalpoint={pageData.focalpoint}
	/> -->
	<ContentBlocks blocks={pageData.contentBlocks} />
	<Locations locations={pageData.contact} />
{/if}
