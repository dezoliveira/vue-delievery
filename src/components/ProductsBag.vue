<template>  
  <div class="container">
    <div v-if="productsInBag.length">
      <ul>
        <li v-for="product in productsInBag" :key="product.Codigo">
          <Tray>
            <div class="bag-list">
              <span class="product-img">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.portaldofranchising.com.br%2Fwp-content%2Fuploads%2F2017%2F10%2Fkfc.jpg&f=1&nofb=1&ipt=83571c81ece60eae4693cd0d86d267a339ae59a8f12d19913250d57a31342cbc&ipo=images" />
              </span>
              <div class="product-details">
                <span>
                  {{ product.Descricao }}
                </span>
                <span>
                  Valor: {{ formatValue(product.Venda) }}
                </span>
                <span>
                  Quantidade: {{ product.quantity }}
                </span>
                <span>
                  <h4>Total: {{ formatValue(product.quantity * product.Venda) }}</h4>
                </span>
              </div>
              <div class="values">
                <span @click.prevent="this.$store.dispatch('removeFromBag', product.Codigo)" class="">Remover</span>
                <span class="quantity">
                  <button class="minus" :disabled="product.quantity <= 1" @click="product.quantity--">
                    <fa icon="minus-circle"></fa>
                  </button>
                  <label :v-model="quantity">{{ product.quantity }}</label>
                  <button class="plus" :disabled="product.quantity >= 100" @click="product.quantity++">
                    <fa icon="plus-circle"></fa>
                  </button>
                </span>
              </div>
            </div>
            <hr/>
          </Tray>
        </li>
      </ul>
      <div class="totalOrder">
        <h4>Total do Pedido:</h4>
        <span class="total">{{ formatValue(orderTotal) }}</span>
      </div>
      <div class="btn-group">
        <button 
          class="btn-add" 
          @click="cleanBag"
        >
          Finalizar Pedido
        </button>
      </div>
    </div>
    <div class="no-products" v-else>
      <span>Nenhum produto adicionado. 😕</span>
      <div class="btn-group">
        <button class="btn-add" @click="redirect">Voltar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Tray } from '@/components/Tray.vue'

export default {
  components: {
    Tray,
  },

  methods: {
    formatValue(value) {
      let newValue = value

      if (newValue !== null) {
        newValue = 'R$ ' + parseInt(value).toFixed(2).toString().replace('.', ',')
      } else {
        newValue = 'valor idisponivel no momento'
      }

      return newValue
    },

    async cleanBag() {
      this.$store.dispatch('cleanBag')
      this.redirect()
    },

    async redirect() {
      this.$router.push({ name: 'home'})
    },
  },
  
  computed: {
    ...mapState([
      'productsInBag'
    ]),

    orderTotal() {
      let total = 0
      this.productsInBag.forEach(item => {
        total += item.Venda * item.quantity
      });

      return total
    }
  },
}
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .container ul {
    overflow: scroll;
    max-height: 70vh;
    height: 100%;
  }

  .bag-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    gap: 15px;
  }

  .bag-list .product-img {
    min-width: 50px;
    max-width: 50px;
  }
  
  .bag-list .product-img img {
    border-radius: 50%;
  }

  .bag-list .product-details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
  }

  .bag-list .product-details small{
    font-size: 12px;
  }

  .values {
    min-width: 70px;
    max-width: 70px;
  }

  .values .quantity {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }

  .values .quantity button {
    font-size: 20px;
  }

  .values .quantity button.plus {
    color: #16a34a;

    /* firefox */
    border: 0;
    background: none;
  }

  .values .quantity button.minus {
    color: #dc2626;

    /* firefox */
    border: 0;
    background: none;
  }

  .btn-group {
    padding: 15px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  .btn-add {
    background-color: #10b981;
    width: 100%;
    color: #fff;
    border-radius: 5px;
    padding: 10px 10px;
    border: 0;
  }

  hr {
    border: 1px solid rgb(214, 205, 205);
    padding: 0;
  }

  .totalOrder {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
  }

  .no-products {
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    height: 100vw;
    padding: 15px;
  }
</style>