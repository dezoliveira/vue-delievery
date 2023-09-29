<template>  
  <Modal 
    style="bottom: 0; position: absolute;"
    v-show="showModal" 
    :title="this.title" 
    @close="toggleModal"
  >
    <SelectAddress />
  </Modal>
  <div class="container">
    <div v-if="productsInBag.length">
      <ul>
        <li 
          v-for="product in productsInBag" 
          :key="product.Codigo"
        >
          <Tray>
            <div class="bag-list">
              <div class="product-summary">
                <span class="product-img">
                  <img :src="`./products/${product.Codigo}.png`" />
                </span>
                <span>
                  {{ product.Descricao }}
                </span>
              </div>
              <div class="product-details">
                <div class="product-values">
                  <span>
                    Valor: {{ formatValue(product.Venda) }}
                  </span>
                  <span>
                    Quantidade: {{ product.quantity }}
                  </span>
                  <span>Total:</span>
                </div>
                <div class="values">
                  <RemoveButton
                    class="float"
                    @click.prevent="this.$store.dispatch('removeFromBag', product.Codigo)" 
                  />
                  <MinusPlusButton 
                    @increase="product.quantity++"
                    @decrease="product.quantity--"
                    :quantity="product.quantity" 
                    :price="product.Venda"
                  />
                </div>
              </div>
            </div>
            <hr/>
          </Tray>
        </li>
      </ul>
      <div class="totalOrder">
        <h4>Total do Pedido:</h4>
        <span class="total">{{formatValue(orderTotal)}}</span>
      </div>
      <Button 
        :text="'Finalizar Pedido'"
        @click="toggleModal"
      />
    </div>
    <div class="no-products" v-else>
      <span>Nenhum produto adicionado. 😕</span>
      <Button 
        text="Voltar"
        @click="redirect"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { formatValue } from '@/utils/functions'
import { Tray }  from '@/components/Tray.vue'
import Button from '@/components/Button.vue'
import MinusPlusButton from '@/components/MinusPlusButton.vue'
import RemoveButton from '@/components/RemoveButton.vue'
import Modal from '@/components/Modal.vue'
import SelectAddress from '@/views/SelectAddress.vue'

export default {
  components: {
    Tray,
    Button,
    RemoveButton,
    MinusPlusButton,
    Modal,
    SelectAddress
  },

  data() {
    return {
      showModal : false,
      title: 'Selecione o Endereço:'
    }
  },

  methods: {
    formatValue,

    async cleanBag() {
      this.$store.dispatch('cleanBag')
      this.redirect()
    },

    async redirect() {
      this.$router.push({ name: 'home'})
    },

    toggleModal() {
      this.showModal = !this.showModal
    }
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
    overflow-y: scroll;
    max-height: 70vh;
    height: 100%;
  }

  .bag-list {
    display: flex;
    justify-content: space-between;
    width: 100vw;
    flex-direction: column;
    padding: 15px;
    gap: 15px;
    position: relative;
  }

  .bag-list .product-summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .bag-list .product-img {
    width: min(80px, 80px);
    height: min(80px, 80px);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .bag-list .product-img img {
    width: 100%;
    border-radius: 50%;
  }

  .bag-list .product-details  {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
  }

  .bag-list .product-details .product-values {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .bag-list .product-details small{
    font-size: 12px;
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

  .values {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
  }

  .float {
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 18px;
  }
</style>