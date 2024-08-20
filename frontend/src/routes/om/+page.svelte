<script>
	import Banner from '../../components/Banner.svelte';
	import ContentBlocks from '../../components/ContentBlocks.svelte';

	export let data;
	const pageData = data.pageData[0]
	
</script>

<Banner image={pageData.image} heading={pageData.heading} subHeading={pageData.subHeading}/>





<ContentBlocks blocks={pageData.contentBlocks} />

