<template>
  <!-- <div v-if="groups.length"> -->
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
      <Suspense>
        <template #default>
          <ProductCard
            :groupCodigo="group.Codigo"
          />
        </template>
        <template #fallback>
          <ProductCardSkeleton/>
        </template>
      </Suspense>
    </div>
  <!-- </div>
  <v-else>
    Oops! nenhum produto a ser exibido 😢
  </v-else> -->
</template>
<script>
import ProductCard from './ProductCard.vue'
import ProductCardSkeleton from './skeletons/ProductCardSkeleton.vue'
export default {
  components: {
    ProductCard,
    ProductCardSkeleton
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
  },

  computed: {
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