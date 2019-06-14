<template>
    <div class="container">
      <h1>ПРОДАЖИ</h1>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">

            <router-link
              class="nav-link ml-2 mr-2"
              tag="button"
              to="/sale/order"
            >
              Добавить заказ
              <span class="sr-only">(current)</span>
            </router-link>

            <button
              class="nav-link ml-2 mr-2"
              active-class="active"
              @click="addToDB"
            >
              Оформить заказ
              <span class="sr-only">(current)</span>
            </button>

            <button
              class="nav-link ml-2 mr-2"
              active-class="active"
            >
              Закрыть
              <span class="sr-only">(current)</span>
            </button>

          </ul>
        </div>
      </nav>

      <hr>
      <router-view></router-view>


    </div>
</template>

<script>
    import index from "../router";

    export default {
        name: "Sale",



      methods: {
         addToDB(){},
      }
    }
</script>

<style scoped>

</style>
