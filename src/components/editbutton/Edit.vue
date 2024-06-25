
<script setup>
// Agregar funcionalidad al botón de editar
const editButton = newTeamCard.querySelector('.edit-team-name');
const editForm = newTeamCard.querySelector('.edit-team-name-container');
const editInput = newTeamCard.querySelector('.editInput');
const teamNameElement = newTeamCard.querySelector('.team-name');

editButton.addEventListener('click', function () {
    editForm.style.display = 'flex';
    editInput.value = teamNameElement.textContent // load name in input
});

editForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const newTeamName = editInput.value.trim()
    // trim() method used to remove whitespace from both ends of a string, 
    // eg: '   123   ' -> '123'

    if (newTeamName) {
        teamNameElement.textContent = newTeamName

        let teams = JSON.parse(localStorage.getItem('teams')) || [];
        teams = teams.map(team => {
            // teams.map creates a new array
            if (team.id === teamId) {
                return { ...team, name: newTeamName }
                // ... is spread operator that is creating a copy of an object with updated or additional properties (in our case we are updating just team.name)
            }
            return team
        });
        localStorage.setItem('teams', JSON.stringify(teams));
    }

    editForm.style.display = 'none'
})





</script>

<template>

</template>
<styles lang="scss">
</styles>
