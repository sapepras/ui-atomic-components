import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

const BTN_SIZE_SMALL = 'S';
const BTN_SIZE_MEDIUM = 'M';
const BTN_SIZE_LARGE = 'L';

const colorPrimary = '#0055a6';
const colorHover = '#0255cc';
const colorHoverSecondary = 'rgba(2, 85, 204, 0.1)';
const colorMarineBlue = '#003366';
const colorWhite = '#fff';
const colorLightSteelBlue = '#b2cce4';

const getPrimaryColor = props => (props.disabled ? `${colorLightSteelBlue} !important` : colorPrimary);
const getCursorStyle = props => (props.disabled ? 'not-allowed !important' : 'pointer');

const commonBtnStyle = props => css`
  border-radius: 2.3125rem;
  min-height: 3.75rem;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: ${getCursorStyle(props)};
`;

const sizeStyles = props => {
  let minWidth = '180px';

  if (props.size === BTN_SIZE_SMALL) {
    minWidth = '120px';
  } else if (props.size === BTN_SIZE_MEDIUM) {
    minWidth = '150px';
  }

  return css`
    min-width: ${minWidth};
  `;
};

const primaryBtnStyle = props => css`
  border: none;
  color: ${colorWhite};
  background-color: ${getPrimaryColor(props)};
  padding: 1rem;
  &:hover {
    background-color: ${colorHover};
  }

  &:active {
    background-color: ${colorMarineBlue};
  }
`;

const secondaryBrnStyles = props => css`
  border: 3px solid ${colorPrimary};
  background-color: ${colorWhite};
  color: ${getPrimaryColor(props)};
  border-color: ${getPrimaryColor(props)};
  background-color: ${props.disabled && `${colorWhite} !important`};
  padding: 1rem;
  &:hover {
    background-color: ${colorHoverSecondary};
    border-color: ${colorHover};
    color: ${colorHover};
  }

  &:focus {
    background-color: ${colorWhite};
  }

  &:active {
    color: ${colorWhite};
    background-color: ${colorHover};
  }
`;

const StyledButton = styled('button')`
  ${commonBtnStyle};
  ${sizeStyles};
  ${props => (props.btntype === 'secondary' ? secondaryBrnStyles : primaryBtnStyle)};
`;

const Button = props => {
  const {
 type, onClick, disabled, auid
} = props;
  return (
    <StyledButton data-auid={`btn${auid}`} type={type} disabled={disabled} onClick={onClick} {...props}>
      {props.children}
    </StyledButton>
  );
};

Button.propTypes = {
  /** Button type */
  type: PropTypes.string,
  /** Button status */
  disabled: PropTypes.bool,
  /** Btn Size variant */
  size: PropTypes.oneOf([BTN_SIZE_LARGE, BTN_SIZE_MEDIUM, BTN_SIZE_SMALL]),
  /** Button type variant */
  btntype: PropTypes.oneOf(['primary', 'secondary']),
  /** Gets called when the user clicks on the button */
  onClick: PropTypes.func,
  /** Automated Test Id */
  auid: PropTypes.string.isRequired,
  /** Button label */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
};

Button.defaultProps = {
  type: 'button',
  size: BTN_SIZE_LARGE,
  btntype: 'primary',
  disabled: false
};

export default Button;
