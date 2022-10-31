import {generateApiUrls} from './utils';
import {renderMovie} from './templates';

export const getMovies = (path, selector) =>{
    fetch(generateApiUrls(path))
    .then(res => res.json())
    .then(data => {
        console.log('results', data.results);

        const movies = data.results.map(movie => renderMovie(movie)).join();
        document.querySelector(selector).innerHTML = movies;
    })
}