<template>
    
</template>

<script>
    export default {
      data(){
        return{
          resource: null,

          beers: [],
          supplies: [],
        }
      },



      created() {
        // this.resource = this.$resource('beers'),
        this.resource = this.$resource('supplies'),
          // this.resource.get().then(responce => responce.json())
          //   .then(beers => this.beers = beers);

          this.resource.get().then(responce => responce.json())
            .then(supplies => this.supplies = supplies)

        // this.$http.get('http://localhost:3000/supplies')
        //   .then(response => {return response.json()}).then(supplies => this.supplies = supplies)

        this.$http.get('http://localhost:3000/beers')
          .then(response => {return response.json()}).then(beers => this.beers = beers)
      },
    }
</script>

<style scoped>
  .position {
    border: darkgray solid 0.5px;
    padding: 5px;
    border-radius: 15px;
  }

  /*div {*/
  /*  border: darkgray solid 0.5px;*/

  /*  border-radius: 15px;*/
  /*}*/

  input {
    width: 95%;
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
