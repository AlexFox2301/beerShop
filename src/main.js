// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import router from './router/index'
import VueRouter from 'vue-router'
import store from './store/indexStore'
// import router from ''

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.http.options.root = 'http://localhost:3000/'
// Vue.

// const user = this.user

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',

  data(){
    return{
      // eventHub: eventHub
    }
  }
})
