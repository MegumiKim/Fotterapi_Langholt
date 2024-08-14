<script>

  const behandlinger = [
    {
      title:'Fotterapi',
      desc:'En vanlig fotterapibehandling begynner med ett varmt og avslappende fotbad før fjerning av hard hud, eventuelle torner, klipp, sliping, og god rens av negler. Avsluttes med en deilig fotmassasje med pleiende fotkrem og negleolje. Jeg gir også råd og veiledning med hensyn til nettopp dine føtter, sko og såler.',
      price:'800 ~'
    },
    {
      title:'Fotmassasje',
      desc:'Unn deg selv en god fotmassasje der fokuset er å løse opp ømheter og spenninger i føttene. Gir økt blodsirkulasjon i legger og føtter. Alene eller i kombinasjon med annen behandling. ',
      price:'800 ~'
    },
    {
      title:'Fjerne torn/fotvorte',
      desc:'Består av fjerning med skalpell, sliping, påføring av middel(fotvorte) og avlastning i filt for smertelindring.',
      price:'300 ~'
    },
  ]

  const images = [
    '3', '5', 'image'
  ]
</script>


<section class="container">
  <h1>Behandlinger</h1>



</section>


<section class="container behandlinger">
{#each behandlinger as behandling}


  <div class="flex">
<div>
  <h2>{behandling.title}</h2>
<p class="price">NOK: {behandling.price}</p> 
</div>
<div>
  <p>{behandling.desc}</p>
</div>

</div>
{/each}
</section>

<section class="gallery container">
<div class="flex">
  {#each images as img}
  <img src={`/asset/fotterapi_${img}.jpg`} alt="">
{/each}
</div>


</section>

<style lang="scss">

/* h1 {
  margin-top: 0;
  padding: 1em;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("asset/fotterapi_image.jpg");
  height: 50vh;
  background-size: cover;
  background-blend-mode: darken;
  color: white;
} */

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