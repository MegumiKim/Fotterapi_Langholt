<script>
	import Image from "./Image.svelte";

	export let image;
	export let heading;
	export let subHeading;
	export let isHomePage = false;
	export let focalpoint;

	// console.log(image);
	
</script>

<div 
	class="banner"
	class:is-homePage={isHomePage}
	>
	<div class="img-overlay"
	class:is-homePage={isHomePage}
	>
		<Image asset={image} focalPoint={null}/>
	</div>
	<div class="h1-wrapper"
	class:is-homePage={isHomePage}>
		<h1 class="title">{heading}</h1>
		{#if subHeading}<p>{subHeading}</p>{/if}
	</div>
</div>

<style lang="scss">

@use '$lib/styling/breakpoints';


	//Banner

	.banner {
		position: relative;
		height: 40vh;

	
		overflow-y: hidden;

		&.is-homePage {
			height: 100%;
		}

		@include breakpoints.breakpoint(large) {
	height: 40vh;

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

/* Ensures the shadow doesn't overflow */

		 img {
    display: block;
    width: 100%;
  /* Ensures the image scales correctly */
}

	}

	.h1-wrapper {
		position: absolute;
		top: 0;
		text-align: left;
		padding-left: var(--bleed);
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		justify-content: center;

		&.is-homePage {
			text-align: center;
		}

		h1,
		p {
			margin: 0;
			color: white;
		}

	}
</style>
