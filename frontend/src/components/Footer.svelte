<script>
	import Image from '../components/Image.svelte';

	export let siteSettings;
	// console.log(siteSettings);
</script>

<footer class="">
	<div class="container inner-wrapper">
		<div class="contacts">
			<h3 class="">{siteSettings.title || 'Fotterapi Langholt'}</h3>
			<p class="details">{siteSettings.address || 'Nansetgata 68, Larvik'}</p>
			<p class="details">Tel/SMS: {siteSettings.phone || '904 24 340'}</p>
			<p class="details">{siteSettings.email || 'post@fotterapilangholt.no'}</p>
			<a
				href={siteSettings.facebook || 'https://www.facebook.com/profile.php?id=100088659642036'}
				class="fb"
				target="_blank"><img src="/asset/FB.svg" alt="FB logo" /> Facebook</a
			>
		</div>
		<div class="footer-right">
			<div class="logo"><Image asset={siteSettings.logo} focalPoint={null} />
			
			</div>
			<p class=" details">Org.nr. {siteSettings.orgNumber || ''}</p>
		</div>
	</div>
</footer>


<style lang="scss">
	@use '$lib/styling/typography' as typography;
	@use '$lib/styling/breakpoints' as breakpoints;
	@use '$lib/styling/colors';

	footer {
		padding: 2em 0 1em 0;
		background-color: colors.$primary;
		color: white;
	}
	.inner-wrapper {
		display: flex;
		justify-content: space-between;
		gap: 2em;

		.logo {
			margin: auto;
			max-width: 6em;
border-radius: 20%;
overflow: hidden;
aspect-ratio: 1;
			@include breakpoints.breakpoint(medium) {
				max-width: 7em;
			}
		}
		.contacts {
			/* flex-shrink: 0; */
			display: flex;
			flex-direction: column;
			/* gap: 0.5em; */

			p {
				margin: 0 0;
			}

			h3 {
				margin-bottom: 0.5em;
				margin-top: 0;
			}
		}

		a {
			text-decoration: underline;
		}

		.footer-right {
			margin: auto 0;
		}

		.fb {
			display: flex;
			align-items: center;
			& img {
				max-width: 2em;
			}
		}
	}

</style>
