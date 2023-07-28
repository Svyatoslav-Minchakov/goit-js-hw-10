import { fetchBreeds} from "./cat-api";
import './common.css';
import { Report } from 'notiflix/build/notiflix-report-aio';
import SlimSelect from 'slim-select'
import 'slim-select/dist/slimselect.css';



const pageSelect = document.querySelector('.breed-select');
const catInfoBox = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');

pageSelect.addEventListener('change', getCatByBreed);


let arr = [];
fetchBreeds()
.then(data => {
    data.forEach(cat => {
      arr.push({text: cat.name, value: cat.id});
    });
    new SlimSelect({
        select: pageSelect,
        data: arr
    });
}).catch(() => Report.failure('Oops! Something went wrong!'));
    

function getCatByBreed(event) {
    event.preventDefault()
    loader.classList.remove('is-hidden')
    catInfoBox.classList.remove('is-hidden');
    const selectedCatName = event.target.value;
  
    fetchBreeds().then(data => {
        
        const selectedCat = data.find(cat => {
            return cat.id === selectedCatName;
        });
      
        const catInfo = `
      <img src="${selectedCat.image.url}" alt="${selectedCat.name}" width="300" >
      <div class="text-box">
        <h2>${selectedCat.name}</h2>
        <p>${selectedCat.description}</p>
        <p><b>Temperament:</b> ${selectedCat.temperament}</p>
      </div>
      `;
        catInfoBox.innerHTML = catInfo;
        loader.classList.add('is-hidden');
    }).catch(() => {
        Report.failure('Oops! Something went wrong!');
        loader.classList.add('is-hidden');
        catInfoBox.classList.add('is-hidden');
    })

    
}