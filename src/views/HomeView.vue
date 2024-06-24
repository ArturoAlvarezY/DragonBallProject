<script setup>
import CardCharacter from '@/components/card/CardCharacter.vue';
import DragonBallService from '@/components/core/apis/dragonBall/DragonBallService.js';
import Repository from '@/components/core/models/Repository.js';
import { ref } from 'vue';

const uri = import.meta.env.VITE_API_ENDPOINT_CHARACTERS
const repository = new Repository(uri)
const apiCharacters = new DragonBallService(repository)
const listCharacters = ref([])

async function setCharacters() {
  const characters = await apiCharacters.getCharacters(8) //se puede pasar un filtro para poner la cantidad a mostrar
  listCharacters.value = characters
}

setCharacters()

</script>

<template>
  <div v-if="listCharacters" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
    <div v-for="character in listCharacters" :key="character.id" class="col">
      <CardCharacter :name=character.name :maxKi=character.maxKi :race=character.race :description=character.description
        :image=character.image />
    </div>
  </div>
</template>
