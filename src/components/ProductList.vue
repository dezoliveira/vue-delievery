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
      <div class="card-header">
        <h1> 
          <strong>
            {{ group.Descricao }}
          </strong> 
        </h1> 
        <hr />
      </div>
      <div class="card-body">
        <ul>
          <li 
            v-for="product in products"
            :key="product.Codigo"
            :id="product.Codigo"
          >            
            <div v-if="group.Codigo === product.idgrupo" class="container">
              <div class="product-details">
                <span>{{ product.Descricao }}</span>
                <label>Observação:</label>
                <span> 
                  {{ product.Observacao ? product.Observacao : 'Indisponível' }} 
                </span>
                <span class="product-price">{{ formatValue(product.Venda) }}</span>
              </div>
              <span class="product-img">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.portaldofranchising.com.br%2Fwp-content%2Fuploads%2F2017%2F10%2Fkfc.jpg&f=1&nofb=1&ipt=83571c81ece60eae4693cd0d86d267a339ae59a8f12d19913250d57a31342cbc&ipo=images" />
              </span>
            </div>
            <hr v-show="group.Codigo === product.idgrupo"/>
          </li>
        </ul>
      </div>
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
    width: 53vh;
  }

  .card-body {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card-body .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-width: 100%;
    padding: 10px;
  }

  .card-body .product-details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .card-body .product-details label {
    font-weight: bold;
  }

  .card-body .product-img {
    min-width: 100px;
    max-width: 100px;
  }

  .card-body .product-details .product-price {
    color: #4ade80;
    font-weight: bold;
  }

  hr {
    width: calc(100vw - 20%);
  }
</style>