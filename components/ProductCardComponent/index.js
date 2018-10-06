import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'react-emotion';
import HybridCard from './lib/HybridCard';

const StyledAnchor = styled('a')`
  display: flex;
  color: #333333;
  &:hover {
    color: #333333;
    text-decoration: none;
  }

  @media only screen and (min-width: 768px) {
    &:focus .c-product__quickviewbtn,
    &:focus-within .c-product__quickviewbtn {
      display: block;
    }
  }
`;
class ProductCardComponent extends Component {
  onClickGoTo(url, onClickLogGA) {
    return () => {
      if (onClickLogGA) {
        onClickLogGA();
      }
      if (window) {
        window.location = url;
      }
    };
  }

  render() {
    const defaultLogGA = this.props.cardAnalytics;
    const { auid, tabIndex, ctaLink, onClickLogGA = defaultLogGA, classes, isOOS, ...remainingProps } = this.props; // eslint-disable-line object-curly-newline
    const thisOnClickGoTo = this.onClickGoTo(ctaLink, onClickLogGA);
    let clickAttributes = {};
    if (ctaLink) {
      clickAttributes = {
        onClick: thisOnClickGoTo,
        onKeyPress: e => (e.keyCode === 13 ? thisOnClickGoTo : '')
      };
    }
    return (
      <div className={classes}>
        <StyledAnchor className="mb-quarter mb-md-4" href={ctaLink} data-auid={auid} {...clickAttributes} tabIndex={tabIndex}>
          <HybridCard {...remainingProps} quickViewAuid={`${auid}_quickview`} showOOS={isOOS} />
        </StyledAnchor>
      </div>
    );
  }
}

ProductCardComponent.dafultProps = {
  tabindex: 0,
  isOOS: false
};

ProductCardComponent.propTypes = {
  classes: PropTypes.string,
  auid: PropTypes.string,
  description: PropTypes.string,
  horizontalMobile: PropTypes.bool,
  ctaLink: PropTypes.string,
  onClickLogGA: PropTypes.func,
  styleOverride: PropTypes.object,
  tabIndex: PropTypes.number,
  enableQuickView: PropTypes.bool,
  onClickQuickView: PropTypes.func,
  cardAnalytics: PropTypes.func,
  isOOS: PropTypes.bool
};

export default ProductCardComponent;
