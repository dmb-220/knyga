import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/users',
      name: 'Vartotojai',
      component: () => import('./views/users.vue')
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('./views/dashboard.vue')
    },
    {
      path: '/',
      name: 'Green book',
      component: () => import('./views/Books.vue')
    },
    {
      path: '/invoices',
      name: 'Invoices',
      component: () => import('./views/Invoices.vue')
    },
    {
      path: '/companies',
      name: 'Companies',
      component: () => import('./views/Companies.vue')
    },
    {
      path: '/farmers',
      name: 'Farmers',
      component: () => import('./views/Farmers.vue')
    },
    
  ],
})