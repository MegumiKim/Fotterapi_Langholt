<script>
	import Image from "./Image.svelte";

	export let locations;
	console.log(locations);
	
</script>




<section class="container">

	{#if locations.length}
	<div>
		<h2>Lokaler & Åpeningstider</h2>

		<p class="tel">Tel/SMS: 904 24 340</p>
	</div>
	{#each locations as location}
	<div class="flex">
		<div class="text-wrapper">
			<h3>{location.title}</h3>
			<a href={location.googleMapLink} class="address" >
			{location.address}
			</a>


			{#if location.opening_hours } 
			{#each location.opening_hours as item}

<p>{item.day}: <span>{item.from}:00 - {item.to}:00</span></p>
{/each} {/if}

		</div>

		{#if location.image}

		<div class="image-wrapper">
			<Image asset={location.image} focalPoint={location.focalPoint}/>
		</div>
		{/if}

	</div>
	{/each}
	{/if}





</section>

<style lang="scss">
	@use '$lib/styling/breakpoints';
	@use '$lib/styling/typography';

	.container {
		display: flex;
		flex-direction: column;
		gap: 2em;
		max-width: 800px;

		h2 {
			text-align: center;
		}
		.tel {
			text-align: center;
			font-weight: 400;
		}
		h3 {
			margin-bottom: 0;
		}

		.flex {
			div {
				margin-top: 0;
			}
			iframe {
				margin: auto;
				max-width: 100%;
			}

			.opening_hour {
				margin-top: 2em;
			}

			.address {
				@include typography.details;
				&::before {
					content: '| ';
				}
			}
		}

		.image-wrapper {
			aspect-ratio: 1;
		}
	}
</style>
