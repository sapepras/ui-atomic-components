import ExecutionEnvironment from 'fbjs/lib/ExecutionEnvironment';
import React from 'react';
import { productDetailChildPropTypes } from '../../PropTypes';
import { TOOLTIP_TEXT, OUR_PRICE_IN_CART, COMPARE_AT } from '../../../constants';
import Tooltip from '../../../../Tooltip';
import * as css from '../../css';

const isMobile = () =>
  ExecutionEnvironment.canUseDOM &&
  window.navigator.userAgent.toLowerCase().match(/android|blackberry|tablet|mobile|iphone|ipad|ipod|opera mini|iemobile/i) !== null;

const InCartPlusCompare = props => {
  const { listPrice, firstPriceMessageText } = props;
  if (!listPrice) {
    return null;
  }

  const [num, dec] = listPrice.replace(/[^\.\d]/g, '').split('.'); // eslint-disable-line no-useless-escape
  if (!num || num.trim().length === 0) {
    return null;
  }

  const {
    ASOData: {
      messages: { IN_CART_PLUS_COMPARE_TOOLTIP_MSG = TOOLTIP_TEXT, IN_CART_PLUS_COMPARE_MSG = OUR_PRICE_IN_CART, COMPARE_AT_MSG = COMPARE_AT } = {}
    } = {}
  } =
    ExecutionEnvironment.canUseDOM && window;

  const toolTipProps = {
    direction: { mobile: 'top', desktop: 'top' },
    align: 'C',
    auid: 'Product_Card_ToolTip',
    content: <div>{IN_CART_PLUS_COMPARE_TOOLTIP_MSG}</div>,
    className: css.toolTipStyles
  };

  const formattedListPrice = dec && dec.length > 0 ? `$${num}.${dec}` : `$${num}.00`;
  return (
    <div className="price_in_cart">
      <div className="c-price-in-cart mb-half" style={{ color: '#ee0000' }}>
        {IN_CART_PLUS_COMPARE_MSG}
        <Tooltip {...toolTipProps} showOnClick={isMobile()}>
          <span className="c-price__tooltip-icon academyicon icon-information" />
        </Tooltip>
      </div>
      <div className="c-price-compare mb-half" style={{ color: '#333333' }}>
        {COMPARE_AT_MSG} {formattedListPrice}
      </div>
      {firstPriceMessageText && firstPriceMessageText.length > 0 && <div className={css.clearanceMsgStyle}>{firstPriceMessageText}</div>}
    </div>
  );
};

InCartPlusCompare.propTypes = productDetailChildPropTypes;

export default InCartPlusCompare;
