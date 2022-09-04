import axios from "axios";
import endpoints from "../utils/endpoint";

const getMovies = async params => {
  const url = endpoints.SEARCH_MOVIE;

  const { data } = await axios.post(url, null, {
    params,
  });

  return data;
};

const movieAPI = {
  getMovies,
};

export default movieAPI;
