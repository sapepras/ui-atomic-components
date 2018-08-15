import React from 'react';
import { productDetailChildPropTypes } from '../../PropTypes';
import Price from '../Price';
import * as css from '../../css';

const ClearanceRange = props => {
  const { priceRange = '', priceMessage } = props; // eslint-disable-line object-curly-newline
  const [minPrice, maxPrice] = priceRange.replace(/[^\d\.-]/g, '').split('-'); // eslint-disable-line no-useless-escape

  if (!maxPrice || !minPrice) {
    return null;
  }

  return (
    <div>
      <Price price={minPrice} color="red" />
      &nbsp;<span className="c-price__sub" style={{ color: '#ee0000' }}>-</span>&nbsp;
      <Price price={maxPrice} color="red" />
      {priceMessage &&
        priceMessage.indexOf('clearanceStylesAvailable') > -1 && <div className={css.clearanceMsgStyle}>Clearance Styles Available</div>}
    </div>
  );
};

ClearanceRange.propTypes = productDetailChildPropTypes;

export default ClearanceRange;
