<template>
    <div class="container position">

        <div class="row justify-content-center align-items-center">
          <div class="col-10">
            <div class="form-group">
              <div class="row">
                <div class="col-4">
                  <label for="name">Имя</label>
                </div>
                <div class="col-6">
                  <input id="name" class="form-control" type="text" v-model="name">
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="row">
                <div class="col-4">
                  <label for="login">login</label>
                </div>
                <div class="col-6">
                  <input id="login" class="form-control" type="text" v-model="login" @change="checkLogin">
                  <span style="color: red; font-size: 10px">{{msgLog}}</span>
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="row">
                <div class="col-4">
                  <label for="password">Пароль</label>
                </div>
                <div class="col-6">
                  <input id="password" class="form-control" type="password" v-model="password">
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="row">
                <div class="col-4">
                  <label for="confirmPassword">Подтвердить пароль</label>
                </div>
                <div class="col-6">
                  <input id="confirmPassword" class="form-control" type="password" @input="checkConfirmationPassword" v-model="confirmPassword">
                  <span style="color: red; font-size: 10px">{{msgPas}}</span>
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="row">
                <div class="col-4">
                  <label for="workerPosition">Должность</label>
                </div>
                <div class="col-6">
<!--                  <input id="workerPosition" class="form-control" type="text" v-model="workerPosition">-->
                  <select id="workerPosition" v-model="workerPosition">
                    <option v-for="p in posts">{{p}}</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="row">
                <div class="col-4">
                  <label for="access">Доступ к приложению</label>
                </div>
                <div id="access" class="col-6">
                  <div class="row">
                    <label for="sale">Продажи </label>
                    <input id="sale" class="form-control cheks" type="checkbox" v-model="access" value="sale">

                    <label for="supply">Поставка </label>
                    <input id="supply" class="form-control cheks" type="checkbox" v-model="access" value="supply">

                    <label for="report">Отчет </label>
                    <input id="report" class="form-control cheks" type="checkbox" v-model="access" value="report">

                    <label for="workers">Сотрудники </label>
                    <input id="workers" class="form-control cheks" type="checkbox" v-model="access" value="workers">

                    <label for="providers">Поставщики </label>
                    <input id="providers" class="form-control cheks" type="checkbox" v-model="access" value="providers">
                  </div>

                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="row">
                <div class="col-4">
                  <label for="address">Адресс</label>
                </div>
                <div class="col-6">
                  <input id="address" class="form-control" type="text" v-model="address">
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="row">
                <div class="col-4">
                  <label for="phone">Телефон</label>
                </div>
                <div class="col-6">
                  <input id="phone" class="form-control" type="text" v-model="phone">
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="row">
                <div class="col-4">
                  <label for="status">Статус</label>
                </div>
                <div class="col-6">
<!--                  <input id="status" class="form-control" type="tel" v-model="status">-->
                  <select id="status" v-model="status">
                    <option v-for="stat in statusArrey">{{stat}}</option>

                  </select>
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="row">
                <div class="col-4">
                  <label for="note">Примечание</label>
                </div>
                <div class="col-6">
                  <input id="note" class="form-control" type="text" v-model="note">
                </div>
              </div>
            </div>


          </div>

          <div class="col-2">
            <button id="addToDB" class="btn btn-primary" @click="addWorkerToDB" ref="/workers">Внести в базу</button>

            <strong style="color: red; font-size: 14px">{{msgTotal}}</strong>
          </div>
        </div>
{{access}}
    </div>
</template>

<script>
    export default {
        name: "NewWorker",

      data() {
          return{
            resource: null,
            statusArrey: [
              'Стажировка',
              'Работает',
              'уволен'
            ],

            name: '',
            login: '',
            password: '',
            workerPosition: '',
            access: [],
            address: '',
            phone: '',
            status: '-',
            note: '-',

            msgLogin: '',
            confirmPassword: '',
            workers:[],
            checkedLogin: false,
            checkedPassword: false,
            posts: ['Директор', 'Системный администратор', 'Бухгалтер', 'Продавец', 'Водитель', 'Кладовщик', 'Грузчик',  'Охранник',  'Уборщик'],
            msgLog: '',
            msgPas: '',
            msgTotal: ''
          }
      },

      methods: {

        checkLogin() {

          for (var i=0; i<this.workers.length; i++) {
            if (this.workers[i].login === this.login) {
              this.checkedLogin = false;
              this.msgLog = 'Данный Логин уже зарегестрирован в системе. Выберите другой.';
              return;
            } else {
              this.checkedLogin = true;
              this.msgLog = '';
              this.msgTotal = ''
            }
          }


        },

        checkConfirmationPassword() {
          if (this.password === this.confirmPassword) {
            this.checkedPassword = true;
            this.msgPas = '';
            this.msgTotal = ''
          } else {
            this.checkedPassword = false;
            this.msgPas = 'Пароли не совпадают.'
          }
        },

        addWorkerToDB() {
          var worker = {
            name: this.name,
            login: this.login,
            password: this.password,
            workerPosition: this.workerPosition,
            access: this.access,
            address: this.address,
            phone: this.phone,
            status: this.status,
            note: this.note
          }

          if (this.checkedLogin & this.checkedPassword){
            this.resource = this.$resource('workers'),
              // this.resource.get().then(responce => responce.json())
              //   .then(workers => this.workers = workers)

              this.resource.save({}, worker)

            this.name = '',
              this.login = '',
              this.password = '',
              this.workerPosition = '',
              this.access = false,
              this.address = '',
              this.phone = '',
              this.status = '-',
              this.note = '-',


              this.msgTotal = '',

              this.confirmPassword = ''

            this.$router.push('/workers')
          } else {
            this.msgTotal = ' Для окончания регистрации нового сотрудника необходимо исправить замечания!'
          }




        }
      },

      created() {
        this.resource = this.$resource('workers'),
          this.resource.get().then(responce => responce.json())
            .then(workers => this.workers = workers)
      }


    }
</script>

<style scoped>

.position {
  margin-top: 15px;
  border: darkgray solid 0.5px;
  padding: 5px;
  border-radius: 15px;
  background-color: #FFDB8B;
}

input {
  width: 95%;
  border-radius: 10px;
  padding-left: 20px;
}

select {
  width: 95%;
  border-radius: 10px;
  padding: 2%;
  padding-left: 20px;
}

.cheks {
  width: 20px;
  margin-right: 30px;
  margin-left: 30px;
  /*align-content: center;*/
}

.bat{
  border-radius: 15px;
}
</style>
