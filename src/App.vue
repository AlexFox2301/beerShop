<template>
  <div id="app">
    <div class="row float-right">
      <div class="col-sm-3 mr-5" style="color: darkgray">{{user.name}}</div>
    </div>

    <h1>Бутыль пива</h1>

<!--    <span id="doc_time"></span>-->
<!--    <script type="text/javascript">-->
<!--      clock();-->
<!--    </script>-->

    <nav class="navbar navbar-expand-lg navbar-light bg-light" v-if="activeNav">

      <router-link
        class="nav-link"
        tag="li"
        exact
        active-class="active"
        to="/bottle"
      >
        Бутыль
        <span class="sr-only">(current)</span>
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">

            <router-link
              class="nav-link"
              tag="li"
              exact
              active-class="active"
              to="/sale"
            >
              Продажа
              <span class="sr-only">(current)</span>
            </router-link>

            <router-link
              class="nav-link"
              tag="li"
              exact
              active-class="active"
              to="/supply"
            >
              Поставка
              <span class="sr-only">(current)</span>
            </router-link>

          <router-link
            class="nav-link"
            tag="li"
            exact
            active-class="active"
            to="/report"
          >
            Отчет
            <span class="sr-only">(current)</span>
          </router-link>

        </ul>
      </div>
    </nav>
    <hr>

    <router-view/>
  </div>
</template>

<script>
export default {
  // props: ['user', 'activeNav'],

  data(){
    return{
      user: {},
      activeNav: false
    }
},

  created() {
    this.$root.$on('user', (user) =>
    {
      this.user = user
    })
    this.$root.$on('activeNav', (activeNav) => {
      this.activeNav = activeNav
  })
}

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
