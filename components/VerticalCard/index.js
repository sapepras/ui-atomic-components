import PropTypes from "prop-types";
import React, { Component } from "react";
import * as css from "./lib/css";

import Badge from "../Badge";
import Rating from "../Rating";
import Price from "../Price";
class VerticalCard extends Component {
  renderImageClassName(imageWide, imageSmall) {
    return (imageWide && css.imageWide) || (imageSmall && css.imageSmall) || css.image;
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
      price,
      badge,
      auid
    } = this.props; // eslint-disable-line object-curly-newline
    return (
      <div className={css.card} auid={auid}>
        {!!badge && <Badge text={badge}>{badge}</Badge>}
        <div className={css.header}>{/* eslint-disable-line react/jsx-indent */}
          {!!image && (
            <img
              src={image}
              alt={imageAltText}
              className={this.renderImageClassName(imageWide, imageSmall)}
            />
          )}
        </div>
        <div className={css.body}> {/* eslint-disable-line react/jsx-indent */}
          <div className={css.content}>
            <div className={css.title}>{title}</div>
            <div className={css.description}>{description}</div>{/* eslint-disable-line react/jsx-indent */}
            {!!rating && (
              <div className={css.contentFooter}>
                <Rating value={rating} />
              </div>
            )}
          </div>
        </div>
        <div className={css.footer}>{/* eslint-disable-line react/jsx-indent */}
          <div className={css.contentPaddingLR}>
            <div className={css.divider} />
            <div className={css.price}>{!!price && <Price price={price} />}</div>{/* eslint-disable-line react/jsx-indent */}
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
  price: PropTypes.string,
  badge: PropTypes.string,
  auid: PropTypes.string
};

export default VerticalCard;
