<template>
  <ul>
    <li 
      v-for="product in products"
      :key="product.Codigo"
      :id="product.Codigo"
    >            
      <div 
        v-if="groupCodigo === product.idgrupo" 
        class="card"
      >
        <div class="card-header">
          
        </div>
        <div class="card-body">
          <div class="product-details">
            <span>{{ product.Descricao }}</span>
            <label>Observação:</label>
            <span> 
              {{ 
                product.Observacao ? 
                  product.Observacao 
                : 'Indisponível' 
              }} 
            </span>
            <span class="product-price">
              {{ formatValue(product.Venda) }}
            </span>
          </div>
          <span class="product-img">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.portaldofranchising.com.br%2Fwp-content%2Fuploads%2F2017%2F10%2Fkfc.jpg&f=1&nofb=1&ipt=83571c81ece60eae4693cd0d86d267a339ae59a8f12d19913250d57a31342cbc&ipo=images" />
          </span>
        </div>
      </div>
      <hr v-show="groupCodigo === product.idgrupo"/>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    groupCodigo: null,
  },

  data() {
    return {
      products : [],
      API_URL : ''
    }
  },

  methods: {
    async loadProducts() {
      const req = await fetch(`${this.API_URL}/mercadorias.php?emp=1`)
      const data = await req.json()
      this.products = data
    },

    formatValue(value) {
      let newValue = value

      if (newValue !== null) {
        newValue = 'R$ ' + parseInt(value).toFixed(2).toString().replace('.', ',')
      } else {
        newValue = 'valor idisponivel no momento'
      }

      return newValue
    },
  },

  mounted() {
    this.API_URL = process.env.VUE_APP_API_URL
    this.loadProducts()
  }

}
</script>
<style>
.card {
  display: flex;
  flex-direction: column;
  min-width: 100%;
  padding: 10px;
}

.card-body {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  width: 100%;
}
</style>
