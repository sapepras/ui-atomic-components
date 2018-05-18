import React from "react";
import { productDetailChildPropTypes } from "../../PropTypes";
import Price from "../Price";

const XXXX = props => {
  const { listPrice: value, ...remainingProps } = props;
  return <Price price={value} {...remainingProps} />;
};

XXXX.propTypes = productDetailChildPropTypes;

export default XXXX;
