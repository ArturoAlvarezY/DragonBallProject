<script setup>
import { ref } from 'vue';
import { useCharacters } from '@/stores/CharactersStore'

const props = defineProps({
    id: {
        type: Number,
        required: true
    },
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
    },
    favorite: {
        type: Boolean,
        required: true
    }
});

const flip = ref("")
const listCharacters = useCharacters()
const favoriteEstate = ref(props.favorite);

function setflip() {
    if (flip.value == "")
        flip.value = "cardFlip"
    else
        flip.value = ""
}

function setFavorite(id, name, maxKi, race, description, image) {
    let temp = false
    listCharacters.listCharacters.forEach(element => {
        if (element.id == id) {
            temp = true
            //QUITARLO DE EL ARRAY
        }
    })
    if (!temp) {
        listCharacters.listCharacters.push({
            id: id,
            name: name,
            maxKi: maxKi,
            race: race,
            description: description,
            image: image,
        })
        favoriteEstate.value = false
    }
}

function isFavorite(fav) {
    if (!fav)
        return "bi-heart"
    else
        return "bi-heart-fill"
}

</script>

<template>
    <div class="card bg-card position-relative" :class="flip">
        <div class="side">
            <a class="btn btn-trasparent front" @click="setFavorite(id, name, maxKi, race, description, image)"
                role="button"><i class="bi text-danger"
                    :class="{ 'bi-heart-fill': favoriteEstate == true }, { 'bi-heart': favoriteEstate == false }"></i></a>
            <img :src="image" class="card-img image-size-back" :alt=name>
            <div class="card-img-overlay">
                <img :src="image" class="image-size" :alt=name>
                <div class="position-absolute bottom-0 start-0 p-3">
                    <a class="m-0 p-0 btn btn-trasparent" @click="setflip"><strong>Name:</strong> {{ name }}</a>
                    <p class="m-0 p-0"><strong>Max Ki:</strong> {{ maxKi }}</p>
                    <p class="m-0 p-0"><strong>Raze:</strong> {{ race }}</p>
                    <p class="card-text" hidden>{{ description }}</p>
                </div>
            </div>
        </div>
        <div class="side back">
            <div class="position-absolute p-3">
                <p class="font-monospace btn btn-trasparent" @click="setflip">{{ description }}</p>
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

.cardFlip {
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

.front {
    position: absolute;
    z-index: 1000;
}
</style>
