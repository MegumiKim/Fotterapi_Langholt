<script>
	import Reviews from './Reviews.svelte';
	import TextWithImageBlock from './TextWithImageBlock.svelte';
	import Gallery from './Gallery.svelte';

	export let blocks = [];

	const blockTypes = {
		textWithImage: TextWithImageBlock,
		reviews: Reviews,
		gallery: Gallery
	};
</script>

<div class="container">
	<div class="grid">
		{#each blocks || [] as { type, ...content }}
			<!-- Block with 2/3 width with indent-->
			{#if type === 'textWithImage'}
				<div class="cell">
					<svelte:component this={blockTypes[type]} {...content} />
				</div>
			{/if}
			{#if type === 'reviews'}
				<div class="cell">
					<svelte:component this={blockTypes[type]} {...content} />
				</div>
			{/if}
			{#if type === 'gallery'}
				<div class="cell container--negative">
					<svelte:component this={blockTypes[type]} {...content} />
				</div>
			{/if}
		{/each}
	</div>
</div>
