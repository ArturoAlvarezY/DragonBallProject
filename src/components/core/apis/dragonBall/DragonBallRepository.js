import router from "@/router";
import Character from "@/components/core/models/Character.js";
import Planets from "@/components/core/models/Planets.js";

export class DragonBallRepository {
    async fetchFromApi(query, find) {
        try {
          let uri = this.uri
          if (query) uri += `&${query}=${find}`
          const response = await fetch(uri)
          const data = await response.json()
          return data
        } catch (error) {
          throw new Error('Error API')
        }
      }
}