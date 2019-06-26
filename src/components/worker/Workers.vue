<template>
  <div class="container-fluid">
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
    <hr>

          <div class="row justify-content-center align-items-center position">

            <div class="col-1 tab>">ID</div>
            <div class="col-2 tab">Имя</div>
            <div class="col-1 tab">Login</div>
            <div class="col-1 tab">Должность</div>
            <div class="col-2 tab">Адресс</div>
            <div class="col-2 tab">Телефон</div>
            <div class="col-1 tab">Статус</div>
            <div class="col-2 tab">Примечание</div>

          </div>

          <div class="row justify-content-center align-items-center positionWorker"
               v-for="worker in workers" :key="worker.id">
            <div class="col-1">{{worker.id}}</div>
            <div class="col-2">{{worker.name}}</div>
            <div class="col-1">{{worker.login}}</div>
            <div class="col-1">{{worker.workerPosition}}</div>
            <div class="col-2">{{worker.address}}</div>
            <div class="col-2">{{worker.phone}}</div>
            <div class="col-1">{{worker.status}}</div>
            <div class="col-1">{{worker.note}}</div>
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

.col-1 {
  border-right: solid grey 1px;
}.col-2 {
  border-right: solid grey 1px;
}

.position {
  border: darkgray solid 0.5px;
  padding: 5px;
  border-radius: 15px;
  background-color: #FFDB8B;
}

.positionWorker {
  border: darkgray solid 0.5px;
  padding: 5px;
  border-radius: 15px;
  background-color: #EEE8AA;
}

/*div {*/
/*  border: darkgray solid 0.5px;*/

/*  border-radius: 15px;*/
/*}*/

input {
  width: 95%;
  border-radius: 10px;
  padding-left: 20px;
}

select {
  width: 95%;
  border-radius: 10px;
  padding: 2%;

}

.bat{
  border-radius: 15px;
}
</style>
