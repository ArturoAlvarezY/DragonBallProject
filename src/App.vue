<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/nav/NavBar.vue';
</script>

<template>
  <NavBar/>
  <main class="container mt-5 pt-5">
    <RouterView />
  </main>
</template>

<style scoped>
.bg-orange {
  background: #E94C1A !important;
}
</style>
