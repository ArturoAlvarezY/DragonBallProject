<script setup>
import CardPlanet from '@/components/card/CardPlanet.vue';
import DragonBallService from '@/components/core/apis/dragonBall/DragonBallService.js';
import Repository from '@/components/core/models/Repository.js';
import { ref, watch } from 'vue';

const uri = import.meta.env.VITE_API_ENDPOINT_PLANETS
const repository = new Repository(uri)
const apiPlanets = new DragonBallService(repository)
const listPlanets = ref([])
const searchQuery = ref('')

async function setPlanets(query = '') {
  const planets = await apiPlanets.getPlanets(20, 1, query)
  listPlanets.value = planets
}

watch(searchQuery, () => {
  setPlanets(searchQuery.value)
})

setPlanets()

</script>

<template>
  <input v-model="searchQuery" placeholder="Search Planets" />
  <div v-if="listPlanets" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
    <div v-for="planet in listPlanets" :key="planet.id" class="col">
      <CardPlanet :name=planet.name :isDestroyed=planet.isDestroyed :description=planet.description
        :img=planet.img />
    </div>
  </div>
</template>

<style></style>
