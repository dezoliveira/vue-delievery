<template>
  <div class="tables">
    <table class="table-status">
      <tr>
        <th>Preparo</th>
        <th>Retirar</th>
        <th>Entregar</th>
      </tr>
      <tr 
        v-for="status in dailyStatus" 
        :key="status.id"
      >
        <td>{{status.tempoentrega}}</td>
        <td>
          {{ flagToString(status.AgendaPedido) }}
        </td>
        <td>
          {{ flagToString(status.ativaentrega) }}
        </td>
      </tr>
    </table>
    <table class="table-days">
      <tr>
        <th>Dia da semana</th>
        <th>Abertura</th>
        <th>Fechamento</th>
      </tr>
      <tbody
        v-for="param in params" 
        :key="param.id"
      >
        <tr :class="{ active: today === param.dia }">
          <td >{{param.dia}}</td>
          <td>{{param.abertura}}</td>
          <td>{{param.fechamento}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      today: null,
    }
  },

  methods: {
    flagToString(flag) {
      const flags = {
        'S' : 'Sim',
        'N' : 'Não'
      }[flag]
      
      return flags
    }
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

    today() {
      return this.dailyStatus[0].dia
    }
  }
}
</script>

<style>
  .tables {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  table {
    font-size: 14px;
    width: 100%;
    border-collapse: collapse;
    text-align: center;
}

  table :where(th, td) {
    padding: 10px;
    border: 1px solid #ddd;
  }

  table th {
    padding: 10px;
    background-color: #10b981;
    font-weight: 500;
    color: #fff;
  }

  /* Testar semântica da tabela */
  /*table tr:nth-child(even) {
    background-color: #f2f2f2;
  }*/

  table tbody:nth-child(even) {
    background-color: #f2f2f2;
  }

  table.table-status tr:not(:first-child) {
    background-color: #fff;
  }

  .active {
    background: #4ade80;
    color: #fff;
  }
</style>
