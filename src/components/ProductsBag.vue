<template>  
  <div class="container">
    <div v-if="productsInBag.length">
      <ul>
        <li v-for="product in productsInBag" :key="product.Codigo">
          <Tray>
            <div class="bag-list">
              <div class="product-line">
                <span class="product-img">
                  <img :src="`./products/${product.Codigo}.png`" />
                </span>
                <span>
                  {{ product.Descricao }}
                </span>
              </div>
              <div class="product-details">
                <div class="productx">
                  <span>
                    Valor: {{ formatValue(product.Venda) }}
                  </span>
                  <span>
                    Quantidade: {{ product.quantity }}
                  </span>
                  <span>Total:</span>
                </div>
                <MinusPlusButton 
                  @increase="product.quantity++"
                  @decrease="product.quantity--"
                  :quantity="product.quantity" 
                  :price="product.Venda"
                />
              </div>
              <div class="values">
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
        @click="cleanBag"
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
export default {
  components: {
    Tray,
    Button,
    MinusPlusButton
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
  }

  .bag-list .product-line {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .bag-list .product-img {
    width: min(80px, 80px);
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

  .productx {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .bag-list .product-details small{
    font-size: 12px;
  }

  .values {
    min-width: 70px;
    max-width: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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