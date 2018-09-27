/**
 * Atomic Checkbox Component for all checkbox involving requirements.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';
/**
 * default styles for atomic checkbox component.
 */
const CheckboxStyles = css`
    position: relative;
    cursor: pointer;
    padding: 0;
    margin-right: 10px;
    margin-top: 3px;
    &:before {
    content: '';
    margin-right: 10px;
    display: inline-block;
    vertical-align: text-top;
    width: 18px;
    height: 18px;
    background: #fff;
    border: 2px solid #585858;
    border-radius: 2px;
    top: -2px;
    left: -2px;
    position: absolute;
    }
    &:hover:after {
    color: #fff;
    }
    &:checked:before {
    background: #585858;
    }
    &:disabled {
    color: #b8b8b8;
    cursor: auto;
    }
    &:disabled:before {
    background: #ddd;
    }
    &:checked:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 4px;
    width: 6px;
    height: 11px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(35deg);
            transform: rotate(35deg);
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
            id, disabled, onChange, auid, name, ...rest
        } = this.props;
        return (
          <input name={name} data-auid={auid} id={id} disabled={disabled} className={`${CheckboxStyles}`} defaultChecked={this.state.isChecked} type="checkbox" onChange={() => this.onChangeWrapper(onChange)} {...rest} />
        );
    }
}

Checkbox.defaultProps = {
    checked: false,
    disabled: false
};

Checkbox.propTypes = {
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    id: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    auid: PropTypes.string
};

export default Checkbox;
