<template>
  <Address
    @open="toggleMenu" 
    v-show="isShow"
  />
  <Form 
    @open="toggleMenu" 
    v-show="isShow" 
  />
</template>

<script>
import Address from '@/components/Address.vue'
import Form from '@/components/Form.vue';

export default {
  components: {
    Address,
    Form
  },

  data() {
    return {
      isShow : false
    }
  },

  methods: {
    toggleMenu() {
      this.isShow = !this.isShow
    }
  },
}
</script>

<style>

</style>