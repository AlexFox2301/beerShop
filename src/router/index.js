import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'
import Bottle from '../components/Bottle'
import Sale from "../components/Sale";
import Supply from "../components/Supply";
import Report from "../components/Report";
import Order from "../components/Order";

Vue.use(VueRouter)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Bottle',
      component: Bottle
    },
    {
      path: '/sale',
      name: 'Sale',
      component: Sale,
      children:[
        {
          path:'order',
          component: Order
        }
      ]
    },
    {
      path: '/supply',
      name: 'Supply',
      component: Supply
    },
    {
      path: '/report',
      name: 'Report',
      component: Report
    }

  ],
  mode: 'history'
})
