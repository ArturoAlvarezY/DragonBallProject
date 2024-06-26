<script setup>
import CardCharacter from '@/components/card/CardCharacter.vue';
import DragonBallService from '@/components/core/apis/dragonBall/DragonBallService.js';
import Repository from '@/components/core/models/Repository.js';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  page: {
    type: String,
    required: false
  },
})

const uri = import.meta.env.VITE_API_ENDPOINT_CHARACTERS
const repository = new Repository(uri)
const apiCharacters = new DragonBallService(repository)
const listCharacters = ref([])
const router = useRouter()

async function setCharacters(page = 1) {
  const characters = await apiCharacters.getCharacters(8, page)
  listCharacters.value = characters
}

setCharacters(props.page ? props.page : 1)


</script>

<template>
  <div v-if="listCharacters" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mb-4">
    <div v-for="character in listCharacters" :key="character.id" class="col">
      <CardCharacter :name=character.name :maxKi=character.maxKi :race=character.race :description=character.description
        :image=character.image />
    </div>
  </div>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item"><a class="page-link" href="#">Previous</a></li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item"><a class="page-link" href="#">Next</a></li>
    </ul>
  </nav>
</template>
