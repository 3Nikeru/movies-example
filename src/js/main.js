import {getMovies, getMovieDetails} from './api';
import { renderSearchMovies } from './templates';
export const {API_KEY}= process.env;

window.addEventListener('hashchange', (e) => {
    checkUrl();
});

function checkUrl(){
    const [hash, movieId] = location.hash.split('=');

    if(hash === '#movieId'){
        getMovieDetails(movieId);
    }else{
        getMovies('top_rated');
    }
}

checkUrl();

fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=legend`)
.then(res => res.json())
.then(data =>{
    console.log('search', data);
    document.querySelector('#root').innerHTML = renderSearchMovies(data.results);
})