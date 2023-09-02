<template>
  <div>
    <ul>
      <li> 
          <div class="card">
            <div class="card-header"></div>
            <div class="card-body">
              <span class="product-img">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.portaldofranchising.com.br%2Fwp-content%2Fuploads%2F2017%2F10%2Fkfc.jpg&f=1&nofb=1&ipt=83571c81ece60eae4693cd0d86d267a339ae59a8f12d19913250d57a31342cbc&ipo=images" />
              </span>
              <div class="product-details">
                <span></span>
                <span class="product-price"></span>
              </div>
            </div>
          </div>        
        <hr/>
      </li>
    </ul>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>

.card {
  height: 500px;
  background-color: red;
}

.product-details span {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-img img {
  border-radius: 50%;
  width: 100%;
}

.card-body .product-details .product-price {
  color: #4ade80;
  font-weight: bold;
}

hr {
  width: 100%;
}

.btn-group {
  width: 100%;
  padding: 10px 0;
  display: flex;
  align-items: center;
  gap: 10px;
}

.btn-add {
  background-color: #10b981;
  width: 100%;
  color: #fff;
  border-radius: 5px;
  padding: 5px 10px;
  border: 0;
}

.btn2 {
  background-color: #22d3ee;
  width: 30%;
  color: #fff;
  border-radius: 5px;
  padding: 5px 10px;
}
</style>
