<template>
  <div 
    class="hero-status"
    v-for="stat in status"
    :key="stat.id"
  >
    <div class="status"> 
      <span 
        v-if="this.isOpen"
        class="open-status"
      >
        Aberto
      </span>
      <span 
        v-else
        class="close-status"
      >
        Fechado
      </span>
    </div>
    <span class="delivery">
      <label>Entrega ? </label> 
      <label>
        <i>
          <fa icon="motorcycle" />
        </i>
        {{ flagToString(stat.ativaentrega) }}
      </label>
    </span>
    <span class="withdraw">
      <label>Retirada ? </label> 
      <label>
        <i>
          <fa icon="person-walking" />
        </i>
        {{ flagToString(stat.AgendaPedido) }}
      </label>
    </span>
    <span class="time">
      <label>Tempo Entrega:</label>
      <label>
        <i>
          <fa icon="clock" />
        </i>
        {{ stat.tempoentrega }}
      </label>
    </span>
    <Badge 
      :isOpen="this.isOpen"
    />
  </div>
</template>
<script>
import Badge from './Badge.vue'
export default {
  components: {
    Badge
  },

  data () {
    return {
      params : [],
      status : [],
      isOpen: false,
      isLoaded: false, 
    }
  },

  methods: {
    async loadParams() {
      const req = await fetch('http://localhost:82/api/parametros.php?emp=1')
      const data = await req.json()
      console.log(data)
      this.params = data
      this.todayStatus(data)
    },

    async todayStatus(data) {
      let today = new Date()
      let day = today.getDay()
      let status = []
      const daysOfWeek = []

      for (let d in data) {
        daysOfWeek.push(data[d].dia)
      }

      status = data.filter(
        (x) => (x.dia === daysOfWeek[day])
      )

      this.status = status
      this.hourStatus(status)
      console.log(status)
    },

    async hourStatus(status) {
      let today = new Date()
      let timeNow = today.toLocaleTimeString()
      let open = status[0].abertura
      let closed = status[0].fechamento

      if (parseInt(timeNow) > parseInt(open) && 
          parseInt(timeNow) < parseInt(closed)
      ) {
        this.isOpen = true
      } else {
        this.isOpen = false
      }
    },

    flagToString(flag) {
      const flags = {
        'S' : 'Sim',
        'N' : 'Não'
      }[flag]
      
      return flags
    }

  },

  mounted() {
    this.loadParams()
  }
}
</script>
<style>
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
    background-color: #4ade80;
  }

  .close-status {
    background-color: red;
  }
</style>