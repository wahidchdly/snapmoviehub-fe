import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import ReactMarkdown from "react-markdown";
import Text from "../components/partials/Text";
import rehypeRaw from "rehype-raw";
import movies from "../services/movie";
import get from "lodash/get";
import { Helmet } from "react-helmet-async";

import LoadingSpinner from "../components/partials/LoadingSpinner";
import classes from "../assets/css/pages/ViewMoviePage.module.css";

import ScrollButton from "../components/partials/ScrollButton";

export default function ViewMoviePage() {
  const { id } = useParams();

  const viewMovie = useQuery(
    ["view-movie", id],
    () => {
      const data = movies.getMovies({
        id: id,
      });

      return data;
    },
    {
      retry: false,
      refetchInterval: false,
      refetchOnMount: false,
      refetchIntervalInBackground: false,
      refetchOnWindowFocus: false,
    }
  );

  const categories = get(viewMovie, "data.data[0].categories_v");
  const casts = get(viewMovie, "data.data[0].casts_v");

  if (viewMovie.isLoading) {
    return (
      <section style={{ height: "90vh" }}>
        <LoadingSpinner />
      </section>
    );
  }

  return (
    <section>
      <Helmet>
        <title>{get(viewMovie, "data.data[0].name")}</title>
      </Helmet>

      <div className={classes.imageContainer}>
        <img
          className={classes.image}
          crossOrigin="anonymous"
          src={get(viewMovie, "data.data[0].image")}
          alt={get(viewMovie, "data.data[0].name")}
        />
      </div>

      <div className={classes.movieContent}>
        <h1>{get(viewMovie, "data.data[0].name")}</h1>

        <ul>
          {categories?.map((movie, i) => (
            <li key={i}>{movie.name}</li>
          ))}
        </ul>
      </div>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        className={classes.reactMarkDown}
      >
        {get(viewMovie, "data.data[0].description")}
      </ReactMarkdown>
      <div className={classes.castMainContainer}>
        <div>
          <h1>Cast</h1>
          <ul className={classes.castBox}>
            {casts?.map((cast, i) => (
              <li key={i} className={classes.cast}>
                <img
                  crossOrigin="anonymous"
                  src={cast.image}
                  alt={cast.character}
                />
                <div>
                  <Text content={cast.name ? cast.name : "Original Name"} />
                  <Text
                    content={cast.character ? cast.character : "Character Name"}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ScrollButton />
    </section>
  );
}
