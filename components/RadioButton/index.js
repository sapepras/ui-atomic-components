import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';

const RadioStyles = css`
  position: relative;
  [type="radio"] + label {
    margin: 0;
  }
  [type="radio"]:checked,
  [type="radio"]:not(:checked) {
    position: absolute;
    left: -9999px;
  }
  [type="radio"]:checked + label,
  [type="radio"]:not(:checked) + label {
    position: relative;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: #666;
  }
  [type="radio"]:checked + label:before,
  [type="radio"]:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);-ms-transform: translateY(-50%);transform: translateY(-50%);
    width: 11px;
    height: 11px;
    border: 1px solid #585858;
    border-radius: 100%;
    background: #fff;
    @media screen and (min-width: 768px) {
      width: 14px;
      height: 14px;
    }
  }
  [type="radio"]:checked + label:after,
  [type="radio"]:not(:checked) + label:after {
    content: '';
    width: 5px;
    height: 5px;
    background: #585858;
    position: absolute;
     top: 50%;
    -webkit-transform: translateY(-50%);-ms-transform: translateY(-50%);transform: translateY(-50%);
    left: 3px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
    @media screen and (min-width: 768px) {
      width: 8px;
      height: 8px;
    }
  }
  [type="radio"]:not(:checked) + label:after {
      opacity: 0;
      
  }
  [type="radio"]:checked + label:after {
      opacity: 1;
      
  }
`;

class RadioButton extends Component {
  constructor(props) {
    super(props);
    this.onChangeWrapper = this.onChangeWrapper.bind(this);
  }

  onChangeWrapper(onChange, value) {
    onChange(value);
  }

  render() {
    const {
      id, disabled, onChange, name, auid, initialState, value, children, ...rest
    } = this.props;
    return (
      <span
        className={`${RadioStyles}`}
      >
        <input
          name={name}
          id={id}
          value={value}
          data-auid={auid}
          disabled={disabled}
          checked={initialState === `${value}`}
          type="radio"
          onChange={() => this.onChangeWrapper(onChange, value)}
          {...rest}
        />
        <label htmlFor={id}>
          {children}
        </label>
      </span>
    );
  }
}

RadioButton.defaultProps = {
  disabled: false
};

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  initialState: PropTypes.string,
  auid: PropTypes.string,
  children: PropTypes.node
};

export default RadioButton;
