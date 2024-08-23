<script>
	import HorizontalScrollContainer from './HorizontalScrollContainer.svelte';
	import Image from './Image.svelte';
	export let content = [];
</script>

<HorizontalScrollContainer>
	<div class="horizontal-scroll">
		{#each content as item}
			<div class="">
				<Image asset={item.asset} focalPoint={item.focalPoint} attributes={{
					sizes: sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
				}} />
			</div>
		{/each}
	</div>
</HorizontalScrollContainer>
