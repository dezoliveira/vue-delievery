<template>
  <div v-if="groups">
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
  </div>
  <v-else>
    Oops! nenhum produto a ser exibido 😢
  </v-else>
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
      API_URL : ''
    }
  },

  methods: {
    async loadGroups() {
      const req = await fetch(`${this.API_URL}/grupos.php?emp=1`)
      const data = await req.json()
      this.groups = data
    },
  },

  mounted() {
    this.API_URL = process.env.VUE_APP_API_URL
    this.loadGroups()
  }
}
</script>
<style>
hr {
  width: 100%;
}
</style>