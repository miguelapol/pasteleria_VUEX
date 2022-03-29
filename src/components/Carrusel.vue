<template>

<div id="demo" class="carousel slide" data-bs-ride="carousel">

  <!-- Indicators/dots -->
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
  
  <!-- The slideshow/carousel -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://cdn.pixabay.com/photo/2017/05/23/22/33/birthday-2338813_960_720.jpg" alt="imagen-pastel" class="d-block" style="width:100%" height="700px">
    </div>
    <div class="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2017/01/16/17/45/pancake-1984716_960_720.jpg" alt="pastel" class="d-block" style="width:100%" height="700px">
    </div>
    <div class="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2017/07/28/14/23/macarons-2548810_960_720.jpg" alt="pastel-rosa" class="d-block" style="width:100%" height="700px">
    </div>
  </div>
  
  <!-- Left and right controls/icons -->
  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>

</template>

<script>
export default {
  name: 'Carrusel'
}
</script>
<style scoped>
.carousel{
    height:720px;
}
</style>
