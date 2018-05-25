import React from 'react';
import { productDetailChildPropTypes } from '../../PropTypes';
import Price from '../Price';

const XXXX = props => {
  const { salePrice, listPrice, ...remainingProps } = props;
  const price = salePrice || listPrice;
  return price ? <Price price={price} {...remainingProps} /> : null;
};

XXXX.propTypes = productDetailChildPropTypes;

export default XXXX;
