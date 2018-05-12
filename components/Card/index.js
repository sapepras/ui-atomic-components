import PropTypes from "prop-types";
import React, { Component } from "react";
import * as css from "./css";

import Rating from "../Rating";
import Price from "../Price";

class Card extends Component {
  renderImageClassName(imageWide) {
    return imageWide ? css.imageWide : css.image;
  }
  render() {
    // document.getElementsByClassName("rsg--sidebar-4")[0].style.cssText = "display: none! important";
    // document.getElementsByClassName("rsg--hasSidebar-2")[0].style.cssText = "padding-left: 0";
    const { image, imageWide = false, title, heading, description, rating, price } = this.props; // eslint-disable-line object-curly-newline
    return (
      <div className={css.card}>
        <div className={css.header}>
          {!!image && (
            <img src={image} alt={heading} className={this.renderImageClassName(imageWide)} />
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

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  price: PropTypes.string,
  imageWide: PropTypes.bool
};

export default Card;
