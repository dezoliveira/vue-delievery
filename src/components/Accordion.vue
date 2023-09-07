<template>
  <Tray>
    <div
      class="accordion" 
      ref="category"
      v-for="category in categories" 
      :key="category.id"
    > 
      <div 
        class="accordion-item" 
        @click="toggleCollapse(category.id)"
      >
        <i>
          <fa v-if="collapse && activeItem === category.id" icon="chevron-down" />
          <fa v-else icon="chevron-right" />
        </i>
        <h4>{{category.descricao}}</h4>
      </div>
      <hr v-show="!collapse" />
      <div v-show="collapse && activeItem === category.id" class="accordion-collapse">
        <div class="accordion-body">
          <ProductList 
            :categoryId="category.id"
          />
        </div>
      </div>    
    </div>
  </Tray>
</template>
<script>
import { mapState } from 'vuex'

import ProductList from './ProductList.vue'
import Tray from './Tray.vue'

export default{
  name: 'Accordion',
  components: {
    ProductList,
    Tray
  },

  data() {
    return {
      collapse: true,
      activeItem: '1',
    }
  },
  
  methods: {
    toggleCollapse(categoryId) {
      if(this.activeItem !== categoryId){
        this.collapse = false
      }
  
      this.activeItem = categoryId
      this.collapse = !this.collapse
    },
  },

  computed: {
    ...mapState([
      'categories'
    ]),
  }

}
</script>
<style scoped>
  /* <!-- * Movido para component Tray --> */
  /*.container {
    width: 100%;
    padding: 20px 10px 10px 10px;
    background-color: #fff;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }*/
  
  .accordion {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .accordion-body {
    width: 100%;
  }

  .accordion-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px 0;
  }

  .accordion-item h4, i {
    color: crimson;
    font-weight: bold;
  }

  .accordion-body {
    text-align: initial;
  }

  .accordion-collapse {
    width: 100%;
  }
</style>
