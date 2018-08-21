import React from 'react';
import Responsive from 'react-responsive';
import { productDetailChildPropTypes } from '../../PropTypes';
import { TOOLTIP_TEXT } from './constants';
import Tooltip from '../../../../Tooltip';
import * as css from '../../css';

const InCartPlusCompare = ({ listPrice }) => {
  if (!listPrice) {
    return null;
  }

  const [num, dec] = listPrice.replace(/[^\.\d]/g, '').split('.'); // eslint-disable-line no-useless-escape
  if (!num || num.trim().length === 0) {
    return null;
  }

  const toolTipProps = {
    direction: { mobile: 'top', desktop: 'top' },
    align: 'C',
    auid: 'Product_Card_ToolTip',
    content: <div>{TOOLTIP_TEXT}</div>,
    className: css.toolTipStyles
  };

  const formattedListPrice = dec && dec.length > 0 ? `$${num}.${dec}` : `$${num}.00`;
  return (
    <div>
      <div className="c-price-in-cart mb-half" style={{ color: '#ee0000' }}>
        Our Price in Cart
        <Responsive maxWidth={767}>
          <Tooltip {...toolTipProps} showOnClick>
            <span className="c-price__tooltip-icon academyicon icon-information" />
          </Tooltip>
        </Responsive>
        <Responsive minWidth={768}>
          <Tooltip {...toolTipProps}>
            <span className="c-price__tooltip-icon academyicon icon-information" />
          </Tooltip>
        </Responsive>
      </div>
      <div className="c-price-compare mb-half" style={{ color: '#333333' }}>
        Compare at {formattedListPrice}
      </div>
    </div>
  );
};

InCartPlusCompare.propTypes = productDetailChildPropTypes;

export default InCartPlusCompare;
