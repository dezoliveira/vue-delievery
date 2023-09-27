<template>
  <div class="container">
    <div class="inputs">
      <!-- <h1>Selecione o Endereço:</h1> -->
      <span>
        <label>
          Retirar:
        </label>
        <input type="text" />
      </span>
      <span>
        <label>
          Entregar:
        </label>
        <input type="text" @click="toggleForm"/>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },

  methods: {
    toggleForm() {
      this.$emit('open')
    }
  }
}
</script>
<style>
  .inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }

  .inputs span {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .inputs input {
    border: 1px solid #444;
    padding: 4px 10px;
  }
</style>