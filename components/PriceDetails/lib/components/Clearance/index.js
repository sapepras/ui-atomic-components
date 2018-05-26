import React from 'react';
import { productDetailChildPropTypes } from '../../PropTypes';
import Price from '../Price';
import * as css from '../../css';

const Clearance = props => {
  const { listPrice, salePrice, priceMessage } = props;
  const price = salePrice || listPrice;
  return price ? (
    <div>
      <Price price={price} color="red" />
      <div className={css.contentText}>{priceMessage}</div>
    </div>
  ) : null;
};

Clearance.propTypes = productDetailChildPropTypes;

export default Clearance;
