<template>
    <div class="container">

      <div class="row mb-3">
        <div class="col-11">
          <input
            id="search"
            type="search"
            v-model="search"
            placeholder="ПОИСК">
<!--          <input-->
<!--            id="search"-->
<!--            type="search"-->
<!--            v-model="search"-->
<!--            @change="scan"-->
<!--            placeholder="ПОИСК">-->
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

        </div>
      </div>

      <div class="row positionSupply" v-for="supply in supplies">
        <div class="col-sm-1">
          <span>{{supply.id}}</span><br>
          <button class="btn btn-sm btn-danger bat" @click="deleteSupply(supply)">Del</button>
        </div>
        <div class="col-11">
          <div class="row position" v-for="item in supply.positions">
            <div class="col-1">
              <span>{{item.idSort}}</span>
            </div>

            <div class="col-3">
              <span>{{item.sortName}}</span>
            </div>

            <div class="col-2">
              <span>{{item.volume}} л.</span>
            </div>

            <div class="col-2">
              <span>{{item.cost}} грн.</span>
            </div>

            <div class="col-2">
              <span>{{item.quantity}} шт.</span>
            </div>

            <div class="col-2">
              <span>{{item.sumPosition}} грн.</span>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-sm-3" style="text-align: left">
              <span>{{supply.worker.name}}</span>
            </div>
            <div class="col-sm-7" style="text-align: left">
              <span>{{supply.date}}</span>
            </div>
            <div class="col-sm-2">
              <span class="position">{{supply.sum}} грн.</span>
            </div>
          </div>
          <div class="row">
            <span>{{supply.provider.name}} / {{supply.provider.phones}} / {{supply.provider.emails}}</span>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        // name: "supplyReport"
      data(){
        return{
          resource: null,

          // beers: [],
          supplies: [],

          search: '',
          startDate: null,
          endDate: null
        }
      },

      methods:{

        resetSearch(){
          this.resource.get().then(responce => responce.json())
            .then(supplies => this.supplies = supplies);
          this.search = '';
          this.startDate = null;
          this.endDate = null;
        },

        scan(){
          const searchThing = [];

          try {
            for (let i=0; i<this.supplies.length; i++){

              if (this.supplies[i].provider.name.toLowerCase() === this.search.toLowerCase() ||
                this.supplies[i].sum.toString() === this.search ||
                this.supplies[i].worker.name.toLowerCase() === this.search.toLowerCase()) {
                searchThing.push(this.supplies[i]);
                continue;
              }///Работает

              const pos = this.supplies[i].positions;

              for (let j=0; j<pos.length; j++){//Что-то с этим циклом

                if (this.supplies[i].positions[j].sortName.toLowerCase() === this.search.toLowerCase() ||
                  this.supplies[i].positions[j].volume.toString().toLowerCase() === this.search.toLowerCase() ||
                  this.supplies[i].positions[j].cost.toString().toLowerCase() === this.search.toLowerCase()) {
                  searchThing.push(this.supplies[i]);
                  continue;
                }
              }

            }
            this.supplies = searchThing;
          }catch (e) {
            alert('Ой! Что-то пошло не так.')
          }
        },

        collectionPeriod(){
          const collection = [];

          let start = new Date(this.startDate);
          let end = new Date(this.endDate).getTime() + 24*60*60*1000;

          alert(start + "-" + end)

          for (let i=0; i<this.supplies.length; i++)
          {

            if (this.startDate === null) {
              if (new Date(this.supplies[i].date) <= end) {
                collection.push(this.supplies[i]);
              }
            }else{
              if (this.endDate === null){
                if (new Date(this.supplies[i].date) >= start) {
                  collection.push(this.supplies[i]);
                }
              } else {
                if (new Date(this.supplies[i].date) >= start & new Date(this.supplies[i].date) <= end)
                {
                  collection.push(this.supplies[i]);
                }
              }
            }
          }
          this.supplies = collection;
        },

        deleteSupply(supply){
          this.$http.delete('http://localhost:3000/supplies/' + supply.id)
            .then(response => {return response.json()});
        }

      },



      created() {

        this.resource = this.$resource('supplies');

          this.resource.get().then(responce => responce.json())
            .then(supplies => this.supplies = supplies)
            .then(sup => this.supplies = this.supplies.sort(function(a, b){
              return new Date(b.date) - new Date(a.date)}));

        // this.$http.get('http://localhost:3000/supplies')
        //   .then(response => {return response.json()}).then(supplies => this.supplies = supplies)
      },
    }
</script>

<style scoped>
  .position {
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
    background-color: #81F79F;
    color: black;
  }
</style>
