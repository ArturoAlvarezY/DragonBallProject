<script setup>
import DragonBallService from '@/components/core/apis/dragonBall/DragonBallService.js';
import Repository from '@/components/core/models/Repository.js';
import { ref } from 'vue';


const repository = new Repository('https://dragonball-api.com/api/characters')
const apiCharacters = new DragonBallService(repository)
let listCharacters = ref([])

async function setCharacters() {
  const characters = await apiCharacters.getCharacters()
  listCharacters.value = characters
}

console.log(listCharacters);

setCharacters()



</script>

<template>
  <main>
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
    </ul>
  </main>
</template>
