<template>
  <div>
    <ul>
      <li> 
          <div class="card">
            <div class="card-header"></div>
            <div class="card-body">
              <span class="product-img">
                <img/>
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

.product-details span {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-body .product-img img {
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
