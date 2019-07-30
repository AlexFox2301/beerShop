<template>
    <div class="container-fluid">
      <h1>Welcom to Bottle Beer {{worker.name}}</h1>
      <img id="foto" src="../image/beer.jpg">
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

      created() {
          this.worker = this.$store.getters.getWorker;
      }

    }
</script>

<style scoped>
  #foto {
    width: 100%;
    height: 100%;
  }
</style>
