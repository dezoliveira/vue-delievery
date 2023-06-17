<template>
  <div class="accordion">
    <div class="accordion-item">
      <h4>Chickens</h4>
      <i @click="toggleCollapse">
        <fa v-if="collapse" icon="caret-up" />
        <fa v-else icon="caret-down" />
      </i>
    </div>
    <div v-show="collapse" class="accordion-collapse">
      <div class="accordion-body">
        <p class="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae perspiciatis cum accusamus non tenetur, aut architecto eligendi possimus voluptatem atque eos suscipit est delectus nobis consectetur accusantium quidem praesentium omnis.</p>
      </div>
    </div>
     
  </div>
</template>
<script>
  export default{

    data() {
      return {
        collapse: false
      }
    },
    
    methods: {
      toggleCollapse() {
        this.collapse = !this.collapse
      },
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
    gap: 15px;
  }

  .accordion-collapse {
    text-align: justify;
  }
</style>
