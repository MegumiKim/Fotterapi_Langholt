<script>
	import { transformImage } from '$lib/utils/transformImage.js';
	export let asset;
	export let focalPoint;

	export let transforms = [
		{ w: 1920 },
		{ w: 1600 },
		{ w: 1200 },
		{ w: 900 },
		{ w: 700 },
		{ w: 480 }
	];
	export let config = {};
	export let attributes = {};
	$: images = transformImage(
		asset.url,
		transforms,
		Object.assign(
			{
				fit: 'crop',
				auto: 'format',
				crop: 'entropy',
				...(focalPoint
					? {
							'fp-x': focalPoint.x,
							'fp-y': focalPoint.y,
							crop: 'focalpoint'
						}
					: {})
			},
			config
		)
	);
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<img
	src={images.src()}
	srcset={images.srcset()}
	{...Object.assign({
		loading: 'lazy',
		width: images.width(),
		height: images.height(),
		alt: asset.altText || '',
		sizes: '100vw',
		...attributes
	})}
/>
