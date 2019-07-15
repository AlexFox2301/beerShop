<template>
  <div class="container">

    <div id="head" class="row justify-content-center align-items-center position">

      <div class="col-sm-3 mt-1">Сорт пива</div>

      <div class="col-sm-2 m-1">Выбрать объем</div>

      <div class="col-sm-2 m-1">Цена</div>

      <div class="col-sm-2 m-1">Количество</div>

      <div class="col-sm-2 m-1">Сумма</div>

      <div>Del</div>

    </div>

    <div id="newPosition" class="row positionOrder">

      <div class="col-sm-0.5">
        <button id="addPosition" class="btn btn-success bat" @click="addPosition">+</button>
      </div>

      <div class="col-sm-3 mt-1">
        <select v-model="sortSelected" >
          <option
            v-for="sort in beers"
            v-bind:value="sort"
          >
            {{sort.sortName}}
          </option>
        </select>

      </div>

      <div class="col-sm-2 m-1">
        <select v-model="volumeSelected">
          <option
            v-for="vol in sortSelected.price"
            v-bind:value="vol"
          >{{vol.volume}}</option>
        </select>
      </div>

      <div class="col-sm-2 m-1">
        <span> {{volumeSelected.cost}}грн.</span>
      </div>

      <div class="col-sm-2 m-1">
        <input
          v-model.number="quantity"
          @input="quantitys(volumeSelected.quantity)"
        ><span>шт.</span>
        <span class="errorMsg">{{msg}}</span>
      </div>

      <div class="col-sm-2 m-1" >
        <strong>{{sumPosition}}грн.</strong>
      </div>
      <button class="btn btn-sm">-</button>
    </div>

    <div id="positions" class="row positionOrders" v-for="(order, count) in positions">

      <div class="col-sm-3 mt-1">
        <span id="sortInOrder">{{order.sortName}}</span>
      </div>

      <div class="col-sm-2 m-1">
        <span id="volumeInOrder">{{order.volume}}</span>
      </div>

      <div class="col-sm-2 m-1">
        <span>{{order.cost}}грн.</span>
      </div>

      <div class="col-sm-2 m-1">
        <span id="quantityPos">{{order.quantity}} шт.</span>
      </div>

      <div class="col-sm-2 m-1" id="sumOrderInMas">
        <strong>{{order.sumPosition}}</strong><b> грн.</b>
      </div>
      <button id="deletPositionFromOrder"
              class="btn btn-success btn-sm bat"
              @click="deletePosition(count)"
      >-</button>

    </div>

    <div class="row">
      <div id="worker" class="col-sm-6" style="text-align: left; color: darkgray">
        {{worker.name}}
      </div>
      <div class="col-sm-4" style="text-align: right">
        <strong>Итого:</strong>
      </div>
      <div class="col-sm-2" style="text-align: left">
        <strong>{{sum}}грн.</strong>
      </div>
    </div>

    <hr>
    <div id="total">
<!--      <button id="addPosition" class="btn btn-info bat" @click="addPosition">Добавить</button>-->
      <button id="checkout" class="btn btn-info bat" @click="checkout">Оформить</button>
      <button id="closeOrder" class="btn btn-danger bat" @click="closeOrder">Закрыть</button>
    </div><tr></tr>

  </div>
</template>

