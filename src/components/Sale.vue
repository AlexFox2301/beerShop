<template>
    <div class="container">
      <h1>ПРОДАНО</h1>

<!--      <label for="sort">Сорт пива</label>-->
      <select id="sort" content="Сорт пива">
        <option
          v-for="sort in beerSorts"
          v-model="sortSelected=sort"
          >
          {{sort.sortName}}
        </option>
      </select>

     <i> {{sortSelected.alcohol}} </i>

<!--      <label for="volum">Объем</label>-->
      <select id="volume">
        <option
        v-for="pr in sortSelected.price"
        v-model="volumeSelected = pr.volume">
          {{pr.volume}}
        </option>
      </select>

      <i> {{sortSelected.price.}} </i>

    </div>
</template>

<script>
    export default {
        name: "Sale",

      data() {
          return {
            sortSelected: {},
            volumeSelected: 0,
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
                  {volume: '0.5 L', cost: 100}
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
      }
    }
</script>

<style scoped>

</style>
