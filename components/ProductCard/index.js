import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "../Card";

class ProductCard extends Component {
  render() {
    let { product } = this.props; // eslint-disable-line
    return (
      <Card
        image={product.imageUrl}
        title={product.title}
        heading={product.title}
        description={product.shortDescription}
        rating={product.rating}
        price={product.price}
      />
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    shortDescription: PropTypes.string,
    price: PropTypes.number
  })
};

export default ProductCard;
