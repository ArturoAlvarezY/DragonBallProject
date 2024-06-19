<script setup>
import CardPlanet from '@/components/card/CardPlanet.vue';
import DragonBallService from '@/components/core/apis/dragonBall/DragonBallService.js';
import Repository from '@/components/core/models/Repository.js';
import { ref } from 'vue';

const uri = import.meta.env.VITE_API_ENDPOINT_PLANETS
const repository = new Repository(uri)
const apiPlanets = new DragonBallService(repository)
let listPlanets = ref([])

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
  </div>
</template>

<style></style>
