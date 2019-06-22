<template>
    <div class="container">
      <h3>ПРОДАЖИ</h3>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">

            <router-link
              class="nav-link ml-2 mr-2"
              tag="button"
              exact
              active-class="active"
              to="/sale/order"
              @click="newOrder"
            >
              Создать заказ
              <span class="sr-only">(current)</span>
            </router-link>

<!--            <button-->
<!--              class="nav-link ml-2 mr-2"-->
<!--              active-class="active"-->
<!--              exact-->
<!--              @click="addToDB"-->
<!--            >-->
<!--              Оформить заказ-->
<!--              <span class="sr-only">(current)</span>-->
<!--            </button>-->

<!--            <button-->
<!--              class="nav-link ml-2 mr-2"-->
<!--              exact-->
<!--              active-class="active"-->
<!--            >-->
<!--              Закрыть-->
<!--              <span class="sr-only">(current)</span>-->
<!--            </button>-->

          </ul>
        </div>
      </nav>

      <hr>
      <router-view></router-view>

      <hr>



    </div>
</template>

<script>
    export default {
        // name: "Sale",

      data () {
        return {

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
