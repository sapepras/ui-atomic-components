import React from "react";
import { css } from "emotion";
import { productDetailChildPropTypes } from "../../PropTypes";
import Price from "../Price";

const droppedPrice = css`
  font-size: 0.75em;
  display: inline-block;
`;

const XXXX = props => {
  const { salePrice, listPrice } = props;
  return (
    <div>
      <Price price={salePrice} color="red" />
      &nbsp;&nbsp;&nbsp;
      <span className={droppedPrice}>
        <Price price={listPrice} color="gray" strikethrough />
      </span>
      <div />
    </div>
  );
};

XXXX.propTypes = productDetailChildPropTypes;

export default XXXX;
