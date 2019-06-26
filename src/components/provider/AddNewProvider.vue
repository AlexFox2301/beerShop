<template>
    <div class="container position">

      <div class="row form-group justify-content-md-center">
        <div class="col-sm-2 text-right">
          <label for="nameP">Наименование</label>
        </div>
        <div class="col-sm-4 align-self-start">
          <input id="nameP" class="form-control" type="text" v-model="name">
        </div>
      </div>

      <div class="row form-group justify-content-md-center">
        <div class="col-sm-2 text-right">
          <label for="address">Адрес</label>
        </div>
        <div class="col-sm-4 text-left">
          <input id="address" class="form-control" type="text" v-model="address">
        </div>
      </div>

      <div class="row form-group justify-content-md-center">
        <div class="col-sm-2 text-right">
          <label for="phone">Телефон</label>
        </div>
        <div class="col-sm-4 text-left">
          <div class="row">
            <input id="phone" class="form-control" type="text" v-model="phone">
            <button class="btn btn-sm btn-primary bat" @click="addPhone">+</button>
          </div>
          <div class="row" v-for="(ph, count) in phones">
            <div class="col-sm-9">
              <span class="p-2">{{ph}}</span>
            </div>
            <div class="col-sm-2">
              <button class="btn btn-danger btn-sm bat" @click="deletePhone(count)">-</button>
            </div>
          </div>
        </div>
      </div>

      <div class="row form-group justify-content-md-center">
        <div class="col-sm-2 text-right">
          <label for="email">e-mail</label>
        </div>
        <div class="col-sm-4 text-left">
          <div class="row">
            <input id="email" class="form-control" type="text" v-model="email">
            <button class="btn btn-sm btn-primary bat" @click="addEmail">+</button>
          </div>
          <div class="row" v-for="em in emails">
            <div class="col-sm-9">
              <span>{{em}}</span>
            </div>
            <div class="col-sm-2">
              <button class="btn btn-danger btn-sm bat" @click="deleteEmail">-</button>
            </div>
          </div>
        </div>
      </div>

      <div class="row form-group justify-content-md-center">
        <div class="col-sm-2 text-right">
          <label for="doc">Документы</label>
        </div>
        <div class="col-sm-4 text-left">
          <input id="doc" class="form-control" type="text" v-model="doc">
        </div>
      </div>

      <div class="row form-group justify-content-md-center">
        <div class="col-sm-2 text-right">
          <label for="invoice">Счет</label>
        </div>
        <div class="col-sm-4 text-left">
          <input id="invoice" class="form-control" type="text" v-model="invoice">
        </div>
      </div>

      <div class="row form-group justify-content-md-center">
        <button class="btn btn-primary" @click="addProviderToDB">Внести в базу</button>
      </div>

{{phones}} / {{emails}} / {{providers}}
    </div>
</template>

<script>
    export default {
        // name: "AddNewProvider"

      data(){
        return{
          resource: null,

          name: '',
          address: '',
          phones: [],
          phone: '',
          emails:[],
          email: '',
          doc: '',
          invoice: ''
        }
      },

      methods: {

        addPhone(){
          this.phones.push(this.phone);
          this.phone = '';
        },

        addEmail() {
          this.emails.push(this.email);
          this.email = '';
        },

        deletePhone(count){
          this.phones.splice(count, 1)
        },

        deleteEmail(count){
          this.emails.splice(count, 1)
        },

        addProviderToDB(){

          if (this.phone !== '') {
            this.phones.push(this.phone)
          }

          if (this.email !== '') {
            this.emails.push(this.email)
          }

          const provider = {
            name: this.name,
            address: this.address,
            phones: this.phones,
            emails: this.emails,
            doc: this.doc,
            invoice: this.invoice
          }
          this.resource.save(provider);

          this.name = '';
          this.address = '';
          this.phones = '';
          this.emails = '';
          this.doc = '';
          this.invoice = '';

          this.$router.push('/providers')
        }

      },


      created() {

        this.resource = this.$resource('providers')

          // this.resource.get().then(responce => responce.json())
          //   .then(providers => this.providers = providers)

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
    width: 90%;
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
