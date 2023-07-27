axios.defaults.headers.common["x-api-key"] = "api_key";
const url = 'https://api.thecatapi.com/v1/breeds';
axios.defaults.headers.common["x-api-key"] = "live_n1s7YtWElldkVXS9keSKQYZWhS34TNr45yJqh0E7gf9C9Nv0bvhGcHmFsOwjx9F3";
function fetchBreeds() {
    return axios.get(`${url}`)
  .then((response) => {
    if (!response) {
      throw new Error(response.statusText)
    }
 return response.json()
  }
 )
}
fetchBreeds().then((data) => console.log(data))
function fetchCatByBreed(breedId) {
return axios.get(`${url}/images/search?breed_ids=${breedId}`)
  .then((response) => {
    if (!response) {
      throw new Error(response.statusText)
    }
    return response.json()
  }
 )
}

 