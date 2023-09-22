<template>
  <div class="container">
    <Tray>
      <div class="form" 
        v-for="product in preOrder" 
        :key="product.Codigo"
      >
        <span class="product-img">
          <img 
            v-if="this.isLoaded"
            :src="`../details/${product.Codigo}.png`"
            @load="onImgLoad" 
          />
          <img 
            v-else
            src="../assets/images/logo_default.jpg"
            @load="onImgLoad" 
          />
        </span>
        <h1><strong>{{ product.Descricao }}</strong></h1>
        <p class="observation">{{ product.Observacao  }}</p>
        <MinusPlusButton 
          @increase="quantity++"
          @decrease="quantity--"
          :quantity="quantity"
          :price="product.Venda"
        />
        <span class="text-area">
          <label>Observação:</label>
          <textarea 
            v-model="observation" 
            cols="30" 
            rows="4"
          >
          </textarea>
        </span>
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
      observation: '',
      isLoaded: false
    }
  },

  methods: {
    addToBag(product) {
      product.quantity = this.quantity
      product.observation = this.observation
      this.$store.dispatch('addToBag', product)
      this.redirect()
    },

    redirect() {
      this.$router.push({ name: 'home'})
    },

    async onImgLoad() {
      this.isLoaded = true
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

  .form .observation {
    max-height: 120px;
    min-height: 120px;
    overflow-x: scroll;
  }

  .form .text-area {
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    position: relative;
  }

  .form .text-area textarea {
    padding: 10px;
    width: 100%;
    border: 1px solid #94a3b8;
    border-radius: 5px;
  }

  .form .text-area textarea:focus {
    outline: none !important;
    border:1px solid #10b981;
  }

  .form .text-area label {
    position: absolute;
    left: 10px;
    top: -15px;
    background-color: #fff;
    font-size: 14px;
    padding: 5px;
  }  
</style>