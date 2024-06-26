<script setup>

// Agregar funcionalidad al botón de editar
const name = newCard.querySelector('.edit-card-name');
const maxKi = newCard.querySelector('.edit-card-maxKi');
const race = newCard.querySelector('.edit-card-race');
const description = newCard.querySelector('.edit-card-description');

editButton.addEventListener('click', function () {
    editForm.style.display = 'flex';
    editInput.value = cardNameElement.textContent // load name in input
});

editForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const newCardName = editInput.value.trim()
    // trim() method used to remove whitespace from both ends of a string, 
    // eg: '   123   ' -> '123'

    if (newCardName) {
        cardNameElement.textContent = newCardName

        let cards = JSON.parse(localStorage.getItem('cards')) || [];
        cards = cards.map(card => {
           
            if (card.id === cardId) {
                return { ...card, name: newCardName }
                // ... is spread operator that is creating a copy of an object with updated or additional properties (in our case we are updating just team.name)
            }
            return card
        });
        localStorage.setItem('cards', JSON.stringify(cards));
    }

    editForm.style.display = 'none'
})

</script>

<template>

</template>
<styles lang="scss"></styles>
