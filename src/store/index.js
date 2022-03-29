import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'  // <-- plugin

export default createStore({
  state: {
    id:null,
    nombre:null,
    telefono:null,
    email: null,
    description: null,
    select: null,
    picked: null,
    cliente: []
  },
  getters: {
  },
  mutations: {
    agregarCliente(state){
        state.cliente.push({
            id:state.id,
            nombre:state.nombre,
            telefono:state.telefono,
            email:state.email,
            descripcion:state.descripcion,
            select:state.select,
            picked:state.picked
        });

    },
    eliminarCliente(state, id){
      state.cliente.splice(id,1);
  
    }
        
  },
  actions: {
    agregarClienteAction(context){
      context.commit('agregarCliente');
    },
    eliminarClienteAction(context, id){
      context.commit('eliminarCliente', id);

    }
  
    
  },
  modules: {
  },
  plugins: [new VuexPersistence().plugin]
})
