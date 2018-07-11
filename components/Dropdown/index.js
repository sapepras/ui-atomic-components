import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';

const DropdownStyle = css`
    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
        position: relative;
        background: #fff;
        z-index: 1;
        border-radius: 5px;
        box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08), 0 4px 8px 0 rgba(0, 0, 0, 0.04), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
        li {
        padding: 0.75rem 1rem;
        font-weight: normal;
        cursor: pointer;
        &:hover {
            color: #fff;
            background: #0055a6;
        }
        &:first-child {
            &:hover {
            border-radius: 5px 5px 0 0;
            }
        }
        &:last-child {
            &:hover {
            border-radius: 0 0 5px 5px;
            }
        }
    }
`;

const btnStyle = props => css`
    display: flex;
    padding: 0.2rem 0.5rem;
    width: ${props.width ? props.width : '30rem'};
    height: ${props.height ? props.height : '3.5rem'};
    line-height: 1.25;
    background-color: #fff;
    border: ${props.borderWidth ? props.borderWidth : '1px'} solid ${props.borderColor ? props.borderColor : '#ccc'};
    border-radius: ${props.borderRadius ? props.borderRadius : '4px'};
`;

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdowncollapse: false,
            selectedOption: this.props.initiallySelectedOption
        };
        this.onSelectWrapper = this.onSelectWrapper.bind(this);
        this.renderButtonContents = this.renderButtonContents.bind(this);
    }

    onSelectWrapper(value, onSelect) {
        this.setState({ selectedOption: value, dropdowncollapse: false });
        onSelect();
    }

    renderButtonContents(item, titleClass, subtitleClass) {
        if (typeof item === 'object') {
            const content = (
              <div className="d-flex flex-column">
                <div className={`d-flex justify-content-start ${titleClass} `}>
                  {item.title}
                </div>
                <div className={`d-flex justify-content-start ${subtitleClass} `}>
                  {item.subtitle}
                </div>
              </div>);
            return content;
        }
        return this.state.selectedOption.title;
    }

    render() {
        const {
            DropdownOptions, multi, titleClass, subtitleClass, onSelectOption
        } = this.props;
        return (
          <div className={`${DropdownStyle}`}>
            <button type="button" className={`${btnStyle(this.props)} d-flex justify-content-between align-items-center`} onClick={() => this.setState({ dropdowncollapse: !this.state.dropdowncollapse })}>
              {this.renderButtonContents(this.state.selectedOption, titleClass, subtitleClass)}
              <span className={!this.state.dropdowncollapse ? 'academyicon icon-chevron-down' : 'academyicon icon-chevron-up'} />
            </button>
            {this.state.dropdowncollapse && (
            <ul className="body-14-regular w-100" role="presentation">
              <DropdownList multi={multi} titleClass={titleClass} subtitleClass={subtitleClass} options={DropdownOptions} onSelect={value => this.onSelectWrapper(value, onSelectOption)} />
            </ul>
            )}
          </div>
        );
    }
}

const DropdownList = props => (
    !props.multi ?
    props.options.map(item => <li key={item.title} data-value={item.title} role="presentation" onClick={() => props.onSelect(item)}><span className={props.titleClass}>{item.title}</span></li>)
    :
    props.options.map(item => <li key={item.title} data-value={item.title} role="presentation" onClick={() => props.onSelect(item)}><span className={`${props.titleClass} d-block`}>{item.title}</span><span className={`${props.subtitleClass} d-block`}>{item.subtitle}</span></li>)
 );

Dropdown.defaultProps = {
    initiallySelectedOption: { title: 'Select' }
};

Dropdown.propTypes = {
    DropdownOptions: PropTypes.array.isRequired,
    titleClass: PropTypes.object,
    multi: PropTypes.bool,
    subtitleClass: PropTypes.object,
    onSelectOption: PropTypes.func,
    initiallySelectedOption: PropTypes.object
};

export default Dropdown;

