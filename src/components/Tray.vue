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
  /* .container {
    width: 100%;
    height: 100vh;
    padding: 20px 25px;
    background-color: #fff;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px; 
  }
  */
  .container {
    width: 100%;
    /* height: 100vh; */
    height: 100vw;
    padding: 20px 25px 0 25px;
    background-color: #fff;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
</style>