import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css, cx } from 'react-emotion';
import { ENTER_KEY_CODE, EVENT_CLICK_TYPE } from '../../constants';

const StyledButton = styled('button')`
  background-color: #ffffff;
  min-height: 62px;
  font-size: 16px;
  line-height: 1.25rem;
  letter-spacing: 0.5;
  font-color: #585858;
  line-color: #e6e6e6;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 0px;
  background-color: #fff;
  border-top: 1px solid rgb(230, 230, 230);
  padding: 1rem;
  justify-content: space-between;

  & > p {
    margin: 0px;
  }
`;

const DrawerWrapStyle = css`
  position: relative;
  display: flex;
  flex-direction: column;
  &:focus {
    outline: -webkit-focus-ring-color auto 5px;
  }
`;

const DrawerTitleStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  width: 100%;
`;

const DrawerContentStyle = css`
  min-height: 62px;
  padding: 1rem;
  font-size: 14px;
  border-top: 1px solid #f6f6f6;
`;

const MakeScrollable = css`
  overflow-y: scroll;
`;

const SetBackground = color => css`
  background-color: ${color};
`;

const SetMaxHeight = bodyHeight => css`
  max-height: ${bodyHeight};
`;

const ExpandUpward = bodyHeight => css`
  margin-top: -${bodyHeight};
`;
const removeFocus = css`
  outline: none;
  &:focus {
    outline: none;
  }
`;
const giveFocus = css`
  &:focus {
    outline: 1px solid webkit-focus-ring-color;
  }
`;

class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: this.props.isCollapsible ? this.props.isOpen : true, isClick: true, isFocus: false };
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.updateOnToggle = this.updateOnToggle.bind(this);
    this.toggleDrawerKey = this.toggleDrawerKey.bind(this);
    this.addFocus = this.addFocus.bind(this);
  }

  /**
   * This function is to toggle the open state for drawer
   * @param {Object} newProps The modified/next props received
   */
  componentWillReceiveProps(newProps) {
    if (newProps.isOpen !== this.props.isOpen) {
      this.setState({ isOpen: newProps.isOpen });
    }
  }

  toggleDrawerKey(e) {
    if (e.keyCode === ENTER_KEY_CODE) {
      this.toggleDrawer();
    }
  }
  /**
   * used to call  more than one function after state update in toggleDrawer function
   *
   * @memberof Drawer
   */
  updateOnToggle() {
    this.updateAnalytics();
    this.props.onToggle(this.state.isOpen);
  }
  addFocus() {
    this.setState({ isClick: false, isFocus: true });
  }
  /**
   * Open or close Drawer
   */
  toggleDrawer(e) {
    if (e.type === EVENT_CLICK_TYPE) {
      this.setState({ isFocus: false, isClick: true });
    } else {
      this.setState({ isClick: false, isFocus: true });
    }
    if (this.props.isCollapsible) {
      this.setState(
        prevstate => ({ isOpen: !prevstate.isOpen }),
        () => {
          this.updateOnToggle();
        }
      );
    } else {
      this.setState({ isOpen: true }, this.updateAnalytics);
      this.props.onToggle(true);
    }
  }

  /**
   * Update GA dataLayer
   */
  updateAnalytics() {
    if (this.props.gtmDataLayer) {
      const { eventCategory, eventLabel, title } = this.props;
      this.props.gtmDataLayer.push({
        event: 'accordionLinks',
        eventCategory: eventCategory || title.toString(),
        eventAction: this.state.isOpen ? 'expand' : 'collapse',
        eventLabel: eventLabel || title.toString()
      });
    }
  }

  render() {
    const {
 title, auid, tabIndex, isCollapsible, expandBelow, bodyHeight, bodyStyle, titleStyleOpen, titleStyle, domid, ariaRequired
} = this.props;
    let classlist = '';
    const { isClick, isFocus } = this.state;
    if (this.state.isOpen) {
      classlist = `${this.props.openIcon}`;
    } else {
      classlist = `${this.props.closeIcon}`;
    }

    return (
      <div id={domid} className={`${DrawerWrapStyle} ${this.state.isOpen && !expandBelow ? ExpandUpward(bodyHeight) : ''}`} data-auid={`facetdrawer${auid}`}>
        <StyledButton
          aria-pressed={this.state.isOpen}
          aria-label={ariaRequired && title}
          // className={`${this.state.isOpen ? titleStyleOpen : null} ${this.state.isClick ? removeFocus : null} ${titleStyle}`}
          className={cx({
            [titleStyleOpen]: this.state.isOpen,
            [removeFocus]: isClick,
            [giveFocus]: isFocus,
            [titleStyle]: true
          })}
          type="button"
          onClick={this.toggleDrawer}
          onFocus={this.addFocus}
          tabIndex={tabIndex}
        >
          <span className={DrawerTitleStyle}>
            {title}
            {isCollapsible && <i className={classlist} />}
          </span>
        </StyledButton>
        {this.state.isOpen && (
          <div
            className={`${DrawerContentStyle} ${isCollapsible && bodyHeight ? MakeScrollable : null} ${bodyStyle} ${
              bodyHeight ? SetMaxHeight(bodyHeight) : ''
              } ${SetBackground(this.props.backgroundColor)}`}
            ref={this.DrawerBody}
          >
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

Drawer.defaultProps = {
  children: null,
  isOpen: false,
  tabIndex: 0,
  backgroundColor: '#f4f4f4e6',
  isCollapsible: true,
  expandBelow: true,
  bodyHeight: null,
  bodyStyle: null,
  titleStyle: null,
  titleStyleOpen: null,
  onToggle: () => { },
  ariaRequired: true
};

Drawer.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  children: PropTypes.element,
  isOpen: PropTypes.bool,
  openIcon: PropTypes.string,
  closeIcon: PropTypes.string,
  auid: PropTypes.string,
  tabIndex: PropTypes.number,
  backgroundColor: PropTypes.string,
  isCollapsible: PropTypes.bool,
  expandBelow: PropTypes.bool,
  bodyHeight: PropTypes.string,
  bodyStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  titleStyleOpen: PropTypes.object,
  gtmDataLayer: PropTypes.array,
  eventCategory: PropTypes.string,
  eventLabel: PropTypes.string,
  onToggle: PropTypes.func,
  domid: PropTypes.string,
  ariaRequired: PropTypes.bool
};

export default Drawer;

/**
 * TODO:
 * Insert font icons.
 * Convert to pure stateless component with JS class toggle.
 * Move to pure scss
 */
