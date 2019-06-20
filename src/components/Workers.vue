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

          <div class="row">

            <div class="col-1>">ID</div>
            <div class="col-2 m-1>">Имя</div>
            <div class="col-2 m-1>">Login</div>
            <div class="col-1 m-1>">Должность</div>
            <div class="col-2 m-1>">Адресс</div>
            <div class="col-1 m-1>">Телефон</div>
            <div class="col-1 m-1>">Статус</div>
            <div class="col-2 m-1>">Примечание</div>



          </div>

          <div class="row" v-for="worker in workers" :key="worker.id">

            <div class="col-1>">{{worker.id}}</div>
            <div class="col-2 m-1>">{{worker.name}}</div>
            <div class="col-2 m-1>">{{worker.login}}</div>
            <div class="col-1 m-1>">{{worker.workerPosition}}</div>
            <div class="col-2 m-1>">{{worker.address}}</div>
            <div class="col-1 m-1>">{{worker.phone}}</div>
            <div class="col-1 m-1>">{{worker.status}}</div>
            <div class="col-2 m-1>">{{worker.note}}</div>
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

      created() {
        this.resource = this.$resource('workers'),
          this.resource.get().then(responce => responce.json())
            .then(workers => this.workers = workers)
      }
    }
</script>

<style scoped>

</style>
