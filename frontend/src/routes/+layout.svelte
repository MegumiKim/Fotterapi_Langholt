<script>
	import './styles.scss';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import { page } from '$app/stores';

	export let data;
	const siteSettings = data.siteSettings[0];

	// const coryRight = siteSettings;
	let isScrollingDown = false;
	let isScrollingUp = false;
	let isAtTop = false;
	let lastScrollY = 0;


	function onScroll(event) {
		//Get the vertical scroll position 
		const currentY = Math.max(window.pageYOffset || document.documentElement.scrollTop, 0);
		
		isScrollingDown = currentY > lastScrollY;
		isScrollingUp = lastScrollY > currentY;
		isAtTop = currentY === 0;
		lastScrollY = currentY;

		document.body.classList.toggle('is-scrolling-down', isScrollingDown);
		document.body.classList.toggle('is-scrolling-up', isScrollingUp);
		document.body.classList.toggle('at-top', isAtTop);

	}
</script>

<svelte:head></svelte:head>
<svelte:window on:scroll={onScroll} />
<Header />
<main>
	<slot />
</main>
<Footer siteSettings={siteSettings} />
