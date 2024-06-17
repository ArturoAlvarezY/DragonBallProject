<script setup>
import { useCharacters } from '@/stores/CharactersStore';
import Card from '../components/card/Card.vue'

const characters = useCharacters()
characters.setlistCharacters()
const listCharacters = characters.getlistCharacters.items

</script>

<template>
  <main>
    <div class="row row-cols-1 row-cols-md-2 row-cols-md-2 g-4">
      <div v-for="(item, index) in listCharacters" class="col">
        <Card name={{ item }} ki="10000" raze="Sajayin" description="Description"
          image="https://imgs.search.brave.com/fWNyQ2cf5_ixlSYnGSOaqjQchtbyNWm584EdTBac3mc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMi9Hb2t1/LVBORy1IRC5wbmc" />
      </div>
    </div>
  </main>
  
</template>
