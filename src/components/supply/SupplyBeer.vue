<template>
  <div class="container">

    <div id="head" class="row position">

      <div class="col-sm-0.5">
        <button class="bat btn-sm" disabled>+</button>
      </div>

      <div class="col-sm-3">
        <span>Сорт пива</span>
      </div>

      <div class="col-sm-8">
        <div class="row">

          <div class="col-sm-3">
            <span>Объём</span>
          </div>

          <div class="col-sm-3">
            <span>Цена</span>
          </div>

          <div class="col-sm-3">
            <span>Количество</span>
          </div>

          <div class="col-sm-3">
            <span>Сумма</span>
          </div>
        </div>
      </div>

    </div>

    <div id="newPosition" class="row positionSupply">

      <div class="col-sm-0.5">
        <button class="bat btn-sm btn-success" @click="addNewPosition">+</button>
      </div>

      <div class="col-sm-3">
        <select class="sel" v-model="supplySort">
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

          <div class="col-sm-3">
            <select class="sel" v-model="supplyVolume">
              <option
                v-for="sVol in supplySort.price"
                v-bind:value="sVol"
                >{{sVol.volume}}</option>
            </select> л.
          </div>

          <div class="col-sm-3">
            <input v-model.number="supplyVolume.cost" placeholder="Цена"> грн.
<!--            <input v-model.number="cost" placeholder="Цена">-->
          </div>

          <div class="col-sm-3">
<!--            <input v-model.number="supplyVolume.quantity" placeholder="Количество">-->
            <input v-model.number="quantity" placeholder="Количество"> шт.
          </div>

          <div class="col-sm-3">
            <strong>{{sumPosition}} грн.</strong>
          </div>
        </div>
      </div>

    </div>

    <div id="supply">


      <div id="supplyPosition" class="row positionSupplys" v-for="(sup, count) in positions">

        <div class="col-sm-0.5">
          <button class="bat btn-sm btn-danger" @click="deletePosition(count)">-</button>
        </div>

        <div class="col-sm-3">
          <span>{{sup.sortName}}</span>
        </div>

        <div class="col-sm-8">
          <div class="row">

            <div class="col-sm-3">
<!--              <span>{{sup.price.volume}} л.</span>-->
              <span>{{sup.volume}} л.</span>
            </div>

            <div class="col-sm-3">
<!--              <span>{{sup.price.cost}} грн.</span>-->
              <span>{{sup.cost}} грн.</span>
            </div>

            <div class="col-sm-3">
<!--              <span>{{sup.price.quantity}} шт.</span>-->
              <span>{{sup.quantity}} шт.</span>
            </div>

            <div class="col-sm-3">
<!--              <strong>{{sup.price.sumPosition}} грн.</strong>-->
              <strong>{{sup.sumPosition}} грн.</strong>
            </div>

          </div>
        </div>

      </div>

      <div class="row">
        <div id="provider" class="col-sm-6"
             style="text-align: left">
          <select class="select" v-model="provider">
            <option
              v-for="prov in providers"
              v-bind:value="prov"
            >{{prov.name}}</option>
          </select>
        </div>
        <div class="col-2" style="text-align: right; color: darkgray">
          {{worker.name}}
        </div>
        <div class="col-2" style="text-align: right">
          <strong>Итого:</strong>
        </div>
        <div class="col-2" style="text-align: left">
          <strong>{{sum}} грн.</strong>
        </div>

      </div>

    </div>

    <div class="row">
      <hr>
      <button class="bat btn-info" style="margin: 10px" @click="addSupplyToDB">Внести в БД</button>
    </div>
<!--{{worker.name}}-->
  </div>
</template>

