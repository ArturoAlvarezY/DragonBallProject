import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/planets',
      name: 'planets',
      component: () => import('../views/Planets.vue')
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: () => import('../views/Favorite.vue')
    }
  ]
})

export default router
