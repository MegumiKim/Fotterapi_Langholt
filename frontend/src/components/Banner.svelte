<script>

export let image;
export let heading;
export let subHeading;


</script>

<div class="banner" >
  <div class="img-overlay">
    <!-- <Image asset={pageData.image} focalPoint={pageData.focalpoint}/> -->
     <img src={image.url} alt="">
  </div>
  <div class="h1-wrapper">
    <h1 class="title">{heading}</h1>
    <p>{subHeading} </p>
  </div>
</div>

<style lang="scss">
 img{
    width: 100%;
    height: 100%;
object-fit: cover;
  }

  //Banner

  .banner {
    position: relative;
    height: 30vh;

  }
  //Image overlay
.img-overlay {
height: 100%;
	// Create the overlay
	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: black; // Color of the darkening overlay
		opacity: 0.5; // Adjust this to control the darkness
	}
}

.h1-wrapper {
	position: absolute;
	top: 0;
	text-align: left;
  padding-left:  var(--bleed);
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	justify-content: center;
	gap: 2em;

	h1,
	p {
		margin: 0;
		color: white;
	}
}

</style>