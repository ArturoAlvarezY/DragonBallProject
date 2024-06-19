import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/guards/LoginView.vue'
import { useAuthStore } from '@/stores/auth'
import Planets from '@/views/Planets.vue'
import Favorite from '@/views/guards/Favorite.vue'

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
      component: Planets
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: Favorite,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach( (to, from) => {

  const store = useAuthStore()

  if (to.meta.requiresAuth && !store.user.isAuthenticated) {
    return { name: 'login' }
  }

})

export default router
