import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { ENTER_KEY_CODE } from '../../constants';

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
  positioin: relative;
  display: flex;
  flex-direction: column;
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
  font-size:14px;
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

class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: this.props.isCollapsible ? this.props.isOpen : true
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.toggleDrawerKey = this.toggleDrawerKey.bind(this);
  }

  toggleDrawerKey(e) {
    if (e.keyCode === ENTER_KEY_CODE) {
      this.toggleDrawer();
    }
  }

  /**
   * Open or close Drawer
   */
  toggleDrawer() {
    if (this.props.isCollapsible) {
      this.setState(prevstate => ({ isOpen: !prevstate.isOpen }));
    } else {
      this.setState({
        isOpen: true
      });
    }
    if (this.props.gtmDataLayer) {
      this.updateAnalytics();
    }
  }

  /**
   * Update GA dataLayer
   */
  updateAnalytics() {
    const { eventCategory, eventLabel, title } = this.props;
    this.props.gtmDataLayer.push({
      event: 'accordionLinks',
      eventCategory: eventCategory || title.toString(),
      eventAction: 'expand or collapse ',
      eventLabel: eventLabel || title.toString()
    });
  }

  render() {
    const {
 title, auid, tabIndex, isCollapsible, expandBelow, bodyHeight, bodyStyle, titleStyleOpen, titleStyle
} = this.props;
    let classlist = '';
    if (this.state.isOpen) {
      classlist = `${this.props.openIcon}`;
    } else {
      classlist = `${this.props.closeIcon}`;
    }

    return (
      <div className={`${DrawerWrapStyle} ${this.state.isOpen && !expandBelow ? ExpandUpward(bodyHeight) : ''}`} data-auid={`facetdrawer${auid}`}>
        <StyledButton
          aria-pressed={this.state.isOpen}
          aria-label={title}
          onKeyDown={this.toggleDrawerKey}
          className={`${this.state.isOpen ? titleStyleOpen : null} ${titleStyle}`}
          onClick={this.toggleDrawer}
          tabIndex={tabIndex}
        >
          <div className={DrawerTitleStyle}>
            {title}
            {isCollapsible && <i className={classlist} />}
          </div>
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
  titleStyleOpen: null
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
  eventLabel: PropTypes.string
};

export default Drawer;

/**
 * TODO:
 * Insert font icons.
 * Convert to pure stateless component with JS class toggle.
 * Move to pure scss
 */
