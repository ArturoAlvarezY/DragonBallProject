import { createRouter, createWebHistory, routeLocationKey } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/guards/LoginView.vue'
import { useAuthStore } from '@/stores/auth'
import Planets from '@/views/Planets.vue'
import Favorite from '@/views/guards/Favorite.vue'
import RegisterView from '@/views/guards/RegisterView.vue'
import LogoutView from '@/views/guards/LogoutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:page',
      name: 'home',
      component: HomeView,
      props: true,
      alias: '/'
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
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: Favorite,
      meta: { requiresAuth: true }
    },
    {
      path: '/logout',
      name: 'logout',
      component: LogoutView,
      meta: { requiresAuth: true }
    },
  ]
})

router.beforeEach( (to, from) => {

  const store = useAuthStore()

  if (to.meta.requiresAuth && !store.userLogin.isAuthenticated) {
    return { name: 'login' }
  }

})

export default router
