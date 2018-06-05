import React from 'react';
import PropTypes from 'prop-types';
import { PopoverModalWrapper, Popover } from './css';

const parseDirection = direction => {
  let result = { mobile: 'top', desktop: 'left' };
  if (typeof direction === 'string') {
    result = { mobile: direction, desktop: direction };
  } else {
    result = {
      mobile: direction.mobile || direction.desktop || 'top',
      desktop: direction.desktop || direction.mobile || 'left'
    };
  }
  return result;
};

const PopoverModal = props =>
  props.open ? (
    <PopoverModalWrapper direction={parseDirection(props.direction)} lineHeightFix={props.lineHeightFix}>
      <Popover direction={parseDirection(props.direction)}>{props.children}</Popover>
    </PopoverModalWrapper>
  ) : null;

const directionString = PropTypes.oneOf(['left', 'right', 'top', 'bottom']);
const directionObject = PropTypes.shape({ mobile: directionString, desktop: directionString });

PopoverModal.propTypes = {
  children: PropTypes.any,
  direction: PropTypes.oneOfType([directionString, directionObject]),
  open: PropTypes.bool,
  lineHeightFix: PropTypes.number.isRequired
};

export default PopoverModal;
