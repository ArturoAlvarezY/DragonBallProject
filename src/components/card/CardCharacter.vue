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
});
</script>

<template>
    <div class="card bg-card position-relative">
        <div class="side">
            <img :src="image" class="card-img image-size-back" :alt=name>
            <div class="card-img-overlay">
                <img :src="image" class="image-size" :alt=name>
                <div class="position-absolute bottom-0 start-0 p-3">
                    <p class="m-0 p-0"><strong>Name:</strong> {{ name }}</p>
                    <p class="m-0 p-0"><strong>Max Ki:</strong> {{ maxKi }}</p>
                    <p class="m-0 p-0"><strong>Raze:</strong> {{ race }}</p>
                    <p class="card-text" hidden>{{ description }}</p>
                </div>
            </div>
        </div>
        <div class="side back">
            <div class="position-absolute p-3">
                <p class="font-monospace">{{ description }}</p>
            </div>
        </div>
    </div>
</template>


<style scoped>
.bg-card {
    background-color: #A9AAAD;
    height: 550px;
    background-position: center;
    background-size: cover;
    border: 0;
}

.image-size {
    width: 100%;
    height: 100%;
    min-height: 400px;
    max-height: 400px;
    object-position: center center;
    object-fit: contain;
}

.image-size-back {
    position: absolute;
    top: 20px;
    width: 100%;
    height: 100%;
    min-height: 400px;
    max-height: 450px;
    object-position: center center;
    object-fit: contain;
    opacity: 0.4;
    filter: brightness(0.2);
}

.card {
    transform-style: preserve-3d;
    transition: all 1s ease-in-out;
}

.card:hover {
    transform: rotateY(180deg);
}

.card .side {
    backface-visibility: hidden;
    border-radius: 6px;
    height: 100%;
    position: absolute;
    overflow: hidden;
    width: 100%;
}

.card .back {
    transform: rotateY(180deg);
}
</style>
