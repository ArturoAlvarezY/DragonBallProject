<script setup>
defineProps({
    name: {
        type: String,
        required: true
    },
    ki: {
        type: String,
        required: true
    },
    race: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="card">
        <img :src=image class="card-img-top" :alt=name>
        <div class="card-body">
            <h5 class="card-title">Name: {{ name }}</h5>
            <h5 class="card-title">Max Ki: {{ ki }}</h5>
            <h5 class="card-title">Raze: {{ race }}</h5>
            <h5 class="card-title">Description:</h5>
            <p class="card-text" hidden>{{ description }}</p>
        </div>
    </div>
</template>

<style scoped></style>