<script>
    export default {

      data() {
        return{
          resource: null,
          resourceProvider: null,

          beers: [],
          supplies: [],
          providers:[],

          provider: {},

          supplySort: {},//Позиция сорта пива и номинал бутылки текущей поставки
          supplyPrice: {},//объект (объём-цена-количество) внутри позици поставки
          supplyVolume: {},
          sumPosition: 0,
          quantity: 0,
          idSort: 0,
          sum: 0,

          worker: {},
          beerEdit: {},
          supplyToDB:{},

          positions: [],//текущая поставка, состоящая из массива объектов supplySort
        }
      },

      watch: {
        quantity() {
          this.sumPosition = this.supplyVolume.cost * this.quantity
        },
      },

      methods: {

        addNewPosition(){

          const supplyPosition = {
            idSort: this.supplySort.id,
            sortName: this.supplySort.sortName,
            // price: this.supplyPrice,
            volume: this.supplyVolume.volume,
            cost: this.supplyVolume.cost,
            quantity: this.quantity,
            sumPosition: this.sumPosition
          }

          this.positions.push(supplyPosition);

          this.sum = 0;

          for (let i=0; i<this.positions.length; i++)
          {
            this.sum = this.sum + this.positions[i].sumPosition;
          }

          this.supplyVolume = {};
          this.supplySort = {};
          this.cost = 0;
          this.quantity = 0;
          this.sumPosition = 0;
        },

        deletePosition(count){
          this.positions.splice(count, 1);
        },

        addSupplyToDB(){

            const supplyToDB = {
              positions: this.positions,
              sale: false,
              date: Date(),
              worker: null,
              provider: this.provider,
              sum: this.sum,
              worker: this.worker
            };
          // try {
            // this.$http.post('http://localhost:3000/supplies', supplyToDB)
            //   .then(response => {return response.json()}).then(supplies => this.supplies = supplies)
            this.resource = this.$resource('supplies');
            this.resource.save({}, supplyToDB);
            this.supplyToDB = supplyToDB;

            this.changeBeersDB();
          // }catch (e) {
          //   alert('ошибка вставки в базу');
          // }

          // this.supplyToDB = [];
          this.positions = [];
        },

        changeBeersDB(){

          for ( let i=0; i<this.supplyToDB.positions.length; i++){

            let id = this.supplyToDB.positions[i].idSort;
            this.$http.get('http://localhost:3000/beers/' + id)
              .then(response => {return response.json()})
              .then(beer => this.beerEdit = beer)
              .then(() => {
                for ( let j=0; j<this.beerEdit.price.length; j++){
                  if (this.beerEdit.price[j].volume === this.supplyToDB.positions[i].volume){
                    this.beerEdit.price[j].quantity += this.supplyToDB.positions[i].quantity;
                    this.$http.put('http://localhost:3000/beers/' + id, this.beerEdit)
                      .then(responce => responce.json())
                      .then(() => this.beerEdit = {});
                    break;
                  }
                }
              });
          }

        }
      },

      created() {
        // this.resource = this.$resource('beers'),
        this.resource = this.$resource('supplies'),
        this.resourceProvider = this.$resource('providers'),
          // this.resource.get().then(responce => responce.json())
          //   .then(beers => this.beers = beers);

          this.resource.get().then(responce => responce.json())
            .then(supplies => this.supplies = supplies)

        this.resourceProvider.get().then(responce => responce.json())
            .then(providers => this.providers = providers)

        // this.$http.get('http://localhost:3000/supplies')
        //   .then(response => {return response.json()}).then(supplies => this.supplies = supplies)

        this.$http.get('http://localhost:3000/beers')
          .then(response => {return response.json()}).then(beers => this.beers = beers)
          .then(worker => this.worker = this.$store.getters.getWorker)
      },

    }
</script>

<style scoped>

.position {
  border: darkgray solid 0.5px;
  padding: 5px;
  border-radius: 15px;
  background-color: #FADFAD;
}

.positionSupply {
  border: darkgray solid 0.5px;
  padding: 5px;
  border-radius: 15px;
  background-color: #FFFF99;
}

.positionSupplys {
  border: darkgray solid 0.5px;
  padding: 5px;
  border-radius: 15px;
  background-color: #F2DDC6;
}

.col-sm-0.5 {
  border: darkgray solid 0.5px;

  border-radius: 15px;
}

  input {
    width: 75%;
    border-radius: 10px;
    padding-left: 20px;
  }

  .sel {
    width: 85%;
    border-radius: 10px;
    padding: 2%;
  }

  .select {
    width: 85%;
    border-radius: 10px;
    padding: 2px;
    margin: 3px;
  }

  .bat{
    border-radius: 15px;
  }


</style>
