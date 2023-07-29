<template>
  <navbar class="container">
    <nav class="logo">
      <img src="../assets/images/logo3.jpg" />
    </nav>
    <nav class="city">
      <i>
        <fa icon="location-dot" />
      </i>
      <h4>São José do Rio Pardo</h4>
    </nav>
  </navbar>
</template>
<script>
export default {

}
</script>
<style scoped>
  .container {
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    left: 0;

    width: 100%;
    height: 50px;
    background: #10b981;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    overflow: hidden;
  }

  .logo {
    color: #fff;
    width: 32px;
  }
  
  .city {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    font-size: small;
    color: #fff;
  }

  .city i {
    color: crimson;
  }
</style>
