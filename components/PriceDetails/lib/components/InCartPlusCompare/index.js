import React from 'react';
import ReactTooltip from 'react-tooltip';
import { productDetailChildPropTypes } from '../../PropTypes';
import { TOOLTIP_TEXT } from './constants';
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
      <div className="c-price-in-cart mb-half" style={{ color: '#ee0000' }}>
        Our Price in Cart
        <span data-tip data-for="info" data-event="touchstart" aria-label={TOOLTIP_TEXT} role="button" tabIndex="0" className="d-inline d-md-none c-price__tooltip-icon academyicon icon-information" />
        <span data-tip data-for="info" aria-label={TOOLTIP_TEXT} role="button" tabIndex="0" className="d-none d-md-inline d-c-price__tooltip-icon academyicon icon-information" />
        <ReactTooltip className="c-price__tooltip-text" id="info" place="top" type="light" effect="solid" isCapture={false}>
          <span>{TOOLTIP_TEXT}</span>
        </ReactTooltip>
      </div>
      <div className="c-price-compare mb-half" style={{ color: '#333333' }}>
        Compare at {formattedListPrice}
      </div>
    </div>
  );
};

InCartPlusCompare.propTypes = productDetailChildPropTypes;

export default InCartPlusCompare;
