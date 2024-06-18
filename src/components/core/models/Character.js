export default class Character {
    image
    name
    ki
    race
    description
    id

    constructor(id, name, ki, race, description, image) {
        this.name = name
        this.image = image
        this.ki = ki
        this.race = race
        this.description = description
        this.id = id
    }

    getName() {
        return this.name
    }

    getImge() {
        return this.image
    }

    getKi() {
        return this.ki
    }

    getRace() {
        return this.race
    }

    getDescription() {
        return this.description
    }

    getId() {
        return this.id
    }
}