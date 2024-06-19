import Repository from '../../models/repository'
export default class DragonBollRepository extends Repository {
    constructor(uri) {
        super(uri)
    }
    async getByName(id) {
        try {
            const response = await fetch(this.uri + id)
            const data = await response.json()
                return data
            
        } catch (error) {
            throw new Error('Error loading DragonBoll API')
    }
}
}