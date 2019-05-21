import React from 'react';
import { productDetailChildPropTypes } from '../../PropTypes';
import Price from '../Price';
import * as css from '../../css';

const Range = props => {
  const { priceRange = '', firstPriceMessageText } = props;
  const [minPrice, maxPrice] = priceRange.replace(/[^\d\.-]/g, '').split('-'); // eslint-disable-line no-useless-escape

  if (!maxPrice || !minPrice) {
    return null;
  }

  return (
    <div className="price_range">
      <Price price={minPrice} />
      &nbsp;<span>-</span>&nbsp;
      <Price price={maxPrice} />
      {firstPriceMessageText && firstPriceMessageText.length > 0 && <div className={css.clearanceMsgStyle}>{firstPriceMessageText}</div>}
    </div>
  );
};

Range.propTypes = productDetailChildPropTypes;

export default Range;
