<script setup>
import { userCharacters } from '@/stores/characters';
import { ref } from 'vue';


const characters = userCharacters()
//const character = ref([])
characters.get()
//console.log(characters.get());
</script>

<template>
  <main>
    <TheWelcome />

  </main>
</template>
