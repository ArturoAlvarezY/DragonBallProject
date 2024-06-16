import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useCharacters = defineStore('characters', () => {

  const uri = import.meta.env.VITE_API_ENDPOINT_CHARACTERS

  const listaCharacters = ref([])

  const getlistaCharacters = computed(() => listaCharacters.value)

  async function setlistaCharacters() {
    const response = await fetch(uri)
    listaCharacters.value = await response.json()
  }

  return { listaCharacters, getlistaCharacters, setlistaCharacters}
})