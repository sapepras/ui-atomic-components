import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';

const DropdownStyle = props => css`
    position: relative;
    ul {
        margin: 0;
        padding: 0;
        width: 100%;
        list-style-type: none;
        position: absolute;
        background: #fff;
        z-index: 1;
        border-radius: ${props.listBorderRadius ? props.listBorderRadius : '5px'};
        box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08), 0 4px 8px 0 rgba(0, 0, 0, 0.04), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
        li {
        padding: 0.75rem 1rem;
        min-height: 4.5rem;
        font-weight: normal;
        cursor: pointer;
        &:hover {
            background: #0055a6;
            span {
                color: #fff;
            }
        }
        &.active {
            background: #0055a6;
            span {
                color: #fff;
            }
        }
        &:first-child {
            &:hover {
            border-radius: ${props.listBorderRadius ? props.listBorderRadius : '5px'} ${props.listBorderRadius ? props.listBorderRadius : '5px'} 0 0;
            }
        }
        &:last-child {
            &:hover {
            border-radius: 0 0 ${props.listBorderRadius ? props.listBorderRadius : '5px'} ${props.listBorderRadius ? props.listBorderRadius : '5px'};
            }
        }
    }
    ${props.className}
`;

const btnStyle = props => css`
    display: flex;
    padding: 0.5rem 1rem;
    width: ${props.width ? props.width : '100%'};
    height: ${props.height ? props.height : '3.5rem'};
    line-height: 1.25;
    background-color: #fff;
    border: ${props.borderWidth ? props.borderWidth : '1px'} solid ${props.borderColor ? props.borderColor : '#ccc'};
    border-radius: ${props.borderRadius ? props.borderRadius : '4px'};
    ${props.className}
`;

const listStyle = props => css`
    width: ${props.width}
`;

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdowncollapse: false,
            activeListItem: this.props.initiallySelectedOption < this.props.DropdownOptions.length ? this.props.initiallySelectedOption : 0,
            selectedOption: this.props.initiallySelectedOption < this.props.DropdownOptions.length ? this.props.DropdownOptions[this.props.initiallySelectedOption] : { title: 'Select' }
        };
        this.onSelectWrapper = this.onSelectWrapper.bind(this);
        this.renderButtonContents = this.renderButtonContents.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    onSelectWrapper(value, onSelect, index) {
        this.setState({ selectedOption: value, dropdowncollapse: false, activeListItem: index });
        onSelect(index);
    }
    setWrapperRef(node) {
        this.wrapperRef = node;
    }
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({ dropdowncollapse: false });
        }
    }

    renderButtonContents(item, titleClass = '', subtitleClass = '') {
        if (typeof item === 'object') {
            const content = (
              <div>
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
            DropdownOptions, multi, titleClass, subtitleClass, onSelectOption, disabled
        } = this.props;
        return (
          <div ref={this.setWrapperRef} className={`${DropdownStyle(this.props)}`}>
            <button type="button" className={`${btnStyle(this.props)} d-flex justify-content-between align-items-center`} disabled={disabled} onClick={() => this.setState({ dropdowncollapse: !this.state.dropdowncollapse })}>
              {this.renderButtonContents(this.state.selectedOption, titleClass, subtitleClass)}
              <span className={!this.state.dropdowncollapse ? 'academyicon icon-chevron-down' : 'academyicon icon-chevron-up'} />
            </button>
            {this.state.dropdowncollapse && (
            <ul className={`${listStyle(this.props)} align-items-center`} role="presentation" >
              <DropdownList multi={multi} titleClass={titleClass} subtitleClass={subtitleClass} options={DropdownOptions} onSelect={(value, index) => this.onSelectWrapper(value, onSelectOption, index)} activeListItem={this.state.activeListItem} />
            </ul>
            )}
          </div>
        );
    }
}
const DropdownList = props => (
    !props.multi ?
    props.options.map((item, index) => <li className={props.activeListItem === index ? 'active' : ''} key={item.title} data-value={item.value} role="presentation" onClick={() => props.onSelect(item, index)}><span className={props.titleClass}>{item.title}</span></li>)
    :
    props.options.map((item, index) => item.subtitle ? <li className={props.activeListItem === index ? 'active' : ''} key={item.title} data-value={item.value} role="presentation" onClick={() => props.onSelect(item, index)}><span className={`${props.titleClass} d-block`}>{item.title}</span><span className={`${props.subtitleClass} d-block`}>{item.subtitle}</span></li>
    :
    <li className={props.activeListItem === index ? 'd-flex align-items-center active' : 'd-flex align-items-center'} key={item.title} data-value={item.value} role="presentation" onClick={() => props.onSelect(item, index)}><span className={`${props.titleClass} `}>{item.title}</span></li>)
 );

Dropdown.defaultProps = {
    initiallySelectedOption: { title: 'Select' },
    disabled: false
};

Dropdown.propTypes = {
    DropdownOptions: PropTypes.array.isRequired,
    titleClass: PropTypes.object,
    multi: PropTypes.bool,
    subtitleClass: PropTypes.object,
    onSelectOption: PropTypes.func,
    initiallySelectedOption: PropTypes.number,
    disabled: PropTypes.bool
};

export default Dropdown;

