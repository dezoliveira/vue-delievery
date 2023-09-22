<template>
  <Hero />
  <Accordion />
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

  mounted() {
    window.scrollTo(0, 0)
  }
}
</script>

<style>

</style>
