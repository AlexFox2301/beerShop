<template>
  <div>

    <div class="row">

    <div class="col-1>">ID</div>
    <div class="col-3 m-1>">Сорт Пива</div>
    <div class="col-2 m-1>">Происхождение</div>
    <div class="col-1 m-1>">Крепость</div>
    <div class="col-4 m-1">
      <div class="row">
        <div class="col-3 m-1">Объем</div>
        <div class="col-4 m-1">Стоимость</div>
        <div class="col-4 m-1">Количество</div>
      </div>
    </div>


  </div>

    <div class="row" v-for="beer in beers" :key="beer.id" v-model="beers">

      <div class="col-1>">{{beer.id}}</div>
      <div class="col-3 m-1>">{{beer.sortName}}</div>
      <div class="col-2 m-1>">{{beer.origin}}</div>
      <div class="col-1 m-1>">{{beer.alcohol}}</div>
      <div class="col-4 m-1">
        <div class="row" v-for="pr in beer.price">
          <div class="col-3 m-1">{{pr.volume}} L</div>
          <div class="col-4 m-1">{{pr.cost}} грн.</div>
          <div class="col-4 m-1">{{pr.quantity}} шт.</div>
        </div>
      </div>
      <div class="col-1">
        <button class="btn btn-success btn-sm" @click="deletePosition(beer)">Удалить</button>
        {{beer.id}}
      </div>

    </div>

  </div>
</template>

<script>
    export default {
        name: "ListBeers",

      data(){
          return{
            resource: null,
            beers: [],
          }
      },

      watch:{
        beers: function () {
          // this.resource.get().then(responce => responce.json())
          //   .then(beers => this.beers = beers)
        }
      },

      methods:{

          deletePosition(beer){
            this.resource.remove(beer.id).then(responce => responce.json())
              .then(console.log('end'))
          }
      },

      created() {
        this.resource = this.$resource('beers'),
          this.resource.get().then(responce => responce.json())
            .then(beers => this.beers = beers)
      },

    }
</script>

<style scoped>
 .row {
   border: solid darkgray 0.5px
 }
</style>
