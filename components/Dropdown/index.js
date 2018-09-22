import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';
import {
    HOVER_BACKGROUND_COLOR,
    HOVER_FOREGROUND_COLOR,
    DISABLED_HOVER_BACKGROUND_COLOR,
    DISABLED_HOVER_FOREGROUND_COLOR,
    KEYBOARD_SELECTED_BACKGROUND_COLOR,
    KEYBOARD_SELECTED_FOREGROUND_COLOR,
    DISABLED_CURSOR,
    ENABLED_CURSOR
} from './constants';

const DropdownStyle = props => css`
    position: relative;
    ul {
        margin: 0;
        padding: 0;
        width: 100%;
        list-style-type: none;
        max-height: ${props.maxHeight ? props.maxHeight : '10rem'};
        overflow-y:auto;
        overflow-x:hidden;
        position: absolute;
        background: #fff;
        z-index: ${props.zIndex ? props.zIndex : '4'};
        border-radius: ${props.listborderradius ? props.listborderradius : '5px'};
        box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08), 0 4px 8px 0 rgba(0, 0, 0, 0.04), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
        li {
        @media screen and (min-width: 768px) {
            font-size: 1rem;
        }
        font-size: 0.8rem;   
        padding: ${props.listItemPadding ? props.listItemPadding : '0.75rem 1rem'};
        min-height: ${props.multi ? '4.5rem' : '3rem'};
        height: auto;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: normal;
        cursor: ${ENABLED_CURSOR};
        &:hover {
            background: ${HOVER_BACKGROUND_COLOR};
            span {
                color: ${HOVER_FOREGROUND_COLOR};
            }
            &.disabled {
                background: ${DISABLED_HOVER_BACKGROUND_COLOR};
                span {
                    color: ${DISABLED_HOVER_FOREGROUND_COLOR};
                }
                cursor: ${DISABLED_CURSOR};
            }
        }

        &.disabled {
            background: ${DISABLED_HOVER_BACKGROUND_COLOR};
            color: ${DISABLED_HOVER_FOREGROUND_COLOR};
            cursor: ${DISABLED_CURSOR};
        }
        &.disabledKeySelected {
             background: ${DISABLED_HOVER_BACKGROUND_COLOR};
             span {
                color: ${DISABLED_HOVER_FOREGROUND_COLOR};
             }
             cursor: ${DISABLED_CURSOR};
        }
        &.keySelected {
            background: ${KEYBOARD_SELECTED_BACKGROUND_COLOR};
            span {
                color: ${KEYBOARD_SELECTED_FOREGROUND_COLOR};
            }
            &:hover {
                background: ${HOVER_BACKGROUND_COLOR};
                span {
                    color: ${HOVER_FOREGROUND_COLOR};
                }
            }
        }
        &.active {
            background: ${HOVER_BACKGROUND_COLOR};
            span {
                color: ${HOVER_FOREGROUND_COLOR};
            }
        }
        &:first-child {
            &:hover {
            border-radius: ${props.listborderradius ? props.listborderradius : '5px'} ${props.listborderradius ? props.listborderradius : '5px'} 0 0;
            }
        }
        &:last-child {
            &:hover {
            border-radius: 0 0 ${props.listborderradius ? props.listborderradius : '5px'} ${props.listborderradius ? props.listborderradius : '5px'};
            }
        }
    }
    ${props.className}
`;

const btnStyle = props => css`
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    align-items: center;
    padding: ${props.padding ? props.padding : '8px 16px 8px 12px'};
    @media screen and (min-width: 768px) {
        font-size: 1rem;
    }
    font-size: 0.8rem;
    width: ${props.width ? props.width : '100%'};
    height: ${props.height ? props.height : '3.5rem auto'};
    line-height: 1.25;
    position: relative;
    z-index: 1;
    background-color: #fff;
    overflow: hidden;
    text-overflow: ellipsis;
    border: ${props.borderwidth ? props.borderwidth : '1px'} solid ${props.bordercolor ? props.bordercolor : '#ccc'};
    border-radius: ${props.borderradius ? props.borderradius : '4px'};
    ${props.className}
`;

