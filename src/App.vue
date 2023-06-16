<template>
  <Hero />  
  <div>data.empresa.name</div>
</template>

<script>
import Hero from './components/Hero.vue'
import db from './store/db.js'
export default {
  name: 'App',
  components: {
    Hero
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
}
</style>
