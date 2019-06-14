<template>
    <div>
      <div id="position" style="border: blue solid 1px">
        <select id="sort" v-model="sortSelected">
          <option
            v-for="sort in beerSorts"
          >
            {{sort.sortName}}
          </option>
        </select>
        <h6>{{sortSelected}} // {{indexBeer}}</h6>

        <select id="volume" v-model="volumeSelected">
          <option
            v-for="pr in beerSorts[0].price"
          >
            {{pr.volume}}
          </option>
        </select>

<!--        <i style="border: black solid 1px "> {{beerSorts[indexBeer].price[indexPrice].cost}} </i> грн.-->

<!--        <input id="quantity" style="width: 50px; height: 20px" type="number" v-model="quantity">шт.-->

<!--        <b style="border: black solid 2px ">{{this.sumBottles}}</b>-->

<!--        <button id="delletPosition" @click="deletePosition"></button>-->
      </div>





<!--      <div id="total">-->
<!--        <button id="addPosition" @click="addPosition">Добавить</button>-->

<!--&lt;!&ndash;              <strong>{{sum()}}</strong>&ndash;&gt;-->
<!--      </div>-->
    </div>
</template>

<script>
    export default {
      data() {
        return {
          sortSelected: {},
          volumeSelected: null,
          // indexBeer: indexBeerFind(this.beerSorts, this.sortSelected),
          // indexPrice: this.indexVolumeFind(this.beerSorts[this.indexBeer].price, this.volumeSelected),
          quantity: 0,
          sum: 0,
          beerSorts:[
            {
              sortName: 'Papaya Rye',
              origin: 'Spain, Barselona',
              alcohol: '9%',
              price: [
                {volume: '0.25 L', cost: 50},
                {volume: '0.33 L', cost: 75},
                {volume: '0.5 L', cost: 100}
              ]
            },

            {
              sortName: 'Viaemilia',
              origin: 'Italia, Parma',
              alcohol: '5%',
              price: [
                {volume: '0.25 L', cost: 50},
                {volume: '0.33 L', cost: 75},
                {volume: '0.5 L', cost: 100},
                {volume: '1 L', cost: 200},
              ]
            },

            {
              sortName: 'Brio',
              origin: 'Iceland, Reykjavik',
              alcohol: '4.5%',
              price: [
                {volume: '0.25 L', cost: 50},
                {volume: '0.33 L', cost: 75},
                {volume: '0.5 L', cost: 100}
              ]
            },

            {
              sortName: 'Galaxy IPA',
              origin: 'Brooklyn',
              alcohol: '6.5%',
              price: [
                {volume: '0.25 L', cost: 50},
                {volume: '0.33 L', cost: 75},
                {volume: '0.5 L', cost: 100}
              ]
            },

            {
              sortName: 'Nøgne Ø Porter',
              origin: 'Norway, Grimstad',
              alcohol: '7%',
              price: [
                {volume: '0.25 L', cost: 50},
                {volume: '0.33 L', cost: 75},
                {volume: '0.5 L', cost: 100}
              ]
            },

            {
              sortName: 'ManBearPig',
              origin: 'Meadville, PA',
              alcohol: '14.1%',
              price: [
                {volume: '0.25 L', cost: 50},
                {volume: '0.33 L', cost: 75},
                {volume: '0.5 L', cost: 100}
              ]
            },

            {
              sortName: 'Black Eyed King Imp Vietnamese Coffee Edition',
              origin: 'Aberdeenshire, Scotland',
              alcohol: '12.7%',
              price: [
                {volume: '0.25 L', cost: 50},
                {volume: '0.33 L', cost: 75},
                {volume: '0.5 L', cost: 100}
              ]
            },

            {
              sortName: 'Breakside IPA',
              origin: 'Portland, Oregon',
              alcohol: '6.4%',
              price: [
                {volume: '0.25 L', cost: 50},
                {volume: '0.33 L', cost: 75},
                {volume: '0.5 L', cost: 100}
              ]
            },

            {
              sortName: 'Lambo Door',
              origin: 'Brooklyn',
              alcohol: '8%',
              price: [
                {volume: '0.25 L', cost: 50},
                {volume: '0.33 L', cost: 75},
                {volume: '0.5 L', cost: 100}
              ]
            },


          ]
        }
      },

      watch: {

        indexBeerFind(mas, value) {
          for (var i=0; i<mas.length; i++){
            console.log(mas[i], this.sortSelected)
            if(mas[i].name === value) {return i;}
          }
        },
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


      }
    }
</script>

<style scoped>

</style>
