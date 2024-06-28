import router from "@/router"

export default class Repository {
  constructor(uri) {
    this.uri = uri
  }

  getUri() {
    return this.uri
  }

  async get(limit,page, query = '') {
    try {
      let uri = this.uri
      uri += `?limit=${limit}`
      if (page) uri += `&page=${page}`
      if (query) uri += `&query=${query}`
      const response = await fetch(uri)
      const data = await response.json()
      return data
    } catch (error) {
      throw new Error('Error loading API')
    }
  }
}
