<script setup>
defineProps({
    name: {
        type: String,
        required: true
    },
    maxKi: {
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
    <div class="card h-100" style="background-image: url(image);">
        <img :src=image class="card-img-top mx-auto d-block" :alt=name>
        <div class="card-body">
            <p class="m-0 p-0">Name: {{ name }}</p>
            <p class="m-0 p-0">Max Ki: {{ maxKi }}</p>
            <p class="m-0 p-0">Raze: {{ race }}</p>
            <p class="card-text" hidden>{{ description }}</p>
        </div>
    </div>
</template>

<style scoped>
</style>
