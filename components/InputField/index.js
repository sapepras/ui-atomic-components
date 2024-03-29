/**
 * Atomic Input Field Component for all routine text fields. For email, password - try respective atomic components, available separately.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';

/**
 * default styles to be applied to input field.
 * @param {object} props  containing various attributes to style input field.
 */
const CommonStyles = props => css`
  padding: ${props.padding};
  width: ${props.width};
  height: ${props.height};
  border-radius: ${props.borderradius};
  border: solid ${props.borderwidth} ${props.bordercolor};
  line-height: 1.25;
  font-size: ${props.fontSize};
  font-weight: ${props.fontWeight};
  opacity: ${props.disabled ? '0.5' : '1'};
  background-clip: padding-box;
  &:focus {
    border: solid ${props.activeborderwidth} ${props.activebordercolor};
  }
`;
// dumb component to render input field.
const InputField = props => {
    const {
        classname, type, name, id, disabled, onChange, placeholder, value, auid, ...rest
    } = props;
    return (
      <input data-auid={auid} {...rest} name={name} id={id} className={`${CommonStyles(props)} ${classname}`} disabled={disabled} type={type} onChange={onChange} placeholder={placeholder} value={value} />
    );
  };

InputField.defaultProps = {
  type: 'text',
  disabled: false,
  placeholder: '',
  width: '40rem',
  height: '2.5rem',
  borderradius: '4px',
  borderwidth: '1px',
  bordercolor: 'rgba(0, 0, 0, 0.2)',
  fontSize: '1rem',
  fontWeight: '300',
  activeborderwidth: '1px',
  activebordercolor: '#585858',
  padding: '0.2rem 0.5rem'
};

InputField.propTypes = {
    classname: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    type: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    fontSize: PropTypes.string,
    bordercolor: PropTypes.string,
    borderwidth: PropTypes.string,
    borderradius: PropTypes.string,
    activebordercolor: PropTypes.string,
    activeborderwidth: PropTypes.string,
    fontWeight: PropTypes.string,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    padding: PropTypes.string,
    auid: PropTypes.string
};

export default InputField;
