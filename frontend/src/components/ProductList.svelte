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
					<div class="description">
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
	scroll-behavior: smooth;


	@include breakpoints.breakpoint(medium){
		display: grid;
		grid-template-columns: repeat(3, 1fr); 
		gap: 2em;
	}
}

.item{
min-width: calc(45% - .5rem);
max-width:calc(45% - 3rem) ; 
scroll-snap-align: start;
display: flex;
flex-direction: column;
flex-shrink: 0;


h3{ margin: 0.5em 0 0 0;}
.details{
	margin: 0;
}

.img-wrapper{
height: 250px;
	@include breakpoints.breakpoint(medium){
		height: 350px;
	}

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
