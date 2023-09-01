<template>
  <div v-if="products.length">
    <ul>
      <li 
        v-for="product in activeProducts"
        :key="product.Codigo"
        :id="product.Codigo"
      > 
        <router-link 
          :to=" 
            {
              name: 'AddProducts', 
              params: { 
                id: product.Codigo,
                descricao: product.Descricao, 
              } 
            }
          "
        >
          <div class="card">
            <div class="card-header">
              
            </div>
            <div class="card-body">
              <span class="product-img">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.portaldofranchising.com.br%2Fwp-content%2Fuploads%2F2017%2F10%2Fkfc.jpg&f=1&nofb=1&ipt=83571c81ece60eae4693cd0d86d267a339ae59a8f12d19913250d57a31342cbc&ipo=images" />
              </span>
              <div class="product-details">
                <span>{{ product.Descricao }}</span>
                <!-- <label>Observação:</label>
                <span> 
                  {{ 
                    product.Observacao ? 
                      product.Observacao 
                    : 'Indisponível' 
                  }} 
                </span> -->
                <span class="product-price">
                  {{ formatValue(product.Venda) }}
                </span>
              </div>
            </div>
            <!-- <div class="btn-group">
              <router-link 
                :to=" {name: 'AddProducts', params: {id: product.Codigo } }">
                <button class="btn">Adicionar</button>
              </router-link>
              <button class="btn2">Detalhes</button>
            </div> -->
          </div>
        </router-link>           
      
        <hr v-show="groupCodigo === product.idgrupo"/>
      </li>
    </ul>
  </div>
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

    // handleSubmit(id) {
    //   this.$router.push('/AddProducts/' + id)
    // }
  },

  mounted() {
    this.API_URL = process.env.VUE_APP_API_URL
    this.loadProducts()
  },

  computed: {
    activeProducts() {
      return this.products.filter((product) => {
        return product.idgrupo === this.groupCodigo
      })
    }
  }

}
</script>
<style>
.card {
  display: flex;
  flex-direction: column;
  min-width: 100%;
  padding: 10px;
  background-color: #F5F5F5;
  border-radius: 15px;
  color: black;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}

.card-body {
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  gap: 10px;
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
  min-width: 60px;
  max-width: 60px;
}

.card-body .product-img img {
  border-radius: 50%;
}

.card-body .product-details .product-price {
  color: #4ade80;
  font-weight: bold;
}

hr {
  width: 100%;
}

.btn-group {
  width: 100%;
  padding: 10px 0;
  display: flex;
  align-items: center;
  gap: 10px;
}

.btn-add {
  background-color: #10b981;
  width: 100%;
  color: #fff;
  border-radius: 5px;
  padding: 5px 10px;
  border: 0;
}

.btn2 {
  background-color: #22d3ee;
  width: 30%;
  color: #fff;
  border-radius: 5px;
  padding: 5px 10px;
}
</style>
