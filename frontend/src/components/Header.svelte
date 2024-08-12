<script>
	import { onMount } from 'svelte';
	let headerVisible = false;

	onMount(() => {
		headerVisible = true;
	});

	console.log(headerVisible);
	
</script>


<header class:visible={headerVisible} class="container">
	<!-- <a href="/" class="logo"><img src="/asset/logo.jpg" alt=""></a> -->

	<nav>
		<a href="/" >Home</a>
		<a href="" >Om</a>
		<a href="">Behandlinger</a>
		<a href="https://helse.aspit.no/landing?clinicId=26d5e3e0-768c-4e24-9af8-7b34f181db8a&fbclid=IwY2xjawEnOGhleHRuA2FlbQIxMAABHYYMx6WWrAOXCYVEoNRczEKFTLNQLMU93TIhevFGtQ_WW2MzS0Vn2iTuYg_aem_9qtup80mJ93Uavt4Cbs1fQ">Bestill Time</a>
	</nav>
</header>

<style lang="scss">
	@use '$lib/styling/typography' as typography;

	// Nav bar
	header {
		background: #fff;
		color: black;
		position: sticky;
		top: 0;
		padding-top: 1em;
		padding-bottom: 1em;
		transition:
			color 0.3s ease,
			transform 0.5s ease;
		transform: translateY(-100%);
	}

	.visible {
		transform: translateY(0);
	}

	.active {
		border-bottom: 1px solid;
		padding-bottom: 0.2em;
	}

	nav {
		display: flex;
		width: 100%;
		justify-content: center;
		gap: 2em;
		@include typography.details;
	}

	/* On Scroll animation */
	:global(.is-scrolling-down) header {
		transform: translateY(-100%);
	}
</style>
