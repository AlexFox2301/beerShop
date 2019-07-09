import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    user: {}
  },

  getters:{
    getWorker(state){
      return state.user;
    }
  },

  mutations:{
    setWorker(state, payload){
      state.user = payload;
    }
  },

  actions:{},

})
