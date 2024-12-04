import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import FreeServices from '../views/FreeServices.vue'
import PaidServices from '../views/PaidServices.vue'
import PremiumServices from '../views/PremiumServices.vue'
import About from '../views/About.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/free-services',
      name: 'FreeServices',
      component: FreeServices
    },
    {
      path: '/paid-services',
      name: 'PaidServices',
      component: PaidServices
    },
    {
      path: '/premium-services',
      name: 'PremiumServices',
      component: PremiumServices
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})

export default router