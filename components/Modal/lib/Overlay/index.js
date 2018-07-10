import React from 'react';
import PropTypes from 'prop-types';
import { cx, css } from 'react-emotion';

const overlayStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
`;

const Overlay = ({ children, overlayClassName, handleOverlayClick }) => (
  <div className={cx(overlayStyle, overlayClassName)} role="button" tabIndex="0" onClick={handleOverlayClick} onKeyDown={handleOverlayClick}>
    {children}
  </div>
);
Overlay.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  overlayClassName: PropTypes.string,
  handleOverlayClick: PropTypes.func
};

export default Overlay;
