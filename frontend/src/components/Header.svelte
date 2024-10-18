<script>
	import { onMount } from 'svelte';
	let headerVisible = false;

	onMount(() => {
		headerVisible = true;
	});
</script>

<header class:visible={headerVisible}>
	<nav class="details">
		<a href="/">Home</a>
		<a href="/om">Om</a>
		<a href="/behandlinger">Behandlinger</a>
		<a href="/contact">Bestill Time</a>
	</nav>
</header>

<style lang="scss">

	// Nav bar
	header {
		z-index: 1000;

		position: fixed;
		color: #fff;
		top: 0;
		padding: 2em 0;
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
		justify-content: center;
		gap: 2em;
		font-weight: 300;
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

		transition: color 0.5s ease;
		background: 1s ease;
	}
</style>
