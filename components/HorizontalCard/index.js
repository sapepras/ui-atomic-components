import PropTypes from "prop-types";
import React, { Component } from "react";
import * as css from "./lib/css";

import Badge from "../Badge";
import Rating from "../Rating";
import Price from "../Price";
class HorizontalCard extends Component {
  render() {
    const {
      title,
      description,
      image,
      imageAltText,
      rating,
      price,
      badge
    } = this.props; // eslint-disable-line object-curly-newline
    return (
      <div className={css.card}>
        {!!badge && <Badge small text={badge}>{badge}</Badge>}
        <div className={css.leftColumn}>
          {!!image && (
            <img
              src={image}
              alt={imageAltText}
              className={css.image}
            />
          )}
        </div>
        <div className={css.rightColumn}>
          <div className={css.rowHeader}></div>
          <div className={css.rowBody}>
            <div className={css.contentPaddingLR}>
              <div className={css.title}>{title}</div>
              <div className={css.description}>{description}</div>{/* eslint-disable-line react/jsx-indent */}
            </div>
          </div>
          <div className={css.rowFooterOne}>
            <div className={css.rating}>
              {!!rating && (
                  <Rating value={rating} />
              )}
            </div>
            <div class={css.contentPaddingLR}>
              <div className={css.divider} />
            </div>
          </div>
          <div className={css.rowFooterTwo}>
            <div className={css.contentPaddingLR}>
              <div className={css.price}>{!!price && <Price price={price} />}</div>{/* eslint-disable-line react/jsx-indent */}
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
  price: PropTypes.string,
  badge: PropTypes.string
};

export default HorizontalCard;
