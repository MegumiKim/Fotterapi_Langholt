<!-- <h1>Fotterapi Langholt</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->

<script>
	export let data;

</script>


<section id="welcome">
  <div>
    <img src="/asset/test.jpg" alt="">
  </div>
  <h1 class="title">Fotterapi Langholt</h1>
</section>
<section id="main_menu" class="container">
<div class="main-menu-btn">Om</div>
<div class="main-menu-btn">Behandlinger</div>
<div class="main-menu-btn">Bestill Time</div>
</section>
<section id="om" class="container">
  <div class="inner-wrapper-om">
    <h2>Fotterapi</h2>
    <p>Som autorisert fotterapeut med helsefaglig kompetanse på fot og ankel,  behandler jeg lidelser knyttet til hud, negler, skjelett og muskler. Klinikken har lune og lyse lokaler på Ranvik i Sandefjord.</p>
    <a href="#" class="btn">Bestill Time</a>
  </div>
</section>
<section class="container">
  <h2>Lokaler & Åpeningstider</h2>

  <h3>Klinikken i Larvik</h3>
  <p>Mandag: 9:00 - 15:00</p>
  <p>Torsdag: 9:00 - 15:00</p>

  <h3>Starvarn Sykehjem</h3>
  <p>Onsdag: 9:00 - 15:00</p>

  <h3>Hjemme besøktjeneste</h3>
  <p>Etter avtale</p>




</section>



<style lang="scss">

  #main_menu{
    display: flex;
    justify-content: space-between;
  }

.main-menu-btn {
  border-radius: 50%;
  border: 5px black solid;
  height: 5em;
  width: 5em;
  align-content: center;
  text-align: center;
}

#om {
  text-align: center;
}

.inner-wrapper-om {
  max-width: 500px;
margin: 10% auto;

}
</style>