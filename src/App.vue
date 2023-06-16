<template>
  <Hero />
    <Accordion />
  <!-- <div v-for="products in data.products" :key="data.products.id"> -->
  <!--   {{ products.name }} -->
  <!-- </div> -->
</template>

<script>
import Hero from './components/Hero.vue'
import Accordion from './components/Accordion.vue'
import db from './store/db.js'
export default {
  name: 'App',
  components: {
    Hero,
    Accordion
  },

  data() {
    return {
      data: db
    }
  },

  mounted() {
    console.log(this.data)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 20px;

  /* Passar o flex e gap para a home no router */
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>
