import { css } from 'react-emotion';
import { colorPrimary, colorHover, colorWhite, colorLightSteelBlue, colorGrey, getPrimaryColor } from '../color';

export const secondaryBtnStyles = props => {
  let borderColor = colorPrimary;
  const bgBtnColor = '#0000';
  let textColor = getPrimaryColor(props, colorLightSteelBlue, colorPrimary);
  const bgDisabledBtnColor = '#0000';
  let bgHoverColor = 'rgba(2, 85, 204, 0.1)';
  let hoverBorderColor = colorHover;
  let hoverTextColor = colorHover;
  const bgFocusColor = '#0000';
  let borderFocusColor = colorPrimary;
  let textActiveColor = colorWhite;
  let bgActiveColor = colorPrimary;
  if (props.btnvariant === 'secondary') {
    borderColor = '#4a4a4a';
    textColor = getPrimaryColor(props, colorGrey, '#333333');
    bgHoverColor = '#f6f6f6';
    hoverBorderColor = '#9b9b9b';
    hoverTextColor = '#9b9b9b';
    borderFocusColor = colorGrey;
    textActiveColor = colorWhite;
    bgActiveColor = colorGrey;
  } else if (props.btnvariant === 'tertiary') {
    borderColor = colorWhite;
    textColor = colorWhite;
    bgHoverColor = 'rgba(255, 255, 255, 0.1)';
    hoverBorderColor = colorWhite;
    hoverTextColor = colorWhite;
    borderFocusColor = colorWhite;
    textActiveColor = colorGrey;
    bgActiveColor = colorWhite;
  }
  return css`
    border: 3px solid ${borderColor};
    background-color: ${bgBtnColor};
    color: ${textColor};
    border-color: ${textColor};
    background-color: ${props.disabled && `${bgDisabledBtnColor} !important`};
    &:hover {
      background-color: ${bgHoverColor};
      border-color: ${hoverBorderColor};
      color: ${hoverTextColor};
    }

    &:focus {
      outline: none;
      background-color: ${bgFocusColor};
    }
    &:focus:before {
      content: '';
      border: 1px dotted ${borderFocusColor};
      border-radius: 35px;
      display: block;
      position: absolute;
      top: -4px;
      right: -4px;
      left: -4px;
      bottom: -4px;
    }
    &:active {
      outline: none;
      border-color: ${bgActiveColor};
      color: ${textActiveColor};
      background-color: ${bgActiveColor};
    }
    &:active:before {
      display: none;
    }
  `;
};
