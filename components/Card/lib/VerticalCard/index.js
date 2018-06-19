import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { cx } from 'emotion';
import allStyles, { appendProperties } from './lib/css';
import { productDetailPropTypes } from '../../../PriceDetails/lib/PropTypes';

import Badge from '../../../Badge';
import Rating from '../../../Rating';
import Button from '../../../Button';
import PriceDetails from '../../../PriceDetails';

const wcx = (style, styleOverride) => (styleOverride ? cx(style, styleOverride) : style);

class VerticalCard extends Component {
  constructor(props) {
    super(props);
    this.wrapClickViewClick = this.wrapClickViewClick.bind(this);
  }

  getCardTypeStyles(cardType) {
    const result = cardType && allStyles[cardType] ? allStyles[cardType] : allStyles.standard;
    return result;
  }

  wrapClickViewClick(onClickQuickView, onClickQuickViewLogGa) {
    return e => {
      e.preventDefault();
      e.stopPropagation();
      if (onClickQuickViewLogGa) {
        onClickQuickViewLogGa();
      }
      if (onClickQuickView) {
        onClickQuickView();
      }
    };
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
      cardType,
      enableQuickView,
      onClickQuickView = () => null,
      onClickQuickViewLogGa = null,
      quickViewAuid
    } = this.props; // eslint-disable-line object-curly-newline
    const cardTypeStyles = this.getCardTypeStyles(cardType);
    const small = cardType === 'hold240';
    return (
      <div
        className={wcx(this.renderCardClassName(desktopOnly, overrideCardHeightPx, overrideCardWidthPx, cardType), styleOverride.card)}
        style={this.renderAutoMargins(autoMargins)}
      >
        {!!badge && (
          <Badge text={badge} small={small}>
            {badge}
          </Badge>
        )}
        {/* eslint-disable-next-line react/jsx-indent */}
        <div className={wcx(cardTypeStyles.header, styleOverride.header)}>
          {!!image && <img src={image} alt={imageAltText} className={this.renderImageClassName(imageWide, imageSmall, styleOverride, cardType)} />}
          {!image && <div className={wcx(cardTypeStyles.emptyImage, styleOverride.emptyImage)} />}
          {!!enableQuickView && (
            <Button
              auid={quickViewAuid}
              className={wcx(cardTypeStyles.quickView, styleOverride.quickView)}
              onClick={this.wrapClickViewClick(onClickQuickView, onClickQuickViewLogGa)}
            >
              Quick View
            </Button>
          )}
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
            !/^[0-9]+$/.test(parseInt(colorCount, 10)) &&
            parseInt(colorCount, 10) > 1 && <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</span>}
          {!!colorCount &&
            !/^[0-9]+$/.test(parseInt(colorCount, 10)) &&
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
  cardType: PropTypes.string,
  enableQuickView: PropTypes.bool,
  onClickQuickView: PropTypes.func,
  onClickQuickViewLogGa: PropTypes.func,
  quickViewAuid: PropTypes.string
};

export default VerticalCard;
