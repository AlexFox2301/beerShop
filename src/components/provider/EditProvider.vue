<template>
  <div class="container positionProvider">

    <div class="row form-group">
      <div class="col-sm-4 text-right">
        <label for="nameProvider">Наименование</label>
      </div>
      <div class="col-sm-5 align-self-start">
        <input id="nameProvider" class="form-control" type="text" v-model="provider.name">
      </div>
    </div>

    <div class="row form-group">
      <div class="col-sm-4 text-right">
        <label for="addressProvider">Адресс</label>
      </div>
      <div class="col-sm-5 text-left">
        <input id="addressProvider" class="form-control" type="text" v-model="provider.address">
      </div>
    </div>

    <div class="row form-group">
      <div class="col-sm-4 text-right">
        <label for="phone">Телефон</label>
      </div>
      <div class="col-sm-5 text-left">
          <input id="phone" class="form-control" type="text" v-model="provider.phone">
        <div class="row" v-for="(ph, count) in provider.phones">
          <div class="col-sm-9">
            <span class="p-2">{{ph}}</span>
          </div>
          <div class="col-sm-2">
            <button class="btn btn-danger btn-sm bat" @click="deletePhone(count)">-</button>
          </div>
        </div>
      </div>
      <div class="col-sm-1 text-right">
        <button class="btn btn-sm btn-primary bat" @click="addPhone">+</button>
      </div>
    </div>

    <div class="row form-group">
      <div class="col-sm-4 text-right">
        <label for="email">e-mail</label>
      </div>
      <div class="col-sm-5 text-left">
          <input id="email" class="form-control" type="text" v-model="provider.email">
        <div class="row" v-for="em in provider.emails">
          <div class="col-sm-9">
            <span>{{em}}</span>
          </div>
          <div class="col-sm-2">
            <button class="btn btn-danger btn-sm bat" @click="deleteEmail">-</button>
          </div>
        </div>
      </div>
      <div class="col-sm-1 text-right">
        <button class="btn btn-sm btn-primary bat" @click="addEmail">+</button>
      </div>
    </div>

    <div class="row form-group">
      <div class="col-sm-4 text-right">
        <label for="doc">Документы</label>
      </div>
      <div class="col-sm-5 text-left">
        <input id="doc" class="form-control" type="text" v-model="provider.doc">
      </div>
    </div>

    <div class="row form-group">
      <div class="col-sm-4 text-right">
        <label for="invoice">Счет</label>
      </div>
      <div class="col-sm-5 text-left">
        <input id="invoice" class="form-control" type="text" v-model="provider.invoice">
      </div>
    </div>

    <div class="row form-group justify-content-md-center">
      <button class="btn btn-primary" @click="addProviderToDB">Внести в базу</button>
    </div>

  </div>
</template>

<script>
    export default {
        name: "EditProviderOk",

      data(){
        return{
          resource: null,

          phone: '',
          email: '',

          providers: [],
          provider:{},

          idProvider: null
        }
      },

      methods: {

        addPhone(){
          this. provider.phones.push(this.phone);
          this.phone = '';
        },

        addEmail() {
          this.provider.emails.push(this.email);
          this.email = '';
        },

        deletePhone(count){
          this.provider.phones.splice(count, 1)
        },

        deleteEmail(count){
          this.provider.emails.splice(count, 1)
        },

        addProviderToDB(){

          if (this.phone !== '') {
            this.provider.phones.push(this.phone);
            this.phone = '';
          }

          if (this.email !== '') {
            this.provider.emails.push(this.email);
            this.email = '';
          }

          this.$http.put('http://localhost:3000/providers/' + this.idProvider, this.provider)
            .then(responce => responce.json());

          this.provider = null;

          this.$router.push('/providers')
        }

      },

      created() {

        this.resource = this.$resource('providers');

        this.idProvider = this.$store.getters.getProviderID;

        this.$http.get('http://localhost:3000/providers/' + this.idProvider)
          .then(response => {return response.json()})
          .then(provider => this.provider = provider);
      }
    }
</script>

<style scoped>

  .position {
    margin-top: 15px;
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

  input {
    width: 90%;
    border-radius: 10px;
    padding-left: 20px;
  }

  select {
    width: 95%;
    border-radius: 10px;
    padding: 2%;

  }

  label {
    margin: 5px;
  }

  .bat{
    border-radius: 15px;

  }

</style>
