<script>
	import { onMount } from 'svelte';
	let headerVisible = false;

	onMount(() => {
		headerVisible = true;
	});
</script>

<header class:visible={headerVisible}>
	<!-- <a href="/" class="logo"><img src="/asset/logo.jpg" alt=""></a> -->
	<nav>
		<a href="/">Home</a>
		<a href="/om">Om</a>
		<a href="/behandlinger">Behandlinger</a>
		<a
			target="_blank"
			href="https://helse.aspit.no/landing?clinicId=26d5e3e0-768c-4e24-9af8-7b34f181db8a&fbclid=IwY2xjawEnOGhleHRuA2FlbQIxMAABHYYMx6WWrAOXCYVEoNRczEKFTLNQLMU93TIhevFGtQ_WW2MzS0Vn2iTuYg_aem_9qtup80mJ93Uavt4Cbs1fQ"
			>Bestill Time</a
		>
	</nav>
</header>

<style lang="scss">
	@use '$lib/styling/typography' as typography;

	// Nav bar
	header {
		z-index: 1000;

		position: fixed;
		/* position: sticky; */
		/* background: #fff; */
		color: #fff;
		top: 0;
		padding-top: 2em;
		padding-bottom: 2em;
		width: 100%;
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
		margin: auto;
		display: flex;
		/* wi<dth: 100%; */
		justify-content: center;
		gap: 2em;
		font-weight: 300;
		@include typography.details;
	}

	/* On Scroll animation */
	:global(.is-scrolling-down) header {
		transform: translateY(-100%);
	}
	:global(.is-scrolling-up) header {
		background: white;
		color: #000;
	}
	:global(.at-top) header {
		background: none;
		color: white;

		transition:
			color 0.5s ease;
			background: 1s ease;
	}
</style>
