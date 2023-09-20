<template>
  <div class="values">
    <span class="quantity">
      <button 
        class="minus" 
        :disabled="quantity <= 1" 
        @click="$emit('decrease', -1)"
      >
        <fa icon="minus-circle"></fa>
      </button>
      <label :v-model="quantity">{{ quantity }}</label>
      <button 
        class="plus" 
        :disabled="quantity >= 100" 
        @click="$emit('increase', +1)"
      >
        <fa icon="plus-circle"></fa>
      </button>
    </span>
    <span>
      <h4> {{ formatValue(quantity * price) }}</h4>
    </span>
  </div>
</template>

<script>
import { formatValue } from '@/utils/functions.js'
export default {
  props:['quantity','price'],

  methods: {
    formatValue,
  }
}
</script>

<style scoped>
.quantity {
  display: flex;
  align-items: center;
  gap: 10px;
}

.quantity button {
  font-size: 25px;
}

.quantity button.plus {
  color: #16a34a;

  /* firefox */
  border: 0;
  background: none;
}

.quantity button.minus {
  color: #dc2626;

  /* firefox */
  border: 0;
  background: none;
}
</style>