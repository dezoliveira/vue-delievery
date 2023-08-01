<template>
  <navbar class="container">
    <nav class="logo">
      <a href="#">
        <h1>VueDelievery</h1>
      </a>
    </nav>
    <nav class="city">
      <h4>São José do Rio Pardo</h4>
      <i>
        <fa icon="location-dot" />
      </i>
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
  }

  .logo h1 {

    font-weight: 500;
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
