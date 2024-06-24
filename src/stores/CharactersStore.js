import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useCharacters = defineStore('characters', () => {

  const uri = import.meta.env.VITE_API_ENDPOINT_CHARACTERS

  const listCharacters = ref([])

  const getlistCharacters = computed(() => listCharacters.value)

  async function setlistCharacters() {
    const response = await fetch(uri)
    listCharacters.value = await response.json()
  }

  return { listCharacters, getlistCharacters, setlistCharacters}
})
