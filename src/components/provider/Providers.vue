<template>
    <div class="container-fluid">
      <h3>Поставщики</h3>
      <hr>

      <router-link
        class="nav-link ml-2 mr-2"
        tag="button"
        exact
        active-class="active"
        to="/providers/add_new_provider"
      >
        Создать запись
        <span class="sr-only">(current)</span>
      </router-link>

      <router-view></router-view>
      <hr>

      <div class="row position">

        <div class="col-sm-1">
          <span>ID</span>
        </div>

        <div class="col-sm-2">
          <span>Наименование</span>
        </div>

        <div class="col-sm-2">
          <span>Адрес</span>
        </div>

        <div class="col-sm-2">
          <span>Телефон</span>
        </div>

        <div class="col-sm-2">
          <span>e-mail</span>
        </div>

        <div class="col-sm-1">
          <span>Документы</span>
        </div>

        <div class="col-sm-2">
          <span>Счет</span>
        </div>

      </div>

      <div class="row positionProvider"
           v-for="provider in providers"
           :key="provider.id"
           v-model="providers">

        <div class="col-sm-1">
          <span>{{provider.id}}</span>
        </div>

        <div class="col-sm-2">
          <span>{{provider.name}}</span>
        </div>

        <div class="col-sm-2">
          <span>{{provider.address}}</span>
        </div>

        <div class="col-sm-2">
          <div class="row" v-for="phone in provider.phones">
            <span>{{phone}}</span>
          </div>
        </div>

        <div class="col-sm-2">
          <div class="row" v-for="email in provider.emails">
            <span>{{email}}</span>
          </div>
        </div>

        <div class="col-sm-1">
          <span>{{provider.doc}}</span>
        </div>

        <div class="col-sm-1">
          <span>{{provider.invoice}}</span>
        </div>

        <div class="col-sm-1">
          <button
            class="btn btn-danger btn-sm bat"
            @click="deleteProvider(provider)"
          >-</button>
        </div>

      </div>

    </div>
</template>

<script>
    export default {
        // name: "Providers"
      data(){
        return{
          resource: null,

          providers: [],

          // name: '',
          // address: '',
          // phones: [],
          //   phone: '',
          // emails:[],
          //   email: '',
          // doc: '',
          // invoice: ''
        }
      },

      methods:{

        deleteProvider(provider){
          this.$http.delete('http://localhost:3000/providers/' + provider.id)
            .then(response => {return response.json()}).then()
        },

      },

      watch:{
        providers(){
          this.resource.get().then(responce => responce.json())
            .then(providers => this.providers = providers)
        }
      },


      created() {


        this.resource = this.$resource('providers'),

          this.resource.get().then(responce => responce.json())
            .then(providers => this.providers = providers)

        // this.$http.get('http://localhost:3000/orders')
        //   .then(response => {return response.json()}).then(orders => this.orders = orders)
      }

    }
</script>

<style scoped>
  .position {
    border: darkgray solid 0.5px;
    padding: 5px;
    border-radius: 15px;
    background-color: #E2A9F3;
  }

  .positionProvider {
    border: darkgray solid 0.5px;
    padding: 5px;
    border-radius: 15px;
    background-color: #ECE0F8;
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
