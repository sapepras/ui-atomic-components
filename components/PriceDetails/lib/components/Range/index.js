import React from 'react';
import PropTypes from 'prop-types';
import { productDetailChildPropTypes } from '../../PropTypes';
import Price from '../Price';
import * as css from '../../css';

const Range = props => {

  const { priceRange = '', firstPriceMessageText, omitPriceMessage } = props;
  const [minPrice, maxPrice] = priceRange.replace(/[^\d\.-]/g, '').split('-'); // eslint-disable-line no-useless-escape

  if (!maxPrice || !minPrice) {
    return null;
  }

  return (
    <div className="price_range" style={{ display: 'inline-flex', alignItems: 'center' }} >
      <Price price={minPrice} />
      <span className="pr-half">-</span>
      <Price price={maxPrice} />
      { !omitPriceMessage && firstPriceMessageText && firstPriceMessageText.length > 0 &&
        <div className={css.clearanceMsgStyle}>{firstPriceMessageText}</div>
      }
    </div>
  );
};

Range.propTypes = {
  ...productDetailChildPropTypes,
  omitPriceMessage: PropTypes.bool,
};

Range.defaultProps = {
  omitPriceMessage: false,
};

export default Range;
