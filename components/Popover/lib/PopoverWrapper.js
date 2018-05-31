import React from 'react';
import PropTypes from 'prop-types';
import { popoverWrapper as stylesPopoverWrapper } from './css';

const Popover = props => <div className={stylesPopoverWrapper}>{props.children}</div>;

Popover.propTypes = {
  children: PropTypes.any
};

export default Popover;
