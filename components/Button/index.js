import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

const BTN_SIZE_SMALL = 'S';
const BTN_SIZE_MEDIUM = 'M';
const BTN_SIZE_LARGE = 'L';
const BTN_SIZE_XSMALL = 'XS';

const colorPrimary = '#0055a6';
const colorHover = '#0255cc';
const colorHoverSecondary = '#0055a6';
const colorMarineBlue = '#003366';
const colorWhite = '#fff';
const colorLightSteelBlue = '#b2cce4';

const getPrimaryColor = props => (props.disabled ? `${colorLightSteelBlue} !important` : colorPrimary);
const getCursorStyle = props => (props.disabled ? 'not-allowed !important' : 'pointer');

const commonBtnStyle = props => css`
  border-radius: 2.1875rem;
  font-family: 'Mallory-Bold';
  font-weight: bold;
  text-transform: uppercase;
  cursor: ${getCursorStyle(props)};
`;

const sizeStyles = props => {
  let minWidth = '180px';
  let fontSize = '1rem';
  let letterSpacing = '0.5px';
  let lineHeight = '1.375rem';
  let minHeight = '4.375rem';
  let padding = '1rem 2rem';
  if (props.size === BTN_SIZE_MEDIUM) {
    minWidth = '150px';
    minHeight = '3.75rem';
  } else if (props.size === BTN_SIZE_SMALL) {
    minWidth = '120px';
    fontSize = '0.875rem';
    letterSpacing = '0.4px';
    lineHeight = '1.125rem';
    minHeight = '3.125rem';
    padding = '1rem 1.5rem';
  } else if (props.size === BTN_SIZE_XSMALL) {
    minWidth = '120px';
    fontSize = '0.75rem';
    letterSpacing = '0.3px';
    lineHeight = '1rem';
    minHeight = '2.5rem';
    padding = '1rem 1.5rem';
  }

  return css`
    min-width: ${minWidth};
    font-size: ${fontSize};
    letter-spacing: ${letterSpacing};
    line-height: ${lineHeight};
    min-height: ${minHeight};
    padding: ${padding};
  `;
};

const primaryBtnStyle = props => css`
  border: none;
  color: ${colorWhite};
  background-color: ${getPrimaryColor(props)};
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
 type, onClick, disabled, auid, imgUrl, imgWidth, imgHeight
} = props;
  const ImgH = !imgHeight ? '30px' : imgHeight;
  return (
    <StyledButton data-auid={`btn${auid}`} type={type} disabled={disabled} onClick={onClick} {...props}>
      {props.children } { imgUrl && <img alt="icon" width={imgWidth} height={ImgH} src={imgUrl} />}
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
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  /** Image Url */
  imgUrl: PropTypes.string,
  /** Image Width */
  imgWidth: PropTypes.string,
  /** Image Height */
  imgHeight: PropTypes.string
};

Button.defaultProps = {
  type: 'button',
  size: BTN_SIZE_LARGE,
  btntype: 'primary',
  disabled: false
};

export default Button;
