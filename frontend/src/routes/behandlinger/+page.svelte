<script>
import ContentBlocks from "../../components/ContentBlocks.svelte";
import Image from "../../components/Image.svelte";


export let data;
const pageData = data.pageData[0];
console.log(pageData);

</script>


<section class="container">
  <h1>{pageData.heading}</h1>
  <p>{pageData.subHeading}</p>
  <div>
    <Image asset={pageData.image} focalPoint={pageData.focalPoint}/>
  </div>
</section>


<section class="container behandlinger">
  {#each pageData.treatments as treatment}


  <div class="flex">
    <div>
      <h2>{treatment.title}</h2>
      {#if treatment.price.price }<p class="price">NOK: {treatment.price.price}</p> {/if}
    {#if treatment.price.text }<p>{treatment.price.text}</p>{/if}
    </div>
    <div>
      <p>{treatment.description}</p>
    </div>
  </div>
  {/each}
</section>

<ContentBlocks blocks={pageData.contentBlocks}/>


<style lang="scss">

.behandlinger{
  display: flex;
  flex-direction: column;
  gap: 2em;
}
  .flex{
    div{
     margin: 0;
    }
  }

  .price {
    margin-top: 0.5em;
    &:before{
      content: "| ";
    }
  }

  h2{
    font-family: 'Bodoni Moda SC', serif;
    line-height: 1em;
    margin: 0em auto;
  }

  img{
    aspect-ratio: 1;
    width: 100%;
object-fit: cover;
  }
</style>