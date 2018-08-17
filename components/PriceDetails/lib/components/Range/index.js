import React from 'react';
import { productDetailChildPropTypes } from '../../PropTypes';
import Price from '../Price';

const Range = props => {
  const { priceRange = '' } = props; // eslint-disable-line object-curly-newline
  const [minPrice, maxPrice] = priceRange.replace(/[^\d\.-]/g, '').split('-'); // eslint-disable-line no-useless-escape

  if (!maxPrice || !minPrice) {
    return null;
  }

  return (
    <div>
      <Price price={minPrice} />
      &nbsp;<span>-</span>&nbsp;
      <Price price={maxPrice} />
    </div>
  );
};

Range.propTypes = productDetailChildPropTypes;

export default Range;
