import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { cx } from 'emotion';
import VerticalCard from './lib/VerticalCard';
import HorizontalCard from './lib/HorizontalCard';
import vwMultipliers from './lib/css';

const wcx = (style, styleOverride) => (styleOverride ? cx(style, styleOverride) : style);

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

  createLogGA(PubSub, eventAction, productName) {
    return () => {
      if (PubSub && PubSub.publish) {
        PubSub.publish('gtm:dataLayer', {
          event: 'productCardClicks',
          eventCategory: 'Product Card Clicks',
          eventAction,
          eventLabel: productName
        });
      }
    };
  }

  renderMultiplier(cardType, styleOverride = {}) {
    if (cardType && typeof cardType === 'string' && vwMultipliers[cardType]) {
      return wcx(vwMultipliers[cardType], styleOverride.rootVws);
    }
    return wcx(vwMultipliers.standard, styleOverride.rootVws);
  }

  render() {
    const defaultLogGA = this.createLogGA(this.props.PubSub, 'Product Detail', this.props.description);
    const defaultQuickViewLogGA = this.createLogGA(this.props.PubSub, 'Quickview', this.props.description);
    const { auid, tabIndex, horizontalMobile, ctaLink, onClickLogGA = defaultLogGA, cardType, styleOverride = {}, ...remainingProps } = this.props; // eslint-disable-line object-curly-newline
    const thisOnClickGoTo = this.onClickGoTo(ctaLink, onClickLogGA);
    let clickAttributes = {};
    if (ctaLink) {
      clickAttributes = {
        onClick: thisOnClickGoTo,
        onKeyPress: thisOnClickGoTo,
        style: { cursor: 'pointer' }
      };
    }
    return (
      <div data-auid={auid} {...clickAttributes} tabIndex={tabIndex} className={this.renderMultiplier(cardType, styleOverride.Card)}>
        <VerticalCard
          {...remainingProps}
          onClickQuickViewLogGa={defaultQuickViewLogGA}
          styleOverride={styleOverride.Vertical}
          desktopOnly={horizontalMobile}
          cardType={cardType}
          quickViewAuid={`${auid}_quickview`}
        />
        {!!horizontalMobile && <HorizontalCard {...remainingProps} styleOverride={styleOverride.Horizontal} hideOnDesktop={horizontalMobile} />}
      </div>
    );
  }
}

Card.dafultProps = {
  tabindex: 0
};

Card.propTypes = {
  auid: PropTypes.string,
  description: PropTypes.string,
  horizontalMobile: PropTypes.bool,
  ctaLink: PropTypes.string,
  onClickLogGA: PropTypes.func,
  cardType: PropTypes.string,
  styleOverride: PropTypes.object,
  tabIndex: PropTypes.number,
  PubSub: PropTypes.any.isRequired
};

export default Card;
