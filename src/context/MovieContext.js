import PropTypes from "prop-types";
import { createContext, useState } from "react";
import { useQuery } from "react-query";

import movies from "../services/movie";

MovieProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const MovieContext = createContext({
  movies: [],
  options: {
    currentPage: 0,
    pageSize: 9,
    search: null,
    featured: null,
  },
  handleSearch: event => {},
  setOptions: value => {},
});

export default function MovieProvider(props) {
  const [options, setOptions] = useState({
    currentPage: 0,
    pageSize: 9,
    search: null,
    featured: null,
  });

  const { isLoading, isError, error, data, isFetching } = useQuery(
    ["allMovies", options],
    () => {
      const data = movies.getMovies({
        currentPage: options.currentPage + 1,
        perPage: options.pageSize,
        keyword: options.search,
        featured: options.featured,
      });

      return data;
    },
    {
      retry: false,
      refetchInterval: false,
      refetchOnMount: false,
      refetchIntervalInBackground: false,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );

  const handleSearch = event => {
    const value = event.target.value;

    setOptions(prev => ({
      ...prev,
      currentPage: 0,
      pageSize: 9,
      featured: null,
      search: value,
    }));
  };

  const movieContext = {
    isLoading: isLoading,
    isError: isError,
    error: error,
    isFetching: isFetching,
    movies: data,
    options: options,
    handleSearch: handleSearch,
    setOptions: setOptions,
  };

  return (
    <MovieContext.Provider value={movieContext}>
      {props.children}
    </MovieContext.Provider>
  );
}
