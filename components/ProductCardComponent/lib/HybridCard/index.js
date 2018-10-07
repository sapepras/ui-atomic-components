import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { cx } from 'emotion';
import css from './lib/css';
import { productDetailPropTypes } from '../../../PriceDetails/lib/PropTypes';

import Badge from '../../../Badge';
import Button from '../../../Button';
import Rating from '../../../Rating';
import PriceDetails from '../../../PriceDetails';

const wcx = (style, styleOverride) => (styleOverride ? cx(style, styleOverride) : style);

class HybridCard extends Component {
  wrapClickViewClick(onClickQuickView) {
    return e => {
      e.preventDefault();
      e.stopPropagation();
      if (onClickQuickView) {
        onClickQuickView();
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
    const { colorCount, patternCount, teamCount, flavourCount, rating } = props;
    let count = 0;
    let countText = '';
    if (colorCount) {
      count = colorCount;
      countText = 'colors';
    } else if (patternCount) {
      count = patternCount;
      countText = 'patterns';
    } else if (teamCount) {
      count = teamCount;
      countText = 'teams';
    } else if (flavourCount) {
      count = flavourCount;
      countText = 'flavors';
    }
    if (/^[0-9]+$/.test(parseInt(count, 10)) && parseInt(count, 10) > 1) {
      if (rating) {
        return (
          <Fragment>
            <span aria-hidden>&nbsp;|&nbsp;</span>
            <span className="c-product__colors-available ">
              {count} {countText} available
            </span>
          </Fragment>
        );
      }
      return (
        <span className="c-product__colors-available m-noratings">
          {count} {countText} available
        </span>
      );
    }
    return null;
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
      horizontalMobile,
      isGiftCard,
      partNumber,
      enableQuickView,
      isRemovable,
      isMoveToCart,
      onClickQuickView = () => null,
      quickViewAuid,
      removeLabel,
      moveToCartLabel,
      showOOS
    } = this.props; // eslint-disable-line object-curly-newline
    return (
      <div
        className={cx(
          { vertical: !horizontalMobile },
          { horizontal: horizontalMobile },
          'product-card mb-quarter mb-md-4',
          css.productCard,
          horizontalMobile ? css.horizontal : '',
          enableQuickView ? 'c-product__has-quickview' : ''
        )}
      >
        <div className={cx({ 'col-5': horizontalMobile }, { 'col-12': !horizontalMobile }, 'col-md-12 flex-sm-grow position-relative')}>
          {isRemovable ? (
            <div className="d-flex flex-row">
              {image && <img src={image} alt={imageAltText} className={`${css.hoverImage} w-100 h-100 pt-3 pt-md-1 px-1 px-md-2`} />}
              <button className={`${css.removeIcon} academyicon icon-close pt-0 pt-md-1 pl-0 pr-1`} onClick={() => this.props.removeCardFunc()} />
            </div>
          ) : (
            <React.Fragment>
              {image && <img src={image} alt={imageAltText} className={`${css.hoverImage} w-100 pt-3 pt-md-1 px-1 px-md-2`} />}
              {!image && <div className="" />}
            </React.Fragment>
          )}
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
              onClick={this.wrapClickViewClick(onClickQuickView)}
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
            {typeof rating === 'string' &&
              rating.trim().length !== 0 &&
              rating !== '0' && <span className="product-card-reviews" data-bv-show="inline_rating" data-bv-product-id={partNumber} />}
            {this.renderVariantCount(this.props)}
          </div>
          {!isGiftCard && <hr className={`m-0 ${!this.props.borderStyle ? css.hrStyles : `${css.hrStyles} d-none d-sm-block`}`} />}
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
        {isMoveToCart && (
          <div className={cx({ 'col-12': horizontalMobile }, { 'col-12 px-1 px-md-2': !horizontalMobile }, 'col-md-12 pb-1 pb-md-3')}>
            {this.props.borderStyle && <hr className={`mb-1 mb-md-0 ${css.hrFullStyles}`} />}
            <div className="d-flex flex-row">
              <div className="d-flex align-items-center">
                <button className={`${css.iconBtn} pl-1 pl-md-0 pr-half pr-md-0`} onClick={() => this.props.removeCardFunc()}>
                  <i className={`${css.removeCircleIcon} academyicon icon-x-circle `} />
                </button>
                <span className={cx(css.removeText, 'pr-3 pr-md-0 flex-grow-0')}>{removeLabel}</span>
              </div>
              {showOOS ? (
                <span className={`${css.outOfStock} o-copy__20bold`}>Out of stock</span>
              ) : (
                <Button className={cx(css.moveToCartBtn, 'flex-grow-1')} size="S" onClick={this.props.moveToCartFunc}>
                  {moveToCartLabel}
                </Button>
              )}
            </div>
          </div>
        )}
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
  isRemovable: PropTypes.bool,
  isMoveToCart: PropTypes.bool,
  borderStyle: PropTypes.bool,
  removeCardFunc: PropTypes.func,
  moveToCartFunc: PropTypes.func,
  onClickQuickView: PropTypes.func,
  quickViewAuid: PropTypes.string,
  removeLabel: PropTypes.string,
  moveToCartLabel: PropTypes.string,
  showOOS: PropTypes.bool
};

export default HybridCard;
