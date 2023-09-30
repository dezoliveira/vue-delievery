<template>
  <slot v-if="!isShow">
    <Address @open="toggleMenu"/>
  </slot>
  <slot v-if="isShow">
    <Form @open="toggleMenu"/>
  </slot>
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