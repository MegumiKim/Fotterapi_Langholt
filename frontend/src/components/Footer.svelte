<script>
	import Image from '../components/Image.svelte';

	export let siteSettings;
	console.log(siteSettings);
	
</script>


<footer class="container">

	<h3 class="">Fotterapi Langholt</h3>
		<div class="inner-wrapper">
			<div class="footer-right">
				<p class="details"> Org.nr. {siteSettings.orgNumber || ""}</p>
				<div class="logo"><Image asset={siteSettings.logo} focalPoint={null}/></div>
			</div>
			<div class="contacts">

				<p>Nansetgata 68, Larvik</p>
				<p>Tel/SMS: 904 24 340</p>
				<p>post@fotterapilangholt.no</p>
				<a href="https://www.facebook.com/profile.php?id=100088659642036" class="fb"><img src="/asset/FB.svg" alt="FB logo"> Facebook</a>
			</div>
		</div>
		<p class="credit details">Designet og utviklet av Megumi</p>


</footer>

<style lang="scss">
	@use '$lib/styling/typography' as typography;
	@use '$lib/styling/breakpoints' as breakpoints;
	@use '$lib/styling/colors';


	.inner-wrapper {
		@include breakpoints.breakpoint(medium){
			display: flex;
			justify-content: space-between;
			gap: 2em;
		}

		.logo {
			margin: auto;
			max-width: 5em;
		}

		.fb{
			img{
				max-width: 2em;
			}
				display: flex;
				align-items: center;
				/* gap: 1em; */
		}

		.footer-right{
			margin: auto 0;
		}



	}
	.credit{
		color: colors.$primary;
		margin: 2em auto;
		text-align: center;
		}

</style>
