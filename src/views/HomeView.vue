<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import Card from '../components/card/Card.vue'
</script>

<template>
  <main>
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col">
        <Card name="Goku" ki="10000" raze="Sajayin" description="Description"
          image="https://imgs.search.brave.com/fWNyQ2cf5_ixlSYnGSOaqjQchtbyNWm584EdTBac3mc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMi9Hb2t1/LVBORy1IRC5wbmc" />
      </div>
    </div>
    <TheWelcome />
  </main>
</template>
