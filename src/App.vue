<template>
  <div id="app">
    <h1>Бутыль пива</h1>

<!--    <span id="doc_time"></span>-->
<!--    <script type="text/javascript">-->
<!--      clock();-->
<!--    </script>-->

    <nav class="navbar navbar-expand-lg navbar-light bg-light">

      <router-link
        class="nav-link"
        tag="li"
        exact
        active-class="active"
        to="/"
      >
        Бутыль
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
              active-class="active"
              to="/sale"
            >
              Продажа
              <span class="sr-only">(current)</span>
            </router-link>

            <router-link
              class="nav-link"
              tag="li"
              exact
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
            active-class="active"
            to="/report"
          >
            Отчет
            <span class="sr-only">(current)</span>
          </router-link>

        </ul>
      </div>
    </nav>
    <hr>

    <router-view/>
  </div>
</template>

<script>
export default {
  // clock() {
  //   var d = new Date();
  //   var month_num = d.getMonth()
  //   var day = d.getDate();
  //   var hours = d.getHours();
  //   var minutes = d.getMinutes();
  //   var seconds = d.getSeconds();
  //
  //   month=new Array("января", "февраля", "марта", "апреля", "мая", "июня",
  //     "июля", "августа", "сентября", "октября", "ноября", "декабря");
  //
  //   if (day <= 9) day = "0" + day;
  //   if (hours <= 9) hours = "0" + hours;
  //   if (minutes <= 9) minutes = "0" + minutes;
  //   if (seconds <= 9) seconds = "0" + seconds;
  //
  //   date_time = "Сегодня - " + day + " " + month[month_num] + " " + d.getFullYear() +
  //     " г.&nbsp;&nbsp;&nbsp;Текущее время - "+ hours + ":" + minutes + ":" + seconds;
  //   if (document.layers) {
  //     document.layers.doc_time.document.write(date_time);
  //     document.layers.doc_time.document.close();
  //   }
  //   else document.getElementById("doc_time").innerHTML = date_time;
  //   setTimeout("clock()", 1000);
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
