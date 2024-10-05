<script>
	import Image from '../components/Image.svelte';

	export let heading;
	export let subHeading;
	export let image;
	export let focalpoint;
	export let height;

	// console.log(image.url);
</script>

<div class="banner" style={`height:${height}vh`}>
	<div class="img-overlay">
		<div class="img-wrapper">
			<Image asset={image} focalPoint={focalpoint} />
		</div>
	</div>
	<div class="h1-wrapper">
		<h1 class="title">{heading}</h1>
		<p>{subHeading}</p>
	</div>
</div>

<style lang="scss">
	@use '$lib/styling/breakpoints' as breakpoints;

	.banner {
		position: relative;
		height: 90vh;
		overflow: hidden;

		.img-wrapper {
			height: 90vh;
			width: 100%;
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
	}

	.h1-wrapper {
		position: absolute;
		top: 0;
		text-align: center;
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		justify-content: center;
		gap: 2em;

		h1,
		p {
			margin: 0;
			color: white;
		}
	}
</style>
