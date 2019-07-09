<template>
    <div class="container">
      <h1>Welcom to Bottle Beer {{worker.name}}</h1>
      <img src="../image/beer.jpg">
    </div>
</template>

<script>
    export default {
        name: "Bottle",

      data(){
          return{
            worker: {}
          }
      },

      // computed:{
      //     worker(){
      //       return this.$store.getters.getWorker;
      //     }
      // },

      created() {
          this.worker = this.$store.getters.getWorker;
      }

    }
</script>

<style scoped>

</style>
