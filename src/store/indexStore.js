import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    user: {},
    idWorker: null,
    idProvider: null,
    idBeer: null,
  },

  getters:{
    getWorker(state){
      return state.user;
    },

    getWorkerID(state){
      return state.idWorker;
    },

    getBeerID(state){
      return state.idBeer;
    },

    getProviderID(state){
      return state.idProvider;
    }
  },

  mutations:{
    setWorker(state, payload){
      state.user = payload;
    },

    setWorkerID(state, payload){
      state.idWorker = payload;
    },

    setBeerID(state, payload){
      state.idBeer = payload;
    },

    setProviderID(state, payload){
      state.idProvider = payload;
    }
  },

  actions:{},

})
