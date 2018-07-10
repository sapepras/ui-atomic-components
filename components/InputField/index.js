import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';

const CommonStyles = props => css`
  padding: 0.2rem 0.5rem;
  width: ${props.width};
  height: ${props.height};
  border-radius: ${props.borderRadius};
  border: solid ${props.borderWidth} ${props.borderColor};
  line-height: 1.25;
  font-size: ${props.fontSize};
  font-weight: ${props.fontWeight};
  opacity: ${props.disabled ? '0.5' : '1'}
  &:focus {
    border: solid ${props.activeBorderWidth} ${props.activeBorderColor};
  }
  ${props.className};
`;

const InputField = props => {
    const {
        className, type, disabled, onChange, placeholder, value, width, height, fontSize, borderWidth, borderColor, borderRadius, activeBorderColor, activeBorderWidth, fontWeight
    } = props;
    return (
      <input className={`${CommonStyles(props)} ${className}`} disabled={disabled} type={type} onChange={onChange} placeholder={placeholder} value={value} width={width} height={height} fontSize={fontSize} borderColor={borderColor} borderWidth={borderWidth} borderRadius={borderRadius} activeBorderColor={activeBorderColor} activeBorderWidth={activeBorderWidth} fontWeight={fontWeight} />
    );
  };

InputField.defaultProps = {
  type: 'text',
  disabled: false,
  placeholder: '',
  width: '40rem',
  height: '2.5rem',
  borderRadius: '4px',
  borderWidth: '1px',
  borderColor: 'rgba(0, 0, 0, 0.2)',
  fontSize: '1rem',
  fontWeight: '300',
  activeBorderWidth: '1px',
  activeBorderColor: '#585858'
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
