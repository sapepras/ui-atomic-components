import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { primaryBtnStyle } from '../Button/PrimaryBtn';
import { secondaryBtnStyles } from '../Button/SecondaryBtn';
import Button from '../Button';
import Anchor from '../Anchor';

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
  let minHeight = '4.375rem';
  let padding = props.btntype === 'primary' ? '1.6rem 2rem' : '0.75rem 2rem';
  if (props.size === BTN_SIZE_MEDIUM) {
    minWidth = '150px';
    minHeight = '3.75rem';
  } else if (props.size === BTN_SIZE_SMALL) {
    minWidth = '120px';
    fontSize = '0.875rem';
    letterSpacing = '0.4px';
    lineHeight = '1.125rem';
    minHeight = '3.125rem';
    padding = props.btntype === 'primary' ? '1.125rem 1.5rem' : '0.75rem 1.5rem';
  } else if (props.size === BTN_SIZE_XSMALL) {
    minWidth = '120px';
    fontSize = '0.75rem';
    letterSpacing = '0.3px';
    lineHeight = '1rem';
    minHeight = '2.5rem';
    padding = props.btntype === 'primary' ? '0.875rem 1.5rem' : '0.75rem 1.5rem';
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

const StyledLink = styled('a')`
  ${commonBtnStyle};
  ${sizeStyles};
  ${props => (props.btntype === 'secondary' ? secondaryBtnStyles : primaryBtnStyle)};
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    text-decoration: none;
  }
`;

const Link = props => {
  const {
    type, linkstyle, onClick, href, disabled, auid, imgUrl, imgWidth, imgHeight
  } = props;
  const ImgH = !imgHeight ? '30px' : imgHeight;
  return (
    <React.Fragment>
      {type === 'anchor' &&
        linkstyle === 'button' && (
          <StyledLink data-auid={`btn${auid}`} href={href} disabled={disabled} onClick={onClick} {...props}>
            {props.children}
            {imgUrl && <img alt="icon" width={imgWidth} height={ImgH} src={imgUrl} />}
          </StyledLink>
        )}
      {type === 'anchor' && linkstyle !== 'button' && <Anchor auid={auid} href={href} {...props} />}
      {type === 'button' && (
        <Button auid={auid} type={type} disabled={disabled} onClick={onClick} imgUrl={imgUrl} imgWidth={imgWidth} imgHeight={imgHeight} {...props} />
      )}
    </React.Fragment>
  );
};

Link.defaultProps = {
  type: 'anchor',
  linkstyle: 'button',
  size: BTN_SIZE_LARGE,
  btntype: 'primary',
  disabled: false,
  btnvariant: 'primary',
  href: '#'
};

Link.propTypes = {
  /** Link type */
  type: PropTypes.string,
  /** Display format of link */
  linkstyle: PropTypes.string,
  /** Link status */
  disabled: PropTypes.bool,
  /** Btn Size variant */
  size: PropTypes.oneOf([BTN_SIZE_LARGE, BTN_SIZE_MEDIUM, BTN_SIZE_SMALL]),
  /** Link type variant */
  btntype: PropTypes.oneOf(['primary', 'secondary']),
  /** Link variety type */
  btnvariant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  /** Gets called when the user clicks on the link */
  onClick: PropTypes.func,
  /** Automated Test Id */
  auid: PropTypes.string.isRequired,
  /** Anchor link */
  href: PropTypes.string,
  /** Link label */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  /** Image Url */
  imgUrl: PropTypes.string,
  /** Image Width */
  imgWidth: PropTypes.string,
  /** Image Height */
  imgHeight: PropTypes.string
};

export default Link;
