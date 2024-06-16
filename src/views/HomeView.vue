<script setup>
import { useCharacters } from '@/stores/CharactersStore';

const characters = useCharacters()
characters.setlistaCharacters()

</script>

<template>
  <main>
    <TheWelcome />
    {{ characters.getlistaCharacters.items[0] }}
  </main>
</template>
