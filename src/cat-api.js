import axios from "axios";
const url = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common["x-api-key"] = "live_va9XKHscGT4RevWYUOLP7a6rSkkTsPumuRTgFu6wZeA3teHwL3587hUsRZ2lsa4t";

export function fetchBreeds() {
    return axios.get(`${url}/breeds`)
   .then(response => {
            return response.data;
        });      
}




