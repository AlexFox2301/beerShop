<template>
  <div id="app">

    <app-navigation v-if="!getActiveNav"></app-navigation>

    <h1>Бутыль пива</h1>

    <app-login v-if="getActiveNav"></app-login>

    <router-view></router-view>
  </div>
</template>

<script>
  import Navigation from './components/Navigation'
  import LogIN from './components/LogIN'

export default {

  components:{
    appNavigation: Navigation,
    appLogin: LogIN,
  },

  data(){
    return{
      user: {name:'Гость'},
    }
},

  computed:{

    getActiveNav(){
      return this.activeNav = this.$store.getters.getActiveNav;
    }
  },

  created() {
    this.resource = this.$resource('workers')
  },
}
</script>

<style>

  body {
    background-color: #eaeaea;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
  }
  .error {
    color: red;
    font-size: 12px;
    margin: 5px;
  }
  h1 {
    margin-top: 50px;
    z-index: 10;
  }

</style>
