<template>
  <div id="listBeer">

    <div id="head" class="row position">

    <div class="col-1 cellHead">ID</div>
    <div class="col-3 cellHead">Сорт Пива</div>
    <div class="col-2 cellHead">Происхождение</div>
    <div class="col-1 cellHead">Крепость</div>
    <div class="col-3 cellHead">
      <div class="row">
        <div class="col-4">Объем</div>
        <div class="col-4">Стоимость</div>
        <div class="col-4">Количество</div>
      </div>
    </div>


  </div>

    <div id="body" class="row positionBeer" v-for="beer in beers" :key="beer.id" v-model="beers">

      <div class="col-sm-1 cell">{{beer.id}}</div>
      <div class="col-sm-3 cell">{{beer.sortName}}</div>
      <div class="col-sm-2 cell">{{beer.origin}}</div>
      <div class="col-sm-1 cell">{{beer.alcohol}}</div>
      <div class="col-sm-3">
        <div class="row cellPrice" v-for="pr in beer.price">
          <div class="col-4">{{pr.volume}} L</div>
          <div class="col-4">{{pr.cost}} грн.</div>
          <div class="col-4">{{pr.quantity}} шт.</div>
        </div>
      </div>
      <div class="col">
        <button class="btn btn-danger btn-sm bat" @click="deletePosition(beer)">-</button>
        <button class="btn btn-success btn-sm bat" @click="setID(beer.id)">Править</button>
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

      methods:{

        setID(id){
          this.$store.commit('setBeerID', id);
          this.$router.push('/supply/edit_beer');
        },

          deletePosition(beer){

              this.$http.delete('http://localhost:3000/beers/' + beer.id)
                .then(response => {return response.json()}).then(
              )
          }


      },

      created() {
        this.resource = this.$resource('beers');
          this.resource.get().then(responce => responce.json())
            .then(beers => this.beers = beers);
      },

    }
</script>

<style scoped>

  #listBeer {
    min-width: 960px;
  }

 .position {
   min-width: 960px;
   margin-top: 15px;
   border: darkgray solid 0.5px;
   padding: 5px;
   border-radius: 15px;
   background-color: 	#FBCEB1;
   font-size: 0.9em;
   box-sizing: border-box;
 }

 .positionBeer {
   min-width: 960px;
   border: darkgray solid 0.5px;
   padding: 5px;
   border-radius: 15px;
   background-color: #FAE7B5;
   font-size: 0.9em;
   box-sizing: border-box;
 }

 .cellHead {
   /*background-color: #F8EFD8;*/
   /*border: solid 0.5px #D0C3A1;*/
   /*border-radius: 10px;*/
   margin: 2px;
   vertical-align: middle;
 }

 .cell {
   background-color: #F8EFD8;
   border: solid 0.5px #D0C3A1;
   border-radius: 10px;
   margin: 2px;
   vertical-align: middle;
 }

 .cellPrice {
   background-color: #F8EFD8;
   border: solid 0.5px #D0C3A1;
   border-radius: 10px;
   margin: 2px 0 2px 0;
   vertical-align: middle;
 }



 /*.col-1 {*/
 /*  border-right: solid grey 1px;*/
 /*}*/
 /*.col-2 {*/
 /*   border-right: solid grey 1px;*/
 /* }*/
 /*.col-3 {*/
 /*   border-right: solid grey 1px;*/
 /* }*/
 /*.col-4 {*/
 /*   border-right: solid grey 1px;*/
 /* }*/

 /*.pr {*/
 /*  border-bottom: solid grey 1px;*/
 /*}*/

 .bat{
   border-radius: 15px;
   min-width: 30px;
 }
</style>
