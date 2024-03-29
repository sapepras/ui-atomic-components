import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';

const styledInput = props => css`
  position: relative;
  input {
    padding: ${props.padding};
    width: ${props.width};
    height: ${props.height};
    border-radius: ${props.borderradius};
    border: solid ${props.borderwidth} ${props.bordercolor};
    line-height: 1.25;
    font-size: ${props.fontSize};
    font-weight: ${props.fontWeight};
    opacity: ${props.disabled ? '0.5' : '1'}
    &:focus {
      border: solid ${props.activeborderwidth} ${props.activebordercolor};
    }
    position: relative;
    background: transparent;
    z-index: 1;
    word-break: break-word;
    ${props.classname};
  }
  .suggestion {
    position: absolute;
    top: -3px;
    left: 1px;
    z-index: 0;
    color: #757575;
    height: ${props.height};
    line-height: ${props.height};
    padding: ${props.padding};
    font-size: ${props.fontSize};
    font-weight: ${props.fontWeight};
  }
  
`;

// if this limit is met we disable domain suggest
const DEFAULT_DOMAIN_SUGGEST_CHAR_LIMIT = 15;

export default class EmailField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.initialValue ? props.initialValue : '',
      suggestedEmail: ''
    };
    this.onChangeInput = this.onChangeInput.bind(this);
    this.UseSuggestionKeyHandler = this.UseSuggestionKeyHandler.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);
  }

  onBlurHandler() {
    if (this.state.suggestedEmail) {
      this.setState({ value: this.state.suggestedEmail }, () => this.props.onChange(this.state.value));
    } else {
      this.props.onChange(this.state.value);
    }
  }

  onChangeInput(event, onChange) {
    const { target } = event;
    const { value } = target;
    this.setState({ value });
    let splitValues;
    let suggestedEmail;
    if (value.indexOf('@') !== -1) {
      splitValues = value.split('@');
      if (splitValues[1] !== '') {
        const rcvdDomain = this.findMatchingEmailDomain(splitValues[1]);
        if (rcvdDomain !== '' && this.canSuggestDomain(value)) {
          suggestedEmail = `${value}${rcvdDomain}`;
        } else {
          suggestedEmail = '';
        }
      }
    }
    this.setState({ suggestedEmail }, () => onChange(this.state.value));
  }

  canSuggestDomain(value) {
    const { domainSuggestCharLimit: propsDomainSuggestCharLimit } = this.props;
    const domainSuggestCharLimit = propsDomainSuggestCharLimit ? Number.parseInt(propsDomainSuggestCharLimit, 10) : DEFAULT_DOMAIN_SUGGEST_CHAR_LIMIT;
    return value.split('@')[0].length <= domainSuggestCharLimit;
  }

  UseSuggestionKeyHandler(event, onChange) {
    if (
      (event.keyCode === 9 || event.keyCode === 13 || event.keyCode === 39) &&
      (this.state.suggestedEmail && this.state.suggestedEmail !== this.state.value)
    ) {
      this.setState({ value: this.state.suggestedEmail }, () => onChange(this.state.value));
      event.preventDefault();
    }
  }

  findMatchingEmailDomain(searchString) {
    const { domainsList } = this.props;
    const filteredVal = domainsList.find(item => item.indexOf(searchString) === 0);
    const filterValLen = searchString.length;
    return filteredVal ? filteredVal.substr(filterValLen) : '';
  }

  render() {
    const { classname, name, id, disabled, placeholder, onChange, value, auid, initialValue, domainsList, ...rest } = this.props;
    return (
      <div className={`${styledInput(this.props)}`} onBlur={this.onBlurHandler}>
        <input
          data-auid={auid}
          disabled={disabled}
          name={name}
          id={id}
          type="email"
          placeholder={placeholder}
          value={this.state.value}
          onChange={event => this.onChangeInput(event, onChange)}
          onKeyDown={event => this.UseSuggestionKeyHandler(event, onChange)}
          data-suggested={this.state.suggestedEmail}
          {...rest}
        />
        <div data-auid={`${auid || 'email'}_suggestion`} className="suggestion">
          {this.state.suggestedEmail}
        </div>
      </div>
    );
  }
}

EmailField.defaultProps = {
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
  padding: '0.2rem 0.5rem',
  onChange: () => {},
  initialValue: ''
};

EmailField.propTypes = {
  domainsList: PropTypes.array.isRequired,
  classname: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  disabled: PropTypes.bool,
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
  padding: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  initialValue: PropTypes.string,
  auid: PropTypes.string,
  domainSuggestCharLimit: PropTypes.string
};
