<template>
    <div class="container">

        <div class="row">
          <div class="col-10">
            <div class="form-group">
              <div class="row">
                <div class="col-4">
                  <label for="name">Имя</label>
                </div>
                <div class="col-4">
                  <input id="name" class="form-control" type="text" v-model="name">
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="row">
                <div class="col-4">
                  <label for="login">login</label>
                </div>
                <div class="col-4">
                  <input id="login" class="form-control" type="text" v-model="login" @input="checkLogin">
                  <span>{{msgLogin}}</span>
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="row">
                <div class="col-4">
                  <label for="password">Пароль</label>
                </div>
                <div class="col-4">
                  <input id="password" class="form-control" type="password" v-model="password">
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="row">
                <div class="col-4">
                  <label for="confirmPassword">Подтвердить пароль</label>
                </div>
                <div class="col-4">
                  <input id="confirmPassword" class="form-control" type="password" @input="checkConfirmation" v-model="confirmPassword">
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="row">
                <div class="col-4">
                  <label for="workerPosition">Должность</label>
                </div>
                <div class="col-4">
                  <input id="workerPosition" class="form-control" type="text" v-model="workerPosition">
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="row">
                <div class="col-4">
                  <label for="address">Адресс</label>
                </div>
                <div class="col-4">
                  <input id="address" class="form-control" type="text" v-model="address">
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="row">
                <div class="col-4">
                  <label for="phone">Телефон</label>
                </div>
                <div class="col-4">
                  <input id="phone" class="form-control" type="tel" v-model="phone">
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="row">
                <div class="col-4">
                  <label for="status">Статус</label>
                </div>
                <div class="col-4">
<!--                  <input id="status" class="form-control" type="tel" v-model="status">-->
                  <select id="status" v-model="status">
                    <option>Работает</option>
                    <option>Уволен</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="row">
                <div class="col-4">
                  <label for="note">Примечание</label>
                </div>
                <div class="col-4">
                  <input id="note" class="form-control" type="text" v-model="note">
                </div>
              </div>
            </div>


          </div>

          <div class="col-2">
            <router-link
              tag="button"
              class="btn btn-primary"
              @click="addWorkerToDB"
            >
              Внести в базу
            </router-link>
          </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "NewWorker",

      data() {
          return{
            resource: null,

            name: '',
            login: '',
            password: '',
            workerPosition: '',
            address: '',
            phone: '',
            status: '',
            note: '',

            msgLogin: '',
            confirmPassword: ''
          }
      },

      methods: {

        checkLogin() {
        },

        checkConfirmation() {
        },

        addWorkerToDB() {
          const worker = {
            name: this.name,
            login: this.login,
            password: this.password,
            workerPosition: this.workerPosition,
            address: this.address,
            phone: this.phone,
            status: this.status,
            note: this.note
          }

          this.resource = this.$resource('workers'),
          this.resource.get().then(responce => responce.json())
            .then(workers => this.workers = workers)

          this.resource.save({}, worker)

          this.name = '',
          this.login = '',
          this.password = '',
          this.workerPosition = '',
          this.address = '',
          this.phone = '',
          this.status = '',
          this.note = ''


        }
      }


    }
</script>

<style scoped>

</style>
