import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { cx } from 'emotion';
import VerticalCard from './lib/VerticalCard';
import HorizontalCard from './lib/HorizontalCard';
import vwMultipliers from './lib/css';

const wcx = (style, styleOverride) =>
  styleOverride ? cx(style, styleOverride) : style;

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
    if (
      cardType &&
      typeof cardType === 'string' &&
      vwMultipliers[cardType.toLowerCase()]
    ) {
      return wcx(vwMultipliers[cardType.toLowerCase()], styleOverride.rootVws);
    }
    return wcx(vwMultipliers.default, styleOverride.rootVws);
  }

  render() {
    const {
      auid,
      horizontalMobile,
      ctaLink,
      onClickLogGA,
      cardType,
      styleOverride = {},
      ...remainingProps
    } = this.props; // eslint-disable-line object-curly-newline
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
      <div
        data-auid={auid}
        {...clickAttributes}
        className={this.renderMultiplier(cardType, styleOverride.Card)}
      >
        <VerticalCard
          {...remainingProps}
          styleOverride={styleOverride.Vertical}
          desktopOnly={horizontalMobile}
        />
        {!!horizontalMobile && (
          <HorizontalCard
            {...remainingProps}
            styleOverride={styleOverride.Horizontal}
            hideOnDesktop={horizontalMobile}
          />
        )}
      </div>
    );
  }
}

Card.propTypes = {
  auid: PropTypes.string,
  horizontalMobile: PropTypes.bool,
  ctaLink: PropTypes.string,
  onClickLogGA: PropTypes.func,
  cardType: PropTypes.string,
  styleOverride: PropTypes.object
};

export default Card;
