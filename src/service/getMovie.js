import axios from "axios";
const baseURL = "https://api.themoviedb.org/3/";
const apiKey = "489da623344bbab06d9b195564a114b4";
export function getMovies(callback) {
  axios
    .get(`${baseURL}movie/popular?page=1&api_key=${apiKey}`)
    .then((movie) => callback(movie.data.results))
    .catch((error) => console.log(error));
}

export function getTopRatedMovies(callback) {
  axios
    .get(`${baseURL}movie/top_rated?page=1&api_key=${apiKey}`)
    .then((movie) => {
      callback(movie.data.results);
    })
    .catch((error) => console.log(error));
}

export function getNowPlayingMovies(callback) {
  axios
    .get(`${baseURL}movie/now_playing?page=1&api_key=${apiKey}`)
    .then((movies) => callback(movies.data.results))
    .catch((error) => console.log(error));
}

export function getUpcomingMovies(callback) {
  axios
    .get(`${baseURL}movie/upcoming?page=1&api_key=${apiKey}`)
    .then((movies) => callback(movies.data.results))
    .catch((error) => console.log(error));
}

export function getDetailMovie(id, callback, setLoading) {
  axios
    .get(`${baseURL}movie/${id}?api_key=${apiKey}`)
    .then((movie) => {
      callback(movie.data);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    })
    .catch((error) => console.log(error));
}

export function getSearchMovie(callback, search, setLoading) {
  axios
    .get(`${baseURL}search/movie?query=${search}&page=1&api_key=${apiKey}`)
    .then((movies) => {
      callback(movies.data.results);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    })
    .catch((error) => console.log(error));
}
