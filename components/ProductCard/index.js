import React, { Component } from "react";
import PropTypes from "prop-types";
import { getCardProps } from "./lib/helpers";
import Card from "../Card";

class ProductCard extends Component {
  render() {
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
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  price: PropTypes.string,
  badge: PropTypes.string,
  titleMaxCC: PropTypes.number,
  descriptionMaxCC: PropTypes.number
};

export default ProductCard;
