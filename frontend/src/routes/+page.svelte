<script>
	import ContentBlocks from '../components/ContentBlocks.svelte';
import Locations from '../components/Locations.svelte';
  import WelcomeBanner from '../components/WelcomeBanner.svelte';

  export let data;
  const homePageData = data.homePageData[0];
  console.log(data);

</script>
{#if homePageData}

<WelcomeBanner 
heading={homePageData.heading}
subheading={homePageData.subHeading}
 image={homePageData.image} />
{/if}

<ContentBlocks blocks={homePageData.contentBlocks}/>

<!-- <section id="om" class="container">
  <div class="inner-wrapper-om">
    <h2>Autorisert Fotterapeut</h2>
    <div class="autorisert-wrapper">
      <img src="asset/autorisert.jpeg" alt="">
    </div>

    <p> Med spesialisert utdanning og sertifisering hjelper jeg med alt fra inngrodde negler og hard hud til forebyggende fotpleie. Jeg bruker kun høykvalitetsprodukter og følger strenge hygienestandarder.  </p>
    <a href="#" class="btn">Bestill Time</a>
  </div>
</section> -->


<!-- <section class="flex container">
  <div>
    <p>Jeg tilbyr behandlinger både på min klinikk i Larvik sentrum på mandager og torsdager, samt på Stavern Sykehjem på onsdager. På fredager tilbyr jeg hjemmebesøk for de som trenger det. Klinikken holder stengt i helgene.</p>


  </div>
<div><img src="asset/logo.jpg" alt=""></div>
</section> -->

<Locations />





<style lang="scss">


img{
  margin: auto;
  display: block;
  width: 100%;
  max-width: 400px;
}

.autorisert-wrapper{

  display: flex;
  justify-content: center;
img{
  max-width: 100px;
}
}


#om {
  text-align: center;

}

.inner-wrapper-om {
  max-width: 500px;
margin: auto;
}

div p {
  text-align: center;
}


</style>