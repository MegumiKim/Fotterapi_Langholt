<script>
  import HorizontalScrollContainer from "./HorizontalScrollContainer.svelte"
	import Image from './Image.svelte';
	export let content = [];
</script>

    <HorizontalScrollContainer>
      <div class="horizontal-scroll">
      {#each content as item}
          <div class="">
              <Image asset={item.asset} focalPoint={item.focalPoint} />
            </div>
        {/each}
      </div>
    </HorizontalScrollContainer>



