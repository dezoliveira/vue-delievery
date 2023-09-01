<template>
  <navbar class="container">
    <nav class="logo">
      <!-- <a href="#">
        <h1>VueDelievery</h1>
      </a> -->
      <router-link :to="{ name: 'home' }">
        <span 
          v-if="currentRouterName !== 'home'"
          style="
            display: flex; 
            align-items: center;
            gap: 5px
          "
        >
          <i>
            <fa icon="arrow-left"/>
          </i>
          <h1>Voltar</h1>
        </span>
        <span v-else>
          <h1>VueDelievery</h1>
        </span>
      </router-link>
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
  computed: {
    currentRouterName() {
      return this.$route.name
    }
  }
}
</script>
<style scoped>
  .container {
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;

    z-index: 1;

    width: 100%;
    height: 40px;
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
