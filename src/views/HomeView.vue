<script setup>
import Card from '@/components/card/Card.vue';
import DragonBallService from '@/components/core/apis/dragonBall/DragonBallService.js';
import Repository from '@/components/core/models/Repository.js';
import { ref } from 'vue';

const uri = import.meta.env.VITE_API_ENDPOINT_CHARACTERS
const repository = new Repository(uri)
const apiCharacters = new DragonBallService(repository)
let listCharacters = ref([])

async function setCharacters() {
  const characters = await apiCharacters.getCharacters()
  listCharacters.value = characters
}

setCharacters()

</script>

<template>
  <main>
    <!--
    <ul v-if="listCharacters">
      <li v-for="usuario in listCharacters" :key="usuario.id">
        Nombre: {{ usuario.name }}
        <br>
        Max Ki: {{ usuario.ki }}
        <br>
        Raza: {{ usuario.race }}
        <br>
        descripcion: {{ usuario.description }}
        <br>
        <img :src="usuario.image">
        imagen:
        <br>
      </li>
    </ul>-->
    
    <div v-if="listCharacters" class="row row-cols-1 row-cols-md-2 row-cols-md-2 g-4">
      <div v-for="character in listCharacters" :key="character.id" class="col">
        <Card :name=character.name 
        :ki=character.ki
        :race=character.race
        :description=character.description
        :image=character.image />
      </div>
    </div>
  </main>

</template>
