
import { css } from 'react-emotion';
import {
    colorPrimary,
    colorHover,
    colorHoverSecondary,
    colorWhite,
    colorLightSteelBlue,
    colorGrey,
    getPrimaryColor
} from '../color';

export const secondaryBtnStyles = props => {
    let borderColor = colorPrimary;
    let bgBtnColor = colorWhite;
    let textColor = getPrimaryColor(props, colorLightSteelBlue, colorPrimary);
    let bgDisabledBtnColor = colorWhite;
    let bgHoverColor = colorHoverSecondary;
    let hoverBorderColor = colorHover;
    let hoverTextColor = colorHover;
    let bgFocusColor = colorWhite;
    let borderFocusColor = colorPrimary;
    let textActiveColor = colorWhite;
    let bgActiveColor = colorPrimary;
    if (props.btnvariant === 'secondary') {
        borderColor = '#4a4a4a';
        textColor = getPrimaryColor(props, colorGrey, '##585858');
        bgHoverColor = '#f6f6f6';
        hoverBorderColor = '#9b9b9b';
        hoverTextColor = '#9b9b9b';
        borderFocusColor = colorGrey;
        textActiveColor = colorWhite;
        bgActiveColor = colorGrey;
    } else if (props.btnvariant === 'tertiary') {
        borderColor = colorWhite;
        bgBtnColor = '#4c4c4c';
        textColor = colorWhite;
        bgDisabledBtnColor = '#4c4c4c';
        bgHoverColor = 'rgba(255, 255, 255, 0.1)';
        hoverBorderColor = colorWhite;
        hoverTextColor = colorWhite;
        bgFocusColor = '#4c4c4c';
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
      outline:none;
      background-color: ${bgFocusColor};
    }
    &:focus:before{
      content: "";
      border: 1px dotted ${borderFocusColor};
      border-radius: 35px;
      display: block;
      position: absolute;
      top: -4px;
      right:-4px;
      left:-4px;
      bottom:-4px;
    }
    &:active {
      outline:none;
      border-color: ${bgActiveColor};
      color: ${textActiveColor};
      background-color: ${bgActiveColor};
    }
    &:active:before {
      display:none;
    }
`;
};

