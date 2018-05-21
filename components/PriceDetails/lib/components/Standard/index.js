import React from "react";
import { productDetailChildPropTypes } from "../../PropTypes";
import Price from "../Price";

const XXXX = props => {
  const { listPrice, ...remainingProps } = props;
  return (listPrice) ? <Price price={listPrice} {...remainingProps} /> : null;
};

XXXX.propTypes = productDetailChildPropTypes;

export default XXXX;
