import { convertDate, generateImageUrl, calculatePopularity } from "./utils";

export const renderMovies = (movies, type_movie) => (`
<section class="movie">
   <h2>${type_movie.toUpperCase()}</h2>
   <div class="${type_movie}">
   ${movies.map(movie => renderMovie(movie)).join('')}
   </div>
</section>`
);

export const renderMovie = ({id, title, poster_path, vote_average, release_date}) => (`
<div class="movie">
<a href="#movieId=${id}">
    <img class="poster" src="${generateImageUrl(poster_path)}" alt="${title}" loading="lazy">
    </a>
    <span class="popularity">
        <span class="rate">${calculatePopularity(vote_average)}</span>

    </span>
    <div class="title">${title}</div>
    <div class="date">${convertDate(release_date)}</div>
</div>`);

export const renderMovieDetails = ({id, title, overview, release_date, backdrop_path, status, imdb_id, genres, homepage}) => (`
<section class="detail_container">
<div class="movie movie--full-width">
<a href="#movieId=${id}">
  <img class="detail_poster_img" src="${generateImageUrl(backdrop_path)}" alt="${title}" loading="lazy">
</a>
<div class="wrapper">
  <div class="title mb-15">${title}</div>
  <div class="date mb-15">${convertDate(release_date)}</div>
  <div class="detail_poster">
    <div class="overview mb-15">
      ${overview}
    </div>
    <div class="status mb-15">
      ${status}
    </div>
    <div class="imdb mb-15">
      <span class="heading">Imdb - </span>
      ${imdb_id}
    </div>
    <div class="tags">
      ${genres.map(({name}) => `<span class="tag">${name}</span>`).join('')}
    </div>
    <div class="homepage">
      <span class="heading">Website:</span>
      <a href="${homepage}" target="_blank">${homepage}</a>
    </div>
  </div>
</div>
</div>
</section>
`);

export const renderError = ({status_code, status_message}) => (`
<section>
    <div>
        <h2>Status code: ${status_code}</h2>
        <p>Status Message: ${status_message}</p>
    </div>
</section>
`);

export const renderSearchMovies = (movies) => (`
<section class="found">
   ${movies.map(movie => renderMovie(movie)).join('')}
</section>`
);