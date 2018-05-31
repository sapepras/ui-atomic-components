import styled, { css } from 'react-emotion';

export const popoverWrapper = css`
  position: relative;
  display: inline-block;
`;

export const popoverAnchor = css`
  background-color: red;
`;

const popoverModalWrapperBase = css`
  position: absolute;
  z-index: 2;
`;

const popoverModalWrapperLeft = css`
  top: 50%;
  right: 100%;
  transform: translateY(-50%);
`;

const popoverModalWrapperRight = css`
  top: 50%;
  left: 100%;
  transform: translateY(-50%);
`;

const popoverModalWrapperTop = css`
  left: 50%;
  bottom: 100%;
  transform: translateX(-50%);
`;

const popoverModalWrapperBottom = css`
  left: 50%;
  top: 100%;
  transform: translateX(-50%);
`;

const getPopoverModalWrapperDirectionStyles = direction => {
  switch (direction) {
    case 'left':
      return popoverModalWrapperLeft;
    case 'right':
      return popoverModalWrapperRight;
    case 'top':
      return popoverModalWrapperTop;
    case 'bottom':
      return popoverModalWrapperBottom;
    default:
      return popoverModalWrapperLeft;
  }
};

export const PopoverModalWrapper = styled('div')`
  ${popoverModalWrapperBase};
  ${props => getPopoverModalWrapperDirectionStyles(props.direction)};
  ${props => (props.open ? 'display: block' : 'display: none')};
`;

const popoverBase = css`
  margin: 10px;
  position: relative;
  min-width: 100px;
  width: auto;
  padding: 15px;
  background: #fff;
  border-radius: 3px;
  padding: 25px 35px;

  &,
  &:before {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  }

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 25px;
    height: 25px;
    background: #fff;
  }

  &:before {
    z-index: -1;
  }
`;

const popoverLeft = css`
  &:before,
  &:after {
    top: 50%;
    left: 100%;
    margin-left: -12px;
    border-bottom: 0;
    border-left: 0;
    -webkit-transform: translateY(-50%) rotate(45deg);
    -moz-transform: translateY(-50%) rotate(45deg);
    -ms-transform: translateY(-50%) rotate(45deg);
    -o-transform: translateY(-50%) rotate(45deg);
    transform: translateY(-50%) rotate(45deg);
  }
`;

const popoverRight = css`
  &:before,
  &:after {
    top: 50%;
    left: 0;
    margin-left: -12px;
    border-top: 0;
    border-right: 0;
    -webkit-transform: translateY(-50%) rotate(45deg);
    -moz-transform: translateY(-50%) rotate(45deg);
    -ms-transform: translateY(-50%) rotate(45deg);
    -o-transform: translateY(-50%) rotate(45deg);
    transform: translateY(-50%) rotate(45deg);
  }
`;

const popoverTop = css`
  &:before,
  &:after {
    top: 100%;
    left: 50%;
    margin-top: -12px;
    border-top: 0;
    border-left: 0;
    -webkit-transform: translateX(-50%) rotate(45deg);
    -moz-transform: translateX(-50%) rotate(45deg);
    -ms-transform: translateX(-50%) rotate(45deg);
    -o-transform: translateX(-50%) rotate(45deg);
    transform: translateX(-50%) rotate(45deg);
  }
`;

const popoverBottom = css`
  &:before,
  &:after {
    bottom: 100%;
    left: 50%;
    margin-bottom: -12px;
    border-bottom: 0;
    border-right: 0;
    -webkit-transform: translateX(-50%) rotate(45deg);
    -moz-transform: translateX(-50%) rotate(45deg);
    -ms-transform: translateX(-50%) rotate(45deg);
    -o-transform: translateX(-50%) rotate(45deg);
    transform: translateX(-50%) rotate(45deg);
  }
`;

const getPopoverDirectionStyles = direction => {
  switch (direction) {
    case 'left':
      return popoverLeft;
    case 'right':
      return popoverRight;
    case 'top':
      return popoverTop;
    case 'bottom':
      return popoverBottom;
    default:
      return popoverLeft;
  }
};

export const Popover = styled('div')`
  ${popoverBase};
  ${props => getPopoverDirectionStyles(props.direction)};
`;
