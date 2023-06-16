<template>
  <div class="accordion">
    <div class="accordion-item">
      <h4>Big Chicken</h4>
      <button>Arrow UP</button>
    </div>
    <div class="accordion-collapse">
      <div class="accordion-body">
        <p class="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae perspiciatis cum accusamus non tenetur, aut architecto eligendi possimus voluptatem atque eos suscipit est delectus nobis consectetur accusantium quidem praesentium omnis.</p>
      </div>
    </div>
     
  </div>
</template>
<script>
  
</script>
<style>
  .accordion {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center
  }

  .accordion-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }

  .accordion-collapse {

  }

  .accordion-collapse p {
    text-align: justify;
  }
</style>
