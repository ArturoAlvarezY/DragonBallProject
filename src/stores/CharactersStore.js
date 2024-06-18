import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useCharacters = defineStore('characters', () => {

  const uri = import.meta.env.VITE_API_ENDPOINT_CHARACTERS

  const listaCharacters = ref([])

  const getlistaCharacters = computed(() => listaCharacters.value)

  function setlistaCharacters(myarray) {
    listaCharacters.value = myarray
  }

  return { listaCharacters, getlistaCharacters, setlistaCharacters}
})
