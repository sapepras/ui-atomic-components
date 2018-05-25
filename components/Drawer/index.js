import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

const StyledDiv = styled('div')`
  background-color: #ffffff;
  min-height: 62px;
  font-size: 16px;
  letter-spacing: 0.5;
  font-color: #585858;
  line-color: #e6e6e6;
  cursor: pointer;
  display: flex;
  align-items: center;
  border:0px;
  background-color:#fff;
  border-top:1px solid rgb(230, 230, 230);
  padding: 0.8rem;
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
      isOpen: this.props.isOpen
    };

    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { title, auid } = this.props;
    let classlist = '';
    if (this.state.isOpen) {
      classlist = `${this.props.openIcon}`;
    } else {
      classlist = `${this.props.closeIcon}`;
    }

    return (
      <div className={DrawerWrapStyle} data-auid={`facetdrawer${auid}`}>
        <StyledDiv onClick={this.toggleDrawer}><span>{title}</span><i className={classlist} />
        </StyledDiv>
        {this.state.isOpen && <div className={DrawerContentStyle}>{this.props.children}</div>}
      </div>
    );
  }
}

Drawer.defaultProps = {
  children: null,
  isOpen: false
};

Drawer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
  isOpen: PropTypes.bool,
  openIcon: PropTypes.string,
  closeIcon: PropTypes.string,
  auid: PropTypes.string
};

export default Drawer;

/**
 * TODO:
 * Insert font icons.
 * Convert to pure stateless component with JS class toggle.
 * Move to pure scss
 */
