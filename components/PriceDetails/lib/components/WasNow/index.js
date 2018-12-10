import React from 'react';
import { css, cx } from 'emotion';
import * as style from '../../css';
import { productDetailChildPropTypes } from '../../PropTypes';
import Price from '../Price';

const droppedPrice = css`
  font-size: 0.75em;
  display: inline-block;
  margin-left: 0.5rem;
  @media only screen and (min-width: 768px) {
    margin-left: 0;
  }
  @media only screen and (min-width: 1349px) {
    margin-left: 0.5rem;
  }
`;

const WasNow = props => {
  const { salePrice, listPrice, savings, firstPriceMessageText, ...remainingProps } = props;
  return (
    <div className="was_now_price">
      <Price price={salePrice} color="red" />
      <span className={cx('list-price', droppedPrice)}>
        <Price price={listPrice} color="gray" strikethrough {...remainingProps} />
      </span>
      {!!savings && <span className={style.contentText}>Save {savings}</span>}
      {firstPriceMessageText && firstPriceMessageText.length > 0 && <div className={style.clearanceMsgStyle}>{firstPriceMessageText}</div>}
    </div>
  );
};

WasNow.propTypes = productDetailChildPropTypes;

export default WasNow;
