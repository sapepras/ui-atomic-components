import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';
/**
 * default styles to be applied to password field.
 * @param {object} props  containing various attributes to style password field.
 */
const CommonStyles = props => css`
  padding-left: ${props.padding};
  width: ${props.width};
  height: ${props.height};
  border-radius: ${props.borderradius};
  border: solid ${props.borderwidth} ${props.bordercolor};
  line-height: 1.25;
  font-size: ${props.fontSize};
  font-weight: ${props.fontWeight};
  ${props.classname};
`;

const InputStyles = props => css`
  border: 0px solid #fff;
  height: 100%;
  width: 100%;
  border-radius: ${props.borderradius};
  padding-left: 1%;
  font-size: ${props.fontSize};
  font-weight: ${props.fontWeight};
  opacity: ${props.disabled ? '0.5' : '1'}
  &:focus {
    outline: -webkit-focus-ring-color auto 5px;
  }
`;
/**
 * deafult styles to be applied to inline button.
 * @param {*} props to be passed to apply custom styles to inline button.
 */
const InlineButton = props => css`
  cursor: pointer;
  position: absolute;
  right: 4%;
  color: ${props.buttontextcolor};
  font-size: ${props.buttontextfont};
  border: none;
  background-color: ${props.buttonBg ? props.buttonBg : 'transparent'};
  &:hover {
    text-decoration: underline;
  }
  &:focus {
    outline: -webkit-focus-ring-color auto 5px;
  }
`;

class PasswordField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      password: ''
    };
    this.changeVisibility = this.changeVisibility.bind(this);
    this.onChangeWrapper = this.onChangeWrapper.bind(this);
  }
  /**
   * wrapper function around onChange function.
   * @param {object} event triggered when password field value changes.
   * @param {func} onChange function for the password field
   */
  onChangeWrapper(event, onChange) {
    this.setState({ password: event.target.value.trim() }); // trim the password for spaces, expected behavior.
    onChange(event);
  }
  /**
   * function handling visibility of password text.
   * @param {*} event triggered when show/hide inline button is clicked.
   */
  changeVisibility(event) {
    this.setState({ showPassword: !this.state.showPassword });
    event.preventDefault();
  }
  render() {
    const {
      classname,
      name,
      disabled,
      onChange,
      placeholder,
      value,
      width,
      height,
      fontSize,
      fontWeight,
      inlinebuttontexthide,
      inlinebuttontextshow,
      inlinebuttonclass,
      auid,
      ...rest
    } = this.props;
    return (
      <div
        className={`${CommonStyles(this.props)} ${classname} d-flex align-items-center`}
        width={width}
        height={height}
        fontSize={fontSize}
        fontWeight={fontWeight}
      >
        <input
          data-auid={auid}
          {...rest}
          name={name}
          className={`${InputStyles(this.props)} pr-6`}
          disabled={disabled}
          type={!this.state.showPassword ? 'password' : 'text'}
          onChange={event => this.onChangeWrapper(event, onChange)}
          placeholder={placeholder}
          value={this.state.password}
        />
        <button
          type="button"
          data-auid={`${auid}_inline_button`}
          tabIndex={0}
          className={`${InlineButton(this.props)} ${inlinebuttonclass}`}
          onClick={event => this.changeVisibility(event)}
        >
          {this.state.showPassword ? inlinebuttontexthide : inlinebuttontextshow}
        </button>
      </div>
    );
  }
}

PasswordField.defaultProps = {
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
  activebordercolor: '#E0E0E0',
  inlinebuttontexthide: 'Hide',
  inlinebuttontextshow: 'Show',
  buttontextfont: '1rem',
  buttontextweight: '300',
  onChange: () => {},
  padding: '0.2rem 0.5rem',
  inlinebuttonclass: 'body-12-bold'
};

PasswordField.propTypes = {
  classname: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
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
  inlinebuttontexthide: PropTypes.string,
  inlinebuttontextshow: PropTypes.string,
  buttontextcolor: PropTypes.string,
  buttontextfont: PropTypes.string,
  buttontextweight: PropTypes.string,
  inlinebuttonclass: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  padding: PropTypes.string,
  auid: PropTypes.string
};

export default PasswordField;
