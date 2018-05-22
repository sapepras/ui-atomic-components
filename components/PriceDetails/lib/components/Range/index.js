import React from "react";
import { productDetailChildPropTypes } from "../../PropTypes";
import Price from "../Price";

const XXXX = props => {
  const { minPriceRange = "", maxPriceRange = "", priceRange = "" } = props; // eslint-disable-line object-curly-newline
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
      <Price price={minPrice} />
      &nbsp;<span>-</span>&nbsp;
      <Price price={maxPrice} />
    </div>
  );
};

XXXX.propTypes = productDetailChildPropTypes;

export default XXXX;
