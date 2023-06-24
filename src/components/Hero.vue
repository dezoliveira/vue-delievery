<template>
  <Modal v-show="showModal" @close="toggleModal"/>
  <div class="hero">
    <div class="hero-image">

    </div>
    <div class="hero-info">
      <div class="logo" @click="toggleModal">
        <img src="../assets/images/logo3.jpg"/>
      </div>
      <h2>KFC São José</h2>
      <span class="city">
        <i>
          <fa icon="location-dot" />
        </i>
        <h4>SÃO JOSÉ DO RIO PARDO - SP</h4>
      </span>
    </div>
    <div class="hero-status">
      <span class="status"> FECHADO </span>
      <span> RETIRAR | ENTREGAR </span>
      <span class="time">
        <i><fa icon="clock" /></i>
        <span>00:10:00</span>
      </span>
    </div>
  </div>

</template>
<script>
import Modal from './Modal.vue';
export default {
  components: {
    Modal
  },

  data() {
    return {
      showModal: false
    }
  },

  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    }
  }, 
}
</script>
<style>
  :root {
    --color: rgba(30, 30, 30);
    --bgColor: rgba(245, 245, 245);
  }

  .hero {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .hero-image {
    position: absolute;
    width: 100%;
    height: 140px;
    z-index: -1;
    top: 0;
    background-image: 
      linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), 
      url('../assets/images/background.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .hero-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .hero-info .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 100px;
    padding: 5px;

    border-radius: 50%;
    background: 
      radial-gradient(hsl(0 0% 0% / 15%) 60%, transparent 0),
      radial-gradient(white 65%, transparent 0),
      linear-gradient(to top right, orange, deeppink);
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }

  .hero-info .logo img {
    width: 100%;
    border-radius: 50%;
    border: 1px solid #fff;
  }

  .hero-info .city {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .hero-info .city i {
    color: crimson;
  }

  .hero-status {
    display: flex;
    gap: 15px;
    font-size: 15px;
  }

  .hero-status .time i {
    padding: 5px;
  }
</style>