const indicatorArrow = css`
    @media screen and (min-width: 768px) {
        font-size: 0.85rem;
    }
    font-size: 0.45rem;
    margin-left: auto;
    padding-left: 0.2rem;
`;

const listStyle = props => css`
    width: ${props.width}
`;

const buttonContentStyle = css`
    max-width: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
`;

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDropdownOpen: false,
            activeListItem: this.props.initiallySelectedOption && this.props.initiallySelectedOption < this.props.DropdownOptions.length ? this.props.initiallySelectedOption : 0,
            selectedOption: this.props.initiallySelectedOption && this.props.initiallySelectedOption < this.props.DropdownOptions.length ? this.props.DropdownOptions[this.props.initiallySelectedOption] : this.placeholderOption(),
            hoveredListItem: -1,
            keyPressed: ' ',
            matchingOptions: []
        };

        this.onSelectWrapper = this.onSelectWrapper.bind(this);
        this.renderButtonContents = this.renderButtonContents.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.handleKeyboardEvents = this.handleKeyboardEvents.bind(this);
        this.toggleDropdownState = this.toggleDropdownState.bind(this);

        this.setWrapperRef = React.createRef();
        this.listRef = React.createRef();
    }

    // TODO:- Use getDerivedStateFromProps instead of deprecated ComponentWillRecieveProps
    componentWillReceiveProps(nextProps) {
        if (this.props.initiallySelectedOption !== nextProps.initiallySelectedOption) {
            this.setState({ selectedOption: nextProps.initiallySelectedOption < nextProps.DropdownOptions.length ? nextProps.DropdownOptions[nextProps.initiallySelectedOption] : nextProps.DropdownOptions[0], activeListItem: nextProps.initiallySelectedOption < nextProps.DropdownOptions.length ? nextProps.initiallySelectedOption : 0 });
        }
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyboardEvents);
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    /**
     *
     * @param {object} value selected option from the list
     * @param {func} onSelect function passed as prop to be executed when an option is selected
     * @param {number} index index of option selected from DropdownOptions
     */
    onSelectWrapper(value, onSelect, index) {
        if (!value.disabled) {
            this.setState({ selectedOption: value, activeListItem: index }, () => this.toggleDropdownState());
            onSelect(index, value.title); // only execute callback when the option is not disabled.
        }
    }
    /**
     * helper function to generate placeholder option for dropdown.
     */
    placeholderOption() {
        return this.props.placeholderOption ? this.props.placeholderOption : this.props.DropdownOptions[0];
    }

    /**
     * @param {object} event to be passed - handles clicks outside the dropdown and resets the state to close the dropdown.
     */
    handleClickOutside(event) {
        if (this.setWrapperRef.current && !this.setWrapperRef.current.contains(event.target)) {
            this.toggleDropdownState();
        }
    }
    /**
     * toggles dropdown as closed and open.
     * @param {object} event - event generated.
     */
    toggleDropdownState(event = { preventDefault: () => {} }) {
        event.preventDefault();
        if (this.state.isDropdownOpen) {
            this.setState(Object.assign({}, this.state, { isDropdownOpen: false }));
        } else {
            this.setState(Object.assign({}, this.state, { isDropdownOpen: true, hoveredListItem: this.state.activeListItem }), () => this.scrollToOffset('.active'));
        }
    }

    // TODO :- remove querySelectors if possible.
    /**
     * handles keyboard events and performs appropriate actions.
     * @param {object} event - the event generated via keyboard.
     */
    handleKeyboardEvents(event) {
        if ((event.key === 'ArrowDown' || event.key === 'Tab') && (this.state.hoveredListItem < this.props.DropdownOptions.length - 1)) {
            event.preventDefault();
            this.setState(Object.assign({}, this.state, { hoveredListItem: this.state.hoveredListItem + 1, keyPressed: event.key }), this.scrollToOffset);
        } else if (event.key === 'ArrowUp' && (this.state.hoveredListItem >= 1)) {
            event.preventDefault();
            this.setState(Object.assign({}, this.state, { hoveredListItem: this.state.hoveredListItem - 1, keyPressed: event.key }), this.scrollToOffset);
        } else if (event.key === 'Enter') {
            event.preventDefault();
            if (this.state.isDropdownOpen) {
                this.onSelectWrapper(this.state.hoveredListItem >= 0 ? this.props.DropdownOptions[this.state.hoveredListItem] : this.props.DropdownOptions[this.state.activeListItem], this.props.onSelectOption, this.state.hoveredListItem);
                this.setState(Object.assign({}, this.state, { hoveredListItem: 0, keyPressed: event.key }));
            } else {
                this.setState(Object.assign({}, this.state, { hoveredListItem: 0, keyPressed: event.key }), () => this.toggleDropdownState());
            }
        } else if (event.key === ' ') {
            event.preventDefault();
            this.setState(Object.assign({}, this.state, { hoveredListItem: 0, keyPressed: event.key }), () => this.toggleDropdownState());
        } else if (this.state.hoveredListItem >= -1) {
            this.lexicalSearch(event.key, this.props.DropdownOptions);
        }
    }

    /** helper function for filtering and returning index of matching elements.
     * @param {string} key - the key pressed by user on keyboard.
     * @param {array} options - array of options in dropdown.
     */
    lexicalSearch(key, options) {
        const { matchingOptions } = this.state;
        if (this.state.keyPressed === key && matchingOptions.length > 0) {
            matchingOptions.push(matchingOptions.splice(0, 1)[0]);
            this.setState(Object.assign({}, this.state, { hoveredListItem: matchingOptions[0] }), () => this.scrollToOffset());
        } else {
            const newList = options.map((option, index) => option.title.startsWith(key) || option.title.startsWith(key.toUpperCase()) ? index : null).filter(element => element !== null);
            if (newList.length > 0) {
                this.setState(Object.assign({}, this.state, { keyPressed: key, matchingOptions: newList, hoveredListItem: newList[0] }), () => this.scrollToOffset());
            }
        }
    }

    /**
     * manages scrolling when user uses keyboard.
     */
    scrollToOffset(identifier = '.keySelected') {
        if (this.state.hoveredListItem > -1) {
            if (document.querySelector(identifier)) {
                const elem = document.querySelector(identifier);
                const topPos = elem.offsetTop;
                document.getElementById('customDropdownList').scrollTop = topPos;
            } else if (document.querySelector('.disabledKeySelected')) {
                const elem = document.querySelector('.disabledKeySelected');
                const topPos = elem.offsetTop;
                document.getElementById('customDropdownList').scrollTop = topPos;
            }
        }
    }

    /* adds and removes keyboard listeners on dropdown collapse. */
    manageActiveListeners() {
        if (this.state.isDropdownOpen) {
            document.addEventListener('keydown', this.handleKeyboardEvents);
            document.addEventListener('mousedown', this.handleClickOutside);
        } else {
            document.removeEventListener('keydown', this.handleKeyboardEvents);
            document.removeEventListener('mousedown', this.handleClickOutside);
        }
    }

    /**
     *
     * @param {object} item is the object to be rendered inside button.
     * @param {object || string} titleClass is the custom style class for title of button text
     * @param {object || string} subtitleClass is the custom style class for subtitle of button text
     */
    renderButtonContents(item, titleClass = '', subtitleClass = '') {
        if (typeof item === 'object') {
            const content = (
              <div className={`${buttonContentStyle}`}>
                <div className={`${titleClass} `}>
                  <p className="m-0">{item.title}</p>
                </div>
                <div className={`${subtitleClass} `}>
                  <p className="mt-quarter mb-0">{item.subtitle}</p>
                </div>
              </div>);
            return content;
        }
        return this.state.selectedOption.title;
    }

    render() {
        const {
            DropdownOptions, multi, titleClass, subtitleClass, onSelectOption, disabled, name, id, auid
        } = this.props;
        const { selectedOption } = this.state;
        this.manageActiveListeners();
        return (
          <div name={name} id={id} ref={this.setWrapperRef} className={`${DropdownStyle(this.props)}`}>
            <button type="button" data-auid={auid} className={`${btnStyle(this.props)}`} disabled={disabled} onClick={event => this.toggleDropdownState(event)}>
              {this.renderButtonContents(selectedOption, titleClass, subtitleClass)}
              <span className={!this.state.isDropdownOpen ? `justify-content-end academyicon icon-chevron-down ${indicatorArrow}` : `d-flex justify-content-end academyicon icon-chevron-up ${indicatorArrow}`} />
            </button>
            {this.state.isDropdownOpen && (
            <ul data-auid={`${auid}_dropdownList`} id="customDropdownList" className={`${listStyle(this.props)} align-items-center`} role="presentation">
              <DropdownList multi={multi} titleClass={titleClass} subtitleClass={subtitleClass} options={DropdownOptions} onSelect={(value, index) => this.onSelectWrapper(value, onSelectOption, index)} activeListItem={this.state.activeListItem} hoveredListItem={this.state.hoveredListItem} />
            </ul>
            )}
          </div>
        );
    }
}

