import { ref } from "vue"
import Character from "../../models/Character.js"
import Planets from "../../models/Planets.js"

export default class DragonBallService {
    #repo

    constructor(repository) {
        this.#repo = repository
    }

    async getCharacters(limit, page, query = '') {
        let data = ref()
        data = await this.#repo.get(limit, page, query)
        const characters = data.items.map((item) => {
            return new Character(item.id, item.name, item.maxKi, item.race, item.description, item.image)
        })
        return [characters, data.meta.totalPages, data.meta.currentPage]
    }

    async getPlanets(limit, page, query = '') {
        const data = await this.#repo.get(limit, page, query)
        const planets = data.items.map((item) => {
            return new Planets(item.id, item.name, item.isDestroyed, item.description, item.image)
        })
        return planets
    }
}