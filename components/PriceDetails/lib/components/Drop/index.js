import React from "react";
import { productDetailChildPropTypes } from "../../PropTypes";
import PriceXed from "../PriceXed";
import Price from "../Price";
import * as css from "../../css";

const XXXX = () => (
  <div>
    <span style={{ fontSize: "25px", color: "#ee0000" }} className={css.titleText}>
      <Price price="$59.99" />
    </span>
    &nbsp;
    <span
      style={{
        fontSize: "18px",
        color: "#7f7f7f",
        textDecoration: "line-through"
      }}
      className={css.titleText}
    >
      <PriceXed price="99.99" />
    </span>
  </div>
);

XXXX.propTypes = productDetailChildPropTypes;

export default XXXX;
