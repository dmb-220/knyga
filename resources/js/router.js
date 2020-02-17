import Vue from 'vue'
import Router from 'vue-router'
import Pagrindinis from './views/knyga.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'pagrindinis',
      component: Pagrindinis
    },
    {
      path: '/saskaitos',
      name: 'Sąskaitos',
      component: () => import('./views/saskaitos.vue')
    },
    {
      path: '/imones',
      name: 'Įmonės',
      component: () => import('./views/imones.vue'),
    },
    {
      path: '/users',
      name: 'Vartotojai',
      component: () => import('./views/users.vue')
    },
    {
      path: '/dashboard',
      name: 'kazkas',
      component: () => import('./views/dashboard.vue')
    },
    {
      path: '/books',
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
    
  ],
})