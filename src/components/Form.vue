<template>
  <form @submit.prevent="handleAddress" class="form">
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
    <span class="cep">
      <input v-model="cep" :disabled="this.complete" class="{ disabled : this.complete}" type="text" placeholder="Cep *"  />
      <i v-if="this.complete">
        <fa icon="circle-check"/>
      </i>
    </span>
    <input v-model="street" type="text" placeholder="Rua *"/>
    <input ref="number" model="number" type="text" placeholder="Numero *"/>
    <input v-model="complement" type="text" placeholder="Complemento *"/>
    <input v-model="district" type="text" placeholder="Bairro *"/>
    <input v-model="reference" type="text" placeholder="Ponto de Referência *"/>
    <Button :text="'Confirmar'"/>
  </form>
</template>

<script>
import { mapState } from 'vuex'
import Button from '@/components/Button.vue'

export default {
  components: {
    Button
  },

  data() {
    return {
      cep : '',
      street: '',
      number: '',
      complement: '',
      district: '',
      reference: '',
      complete: false
    }
  },

  methods: {
    handleAddress() {
      alert('form submitted')
      this.$router.push({ name: 'finisingOrder' })
    },
  },

  computed: {
    ...mapState([
    'company',
    'address'
    ]),
  },

  watch : {
    cep() {
      if (this.cep.length == 8){
        let unMaskCep = this.cep.replace(/[-]/g, "")
        if (this.$store.dispatch('loadAddress', unMaskCep)){
          this.street = this.address.logradouro || ''
          this.complement = this.address.complement || ''
          this.district = this.address.bairro || ''
          this.complete = true
          this.$refs.number.focus()
        }
      }
    }
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
    border-bottom: 1px solid #e5e5e5;
  }

  .form input:focus {
    border:none;
    outline: none;
    border-bottom: 1px solid #10b981;
  }

  .selectBox select {
    width: 100%;
  }

  .btn-group {
    position: relative;
    width: 100%;
    display: contents;
  }

  .disabled {
    background: transparent;
    opacity: 0.8;
  }

  .form .cep input {
    width: 50%;
  }

  .form .cep i {
    color: #4ade80;
  }
</style>