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
        <button class="btn btn-sm btn-info" @click="collectionPeriod">Вывести</button>
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
            <span>{{order.date}}</span>
          </div>
          <div class="col-sm-2">
            <span>{{order.sum}}</span>
          </div>
        </div>
      </div>

    </div>

    <div class="row positionSupply" v-for="supply in supplies">
      <div class="col-sm-1">
        <span>{{supply.id}}</span>
      </div>
      <div class="col-11">
        <div class="row position" v-for="item in supply.supply">
          <div class="col-1">
            <span>{{item.idSort}}</span>
          </div>

          <div class="col-3">
            <span>{{item.sortName}}</span>
          </div>

          <div class="col-2">
            <span>{{item.price.volume}}</span>
          </div>

          <div class="col-2">
            <span>{{item.price.cost}}</span>
          </div>

          <div class="col-2">
            <span>{{item.price.quantity}}</span>
          </div>

          <div class="col-2">
            <span>{{item.sumPosition}}</span>
          </div>
        </div>
        <div class="row">
          <!--            <div class="col-sm-1">-->
          <!--              <span>{{supply.worker.name}}</span>-->
          <!--            </div>-->
          <div class="col-sm-10">
            <span>{{supply.date}}</span>
          </div>
          <!--            <div class="col-sm-1">-->
          <!--              <span>{{supply.sumSupply}}</span>-->
          <!--            </div>-->
        </div>
        <!--          <div class="row">-->
        <!--            <span>{{supply.provider.name}}</span>-->
        <!--          </div>-->
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

          // beers: [],
          orders: [],
          supplies: [],
          general: [],

          search: '',
          startDate: null,
          endDate: null
        }
      },

      methods:{

        scan(){},

        collectionPeriod(){}


      },

    // watch:{
    //         general(){
    //           this.general = this.supplies.concat(this.orders);
    //         }
    // },


      created() {

        let i;
        this.resourceSale = this.$resource('orders');

          this.resourceSale.get().then(responce => responce.json())
            .then(orders => this.orders = orders);

        this.resourceSupply = this.$resource('supplies');

          this.resourceSupply.get().then(responce => responce.json())
            .then(supplies => this.supplies = supplies);

        this.general = this.order.push(this.supplies);
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
