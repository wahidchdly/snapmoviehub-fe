import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import movies from "../services/movie";

import { MovieContext } from "../context/MovieContext";

import { useQuery } from "react-query";

import MovieList from "../components/movies/MovieList";

import LoadingSpinner from "../components/partials/LoadingSpinner";
import Text from "../components/partials/Text";

import frame from "../assets/images/frame.png";
import classes from "../assets/css/pages/home.module.css";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  const movieCtx = useContext(MovieContext);
  const { setOptions } = movieCtx;

  const {
    isError,
    error,
    data: featuredMovies,
  } = useQuery(["featuredMovies", true], () => {
    const data = movies.getMovies({
      featured: true,
    });

    return data;
  });

  useEffect(() => {
    if (featuredMovies) {
      setOptions(prev => ({ ...prev, search: null }));
      setIsLoading(false);
    }
  }, [featuredMovies, setOptions]);

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
        <title>Home</title>
      </Helmet>

      <div className={classes.imgWrapper}>
        <img className={classes.frame} src={frame} alt="vector1" />
      </div>

      <div className={classes["movie-section"]}>
        <MovieList movies={featuredMovies} />
      </div>
      <div className={classes.actions}>
        <Link to="/movies">
          <button>
            <Text className={classes.buttonText} content="View All" />
          </button>
        </Link>
      </div>
    </section>
  );
}
