<template>
    <div class="container">
      <div class="row mb-3">
        <div class="col-11">
          <input
            id="search"
            type="search"
            v-model="search"
            placeholder="ПОИСК">
        </div>
        <div class="col-xs-1">
          <button class="btn btn-info btn-sm bat" @click="scan">Найти</button>
        </div>
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
        <div class="col-sm-3">
          <button class="btn btn-sm btn-info bat" @click="resetSearch">Сбросить параметры поиска</button>
        </div>

      </div>

      <div id="head" class="row position">

        <div class="col-sm-1">
          <span>ID</span>
        </div>

        <div class="col-sm-11">
          <div class="row">

            <div class="col-sm-1">
              <span>ID пива</span>
            </div>

            <div class="col-sm-3">
              <span>Сорт пива</span>
            </div>

            <div class="col-sm-2">
              <span>Объём бутылки</span>
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
        </div>

      </div>

      <div id="body" class="row positionSale" v-for="order in orders" :key="order.id" v-model="orders">

        <div class="col-sm-1">
          <span>{{order.id}}</span><br>
          <button class="btn btn-sm btn-danger bat" @click="deleteOrder(order)">Del</button>
        </div>

        <div class="col-sm-11">
          <div class="row position" v-for="item in order.positions">

            <div class="col-sm-1">
              <span>{{item.idSort}}</span>
            </div>

            <div class="col-sm-3">
              <span>{{item.sortName}}</span>
            </div>

            <div class="col-sm-2">
              <span>{{item.volume}} л.</span>
            </div>

            <div class="col-sm-2">
              <span>{{item.cost}} грн.</span>
            </div>

            <div class="col-sm-2">
              <span>{{item.quantity}} шт.</span>
            </div>

            <div class="col-sm-2">
              <span>{{item.sumPosition}}грн.</span>
            </div>

            </div>

          <div class="row align-items-end">
            <div class="col-sm-2">
              <span>{{order.worker.name}}</span>
            </div>
            <div class="col-sm-8">
              <span>{{order.date}}</span>
            </div>
            <div class="col-sm-2 position">
              <span>{{order.sum}} грн.</span>
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

      methods:{

        resetSearch(){
          this.resource.get().then(responce => responce.json())
            .then(orders => this.orders = orders);
          this.search = '';
          this.startDate = null;
          this.endDate = null;
        },

        scan(){

          const searchOrder = [];

          try {
            for (let i=0; i<this.orders.length; i++){

                if (this.orders[i].worker.name.toLowerCase() === this.search.toLowerCase() ||
                  this.orders[i].sum.toString() === this.search) {
                    searchOrder.push(this.orders[i]);
                    continue;
                  }
                // }

              for (let j=0; j<this.orders[i].positions.length; j++){

                if (this.orders[i].positions[j].sortName.toLowerCase() === this.search.toLowerCase() ||
                  this.orders[i].positions[j].volume.toString().toLowerCase() === this.search.toLowerCase() ||
                  this.orders[i].positions[j].cost.toString().toLowerCase() === this.search.toLowerCase()) {

                  searchOrder.push(this.orders[i]);
                  continue;
                }
              }
            }
            this.orders = searchOrder;
          }catch (e) {
            alert('Ой! Что-то пошло не так.');
          }


        },

        collectionPeriod(){
          const collection = [];

          let start = new Date(this.startDate);
          let end = new Date(this.endDate).getTime() + 24*60*60*1000;

          alert(start + "-" + end)

          for (let i=0; i<this.orders.length; i++)
          {

            if (this.startDate === null) {
              if (new Date(this.orders[i].date) <= end) {
                collection.push(this.orders[i]);
              }
            }else{
              if (this.endDate === null){
                if (new Date(this.orders[i].date) >= start) {
                  collection.push(this.orders[i]);
                }
              } else {
                if (new Date(this.orders[i].date) >= start & new Date(this.orders[i].date) <= end)
                {
                  collection.push(this.orders[i]);
                }
              }
            }
          }
          this.orders = collection;

        },

        deleteOrder(order){
          this.$http.delete('http://localhost:3000/orders/' + order.id)
            .then(response => {return response.json()});
        }

      },



      created() {

        this.resource = this.$resource('orders');

          this.resource.get().then(responce => responce.json())
            .then(orders => this.orders = orders)
            .then(ord => this.orders = this.orders.sort(function(a, b){
            return new Date(b.date) - new Date(a.date)}));

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
    background-color: #AFDAFC;
    color: black;
  }
</style>
