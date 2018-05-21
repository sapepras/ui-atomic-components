import React from "react";
// import { productDetailChildPropTypes } from "../../PropTypes";
import * as css from "../../css";

const XXXX = ({ priceMessage }) => (
  <div>
    <div className={css.titleText}>For special pricing call</div>
    <div className={css.contentText}>{priceMessage}</div>
  </div>
);

XXXX.propTypes = null; // productDetailChildPropTypes;

export default XXXX;
