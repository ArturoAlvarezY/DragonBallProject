import { ref } from "vue"
import Character from "../../models/Character.js"
import Planets from "../../models/Planets.js"

export default class DragonBallService {
    #repo

    constructor(repository) {
        this.#repo = repository
    }

    async getCharacters(limit) {
        let data = ref()
        if (limit) { data = await this.#repo.get(limit) }
        else { data = await this.#repo.get(8) }
        const characters = data.items.map((item) => {
            return new Character(item.id, item.name, item.maxKi, item.race, item.description, item.image)
        })
        return characters
    }

    async getPlanets() {
        const data = await this.#repo.get(20)
        const planets = data.items.map((item) => {
            return new Planets(item.id, item.name, item.isDestroyed, item.description, item.image)
        })
        return planets
    }
}
