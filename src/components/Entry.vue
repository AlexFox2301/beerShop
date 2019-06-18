<template>
    <div class="container">

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
</template>

<script>
    export default {
        name: "Entry",

      data(){
          return{
            login: '',
            password: '',

            workers: []
          }
      },

      methods:{
          loginCheck(){
            this.resource.get().then(responce => responce.json())
              .then(workers => this.workers = workers)
            
            if (this.workers.login !== this.login) 
              {
                alert('Данный логин не зарегистрирован в системе')
              }
            if (this) 

          }
      },

      created() {
        this.resource = this.$resource('workers')
      },
    }
</script>

<style scoped>

</style>
