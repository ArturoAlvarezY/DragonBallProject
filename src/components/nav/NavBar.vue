<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
  <nav class="navbar navbar-expand-md navbar-white bg-orange fixed-top bg-dark">
    <div class="container-fluid">
      <RouterLink to="/" class="nav-link">
        <img src="@/assets/logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
        Fixed navbar
      </RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/planets" class="nav-link">Planets</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/favorite" class="nav-link">Favorite</RouterLink>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<style></style>