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
              },
            }
          "
        >
          <div class="card" 
            :class="{ inBag : isInBag(product) }" 
            @click="preOrder(product)"
          > 
            <div class="card-header">
              
            </div>
            <div class="card-body">
              <span class="product-img">
                <img 
                  v-if="this.isLoaded"
                  :src="`./products/${product.Codigo}.png`"
                  @load="onImgLoad" 
                />
                <img 
                  v-else 
                  src="../assets/images/logo_default.jpg" 
                  @load="onImgLoad"
                />
              </span>
              <div class="product-details">
                <span>{{ product.Descricao }}</span>
                <span class="product-price">
                  {{ formatValue(product.Venda) }}
                </span>
              </div>
            </div>
            <div class="card-footer">
              <RemoveButton 
                v-if="isInBag(product)"
                @click.prevent="removeFromBag(product.Codigo)"
              />
            </div>
          </div>
        </router-link>
        <hr v-show="groupCodigo === product.idgrupo"/>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { formatValue } from '@/utils/functions'
import RemoveButton from '@/components/RemoveButton.vue'

export default {
  components: {
    RemoveButton
  },
  
  data () {
    return {
      isLoaded : false
    }
  },

  props: {
    groupCodigo: null,
  },

  methods: {
    formatValue,

    preOrder(product) {
      this.$store.dispatch('preOrder', product)
    },

    isInBag(product) {
      return this.productsInBag.find(item => item.Codigo == product.Codigo)
    },

    removeFromBag(productId) {
      this.$store.dispatch('removeFromBag', productId)
    },

    async onImgLoad() {
      this.isLoaded = true
    },
  },

  computed: {
    ...mapState([
      'products', 
      'productsInBag'
    ]),

    activeProducts() {
      return this.products.filter((product) => {
        return product.idgrupo === this.groupCodigo
      })
    },
  }

}
</script>
<style scoped>
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
  min-height: 60px;
  max-height: 60px;
  background-color: #e0d14b;

  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
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

.inBag {
  border: 1px solid #4ade80;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
