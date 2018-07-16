import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';

const RadioLabel = props => css`
    position: relative;
    span {
        display: inline-block;
        margin-left: ${props.marginLeft};
        position: relative;
        top: ${props.top};
    }
`;

const RadioStyles = css`
    &[type="radio"]:checked + strong:before,
    &[type="radio"]:not(:checked) + strong:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 14px;
        height: 14px;
        border: 1px solid #585858;
        border-radius: 100%;
        background: #fff;
    }
    &[type="radio"]:checked + strong:after,
    &[type="radio"]:not(:checked):after {
        content: '';
        width: 8px;
        height: 8px;
        background: #585858;
        position: absolute;
        top: 3px;
        left: 3px;
        border-radius: 100%;
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
    }
`;

class RadioButton extends Component {
    constructor(props) {
        super(props);
        const { initialState } = this.props;
        this.state = {
            isChecked: initialState
        };
        this.onChangeWrapper = this.onChangeWrapper.bind(this);
    }

    onChangeWrapper(onChange) {
        this.setState({ isChecked: !this.state.isChecked });
        onChange();
    }

    render() {
        const {
            formLabel, labelPosition, labelText, disabled, onChange, labelClass, top, marginLeft
        } = this.props;
        return (
            labelPosition === 'left' ?
              <label htmlFor={formLabel} className={(labelText !== undefined && labelText === '') ? `${RadioLabel}` : `${RadioLabel} d-flex`}>
                <span className={labelClass}>{labelText}</span>
                <input disabled={disabled} checked={this.state.isChecked} className={`${RadioStyles}`} id={formLabel} type="radio" onChange={() => this.onChangeWrapper(onChange)} />
                <strong></strong>
              </label>
           :
              <label htmlFor={formLabel} className={(labelText !== undefined && labelText === '') ? `${RadioLabel}` : `${RadioLabel} d-flex`}>
                <input disabled={disabled} checked={this.state.isChecked} className={`${RadioStyles}`} id={formLabel} type="radio" onChange={() => this.onChangeWrapper(onChange)} />
                <strong></strong>
                <span className={labelClass}>{labelText}</span>
              </label>
         );
    }
}

RadioButton.defaultProps = {
    initialState: false,
    labelPosition: 'right',
    formLabel: 'radioButton',
    labelText: '',
    disabled: false,
    top: '-1px',
    marginLeft: '14px'
};

RadioButton.propTypes = {
    initialState: PropTypes.bool,
    formLabel: PropTypes.string,
    labelPosition: PropTypes.string,
    labelText: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    labelClass: PropTypes.object,
    top: PropTypes.string,
    marginLeft: PropTypes.string
};

export default RadioButton;
