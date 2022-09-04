import PropTypes from "prop-types";

import { Link, useLocation } from "react-router-dom";

import { useContext } from "react";
import { MovieContext } from "../../context/MovieContext";
import debounce from "lodash/debounce";

import Iconify from "../partials/Iconify";
import Text from "../partials/Text";

import classes from "../../assets/css/layout/Layout.module.css";
import Logo from "../../assets/images/logo.png";

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Layout(props) {
  const location = useLocation();

  const movieCtx = useContext(MovieContext);
  const handleSearch = movieCtx.handleSearch;

  return (
    <>
      <header className={classes.header}>
        <Link to="/">
          <div>
            <img src={Logo} alt="Logo" />
            <Text content="Movies" />
          </div>
        </Link>
        {location.pathname === "/movies" && (
          <input
            type="text"
            placeholder="Search title"
            onChange={debounce(handleSearch)}
          />
        )}
      </header>
      <main className={classes.main}>{props.children}</main>
      <footer className={classes.footer}>
        <div className={classes.lorem}>
          <Text
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua"
          />
        </div>
        <div className={classes.copyLink}>
          <div className={classes.copyright}>
            <Text content="Copyright @ Snapmoviehub 2022" />
          </div>
          <div className={classes.socmedLinks}>
            <Iconify
              url="https://www.facebook.com/snaphuntjobs"
              icon="brandico:facebook"
            />
            <Iconify
              url="https://www.linkedin.com/company/snaphunt/"
              icon="brandico:linkedin"
            />
            <Iconify
              url="https://twitter.com/snaphuntjobs/"
              icon="brandico:twitter-bird"
            />
            <Iconify
              url="https://www.instagram.com/snaphuntjobs/"
              icon="icomoon-free:instagram"
            />
          </div>
        </div>
      </footer>
    </>
  );
}
