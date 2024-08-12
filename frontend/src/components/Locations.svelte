<section class="container">

  <h2>Lokaler & Åpeningstider</h2>


  <p>Tel/SMS: 904 24 340</p>
  <div class="location-wrapper">
    <div>
      <h3>Klinikken i Larvik</h3>
      <p class="">Nansetgata 68, 3257 Larvik</p>
      <p>Mandag: 9:00 - 15:00</p>
      <p>Torsdag: 9:00 - 15:00</p>
    </div>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7446.292911245962!2d10.02753287828931!3d59.06081531117502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4646e9953a855e47%3A0xb89e6bdc04e74693!2sNansetgata%2068%2C%203257%20Larvik!5e0!3m2!1sno!2sno!4v1723486761449!5m2!1sno!2sno" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>

  <div class="location-wrapper">
    <div>
      <h3>Stavarn Sykehjem</h3>
      <p>Onsdag: 9:00 - 15:00</p>
    </div>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2054.9816545803806!2d10.02259911284994!3d58.99877183732971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4646e94e1284c047%3A0xc628407e2252a7bc!2sStavern%20sykehjem!5e0!3m2!1sno!2sno!4v1723486786441!5m2!1sno!2sno" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>

  <div class="location-wrapper">

<div >
  
      <h3>Hjemme besøktjeneste</h3>
      <p>Etter avtale</p>
</div>
<div></div>
</div>




</section>

<style lang="scss">

  @use '$lib/styling/breakpoints';
  .container {
    display: flex;
    flex-direction: column;
    gap: 2em;

    h2{
      text-align: center;
    }
  }
  .location-wrapper {
display: flex;
flex-direction: column;
gap: 3em;
  @include breakpoints.mq(medium){
    flex-direction: row;
    justify-content: center;
  }

  img, p , div {
    flex: 1;
    max-width: 350px;
  }
}
</style>