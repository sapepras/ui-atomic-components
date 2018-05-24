import PropTypes from "prop-types";
import React, { Component } from "react";
import { cx } from "emotion";
import css, { appendProperties } from "./lib/css";
import { productDetailPropTypes } from "../../../PriceDetails/lib/PropTypes";

import Badge from "../../../Badge";
import Rating from "../../../Rating";
import PriceDetails from "../../../PriceDetails";

const wcx = (style, styleOverride) => (styleOverride ? cx(style, styleOverride) : style);

class VerticalCard extends Component {
  renderImageClassName(imageWide, imageSmall, styleOverride) {
    if (imageWide && css.imageWide) {
      return wcx(css.imageWide, styleOverride.imageWide);
    } else if (imageSmall && css.imageSmall) {
      return wcx(css.imageSmall, styleOverride.imageSmall);
    }
    return wcx(css.image, styleOverride.image);
  }

  renderAutoMargins(autoMargins) {
    return autoMargins ? { marginLeft: "auto", marginRight: "auto" } : null;
  }

  renderCardClassName(desktopOnly, overrideCardHeightPx = false, overrideCardWidthPx = false) {
    let result = desktopOnly ? css.cardDesktopOnly : css.card;
    if (overrideCardHeightPx) {
      const overrideCardHeightStyle = ` height: ${(
        parseFloat(overrideCardHeightPx) / 10
      ).toString()}em`;
      result = appendProperties(result, overrideCardHeightStyle);
    }
    if (overrideCardWidthPx) {
      const overrideCardWidthStyle = ` width: ${(
        parseFloat(overrideCardWidthPx) / 10
      ).toString()}em`;
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
      auid,
      desktopOnly,
      overrideCardHeightPx,
      overrideCardWidthPx,
      colorCount,
      autoMargins = false,
      styleOverride = {}
    } = this.props; // eslint-disable-line object-curly-newline
    return (
      <div
        className={wcx(
          this.renderCardClassName(desktopOnly, overrideCardHeightPx, overrideCardWidthPx),
          styleOverride.card
        )}
        style={this.renderAutoMargins(autoMargins)}
        data-auid={auid}
      >
        {!!badge && <Badge text={badge}>{badge}</Badge>}
        {/* eslint-disable-next-line react/jsx-indent */}
        <div className={wcx(css.header, styleOverride.header)}>
          {!!image && (
            <img
              src={image}
              alt={imageAltText}
              className={this.renderImageClassName(imageWide, imageSmall, styleOverride)}
            />
          )}
          {!image && <div className={wcx(css.emptyImage, styleOverride.emptyImage)} />}
        </div>
        {/* eslint-disable-next-line react/jsx-indent */}
        <div className={wcx(css.body, styleOverride.body)}>
          <div className={wcx(css.content, styleOverride.content)}>
            <div className={wcx(css.title, styleOverride.title)}>{title}</div>
            {/* eslint-disable-next-line react/jsx-indent */}
            <div className={wcx(css.description, styleOverride.description)}>{description}</div>
          </div>
        </div>
        {/* eslint-disable-next-line react/jsx-indent */}
        <div className={wcx(css.contentFooter, styleOverride.contentFooter)}>
          {!!rating && (
            <span className={wcx(css.rating, styleOverride.rating)}>
              <Rating value={rating} />
            </span>
          )}
          {!!rating &&
            !!colorCount &&
            !Number.isNaN(parseInt(colorCount, 10)) &&
            parseInt(colorCount, 10) > 1 && <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>}
          {!!colorCount &&
            !Number.isNaN(parseInt(colorCount, 10)) &&
            parseInt(colorCount, 10) > 1 && (
              <span className={wcx(css.messageText, styleOverride.messageText)}>
                {colorCount} colors available
              </span>
            )}
        </div>
        {/* eslint-disable-next-line react/jsx-indent */}
        <div className={wcx(css.footer, styleOverride.footer)}>
          <div className={wcx(css.contentPaddingLR, styleOverride.contentPaddingLR)}>
            <div className={wcx(css.divider, styleOverride.divider)} />
            {/* eslint-disable-next-line react/jsx-indent */}
            <div className={wcx(css.price, styleOverride.price)}>
              {!!priceObject && <PriceDetails {...priceObject} />}
            </div>
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
  auid: PropTypes.string,
  desktopOnly: PropTypes.bool,
  overrideCardHeightPx: PropTypes.number,
  overrideCardWidthPx: PropTypes.number,
  colorCount: PropTypes.string,
  autoMargins: PropTypes.bool,
  styleOverride: PropTypes.object
};

export default VerticalCard;
