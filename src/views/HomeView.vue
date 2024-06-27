<script setup>
import CardCharacter from '@/components/card/CardCharacter.vue';
import DragonBallService from '@/components/core/apis/dragonBall/DragonBallService.js';
import Repository from '@/components/core/models/Repository.js';
import { ref, onMounted } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

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
const totalPages =ref(1)
const currentPage = ref(props.page ? parseInt(props.page) : 1)
/* const router = useRouter() */

async function setCharacters(page = 1) {
  const characters = await apiCharacters.getCharacters(8, page)
  listCharacters.value = data.characters
  totalPages.value = data.totalPages
  currentPage.value = page
}
/* 
onMounted(() => {
  setCharacters(currentPage.value)
})

function changePage(page) {
  if (page > 0 && page <= totalPages.value) {
    router.push({ name: 'home', params: { page }})
  }
} */
</script>

<template>
  <div v-if="listCharacters" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mb-4">
    <div v-for="character in listCharacters" :key="character.id" class="col">
      <CardCharacter :name="character.name" :maxKi="character.maxKi" :race="character.race" :description="character.description"
        :image="character.image" />
    </div>
  </div>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <RouterLink to="/1">First 1</RouterLink>
      </li>
     <!--  <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <a class="page-link" @click.prevent="changePage(currentPage - 1)">Previous</a>
      </li>
      <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }">
        <a class="page-link" @click.prevent="changePage(page)">{{ page }}</a>
      </li>
      <li class="page-item" :class="{ disabled: currentPage === totalPages }">
        <a class="page-link" @click.prevent="changePage(currentPage + 1)">Next</a>
      </li> -->
    </ul>
  </nav>
</template>
