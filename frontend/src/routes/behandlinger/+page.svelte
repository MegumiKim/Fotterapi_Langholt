<script>
	import Banner from "../../components/Banner.svelte";
import ContentBlocks from "../../components/ContentBlocks.svelte";
import Image from "../../components/Image.svelte";
	import WelcomeBanner from "../../components/WelcomeBanner.svelte";

export let data;
const pageData = data.pageData[0];
console.log(pageData);

</script>

<!-- <div class="top-banner">

  <div class="img-overlay">
     <img src={pageData.image.url} alt="">
  </div>
  <div class="h1-wrapper">
    <h1>{pageData.heading}</h1>
    <p>{pageData.subHeading}</p>
  </div>
</div> -->


<Banner image={pageData.image} heading={pageData.heading} subHeading={pageData}/>

<section class="container behandlinger">
  {#each pageData.treatments as treatment}


  <div class="flex">
    <div>
      <h2>{treatment.title}</h2>
      {#if treatment.price.price }<p class="price">NOK {treatment.price.price}</p> {/if}
    {#if treatment.price.text }<p class="details">{treatment.price.text}</p>{/if}
    </div>
    <div><p>{treatment.description}</p></div>


  </div>
  {/each}
</section>

<ContentBlocks blocks={pageData.contentBlocks}/>


<style lang="scss">
@use '$lib/styling/breakpoints';


.behandlinger{
  display: flex;
  flex-direction: column;
  gap: 2em;
}

  .flex{
    p{
      margin-top: 0;
    }

  }

  .price {
    margin-top: 0.5em;
    &:before{
      content: "| ";
    }
    margin-bottom: 0;
  }

  h2{
    font-family: 'Bodoni Moda SC', serif;
    line-height: 1em;
    margin: 0em auto;
  }

 
</style>