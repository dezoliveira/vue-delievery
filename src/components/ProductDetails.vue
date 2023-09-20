<template>
  <div class="container">
    <Tray>
      <div class="form" 
        v-for="product in preOrder" 
        :key="product.Codigo"
      >
        <span class="product-img">
          <img :src="`../details/${product.Codigo}.png`" />
        </span>
        <h1><strong>{{ product.Descricao }}</strong></h1>
        <p class="observation">{{ product.Observacao  }}</p>
        <MinusPlusButton 
          @increase="quantity++"
          @decrease="quantity--"
          :quantity="quantity"
          :price="product.Venda"
        />
        <Button 
          text="Adicionar"
          @click="addToBag(product)"
        />
      </div>
    </Tray>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Tray from './Tray.vue';
import Button from './Button.vue'
import MinusPlusButton from '@/components/MinusPlusButton.vue'

export default {
  name: 'ProductDetails',
  components: {
    Tray,
    Button,
    MinusPlusButton
  },
  
  props: ['id'],

  data() {
    return {
      quantity: 1,
    }
  },

  methods: {
    addToBag(product) {
      product.quantity = this.quantity
      console.log(product)
      this.$store.dispatch('addToBag', product)
      this.redirect()
    },

    redirect() {
      this.$router.push({ name: 'home'})
    },
  },

  computed: {
    ...mapState([
      'preOrder',
      'productsInBag'
    ])
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    /* gap: 10px; */
    /* height: 100%; */
    height: 100vw;
    padding: 18px;
  }

  .container .product-img {
    width: 300px;
  }

  .container .product-img img{
    width: 100%;
    border-radius: 15px
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  .form p {
    text-align: left;
  }

  .form .values {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  /* <!-- * Movido para component Tray --> */

  /*
  .form .values .quantity {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .form .values .quantity button {
    font-size: 25px;
  }

  .form .values .quantity button.plus {
    color: #16a34a;

    / firefox /
    border: 0;
    background: none;
  }

  .form .values .quantity button.minus {
    color: #dc2626;

    / firefox /
    border: 0;
    background: none;
  }

  .form .observation {
    / min-height: 70px;
    max-height: 70px; /
    font-size: 15px;
  }

  */

  
</style>