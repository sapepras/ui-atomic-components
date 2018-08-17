import styled, { css } from 'react-emotion';

export const popoverWrapper = css`
  position: relative;
  display: inline-block;
  line-height: 0;
`;

export const LineHeightFix = styled('div')`
  line-height: ${({ lineHeightFix }) => lineHeightFix};
`;

export const popoverAnchor = css`
  background-color: red;
`;

const popoverModalWrapperBase = css`
  position: absolute;
  z-index: 2;
  min-width: 300px;
`;

const popoverModalWrapperLeft = css`
  top: 50%;
  bottom: auto;
  left: auto;
  right: 100%;
  transform: translateY(-50%);
`;

const popoverModalWrapperRight = css`
  top: 50%;
  bottom: auto;
  left: 100%;
  right: auto;
  transform: translateY(-50%);
`;

const popoverModalWrapperTop = css`
  top: auto;
  bottom: 100%;
  left: 50%;
  right: auto;
  transform: translateX(-50%);
`;

const popoverModalWrapperBottom = css`
  top: 100%;
  bottom: auto;
  left: 50%;
  right: auto;
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

export const StyledPopoverModalWrapper = styled('div')`
  ${popoverModalWrapperBase};
  line-height: ${({ lineHeightFix }) => lineHeightFix};
  ${({ direction = {} }) => getPopoverModalWrapperDirectionStyles(direction.mobile)};

  @media only screen and (min-width: 768px) {
    ${({ direction = {} }) => getPopoverModalWrapperDirectionStyles(direction.desktop)};
  }
`;

const popoverBase = css`
  margin: 10px;
  position: relative;
  min-width: 100px;
  width: auto;
  padding: 2rem;
  background: #fff;
  border-radius: 3px;

  & {
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
    bottom: auto;
    left: 100%;
    right: auto;
    margin: 0 0 0 -12px;
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
    bottom: auto;
    left: 0;
    right: auto;
    margin: 0 0 0 -12px;
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
    bottom: auto;
    left: 50%;
    right: auto;
    margin: -12px 0 0 0;
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
    top: auto;
    bottom: 100%;
    left: 50%;
    right: auto;
    margin: 0 0 -12px 0;
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

export const StyledPopover = styled('div')`
  ${popoverBase};
  ${({ direction = {} }) => getPopoverDirectionStyles(direction.mobile)};

  @media only screen and (min-width: 768px) {
    ${({ direction = {} }) => getPopoverDirectionStyles(direction.desktop)};
  }

  filter: drop-shadow(0 0 6px rgba(51, 51, 51, 0.4));
`;
