import PropTypes from "prop-types";
import React, { Component } from "react";
import * as css from "./lib/css";
import { productDetailPropTypes } from "../../../PriceDetails/lib/PropTypes";

import Badge from "../../../Badge";
import Rating from "../../../Rating";
import PriceDetails from "../../../PriceDetails";
class HorizontalCard extends Component {
  renderCardClassName(hideOnDesktop) {
    return hideOnDesktop ? css.cardHideOnDesktop : css.card;
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
      auid,
      hideOnDesktop
    } = this.props; // eslint-disable-line object-curly-newline
    return (
      <div className={this.renderCardClassName(hideOnDesktop)} auid={auid}>
        {!!badge && (
          <Badge small text={badge}>
            {badge}
          </Badge>
        )}
        <div className={css.leftColumn}>{/* eslint-disable-line react/jsx-indent */}
          {!!image && <img src={image} alt={imageAltText} className={css.image} />}
          {!image && <div className={css.emptyImage} />}
        </div>

        <div className={css.rightColumn}>{/* eslint-disable-line react/jsx-indent */}
          <div className={css.rowHeader} />{/* eslint-disable-line react/jsx-indent */}
          <div className={css.rowBody}>{/* eslint-disable-line react/jsx-indent */}
            <div className={css.contentPaddingLR}>
              <div className={css.title}>{title}</div>
              <div className={css.description}>{description}</div>{/* eslint-disable-line react/jsx-indent */}
            </div>
          </div>
          <div className={css.rowFooterOne}>{/* eslint-disable-line react/jsx-indent */}
            <div className={css.rating}>{!!rating && <Rating value={rating} />}</div>
            <div className={css.contentPaddingLR}>{/* eslint-disable-line react/jsx-indent */}
              <div className={css.divider} />
            </div>
          </div>
          <div className={css.rowFooterTwo}>{/* eslint-disable-line react/jsx-indent */}
            <div className={css.contentPaddingLR}>
              <div className={css.price}>{!!priceObject && <PriceDetails {...priceObject} />}</div>
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
  auid: PropTypes.string,
  hideOnDesktop: PropTypes.bool
};

export default HorizontalCard;
