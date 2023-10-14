<template>
  <form @submit.prevent="handleAddress" class="form">
    <span class="address">
      <i>
        <fa icon="map-pin"/>
      </i>
      <h1>{{stringAddress}}</h1>
    </span>
    <span class="selectBox">
      <div v-if="this.address.length > 0">
        <select v-for="(adds, i) in stringAddress" :key="x[i]">
          <option value="0">Selecione um endereço</option>
        </select>
      </div>
    </span>
    <span class="cep">
      <input 
        v-model="cep" 
        class="{ disabled : this.complete}" 
        type="text" 
        placeholder="Cep *"
        :disabled="this.complete"   
      />
      <i v-if="this.complete">
        <fa icon="circle-check"/>
      </i>
    </span>
    <input 
      v-model="this.address.logradouro" 
      @input="onValidate" 
      ref=street 
      type="text" 
      placeholder="Rua *"
    />
    <input v-model="number" @input="onValidate" ref="number" type="text" placeholder="Numero *"/>
    <input v-model="complement" @input="onValidate" ref="complement" type="text" placeholder="Complemento *"/>
    <input v-model="this.address.bairro" @input="onValidate" ref="district" type="text" placeholder="Bairro *"/>
    <input v-model="reference" @input="onValidate" ref="reference" type="text" placeholder="Ponto de Referência *"/>
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
      complete: false,
    }
  },

  methods: {
    handleAddress() {
      alert('form submitted')
      this.$router.push({ name: 'finisingOrder' })
    },
  },

  computed: {
    ...mapState(['company','address']),
    
    stringAddress() {
      let text = 'Meu Endereço'
      console.log(this.address.length)
      if(this.address.length > 0){
        text = `${this.address.logradouro} - ${this.address.bairro}`
      }
      return text
    }
  },

  watch : {
    cep() {
      if (this.cep.length == 6)
        this.cep += '-'

      if (this.cep.length == 2)
        this.cep += '.'

      if (this.cep.length == 10){
        let unMaskCep = this.cep.replace(/[-\.]/g, "")
        console.log(unMaskCep)
        this.$store.dispatch('loadAddress', unMaskCep)
        // this.street = this.address.logradouro || ''
        // this.complement = this.address.complement || ''
        // this.district = this.address.bairro || ''
        this.complete = true
        this.$refs.number.focus()
      }
    },
  },
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