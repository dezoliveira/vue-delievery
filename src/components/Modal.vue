<template>
  <div class="backdrop">
    <div class="modal">
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

  .backdrop .modal {
    width: 80%;
    height: 80%;
    padding: 25px;
    background-color: #fff;
  }
</style>
