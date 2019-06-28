<template>
    <div class="container">

        <div class="row justify-content-center align-items-center position">

          <div class="col-sm-3 mt-1">Сорт пива</div>

          <div class="col-sm-2 m-1">Выбрать объем</div>

          <div class="col-sm-2 m-1">Цена</div>

          <div class="col-sm-2 m-1">Количество</div>

          <div class="col-sm-2 m-1">Сумма</div>

          <div>Del</div>

        </div>

        <div class="row positionOrder">

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
                   ><span>шт.</span>
          </div>

          <div class="col-sm-2 m-1" >
            <strong>{{sumPosition}}грн.</strong>
          </div>
        <button class="btn btn-sm">-</button>
      </div>

        <div class="row positionOrders" v-for="(order, count) in beerOrder">

          <div class="col-sm-3 mt-1">
            <span id="sortInOrder">{{order.beerSort}}</span>
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
          <button id="deletPositionFromOrder" class="btn btn-success btn-sm bat" @click="deletePosition(count)">-</button>

        </div>

      <div class="row">
        <div class="col-sm-10" style="text-align: right">
          <strong>Итого:</strong>
        </div>
        <div class="col-sm-2" style="text-align: left">
          <strong>{{sum}}грн.</strong>
        </div>
      </div>

      <hr>
      <div id="total">
        <button id="addPosition" class="btn btn-info" @click="addPosition">Добавить</button>
        <button id="checkout" class="btn btn-warning" @click="checkout">Оформить</button>
        <button id="closeOrder" class="btn btn-danger" @click="closeOrder">Закрыть</button>
      </div>

    </div>
</template>

<script>
    export default {

      // props:[user],

      data() {
        return {
          resource: null,
          resourceOrders: null,

          beerOrder: [],//массив заказаных позиций пива
            beerSort: '',//выбранный сорт пива в массиве beerOrder
            idSort: null,// id выбраного сорта
              orderPosition:[],//массив выбранных позиций заказанного сорта, как поле объекта beerSort
                volume: '',//объём бутылки выбраного сорта пива
                cost: 0,//Стоимость выбранной бутылки пива
                quantity: 0,//Количество заказых бутылок пива выбраного сорта
                sumPosition: 0,//Сумма заказаных бутылок одного сорта и одного объема
          sum: 0,//Сумма всего заказа
          date: null,//дата заказа и время

          quantityPosition: 1,

          sortSelected: {},
          volumeSelected: {},
        }
      },

      watch: {
        quantity(){
          this.sumPosition = this.volumeSelected.cost * this.quantity;
        },

      },

      methods: {

        addPosition() {
          const orderPosition = {
            idSort: this.sortSelected.id,
            beerSort: this.sortSelected.sortName,
            volume: this.volumeSelected.volume,
            cost: this.volumeSelected.cost,
            quantity: this.quantity,
            sumPosition: this.sumPosition
          }
          this.beerOrder.push(orderPosition);

          this.idSort = null;
          this.beerSort = '';
          this.volume = '';
          this.cost = 0;
          this.quantity = 0;
          this.sumPosition = 0;

          this.sum = 0;

          for (var i=0; i<this.beerOrder.length; i++)
          {
            this.sum = this.sum + this.beerOrder[i].sumPosition;
          }

        },

        deletePosition(count) {
          this.beerOrder.splice(count, 1);
          this.sum = 0;
          for (var i=0; i<this.beerOrder.length; i++)
          {
            this.sum = this.sum + this.beerOrder[i].sumPosition;
          }

        },

        checkout(){
          const order = {
            beerOrder: this.beerOrder,
            sum: this.sum,
            date: Date(),
            worker: null//this.user
          }

          this.resourceOrders.save({}, order);
          // this.$http.post('http://localhost:3000/orders', order)
          //   .then(response => {return response.json()}).then()

          this.beerOrder = [];
          this.sum = 0;
        },

        closeOrder() {
          this.beerOrder = [];
          this.sum = 0;
        }

        },

      created() {
        this.resourceOrders = this.$resource('orders')
        this.resource = this.$resource('beers'),
          this.resource.get().then(responce => responce.json())
            .then(beers => this.beers = beers);


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

</style>
