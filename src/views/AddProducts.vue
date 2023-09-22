<template>
  <ProductDetails />
</template>

<script>
import ProductDetails from '@/components/ProductDetails.vue';
export default {
  components: {
    ProductDetails
  },

  mounted() {
    window.scrollTo(0, 0)
  },
}
</script>
<style>

</style>