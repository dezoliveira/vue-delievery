<template>
  <Hero />
  <Accordion />
  <div v-for="product in products" :key="product.Codigo">
    <h1>product.Descricao</h1>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue'
import Accordion from '@/components/Accordion.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    Accordion,
  },

  data() {
    return {
      
    }
  },
}
</script>

<style>

</style>
