import { useEffect, useContext, useState } from "react";
import { Helmet } from "react-helmet-async";

import { MovieContext } from "../context/MovieContext";

import { Pagination } from "@mui/material";

import LoadingSpinner from "../components/partials/LoadingSpinner";
import MovieList from "../components/movies/MovieList";
import ScrollButton from "../components/partials/ScrollButton";

import classes from "../assets/css/pages/movies.module.css";

export default function MoviesPage() {
  const [isLoading, setIsLoading] = useState(true);

  const movieCtx = useContext(MovieContext);

  const { isError, error, options, movies, setOptions } = movieCtx;

  const handleChange = (event, value) => {
    setOptions(prev => ({ ...prev, currentPage: value - 1 }));

    window.scrollTo(0, 200);
  };

  const totalPage = Math.ceil(
    movies?.statistics?.totalData / options?.pageSize
  );

  useEffect(() => {
    if (movies) {
      setIsLoading(false);
    }
  }, [movies]);

  if (isLoading) {
    return (
      <section style={{ height: "90vh" }}>
        <LoadingSpinner />
      </section>
    );
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <section>
      <Helmet>
        <title>All Movies</title>
      </Helmet>

      <h1>Movie information hub</h1>
      <div className={classes["movie-section"]}>
        <MovieList page="movies" movies={movies} />
      </div>

      {totalPage > 1 && (
        <div className={classes.actions}>
          <Pagination
            page={options?.currentPage + 1}
            onChange={handleChange}
            count={totalPage}
            color="primary"
          />
        </div>
      )}
      <ScrollButton />
    </section>
  );
}
