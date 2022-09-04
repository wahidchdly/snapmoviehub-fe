import PropTypes from "prop-types";

// icons
import { Icon } from "@iconify/react";

Iconify.propTypes = {
  url: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
};

export default function Iconify({ url, icon }) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <Icon icon={icon} style={{ fontSize: "21px", color: "white" }} />
    </a>
  );
}
