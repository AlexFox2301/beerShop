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
              @click="newOrder"
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
      <router-view v-for="j in quantityPosition"></router-view>

      <hr>
      <div id="total">
        <button id="addPosition" @click="quantityPosition++">Добавить</button>
        <button id="delPosition" @click="quantityPosition--">Удалить</button>

        <!--              <strong>{{sum()}}</strong>-->
      </div>


    </div>
</template>

<script>
    import index from "../router";

    export default {
        // name: "Sale",

      data () {
        return {
          quantityPosition: 1,
        }
      },

      methods: {

          newOrder() {
            var order

          },

         addToDB(){},
      }
    }
</script>

<style scoped>

</style>
