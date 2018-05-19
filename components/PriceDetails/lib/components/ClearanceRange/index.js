import React from "react";
import { productDetailChildPropTypes } from "../../PropTypes";
import Price from "../Price";
import * as css from "../../css";

const XXXX = () => (
  <div>
    <div style={{ fontSize: "25px", color: "#ee0000" }} className={css.titleText}>
      <Price price="$99.99" /> - <Price price="$1049.99" />
    </div>
  </div>
);

XXXX.propTypes = productDetailChildPropTypes;

export default XXXX;
