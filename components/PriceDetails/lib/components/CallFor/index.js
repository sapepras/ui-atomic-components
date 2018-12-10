import ExecutionEnvironment from 'fbjs/lib/ExecutionEnvironment';
import React from 'react';
import { SPECIAL_PRICING_LBL, SPECIAL_PRICING_NUM } from '../../../constants';
import * as css from '../../css';

const CallFor = () => {
  const { ASOData: { messages: { SPECIAL_PRICING_CALL_MSG = SPECIAL_PRICING_LBL, SPECIAL_PRICING_CALL_NUMBER = SPECIAL_PRICING_NUM } = {} } = {} } =
    ExecutionEnvironment.canUseDOM && window;
  return (
    <div className="special_price">
      <div className={css.titleText}>{SPECIAL_PRICING_CALL_MSG}</div>
      <div className={css.contentText}>{SPECIAL_PRICING_CALL_NUMBER}</div>
    </div>
  );
};

CallFor.propTypes = null; // productDetailChildPropTypes;

export default CallFor;
