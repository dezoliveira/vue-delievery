<template>
  <div class="container">
    <div class="company__info">
      <img src="../assets/images/logo.jpg"/>
      <h2>CHICKEN SC</h2>
      <span class="city">
        <i>
          <fa icon="location-dot" />
        </i>
        <h4>SÃO JOSÉ DO RIO PARDO - SP</h4>
      </span>
    </div>
    <div class="company__status">
      <span class="status"> FECHADO </span>
      <span> RETIRAR | ENTREGAR </span>
      <span class="time">
        <i><fa icon="clock" /></i>
        <label>00:10:00</label>
      </span>
    </div>
  </div>

</template>
<script>
export default {
  
}
</script>
<style>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .company__info  img {
    width: 120px;
  }

  .company__info .city {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }

  .company__info .city i {
    color: crimson;
  }

  .company__status {
    display: flex;
    gap: 15px;
    font-size: 15px;
  }

  .company__status .time i {
    padding: 5px;
  }
</style>
