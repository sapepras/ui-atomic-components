import React from "react";
import { css } from "emotion";
import * as style from "../../css";
import { productDetailChildPropTypes } from "../../PropTypes";
import Price from "../Price";

const droppedPrice = css`
  font-size: 0.75em;
  display: inline-block;
`;

const XXXX = props => {
  const { salePrice, listPrice, savings } = props;
  return (
    <div>
      <Price price={salePrice} color="red" />
      &nbsp;&nbsp;&nbsp;
      <span className={droppedPrice}>
        <Price price={listPrice} color="gray" strikethrough />
      </span>
      {!!savings && (
        <span>
          &nbsp;&nbsp;&nbsp;
          <span className={style.contentText} style={{ color: "#585858" }}>
            Save {savings}
          </span>
        </span>
      )}
      <div />
    </div>
  );
};

XXXX.propTypes = productDetailChildPropTypes;

export default XXXX;
