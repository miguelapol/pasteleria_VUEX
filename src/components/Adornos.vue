<template>
<div class="container-fluid mt-3">
    <div class="precios">
         <h2>Adornos para tu Pastel personalizado</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, quis culpa cum quo alias hic! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, quae?</p>
    </div>
  <div class="row">
    <div class="col p-3  text-white">
        <div class="card container shadow" style="width: 18rem; height:25rem;">
        <img src="https://img.freepik.com/foto-gratis/concepto-cumpleanos-vista-superior-velas_23-2149023509.jpg?w=1380" class="card-img-top" alt="..."  >
        <div class="card-body">
            <h5 class="card-title">Decoracion plumas</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary container">$50</a>
        </div>
        </div>      
    </div>
    <div class="col p-3 text-white">
    <div class="card container shadow" style="width: 18rem; height:25rem;">
    <img src="https://img.freepik.com/foto-gratis/marco-articulos-fiesta-cumpleanos_23-2149023539.jpg?w=1380" class="card-img-top" alt="..." >
    <div class="card-body">
        <h5 class="card-title">Velas colores</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary container">$80</a>
    </div>
    </div>
    </div>
    <div class="col p-3  text-white">
        <div class="card container shadow" style="width: 18rem; height:25rem;">
        <img src="https://img.freepik.com/foto-gratis/arreglo-festivo-50-cumpleanos-neon_23-2149089115.jpg?w=1380" class="card-img-top" alt="..." >
        <div class="card-body">
            <h5 class="card-title">Sopresa</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary container">$200</a>
        </div>
        </div>
    </div>
  </div>
</div>


</template>
<script>
export default {
  name: 'Adornos'
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