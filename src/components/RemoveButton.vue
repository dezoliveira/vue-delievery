<template>
  <button class="btn-remove">
    <small>Remover</small>
    <i class="icon">
      <fa icon="times" />
    </i>   
  </button>    
</template>

<script>
export default {

}
</script>

<style>
.btn-remove {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background: red;
  padding: 4px 12px;
  color: #fff;
  border-radius: 15px;
}

.btn-remove small {
  font-size: 70%;
}

.btn-remove i {
  font-size: 14px;
}
</style>