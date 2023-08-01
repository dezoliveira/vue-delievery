<template>
  <div class="container">
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
  </div>
</template>
<script>
  import ProductList from './ProductList.vue'

  export default{
    name: 'Accordion',
    components: {
      ProductList
    },

    data() {
      return {
        collapse: true,
        activeItem: '1',
        categories: []
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

      async loadCategories() {
        const req = await fetch('http://localhost:82/api/categorias.php?emp=1')
        const data = await req.json()
        console.log(data)
        this.categories = data
      }
    },

    mounted() {
      this.loadCategories()
    }

  }
</script>
<style scoped>
  .container {
    padding: 10px;
  }
  
  .accordion {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 5px 5px;
  }

  .accordion-body {
    width: 100%;
  }

  .accordion-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 5px 0;
  }

  .accordion-item h4, i {
    color: crimson;
    font-weight: bold;
  }

  .accordion-body {
    text-align: initial;
  }
</style>
