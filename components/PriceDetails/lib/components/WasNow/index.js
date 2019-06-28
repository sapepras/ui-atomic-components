import React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'emotion';
import * as style from '../../css';
import { productDetailChildPropTypes } from '../../PropTypes';
import Price from '../Price';

const droppedPrice = css`
  font-size: 0.75em;
  display: inline-flex;
  margin-left: 0;
`;

const WasNow = props => {
  const { salePrice, listPrice, savings, firstPriceMessageText, omitPriceMessage, ...remainingProps } = props;
  return (
    <div className="was_now_price" style={{ display: 'inline-flex', alignItems: 'center' }}>
      <Price price={salePrice} color="red" />
      <span className={cx('list-price', droppedPrice)}>
        <Price price={listPrice} color="gray" strikethrough {...remainingProps} />
      </span>
      {!!savings && <span className={style.contentText}>Save {savings}</span>}
      { !omitPriceMessage && firstPriceMessageText && firstPriceMessageText.length > 0 &&
        <div className={style.clearanceMsgStyle}>{firstPriceMessageText}</div>
      }
    </div>
  );
};

WasNow.propTypes = {
  ...productDetailChildPropTypes,
  omitPriceMessage: PropTypes.bool,
};

WasNow.defaultProps = {
  omitPriceMessage: false,
};

export default WasNow;
