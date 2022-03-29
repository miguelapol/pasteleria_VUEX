<template>
<div class="container-fluid mt-3">
    <div class="precios">
         <h2>Precios de Pasteles</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, quis culpa cum quo alias hic! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, quae?</p>
    </div>
  <div class="row">
    <div class="col p-3  text-white">
        <div class="card container shadow" style="width: 18rem; height:25rem;">
        <img src="https://cdn.pixabay.com/photo/2016/03/27/19/23/tart-1283822_960_720.jpg" class="card-img-top" alt="..."  >
        <div class="card-body">
            <h5 class="card-title">Pastel de fresa</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary container">$200</a>
        </div>
        </div>      
    </div>
    <div class="col p-3 text-white">
    <div class="card container shadow" style="width: 18rem; height:25rem;">
    <img src="https://cdn.pixabay.com/photo/2020/02/29/15/20/cake-4890393_960_720.jpg" class="card-img-top" alt="..." >
    <div class="card-body">
        <h5 class="card-title">Pastel de Zanahoria</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary container">$150</a>
    </div>
    </div>
    </div>
    <div class="col p-3  text-white">
        <div class="card container shadow" style="width: 18rem; height:25rem;">
        <img src="https://cdn.pixabay.com/photo/2018/05/01/18/21/eclair-3366430_960_720.jpg" class="card-img-top" alt="..." >
        <div class="card-body">
            <h5 class="card-title">Fresa con crema</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary container">$300</a>
        </div>
        </div>
    </div>
    <div class="col p-3  text-white">
        <div class="card container shadow" style="width: 18rem; height:25rem;">
        <img src="https://cdn.pixabay.com/photo/2017/07/28/14/29/macarons-2548827_960_720.jpg" class="card-img-top" alt="..." >
        <div class="card-body">
            <h5 class="card-title">Muffin fresa</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary container">$50</a>
        </div>
        </div>
    </div>
  </div>
</div>


</template>
<script>
export default {
  name: 'Pasteles'
}
</script>
<style scoped>
.card-text,.card-title{
    color: black;

}
.card-img-top{
    height:200px;
    width: 200px;
    padding-top:2rem;
    padding-left: 2.5rem;
}
.precios{
    padding-left: 5rem;
}
.btn{
    background-color:rgb(33, 37, 41);
    border-style: none;
}
</style>