/**
 *
 * @param {object} props to be passed to the list of dropdown.
 */
const DropdownList = props => (
    !props.multi ?
    props.options.map((item, index) => <li data-auid={`${props.auid}_listOption_${index}`} className={`${deriveClassNameForListItem(props, index, item)}`} key={item.title} data-value={item.value} role="presentation" onClick={() => props.onSelect(item, index)}><span className={props.titleClass}>{item.title}</span></li>)     /* eslint-disable-line */
    :
    props.options.map((item, index) => item.subtitle ? <li data-auid={`${props.auid}_listOption_${index}`} className={deriveClassNameForListItem(props, index, item)} key={item.title} data-value={item.value} role="presentation" onClick={() => props.onSelect(item, index)}><span className={`${props.titleClass} d-block`}>{item.title}</span><span className={`${props.subtitleClass} d-block`}>{item.subtitle}</span></li>
    :
    <li data-auid={`${props.auid}_listOption_${index}`} className={deriveClassNameForListItem(props, index, item, 'd-flex align-items-center')} key={item.title} data-value={item.value} role="presentation" onClick={() => props.onSelect(item, index)}><span className={`${props.titleClass} `}>{item.title}</span></li>)
);

/**
 * derives className for each list item.
 * @param {*} props props passed to Dropdown List
 * @param {*} index index of element
 * @param {*} classname className to be applied to elemeent
 */
const deriveClassNameForListItem = (props, index, item, classname = '') => {
    let finalStyleClass = classname;
    if (item.disabled) {
        finalStyleClass = `${finalStyleClass} disabled`;
        if (props.hoveredListItem === index) {
            finalStyleClass = `${classname} disabledKeySelected`;
        }
    }
    if (!item.disabled && props.activeListItem === index) {
        finalStyleClass = `${finalStyleClass} active`;
    }
    if (!item.disabled && props.hoveredListItem === index) {
        finalStyleClass = `${finalStyleClass} keySelected`;
    }
    return finalStyleClass;
};

Dropdown.defaultProps = {
    disabled: false
};

Dropdown.propTypes = {
    DropdownOptions: PropTypes.array.isRequired,
    titleClass: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    multi: PropTypes.bool,
    subtitleClass: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    onSelectOption: PropTypes.func,
    initiallySelectedOption: PropTypes.number,
    disabled: PropTypes.bool,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    placeholderOption: PropTypes.object,
    auid: PropTypes.string
};

export default Dropdown;

