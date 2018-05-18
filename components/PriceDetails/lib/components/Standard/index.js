import React from "react";
import { productDetailChildPropTypes } from "../../PropTypes";
import Price from "../Price";

const XXXX = props => {
  const { listPrice, ...remainingProps } = props;
  return <Price price={listPrice} {...remainingProps} />;
};

XXXX.propTypes = productDetailChildPropTypes;

export default XXXX;
