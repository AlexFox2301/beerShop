<template>
  <div class="container">
    <div class="row">

      <div class="col-sm-1">
        <button class="btn btn-sm btn-succtss" @click="addNewPosition">+</button>
      </div>

      <div class="col-sm-2">
        <select v-model="sortSelected">
          <option
            v-for="beer in beers"
            v-bind:value="sort"
          >
            {{beer.sortName}}
          </option>
        </select>
      </div>

      <div class="col-sm-9">
        <div class="row">

          <div class="col-sm-3">
            <select v-model="volumeSelected">
              <option
                v-for="vol in sortSelected.price"
                v-bind:value="vol"
                >{{vol.volume}}</option>
            </select>
          </div>

          <div class="col-sm-3">
            <input type="number" v-model="vol.cost" placeholder="Цена">
          </div>

          <div class="col-sm-3">
            <input type="number" v-model="vol.quantity" placeholder="Количество">
          </div>

          <div class="col-sm-2">
            <button class="btn btn-sm btn-primary" @click="addVol">add</button>
          </div>
        </div>
      </div>

    </div>

    <div class="row">
      <button class="btn btn-info" @click="addSupplyToDB">Внести в БД</button>
    </div>
  </div>
</template>

<script>
    export default {
        // name: "SupplyBeer"

      data() {
        return{
          beers: [],

          sortSelected: {},
          price: [],
          volume: '',
          cost: 0,
          quantity: 0,
          idSort: 0

        }
      },

      methods: {

        addNewPosition(){},

        addVol(){},

        addSupplyToDB(){},
      }

    }
</script>

<style scoped>

</style>
