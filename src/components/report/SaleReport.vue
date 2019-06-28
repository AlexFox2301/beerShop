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
            <div class="col-sm-2 position">
              <span>{{order.sum}}</span>
            </div>
          </div>
        </div>

      </div>

    </div>
</template>

<script>
    export default {
        // name: "saleReport"
      data(){
        return{
          resource: null,

          // beers: [],
          orders: [],

          search: '',
          startDate: null,
          endDate: null
        }
      },

      // watch:{
      //   orders: function () {
      //     this.resource.get().then(responce => responce.json())
      //       .then(orders => this.orders = orders)
      //   }
      // },

      methods:{

        scan(){},

        collectionPeriod(){
          const collection = [];

          let start = new Date(this.startDate);
          let end = new Date(this.endDate).getTime() + 24*60*60*1000;
          // let now = new Date()

            for (let i=0; i<this.orders.length; i++)
            {
              if (new Date(this.orders[i].date) >= start & new Date(this.orders[i].date) <= end)
              {
                console.log(this.orders[i].date)
                collection.push(this.orders[i]);
              }
          }
          this.orders = collection;

        }

      },



      created() {

        this.resource = this.$resource('orders'),

          this.resource.get().then(responce => responce.json())
            .then(orders => this.orders = orders)

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
    background-color: #A9F5F2;
  }

  .positionSale {
    border: darkgray solid 0.5px;
    padding: 5px;
    border-radius: 15px;
    background-color: #E0F8F7;
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
