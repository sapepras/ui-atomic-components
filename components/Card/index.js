import PropTypes from "prop-types";
import React, { Component } from "react";
import VerticalCard from "./lib/VerticalCard";
import HorizontalCard from "./lib/HorizontalCard";
import vwMultipliers from "./lib/css";

class Card extends Component {
  onClickGoTo(url, onClickLogGA) {
    return () => {
      if (onClickLogGA) {
        onClickLogGA();
      }
      window.location = url;
    };
  }

  renderMultiplier(cardType) {
    if (cardType && vwMultipliers[cardType.toLowerCase()]) {
      return vwMultipliers[cardType.cardType.toLowerCase()];
    }
    return vwMultipliers.default;
  }

  render() {
    const {
      auid,
      horizontalMobile,
      ctaLink,
      onClickLogGA,
      cardType,
      ...remainingProps
    } = this.props; // eslint-disable-line object-curly-newline
    const thisOnClickGoTo = this.onClickGoTo(ctaLink, onClickLogGA);
    let clickAttributes = {};
    if (ctaLink) {
      clickAttributes = {
        onClick: thisOnClickGoTo,
        onKeyPress: thisOnClickGoTo,
        style: { cursor: "pointer" }
      };
    }
    return (
      <div data-auid={auid} {...clickAttributes} className={this.renderMultiplier(cardType)}>
        <VerticalCard {...remainingProps} desktopOnly={horizontalMobile} />
        {!!horizontalMobile && (
          <HorizontalCard {...remainingProps} hideOnDesktop={horizontalMobile} />
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
  cardType: PropTypes.string
};

export default Card;
