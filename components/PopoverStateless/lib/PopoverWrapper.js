import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'react-emotion';
import { popoverWrapper as stylesPopoverWrapper } from './css';

const Popover = props => {
  const className = props.className ? cx(stylesPopoverWrapper, props.className) : stylesPopoverWrapper;
  return (
    <div id={props.id} className={className}>
      {props.children}
    </div>
  );
};

Popover.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.any,
  className: PropTypes.string
};

export default Popover;
