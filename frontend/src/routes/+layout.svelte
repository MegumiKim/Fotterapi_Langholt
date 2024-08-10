<script>
  import './styles.scss'
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';

</script>

<svelte:head></svelte:head>

<Header />
<main>
  <slot />
</main>
<Footer />