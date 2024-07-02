<script setup>
import CardCharacter from '@/components/card/CardCharacter.vue'
import { useCharacters } from '@/stores/CharactersStore'

const listCharacters = useCharacters()
const favorite = true
</script>

<template>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mb-4">
    <div v-for="character in listCharacters.listCharacters" :key="character.id" class="col">
      <CardCharacter :id="character.id" :name="character.name" :maxKi="character.maxKi" :race="character.race"
        :description="character.description" :image="character.image" :favorite="favorite" />
    </div>
  </div>
</template>

<style></style>
