export const API_URL = "https://snapmoviehub-be.herokuapp.com";

const endpoints = {
  // Casts-Characters
  CAST: API_URL + "/api/v1/casts-characters/casts",
  CHARACTER: API_URL + "/api/v1/casts-characters/characters",
  SEARCH_CAST_OR_CHARACTER: API_URL + "/api/v1/casts-characters/search",

  // Categories
  CATEGORIES: API_URL + "/api/v1/categories",
  SEARCH_CATEGORIES: API_URL + "/api/v1/categories/search",
  MOVIE_CATEGORIES: API_URL + "/api/v1/categories/movie",

  // Images
  IMAGES: API_URL + "/api/v1/images",
  SEARCH_IMAGES: API_URL + "/api/v1/images/search",

  // Movie
  MOVIES: API_URL + "/api/v1/movies",
  SEARCH_MOVIE: API_URL + "/api/v1/movies/search",
};

export default endpoints;
