<template>
  <div class="container position">

    <button class="btn btn-primary bat" @click="addToDB">Добавить новый сорт в базу</button>

    <div class="form-group">
      <div class="row">
        <div class="col-3">
          <label for="sortName">Сорт пива</label>
        </div>
        <div class="col-5">
          <input id="sortName" type="text" class="form-control" v-model.trim="beer.sortName">
        </div>
      </div>
    </div>

    <div class="form-group" >
      <div class="row">
        <div class="col-3">
          <label for="origin">Происхождение</label>
        </div>
        <div class="col-5">
          <input id="origin" type="text" class="form-control" v-model.trim="beer.origin">
        </div>
      </div>
    </div>

    <div class="form-group">
      <div class="row">
        <div class="col-3">
          <label for="alcohol">Количество алкоголя</label>
        </div>
        <div class="col-5">
          <input id="alcohol" type="text" class="form-control" v-model.trim="beer.alcohol">
        </div>
      </div>
    </div>

    <div v-for="pr in beer.price">
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

    <div>
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
            <button class="btn btn-success bat" @click="addPricePosition">Добавить еденицу товара</button>
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
        name: "EditBeer",

      data(){
          return{
            resource: null,

            idBeer: null,
            beers: [],

            volume: null,
            cost: null,
            quantity: 0

          }
      },

      methods:{

        addPricePosition(){
          try {
            var pricePositions = {
              volume: this.volume,
              cost: this.cost,
              quantity: this.quantity,
            }
          } catch (e) {
            alert('ошибка сoздания позиции');
          }

          try {
            this.price.push(pricePositions);
          }
          catch (e) {
            alert('ошибка вставки в массив');
          }

          this.volume = null;
          this.cost = null;
        },

        addToDB(){

          this.resource.save({}, beer)
          this.$http.put('http://localhost:3000/beers/' + this.idBeer, this.beerEdit)
            .then(responce => responce.json());

          this.$router.push('/supply/list_beers');
        }

      },

      created() {
        this.resource = this.$resource('beers');

        this.idBeer = this.$store.getters.getProviderID;

        this.$http.get('http://localhost:3000/providers/' + this.idProvider)
          .then(response => {return response.json()})
          .then(beer => this.beer = beer);
      }

    }
</script>

<style scoped>
  .position {
    margin-top: 15px;
    border: darkgray solid 0.5px;
    padding: 5px;
    border-radius: 15px;
    background-color: #FBCEB1;
  }

  input {
    width: 90%;
    border-radius: 10px;
    padding-left: 20px;
  }

  select {
    width: 95%;
    border-radius: 10px;
    padding: 2%;

  }

  .bat{
    border-radius: 15px;
  }

</style>
