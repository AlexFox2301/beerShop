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

<!--{{general}} / {{ra}}-->
<!--    <button class="btn" @click="update">xx</button>-->

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

    <div id="bodyGeneral"
         class="row position"
         v-for="(gen, index) in general"
         :key="index"
    >

      <div class="col-sm-1">
        <span>{{gen.id}}</span>
      </div>

      <div class="col-sm-1">
        <span>{{gen.id}}</span>
      </div>
    </div>

<!--    <div id="bodySale" class="row positionSale" v-for="order in orders" :key="order.id" v-model="orders">-->

<!--      <div class="col-sm-1">-->
<!--        <span>{{order.id}}</span>-->
<!--      </div>-->

<!--      <div class="col-sm-11">-->
<!--        <div class="row position" v-for="item in order.beerOrder">-->

<!--          <div class="col-sm-1">-->
<!--            <span>{{item.idSort}}</span>-->
<!--          </div>-->

<!--          <div class="col-sm-3">-->
<!--            <span>{{item.beerSort}}</span>-->
<!--          </div>-->

<!--          <div class="col-sm-2">-->
<!--            <span>{{item.volume}}</span>-->
<!--          </div>-->

<!--          <div class="col-sm-2">-->
<!--            <span>{{item.cost}}</span>-->
<!--          </div>-->

<!--          <div class="col-sm-2">-->
<!--            <span>{{item.quantity}}</span>-->
<!--          </div>-->

<!--          <div class="col-sm-2">-->
<!--            <span>{{item.sumPosition}}</span>-->
<!--          </div>-->

<!--        </div>-->

<!--        <div class="row align-items-end">-->
<!--          &lt;!&ndash;            <div class="col-sm-2">&ndash;&gt;-->
<!--          &lt;!&ndash;              <span>{{order.worker.name}}</span>&ndash;&gt;-->
<!--          &lt;!&ndash;            </div>&ndash;&gt;-->
<!--          <div class="col-sm-8">-->
<!--            <span>{{order.date}}</span>-->
<!--          </div>-->
<!--          <div class="col-sm-2">-->
<!--            <span>{{order.sum}}</span>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

<!--    </div>-->

<!--    <div id="bodySupply" class="row positionSupply" v-for="supply in supplies">-->
<!--      <div class="col-sm-1">-->
<!--        <span>{{supply.id}}</span>-->
<!--      </div>-->
<!--      <div class="col-11">-->
<!--        <div class="row position" v-for="item in supply.supply">-->
<!--          <div class="col-1">-->
<!--            <span>{{item.idSort}}</span>-->
<!--          </div>-->

<!--          <div class="col-3">-->
<!--            <span>{{item.sortName}}</span>-->
<!--          </div>-->

<!--          <div class="col-2">-->
<!--            <span>{{item.price.volume}}</span>-->
<!--          </div>-->

<!--          <div class="col-2">-->
<!--            <span>{{item.price.cost}}</span>-->
<!--          </div>-->

<!--          <div class="col-2">-->
<!--            <span>{{item.price.quantity}}</span>-->
<!--          </div>-->

<!--          <div class="col-2">-->
<!--            <span>{{item.sumPosition}}</span>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="row">-->
<!--          &lt;!&ndash;            <div class="col-sm-1">&ndash;&gt;-->
<!--          &lt;!&ndash;              <span>{{supply.worker.name}}</span>&ndash;&gt;-->
<!--          &lt;!&ndash;            </div>&ndash;&gt;-->
<!--          <div class="col-sm-10">-->
<!--            <span>{{supply.date}}</span>-->
<!--          </div>-->
<!--          &lt;!&ndash;            <div class="col-sm-1">&ndash;&gt;-->
<!--          &lt;!&ndash;              <span>{{supply.sumSupply}}</span>&ndash;&gt;-->
<!--          &lt;!&ndash;            </div>&ndash;&gt;-->
<!--        </div>-->
<!--        &lt;!&ndash;          <div class="row">&ndash;&gt;-->
<!--        &lt;!&ndash;            <span>{{supply.provider.name}}</span>&ndash;&gt;-->
<!--        &lt;!&ndash;          </div>&ndash;&gt;-->
<!--      </div>-->
<!--    </div>-->

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

          her:[1, 2,3,4,5,6],
          reh:['jhg','jkhg','jhgkjhkg','jhghvg'],
          ra:[],

          search: '',
          startDate: null,
          endDate: null
        }
      },

      methods:{

        scan(){},

        collectionPeriod(){
          const collection = [];

          let start = new Date(this.startDate);
          let end = new Date(this.endDate).getTime() + 24*60*60*1000;
          // let now = new Date()

          for (let i=0; i<this.general.length; i++)
          {
            if (new Date(this.general[i].date) >= start & new Date(this.general[i].date) <= end)
            {
              console.log(this.general[i].date)
              collection.push(this.general[i]);
            }
          }
          this.general = collection;

        },

        update(){
          this.general = this.orders.concat(this.supplies);
        }


      },

    watch:{
            // general(){
            //   this.general = this.supplies.concat(this.orders);
            // }
    },


      created() {

        this.resourceSale = this.$resource('orders');

          this.resourceSale.get().then(responce => responce.json())
            .then(orders => this.orders = orders);

        this.resourceSupply = this.$resource('supplies');

          this.resourceSupply.get().then(responce => responce.json())
            .then(supplies => this.supplies = supplies)
            .then(general => this.general = this.orders.concat(this.supplies))

          // const collection = [];


        // Array.prototype.push.apply(collection, this.supplies);
        // Array.prototype.push.apply(this.general, this.orders)

        // this.general = collection;

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
