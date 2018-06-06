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

  renderMultiplier(cardType, styleOverride = {}) {
    if (cardType && typeof cardType === 'string' && vwMultipliers[cardType]) {
      return wcx(vwMultipliers[cardType], styleOverride.rootVws);
    }
    return wcx(vwMultipliers.standard, styleOverride.rootVws);
  }

  render() {
    const { auid, tabIndex, horizontalMobile, ctaLink, onClickLogGA, cardType, styleOverride = {}, ...remainingProps } = this.props; // eslint-disable-line object-curly-newline
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
        <VerticalCard {...remainingProps} styleOverride={styleOverride.Vertical} desktopOnly={horizontalMobile} cardType={cardType} />
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
  horizontalMobile: PropTypes.bool,
  ctaLink: PropTypes.string,
  onClickLogGA: PropTypes.func,
  cardType: PropTypes.string,
  styleOverride: PropTypes.object,
  tabIndex: PropTypes.number
};

export default Card;
