import React from 'react';
import PropTypes from 'prop-types';
import { PopoverModalWrapper, Popover } from './css';

const PopoverModal = props =>
  props.open ? (
    <PopoverModalWrapper direction={props.direction}>
      <Popover direction={props.direction}>{props.children}</Popover>
    </PopoverModalWrapper>
  ) : null;

PopoverModal.propTypes = {
  children: PropTypes.any,
  direction: PropTypes.oneOf(['left', 'right', 'top', 'bottom']).isRequired,
  open: PropTypes.bool
};

export default PopoverModal;
