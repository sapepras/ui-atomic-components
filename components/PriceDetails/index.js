import React, { PureComponent } from 'react';
import { productDetailPropTypes } from './lib/PropTypes';
import PriceTypes from './lib/PriceTypes';
import { determinePriceObjectFromProductInfo, determinePriceObjectFromProduct, determinePriceObjectFromProps } from './lib/util';
import { CallFor, Clearance, ClearanceRange, InCartPlusCompare, Range, Standard, WasNow } from './lib/components';

class PriceDetails extends PureComponent {
  render() {
    const { priceType, product, productSchema, ...remainingProps } = this.props; // eslint-disable-line object-curly-newline
    let mergedProps = remainingProps;
    let newPriceType = priceType;
    if (!priceType) {
      if (product && productSchema && productSchema.toLowerCase() === 'product') {
        mergedProps = determinePriceObjectFromProduct(remainingProps, product);
        newPriceType = mergedProps.priceType;
      } else if (product && productSchema && productSchema.toLowerCase() === 'productinfo') {
        mergedProps = determinePriceObjectFromProductInfo(remainingProps, product);
        newPriceType = mergedProps.priceType;
      } else {
        mergedProps = determinePriceObjectFromProps(remainingProps);
        newPriceType = mergedProps.priceType;
      }
    }

    switch (newPriceType) {
      case PriceTypes.standard:
        return <Standard {...mergedProps} />;

      case PriceTypes.callFor:
        return <CallFor {...mergedProps} />;

      case PriceTypes.clearance:
        return <Clearance {...mergedProps} />;

      case PriceTypes.clearanceRange:
        return <ClearanceRange {...mergedProps} />;

      case PriceTypes.drop:
        return <WasNow {...mergedProps} />;

      case PriceTypes.hotDeal:
        return <WasNow {...mergedProps} />;

      case PriceTypes.inCartPlusCompare:
        return <InCartPlusCompare {...mergedProps} />;

      case PriceTypes.range:
        return <Range {...mergedProps} />;

      case PriceTypes.wasNow:
        return <WasNow {...mergedProps} />;

      default:
        return <Standard {...mergedProps} />;
    }
  }
}

PriceDetails.propTypes = productDetailPropTypes;

export default PriceDetails;
