import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    user: {},
    idWorker: null
  },

  getters:{
    getWorker(state){
      return state.user;
    },

    getWorkerID(state){
      return state.idWorker;
    }
  },

  mutations:{
    setWorker(state, payload){
      state.user = payload;
    },

    setWorkerID(state, payload){
      state.idWorker = payload;
    }
  },

  actions:{},

})
