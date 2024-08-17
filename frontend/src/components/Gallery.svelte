<script>
	import Image from './Image.svelte';
	export let content = [];
</script>


	<section class="grid">
    {#each content as item}
		<div class="small-span-6">
            <Image asset={item.asset} focalPoint={item.focalPoint} />
          </div>
      {/each}
	</section>






<!-- <script>
	import Image from "./Image.svelte";

  export let content;
  // console.log(content);
  
 </script>

 <section class="">
  {#each content as item}
    <div class="flex">
      <Image asset={item.asset} focalPoint={null}/>
    </div>
  {/each}
 </section> -->



