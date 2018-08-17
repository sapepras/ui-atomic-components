import React from 'react';
import { productDetailChildPropTypes } from '../../PropTypes';
// import * as css from '../../css';

const InCartPlusCompare = ({ listPrice }) => {
  if (!listPrice) {
    return null;
  }

  const [num, dec] = listPrice.replace(/[^\.\d]/g, '').split('.'); // eslint-disable-line no-useless-escape
  if (!num || num.trim().length === 0) {
    return null;
  }

  const formattedListPrice = dec && dec.length > 0 ? `$${num}.${dec}` : `$${num}.00`;
  return (
    <div>
      <div className="c-price-in-cart" style={{ color: '#ee0000' }}>
        Our Price in Cart
      </div>
      <div className="c-price-compare" style={{ color: '#333333' }}>
        Compare at {formattedListPrice}
      </div>
    </div>
  );
};

InCartPlusCompare.propTypes = productDetailChildPropTypes;

export default InCartPlusCompare;
