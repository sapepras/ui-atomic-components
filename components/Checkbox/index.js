/**
 * Atomic Checkbox Component for all checkbox involving requirements.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';
// import classNames from 'classnames';
/**
 * default styles for atomic checkbox component.
 */
const CheckboxStyles = css`
opacity: 0;
width: 20px;
height: 20px;
position: absolute;
& + label::after {
  content: none;
}
&:checked + label::after {
  content: '';
}
&:focus + label::before {
    outline: 5px auto -webkit-focus-ring-color;
}
`;

const labelStyle = css`
position: relative;
display: inline-block;
font-size: 18px;
span {
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
}
&.icon-checkbox-inactive:before {
    opacity: 1;
  }
`;

const disabledCss = css`
&.icon-checkbox-inactive:before {
  opacity: 0.5;
}
`;

class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: props.checked
        };
        this.onChangeWrapper = this.onChangeWrapper.bind(this);
    }
    /**
     * wrapper function around onChange function of checkbox.
     * @param {func} onChange function is executed with status of checkbox as argument.
     */
    onChangeWrapper(onChange) {
        this.setState({ isChecked: !this.state.isChecked }, () => onChange(this.state.isChecked));
    }

    render() {
        const {
            id, disabled, onChange, auid, children, name, ...rest
        } = this.props;
        const { isChecked } = this.state;
        return (
          <div>
            <input name={name} data-auid={auid} id={id} disabled={disabled} className={`${CheckboxStyles}`} defaultChecked={this.state.isChecked} type="checkbox" onChange={() => this.onChangeWrapper(onChange)} {...rest} />
            <label
              className={`${labelStyle} ${isChecked ? 'academyicon icon-checkbox-active' : 'academyicon icon-checkbox-inactive'} ${disabled ? disabledCss : null} d-flex align-items-start`}
              htmlFor={id}
            >
              {children}
            </label>
          </div>
        );
    }
}

Checkbox.defaultProps = {
    checked: false,
    disabled: false,
    children: null
};

Checkbox.propTypes = {
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    id: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    auid: PropTypes.string,
    children: PropTypes.element
};

export default Checkbox;
