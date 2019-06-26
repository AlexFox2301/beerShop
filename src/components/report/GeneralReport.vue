<template>
  <div class="container">
    <div class="row mb-3">
      <input
        id="search"
        type="search"
        v-model="search"
        @change="scan"
        placeholder="ПОИСК">
      <!--        <button class="btn btn-sm" ></button>-->
    </div>
    <div class="row mb-3">
      <div class="col-sm-2">
        <span>Вывести за период</span>
      </div>
      <div class="col-sm-3">
        <input type="date" v-model="startDate">
      </div>
      <div class="col-sm-3">
        <input type="date" v-model="endDate">
      </div>
      <div class="col-sm-1">
        <button class="btn btn-sm btn-info bat" @click="collectionPeriod">Вывести</button>
      </div>

    </div>

    <div id="head" class="row position">

      <div class="col-sm-1">
        <span>ID</span>
      </div>

      <div class="col-sm-3">
        <span>Сорт пива</span>
      </div>

      <div class="col-sm-2">
        <span>объём бутылки</span>
      </div>

      <div class="col-sm-2">
        <span>Цена</span>
      </div>

      <div class="col-sm-2">
        <span>Количество</span>
      </div>

      <div class="col-sm-2">
        <span>Сумма</span>
      </div>

    </div>

    <div id="body" class="row positionSale" v-for="order in orders" :key="order.id" v-model="orders">

      <div class="col-sm-1">
        <span>{{order.id}}</span>
      </div>

      <div class="col-sm-11">
        <div class="row position" v-for="item in order.beerOrder">

          <div class="col-sm-1">
            <span>{{item.idSort}}</span>
          </div>

          <div class="col-sm-3">
            <span>{{item.beerSort}}</span>
          </div>

          <div class="col-sm-2">
            <span>{{item.volume}}</span>
          </div>

          <div class="col-sm-2">
            <span>{{item.cost}}</span>
          </div>

          <div class="col-sm-2">
            <span>{{item.quantity}}</span>
          </div>

          <div class="col-sm-2">
            <span>{{item.sumPosition}}</span>
          </div>

        </div>

        <div class="row align-items-end">
          <!--            <div class="col-sm-2">-->
          <!--              <span>{{order.worker.name}}</span>-->
          <!--            </div>-->
          <div class="col-sm-8">
            <span>{{order.dateOrder}}</span>
          </div>
          <div class="col-sm-2">
            <span>{{order.sumOrder}}</span>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
    export default {
      data(){
        return{
          resourceSale: null,
          resourceSupply: null,

          orders: [],
          supplies: [],

          general: []
        }
      },



      created() {
        // this.resource = this.$resource('beers'),
        this.resourceSale = this.$resource('orders'),
        this.resourceSupply = this.$resource('supplies'),
          // this.resource.get().then(responce => responce.json())
          //   .then(beers => this.beers = beers);

          this.resourceSale.get().then(responce => responce.json())
            .then(orders => this.orders = orders)

          this.resourceSupply.get().then(responce => responce.json())
            .then(supplies => this.supplies = supplies)

        // this.$http.get('http://localhost:3000/supplies')
        //   .then(response => {return response.json()}).then(supplies => this.supplies = supplies)

        // this.$http.get('http://localhost:3000/beers')
        //   .then(response => {return response.json()}).then(beers => this.beers = beers)

        this.general.concat(this.orders, this.supplies)
      },
    }
</script>

<style scoped>

  .position {
    border: darkgray solid 0.5px;
    padding: 5px;
    border-radius: 15px;
    background-color: #AFDAFC;
  }

  .positionSale {
    border: darkgray solid 0.5px;
    padding: 5px;
    border-radius: 15px;
    background-color: #E0F8F7;
  }

  .positionSupply {
    border: darkgray solid 0.5px;
    padding: 5px;
    border-radius: 15px;
    background-color: #D9FFC2;
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

  }

  .bat{
    border-radius: 15px;
  }
</style>
