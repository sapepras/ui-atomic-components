import React from "react";
import { productDetailChildPropTypes } from "../../PropTypes";
import Price from "../Price";
import * as css from "../../css";

const XXXX = props => {
  const { minPriceRange = "", maxPriceRange = "", priceRange = "", priceMessage = "" } = props; // eslint-disable-line object-curly-newline
  let minPrice = null;
  let maxPrice = null;
  if (minPriceRange.trim().length > 0 && maxPriceRange.trim().length > 0) {
    minPrice = minPriceRange;
    maxPrice = maxPriceRange;
  } else {
    // eslint-disable-next-line no-useless-escape
    [minPrice, maxPrice] = priceRange.replace(/[^\d\.-]/g, "").split("-");
  }
  if (!maxPrice || !minPrice) {
    return null;
  }

  return (
    <div>
      <Price price={minPrice} color="red" />
      &nbsp;<span style={{ color: "#ee0000" }}>-</span>&nbsp;
      <Price price={maxPrice} color="red" />
      <div className={css.contentText}>{priceMessage}</div>
    </div>
  );
};

XXXX.propTypes = productDetailChildPropTypes;

export default XXXX;
