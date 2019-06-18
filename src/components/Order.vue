<template>
    <div class="container">

      <div style="border: blue solid 1px">
        <div class="row ">

          <div class="col-sm-3 mt-1">Сорт пива</div>

          <div class="col-sm-2 m-1">Выбрать объем</div>

          <div class="col-sm-2 m-1">Цена</div>

          <div class="col-sm-2 m-1">Количество</div>

          <div class="col-sm-2 m-1">Сумма</div>
          <!--        <button id="delletPosition" @click="deletePosition"></button>-->


        </div>




      </div>

      <div id="position" style="border: blue solid 1px" v-for="item in quantityPosition">
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
            <span style="border: black solid 1px "> {{100}} грн.</span>
          </div>

          <div class="col-sm-2 m-1">
            <input id="quantity" style="width: 50px; height: 20px" type="number" v-model="quantity">шт.
          </div>

          <div class="col-sm-2 m-1">
            <b style="border: black solid 2px ">{{100}} грн.</b>
          </div>
<!--        <button id="delletPosition" @click="deletePosition"></button>-->


      </div>




    </div>

      <hr>
      <div id="total">
        <button id="addPosition" @click="quantityPosition++">Добавить</button>
        <button id="delPosition" @click="quantityPosition--">Удалить</button>

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
        // beerSort: function () {
        //   var sortNames
        //   for (var i=0; i<this.beerSorts.length; ++i){
        //     sortNames[i] = this.beerSorts[i].name
        //   }
        //   console.log(s)
        //   return this.indexBeer = sortNames.indexOf(s)
        // }


        //
        // indexVolumeFind(mas, value) {
        //   for (var i=0; i<mas.length; i++){
        //     if(mas[i] === value) {return i;}
        //   }
        // },

        // sumbottles () {
        //   return  this.sum = this.quantity * this.beerSorts[this.indexBeer].price[indexPrice].cost
        // }
      },

      methods: {
        // indexBeerFind(s) {

          //   if(beerSorts[i].name === sortSelected)
          //   {return indexBeer = i;}
          // }
          // return indexBeer = 'Не найдено'
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
