import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { primaryBtnStyle } from './PrimaryBtn';
import { secondaryBtnStyles } from './SecondaryBtn';
import { tertiaryBtnStyles } from './TertiaryBtn';

const BTN_SIZE_SMALL = 'S';
const BTN_SIZE_MEDIUM = 'M';
const BTN_SIZE_LARGE = 'L';
const BTN_SIZE_XSMALL = 'XS';

const getCursorStyle = props => (props.disabled ? 'not-allowed !important' : 'pointer');

const commonBtnStyle = props => css`
  position: relative;
  border-radius: 2.1875rem;
  font-family: 'Mallory-Bold';
  font-weight: bold;
  text-transform: uppercase;
  outline: none;
  cursor: ${getCursorStyle(props)};
  &:disabled {
    opacity: 0.5;
  }
`;

const sizeStyles = props => {
  let minWidth = '180px';
  let fontSize = '1rem';
  let letterSpacing = '0.5px';
  let lineHeight = '1.375rem';
  let minHeight = props.btntype === 'tertiary' ? 'auto' : '4.375rem';
  let padding = props.btntype === 'primary' ? '1rem 2rem' : '0.75rem 2rem';
  if (props.size === BTN_SIZE_MEDIUM) {
    minWidth = '150px';
    minHeight = props.btntype === 'tertiary' ? 'auto' : '3.75rem';
  } else if (props.size === BTN_SIZE_SMALL) {
    minWidth = '120px';
    fontSize = '0.875rem';
    letterSpacing = '0.4px';
    lineHeight = '1.125rem';
    minHeight = props.btntype === 'tertiary' ? 'auto' : '3.125rem';
    padding = props.btntype === 'primary' ? '1rem 1.5rem' : '0.75rem 1.5rem';
  } else if (props.size === BTN_SIZE_XSMALL) {
    minWidth = '120px';
    fontSize = '0.75rem';
    letterSpacing = '0.3px';
    lineHeight = '1rem';
    minHeight = props.btntype === 'tertiary' ? 'auto' : '2.5rem';
    padding = props.btntype === 'primary' ? '1rem 1.5rem' : '0.75rem 1.5rem';
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

const StyledButton = styled('button')`
  ${commonBtnStyle};
  ${sizeStyles};
  ${props => {
    if (props.btntype === 'secondary') {
      return secondaryBtnStyles;
    } else if (props.btntype === 'tertiary') {
      return tertiaryBtnStyles;
    }
    return primaryBtnStyle;
  }};
`;

const Button = props => {
  const {
    type, onClick, disabled, auid, imgUrl, imgWidth, imgHeight
  } = props;
  const ImgH = !imgHeight ? '30px' : imgHeight;
  return (
    <StyledButton data-auid={`btn${auid}`} type={type} disabled={disabled} onClick={onClick} {...props}>
      {props.children} {imgUrl && <img alt="icon" width={imgWidth} height={ImgH} src={imgUrl} />}
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
  btntype: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  /** Button variety type */
  btnvariant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
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
  disabled: false,
  btnvariant: 'primary'
};

export default Button;
