import { createRouter, createWebHistory } from 'vue-router'
import Portfolio from '../views/PortfolioView.vue'
import Stocks from '../views/StocksView.vue'
import Watches from '../views/WatchesView.vue'
import Home from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/stocks',
      name: 'stocks',
      component: Stocks
    },
    {
      path: '/watches',
      name: 'watches',
      component: Watches
    }
  ]
})

export default router
