<script>
	import Image from './Image.svelte';

	export let image;
	export let heading;
	export let subHeading;
	export let isHomePage = false;
	export let focalpoint = null;

</script>

<div class="banner" class:is-homePage={isHomePage}>
	<div class="img-overlay" class:is-homePage={isHomePage}>
		{#if image}
			<div class="img-wrapper">
				<Image asset={image} focalPoint={focalpoint} />
			</div>
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
		.img-wrapper {
			height: 30vh;
			width: 100%;
		}


		&.is-homePage {
			height: 90vh;

			.img-wrapper {
			height: 90vh;
			width: 100%;
		}
		}
		@include breakpoints.breakpoint(large) {
			height: 50vh;

			.img-wrapper {
			height: 50vh;
			width: 100%;
		}
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

	}

	.h1-wrapper {
		position: absolute;
		top: 2em;
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

		p{
			margin: 0.5em 0;
			font-style: italic;
			text-wrap: balance;
		}
	}
</style>
