import Vue from 'vue';
import Router from 'vue-router';
import VueRouter from 'vue-router';
import Bottle from '../components/Bottle';
import Sale from "../components/Sale";
import Supply from "../components/Supply";
import Report from "../components/Report";
import Order from "../components/Order";
import ListBeers from "../components/ListBeers";
import AddNewSort from "../components/AddNewSort";
import SupplyBeer from "../components/SupplyBeer";
import Workers from  '../components/Workers';
import Entry from "../components/Entry";
import NewWorker from "../components/NewWorker";

Vue.use(VueRouter)




export default new Router({
  routes: [

    // {
    //   path: '/',
    //   name: 'Entry',
    //   component: Entry,
    //   props: true
    // },

    {
      path: '/bottle',
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
      component: Supply,
      children:[
        {
          path: 'list_beers',
          component: ListBeers
        },
        {
          path: 'add_new_sort',
          component: AddNewSort
        },
        {
          path: 'supply_beer',
          component: SupplyBeer
        }
      ]
    },
    {
      path: '/report',
      name: 'Report',
      component: Report
    },
    {
      path: '/workers',
      name: 'Workers',
      component: Workers,
      children:[
        {
          path: 'new_worker',
          component: NewWorker
        }
      ]
    }

  ],
  mode: 'history'
})
