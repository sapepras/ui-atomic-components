import PropTypes from "prop-types";
import React, { Component } from "react";
import VerticalCard from "./lib/VerticalCard";
import HorizontalCard from "./lib/HorizontalCard";

class Card extends Component {
  onClickGoTo(url) {
    return () => {
      // if (dataLayer) {
      //   dataLayer.push({
      //   event:'productCardClicks',
      //   eventCategory:'Product Card Clicks',
      //   eventAction: ctaLinkName,
      //   'eventLabel’:'<Product Name >’});
      // }
      window.location = url;
    };
  }

  render() {
    const { auid, horizontalMobile, ctaLink, ...remainingProps } = this.props; // eslint-disable-line object-curly-newline
    let clickAttributes = {};
    if (ctaLink) {
      clickAttributes = {
        onClick: this.onClickGoTo(ctaLink),
        onKeyPress: this.onClickGoTo(ctaLink),
        style: { cursor: "pointer" }
      };
    }
    return (
      <div auid={auid} {...clickAttributes}>
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
  ctaLink: PropTypes.string
};

export default Card;
