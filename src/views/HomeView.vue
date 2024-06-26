<script setup>
import CardCharacter from '@/components/card/CardCharacter.vue';
import DragonBallService from '@/components/core/apis/dragonBall/DragonBallService.js';
import Repository from '@/components/core/models/Repository.js';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

defineProps({
    page2: {
        type: String,
        required: false
    },
});

const uri = import.meta.env.VITE_API_ENDPOINT_CHARACTERS
const repository = new Repository(uri)
const apiCharacters = new DragonBallService(repository)
const listCharacters = ref([])
const router = useRouter()

async function setCharacters(page = 1) {
  const characters = await apiCharacters.getCharacters(page) 
  listCharacters.value = characters
}


setCharacters(2)

</script>

<template>
  <div v-if="listCharacters" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
    <div v-for="character in listCharacters" :key="character.id" class="col">
      <CardCharacter :name=character.name :maxKi=character.maxKi :race=character.race :description=character.description
        :image=character.image />
    </div>

    <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
     <!--  <a class="">Previous</a> -->
    </li>
    <!-- <li class="page-item"><a class="" href="#"></a></li> -->
    <li class="page-item"><a class="https://dragonball-api.com/api/characters?limit=8" href="#1">Home</a></li>
    <li class="page-item"><a class="https://dragonball-api.com/api/characters?page=12&limit=8" href="#1">Home</a></li>
    <li class="page-item">
      <a class="https://dragonball-api.com/api/planets?limit=20" href="#2">Planets</a>
    </li>
  </ul>
</nav>
  </div>
</template>
