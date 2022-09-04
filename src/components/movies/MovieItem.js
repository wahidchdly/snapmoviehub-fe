import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import Text from "../partials/Text";
import Card from "../partials/Card";
import classes from "../../assets/css/movies/MovieItem.module.css";

import ellipse from "../../assets/images/ellipse.png";
import imgTemplate from "../../assets/images/img-template.png";

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  casts: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  page: PropTypes.string,
};

export default function MovieItem(props) {
  const mainCasts = props.casts.filter(cast => cast.main_role === true);

  return (
    <li className={classes.item}>
      <Link to={`/movies/${props.id}`}>
        <Card>
          <div className={classes.image}>
            <img
              crossOrigin="anonymous"
              src={props.image ? props.image : imgTemplate}
              alt={props.name}
            />
          </div>
          <div className={classes.content}>
            <h3>{props.name ? props.name : "Movie Title"}</h3>
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              className={classes.reactMarkDown}
            >
              {props.description}
            </ReactMarkdown>
          </div>
          <div className={classes.actorBox}>
            {props.page === "movies" &&
              mainCasts.map((cast, i) => (
                <div key={i} className={classes.actor}>
                  <img
                    crossOrigin="anonymous"
                    src={cast.image ? cast.image : ellipse}
                    alt="Ellipse"
                  />
                  <Text content={cast.name ? cast.name : "Actor Name"} />
                </div>
              ))}
          </div>
        </Card>
      </Link>
    </li>
  );
}
