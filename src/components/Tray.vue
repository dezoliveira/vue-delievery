<template>
  <div class="container">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Tray',
  components : {

  },
}
</script>
<style scoped>
  .container {
    width: 100%;
    padding: 20px 10px 10px 10px;
    background-color: #fff;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;  
  }
</style>