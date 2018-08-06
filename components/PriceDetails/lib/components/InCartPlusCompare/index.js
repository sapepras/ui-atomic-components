
import React from 'react';
import ReactTooltip from 'react-tooltip';
import { productDetailChildPropTypes } from '../../PropTypes';
import { TOOLTIP_TEXT } from './constants';
import * as css from '../../css';

const InCartPlusCompare = ({ listPrice }) => {
  if (!listPrice) {
    return null;
  }

  const [num, dec] = listPrice.replace(/[^\.\d]/g, '').split('.'); // eslint-disable-line no-useless-escape
  if (!num || num.trim().length === 0) {
    return null;
  }

  const onClickToolTipIcon = event => {
    event.preventDefault();
    event.stopPropagation();
  };

  const formattedListPrice = dec && dec.length > 0 ? `$${num}.${dec}` : `$${num}.00`;
  return (
    <div>
      <div className="c-price-in-cart mb-half" style={{ color: '#ee0000' }}>
        Our Price in Cart
        <span // eslint-disable-line
          data-tip
          data-for="info"
          aria-label={TOOLTIP_TEXT}
          role="button"
          tabIndex="0"
          className="c-price__tooltip-icon academyicon icon-information"
          onClick={event => onClickToolTipIcon(event)}
        />
        <ReactTooltip className={`${css.toolTipStyles} c-price__tooltip-text`} id="info" place="top" type="light" effect="solid">
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
