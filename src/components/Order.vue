<template>
    <div class="container">

      <div style="border: gray solid 1px">
        <div class="row ">

          <div class="col-sm-3 mt-1">Сорт пива</div>

          <div class="col-sm-2 m-1">Выбрать объем</div>

          <div class="col-sm-2 m-1">Цена</div>

          <div class="col-sm-2 m-1">Количество</div>

          <div class="col-sm-2 m-1">Сумма</div>

        </div>




      </div>

      <div id="position" style="border: gray solid 1px" v-for="item in quantityPosition">
        <div class="row ">

          <div class="col-sm-3 mt-1">
              <select id="sort" v-model="sortSelected" >
                <option disabled value="">Выберите сорт</option>
                <option
                  v-for="sort in beers"
                  v-bind:key="sort.id"

                >
                  {{sort.sortName}}
                </option>
              </select>

          </div>

          <div class="col-sm-2 m-1">--
<!--            <select id="vol" placeholder="Выбрать Объем">-->
<!--              <option disabled value="">Выбрать объем</option>-->
<!--              <option v-for="vol in beerSorts[indexBeer].price">{{vol.volume}}</option>-->
<!--            </select>-->
          </div>

          <div class="col-sm-2 m-1">
            <span> {{100}} грн.</span>
          </div>

          <div class="col-sm-2 m-1">
            <input id="quantity" style="width: 50px; height: 20px" type="number" v-model="quantity">шт.
          </div>

          <div class="col-sm-2 m-1">
            <strong>{{100}} грн.</strong>
          </div>
        <button id="deletPosition" class="btn btn-success btn-sm" @click="quantityPosition--">-</button>


      </div>




    </div>

      <hr>
      <div id="total">
<!--        <button id="addPosition" class="btn btn-info" @click="addPositionToOrder">Добавить</button>-->
        <button id="addPosition" class="btn btn-info" @click="quantityPosition++">Добавить</button>
        <button id="checkout" class="btn btn-warning" @click="checkout">Оформить</button>
        <button id="closeOrder" class="btn btn-danger" @click="closeOrder">Закрыть</button>

        <!--              <strong>{{sum()}}</strong>-->
      </div>

    </div>
</template>

<script>
    export default {
      data() {
        return {
          quantityPosition: 1,

          sortSelected: '',
          volumeSelected: null,
          indexBeer: null,
          indexPrice: null,
          quantity: 0,
          sum: 0,
          beers:[
            // {
            //   sortName: 'Black Eyed King',
            //   origin: 'Aberdeenshire, Scotland',
            //   alcohol: '12.7%',
            //   price: [
            //     {volume: '0.25 L', cost: 50},
            //     {volume: '0.33 L', cost: 75},
            //     {volume: '0.5 L', cost: 100}
            //   ]
            // },
            //
            // {
            //   sortName: 'Breakside IPA',
            //   origin: 'Portland, Oregon',
            //   alcohol: '6.4%',
            //   price: [
            //     {volume: '0.25 L', cost: 50},
            //     {volume: '0.33 L', cost: 75},
            //     {volume: '0.5 L', cost: 100}
            //   ]
            // },
            //
            // {
            //   sortName: 'Lambo Door',
            //   origin: 'Brooklyn',
            //   alcohol: '8%',
            //   price: [
            //     {volume: '0.25 L', cost: 50},
            //     {volume: '0.33 L', cost: 75},
            //     {volume: '0.5 L', cost: 100}
            //   ]
            // },
          ]
        }
      },

      watch: {

      },

      methods: {

        addPositionToOrder() {},

        checkout(){},

        closeOrder() {}

        },

      created() {
        this.resource = this.$resource('beers'),
          this.resource.get().then(responce => responce.json())
            .then(beers => this.beers = beers)
      },
    }
</script>

<style scoped>

</style>
