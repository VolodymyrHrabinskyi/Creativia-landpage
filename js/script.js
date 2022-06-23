// const numberOfFilms = prompt("How many films did you see?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("One of the last seen film", ""),
  b = prompt("rate of this film", ""),
  c = prompt("One of the last seen film", ""),
  d = prompt("rate of this film", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
