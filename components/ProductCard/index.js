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
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    shortDescription: PropTypes.string,
    longDescription: PropTypes.string
  }),
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  price: PropTypes.string,
  badge: PropTypes.string,
  titleMaxCC: PropTypes.number,
  descriptionMaxCC: PropTypes.number
};

export default ProductCard;
