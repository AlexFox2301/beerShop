<template>
  <div class="container">

    <div class="row position">

      <div class="col-sm-0.5">
        <button class="bat btn-sm" disabled>+</button>
      </div>

      <div class="col-sm-3">
        <span>Сорт пива</span>
      </div>

      <div class="col-sm-8">
        <div class="row">

          <div class="col-sm-4">
            <span>Объём</span>
          </div>

          <div class="col-sm-4">
            <span>Цена</span>
          </div>

          <div class="col-sm-4">
            <span>Количество</span>
          </div>
        </div>
      </div>

    </div>

    <div class="row position">

      <div class="col-sm-0.5">
        <button class="bat btn-sm btn-success" @click="addNewPosition">+</button>
      </div>

      <div class="col-sm-3">
        <select v-model="supplySort">
          <option
            v-for="beerS in beers"
            v-bind:value="beerS"
          >
            {{beerS.sortName}}
          </option>
        </select>
      </div>

      <div class="col-sm-8">
        <div class="row">

          <div class="col-sm-4">
            <select v-model="supplyVolume">
              <option
                v-for="sVol in supplySort.price"
                v-bind:value="sVol"
                >{{sVol.volume}}</option>
            </select>
          </div>

          <div class="col-sm-4">
            <input v-model.number="supplyVolume.cost" placeholder="Цена">
          </div>

          <div class="col-sm-4">
            <input v-model.number="supplyVolume.quantity" placeholder="Количество">
          </div>

<!--          <div class="col-sm-0.5">-->
<!--            <button class="btn btn-sm btn-primary" @click="addVol">add</button>-->
<!--          </div>-->
        </div>
      </div>

    </div>

    <div class="row position" v-for="(sup, count) in supply">

      <div class="col-sm-0.5">
        <button class="bat btn-sm btn-danger" @click="deletePosition(count)">-</button>
      </div>

      <div class="col-sm-3">
        <span>{{sup.sortName}}</span>
      </div>

      <div class="col-sm-8">
        <div class="row">

          <div class="col-sm-4">
            <span>{{sup.price.volume}}</span>
          </div>

          <div class="col-sm-4">
            <span>{{sup.price.cost}}</span>
          </div>

          <div class="col-sm-4">
            <span>{{sup.price.quantity}}</span>
          </div>

          <!--          <div class="col-sm-0.5">-->
          <!--            <button class="btn btn-sm btn-primary" @click="addVol">add</button>-->
          <!--          </div>-->
        </div>
      </div>

    </div>

    <div class="row">
      <hr>
      <button class="bat btn-info" style="margin: 10px" @click="addSupplyToDB">Внести в БД</button>
    </div>
    <hr>
    {{supply}} / {{supplys}}
  </div>
</template>

<script>
    export default {
        // name: "SupplyBeer"

      data() {
        return{
          beers: [],

          // supplyPosition:
          supplySort: {},//Позиция сорта пива и номинал бутылки текущей поставки
          supplyPrice: {},//объект (объём-цена-количество) внутри позици поставки
          supplyVolume: {},
          // volume: '',
          // cost: 0,
          // quantity: 0,
          idSort: 0,

          supply: [],//текущая поставка, состоящая из массива объектов supplySort
          supplys: []


        }
      },

      methods: {

        addNewPosition(){

          this.supplyPrice = {
            volume: this.supplyVolume.volume,
            cost: this.supplyVolume.cost,
            quantity: this.supplyVolume.quantity
          }

          const supplyPosition = {
            sortName: this.supplySort.sortName,
            price: this.supplyPrice,
          }

          this.supply.push(supplyPosition);

          this.supplyPrice = {};
          this.supplyVolume = {};
          this.supplySort = {};
        },

        deletePosition(count){
          this.supply.splice(count, 1);
        },

        addSupplyToDB(){
          this.supplyToDB = {
            supply: this.supply,
            dateSupply: Date(),
            worker: this.worker
          }

          this.$http.post('http://localhost:3000/supplys', this.supply)
            .then(response => {return response.json()}).then()

          this.supply = []
        },
      },

      created() {
        this.resource = this.$resource('supplys'),
          this.resource.get().then(responce => responce.json())
            .then(supplys => this.supplys = supplys)

        this.$http.get('http://localhost:3000/beers')
          .then(response => {return response.json()}).then(beers => this.beers = beers)
      },

    }
</script>

<style scoped>

.position {
  border: darkgray solid 0.5px;
  padding: 5px;
  border-radius: 15px;
}

.col-sm-0.5 {
  border: darkgray solid 0.5px;

  border-radius: 15px;
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
