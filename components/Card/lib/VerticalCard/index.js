import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { cx } from 'emotion';
import allStyles, { appendProperties } from './lib/css';
import { productDetailPropTypes } from '../../../PriceDetails/lib/PropTypes';

import Badge from '../../../Badge';
import Rating from '../../../Rating';
import PriceDetails from '../../../PriceDetails';

const wcx = (style, styleOverride) => (styleOverride ? cx(style, styleOverride) : style);

class VerticalCard extends Component {
  getCardTypeStyles(cardType) {
    const result = cardType && allStyles[cardType] ? allStyles[cardType] : allStyles.standard;
    console.log(result);
    return result;
  }

  renderImageClassName(imageWide, imageSmall, styleOverride, cardType) {
    const cardTypeStyles = this.getCardTypeStyles(cardType);
    if (imageWide && cardTypeStyles.imageWide) {
      return wcx(cardTypeStyles.imageWide, styleOverride.imageWide);
    } else if (imageSmall && cardTypeStyles.imageSmall) {
      return wcx(cardTypeStyles.imageSmall, styleOverride.imageSmall);
    }
    return wcx(cardTypeStyles.image, styleOverride.image);
  }

  renderAutoMargins(autoMargins) {
    return autoMargins ? { marginLeft: 'auto', marginRight: 'auto' } : null;
  }

  renderCardClassName(desktopOnly, overrideCardHeightPx = false, overrideCardWidthPx = false, cardType) {
    const cardTypeStyles = this.getCardTypeStyles(cardType);
    let result = desktopOnly ? cardTypeStyles.cardDesktopOnly : cardTypeStyles.card;
    if (overrideCardHeightPx) {
      const overrideCardHeightStyle = ` height: ${(parseFloat(overrideCardHeightPx) / 10).toString()}em`;
      result = appendProperties(result, overrideCardHeightStyle);
    }
    if (overrideCardWidthPx) {
      const overrideCardWidthStyle = ` width: ${(parseFloat(overrideCardWidthPx) / 10).toString()}em`;
      result = appendProperties(result, overrideCardWidthStyle);
    }
    return result;
  }

  render() {
    const {
      title,
      description,
      image,
      imageWide = false,
      imageSmall = false,
      imageAltText,
      rating,
      priceObject,
      badge,
      desktopOnly,
      overrideCardHeightPx,
      overrideCardWidthPx,
      colorCount,
      autoMargins = false,
      styleOverride = {},
      cardType
    } = this.props; // eslint-disable-line object-curly-newline
    const cardTypeStyles = this.getCardTypeStyles(cardType);
    return (
      <div
        className={wcx(this.renderCardClassName(desktopOnly, overrideCardHeightPx, overrideCardWidthPx, cardType), styleOverride.card)}
        style={this.renderAutoMargins(autoMargins)}
      >
        {!!badge && <Badge text={badge}>{badge}</Badge>}
        {/* eslint-disable-next-line react/jsx-indent */}
        <div className={wcx(cardTypeStyles.header, styleOverride.header)}>
          {!!image && <img src={image} alt={imageAltText} className={this.renderImageClassName(imageWide, imageSmall, styleOverride, cardType)} />}
          {!image && <div className={wcx(cardTypeStyles.emptyImage, styleOverride.emptyImage)} />}
        </div>
        {/* eslint-disable-next-line react/jsx-indent */}
        <div className={wcx(cardTypeStyles.body, styleOverride.body)}>
          <div className={wcx(cardTypeStyles.content, styleOverride.content)}>
            <div className={wcx(cardTypeStyles.title, styleOverride.title)}>{title}</div>
            {/* eslint-disable-next-line react/jsx-indent */}
            <div className={wcx(cardTypeStyles.description, styleOverride.description)}>{description}</div>
          </div>
        </div>
        {/* eslint-disable-next-line react/jsx-indent */}
        <div className={wcx(cardTypeStyles.contentFooter, styleOverride.contentFooter)}>
          {!!rating && (
            <span className={wcx(cardTypeStyles.rating, styleOverride.rating)}>
              <Rating value={rating} />
            </span>
          )}
          {!!rating &&
            !!colorCount &&
            !Number.isNaN(parseInt(colorCount, 10)) &&
            parseInt(colorCount, 10) > 1 && <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</span>}
          {!!colorCount &&
            !Number.isNaN(parseInt(colorCount, 10)) &&
            parseInt(colorCount, 10) > 1 && (
              <span className={wcx(cardTypeStyles.messageText, styleOverride.messageText)}>{colorCount} colors available</span>
            )}
        </div>
        {/* eslint-disable-next-line react/jsx-indent */}
        <div className={wcx(cardTypeStyles.footer, styleOverride.footer)}>
          <div className={wcx(cardTypeStyles.contentPaddingLR, styleOverride.contentPaddingLR)}>
            <div className={wcx(cardTypeStyles.divider, styleOverride.divider)} />
            {/* eslint-disable-next-line react/jsx-indent */}
            <div className={wcx(cardTypeStyles.price, styleOverride.price)}>{!!priceObject && <PriceDetails {...priceObject} />}</div>
          </div>
        </div>
      </div>
    );
  }
}

VerticalCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  imageAltText: PropTypes.string,
  imageWide: PropTypes.bool,
  imageSmall: PropTypes.bool,
  rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  priceObject: PropTypes.shape(productDetailPropTypes),
  badge: PropTypes.string,
  desktopOnly: PropTypes.bool,
  overrideCardHeightPx: PropTypes.number,
  overrideCardWidthPx: PropTypes.number,
  colorCount: PropTypes.string,
  autoMargins: PropTypes.bool,
  styleOverride: PropTypes.object,
  cardType: PropTypes.string
};

export default VerticalCard;
