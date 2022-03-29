<template>
  <div class="home">
    <Carrusel/>
    <Horario/>
    <Pasteles/>
    <Adornos/>
    <Adornopedido/>
    <Footer/>
  </div>
</template>

<script>

import Carrusel from '@/components/Carrusel.vue'
import Horario from '@/components/Horario.vue'
import Pasteles from '@/components/Pasteles.vue'
import Adornos from '@/components/Adornos.vue'
import Adornopedido from '@/components/Adornopedido.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components:{
    Carrusel,
    Horario,
    Pasteles,
    Adornos,
    Adornopedido,
    Footer
  }
}
</script>
