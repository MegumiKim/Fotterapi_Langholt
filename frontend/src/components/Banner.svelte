<script>
	import Image from './Image.svelte';

	export let image;
	export let heading;
	export let subHeading;
	export let isHomePage = false;
	export let focalpoint = null;

	// console.log(image);
</script>

<div class="banner" class:is-homePage={isHomePage}>
	<div class="img-overlay" class:is-homePage={isHomePage}>
		{#if image}
			<Image asset={image} focalPoint={focalpoint} />
		{/if}

		<div class="h1-wrapper" class:is-homePage={isHomePage}>
			<h1 class="title">{heading}</h1>
			{#if subHeading}<p>{subHeading}</p>{/if}
		</div>
	</div>
</div>

<style lang="scss">
	@use '$lib/styling/breakpoints';

	//Banner

	.banner {
		position: relative;

		&.is-homePage {
			max-height: 80vh;
			height: 80vh;
		}
		@include breakpoints.breakpoint(large) {
			height: 50vh;
		}
	}

	//Image overlay
	.img-overlay {
		// Create the overlay
		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: black; // Color of the darkening overlay
			opacity: 0.5; // Adjust this to control the darkness
		}
		&.is-homePage {
			max-height: 80vh;
			height: 80%;
			overflow-y: hidden;
		}

		@include breakpoints.breakpoint(large) {
			height: 50vh;
		}
	}

	.h1-wrapper {
		position: absolute;
		top: 5em;
		text-align: left;
		padding: var(--bleed);
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		justify-content: center;
		color: white;

		&.is-homePage {
			text-align: center;
		}

		h1 {
			margin: 0;
		}

		@include breakpoints.breakpoint(medium) {
			padding-left: 5em;
		}
	}
</style>
