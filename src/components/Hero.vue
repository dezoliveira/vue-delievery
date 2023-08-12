<template>
  <Modal 
    v-show="showModal" 
    @close="toggleModal" 
  />
  <div class="hero">
    <div class="hero-image">

    </div>
    <div class="hero-info">
      <div 
        class="logo" 
        @click="toggleModal"
      >
        <img 
          v-if="this.isLoaded" 
          src="../assets/images/logo.jpg" 
          @load="onImgLoad"
        />
        <img 
          v-else 
          src="../assets/images/logo_default.jpg" 
          @load="onImgLoad"
        />
      </div>
      <div>
        <h2>{{company.Fantasia}}</h2>
      <span>
        <h4>{{company.Complemento}}</h4>
      </span>
      </div>
    </div>
    <StatusBar />
  </div>

</template>
<script>
import Modal from './Modal.vue'
import Table from './Table.vue'
import StatusBar from './StatusBar.vue'

export default {
  components: {
    StatusBar,
    Modal,
    Table,
  },

  data() {
    return {
      showModal: false,
      company: [],
      isLoaded: false,  
    }
  },

  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },

    async loadCompany() {
      const req = await fetch('http://localhost:82/api/empresa.php?emp=1')
      const data = await req.json()
      console.log(data)
      this.company = data
    },

    async onImgLoad() {
      this.isLoaded = true
    },
  }, 

  mounted() {
    this.loadCompany()
  }
}
</script>
<style scoped>
  :root {
    --color: rgba(30, 30, 30);
    --bgColor: rgba(245, 245, 245);
  }

  .hero {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 40px;
    padding: 20px 10px 40px 10px;
    gap: 15px;
    color: #fff;
    position: relative;
  }

  .hero-image {
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vw;
    z-index: -100;
    background-image: linear-gradient(rgb(0 0 0 / 70%), rgb(0 0 0)), url('/src/assets/images/background.jpg');
    background-size: cover;
    /* background-attachment: fixed; */
    background-repeat: no-repeat;
  }

  .hero-info {
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .hero-info .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 70px;
    height: 70px;
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
    gap: 10px;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(30, 30, 30, 0.5);
    border-radius: 5px;
    padding: 5px 10px;
  }

  .hero-status span {
    font-size: 12px;
    padding: 5px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
  }

  .hero-status span label {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }

  .is-opening{
    padding: 5px 15px;
    position: absolute;
    bottom: -15px;
    border-radius: 15px;
  }

  .open-status {
    background-color: crimson;
  }

  .open-message, .open-status {
    background-color: #4ade80;
  }

  .close-message, .close-status {
    background-color: red;
  }

</style>
