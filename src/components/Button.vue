<template>
  <div class="btn-group">
    <button class="btn-add">
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  props: ['text'],
}
</script>

<style scoped>
.btn-group {
  padding: 15px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}

.btn-add {
  background-color: #10b981;
  width: 100%;
  color: #fff;
  border-radius: 5px;
  padding: 10px 10px;
  border: 0;
}
</style>