export default class Character {
    img
    name 
    ki
    race
    description
    id

    constructor(name, img, ki, race, description, id) {
        this.name = name
        this.img = img
        this.ki = ki
        this.race = race
        this.description = description
        this.id = id
    }

    getName () {
        return this.name
    }

    getImg () {
        return this.img
    }

    getKi () {
        return this.ki
    }

    getRace () {
        return this.race
    }

    getDescription () {
        return this.description
    }

    getId () {
        return this.id
    }
}