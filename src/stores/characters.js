import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const userCharacters = defineStore('characters', () => {

  const uri = import.meta.env.VITE_API_ENDPOINT_CHARACTERS
  const characters = ref([])

  async function get() {
    const response = await fetch(uri)
    characters = await response.json()

  }

  return { characters, get }
})

