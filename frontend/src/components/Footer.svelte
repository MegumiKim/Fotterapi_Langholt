<script>
	import Image from '../components/Image.svelte';

	export let siteSettings;
	// console.log(siteSettings);
</script>

<footer class="">
	<div class="container inner-wrapper">
		<div class="contacts">
			<h3 class="">{siteSettings.title || 'Fotterapi Langholt'}</h3>
			<p>{siteSettings.address || 'Nansetgata 68, Larvik'}</p>
			<p>Tel/SMS: {siteSettings.phone || '904 24 340'}</p>
			<p>{siteSettings.phone || 'post@fotterapilangholt.no'}</p>
			<a
				href={siteSettings.facebook || 'https://www.facebook.com/profile.php?id=100088659642036'}
				class="fb"
				target="_blank"><img src="/asset/FB.svg" alt="FB logo" /> Facebook</a
			>
		</div>
		<div class="footer-right">
			<div class="logo"><Image asset={siteSettings.logo} focalPoint={null} /></div>
		</div>
	</div>
</footer>
<p class="bottom details">Copy right 2024 | Org.nr. {siteSettings.orgNumber || ''}</p>

<style lang="scss">
	@use '$lib/styling/typography' as typography;
	@use '$lib/styling/breakpoints' as breakpoints;
	@use '$lib/styling/colors';

	footer {
		padding: 2em 0 1em 0;
		border-top: 2px #b3b2b2 solid;
	}
	.inner-wrapper {
		display: flex;
		justify-content: space-between;
		gap: 2em;

		.logo {
			margin: auto;
			max-width: 6em;
			@include breakpoints.breakpoint(medium) {
				max-width: 7em;
			}
		}
		.contacts {
			flex-shrink: 0;

			h3 {
				margin: 0;
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
		.contacts {
			display: flex;
			flex-direction: column;
			gap: 0.5em;

			p {
				margin: 0 0;
			}
		}
	}
	.bottom {
		background: colors.$primary;
		color: white;
		margin-bottom: 0;
		text-align: center;
		padding: 2em 0;
	}
</style>
