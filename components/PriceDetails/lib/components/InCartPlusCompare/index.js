import React from 'react';
import { productDetailChildPropTypes } from '../../PropTypes';
import * as css from '../../css';

const XXXX = ({ listPrice }) => {
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
      <div className={css.titleText} style={{ color: '#ee0000' }}>
        Our Price in Cart
      </div>
      <div className={css.contentText} style={{ color: '#7f7f7f' }}>
        Compare at {formattedListPrice}
      </div>
    </div>
  );
};

XXXX.propTypes = productDetailChildPropTypes;

export default XXXX;
