import React from 'react';
import PropTypes from 'prop-types';
import { popoverWrapper as stylesPopoverWrapper } from './css';

const Popover = props => (
  <div id={props.id} className={stylesPopoverWrapper}>
    {props.children}
  </div>
);

Popover.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.any
};

export default Popover;
