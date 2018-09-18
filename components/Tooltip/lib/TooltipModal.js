import React from 'react';
import PropTypes from 'prop-types';
import { TooltipModalWrapper, Tooltip, closeBtn, closeIcon } from './styles';

const parseDirection = direction => {
  let result = { mobile: 'top', desktop: 'top' };
  if (typeof direction === 'string') {
    if (direction === '') {
      return result;
    }
    result = { mobile: direction, desktop: direction };
 } else {
    result = {
      mobile: (direction.mobile) || (direction.desktop) || 'top',
      desktop: (direction.desktop) || (direction.mobile) || 'top'
    };
  }
  return result;
};

const TooltipModal = props =>
  (
    <TooltipModalWrapper direction={parseDirection(props.direction)} align={props.align} lineHeightFix={props.lineHeightFix}>
      <Tooltip className={props.className} direction={parseDirection(props.direction)} align={props.align}>
        {props.closeBtn &&
          <button onClick={props.hide} className={closeBtn} data-auid={`tooltip-close-${props.auid}`}>
            <span className={`${closeIcon} academyicon icon-close`}></span>
          </button>}
        {props.content}
      </Tooltip>
    </TooltipModalWrapper>
  );

const directionString = PropTypes.oneOf(['left', 'right', 'top', 'bottom']);
const positionString = PropTypes.oneOf(['L', 'R', 'C']);
const directionObject = PropTypes.shape({ mobile: directionString, desktop: directionString });

TooltipModal.defaultProps = {
  direction: { mobile: 'top', desktop: 'top' } || 'top',
  align: 'C',
  lineHeightFix: 1.0
};

TooltipModal.propTypes = {
  content: PropTypes.any,
  className: PropTypes.string,
  direction: PropTypes.oneOfType([directionString, directionObject]),
  align: PropTypes.oneOfType([positionString]),
  lineHeightFix: PropTypes.number,
  closeBtn: PropTypes.bool,
  hide: PropTypes.func,
  auid: PropTypes.string
};

Tooltip.defaultProps = {
  closeBtn: false
};

export default TooltipModal;
