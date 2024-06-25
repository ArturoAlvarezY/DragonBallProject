<<<<<<< HEAD
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { useAuthStore } from './stores/auth';

const store = useAuthStore()
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/planets">Planets</RouterLink>
        <RouterLink to="/favorite">Favorite</RouterLink>
        <RouterLink to="/login" v-if="!store.user.isAuthenticated">Login</RouterLink>
      </nav>

    </div>
  </header>

  <RouterView />
=======
<script setup>import { RouterView } from 'vue-router'
import NavBar from './components/nav/NavBar.vue';
</script>

<template>
    <NavBar/>
  <main class="container mt-5 pt-5">
    <RouterView />
  </main>
>>>>>>> dev
</template>

<style scoped>
</style>
