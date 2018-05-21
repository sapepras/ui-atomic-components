import React from "react";
import { productDetailChildPropTypes } from "../../PropTypes";
import * as css from "../../css";

const XXXX = ({ priceMessage }) => (
  <div>
    <div className={css.titleText} style={{ color: "#ee0000" }}>
      Our Price in Cart
    </div>
    <div className={css.contentText} style={{ color: "#7f7f7f" }}>
      {priceMessage}
    </div>
  </div>
);

XXXX.propTypes = productDetailChildPropTypes;

export default XXXX;
