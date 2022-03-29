<template>
    <div class="container card shadow" style="width: 50rem;padding-top:50px;" id="direccion">
        <div class="card-body ">
        <h4 class="card-title text-center">Direccion de Pasteleria</h4>
        <p class="card-text text-center">Horario de 10am a 5pm</p>
        <p class="card-text text-center">Direccion:Alvaro Obregon</p>
        <p class="card-text text-center">Calle:Lomas de Chapultepec</p>
        <p class="card-text text-center">Telefono:55444446</p>
        </div>
    </div>

</template>


<script>
export default {
  name: 'Horario'
}
</script>
<style scoped>
#direccion{
    background-color:rgb(33, 37, 41);
}
.card-body{
    background-color: rgb(33, 37, 41);
    color: white;
}
</style>
