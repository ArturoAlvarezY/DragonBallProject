

export default classDragonBollService {
    #repo

    constructor(repository) {
        this.#repo = Repository
    }

    async getCharacter() {
        const data = await this.#repo.getByType('character')
        const character = data.DragonBoll.map(DragonBoll) => {
            return new character(DragonBoll.name, DragonBoll.img, DragonBoll.name, DragonBoll.id, DragonBoll.description, DragonBoll.race)
        }
    }
}