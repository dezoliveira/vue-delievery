<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{open: closeModal, close}">
      <span class="icon" @click="closeModal">
        <i>
          <fa icon="close" />
        </i>
      </span>
      <h1 class="modal-title">
        Tiitle
      </h1>
      <div class="modal-body">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, voluptates iusto? Voluptas atque id est quibusdam sint perspiciatis nobis temporibus saepe, distinctio explicabo facere nam rerum. A eum quasi cumque.</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    closeModal() {
      this.$emit('close')
    }
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
    width: 80%;
    height: 80%;
    padding: 25px;
    background-color: #fff;
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
