<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{open: closeModal, close}">
      <span class="icon" @click="closeModal">
        <i>
          <fa icon="close" />
        </i>
      </span>
      <h1 class="modal-title">
        {{ title }}
      </h1>
      <div class="modal-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default { 
  props:['title'],

  methods: {
    closeModal() {
      this.$emit('close')
    },
  },
}
</script>
  <style>
  .backdrop {
    position: absolute; 
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5); 
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal { 
    position: relative;
    width: 90%;
    padding: 30px;
    /* height: 90%;
    padding: 15px; */
    background-color: #fff;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 15px;
    /* animation: open 0.5s; */
  }  

    .modal .icon i {
    position: absolute;
    top: 5px;
    right: 10px;
  }

  .close {
    animation: close 0.5s;
  }

  .open {
    animation: open 0.5s;
  }

  @keyframes open {
    0% {transform: translateX(100%);}
    100% {transform: translateX(0%);}
  }

  @keyframes close {
    0% {transform: translateX(0%);}
    100% {transform: translateX(100%);}
  }
</style>
