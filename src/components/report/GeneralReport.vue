<template>
  <div class="container">
    <div class="row mb-3">
      <input
        id="search"
        type="search"
        v-model="search"
        @input="scan"
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
      <!--<div class="col-sm-1">-->
        <!--<button class="btn btn-sm btn-info" @click="dateSorting">сортировать по дате</button>-->
      <!--</div>-->

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

    <div id="bodyGeneral"
         class="row position"
         v-for="(gen, index) in general"
         :key="index"
         :class="{'positionSales': gen.sale, 'positionSupplys': !gen.sale}"
    >

      <div class="col-sm-1">
        <span>{{gen.id}}</span>
      </div>

      <div class="col-sm-11">
        <div class="row"
             v-for="pos in gen.positions"
             :class="{'positionSale': gen.sale, 'positionSupply': !gen.sale}"
        >

          <div class="col-sm-1">
            <span>{{pos.idSort}}</span>
          </div>

          <div class="col-sm-3">
            <span>{{pos.sortName}}</span>
          </div>

          <div class="col-sm-2">
            <span>{{pos.volume}} л.</span>
          </div>

          <div class="col-sm-2">
            <span>{{pos.cost}} грн.</span>
          </div>

          <div class="col-sm-2">
            <span>{{pos.quantity}} шт.</span>
          </div>

          <div class="col-sm-2">
            <span>{{pos.sumPosition}} грн.</span>
          </div>

        </div>

        <div class="row">

<!--          <div class="col-sm-2">-->
<!--            <span>{{gen.worker.name}}</span>-->
<!--          </div>-->

          <div class="col-sm-8">
            <span>{{gen.date}}</span>
          </div>

          <div class="col-sm-2" :class="{'positionSale': gen.sale, 'positionSupply': !gen.sale}">
            <span>{{gen.sum}} грн.</span>
          </div>

        </div>
        <div class="row" v-if="!gen.sale">
          {{gen.provider.name}} / {{gen.provider.phones}} / {{gen.provider.emails}}
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

        scan(){
          const searchCollection = [];

          for (let i=0; i<this.general.length; i++)
          {
            if (this.general[i].worker.name === this.search ||
              this.general[i].provider.name === this.search)
            {
              searchCollection.push(this.general[i]);
              continue;
            }

            for (let j=0; j<this.general[i].positions.length; j++)
            {
              if (this.general[i].positions[j].idSort === this.search ||
                this.general[i].positions[j].sortName === this.search ||
                this.general[i].positions[j].volume === this.search ||
                this.general[i].positions[j].cost === this.search ||
                this.general[i].positions[j].sumPosition === this.search
              )
              {
                searchCollection.push(this.general[i]);
                break;
              }
            }


          }

          this.general = searchCollection;

        },

        collectionPeriod(){
          const collection = [];

          let start = new Date(this.startDate);
          let end = new Date(this.endDate).getTime() + 24*60*60*1000;

          for (let i=0; i<this.general.length; i++)
          {

            if (this.startDate === null) {
              if (new Date(this.general[i].date) <= end) {
                collection.push(this.general[i]);
              }
            }else{
              if (this.endDate === null){
                if (new Date(this.general[i].date) >= start) {
                  collection.push(this.general[i]);
                }
              } else {
                if (new Date(this.general[i].date) >= start & new Date(this.general[i].date) <= end)
                {
                  collection.push(this.general[i]);
                }
              }
            }
          }
          this.general = collection;
        },

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
            .then(general => this.general = this.general.sort(function(a, b){
              return new Date(b.date) - new Date(a.date)}))
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

  .positionSales {
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

  .positionSupplys {
    border: darkgray solid 0.5px;
    padding: 5px;
    border-radius: 15px;
    background-color: #81F79F;
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
