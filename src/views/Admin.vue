<template>
  <div>
      <div class="contenido">
      <div class="container">
        
          <div class="titulo">
              <h1 class="text-center">Pedidos</h1>
          </div>
            <div class="card-body">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Telefono</th>
                    <th scope="col">Email</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Pedido</th>
                    <th scope="col">Adorno</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in $store.state.cliente" :key="index">
                    <td>{{item.id}}</td>
                    <td>{{item.nombre}}</td>
                    <td>{{item.telefono}}</td>
                    <td>{{item.email}}</td>
                    <td>{{item.descripcion}}</td>
                    <td>{{item.select}}</td>
                    <td>{{item.picked}}</td>
                    <td><button class="btn btn-danger" @click="eliminarCliente(index)">borrar</button> </td>
                  </tr>
                </tbody>
              </table>
            </div>




      </div>

      <Footer/>
  </div>
  </div>
</template>

<script>


import Footer from '@/components/Footer.vue'

export default {
  name: 'Admin',
  components:{
    Footer
  },
  methods: {
    eliminarCliente(index){
      this.$store.dispatch('eliminarClienteAction', index);
      window.location('/home').reload();

    }
  }
}
</script>
<style scoped>
template{
    font-family:arial,sans-serif;
}
.container {
    min-height: 84vh;
}
.card {
    width:50%; 
    border-style: none;
}

</style>