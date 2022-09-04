import React, { useState } from "react";

import { Icon } from "@iconify/react";

import classes from "../../assets/css/partials/ScrollButton.module.css";

export default function ScrollButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      onClick={scrollToTop}
      className={classes.scrollButton}
      style={{
        display: visible ? "block" : "none",
      }}
    >
      <Icon icon="bi:arrow-up" style={{ fontSize: "21px", color: "white" }} />
    </button>
  );
}
