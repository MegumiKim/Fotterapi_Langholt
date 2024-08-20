<script>
	import ContentBlocks from '../components/ContentBlocks.svelte';
	import Locations from '../components/Locations.svelte';
	import WelcomeBanner from '../components/WelcomeBanner.svelte';

	export let data;
	const homePageData = data.homePageData[0];
	// console.log(data);
</script>

{#if homePageData}
	<WelcomeBanner
		heading={homePageData.heading}
		subheading={homePageData.subHeading}
		image={homePageData.image}
		focalpoint={homePageData.focalpoint}
	/>
{/if}

<ContentBlocks blocks={homePageData.contentBlocks} />
<Locations />
