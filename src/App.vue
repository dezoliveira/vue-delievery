<template>
  <Header />
  <Hero />
  <Accordion />
</template>

<script>
import Header from './components/Header.vue'
import Modal from './components/Modal.vue'
import Hero from './components/Hero.vue'
import Accordion from './components/Accordion.vue'
import db from './store/db.js'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    Accordion,
    Modal
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
  /* Passar o flex e gap para a home no router */
  display: flex;
  flex-direction: column;
  /* gap: 10px */
}
</style>
