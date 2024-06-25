export default class Repository {
  constructor(uri) {
    this.uri = uri
  }

  getUri() {
    return this.uri
  }

  async get(limit) {
    try {
      if (limit) {this.uri += `?limit=${limit}`}
      const response = await fetch(this.uri)
      const data = await response.json()
      return data
    } catch (error) {
      throw new Error('Error loading DragonBall API')
    }
  }
}
