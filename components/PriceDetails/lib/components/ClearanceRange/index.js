import React from 'react';
import PropTypes from 'prop-types';
import { productDetailChildPropTypes } from '../../PropTypes';
import Price from '../Price';
import * as css from '../../css';

const ClearanceRange = props => {
  const { priceRange = '', firstPriceMessageText, omitPriceMessage } = props;
  const [minPrice, maxPrice] = priceRange.replace(/[^\d\.-]/g, '').split('-'); // eslint-disable-line no-useless-escape

  if (!maxPrice || !minPrice) {
    return null;
  }

  return (
    <div className="price_range" style={{ display: 'inline-flex', alignItems: 'center' }} >
      <Price price={minPrice} color="red" />
      <span className="pr-half c-price__sub" style={{ color: '#ee0000' }}>-</span>
      <Price price={maxPrice} color="red" />
      { !omitPriceMessage && firstPriceMessageText && firstPriceMessageText.length > 0 &&
        <div className={css.clearanceMsgStyle}>{firstPriceMessageText}</div>
      }
    </div>
  );
};

ClearanceRange.propTypes = {
  ...productDetailChildPropTypes,
  omitPriceMessage: PropTypes.bool,
};

ClearanceRange.defaultProps = {
  omitPriceMessage: false,
};

export default ClearanceRange;
