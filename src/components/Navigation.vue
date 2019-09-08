<template>
  <nav>

    <router-link
      id="beerglass"
      tag="buttom"
      exact
      active-class="active"
      to="/bottle"
    >
      <img src="../image/Logo.png" alt="Logo">
      <!--        Бутыль-->
      <span class="sr-only">(current)</span>
    </router-link>

    <ul>

      <router-link
        tag="li"
        exact
        v-if="saleLink"
        v-bind:user="user"
        :key="user.id"
        active-class="active"
        to="/order"
      >
        Продажа
      </router-link>

      <router-link
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
        tag="li"
        exact
        v-if="reportLink"
        active-class="active"
        to="/report"
      >
        Отчет

        <div id="dropdown">
          <ul>

            <router-link
              tag="li"
              exact
              active-class="active"
              to="/report/sale_report"
              @click=""
            >
              Отчет по продажам
            </router-link>

            <router-link
              tag="li"
              exact
              active-class="active"
              to="/report/supply_report"
              @click=""
            >
              Отчет по поставкам
            </router-link>

            <router-link
              tag="li"
              exact
              active-class="active"
              to="/report/general_report"
              @click=""
            >
              Отчет общий
            </router-link>

          </ul>
        </div>
      </router-link>

      <router-link
        tag="li"
        exact
        v-if="workersLink"
        active-class="active"
        to="/workers"
      >
        Сотрудники
      </router-link>

      <router-link
        tag="li"
        exact
        v-if="providersLink"
        active-class="active"
        to="/providers"
      >
        Поставщики
      </router-link>

    </ul>



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
    border-bottom: #575757 solid 1px;
    color: grey;
    font-size: 1.2em;
  }
  #beerglass {
    float: left;
    margin: 0 15px;
  }
  nav ul {
    height: 100%;
    float: left;
    vertical-align: middle;
    padding: 0;
    margin: 0;
  }
  nav ul li {
    height: 100%;
    width: 160px;
    line-height: 64px;
    vertical-align: middle;
    display: inline-block;
    box-sizing: border-box;
    margin-left: 0;
    margin-right: 10px;
    background-color: #ccc;
    text-align: center;
  }
  nav ul li:hover {
    background-color: grey;
    text-decoration: underline;
    color: black;
  }
  nav ul li:hover #dropdown{
    display: block;
    box-sizing: border-box;
  }
  nav img {
    height: 60px;
  }
  #userName {
    height: 100%;
    color: #2c3e50;
    padding: 18px 10px 0 10px;
    vertical-align: middle;
    display: inline-block;
  }
  #dropdown {
    position: relative;
    /*height: 100%;*/
    /*top: 100%;*/
    width: 140px;
    background-color: #ccc;
    text-align: left;
    display: none;
    font-size: 0.75em;
    line-height: 25px;
    z-index: 100;
  }
  .dropdown ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  .dropdown ul li {
    display: block;
    height: 25px;
    width: 140px;
    line-height: 25px;
    background-color: #ccc;
    vertical-align: middle;
    text-align: center;
    box-sizing: border-box;
    /*padding-left: 5px;*/
    z-index: 100;
    margin: 0;
  }
  .dropdown ul li:hover {
    width: 140px;
    background-color: #A9F5F2;
  }
</style>
