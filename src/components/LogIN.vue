<template>
  <div id="loginPassword" class="container">

    <div class="form-group">
      <div class="row justify-content-center align-items-center">
        <div class="col-sm-2">
          <label for="login">Логин</label>
        </div>

        <div class="col-sm-8">
          <input id="login" type="text" class="form-control" v-model="login" required>
        </div>
      </div>
    </div>

    <div class="form-group">
      <div class="row justify-content-center align-items-center">
        <div class="col-sm-2">
          <label for="password">Пароль</label>
        </div>

        <div class="col-sm-8">
          <input id="password" class="form-control" type="password" v-model="password" @keyup.enter="loginCheck" required>
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
</template>

<script>
  export default {
    name: "LogIN",
    data() {
      return {
        login: '',
        password: '',
        user: {name: 'Гость'},
        activeNav: true,
        workers: [],
        msgErrorLogin: ''
      }
    },
    methods:{
      loginCheck () {
        this.resource.get().then(responce => responce.json())
          .then(workers => this.workers = workers)
          .then(() => {
            for (let i=0; i<this.workers.length; ++i) {
              if (this.workers[i].login !== this.login)
              {
                continue;
              }
              if (this.workers[i].password === this.password)
              {
                this.user = this.workers[i];
                this.$store.commit('setWorker', this.user);
                this.$store.commit('setActiveNav', !this.activeNav);
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

<style scoped>
  .container{
    max-width: 500px;
    margin: 30px;
    padding: 20px;
    border: black solid 1px;
    border-radius: 10px;
    background-color: #ccc;
    display: inline-block;
    font-size: 16px;
    font-weight: bold;
    box-shadow: 0 0 35px grey;
  }
  input {
    margin: 5px 0 5px 0;
    border-radius: 20px;
    padding-left: 20px;
  }
  .error {
    font-size: 16px;
    font-family: SansSerif;
  }
</style>
