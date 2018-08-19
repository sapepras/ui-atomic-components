import React from 'react';
import { css, cx } from 'emotion';
import * as style from '../../css';
import { productDetailChildPropTypes } from '../../PropTypes';
import Price from '../Price';

const droppedPrice = css`
  font-size: 0.75em;
  display: inline-block;
`;

const WasNow = props => {
  const {
    salePrice, listPrice, savings, firstPriceMessageText
   } = props;
  return (
    <div>
      <Price price={salePrice} color="red" />
      &nbsp;&nbsp;&nbsp;
      <span className={cx('list-price', droppedPrice)}>
        <Price price={listPrice} color="gray" strikethrough />
      </span>
      {!!savings && (
        <span>
          &nbsp;&nbsp;&nbsp;
          <span className={style.contentText}>Save {savings}</span>
        </span>
      )}
      {firstPriceMessageText && firstPriceMessageText.length > 0 && <div className={css.clearanceMsgStyle}>{firstPriceMessageText}</div>}
    </div>
  );
};

WasNow.propTypes = productDetailChildPropTypes;

export default WasNow;
