<template>
  <div class="form">
    <span class="address">
      <i>
        <fa icon="map-pin"/>
      </i>
      <h1>{{company.Endereco}}</h1>
    </span>
    <span class="selectBox">
      <select>
        <option value="0">Meus Endereços</option>
        <option value="1">Rua X, Bairro Y</option>
        <option value="2">Avenida Z, Bairro A</option>
        <option value="3">Rua das calçadas, 399</option>
        <option value="4">Rua dos bobos nº 0</option>
      </select>
    </span>
    <input type="text" placeholder="Rua *"/>
    <input type="text" placeholder="Numero *"/>
    <input type="text" placeholder="Complemento *"/>
    <input type="text" placeholder="Bairro *"/>
    <input type="text" placeholder="Ponto de Referência *"/>
    <Button :text="'Confirmar'"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Button from '@/components/Button.vue'

export default {
  components: {
    Button
  },

  computed: {
    ...mapState([
    'company'
    ]),
  }
}
</script>

<style scoped>
  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 35px;
    width: 100%;
  }

  .form .address {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }

  .form input {
    padding: 5px;
  }

  .selectBox select {
    width: 100%;
  }

  .btn-group {
    position: relative;
    width: 100%;
    display: contents;
  }
</style>