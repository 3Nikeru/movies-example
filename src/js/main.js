import {getMovies, getMovieDetails, getSearch} from './api';
export const {API_KEY}= process.env;

window.addEventListener('hashchange', () => {
    checkUrl();
});

function checkUrl(){
    const [hash, movieId] = location.hash.split('=');

    if(hash === '#movieId'){
        getMovieDetails(movieId);
    }else{
        getMovies('popular');
    }
}

checkUrl();

document.querySelector('#search').addEventListener('click', () =>{
    let input_value = document.querySelector('#site-search').value;
    console.log(input_value)
    getSearch(input_value);
});