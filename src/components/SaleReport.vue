<template>
    <div class="container">

      <div id="head" class="row position">

        <div class="col-sm-1">
          <span>ID</span>
        </div>

        <div class="col-sm-3">
          <span>Сорт пива</span>
        </div>

        <div class="col-sm-2">
          <span>объём бутылки</span>
        </div>

        <div class="col-sm-2">
          <span>Цена</span>
        </div>

        <div class="col-sm-2">
          <span>Количество</span>
        </div>

        <div class="col-sm-2">
          <span>Сумма</span>
        </div>

      </div>

    </div>
</template>

<script>
    export default {
        // name: "saleReport"



    }
</script>

<style scoped>

  .position {
    border: darkgray solid 0.5px;
    padding: 5px;
    border-radius: 15px;
  }

  div {
    border: darkgray solid 0.5px;

    border-radius: 15px;
  }

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
