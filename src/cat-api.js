import axios from "axios";
import { Report } from 'notiflix/build/notiflix-report-aio';

const url = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common["x-api-key"] = "live_va9XKHscGT4RevWYUOLP7a6rSkkTsPumuRTgFu6wZeA3teHwL3587hUsRZ2lsa4t";

export function fetchBreeds() {
    return axios.get(`${url}/breeds`)
        .then(response => {
            if (response.status !== 200) {
                throw new Error(response.statusText)
            }
            return response.data;
        }).catch(() => Report.failure('Oops! Something went wrong!'));      
}




