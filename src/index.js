import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "api_key";
const url = `https://api.thecatapi.com/v1/breeds`;
const api_key = "live_n1s7YtWElldkVXS9keSKQYZWhS34TNr45yJqh0E7gf9C9Nv0bvhGcHmFsOwjx9F3"
function fetchBreeds() {
 return fetch(url,{headers: {
      'x-api-key': api_key
    }})
  .then((response) => {
    if (!response) {
      throw new Error(response.statusText)
    }
    return response.json()
  }
 )
}

 fetchBreeds().then((data) => {
   
   //filter to only include those with an `image` object
     console.log(data)}).catch(err => console.log(err))