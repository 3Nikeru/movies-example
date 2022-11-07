import {getMovies, getMovieDetails, getSearch} from './api';
export const {API_KEY}= process.env;

window.addEventListener('hashchange', () => {
    checkUrl();
});

function checkUrl(){
    const [hash, query] = location.hash.split('=');

    if (hash === "#search") {
        getSearch(query);
    } else if(hash === '#movieId') {
        getMovieDetails(query);
    } else {
        getMovies('popular');
    }
}

checkUrl();

document.querySelector('#search').addEventListener('click', () =>{
    let input_value = document.querySelector('#site-search').value;
    window.location.hash = `search=${input_value}`;
    console.log(input_value);
    getSearch(input_value);
});