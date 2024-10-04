<script>
	import Image from './Image.svelte';

	export let locations;
	// console.log(locations);
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
					{#if location.address}
						<a href={location.googleMapLink} class="address">
							<div class="map-icon"><img src="/asset/materialIcons/map.svg" alt="map icon" /></div>
							{location.address}
						</a>
					{/if}
					<div class="opening-hours">
						{#if location.opening_hours}
							{#each location.opening_hours as item}
								<p>{item.day}: <span>{item.from}:00 - {item.to}:00</span></p>
							{/each}
						{/if}
					</div>
					<div class="comment">
						{#if location.comment}
							<p>{location.comment}</p>
						{/if}
					</div>
				</div>

				{#if location.image}
					<div class="image-wrapper">
						<Image asset={location.image} focalPoint={location.focalPoint} />
					</div>
				{/if}
			</div>
		{/each}
	{/if}
</section>

<style lang="scss">
	/* @use '$lib/styling/breakpoints'; */
	/* @use '$lib/styling/typography'; */

	.container {
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
			margin: auto;
			margin-top: 4em;
			max-width: 800px;

			.opening-hours {
				margin-top: 2em;

				p {
					margin: 0;
					display: flex;
					justify-content: space-between;
					max-width: 200px;
				}

				p:last-child {
					border-bottom: 1px solid gray;
					padding-bottom: 1em;
				}
			}
			.address {
				display: flex;
				gap: 0.5em;
				align-items: center;
				margin-top: 0.5em;
			}

			.address:hover {
				/* border-bottom: 2px blue solid;
				margin-bottom: -2px; */
				text-decoration: underline;
				color: blue;
			}

			.map-icon {
				max-width: 2em;
			}
		}

		.image-wrapper {
			aspect-ratio: 1;
			overflow-y: hidden;
		}
	}
</style>
