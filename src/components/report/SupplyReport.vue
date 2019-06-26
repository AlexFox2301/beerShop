<template>
    <div class="container">

      <div class="row mb-3">
        <input
          id="search"
          type="search"
          v-model="search"
          @change="scan"
          placeholder="ПОИСК">
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
              <span>{{supply.dateSupply}}</span>
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

        scan(){},

        collectionPeriod(){}

      },



      created() {

        this.resource = this.$resource('supplies'),

          this.resource.get().then(responce => responce.json())
            .then(supplies => this.supplies = supplies)

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
