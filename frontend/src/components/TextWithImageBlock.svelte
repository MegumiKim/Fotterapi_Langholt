<script>
	import Image from "./Image.svelte";


 export let content;
 console.log(content);
 
</script>

<section class="flex">
  <div class="text-wrapper">
    {#if content.heading}
    <h2>{content.heading}</h2>
    {/if}
    {#if content.richText}
    <p>Rich Text</p>
    {/if}
    {#if content.cta}
    <div class="btn-wrapper"><a href={content.cta.link} class="btn">{content.cta.text}</a></div>
    {/if}
  </div>

  {#if content.image}
  <div class="img-wrapper">
    <Image asset={content.image} focalPoint={content.focalpoint}/>
  </div>
  {/if}
</section>

<style lang="scss">


/* section{
  display: flex;

  div{
    flex:1
  }
} */
.text-wrapper{
text-align: center;
}

.img-wrapper{

}

.btn-wrapper{
  display: block;

  .btn{
    margin: auto;
  }
}
</style>