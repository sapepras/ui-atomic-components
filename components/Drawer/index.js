import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { css } from "react-emotion";

const StyledDiv = styled("div")`
  background-color: #ffffff;
  min-height: 62px;
  font-size: 16px;
  font-family: Roboto, Helvetica, Verdanam, sans-serif;
  letter-spacing: 0.5;
  font-color: #585858;
  line-color: #e6e6e6;
  cursor: pointer;
  box-shadow: 0 1px 1px 0 #00000019;
  display: flex;
  align-items: center;
  border: 1px solid #e6e6e6;
  border-left: 0;
  border-right: 0;
  padding: 0.8rem;
  justify-content: flex-start;

  & > p {
    margin: 0px;
  }
`;

const DrawerWrapStyle = css`
  positioin: relative;
  display: flex;
  flex-direction: column;
`;

const DrawerContentStyle = css`
  background-color: #f4f4f4e6;
  min-height: 62px;
  padding: 0.8rem;
  border-top: 1px solid #f6f6f6;
`;

class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };

    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const { title, children, titleClass } = this.props;
    return (
      <div className={DrawerWrapStyle}>
        <StyledDiv className={titleClass} onClick={this.toggleDrawer}>{title}</StyledDiv>
        {this.state.isOpen && <div className={DrawerContentStyle}>{children}</div>}
      </div>
    );
  }
}

Drawer.defaultProps = {
  children: null
};

Drawer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
  titleClass: PropTypes.string
};

export default Drawer;

/**
 * TODO:
 * Insert font icons.
 * Convert to pure stateless component with JS class toggle.
 * Move to pure scss
 */
