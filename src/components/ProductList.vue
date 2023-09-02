<template>
  <div v-if="groups.length">
    <div 
      class="container" 
      v-for="group in activeGroups" 
      :key="group.Codigo"
    > 
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
  <!-- <v-else>
    Oops! nenhum produto a ser exibido 😢
  </v-else> -->
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

    }
  },

  computed: {
    groups() {
      return this.$store.state.groups
    },

    activeGroups() {
      return this.groups.filter((group) => {
        return group.idcategoria === this.categoryId
      })
    }
  }
}
</script>
<style>
hr {
  width: 100%;
}
</style>