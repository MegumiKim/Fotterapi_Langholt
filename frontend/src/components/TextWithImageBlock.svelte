<script>
	import Image from "./Image.svelte";
  import {PortableText} from '@portabletext/svelte'

 export let content;
 console.log(content);
 
 const components = {};

</script>

<section class="flex">
  <div class="text-wrapper">
    {#if content.heading}
    <h2>{content.heading}</h2>
    {/if}
    {#if content.richText}
    <PortableText value={content.richText} {components} />
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
margin: auto;

  h2{
    text-align: center;
  }
}

.img-wrapper{
margin: auto;
}

.btn-wrapper{
  display: block;

  .btn{
    margin: auto;
    text-align: center;
  }



}


</style>