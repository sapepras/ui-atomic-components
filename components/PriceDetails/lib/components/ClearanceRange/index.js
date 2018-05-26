import React from 'react';
import { productDetailChildPropTypes } from '../../PropTypes';
import Price from '../Price';

const ClearanceRange = props => {
  const { priceRange = '' } = props; // eslint-disable-line object-curly-newline
  const [minPrice, maxPrice] = priceRange.replace(/[^\d\.-]/g, '').split('-'); // eslint-disable-line no-useless-escape

  if (!maxPrice || !minPrice) {
    return null;
  }

  return (
    <div>
      <Price price={minPrice} color="red" />
      &nbsp;<span style={{ color: '#ee0000' }}>-</span>&nbsp;
      <Price price={maxPrice} color="red" />
    </div>
  );
};

ClearanceRange.propTypes = productDetailChildPropTypes;

export default ClearanceRange;
