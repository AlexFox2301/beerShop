<template>
<!--    <div class="container">-->

<!--      <div class="form-group">-->
<!--        <div class="row justify-content-center align-items-center">-->
<!--          <div class="col-sm-2">-->
<!--            <label for="login">Логин</label>-->
<!--          </div>-->

<!--          <div class="col-sm-3">-->
<!--            <input id="login" type="text" class="form-control" v-model="login">-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="form-group">-->
<!--        <div class="row justify-content-center align-items-center">-->
<!--          <div class="col-sm-2">-->
<!--            <label for="password">Пароль</label>-->
<!--          </div>-->

<!--          <div class="col-sm-3">-->
<!--            <input id="password" class="form-control" type="password" v-model="password">-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

<!--      <button class="btn btn-primary" @click="loginCheck">Войти</button>-->

<!--    </div>-->
</template>

<script>
    export default {
        name: "Entry",

      // data(){
      //     return{
      //       login: '',
      //       password: '',
      //
      //       user: {},
      //
      //       activeNav: false,
      //
      //       workers: []
      //     }
      // },

      methods:{

          loginCheck () {
            this.resource.get().then(responce => responce.json())
              .then(workers => this.workers = workers)

            for (var i=0; i<this.workers.length; ++i) {
              console.log(this.workers[i].login + ' ' + this.workers[i].password + ' ' + this.workers[i].name + ' ' + this.workers[i].phone)
              console.log(this.login + ' ' + this.password)
            if (this.workers[i].login !== this.login)
              {
                continue
              }
            if (this.workers[i].password === this.password)
              {console.log('dont exit')
                this.activeNav = true;
                this.user = this.workers[i];
                alert('Вход выполнен!');
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

<style scoped>

</style>
