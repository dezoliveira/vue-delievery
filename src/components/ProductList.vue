<template>
  <div 
    class="container" 
    v-for="group in groups" 
    :key="group.Codigo"
  > 
    <div v-if="categoryId === group.idcategoria">
      <h1> 
        <strong>
          {{ group.Descricao }}
        </strong> 
      </h1> 
      <hr />
      <ProductCard 
        :groupCodigo="group.Codigo"
      />
    </div>
  </div>
</template>
<script>
import ProductCard from './ProductCard.vue'
export default {
  components: {
    ProductCard
  },

  props: {
    categoryId: null
  },

  data() {
    return {
      groups : [],
    }
  },

  methods: {
    async loadGroups() {
      const req = await fetch("http://localhost:82/api/grupos.php?emp=1")
      const data = await req.json()
      this.groups = data
    },
  },

  mounted() {
    this.loadGroups()
  }
}
</script>
<style>
hr {
  width: 100%;
}
</style>