<template>
  <div class="tables">
    <table class="table-status">
      <tr>
        <th>Preparo</th>
        <th>Retirar</th>
        <th>Entregar</th>
      </tr>
      <tr 
        v-for="stat in status" 
        :key="stat.id"
      >
        <td>{{stat.tempoentrega}}</td>
        <td>
          {{ flagToString(stat.AgendaPedido) }}
        </td>
        <td>
          {{ flagToString(stat.ativaentrega) }}
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
        <tr :class="{ active: this.today === param.dia }">
          <td >{{param.dia}}</td>
          <td>{{param.abertura}}</td>
          <td>{{param.fechamento}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      params : [],
      status : [],
      today: null,
      API_URL: ''
    }
  },

  methods: {
    async loadParams() {
      const req = await fetch(`${this.API_URL}/parametros.php?emp=1`)
      const data = await req.json()
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
      this.today = status[0].dia
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
    this.API_URL = process.env.VUE_APP_API_URL
    this.loadParams()
  },

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
