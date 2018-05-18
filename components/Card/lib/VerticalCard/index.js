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
  renderCardClassName(desktopOnly) {
    return desktopOnly ? css.cardDesktopOnly : css.card;
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
      desktopOnly
    } = this.props; // eslint-disable-line object-curly-newline
    return (
      <div className={this.renderCardClassName(desktopOnly)} auid={auid}>
        {!!badge && <Badge text={badge}>{badge}</Badge>}
        <div className={css.header}>{/* eslint-disable-line react/jsx-indent */}
          {!!image && (
            <img
              src={image}
              alt={imageAltText}
              className={this.renderImageClassName(imageWide, imageSmall)}
            />
          )}
          {!image && <div className={css.emptyImage} />}
        </div>
        <div className={css.body}>{/* eslint-disable-line react/jsx-indent */}
          <div className={css.content}>
            <div className={css.title}>{title}</div>
            <div className={css.description}>{description}</div>{/* eslint-disable-line react/jsx-indent */}
          </div>
        </div>
        <div className={css.contentFooter}>{/* eslint-disable-line react/jsx-indent */}
          {!!rating && <Rating value={rating} />}
        </div>
        <div className={css.footer}>{/* eslint-disable-line react/jsx-indent */}
          <div className={css.contentPaddingLR}>
            <div className={css.divider} />
            <div className={css.price}>{!!priceObject && <PriceDetails {...priceObject} />}</div>{/* eslint-disable-line react/jsx-indent */}
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
  desktopOnly: PropTypes.bool
};

export default VerticalCard;
