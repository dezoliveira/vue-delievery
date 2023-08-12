<template>
  <div v-if="this.isOpen" 
    class="is-opening open-message"
  >
    Estabelecimento Aberto!😋
  </div>
  <div v-else
    class="is-opening close-message"
  >
    Estabelecimento Fechado!😕 
  </div>
</template>
<script>
export default {
  props: {
    isOpen: false
  },
}
</script>
<style>
.open-message {
  background-color: #4ade80;
}

.close-message {
  background-color: red;
}
</style>
