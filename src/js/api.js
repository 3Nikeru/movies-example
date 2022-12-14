import {generateApiUrls, generateSearchUrl} from './utils';
import {renderMovies, renderMovieDetails, renderError, renderSearchMovies} from './templates';

export const getMovies = path =>{
    fetch(generateApiUrls(path))
    .then(res => res.json())
    .then(data => {
        const root = document.querySelector('#root');

        if(data.success === false){
            root.innerHTML= renderError(data);
        }else{
            root.innerHTML = renderMovies(data.results, path);
        }
    })
}

export const getMovieDetails = path =>{
    fetch(generateApiUrls(path))
    .then(res => res.json())
    .then(data => {
        const root = document.querySelector('#root');

        if(data.success === false){
            root.innerHTML= renderError(data);
        }else{
            root.innerHTML = renderMovieDetails(data);
        }
    });
}

export const getSearch = path =>{
    fetch(generateSearchUrl(path))
    .then(res => res.json())
    .then(data =>{
        console.log('search', data);
        document.querySelector('#root').innerHTML = renderSearchMovies(data.results);   
    });
}