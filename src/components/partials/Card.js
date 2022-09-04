import PropTypes from "prop-types";
import classes from "../../assets/css/partials/Card.module.css";

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Card(props) {
  return <div className={classes.card}>{props.children}</div>;
}
