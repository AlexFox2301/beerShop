import Vue from 'vue';
import Router from 'vue-router';
import VueRouter from 'vue-router';
import Bottle from '../components/Bottle';
import Sale from "../components/sale/Sale";
import Supply from "../components/supply/Supply";
import Report from "../components/report/Report";
import Order from "../components/sale/Order";
import ListBeers from "../components/supply/ListBeers";
import AddNewSort from "../components/supply/AddNewSort";
import SupplyBeer from "../components/supply/SupplyBeer";
import Workers from '../components/worker/Workers';
import Entry from "../components/Entry";
import NewWorker from "../components/worker/NewWorker";
import EditWorker from "../components/worker/EditWorker";
import SupplyReport from "../components/report/SupplyReport";
import SaleReport from "../components/report/SaleReport";
import GeneralReport from "../components/report/GeneralReport";
import AddNewProvider from "../components/provider/AddNewProvider";
import Providers from "../components/provider/Providers";

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
      component: Report,
      children: [
        {
          path: 'sale_report',
          component: SaleReport
        },
        {
          path: 'supply_report',
          component: SupplyReport
        },
        {
          path: 'general_report',
          component: GeneralReport
        }
      ]
    },
    {
      path: '/workers',
      name: 'Workers',
      component: Workers,
      children:[
        {
          path: 'new_worker',
          component: NewWorker
        },
        {
          path: 'edit_worker',
          component: EditWorker
        }
      ]
    },
    {
      path: '/providers',
      name: 'Providers',
      component: Providers,
      children: [
        {
          path: 'add_new_provider',
          component: AddNewProvider
        }
      ]
    }

  ],
  mode: 'history'
})
