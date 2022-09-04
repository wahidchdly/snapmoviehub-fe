import PropTypes from "prop-types";

Text.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  content: PropTypes.string.isRequired,
};

export default function Text(props) {
  return (
    <p style={props.style} className={props.className}>
      {props.content}
    </p>
  );
}
