<template>
  <div class="container">
    <span class="product-img">
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.portaldofranchising.com.br%2Fwp-content%2Fuploads%2F2017%2F10%2Fkfc.jpg&f=1&nofb=1&ipt=83571c81ece60eae4693cd0d86d267a339ae59a8f12d19913250d57a31342cbc&ipo=images" />
    </span>
    <Tray>
      <!-- <form class="form" @submit.prevent="handleSubmit(id)"> -->
      <div class="form" v-for="product in preOrder" :key="product.Codigo">
        <h1><strong>{{ product.Descricao }}</strong></h1>
        <p class="observation">{{ product.Observacao  }}</p>
        <div class="values">
          <span class="quantity">
            <button class="minus" :disabled="quantity <= 1" @click="quantity--">
              <fa icon="minus-circle"></fa>
            </button>
            <label :v-model="quantity">{{ quantity }}</label>
            <button class="plus" :disabled="quantity >= 100" @click="quantity++">
              <fa icon="plus-circle"></fa>
            </button>
          </span>
          <span>
            <h4>{{ product.Venda }}</h4>
          </span>
        </div>
        <button class="btn-add" @click="addToBag(product)">Adicionar</button>
      </div>
      <!-- </form> -->
    </Tray>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Tray from './Tray.vue';

export default {
  name: 'ProductDetails',
  components: {
    Tray
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
      this.$store.dispatch('addToBag', product)
      this.redirect()
    },

    redirect() {
      this.$router.push({ name: 'home'})
    }
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
    height: 100%;
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

    /* firefox */
    border: 0;
    background: none;
  }

  .form .values .quantity button.minus {
    color: #dc2626;

    /* firefox */
    border: 0;
    background: none;
  }

  .form .observation {
    min-height: 70px;
    max-height: 70px;
  }
</style>