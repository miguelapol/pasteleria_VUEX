
<template>
<div class="mt-2">
  <div class="row">
<div class="card m-5 shadow col" id="card-1">
  <div class="titulocard">
    <h3>Pide orden</h3>
  </div>
  <div>
        <select class="form-select" aria-label="Default select example" v-model="select">
          <option disable>Seleciona el pastel</option>
          <option value="pastel fresa">Pastel de fresa</option>
          <option value="pastel zanahoria">Pastel de zanahoria</option>
          <option value="fresa con crema">Fresa con crema</option>
          <option value="muggin fresa">Muffin fresa</option>
        </select>
  </div>
  <div class="texto-info">
    <p>Decoración</p>
  </div>
 <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="plumas" v-model="picked" value="pluma">
  <label class="form-check-label" for="flexRadioDefault1">
    Decoracion de plumas
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="velas" checked v-model="picked" value="velas">
  <label class="form-check-label" for="flexRadioDefault2">
    Velas colores
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="extra" checked v-model="picked" value="extra">
  <label class="form-check-label" for="flexRadioDefault2">
    Extra
  </label>
</div>
<p>seleccionado {{picked}}</p>
</div>
<div class="card m-5 shadow col" id="card-2">
  <div class="titulocard">
    <h3>Formulario</h3>
  </div>
  <div class="form-group">
    <label for="name">Nombre:</label>
    <input type="txt" class="form-control" id="name" placeholder="nombre completo" v-model="nombre" required>
  </div>
  <div class="form-group">
    <label for="name">Telefono:</label>
    <input type="tel" class="form-control" id="telefono" placeholder="Número de telefono" v-model="telefono" required>
  </div>
  <div class="form-group">
    <label for="email">Email:</label>
    <input type="email" class="form-control" id="email" placeholder="email@.com" v-model="email" required>
  </div>
  <div class="pedido">
  <p>Pedido solicitado</p>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Descripción</label>
    <textarea class="form-control" id="descripcion" rows="2" placeholder="Descripcion del pedido" v-model="descripcion" required></textarea>
  </div>
 
  <input class="btn btn-primary m-2" type="submit" value="enviar" @click="enviar" >

</div>

  </div>
</div>
</template>


<script>
export default {
  name: 'Adornopedido',
   data() {
     return {
      nombre:'',
      telefono:'',
      email:'',
      descripcion:'',
      select:'',
      picked:''

     }
   },
    methods: {
      enviar(){
        if (this.nombre != '' && this.telefono != '' && this.email != '' && this.descripcion != '') {
        this.$store.state.id= Date.now();
        this.$store.state.nombre= this.nombre;
        this.$store.state.telefono= this.telefono;
        this.$store.state.email= this.email;
        this.$store.state.descripcion= this.descripcion;
        this.$store.state.select= this.select;
        this.$store.state.picked= this.picked;
        this.$store.dispatch('agregarClienteAction');
        this.nombre = '';
        this.telefono = '';
        this.email = '';
        this.descripcion = '';
        this.select = '';
        this.picked = '';
          alert('Pedido enviado')
        }else{
          alert('Faltan datos')
        }
        
    }
  }
}
  
</script>
<style scoped>
.card {
  height: auto;

}


.titulocard h3{
  margin-bottom: 1rem;
}
.texto-info{
  margin-top: 1rem;
}
.btn{
  background-color:rgb(33, 37, 41);
  border-style: none;
}
.b-alert{
  background-color:rgb(20, 96, 172);
  color:white;
}

</style>

