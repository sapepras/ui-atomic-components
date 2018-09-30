import React from 'react';
import { css, cx } from 'emotion';
import * as style from '../../css';
import { productDetailChildPropTypes } from '../../PropTypes';
import Price from '../Price';

const droppedPrice = css`
  font-size: 0.75em;
  margin-left:8px;
  display: inline-block;
`;

const WasNow = props => {
  const {
    salePrice, listPrice, savings, firstPriceMessageText, ...remainingProps
  } = props;
  return (
    <div>
      <Price price={salePrice} color="red" />
      <span className={cx('list-price', droppedPrice)}>
        <Price price={listPrice} color="gray" strikethrough {...remainingProps} />
      </span>
      {!!savings && (
        <span>
          <span className={style.contentText}>Save {savings}</span>
        </span>
      )}
      {firstPriceMessageText && firstPriceMessageText.length > 0 && <div className={style.clearanceMsgStyle}>{firstPriceMessageText}</div>}
    </div>
  );
};

WasNow.propTypes = productDetailChildPropTypes;

export default WasNow;
