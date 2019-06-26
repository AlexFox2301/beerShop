<template>
  <div>

    <div class="row position">

    <div class="col-1">ID</div>
    <div class="col-3">Сорт Пива</div>
    <div class="col-2">Происхождение</div>
    <div class="col-1">Крепость</div>
    <div class="col-4">
      <div class="row">
        <div class="col-4">Объем</div>
        <div class="col-4">Стоимость</div>
        <div class="col-4">Количество</div>
      </div>
    </div>


  </div>

    <div class="row positionBeer" v-for="beer in beers" :key="beer.id" v-model="beers">

      <div class="col-1">{{beer.id}}</div>
      <div class="col-3">{{beer.sortName}}</div>
      <div class="col-2">{{beer.origin}}</div>
      <div class="col-1">{{beer.alcohol}}</div>
      <div class="col-4">
        <div class="row" v-for="pr in beer.price">
          <div class="col-4 pr">{{pr.volume}} L</div>
          <div class="col-4 pr">{{pr.cost}} грн.</div>
          <div class="col-4 pr">{{pr.quantity}} шт.</div>
        </div>
      </div>
      <div class="col-1">
        <button class="btn btn-success btn-sm" @click="deletePosition(beer)">Удалить</button>
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
          this.resource.get().then(responce => responce.json())
            .then(beers => this.beers = beers)
        }
      },

      methods:{

          deletePosition(beer){

              this.$http.delete('http://localhost:3000/beers/' + beer.id)
                .then(response => {return response.json()}).then(
                // this.resource.get().then(responce => responce.json())
                //   .then(beers => this.beers = beers)
              )
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

 .position {
   margin-top: 15px;
   border: darkgray solid 0.5px;
   padding: 5px;
   border-radius: 15px;
   background-color: 	#FBCEB1;
 }

 .positionBeer {
   border: darkgray solid 0.5px;
   padding: 5px;
   border-radius: 15px;
   background-color: #FAE7B5;
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

 .bat{
   border-radius: 15px;
 }
</style>
