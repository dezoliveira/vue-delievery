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
      <tr
        v-for="param in params" 
        :key="param.id"
      >
        <td>{{param.dia}}</td>
        <td>{{param.abertura}}</td>
        <td>{{param.fechamento}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      params : [],
      status : []
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

  table td {

  }

  table tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  table.table-status tr:not(:first-child) {
    background-color: #fff;
  }
</style>
