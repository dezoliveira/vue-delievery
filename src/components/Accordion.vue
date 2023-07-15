<template>
  <div
    class="accordion" 
    ref="category"
    v-for="category in categories" 
    :key="category.id"
    @click="toggleCollapse(category.id)"
  > 
    <div class="accordion-item">
      <h4>{{category.descricao}}</h4>
      <i>
        <fa v-if="collapse && activeItem === category.id" icon="caret-up" />
        <fa v-else icon="caret-down" />
      </i>
    </div>
    <div v-show="collapse && activeItem === category.id" class="accordion-collapse">
      <div class="accordion-body">
        <ul class="description">
          <li>Produto 1</li>
          <li>Produto 2</li>
          <li>Produto 3</li>
          <li>Produto 4</li>
          <li>Produto 5</li>
        </ul>
      </div>
    </div>    
  </div>
</template>
<script>
  export default{

    data() {
      return {
        collapse: false,
        activeItem: '',
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
<style>
  .accordion {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .accordion-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .accordion-collapse {
    text-align: justify;
  }
</style>
