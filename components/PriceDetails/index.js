import React from "react";
import PropTypes from "prop-types";
import Price from "../Price";

const PriceDetails = props => <Price {...props} />;

PriceDetails.propTypes = {
  price: PropTypes.string
};

export default PriceDetails;
