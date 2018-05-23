import PropTypes from "prop-types";
import React, { Component } from "react";
import * as css from "./lib/css";
import { productDetailPropTypes } from "../../../PriceDetails/lib/PropTypes";

import Badge from "../../../Badge";
import Rating from "../../../Rating";
import PriceDetails from "../../../PriceDetails";
class VerticalCard extends Component {
  renderImageClassName(imageWide, imageSmall) {
    return (imageWide && css.imageWide) || (imageSmall && css.imageSmall) || css.image;
  }

  renderCardClassName(desktopOnly, overrideCardHeightPx = false) {
    const result = desktopOnly ? css.cardDesktopOnly : css.card;
    if (overrideCardHeightPx) {
      const overrideCardHeightStyle = ` height: ${(
        parseFloat(overrideCardHeightPx) / 10
      ).toString()}em`;
      return css.appendProperties(result, overrideCardHeightStyle);
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
      colorCount
    } = this.props; // eslint-disable-line object-curly-newline
    return (
      <div className={this.renderCardClassName(desktopOnly, overrideCardHeightPx)} auid={auid}>
        {!!badge && <Badge text={badge}>{badge}</Badge>}
        {/* eslint-disable-next-line react/jsx-indent */}
        <div className={css.header}>
          {!!image && (
            <img
              src={image}
              alt={imageAltText}
              className={this.renderImageClassName(imageWide, imageSmall)}
            />
          )}
          {!image && <div className={css.emptyImage} />}
        </div>
        {/* eslint-disable-next-line react/jsx-indent */}
        <div className={css.body}>
          <div className={css.content}>
            <div className={css.title}>{title}</div>
            {/* eslint-disable-next-line react/jsx-indent */}
            <div className={css.description}>{description}</div>
          </div>
        </div>
        {/* eslint-disable-next-line react/jsx-indent */}
        <div className={css.contentFooter}>
          {!!rating && (
            <span className={css.rating}>
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
              <span className={css.messageText}>{colorCount} colors available</span>
            )}
        </div>
        {/* eslint-disable-next-line react/jsx-indent */}
        <div className={css.footer}>
          <div className={css.contentPaddingLR}>
            <div className={css.divider} />
            {/* eslint-disable-next-line react/jsx-indent */}
            <div className={css.price}>{!!priceObject && <PriceDetails {...priceObject} />}</div>
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
  colorCount: PropTypes.string
};

export default VerticalCard;
