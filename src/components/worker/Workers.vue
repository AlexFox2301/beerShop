<template>
  <div class="container">
    <h2>Сотрудники</h2>
    <hr>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">

          <router-link
            class="nav-link ml-2 mr-2"
            tag="button"
            exact
            active-class="active"
            to="/workers/new_worker"
          >
            Добавить новенького
            <span class="sr-only">(current)</span>
          </router-link>

        </ul>
      </div>
    </nav>



    <router-view></router-view>

          <div class="row justify-content-center align-items-center" style="background-color: lavender">

            <div class="col-1 tab>">ID</div>
            <div class="col-2 tab">Имя</div>
            <div class="col-1 tab">Login</div>
            <div class="col-1 tab">Должность</div>
            <div class="col-2 tab">Адресс</div>
            <div class="col-2 tab">Телефон</div>
            <div class="col-1 tab">Статус</div>
            <div class="col-2 tab">Примечание</div>

          </div>

          <div class="row justify-content-center align-items-center"
               v-for="worker in workers" :key="worker.id">
            <div class="col-1 tab">{{worker.id}}</div>
            <div class="col-2 tab ">{{worker.name}}</div>
            <div class="col-1 tab">{{worker.login}}</div>
            <div class="col-1 tab ">{{worker.workerPosition}}</div>
            <div class="col-2 tab ">{{worker.address}}</div>
            <div class="col-2 tab">{{worker.phone}}</div>
            <div class="col-1 tab">{{worker.status}}</div>
            <div class="col-1 tab">{{worker.note}}</div>
            <div class="col-1">
              <router-link
              class="btn btn-success btn-sm"
              tag="button"
              exact
              active-class="active"
              to="/workers/edit_worker"
              >
              Править
              <span class="sr-only">(current)</span>
              </router-link>
            </div>
          </div>






  </div>
</template>

<script>
    export default {
        name: "Workers",

      data() {
          return {

            workers:[]

          }
      },

      watch:{
          workers(){
            this.resource.get().then(responce => responce.json())
              .then(workers => this.workers = workers)
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
.tab {
  border: solid grey 1px;
  font-size: 14px;
}
</style>
