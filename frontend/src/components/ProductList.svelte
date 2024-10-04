<script>
	import Image from './Image.svelte';
	import HorizontalScrollContainer from './HorizontalScrollContainer.svelte';
	export let content = [];

	console.log(content);
	let title = content.title || '';
	let subtitle = content.subtitle || '';
	let items = content.items || [];
</script>

<div class="container">
	<h2>{title}</h2>
	<p>{subtitle}</p>
</div>
<HorizontalScrollContainer>
	<div class="horizontal-scroll">
		{#each items as item}
			<div class="product-card">
				<Image
					asset={item.asset}
					focalPoint={item.focalPoint}
					attributes={{
						sizes: '(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw'
					}}
				/>
				<h3>{item.product}</h3>
				<p>{item.price} NOK</p>
				<p>{item.description}</p>
			</div>
		{/each}
	</div>
</HorizontalScrollContainer>

<style lang="scss">
	@use '$lib/styling/breakpoints';

	.product-card {
		height: 70%;
	}

	/* .product-card{
height: 50%;
	} */
</style>
