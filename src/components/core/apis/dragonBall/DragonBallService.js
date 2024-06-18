import Character from "../../models/Character.js"
import Repository from "../../models/Repository.js"

export default class DragonBallService {
    #repo

    constructor(repository) {
        this.#repo = Repository
    }

    async getCharacter() {
        const data = await this.#repo.getById('Character')

        const character = data.DragonBall.item.map((item) => {
            return new Character(item.name, item.img, item.id, item.ki, item.race, item.description)
        })

        return character
    }

    async getPlanets() {
        const data = await this.#repo.getById('Planets')

        const planets = data.DragonBall.item.map((item) => {
            return new Planet(item.name, item.img, item.id, item.isDestroyed)
        })

        return planets
    }
}
