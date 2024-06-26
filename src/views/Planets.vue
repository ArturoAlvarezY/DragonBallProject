<script setup>
import CardPlanet from '@/components/card/CardPlanet.vue';
import DragonBallService from '@/components/core/apis/dragonBall/DragonBallService.js';
import Repository from '@/components/core/models/Repository.js';
import { ref } from 'vue';

const uri = import.meta.env.VITE_API_ENDPOINT_PLANETS
const repository = new Repository(uri)
const apiPlanets = new DragonBallService(repository)
const listPlanets = ref([])

async function setPlanets() {
  const planets = await apiPlanets.getPlanets()
  listPlanets.value = planets
}

setPlanets()

</script>

<template>
  <div v-if="listPlanets" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
    <div v-for="planet in listPlanets" :key="planet.id" class="col">
      <CardPlanet :name=planet.name :isDestroyed=planet.isDestroyed :description=planet.description
        :img=planet.img />
    </div>
    <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="https://dragonball-api.com/api/characters?limit=8">Home</a>
    </li>
    <li class="page-item"><a class="https://dragonball-api.com/api/characters?limit=8" href="#1">Home</a></li>
    <li class="page-item"><a class="https://dragonball-api.com/api/planets?limit=20" href="#2">Planets</a></li>
    <!-- <li class="page-item"><a class="" href="#"></a></li> -->
    <li class="page-item">
      <!-- <a class="favoritos" href="#3">Favorite</a> -->
    </li>
  </ul>
</nav>
  </div>
</template>

<style></style>
