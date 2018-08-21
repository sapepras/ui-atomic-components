import styled, { css } from 'react-emotion';

export const tooltipWrapper = css`
  position: relative;
  display: inline-block;
  line-height: 1.24rem;
`;

export const tooltipWrapperCursor = css`
  ${tooltipWrapper};
  cursor: pointer;
`;

export const LineHeightFix = styled('div')`
  line-height: ${({ lineHeightFix }) => lineHeightFix};
`;

const tooltipModalWrapperBase = props => css`
  position: absolute;
  z-index: 2;
  box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.1), 0 6px 12px 0 rgba(0, 0, 0, 0.04), 0 2px 5px 0 rgba(0, 0, 0, 0.08);
  ${props.className};
`;

const modalWrapperLeftRightAlign = align => {
  let leftRightAlign = 'translateY(-50%)';
  switch (align) {
    /* 'L' for top edge alignment */
    case 'L':
    leftRightAlign = 'translateY(-85%)';
      break;
      /* 'R' for bottom edge alignment */
    case 'R':
    leftRightAlign = 'translateY(-15%)';
      break;
      /* 'C' for center alignment */
    case 'C':
    leftRightAlign = 'translateY(-50%)';
      break;
    default:
    leftRightAlign = 'translateY(-50%)';
      break;
  }
  return css`
  transform: ${leftRightAlign}`;
};

const tooltipModalWrapperLeft = align => css`
  top: 50%;
  bottom: auto;
  left: auto;
  right: 100%;
  margin-right: 12px;
  ${modalWrapperLeftRightAlign(align)};
`;

const tooltipModalWrapperRight = align => css`
  top: 50%;
  bottom: auto;
  left: 100%;
  right: auto;
  margin-left: 12px;
  ${modalWrapperLeftRightAlign(align)};
`;

const modalWrapperTopBottomAlign = align => {
  let topBottomAlign = 'translateX(-50%)';
  switch (align) {
    /* 'L' for left edge alignment */
    case 'L':
    topBottomAlign = 'translateX(-85%)';
      break;
      /* 'R' for right edge alignment */
    case 'R':
    topBottomAlign = 'translateX(-15%)';
      break;
      /* 'C' for center alignment */
    case 'C':
    topBottomAlign = 'translateX(-50%)';
      break;
    default:
    topBottomAlign = 'translateX(-50%)';
      break;
  }
  return css`
  transform: ${topBottomAlign}`;
};

const tooltipModalWrapperTop = align => css`
  top: auto;
  bottom: 100%;
  left: 50%;
  right: auto;
  margin-bottom: 12px;
  ${modalWrapperTopBottomAlign(align)};
`;

const tooltipModalWrapperBottom = align => css`
  top: 100%;
  bottom: auto;
  left: 50%;
  right: auto;
  margin-top: 12px;
  ${modalWrapperTopBottomAlign(align)};
`;

const getTooltipModalWrapperDirectionStyles = (direction, align) => {
  switch (direction) {
    case 'left':
      return tooltipModalWrapperLeft(align);
    case 'right':
      return tooltipModalWrapperRight(align);
    case 'top':
      return tooltipModalWrapperTop(align);
    case 'bottom':
      return tooltipModalWrapperBottom(align);
    default:
      return tooltipModalWrapperTop(align);
  }
};

export const TooltipModalWrapper = styled('div')`
  ${tooltipModalWrapperBase};
  line-height: ${({ lineHeightFix }) => lineHeightFix};
  ${({ direction = {}, align = '' }) => getTooltipModalWrapperDirectionStyles(direction.mobile, align)};

  @media only screen and (min-width: 768px) {
    ${({ direction = {}, align = '' }) => getTooltipModalWrapperDirectionStyles(direction.desktop, align)};
  }
`;

const tooltipBase = css`
  position: relative;
  min-width: 100px;
  width: auto;
  padding: 15px;
  background: #fff;
  border-radius: 3px;

  &,
  &:before {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  }
  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 12px;
    height: 12px;
    background: #fff;
  }

  &:before {
    z-index: -1;
  }
`;

