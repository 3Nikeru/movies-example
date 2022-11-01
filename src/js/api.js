import {generateApiUrls} from './utils';
import {renderMovies} from './templates';

export const getMovies = path =>{
    fetch(generateApiUrls(path))
    .then(res => res.json())
    .then(data => {
        console.log('results', data.results);

        document.querySelector('#root').innerHTML = renderMovies(data.results, path);
    })
}