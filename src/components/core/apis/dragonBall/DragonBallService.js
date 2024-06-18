import Character from "../../models/Character.js"

export default class DragonBallService {
    #repo

    constructor(repository) {
        this.#repo = repository
    }

    async getCharacters() {
        const data = await this.#repo.get()
        

        const characters = data.items.map((item) => {
            return new Character(item.id, item.name, item.ki, item.race, item.description, item.image)
        })

        return characters
    }

    async getPlanets() {
        const data = await this.#repo.getById('Planets')

        const planets = data.DragonBall.item.map((item) => {
            return new Planet(item.name, item.image, item.id, item.isDestroyed)
        })

        return planets
    }
}
