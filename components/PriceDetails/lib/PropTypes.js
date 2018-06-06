import PropTypes from 'prop-types';

export const productDetailChildPropTypes = {
  priceMessage: PropTypes.string,
  salePrice: PropTypes.string,
  listPrice: PropTypes.string,
  priceRange: PropTypes.string
};

export const productDetailPropTypes = {
  ...productDetailChildPropTypes,
  adBug: PropTypes.string
};
