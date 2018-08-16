import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { cx } from 'emotion';
import css from './lib/css';
import { productDetailPropTypes } from '../../../PriceDetails/lib/PropTypes';
import { SHIPPING_MESSAGE, COUNT_TEXT } from '../../../../constants';
import Badge from '../../../Badge';
import Button from '../../../Button';
import Rating from '../../../Rating';
import PriceDetails from '../../../PriceDetails';

const wcx = (style, styleOverride) => (styleOverride ? cx(style, styleOverride) : style);

class HybridCard extends Component {
  wrapClickViewClick(onClickQuickView, focusCardOnQuickViewClose, anchorId) {
    return e => {
      e.preventDefault();
      e.stopPropagation();
      if (onClickQuickView) {
        if (focusCardOnQuickViewClose && anchorId) {
          onClickQuickView(anchorId);
        } else {
          onClickQuickView();
        }
      }
    };
  }

  renderCardClassName(hideOnDesktop, styleOverride) {
    const result = hideOnDesktop ? css.cardHideOnDesktop : css.card;
    return wcx(result, styleOverride.card);
  }
  /**
   * Renders the number of variants available on the card like color, flavor, teams etc.
   * @param {*} props props passed to the Card to extract variant counts
   */
  renderVariantCount(props) {
    const { colorCount, patternCount, teamCount, flavourCount, rating, shippingPrice } = props; // eslint-disable-line object-curly-newline
    let count = 0;
    let countText = '';
    if (colorCount) {
      count = colorCount;
      [countText] = COUNT_TEXT;
    } else if (patternCount) {
      count = patternCount;
      [, countText] = COUNT_TEXT;
    } else if (teamCount) {
      count = teamCount;
      [, , countText] = COUNT_TEXT;
    } else if (flavourCount) {
      count = flavourCount;
      [, , , countText] = COUNT_TEXT;
    } else if (shippingPrice) {
      count = 2; // adding count to pass the condition
    }
    if (/^[0-9]+$/.test(parseInt(count, 10)) && parseInt(count, 10) > 1) {
      if (rating) {
        return (
          <Fragment>
            <span className="c-product__colors-available d-block mb-half pb-quarter">
              {SHIPPING_MESSAGE} {shippingPrice || `${count} ${countText} available`}
            </span>
          </Fragment>
        );
      }
      return (
        <span className="c-product__colors-available m-noratings d-block mb-half pb-quarter">
          {SHIPPING_MESSAGE} {shippingPrice || `${count} ${countText} available`}
        </span>
      );
    }
    return <span className="c-product__colors-available d-block mb-md-half pb-md-quarter"></span>;
  }

  renderImage(props) {
    const { image, loaderImg, imageAltText, isLazyLoad } = props; // eslint-disable-line object-curly-newline
    if (isLazyLoad) {
      return (
        <Fragment>
          <span className="w-100 my-4 c-product__lazyspinner" />
          <img
            src={loaderImg}
            data-src={image}
            alt={imageAltText}
            className={`${css.hoverImage} w-100 pt-3 pb-1 pb-md-0 pt-md-1 px-1 px-md-2 d-none h-lazyloadimg`}
          />
        </Fragment>
      );
    }
    return <img src={image} alt={imageAltText} className={`${css.hoverImage} w-100 pt-3 pb-1 pb-md-0 pt-md-1 px-1 px-md-2`} />;
  }

  render() {
    const {
      title,
      description,
      image,
      rating,
      priceObject,
      badge,
      promoMessage,
      horizontalMobile,
      isGiftCard,
      partNumber,
      enableQuickView,
      onClickQuickView = () => null,
      focusCardOnQuickViewClose,
      anchorId,
      quickViewAuid,
      productIdx
    } = this.props;
    return (
      <div
        className={cx(
          { vertical: !horizontalMobile },
          { horizontal: horizontalMobile },
          'product-card',
          css.productCard,
          horizontalMobile ? css.horizontal : '',
          enableQuickView ? 'c-product__has-quickview' : ''
        )}
        data-productidx={productIdx}
      >
        <div
          className={cx(
            { 'col-5': horizontalMobile },
            { 'col-12': !horizontalMobile },
            ` ${css.imageContainer} col-md-12 flex-sm-grow position-relative`
          )}
        >
          {image && this.renderImage(this.props)}
          {!image && <div className="" />}
          {badge &&
            (horizontalMobile ? (
              <Badge className="c-product__badge" smallBadge text={badge}>
                {badge}
              </Badge>
            ) : (
              <Badge className="c-product__badge" text={badge}>
                {badge}
              </Badge>
            ))}
          {enableQuickView && (
            <Button
              size="S"
              auid={quickViewAuid}
              className={`c-product__quickviewbtn ${css.quickView}`}
              onClick={this.wrapClickViewClick(onClickQuickView, focusCardOnQuickViewClose, anchorId)}
            >
              Quick View
            </Button>
          )}
        </div>
        <div className={cx({ 'col-7': horizontalMobile }, { 'col-12 px-1 px-md-2': !horizontalMobile }, 'col-md-12 pt-2 pb-2 pb-md-4')}>
          <div className="c-product__title mb-0 mb-md-half">{title}</div>
          <p className="c-product__description mb-0">{description}</p>
          <div className="c-product__ratings-reviews my-quarter d-flex align-items-center flex-wrap">
            <Rating value={rating} />
            {typeof rating === 'string' &&
              rating.trim().length !== 0 &&
              rating !== '0' && <span className="product-card-reviews" data-bv-show="inline_rating" data-bv-product-id={partNumber} />}
          </div>
          {this.renderVariantCount(this.props)}
          {!isGiftCard && <hr className={`m-0 ${css.hrStyles}`} />}
          {!isGiftCard && (
            <section className="mt-half">
              {priceObject && <PriceDetails {...priceObject} />}
              {promoMessage && (
                <div className="c-product_promomsg">
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
  isGiftCard: PropTypes.bool,
  badge: PropTypes.string,
  partNumber: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  enableQuickView: PropTypes.bool,
  onClickQuickView: PropTypes.func,
  quickViewAuid: PropTypes.string,
  isLazyLoad: PropTypes.bool,
  loaderImg: PropTypes.any,
  productIdx: PropTypes.number,
  anchorId: PropTypes.string,
  focusCardOnQuickViewClose: PropTypes.bool
};

export default HybridCard;
