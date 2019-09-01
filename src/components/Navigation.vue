<template>
  <nav class="navbar navbar-expand-lg navbar-light " v-if="!activeNav">

    <router-link
      class="nav-link"
      tag="li"
      exact
      active-class="active"
      to="/bottle"
    >
      <img src="../image/Logo.png" alt="Logo">
      <!--        Бутыль-->
      <span class="sr-only">(current)</span>
    </router-link>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">

        <router-link
          class="nav-link"
          tag="li"
          exact
          v-if="saleLink"
          v-bind:user="user"
          :key="user.id"
          active-class="active"
          to="/order"
        >
          Продажа
          <span class="sr-only">(current)</span>
        </router-link>

        <router-link
          class="nav-link"
          tag="li"
          v-bind:user="user"
          :key="user.id"
          exact
          v-if="supplyLink"
          active-class="active"
          to="/supply"
        >
          Поставка
          <span class="sr-only">(current)</span>
        </router-link>

        <router-link
          class="nav-link"
          tag="li"
          exact
          v-if="reportLink"
          active-class="active"
          to="/report"
        >
          Отчет
          <span class="sr-only">(current)</span>

<!--          <div class="collapse navbar-collapse">-->
<!--            <ul class="navbar-nav">-->

<!--              <router-link-->
<!--                class="nav-link ml-2 mr-2"-->
<!--                tag="button"-->
<!--                exact-->
<!--                active-class="active"-->
<!--                to="/report/sale_report"-->
<!--                @click=""-->
<!--              >-->
<!--                Отчет по продажам-->
<!--                <span class="sr-only">(current)</span>-->
<!--              </router-link>-->

<!--              <router-link-->
<!--                class="nav-link ml-2 mr-2"-->
<!--                tag="button"-->
<!--                exact-->
<!--                active-class="active"-->
<!--                to="/report/supply_report"-->
<!--                @click=""-->
<!--              >-->
<!--                Отчет по поставкам-->
<!--                <span class="sr-only">(current)</span>-->
<!--              </router-link>-->

<!--              <router-link-->
<!--                class="nav-link ml-2 mr-2"-->
<!--                tag="button"-->
<!--                exact-->
<!--                active-class="active"-->
<!--                to="/report/general_report"-->
<!--                @click=""-->
<!--              >-->
<!--                Отчет общий-->
<!--                <span class="sr-only">(current)</span>-->
<!--              </router-link>-->

<!--            </ul>-->
<!--          </div>-->
        </router-link>

        <router-link
          class="nav-link"
          tag="li"
          exact
          v-if="workersLink"
          active-class="active"
          to="/workers"
        >
          Сотрудники
          <span class="sr-only">(current)</span>
        </router-link>

        <router-link
          class="nav-link"
          tag="li"
          exact
          v-if="providersLink"
          active-class="active"
          to="/providers"
        >
          Поставщики
          <span class="sr-only">(current)</span>
        </router-link>

      </ul>
    </div>

    <div id="userName" class="float-right">
      {{user.name}}
    </div>

  </nav>
</template>

<script>
    export default {
        name: "Navigation",

      data(){
          return{
            user: {},

            saleLink: false,
            supplyLink: false,
            reportLink: false,
            workersLink: false,
            providersLink: false,
          }
      },

      created() {
        this.user = this.$store.getters.getWorker;

        if (this.user.access.indexOf('sale') >= 0) {
          this.saleLink = true;}
        if (this.user.access.indexOf('supply') >= 0) {
          this.supplyLink = true;}
        if (this.user.access.indexOf('report') >= 0) {
          this.reportLink = true;}
        if (this.user.access.indexOf('workers') >= 0) {
          this.workersLink = true;}
        if (this.user.access.indexOf('providers') >= 0) {
          this.providersLink = true;}
      }
    }
</script>

<style scoped>
 nav {
   height: 64px;
   margin-top: 0px;
   background-color: #ccc;
   color: grey;
   font-size: 1.2em;
 }

 nav:first-child {
   padding: 2px;
 }

  nav img {
    height: 60px;
    padding: 0px;
  }

  #userName {
    color: #2c3e50;
    padding: 0 10px 0 10px;
  }
</style>
