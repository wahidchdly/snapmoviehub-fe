import PropTypes from "prop-types";
import MovieItem from "./MovieItem";
import classes from "../../assets/css/movies/MovieList.module.css";

MovieList.propTypes = {
  movies: PropTypes.object.isRequired,
};

export default function MovieList(props) {
  return (
    <ul className={classes.list}>
      {props.movies.data.map((movie, i) => (
        <MovieItem
          key={i}
          id={movie.id}
          image={movie.image}
          name={movie.name}
          description={movie.description}
          casts={movie.casts_v}
          categories={movie.categories_v}
          page={props.page}
        />
      ))}
    </ul>
  );
}