const tooltipLeftRightAlign = align => {
  let leftRightAlign = '50%';
  switch (align) {
    /* 'L' for bottom edge alignment of arrow */
    case 'L':
    leftRightAlign = '85%';
      break;
      /* 'R' for top edge alignment of arrow */
    case 'R':
    leftRightAlign = '15%';
      break;
      /* 'C' for center alignment of arrow */
    case 'C':
    leftRightAlign = '50%';
      break;
    default:
    leftRightAlign = '50%';
      break;
  }
  return css`
  &:before,
  &:after {
    top: ${leftRightAlign};
  }`;
};

const tooltipLeft = align => css`
  &:before,
  &:after {
    bottom: auto;
    left: 100%;
    right: auto;
    margin: 0 0 0 -6px;
    border-bottom: 0;
    border-left: 0;
    -webkit-transform: translateY(-50%) rotate(45deg);
    -moz-transform: translateY(-50%) rotate(45deg);
    -ms-transform: translateY(-50%) rotate(45deg);
    -o-transform: translateY(-50%) rotate(45deg);
    transform: translateY(-50%) rotate(45deg);
  }
  ${tooltipLeftRightAlign(align)};
`;

const tooltipRight = align => css`
  &:before,
  &:after {
    bottom: auto;
    left: 0;
    right: auto;
    margin: 0 0 0 -6px;
    border-top: 0;
    border-right: 0;
    -webkit-transform: translateY(-50%) rotate(45deg);
    -moz-transform: translateY(-50%) rotate(45deg);
    -ms-transform: translateY(-50%) rotate(45deg);
    -o-transform: translateY(-50%) rotate(45deg);
    transform: translateY(-50%) rotate(45deg);
  }
  ${tooltipLeftRightAlign(align)};
`;

const tooltipTopBottomAlign = align => {
  let topBottomAlign = '50%';
  switch (align) {
    /* 'L' for right edge alignment of arrow */
    case 'L':
    topBottomAlign = '85%';
      break;
      /* 'R' for left edge alignment of arrow */
    case 'R':
    topBottomAlign = '15%';
      break;
      /* 'C' for center alignment of arrow */
    case 'C':
    topBottomAlign = '50%';
      break;
    default:
    topBottomAlign = '50%';
      break;
  }
  return css`
  &:before,
  &:after {
    left: ${topBottomAlign};
  }`;
};

const tooltipTop = align => css`
  &:before,
  &:after {
    top: 100%;
    bottom: auto;
    right: auto;
    margin: -6px 0 0 0;
    border-top: 0;
    border-left: 0;
    -webkit-transform: translateX(-50%) rotate(45deg);
    -moz-transform: translateX(-50%) rotate(45deg);
    -ms-transform: translateX(-50%) rotate(45deg);
    -o-transform: translateX(-50%) rotate(45deg);
    transform: translateX(-50%) rotate(45deg);
  }
  ${tooltipTopBottomAlign(align)};
`;

const tooltipBottom = align => css`
  &:before,
  &:after {
    top: auto;
    bottom: 100%;
    right: auto;
    margin: 0 0 -6px 0;
    border-bottom: 0;
    border-right: 0;
    -webkit-transform: translateX(-50%) rotate(45deg);
    -moz-transform: translateX(-50%) rotate(45deg);
    -ms-transform: translateX(-50%) rotate(45deg);
    -o-transform: translateX(-50%) rotate(45deg);
    transform: translateX(-50%) rotate(45deg);
  }
  ${tooltipTopBottomAlign(align)};
`;

const getTooltipDirectionStyles = (direction, align) => {
  switch (direction) {
    case 'left':
      return tooltipLeft(align);
    case 'right':
      return tooltipRight(align);
    case 'top':
      return tooltipTop(align);
    case 'bottom':
      return tooltipBottom(align);
    default:
      return tooltipTop(align);
  }
};

export const Tooltip = styled('div')`
  ${tooltipBase};
  ${({ direction = {}, align = '' }) => getTooltipDirectionStyles(direction.mobile, align)};

  @media only screen and (min-width: 768px) {
    ${({ direction = {}, align = '' }) => getTooltipDirectionStyles(direction.desktop, align)};
  }
`;
