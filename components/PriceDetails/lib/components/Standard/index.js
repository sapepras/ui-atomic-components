import React from 'react';
import { productDetailChildPropTypes } from '../../PropTypes';
import Price from '../Price';

const Standard = props => {
  const { salePrice, listPrice, ...remainingProps } = props;
  const price = salePrice || listPrice;
  return price ? <Price price={price} {...remainingProps} /> : null;
};

Standard.propTypes = productDetailChildPropTypes;

export default Standard;
