import React from 'react';
// import { productDetailChildPropTypes } from "../../PropTypes";
import * as css from '../../css';

const CallFor = () => {
  const { ASOData: { messages: { SPECIAL_PRICING_CALL_MSG, SPECIAL_PRICING_CALL_NUMBER } = {} } = {} } = window;
  return (
    <div>
      <div className={css.titleText}>{SPECIAL_PRICING_CALL_MSG || 'For special pricing call'}</div>
      <div className={css.contentText}>{SPECIAL_PRICING_CALL_NUMBER || '1-888-922-2336'}</div>
    </div>
  );
};

CallFor.propTypes = null; // productDetailChildPropTypes;

export default CallFor;
