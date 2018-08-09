import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getCardProps } from './lib/helpers';
import Card from '../Card';

// import failedOneJson from './lib/failed_1.json';
// import failedTwoJson from './lib/failed_2.json';
// import failedThreeJson from './lib/failed_3.json';

class ProductCard extends PureComponent {
  render() {
    // if (document && document.getElementsByClassName('rsg--sidebar-4').length > 0) {
    //   document.getElementsByClassName('rsg--sidebar-4')[0].style.display = 'none';
    // }
    const { product, ...remainingProps } = this.props; // eslint-disable-line

    return <Card {...getCardProps(product, remainingProps)} />;
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    manufacturer: PropTypes.string,
    name: PropTypes.string,
    imageURL: PropTypes.string,
    imageAltDescription: PropTypes.string,
    defaultSkuPrice: PropTypes.shape({
      minPriceRange: PropTypes.string,
      maxPriceRange: PropTypes.string,
      priceMessage: PropTypes.string,
      salePrice: PropTypes.string,
      listPrice: PropTypes.string,
      priceRange: PropTypes.string
    })
  }),
  isLazyLoad: PropTypes.bool,
  loaderImg: PropTypes.any,
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  price: PropTypes.string,
  badge: PropTypes.string,
  promoMessage: PropTypes.string,
  titleMaxCC: PropTypes.number,
  descriptionMaxCC: PropTypes.number
};

// ProductCard.failedOneJson = failedOneJson;
// ProductCard.failedTwoJson = failedTwoJson;
// ProductCard.failedThreeJson = failedThreeJson;

export default ProductCard;
