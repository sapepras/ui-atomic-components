import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'react-emotion';
import HybridCard from './lib/HybridCard';

const StyledA = styled('a')`
&:hover {
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

  render() {
    const defaultLogGA = this.createLogGA(this.props.PubSub, 'Product Detail', this.props.description);
    const defaultQuickViewLogGA = this.createLogGA(this.props.PubSub, 'Quickview', this.props.description);
    const { auid, tabIndex, ctaLink, onClickLogGA = defaultLogGA, classes, ...remainingProps } = this.props; // eslint-disable-line object-curly-newline
    const thisOnClickGoTo = this.onClickGoTo(ctaLink, onClickLogGA);
    let clickAttributes = {};
    if (ctaLink) {
      clickAttributes = {
        onClick: thisOnClickGoTo,
        onKeyPress: thisOnClickGoTo
      };
    }
    return (
      <div className={classes}>
        <StyledA href={ctaLink} data-auid={auid} {...clickAttributes} tabIndex={tabIndex}>
          <HybridCard
            {...remainingProps}
            onClickQuickViewLogGa={defaultQuickViewLogGA}
            quickViewAuid={`${auid}_quickview`}
          />
        </StyledA>
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
  PubSub: PropTypes.any.isRequired
};

export default Card;
