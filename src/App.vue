<template>
  <div id="app">

    <div class="row float-right">
      <div class="col-sm-5 mr-5" style="color: darkgray">{{user.name}}</div>
    </div>

    <h1>Бутыль пива</h1>


    <nav class="navbar navbar-expand-lg navbar-light bg-light" v-if="!activeNav">

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

          <router-link
            class="nav-link"
            tag="li"
            exact
            active-class="active"
            to="/workers"
          >
            Сотрудники
            <span class="sr-only">(current)</span>
          </router-link>

        </ul>
      </div>
    </nav>
    <hr>

    <div class="container" v-if="activeNav">

      <div class="form-group">
        <div class="row justify-content-center align-items-center">
          <div class="col-sm-2">
            <label for="login">Логин</label>
          </div>

          <div class="col-sm-3">
            <input id="login" type="text" class="form-control" v-model="login">
          </div>
        </div>
      </div>

      <div class="form-group">
        <div class="row justify-content-center align-items-center">
          <div class="col-sm-2">
            <label for="password">Пароль</label>
          </div>

          <div class="col-sm-3">
            <input id="password" class="form-control" type="password" v-model="password">
          </div>
        </div>
      </div>

      <button class="btn btn-primary" @click="loginCheck">Войти</button>

    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {

  data(){
    return{
      login: '',
      password: '',

      user: {name:'Гость'},

      activeNav: true,

      workers: []

    }
},

  methods:{

    loginCheck () {
      this.resource.get().then(responce => responce.json())
        .then(workers => this.workers = workers)

      for (var i=0; i<this.workers.length; ++i) {

        if (this.workers[i].login !== this.login)
        {
          continue;
        }
        if (this.workers[i].password === this.password)
        {
          this.activeNav = !this.activeNav;
          this.user = this.workers[i];
          this.$router.push('/bottle');
          return this.workers[i];
        }
      }
      // alert('Неверно введенный логин или пароль')
    }
  },



  created() {
    this.resource = this.$resource('workers')
  },





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
