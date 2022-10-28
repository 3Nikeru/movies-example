import {generateUrls} from './utils';

//Popular
fetch(generateUrls('/movie/popular'))
.then(res => res.json())
.then(data => {
    console.log('data: ',  data);
    const movies = data.results.map(movie =>(`
    <div class="movie">
    <img src="https://image.tmdb.org/t/p/w200/${movie.poster_path}" alt="${movie.original_title}" />
        <div class="title">
        ${movie.original_title}
        </div>
        <div class="date">${movie.release_date}</div>
        <div class="popularity">${Math.round(movie.popularity)}</div>
    </div>
    `
    
    
    )).join('');

    document.querySelector('.popular').innerHTML = movies;
})

