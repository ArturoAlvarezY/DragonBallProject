export default class Planets {
    img
    name 
    id
    isDestroyed

    constructor(name, img, isDestroyed, id) {
        this.name = name
        this.img = img
        this.id = id
        this.isDestroyed = isDestroyed
    }

    getName () {
        return this.name
    }

    getImg () {
        return this.img
    }

    getIsDestroyed () {
        return this.isDestroyed
    }

    getId () {
        return this.id
    }
}

