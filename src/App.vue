<template>
  <Header />
  <router-view/>
</template>
<script>
import Header from '@/components/Header.vue'
import Home from '@/views/Home.vue'
export default {
  name: 'App',
  components: {
    Header,
    Home,
  },
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
  align-items: center;
  justify-content: center;

  /* gap: 10px */
}
</style>
