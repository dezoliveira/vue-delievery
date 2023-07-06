<template>
  <div class="tables">
    <table class="table-status">
      <tr>
        <th>Preparo</th>
        <th>Retirar</th>
        <th>Entregar</th>
      </tr>
      <tr>
        <td>00:10:00</td>
        <td>Sim</td>
        <td>Nao</td>
      </tr>
    </table>
    <table class="table-days">
      <tr>
        <th>Dia da semana</th>
        <th>Abertura</th>
        <th>Fechamento</th>
      </tr>
      <tr>
        <td>DOM</td>
        <td>17:00:00</td>
        <td>22:00:00</td>
      </tr>
      <tr>
        <td>SEG</td>
        <td>17:00:00</td>
        <td>22:00:00</td>
      </tr>
      <tr>
        <td>TER</td>
        <td>17:00:00</td>
        <td>22:00:00</td>
      </tr>
      <tr>
        <td>QUA</td>
        <td>17:00:00</td>
        <td>22:00:00</td>
      </tr>
      <tr>
        <td>QUI</td>
        <td>17:00:00</td>
        <td>22:00:00</td>
      </tr>
      <tr>
        <td>SEX</td>
        <td>17:00:00</td>
        <td>22:00:00</td>
      </tr>
      <tr>
        <td>SAB</td>
        <td>17:00:00</td>
        <td>22:00:00</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {

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
