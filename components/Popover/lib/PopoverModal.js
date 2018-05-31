import React from 'react';
import PropTypes from 'prop-types';
import { PopoverModalWrapper, Popover } from './css';

const PopoverModal = props => (
  <PopoverModalWrapper direction={props.direction} open={props.open}>
    <Popover direction={props.direction}>{props.children}</Popover>
  </PopoverModalWrapper>
);

PopoverModal.propTypes = {
  children: PropTypes.any,
  direction: PropTypes.oneOf(['left', 'right', 'top', 'bottom']).isRequired,
  open: PropTypes.bool
};

export default PopoverModal;
