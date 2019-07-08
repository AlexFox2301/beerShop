<template>
  <div id="app">

    <div class="row float-right">
      <div class="col-sm-5 mr-5" style="color: darkgray">{{user.name}}</div>
<!--      <div class="col-sm-5 mr-5" style="color: darkgray">{{user}}</div>-->
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
              v-if="saleLink"
              v-bind:user="user"
              :key="user.id"
              active-class="active"
              to="/sale"
            >
              Продажа
              <span class="sr-only">(current)</span>
            </router-link>

            <router-link
              class="nav-link"
              tag="li"
              v-bind:user="user"
              :key="user.id"
              exact
              v-if="supplyLink"
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
            v-if="reportLink"
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
            v-if="workersLink"
            active-class="active"
            to="/workers"
          >
            Сотрудники
            <span class="sr-only">(current)</span>
          </router-link>

          <router-link
            class="nav-link"
            tag="li"
            exact
            v-if="providersLink"
            active-class="active"
            to="/providers"
          >
            Поставщики
            <span class="sr-only">(current)</span>
          </router-link>

        </ul>
      </div>
    </nav>
    <hr>

    <div id="loginPassword" class="container" v-if="activeNav">

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

      <div>
        <button class="btn btn-primary" @click="loginCheck">Войти</button>
      </div>

      <div class="error">
        <span>{{msgErrorLogin}}</span>
      </div>

    </div>

    <router-view v-bind:user="user"
                 :key="user.id"></router-view>
  </div>
</template>

<script>
export default {

  // props: ["user"],

  data(){
    return{
      login: '',
      password: '',

      user: {name:'Гость'},

      saleLink: false,
      supplyLink: false,
      reportLink: false,
      workersLink: false,
      providersLink: false,

      activeNav: true,

      workers: [],

      msgErrorLogin: ''

    }
},

  computed:{
    user(){
      return this.$store.state.user
    }
  },

  methods:{

    loginCheck () {
      this.resource.get().then(responce => responce.json())
        .then(workers => this.workers = workers)
        .then(us => {

          for (let i=0; i<this.workers.length; ++i) {//alert('начали цикл')

            if (this.workers[i].login !== this.login)
            {
              continue;
            }
            if (this.workers[i].password === this.password)
            {
              this.activeNav = !this.activeNav;
              this.user = this.workers[i];


              if (this.user.access.indexOf('sale') >= 0) {
                this.saleLink = true;}
              if (this.user.access.indexOf('supply') >= 0) {
                this.supplyLink = true;}
              if (this.user.access.indexOf('report') >= 0) {
                this.reportLink = true;}
              if (this.user.access.indexOf('workers') >= 0) {
                this.workersLink = true;}
              if (this.user.access.indexOf('providers') >= 0) {
                this.providersLink = true;}

              this.$router.push('/bottle');
              this.workers = [];
              return;
            }
          }
          this.msgErrorLogin = 'Неверно введенный логин или пароль'
        })
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

  .error {
    color: red;
    font-size: 12px;
    margin: 5px;

  }
</style>
