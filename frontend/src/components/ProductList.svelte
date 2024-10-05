<script>
	import Image from './Image.svelte';
	// import HorizontalScrollContainer from './HorizontalScrollContainer.svelte';
	export let content = [];

	let title = content.title || '';
	let subtitle = content.subtitle || '';
	let items = content.items || [];




</script>


	<section>
		<div class="container">
			<h2>{title}</h2>
			<p>{subtitle}</p>
			<!-- <div class="wrapper"
			on:mousedown={(e)=>onMouseDown(e)}
			on:mouseup={(e)=>onMouseUp(e)}
			on:mousemove={(e)=>onMouseMove(e)}
			on:mouseleave={(e)=>onMouseLeave(e)}
			> -->
			<div class="wrapper"
			>
				{#each items as item}
				<div class="item">
					<div class="img-wrapper">
						<Image
							asset={item.asset}
							focalPoint={item.focalPoint}
							attributes={{
								sizes: '(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw'
							}}
						/>
					</div>
					<div>
						<h3>{item.product}</h3>
						<p class="details" >{item.price} NOK</p>
						<p class="details">{item.description}</p>
					</div>
				</div>
			{/each}
		
		</div>
		</div>
	</section>


<style lang="scss">
	@use '$lib/styling/breakpoints';

	.container{
		padding-right: 0;

		@include breakpoints.breakpoint(medium){
			padding-right: var(--bleed);
	}
	}

.wrapper{
	display: flex;
	width: 100%;
	gap: 1rem;
	overflow-x: auto;
	touch-action: pan-x;
	cursor: grab;
	scroll-behavior: smooth;


	@include breakpoints.breakpoint(medium){
		display: grid;
		grid-template-columns: repeat(2, 1fr); 
		gap: 2em;
	}
}

.item{
min-width: calc(45% - .5rem);
max-width:calc(45% - 3rem) ;
aspect-ratio: 1;
scroll-snap-align: start;
user-select: none;
display: flex;
flex-direction: column;
flex-shrink: 0;

.details{
	margin: 0;
}

.img-wrapper{
	height: 100%;
}

@include breakpoints.breakpoint(medium){
max-width: 100%;
	}

}

.wrapper::-webkit-scrollbar
{
	width: 0;
}
 
</style>
