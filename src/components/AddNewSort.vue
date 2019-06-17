<template>
  <div class="container">

    <button class="btn btn-primary" @click="addToDB">Добавить новый сорт в базу</button>

    <div class="form-group" style="border: solid darkgray 0.5px">
      <div class="row">
        <div class="col-3">
          <label for="sortName">Сорт пива</label>
        </div>
        <div class="col-5">
          <input id="sortName" type="text" class="form-control" v-model.trim="sortName">
        </div>
      </div>
    </div>

    <div class="form-group" style="border: solid darkgray 0.5px">
      <div class="row">
        <div class="col-3">
          <label for="origin">Происхождение</label>
        </div>
        <div class="col-5">
          <input id="origin" type="text" class="form-control" v-model.trim="origin">
        </div>
      </div>
    </div>

    <div class="form-group" style="border: solid darkgray 0.5px">
      <div class="row">
        <div class="col-3">
          <label for="alcohol">Количество алкоголя</label>
        </div>
        <div class="col-5">
          <input id="alcohol" type="text" class="form-control" v-model.trim="alcohol">
        </div>
      </div>
    </div>

    <div style="border: solid darkgray 0.5px" v-for="pr in price">
      <div class="form-group">
        <div class="row">
          <div class="col-3">
            <label for="volumeDB">Объем бутылки</label>
          </div>
          <div class="col-5" id="volumeDB" type="text">
            {{pr.volume}} л.
          </div>
        </div>
        <div class="row">
        <div class="col-3">
          <label for="costDB">Стоимость бутылки</label>
        </div>
        <div id="costDB" class="col-5" type="text">
          {{pr.cost}} грн.
        </div>
      </div>
        <div class="row">
        <div class="col-3">
          <label for="quantityDB">Количество</label>
        </div>
        <div id="quantityDB" class="col-5" type="text">
          {{pr.quantity}} шт.
        </div>
      </div>
      </div>
    </div>

    <div style="border: solid darkgray 0.5px">
      <div class="form-group">
        <div class="row">
          <div class="col-3">
            <label for="volume">Объем бутылки</label>
          </div>
          <div class="col-5">
            <input id="volume" type="text" class="form-control" v-model.number="volume">
          </div>
        </div>

        <div class="row">
          <div class="col-3">
            <label for="cost">Стоимость бутылки</label>
          </div>
          <div class="col-5">
            <input id="cost" type="text" class="form-control" v-model.number="cost">
          </div>
          <div class="col-3">
            <button class="btn btn-success" @click="addPricePosition">Добавить еденицу товара</button>
          </div>
        </div>

        <div class="row">
          <div class="col-3">
            <label for="quantity">Количество</label>
          </div>
          <div class="col-5">
            <input id="quantity" type="text" disabled class="form-control" v-model.number="quantity">
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "AddNewSort",

      data(){
          return{
            resource: null,

            pricePosition: 1,
            sortName: '',
            origin: '',
            alcohol: '',
            volume: null,
            cost: null,
            price: [],
            quantity: 0
            // pricePositions: {
            //   volume: null,
            //   cost: null
            // }

          }
      },

      methods:{
          addPricePosition(){
            const pricePositions = {
            volume: this.volume,
            cost: this.cost,
              quantity: this.quantity
            }
            this.price.push(pricePositions),

              this.volume = null,
              this.cost = null
          },

        addToDB(){
            const beer = {
              sortName: this.sortName,
              origin: this.origin,
              alcohol: this.alcohol,
              price: this.price,
          }
          this.resource.save({}, beer)

            this.sortName = null,
            this.origin = null,
            this.alcohol = null,
            this.price = null
        }
      },

      created() {
          this.resource = this.$resource('beers')
      }
    }
</script>

<style scoped>

</style>
