import React from "react";
import PropTypes from "prop-types";
import style from "./anchor.css";

const Anchor = props => {
  const { ariarole, href, auid, atype, disabled } = props; // eslint-disable-line
  let cname = style.inlineAnchor;
  if (atype === "inline") {
    cname = style.inlineAnchor;
  } else {
    cname = style.iconText;
  }

  return (
    <a data-auid={auid} className={cname} disabled={disabled} role={ariarole} href={href}>
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
  disabled: PropTypes.bool,
  auid: PropTypes.string.isRequired,
  atype: PropTypes.oneOf(["inline", "icontext"])
};

Anchor.defaultProps = {
  ariarole: "link",
  disabled: false,
  atype: "inline"
};

export default Anchor;
