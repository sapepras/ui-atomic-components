import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { cx } from 'emotion';
import css from './lib/css';
import { productDetailPropTypes } from '../../../PriceDetails/lib/PropTypes';

import Badge from '../../../Badge';
import Button from '../../../Button';
import Rating from '../../../Rating';
import PriceDetails from '../../../PriceDetails';

const wcx = (style, styleOverride) => (styleOverride ? cx(style, styleOverride) : style);

class HybridCard extends Component {
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

  renderCardClassName(hideOnDesktop, styleOverride) {
    const result = hideOnDesktop ? css.cardHideOnDesktop : css.card;
    return wcx(result, styleOverride.card);
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
      promoMessage,
      colorCount,
      horizontalMobile,
      isGiftCard,
      partNumber,
      enableQuickView,
      onClickQuickView = () => null,
      onClickQuickViewLogGa = null,
      quickViewAuid
    } = this.props; // eslint-disable-line object-curly-newline
    return (
      <div
        className={cx(
          { vertical: !horizontalMobile },
          { horizontal: horizontalMobile },
          'product-card mb-quarter mb-md-4',
          css.productCard,
          horizontalMobile ? css.horizontal : ''
        )}
      >
        <div className={cx({ 'col-5': horizontalMobile }, { 'col-12': !horizontalMobile }, 'col-md-12 flex-sm-grow position-relative')}>
          {image && <img src={image} alt={imageAltText} className={`${css.hoverImage} w-100 pt-3 pt-md-1 px-1 px-md-2`} />}
          {!image && <div className="" />}
          {badge &&
            (horizontalMobile ? (
              <Badge className="c-product__badge" smallBadge text={badge}>
                {badge}
              </Badge>
            ) : (
              <Badge text={badge}>{badge}</Badge>
            ))}
          {enableQuickView && (
            <Button
              size="S"
              auid={quickViewAuid}
              className={css.quickView}
              onClick={this.wrapClickViewClick(onClickQuickView, onClickQuickViewLogGa)}
            >
              Quick View
            </Button>
          )}
        </div>
        <div className={cx({ 'col-7': horizontalMobile }, { 'col-12 px-1 px-md-2': !horizontalMobile }, 'col-md-12 pt-2 pb-2 pb-md-4')}>
          <div className="c-product__title mb-0 mb-md-half">{title}</div>
          <p className="c-product__description mb-0">{description}</p>
          <div className="c-product__ratings-reviews my-quarter d-flex align-items-center">
            <Rating value={rating} />
            <span className="product-card-reviews" data-bv-show="inline_rating" data-bv-product-id={partNumber} />
            {rating &&
              colorCount &&
              /^[0-9]+$/.test(parseInt(colorCount, 10)) &&
              parseInt(colorCount, 10) > 1 && <span aria-hidden>&nbsp;|&nbsp;</span>}
            {colorCount &&
              /^[0-9]+$/.test(parseInt(colorCount, 10)) &&
              parseInt(colorCount, 10) > 1 && <span className="c-product__colors-available">{colorCount} colors available</span>}
          </div>
          {!isGiftCard && <hr className={`m-0 ${css.hrStyles}`} />}
          {!isGiftCard && (
            <section className="mt-half">
              {priceObject && <PriceDetails {...priceObject} />}
              {promoMessage && (
                <div className="">
                  <div className="">
                    <div className="">{promoMessage}</div>
                  </div>
                </div>
              )}
            </section>
          )}
        </div>
      </div>
    );
  }
}

HybridCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  imageAltText: PropTypes.string,
  rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  priceObject: PropTypes.shape(productDetailPropTypes),
  smallBadge: PropTypes.bool,
  promoMessage: PropTypes.string,
  horizontalMobile: PropTypes.bool,
  colorCount: PropTypes.string,
  isGiftCard: PropTypes.string,
  badge: PropTypes.string,
  partNumber: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  enableQuickView: PropTypes.bool,
  onClickQuickView: PropTypes.func,
  onClickQuickViewLogGa: PropTypes.func,
  quickViewAuid: PropTypes.string
};

export default HybridCard;
