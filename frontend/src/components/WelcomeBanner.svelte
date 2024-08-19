<script>
import Image from "../components/Image.svelte";

export let heading;
export let subheading;
export let image;
export let focalpoint;

</script>


<div id="welcome" class="">
  <div class="img-overlay">
    <Image asset={image} focalPoint={focalpoint}/>
  </div>
  <div class="h1-wrapper">
    <h1 class="title">{heading}</h1>
    <p>{subheading} </p>
  </div>
</div>

<style lang='scss'>

  #welcome {
    /* padding: 0;
    max-width: 1300px;
    margin: auto; */
    position: relative;  
  }
</style>