<template>
    <div class="container">
      <h1>ПОСТАВКА</h1>
      <hr>

      <nav class="navbar navbar-expand-lg navbar-light">

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">

            <router-link
              class="nav-link ml-2 mr-2"
              tag="button"
              exact
              active-class="active"
              to="/supply/add_new_sort"
            >
              Добавить сорт
              <span class="sr-only">(current)</span>
            </router-link>

            <router-link
              class="nav-link ml-2 mr-2"
              tag="button"
              exact
              active-class="active"
              to="/supply/supply_beer"
            >
              Поставка
              <span class="sr-only">(current)</span>
            </router-link>
          </ul>
        </div>
      </nav>

      <hr>

      <router-view></router-view>

      <app-beers></app-beers>

    </div>
</template>

<script>

  import ListBeers from './ListBeers'

    export default {

      data(){
        return{

        }
      },

      components:{
        appBeers: ListBeers
      },

    }
</script>

<style scoped>

  .container {
    min-width: 576px;
  }

  nav {
    background-color: #eaeaea;
  }

 button {
   border-radius: 15px;
   background-color: #ccc;
   width: 150px;
 }

  button:hover {
    color: black;
    font-weight: bold;
    box-shadow: 0 0 15px grey;
  }

</style>
