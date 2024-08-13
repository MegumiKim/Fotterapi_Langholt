<section id="welcome" class="">
  <div class="img_wrapper">
    <img src="/asset/fotterapi_3.jpg" alt="">
  </div>
  <div class="h1-wrapper">
    <h1 class="title">Fotterapi Langholt</h1>
    <p>Autorisert Fotterapeut </p>
  </div>
</section>

<style lang='scss'>


  #welcome {
    padding: 0;
    max-width: 1300px;
    margin: auto;
    position: relative;  
    img{
      opacity: 1;
      width: 100%;
      filter: brightness(50%)
    }


    .h1-wrapper{
      position: absolute;
      top: 0;
      text-align: center;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      justify-content: center;
      gap: 2em;
      h1, p{
        margin: 0;
        color: white;
      }

    }
  }
</style>