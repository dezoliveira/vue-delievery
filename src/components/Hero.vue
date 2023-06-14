<template>
  <div class="container">
    <div>
      <img src="../assets/images/logo.jpg"/>
      <h2>CHICKEN SC</h2>
      <span class="city">
        <i></i>
        <h4>SÃO JOSÉ DO RIO PARDO - SP</h4>
      </span>
    </div>
    <div class="row">
      <span class="status">FECHADO</span>
      <span>RETIRAR | ENTREGAR</span>
      <span class="time">00:10:00</span>
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

  .container .row {
    display: flex;
    gap: 15px;
  }

  .container img {
    width: 120px;
  }
</style>
