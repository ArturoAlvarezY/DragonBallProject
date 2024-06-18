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
    <div class="card bg-card">
        <img :src="image" class="image-size" :alt=name>
        <div class="card-body">
            <p class="m-0 p-0"><strong>Name:</strong> {{ name }}</p>
            <p class="m-0 p-0"><strong>Max Ki:</strong> {{ maxKi }}</p>
            <p class="m-0 p-0"><strong>Raze:</strong> {{ race }}</p>
            <p class="card-text" hidden>{{ description }}</p>
        </div>
    </div>
</template>


<style scoped>
.bg-card {
    background-color: #A9AAAD;
    height: 550px;
    
}

.image-size {
    height: 450px;
}
</style>
