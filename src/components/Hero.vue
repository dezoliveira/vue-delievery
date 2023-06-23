<template>
  <div class="hero">
    <div class="hero-image">

    </div>
    <div class="hero-info">
      <div class="logo">
        <img class="" src="../assets/images/logo.jpg"/>
      </div>
      <h2>CHICKEN SC</h2>
      <span class="city">
        <i>
          <fa icon="location-dot" />
        </i>
        <h4>SÃO JOSÉ DO RIO PARDO - SP</h4>
      </span>
    </div>
    <div class="hero-status">
      <span class="status"> FECHADO </span>
      <span> RETIRAR | ENTREGAR </span>
      <span class="time">
        <i><fa icon="clock" /></i>
        <span>00:10:00</span>
      </span>
    </div>
  </div>

</template>
<script>
export default {
  
}
</script>
<style>
  .hero {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .hero-image {
    position: absolute;
    width: 100%;
    height: 200px;
    z-index: -1;
    top: 0;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url('../assets/images/background.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .hero-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }

  .hero-info .logo {
    display: flex;
    align-items: center;
    justify-content: center;

    outline: 10px solid crimson;
    padding: 5px;
    background: #fff;
    margin-top: 50px;
    width: 100px;
    border-radius: 5%;
    gap: 15px;
  }

  .hero-info .logo img {
    width: 100%;
  }

  .hero-info .city {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }

  .hero-info .city i {
    color: crimson;
  }

  .hero-status {
    display: flex;
    gap: 15px;
    font-size: 15px;
  }

  .hero-status .time i {
    padding: 5px;
  }
</style>
