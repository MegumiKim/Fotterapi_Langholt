<script>
  import './styles.scss'
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';

	let isScrollingDown = false;
	let lastScrollY = 0;

	function onScroll(event) {
		const currentY = Math.max(window.pageYOffset || document.documentElement.scrollTop, 0);
		isScrollingDown = currentY > lastScrollY;
		lastScrollY = currentY;

		document.body.classList.toggle('is-scrolling-down', isScrollingDown);
	}
</script>

<svelte:head></svelte:head>
<svelte:window on:scroll={onScroll} />
<Header />
<main>
  <slot />
</main>
<Footer />