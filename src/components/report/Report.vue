<template>
    <div class="container">
      <h3>ОТЧЕТ</h3>
      <hr>
<!--      <nav class="navbar navbar-expand-lg navbar-light bg-light">-->

<!--        <div class="collapse navbar-collapse" id="navbarNav">-->
<!--          <ul class="navbar-nav">-->

<!--            <router-link-->
<!--              class="nav-link ml-2 mr-2"-->
<!--              tag="button"-->
<!--              exact-->
<!--              active-class="active"-->
<!--              to="/report/sale_report"-->
<!--              @click=""-->
<!--            >-->
<!--              Отчет по продажам-->
<!--              <span class="sr-only">(current)</span>-->
<!--            </router-link>-->

<!--            <router-link-->
<!--              class="nav-link ml-2 mr-2"-->
<!--              tag="button"-->
<!--              exact-->
<!--              active-class="active"-->
<!--              to="/report/supply_report"-->
<!--              @click=""-->
<!--            >-->
<!--              Отчет по поставкам-->
<!--              <span class="sr-only">(current)</span>-->
<!--            </router-link>-->

<!--            <router-link-->
<!--              class="nav-link ml-2 mr-2"-->
<!--              tag="button"-->
<!--              exact-->
<!--              active-class="active"-->
<!--              to="/report/general_report"-->
<!--              @click=""-->
<!--            >-->
<!--              Отчет общий-->
<!--              <span class="sr-only">(current)</span>-->
<!--            </router-link>-->

<!--          </ul>-->
<!--        </div>-->
<!--      </nav>-->
<!--      <hr>-->

      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Report"
    }
</script>

<style scoped>

</style>
