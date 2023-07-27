import axios from "axios";
const url = 'https://api.thecatapi.com/v1';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
axios.defaults.headers.common["x-api-key"] = "live_n1s7YtWElldkVXS9keSKQYZWhS34TNr45yJqh0E7gf9C9Nv0bvhGcHmFsOwjx9F3";
export function fetchBreeds() {
    return axios.get(`${url}/breeds`)
  .then((response) => {
    if (!response) {
      throw new Error(response.statusText)
    }
 return response.json()
  }
 )
}

export function fetchCatByBreed(breedId) {
    return axios.get(`${url}/images/search?breed_ids=${breedId}`)
  .then((response) => {
    if (!response) {
      throw new Error(response.statusText)
    }
    return response.json()
  }
 )
}


