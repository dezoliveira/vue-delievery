<template>
  <div class="container">
    <div class="title">
        <i>
          <fa icon="map-pin"/>
        </i>
        <span>
          <h1>Tipo de Entrega</h1>
          <p>Escolha como deseja receber seu pedido</p>
        </span>
    </div>
    <div class="inputs">
      <span>
        <router-link style="width: 100%" :to="{
          name: 'finisingOrder'
        }">
          <input 
            type="text" 
            placeholder="Retirada"
          />
        </router-link>
      </span>
      <span>
        <input 
          type="text"
          placeholder="Entrega" 
          @click="toggleForm"
        />
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
<style scoped>
  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
  }

  .title {
    display: flex;
    justify-content: center;
    gap: 10px;
  }

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
    padding: 4px 10px;
    border-bottom: 1px solid #e5e5e5;
  }

  input {
    width: 100%;
  }
</style>