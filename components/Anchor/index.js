import React from "react";
import PropTypes from "prop-types";
import style from "./anchor.css";

const Anchor = props => {
  const { ariarole, href, disabled } = props;
  let cname = style.common;
  if (disabled) {
    cname = style.disabled;
  } else {
    cname = style.common;
  }
  return (
    <a className={cname} role={ariarole} href={href}>
      {props.children}
    </a>
  );
};

Anchor.propTypes = {
  /** link to external site */
  href: PropTypes.string,
  /** aria role  */
  ariarole: PropTypes.oneOf(["link", "button"]),
  children: PropTypes.string,
  disabled: PropTypes.bool
};

Anchor.defaultProps = {
  ariarole: "link",
  disabled: false
};

export default Anchor;
