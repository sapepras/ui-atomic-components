import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';

const RadioStyles = css`
    input[type="radio"] {
        opacity: 0;
    }
    input[type="radio"]:checked + strong:before,
    input[type="radio"]:not(:checked) + strong:before {
        content: '';
        position: absolute;
        left: 0;
        top: 2px;
        width: 14px;
        height: 14px;
        border: 1px solid #585858;
        border-radius: 100%;
        background: #fff;
    }
    input[type="radio"]:checked + strong:after,
    input[type="radio"]:not(:checked):after {
        content: '';
        width: 8px;
        height: 8px;
        background: #585858;
        position: absolute;
        top: 5px;
        left: 3px;
        border-radius: 100%;
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
    }
`;

class RadioButton extends Component {
    constructor(props) {
        super(props);
        this.onChangeWrapper = this.onChangeWrapper.bind(this);
    }

    onChangeWrapper(onChange, id) {
        onChange(id);
    }

    render() {
        const {
            id, labelPosition, labelText, disabled, onChange, labelClass, name, initialState
        } = this.props;
        return (
            labelPosition === 'left' ?
              <label htmlFor={id} className={`${labelClass} ${RadioStyles}`}>
                <span>{labelText}</span>
                <input name={name} id={id} disabled={disabled} checked={initialState === `${id}`} type="radio" onChange={() => this.onChangeWrapper(onChange, id)} />
                <strong></strong>
              </label>
           :
              <label htmlFor={id} className={`${labelClass} ${RadioStyles}`}>
                <input name={name} id={id} disabled={disabled} checked={initialState === `${id}`} type="radio" onChange={() => this.onChangeWrapper(onChange, id)} />
                <strong></strong>
                <span>{labelText}</span>
              </label>
         );
    }
}

RadioButton.defaultProps = {
    labelPosition: 'right',
    labelText: '',
    disabled: false
};

RadioButton.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    labelPosition: PropTypes.string,
    labelText: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    initialState: PropTypes.string,
    labelClass: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

export default RadioButton;
