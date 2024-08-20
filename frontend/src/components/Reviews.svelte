<script>
	export let content;
</script>

<section>
	<div class="grid">
		{#each content as review}
			<div class="cell medium-span-6">
				<blockquote class="review-card">
					<p class="comment">{review.text}</p>
					<p class="by-line">- {review.by}</p>
				</blockquote>
			</div>
		{/each}
	</div>
</section>

<style lang="scss">
	.flex {
		gap: 0;
	}
	.review-card {
		background-color: rgb(251, 245, 236);
		padding: 1em;
		border-radius: 20px;

		.comment {
			font-style: italic;
		}

		.by-line {
			text-align: end;
			margin-top: 0.5em;
			margin-end: 1em;
		}
	}
</style>
