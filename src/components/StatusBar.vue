<template>
  <div 
    class="hero-status"
    v-for="status in dailyStatus"
    :key="status.id">
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
        {{ flagToString(status.ativaentrega) }}
      </label>
    </span>
    <span class="withdraw">
      <label>Retirada ? </label> 
      <label>
        <i>
          <fa icon="person-walking" />
        </i>
        {{ flagToString(status.AgendaPedido) }}
      </label>
    </span>
    <span class="time">
      <label>Tempo Entrega:</label>
      <label>
        <i>
          <fa icon="clock" />
        </i>
        {{ status.tempoentrega }}
      </label>
    </span>
    <Badge 
      :isOpen="this.isOpen"
    />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Badge from './Badge.vue'

export default {
  components: {
    Badge
  },

  data () {
    return {
      status : [],
      isOpen: false,
      isLoaded: false, 
    }
  },

  methods: {
    flagToString(flag) {
      const flags = {
        'S' : 'Sim',
        'N' : 'Não'
      }[flag]
      
      return flags
    },
  },

  computed: {
    ...mapState([
      'params'
    ]),

    dailyStatus() {
      let params = this.params
      let today = new Date()
      let day = today.getDay()
      let status = []
      const daysOfWeek = []

      for (let p in params) {
        daysOfWeek.push(params[p].dia)
      }

      status = params.filter(
        (x) => (x.dia === daysOfWeek[day])
      )

      return status
    },

    openingTime() {
      let timeNow = today.toLocaleTimeString()
      let open = this.status.abertura
      let closed = this.status.fechamento

      if (parseInt(timeNow) > parseInt(open) && 
          parseInt(timeNow) < parseInt(closed)
      ) {
        this.isOpen = true
      } else {
        this.isOpen = false
      }
    }
  },
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