import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';

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
    left: 6px;
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

    onChangeWrapper(onChange) {
        this.setState({ isChecked: !this.state.isChecked }, () => onChange(this.state.isChecked));
    }

    render() {
        const {
            formLabel, labelPosition, labelText, disabled, onChange, labelClass, name
        } = this.props;
        return (
           labelPosition === 'left' ?
             <label htmlFor={formLabel} className={(labelText !== undefined && labelText === '') ? '' : 'd-flex'}>
               <span className={labelClass}>{labelText}</span>
               <input name={name} id={formLabel} disabled={disabled} className={`${CheckboxStyles}`} defaultChecked={this.state.isChecked} type="checkbox" onChange={() => this.onChangeWrapper(onChange)} />
             </label>
          :
             <label htmlFor={formLabel} className={(labelText !== undefined && labelText === '') ? '' : 'd-flex'}>
               <input name={name} id={formLabel} disabled={disabled} className={`${CheckboxStyles}`} defaultChecked={this.state.isChecked} type="checkbox" onChange={() => this.onChangeWrapper(onChange)} />
               <span className={`${labelClass} d-flex align-items-center`}>{labelText}</span>
             </label>
        );
    }
}

Checkbox.defaultProps = {
    checked: false,
    labelPosition: 'right',
    labelText: '',
    disabled: false
};

Checkbox.propTypes = {
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    formLabel: PropTypes.string.isRequired,
    labelPosition: PropTypes.string,
    labelText: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    labelClass: PropTypes.oneOf(['string', 'object'])
};

export default Checkbox;
