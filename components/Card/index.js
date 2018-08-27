import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { css, cx } from 'react-emotion';
import HybridCard from './lib/HybridCard';

const anchorStyles = css`
  display: flex;
  color: #333333;
  width: 100%;
  &:hover {
    color: #333333;
    text-decoration: none;
    cursor: pointer;
  }

  @media only screen and (min-width: 768px) {
    &:focus .c-product__quickviewbtn,
    &:focus-within .c-product__quickviewbtn {
      display: block;
    }
  }
`;
class Card extends PureComponent {
  constructor(props) {
    super(props);

    this.anchorId = `card-${Math.floor(Math.random() * 1e16)}`;
  }

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
        <a
          className={cx(anchorStyles, 'mb-quarter mb-md-4')}
          href={ctaLink}
          data-auid={auid}
          {...clickAttributes}
          tabIndex={tabIndex}
          id={this.anchorId}
        >
          <HybridCard {...remainingProps} quickViewAuid={`${auid}_quickview`} fncFocusCard={this.focus} anchorId={this.anchorId} />
        </a>
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
  enableQuickView: PropTypes.bool,
  onClickQuickView: PropTypes.func,
  focusCardOnQuickViewClose: PropTypes.bool,
  cardAnalytics: PropTypes.func
};

Card.defaultProps = {
  focusCardOnQuickViewClose: true
};

export default Card;
