import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

const CommonStyles = props => css`
  padding: 0.2rem 0.5rem;
  width: ${props.width}rem;
  height: ${props.height}rem;
  border-radius: ${props.borderRadius ? props.borderRadius : '4'}px;
  border: solid ${props.borderWidth ? props.borderWidth : '1'}px ${props.borderColor ? props.borderColor : 'rgba(0, 0, 0, 0.2)'};
  line-height: 1.25;
  font-size: ${props.fontSize ? props.fontSize : '1'}rem;
  font-weight: ${props.fontWeight ? props.fontWeight : '300'};
  opacity: ${props.disabled ? '0.5' : '1'}
  &:active {
    border: solid ${props.activeBorderWidth ? props.activeBorderWidth : '1'}px ${props.activeBorderColor ? props.activeBorderColor : '#585858'};
  }
  &:focus {
    border: solid ${props.activeBorderWidth ? props.activeBorderWidth : '1'}px ${props.activeBorderColor ? props.activeBorderColor : '#585858'};
  }
  ${props.className};
`;

const StyledInput = styled('input')`
  ${CommonStyles};
`;

const InputField = props => {
    const {
        className, type, disabled, onChange, placeholder, value, width, height, fontSize, borderWidth, borderColor, borderRadius, activeBorderColor, activeBorderWidth, fontWeight
    } = props;
    return (
      <StyledInput className={className} disabled={disabled} type={type} onChange={onChange} placeholder={placeholder} value={value} width={width} height={height} fontSize={fontSize} borderColor={borderColor} borderWidth={borderWidth} borderRadius={borderRadius} activeBorderColor={activeBorderColor} activeBorderWidth={activeBorderWidth} fontWeight={fontWeight} />
    );
  };

InputField.defaultProps = {
  type: 'text',
  disabled: false,
  placeholder: ''
};

InputField.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    fontSize: PropTypes.string,
    borderColor: PropTypes.string,
    borderWidth: PropTypes.string,
    borderRadius: PropTypes.string,
    activeBorderColor: PropTypes.string,
    activeBorderWidth: PropTypes.string,
    fontWeight: PropTypes.string
};

export default InputField;
