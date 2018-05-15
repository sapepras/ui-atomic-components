import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "react-emotion";
import * as css from "./lib/css";
import { getBadgeColorHex } from "./lib/badges";

import Rating from "../Rating";
import Price from "../Price";

const Badge = styled("div")`
  position: absolute;
  top: 0px;
  left: 27px;
  color: #fff;
  background-color: ${({ text }) => getBadgeColorHex(text)};
  /* background-color: #204ea0; */
  font-size: 14px;
  padding: 10px 15px;
  font-family: Mallory-Black;
  text-transform: uppercase;
`;
class Card extends Component {
  renderImageClassName(imageWide, imageSmall) {
    return (imageWide && css.imageWide) || (imageSmall && css.imageSmall) || css.image;
  }
  render() {
    // document.getElementsByClassName("rsg--content-3")[0].style.cssText = "width: 100vw; margin:0; padding:0; border: 0px; width: 100vw";
    // document.getElementsByClassName("rsg--root-38")[0].style.cssText = "width: 100vw; border: 0px";
    // document.getElementsByClassName("rsg--preview-39")[0].style.cssText = "width: 100vw; border: 0px; background-color: #efefef;";
    const {
      title,
      description,
      image,
      imageWide = false,
      imageSmall = false,
      imageAltText,
      rating,
      price,
      badge
    } = this.props; // eslint-disable-line object-curly-newline
    return (
      <div className={css.card}>
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

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  imageAltText: PropTypes.string,
  imageWide: PropTypes.bool,
  imageSmall: PropTypes.bool,
  rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  price: PropTypes.string,
  badge: PropTypes.string
};

export default Card;
