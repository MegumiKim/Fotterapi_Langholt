<script>
	import Image from './Image.svelte';
	import { PortableText } from '@portabletext/svelte';

	export let content;
	//  console.log(content);

	const components = {};
</script>

<section class="flex">
	<div class="text-wrapper">
		{#if content.heading}
			<h2>{content.heading}</h2>
		{/if}
		{#if content.richText}
			<div class="rich-text-wrapper">
				<PortableText value={content.richText} {components} />
			</div>
		{/if}
		{#if content.cta}
			<div class="btn-wrapper"><a href={content.cta.link} class="btn">{content.cta.text}</a></div>
		{/if}
	</div>

	{#if content.image}
		<div class="img-wrapper">
			<Image asset={content.image} focalPoint={content.focalpoint} />
		</div>
	{/if}
</section>

<style lang="scss">
	@use '$lib/styling/breakpoints';

	.flex {
		@include breakpoints.breakpoint(large) {
			gap: 4em;
			justify-content: center;
		}
	}
	.text-wrapper {
		margin: auto;
		h2 {
			text-align: center;
		}

		.rich-text-wrapper {
			text-align: center;
			@include breakpoints.breakpoint(medium) {
				margin: 4em auto;
			}
		}
	}

	.img-wrapper {
		margin: auto;
	}

	.btn-wrapper {
		display: block;

		.btn {
			margin: auto;
			text-align: center;
		}
	}
</style>
