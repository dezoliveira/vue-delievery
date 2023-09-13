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
    <nav class="bag">
      <router-link :to="{ name: 'shoppingBag'}">
        <i>
          <fa icon="bag-shopping" />
        </i>
        <span class="bag-quantity">{{ this.productsInBag.length }}</span>
      </router-link>
    </nav>
  </navbar>
</template>
<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState([
      'productsInBag'
    ]),

    currentRouterName() {
      return this.$route.name
    },
  }
}
</script>
<style scoped>
  .container {
    position: -webkit-sticky; /* Safari */
    position: fixed;
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

  .bag {
    font-size: 24px;
    position: relative;
  }

  .bag-quantity {
    background: crimson;
    border-radius: 100%;
    padding: 2px 6px;
    font-size: 10px;
    position: absolute;
    top: 15px;
    left: 10px;
  }
</style>
