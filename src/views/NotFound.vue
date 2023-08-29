<template>
  <div class="container">
    <h1>Oops! Pagina não encontrada 😱</h1>
    <p>{{currentRouteName}}</p>
    <img src="@/assets/images/404.jpg"/>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .container {
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .container img {
    width: 100%;
  }
</style>