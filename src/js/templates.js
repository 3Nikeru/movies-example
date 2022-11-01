import { convertDate, generateImageUrl, calculatePopularity, generateTitle } from "./utils";

export const renderMovies = (movies, type_movie) => (`
<section class="movie">
   <h2>${generateTitle(type_movie)}</h2>
   <div class="${type_movie}">
   ${movies.map(movie => renderMovie(movie)).join('')}
   </div>
</section>`
);


export const renderMovie = ({title, poster_path, vote_average, release_date}) => (`
<div class="movie">
    <img class="poster" src="${generateImageUrl(poster_path)}" alt="${title}" loading="lazy">
    <span class="popularity">
        <span class="rate">${calculatePopularity(vote_average)}</span>

    </span>
    <div class="title">${title}</div>
    <div class="date">${convertDate(release_date)}</div>
</div>`);