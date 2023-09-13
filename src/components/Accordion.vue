<template>
  <Tray>
    <div class="menu">Menu</div>
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
        <span class="left">
          <i>
            <fa :icon="dynamicIcons(category.descricao)" />
          </i>
          <p>{{category.descricao}}</p>
        </span>
        <i>
          <fa v-if="collapse && activeItem === category.id" icon="chevron-up" />
          <fa v-else icon="chevron-down" />
        </i>
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

    dynamicIcons(descripion) {
      switch(descripion) {
        case 'PÃO DE HAMBURGUER':
          return 'burger'
      }
    }
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
  
  .menu {
    padding: 20px;
    background-color: #10b981;
    color: #fff;
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  
  .accordion {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .accordion-body {
    width: 100%;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 15px;
    margin-top: 25px;
  }

  .accordion-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 15px;
    background: #fff;
  }

  .accordion-item h4, i {
    font-weight: bold;
  }

  .accordion-item i {
    color: rgb(197, 184, 184);
    font-size: 12px;
  }

  .accordion .left {
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: flex-start;
  }

  .accordion .left i {
    font-size: 25px;
  }

  .accordion-body {
    text-align: initial;
  }

  .accordion-collapse {
    width: 100%;
  }
</style>
