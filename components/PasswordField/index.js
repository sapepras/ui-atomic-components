import React, { Component } from 'react';
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
  :focus-within {
    border: solid ${props.activeBorderWidth} ${props.activeBorderColor};
  }
  ${props.className};
`;

const InputStyles = props => css`
  border: 0px solid #fff;
  height: 100%;
  width: 95%;
  font-size: ${props.fontSize};
  font-weight: ${props.fontWeight};
  opacity: ${props.disabled ? '0.5' : '1'}
  &:focus {
    outline: none;
    border: 0;
    box-shadow: none;
  }
  :focus-within {
    outline: none;
    border: 0;
    box-shadow: none;
  }
`;

const InlineButton = props => css`
  cursor: pointer;
  color: ${props.buttonTextColor};
  font-size: ${props.fontSize};
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

    onChangeWrapper(event, onChange) {
        this.setState({ password: event.target.value.trim() });
        onChange(event);
    }

    changeVisibility() {
        this.setState({ showPassword: !this.state.showPassword });
    }
    render() {
        const {
            className, name, disabled, onChange, placeholder, value, width, height, fontSize, borderWidth, borderColor, borderRadius, activeBorderColor, activeBorderWidth, inlineButtonTextHide, inlineButtonTextShow, fontWeight, buttonTextColor, buttonTextFont, buttonTextWeight, maxLength, ...rest
        } = this.props;
        return (
          <div className={`${CommonStyles(this.props)} ${className} d-flex align-items-center`} width={width} height={height} fontSize={fontSize} borderColor={borderColor} borderWidth={borderWidth} borderRadius={borderRadius} activeBorderColor={activeBorderColor} activeBorderWidth={activeBorderWidth} fontWeight={fontWeight}>
            <input {...rest} name={name} className={`${InputStyles(this.props)}`} disabled={disabled} type={!this.state.showPassword ? 'password' : 'text'} onChange={event => this.onChangeWrapper(event, onChange)} placeholder={placeholder} value={this.state.password} maxLength={maxLength} />
            <div className={`${InlineButton(this.props)}`} onClick={this.changeVisibility} role="presentation">{this.state.showPassword ? inlineButtonTextHide : inlineButtonTextShow }</div>
          </div>
        );
    }
}

PasswordField.defaultProps = {
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
  activeBorderColor: '#E0E0E0',
  inlineButtonTextHide: 'Hide',
  inlineButtonTextShow: 'Show',
  buttonTextColor: '#0055a6',
  buttonTextFont: '1rem',
  buttonTextWeight: '300',
  onChange: () => {}
};

PasswordField.propTypes = {
    className: PropTypes.string,
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
    fontWeight: PropTypes.string,
    name: PropTypes.string,
    inlineButtonTextHide: PropTypes.string,
    inlineButtonTextShow: PropTypes.string,
    buttonTextColor: PropTypes.string,
    buttonTextFont: PropTypes.string,
    buttonTextWeight: PropTypes.string,
    maxLength: PropTypes.string
};

export default PasswordField;
