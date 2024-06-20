import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import { useAuthStore } from '@/stores/auth'

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
      path: '/login',
      name: 'login',
      component: LoginView
    },

    {
      path: '/favorite',
      name: 'favorite',
      component: () => import('../views/Favorite.vue'),
      meta: { requiresAuth: true }
    },

  ]
})

router.beforeEach((to, from) => {

  const store = useAuthStore()

  if (to.meta.requiresAuth && !store.user.isAuthenticated) {
    return { name: 'login' }
  }
})

export default router