<script>
  export default {

    // props:[user],

    data() {
      return {
        resource: null,
        resourceOrders: null,

        positions: [],//массив заказаных позиций пива
        sortName: '',//выбранный сорт пива в массиве beerOrder
        idSort: null,// id выбраного сорта
        orderPosition:[],//массив выбранных позиций заказанного сорта, как поле объекта beerSort
        volume: '',//объём бутылки выбраного сорта пива
        cost: 0,//Стоимость выбранной бутылки пива
        quantity: 0,//Количество заказых бутылок пива выбраного сорта
        sumPosition: 0,//Сумма заказаных бутылок одного сорта и одного объема
        sum: 0,//Сумма всего заказа
        date: null,//дата заказа и время

        worker: {},

        quantityPosition: 1,
        msg: '',

        sortSelected: {},
        volumeSelected: {},

        beer: {}
      }
    },

    watch: {
      // quantity(){
      //   if (this.quantity <= )
      //   this.sumPosition = this.volumeSelected.cost * this.quantity;
      // },

    },

    methods: {

      quantitys(quant){

        if (this.quantity <= quant) {
          this.msg = '';
          this.sumPosition = this.volumeSelected.cost * this.quantity;

        }else {
          this.msg = 'На складе имеется в наличии только ' + quant + 'шт.';
          this.quantity = quant;
        }
      // checkQuantity(sort){
      //   this.$http.get('http://localhost:3000/beers/' + sort.id)
      //     .then(response =>  {return response.json()})
      //     .then(() => this.beer = beer)
      //     .then(() => {
      //       if (this.quantity <= this.beer.price.)
      //     })
      },

      addPosition() {
        const orderPosition = {
          idSort: this.sortSelected.id,
          sortName: this.sortSelected.sortName,
          volume: this.volumeSelected.volume,
          cost: this.volumeSelected.cost,
          quantity: this.quantity,
          sumPosition: this.sumPosition
        }
        this.positions.push(orderPosition);

        this.changeBeersDB(orderPosition);

        this.idSort = null;
        this.sortName = '';
        this.volume = '';
        this.cost = 0;
        this.quantity = 0;
        this.sumPosition = 0;

        this.sum = 0;

        for (let i=0; i<this.positions.length; i++)
        {
          this.sum = this.sum + this.positions[i].sumPosition;
        }

      },

      deletePosition(count) {

        this.cancelChangeBeersDB(this.positions[count]);

        this.positions.splice(count, 1);
        this.sum = 0;
        for (let i=0; i<this.positions.length; i++)
        {
          this.sum = this.sum + this.positions[i].sumPosition;
        }

      },

      checkout(){
        const order = {
          positions: this.positions,
          sale: true,
          sum: this.sum,
          date: Date(),
          worker: this.worker
        };

        this.resourceOrders.save({}, order);

        this.positions = [];
        this.sum = 0;
      },

      changeBeersDB(pos){
        this.$http.get('http://localhost:3000/beers/' + pos.idSort)
          .then(response => {return response.json()})
          .then(beer => this.beerEdit = beer)
          .then(() => {
            for ( let j=0; j<this.beerEdit.price.length; j++){
              if (this.beerEdit.price[j].volume === pos.volume){
                this.beerEdit.price[j].quantity -= pos.quantity;
                this.$http.put('http://localhost:3000/beers/' + pos.idSort, this.beerEdit)
                  .then(responce => responce.json())
                  .then(() => this.beerEdit = {});
                break;
              }
            }
          });


      },

      cancelChangeBeersDB(pos){
        this.$http.get('http://localhost:3000/beers/' + pos.idSort)
          .then(response => {return response.json()})
          .then(beer => this.beerEdit = beer)
          .then(() => {
            for ( let j=0; j<this.beerEdit.price.length; j++){
              if (this.beerEdit.price[j].volume === pos.volume){
                this.beerEdit.price[j].quantity += pos.quantity;
                this.$http.put('http://localhost:3000/beers/' + pos.idSort, this.beerEdit)
                  .then(response => response.json())
                  .then(() => this.beerEdit = {});
                break;
              }
            }
          });


      },

      closeOrder() {

        // for (let i=0; i<this.positions.length; i++) {
        //   this.cancelChangeBeersDB(this.positions[i]);
        // }

        this.positions = [];
        this.sum = 0;
      }

    },

    created() {
      this.resourceOrders = this.$resource('orders')
      this.resource = this.$resource('beers'),
        this.resource.get().then(responce => responce.json())
          .then(beers => this.beers = beers)
          .then(() => this.worker = this.$store.getters.getWorker);


    },
  }
</script>

<style scoped>

  .position {
    margin-top: 15px;
    border: darkgray solid 0.5px;
    padding: 5px;
    border-radius: 15px;
    background-color: 	#FBCEB1;
  }

  .positionOrder {
    border: darkgray solid 0.5px;
    padding: 5px;
    border-radius: 15px;
    background-color: #FAE7B5;
  }

  .positionOrders {
    border: darkgray solid 0.5px;
    padding: 5px;
    border-radius: 15px;
    background-color: #FFFF66;
  }

  .col-1 {
    border-right: solid grey 1px;
  }
  .col-2 {
    border-right: solid grey 1px;
  }
  .col-3 {
    border-right: solid grey 1px;
  }
  .col-4 {
    border-right: solid grey 1px;
  }

  .pr {
    border-bottom: solid grey 1px;
  }

  input {
    width: 80%;
    border-radius: 10px;
    padding-left: 10px;
  }

  select {
    width: 99%;
    border-radius: 10px;
    padding: 2%;

  }

  .bat{
    border-radius: 15px;
  }
  .errorMsg {
    color: red;
    font-size: 14px
  }

</style>
