import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'react-emotion';
import HybridCard from './lib/HybridCard';

const StyledAnchor = styled('a')`
  color: #333333;
  &:hover {
    color: #333333;
    text-decoration: none;
    cursor: pointer;
  }
`;
class Card extends Component {
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

  createLogGA(gtmDataLayer, eventAction, productName) {
    return () => {
      if (gtmDataLayer) {
        if (this.props.pageInfo && this.props.pageInfo.isSearch) {
          gtmDataLayer.push({
            event: 'search',
            eventCategory: 'Internal Search',
            eventAction: 'Search Result Product Click',
            eventLabel: `${this.props.pageInfo.searchTerm}`,
            eventValue: `${this.props.totalItemCount}`
          });
        } else {
          gtmDataLayer.push({
            event: 'productCardClicks',
            eventCategory: 'Product Card Clicks',
            eventAction,
            eventLabel: productName
          });
        }
      }
    };
  }

  render() {
    const defaultLogGA = this.createLogGA(this.props.gtmDataLayer, 'Product Detail', this.props.description);
    const defaultQuickViewLogGA = this.createLogGA(this.props.gtmDataLayer, 'Quickview', this.props.description);
    const { auid, tabIndex, ctaLink, onClickLogGA = defaultLogGA, classes, ...remainingProps } = this.props; // eslint-disable-line object-curly-newline
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
        <StyledAnchor href={ctaLink} data-auid={auid} {...clickAttributes} tabIndex={tabIndex}>
          <HybridCard {...remainingProps} onClickQuickViewLogGa={defaultQuickViewLogGA} quickViewAuid={`${auid}_quickview`} />
        </StyledAnchor>
      </div>
    );
  }
}

Card.dafultProps = {
  tabindex: 0
};

Card.propTypes = {
  classes: PropTypes.string,
  auid: PropTypes.string,
  description: PropTypes.string,
  horizontalMobile: PropTypes.bool,
  ctaLink: PropTypes.string,
  onClickLogGA: PropTypes.func,
  styleOverride: PropTypes.object,
  tabIndex: PropTypes.number,
  gtmDataLayer: PropTypes.any.isRequired,
  enableQuickView: PropTypes.bool,
  onClickQuickView: PropTypes.func,
  onClickQuickViewLogGa: PropTypes.func,
  pageInfo: PropTypes.object,
  totalItemCount: PropTypes.string
};

export default Card;
