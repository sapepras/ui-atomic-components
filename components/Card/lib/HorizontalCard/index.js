import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { cx } from 'emotion';
import css from './lib/css';
import { productDetailPropTypes } from '../../../PriceDetails/lib/PropTypes';

import Badge from '../../../Badge';
import Rating from '../../../Rating';
import PriceDetails from '../../../PriceDetails';

const wcx = (style, styleOverride) => (styleOverride ? cx(style, styleOverride) : style);

class HorizontalCard extends Component {
  renderCardClassName(hideOnDesktop, styleOverride) {
    const result = hideOnDesktop ? css.cardHideOnDesktop : css.card;
    return wcx(result, styleOverride.card);
  }

  render() {
    const {
      title,
      description,
      image,
      imageAltText,
      rating,
      priceObject,
      badge,
      hideOnDesktop,
      colorCount,
      styleOverride = {}
    } = this.props; // eslint-disable-line object-curly-newline
    return (
      <div className={this.renderCardClassName(hideOnDesktop, styleOverride)}>
        {!!badge && (
          <Badge small text={badge}>
            {badge}
          </Badge>
        )}
        <div className={wcx(css.leftColumn, styleOverride.leftColumn)}>
          {/* eslint-disable-line react/jsx-indent */}
          {!!image && (
            <img src={image} alt={imageAltText} className={wcx(css.image, styleOverride.image)} />
          )}
          {!image && <div className={wcx(css.emptyImage, styleOverride.emptyImage)} />}
        </div>

        <div className={wcx(css.rightColumn, styleOverride.rightColumn)}>
          {/* eslint-disable-line react/jsx-indent */}
          <div className={wcx(css.rowHeader, styleOverride.rowHeader)} />
          {/* eslint-disable-line react/jsx-indent */}
          <div className={wcx(css.rowBody, styleOverride.rowBody)}>
            {/* eslint-disable-line react/jsx-indent */}
            <div className={wcx(css.contentPaddingLR, styleOverride.contentPaddingLR)}>
              <div className={wcx(css.title, styleOverride.title)}>{title}</div>
              <div className={wcx(css.description, wcx.description)}>{description}</div>
              {/* eslint-disable-line react/jsx-indent */}
            </div>
          </div>
          <div className={wcx(css.rowFooterOne, styleOverride.rowFooterOne)}>
            {/* eslint-disable-line react/jsx-indent */}
            <div className={wcx(css.rating, styleOverride.rating)}>
              {!!rating && <Rating value={rating} />}
              {!!rating &&
              !!colorCount &&
              !Number.isNaN(parseInt(colorCount, 10)) &&
              parseInt(colorCount, 10) > 1 && (
                <span className={wcx(css.messageText, styleOverride.messageText)}>
                    &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                </span>
              )}
              {!!colorCount &&
              !Number.isNaN(parseInt(colorCount, 10)) &&
              parseInt(colorCount, 10) > 1 && (
                <span className={wcx(css.messageText, styleOverride.messageText)}>
                    {colorCount} colors available
                </span>
              )}
            </div>
            <div className={wcx(css.divider, styleOverride.divider)} />
            {/* eslint-disable-line react/jsx-indent */}
          </div>
          <div className={wcx(css.rowFooterTwo, styleOverride.rowFooterTwo)}>
            {/* eslint-disable-line react/jsx-indent */}
            <div className={wcx(css.contentPaddingLR, styleOverride.contentPaddingLR)}>
              <div className={wcx(css.price, styleOverride.price)}>
                {!!priceObject && <PriceDetails {...priceObject} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HorizontalCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  imageAltText: PropTypes.string,
  rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  priceObject: PropTypes.shape(productDetailPropTypes),
  badge: PropTypes.string,
  hideOnDesktop: PropTypes.bool,
  colorCount: PropTypes.string,
  styleOverride: PropTypes.object
};

export default HorizontalCard;
