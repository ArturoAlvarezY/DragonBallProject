export default class Planets {
    img
    name
    id
    isDestroyed
    description

    constructor(id, name, isDestroyed, description, img) {
        this.name = name
        this.img = img
        this.id = id
        this.isDestroyed = isDestroyed
        this.description = description
    }

    getName() {
        return this.name
    }

    getImg() {
        return this.img
    }

    getIsDestroyed() {
        return this.isDestroyed
    }

    getId() {
        return this.id
    }

    getDescription() {
        return this.description
    }
}

