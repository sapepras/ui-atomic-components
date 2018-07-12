import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

const StyledDiv = styled('div')`
  background-color: #ffffff;
  min-height: 62px;
  font-size: 16px;
  line-height:1.25rem;
  letter-spacing: 0.5;
  font-color: #585858;
  line-color: #e6e6e6;
  cursor: pointer;
  display: flex;
  align-items: center;
  border:0px;
  background-color:#fff;
  border-top:1px solid rgb(230, 230, 230);
  padding: 1rem;
  justify-content: space-between;

  & > p {
    margin: 0px;
  }
  z-index:10;
`;

const DrawerWrapStyle = css`
  positioin: relative;
  display: flex;
  flex-direction: column;
`;

const DrawerContentStyle = css`
  min-height: 62px;
  padding: 1rem;
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
  }

  toggleDrawer() {
    if (this.props.isCollapsible) {
      this.setState({
        isOpen: !this.state.isOpen
      });
    } else {
      this.setState({
        isOpen: true
      });
    }
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
        <StyledDiv className={`${this.state.isOpen ? titleStyleOpen : null} ${titleStyle}`} onClick={this.toggleDrawer} tabIndex={tabIndex}>
          <div className="w-100 d-flex">{title}{isCollapsible && <div className="align-self-center"><i className={classlist} /></div>}</div>
        </StyledDiv>
        {this.state.isOpen && <div className={`${DrawerContentStyle} ${isCollapsible && bodyHeight ? MakeScrollable : null} ${bodyStyle} ${bodyHeight ? SetMaxHeight(bodyHeight) : ''} ${SetBackground(this.props.backgroundColor)}`} ref={this.DrawerBody}>{this.props.children}</div>}
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
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired,
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
  titleStyleOpen: PropTypes.object
};

export default Drawer;

/**
 * TODO:
 * Insert font icons.
 * Convert to pure stateless component with JS class toggle.
 * Move to pure scss
 */
