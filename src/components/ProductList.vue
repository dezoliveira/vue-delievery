<template>
  <div 
    class="container" 
    v-for="group in groups" 
    :key="group.Codigo"
  > 
    <div 
      class="card"
      v-if="categoryId === group.idcategoria"
    >
      <h1> 
        <strong>
          {{ group.Descricao }}
        </strong> 
      </h1> 
      <hr />
      <ul>
        <li 
          v-for="product in products"
          :key="product.Codigo"
          :id="product.Codigo"
        >
          <span v-if="group.Codigo === product.idgrupo">
            {{ product.Descricao }} - {{ formatValue(product.Venda) }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    categoryId: null
  },
  data() {
    return {
      groups : [],
      products : []
    }
  },

  methods: {
    async loadGroups() {
      const req = await fetch("http://localhost:82/api/grupos.php?emp=1")
      const data = await req.json()
      this.groups = data
    },

    async loadProducts() {
      const req = await fetch("http://localhost:82/api/mercadorias.php?emp=1")
      const data = await req.json()
      this.products = data
    },

    formatValue(value) {
      if (value) {
        return parseInt(value).toFixed(2)
      }
    }
  },

  mounted() {
    this.loadGroups()
    this.loadProducts()
  }
}
</script>
<style>
  .container {
    width: 100%;
  }

  .card {
    padding: 10px;
  }

  hr {
    width: calc(100vw - 20%);
  }
</style>